import { NextRequest, NextResponse } from "next/server";
import { createUser, emailExists, SignupData } from "@/lib/auth";
import { initializeDatabase } from "@/lib/database";

export async function POST(request: NextRequest) {
  try {
    console.log("🔍 SIGNUP DEBUG: Starting signup process...");
    console.log("Environment check:");
    console.log("DB_HOST:", process.env.DB_HOST);
    console.log("DB_USER:", process.env.DB_USER);
    console.log("DB_NAME:", process.env.DB_NAME);
    console.log("NODE_ENV:", process.env.NODE_ENV);

    // Initialize database if needed
    console.log("🔍 SIGNUP DEBUG: Initializing database...");
    await initializeDatabase();
    console.log("✅ Database initialization completed");

    const body: SignupData = await request.json();
    console.log("🔍 SIGNUP DEBUG: Request body received:", body);

    // Validate required fields
    if (!body.email || !body.password || !body.country) {
      return NextResponse.json(
        { error: "Email, password, and country are required" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
    }

    // Validate password length
    if (body.password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters long" },
        { status: 400 },
      );
    }

    // Check if terms are accepted
    if (!body.terms_accepted) {
      return NextResponse.json(
        { error: "You must accept the Terms & Cultural Guidelines" },
        { status: 400 },
      );
    }

    // Check if email already exists
    console.log("🔍 SIGNUP DEBUG: Checking if email exists...");
    if (await emailExists(body.email)) {
      console.log("❌ Email already exists");
      return NextResponse.json(
        { error: "An account with this email already exists" },
        { status: 409 },
      );
    }
    console.log("✅ Email is unique");

    // Create user
    console.log("🔍 SIGNUP DEBUG: Creating user...");
    const user = await createUser(body);
    console.log("✅ User created successfully:", user.id);

    return NextResponse.json({
      success: true,
      message: "Account created successfully!",
      user: {
        id: user.id,
        email: user.email,
        phone: user.phone,
        country: user.country,
        heritage_connection: user.heritage_connection,
        other_heritage: user.other_heritage,
        created_at: user.created_at,
      },
    });
  } catch (error) {
    console.error("❌ SIGNUP ERROR:", error);
    console.error("Error message:", error instanceof Error ? error.message : "Unknown error");
    console.error("Error stack:", error instanceof Error ? error.stack : "No stack trace");
    return NextResponse.json(
      {
        error: "Failed to create account. Please try again.",
        debug: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
