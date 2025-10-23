import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, findUserById } from './auth';

export interface AuthenticatedRequest extends NextRequest {
  user?: {
    id: number;
    email: string;
    phone?: string;
    country: string;
    heritage_connection?: string;
    other_heritage?: string;
    terms_accepted: boolean;
    content_sharing_consent: boolean;
    created_at: Date;
  };
}

export async function authenticateUser(request: NextRequest) {
  try {
    // Get token from cookie
    const token = request.cookies.get('auth-token')?.value;
    
    if (!token) {
      return { user: null, error: 'No authentication token found' };
    }
    
    // Verify token
    const decoded = verifyToken(token);
    if (!decoded) {
      return { user: null, error: 'Invalid authentication token' };
    }
    
    // Get user from database
    const user = await findUserById(decoded.userId);
    if (!user) {
      return { user: null, error: 'User not found' };
    }
    
    return { user, error: null };
  } catch (error) {
    return { user: null, error: 'Authentication failed' };
  }
}

export function requireAuth(handler: (request: AuthenticatedRequest) => Promise<NextResponse>) {
  return async (request: NextRequest) => {
    const { user, error } = await authenticateUser(request);
    
    if (!user) {
      return NextResponse.json(
        { error: error || 'Authentication required' },
        { status: 401 }
      );
    }
    
    // Add user to request object
    (request as AuthenticatedRequest).user = user;
    
    return handler(request as AuthenticatedRequest);
  };
}
