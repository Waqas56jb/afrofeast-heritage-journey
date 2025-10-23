import { NextRequest, NextResponse } from 'next/server';
import { findUserByEmail, verifyPassword, generateToken } from '@/lib/auth';
import { initializeDatabase } from '@/lib/database';

export async function POST(request: NextRequest) {
  try {
    // Initialize database if needed
    await initializeDatabase();
    
    const body = await request.json();
    const { email, password } = body;
    
    // Validate required fields
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }
    
    // Find user by email
    const user = await findUserByEmail(email);
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }
    
    // Verify password
    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }
    
    // Generate JWT token
    const token = generateToken(user.id);
    
    // Create response with user data (without password)
    const userResponse = {
      id: user.id,
      email: user.email,
      phone: user.phone,
      country: user.country,
      heritage_connection: user.heritage_connection,
      other_heritage: user.other_heritage,
      terms_accepted: user.terms_accepted,
      content_sharing_consent: user.content_sharing_consent,
      created_at: user.created_at
    };
    
    // Set HTTP-only cookie with token
    const response = NextResponse.json({
      success: true,
      message: 'Login successful!',
      user: userResponse
    });
    
    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });
    
    return response;
    
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Login failed. Please try again.' },
      { status: 500 }
    );
  }
}
