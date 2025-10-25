import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET() {
  try {
    console.log("Testing database connection...");
    console.log("DB_HOST:", process.env.DB_HOST);
    console.log("DB_NAME:", process.env.DB_NAME);
    console.log("DB_USER:", process.env.DB_USER);

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: parseInt(process.env.DB_PORT || "3306"),
      ssl: {
        rejectUnauthorized: false,
      },
    });

    // Test connection
    const [rows] = await connection.execute("SELECT 1 as test, NOW() as current_time");
    await connection.end();

    return NextResponse.json({
      success: true,
      message: "Database connection successful!",
      data: (rows as any)[0],
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Database connection failed:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Database connection failed",
        error: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    );
  }
}
