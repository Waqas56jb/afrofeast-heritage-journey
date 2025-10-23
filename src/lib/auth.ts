import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from './database';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

export interface User {
  id: number;
  email: string;
  phone?: string;
  country: string;
  heritage_connection?: string;
  other_heritage?: string;
  terms_accepted: boolean;
  content_sharing_consent: boolean;
  created_at: Date;
}

export interface SignupData {
  email: string;
  password: string;
  phone?: string;
  country: string;
  heritage_connection?: string;
  other_heritage?: string;
  terms_accepted: boolean;
  content_sharing_consent: boolean;
}

export interface LoginData {
  email: string;
  password: string;
}

// Hash password
export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
};

// Verify password
export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

// Generate JWT token
export const generateToken = (userId: number): string => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });
};

// Verify JWT token
export const verifyToken = (token: string): { userId: number } | null => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };
    return decoded;
  } catch (error) {
    return null;
  }
};

// Create new user
export const createUser = async (userData: SignupData): Promise<User> => {
  const connection = await pool.getConnection();
  
  try {
    const hashedPassword = await hashPassword(userData.password);
    
    const [result] = await connection.execute(
      `INSERT INTO users (email, password, phone, country, heritage_connection, other_heritage, terms_accepted, content_sharing_consent) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        userData.email,
        hashedPassword,
        userData.phone || null,
        userData.country,
        userData.heritage_connection || null,
        userData.other_heritage || null,
        userData.terms_accepted,
        userData.content_sharing_consent
      ]
    );
    
    const insertResult = result as any;
    const userId = insertResult.insertId;
    
    // Get the created user (without password)
    const [rows] = await connection.execute(
      'SELECT id, email, phone, country, heritage_connection, other_heritage, terms_accepted, content_sharing_consent, created_at FROM users WHERE id = ?',
      [userId]
    );
    
    const users = rows as User[];
    return users[0];
  } finally {
    connection.release();
  }
};

// Find user by email
export const findUserByEmail = async (email: string): Promise<User & { password: string } | null> => {
  const connection = await pool.getConnection();
  
  try {
    const [rows] = await connection.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );
    
    const users = rows as (User & { password: string })[];
    return users[0] || null;
  } finally {
    connection.release();
  }
};

// Find user by ID
export const findUserById = async (id: number): Promise<User | null> => {
  const connection = await pool.getConnection();
  
  try {
    const [rows] = await connection.execute(
      'SELECT id, email, phone, country, heritage_connection, other_heritage, terms_accepted, content_sharing_consent, created_at FROM users WHERE id = ?',
      [id]
    );
    
    const users = rows as User[];
    return users[0] || null;
  } finally {
    connection.release();
  }
};

// Check if email exists
export const emailExists = async (email: string): Promise<boolean> => {
  const user = await findUserByEmail(email);
  return user !== null;
};
