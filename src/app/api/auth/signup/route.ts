import { NextRequest, NextResponse } from 'next/server';
import { createUser, emailExists, SignupData } from '@/lib/auth';
import { initializeDatabase } from '@/lib/database';

export async function POST(request: NextRequest) {
  try {
    // Initialize database if needed
    await initializeDatabase();
    
    const body: SignupData = await request.json();
    
    // Validate required fields
    if (!body.email || !body.password || !body.country) {
      return NextResponse.json(
        { error: 'Email, password, and country are required' },
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }
    
    // Validate password length
    if (body.password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters long' },
        { status: 400 }
      );
    }
    
    // Check if terms are accepted
    if (!body.terms_accepted) {
      return NextResponse.json(
        { error: 'You must accept the Terms & Cultural Guidelines' },
        { status: 400 }
      );
    }
    
    // Check if email already exists
    if (await emailExists(body.email)) {
      return NextResponse.json(
        { error: 'An account with this email already exists' },
        { status: 409 }
      );
    }
    
    // Create user
    const user = await createUser(body);
    
    return NextResponse.json({
      success: true,
      message: 'Account created successfully!',
      user: {
        id: user.id,
        email: user.email,
        phone: user.phone,
        country: user.country,
        heritage_connection: user.heritage_connection,
        other_heritage: user.other_heritage,
        created_at: user.created_at
      }
    });
    
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Failed to create account. Please try again.' },
      { status: 500 }
    );
  }
}
