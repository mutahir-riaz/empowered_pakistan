import jwt from 'jsonwebtoken';

// Define the payload type
interface JWTPayload {
  username: string;
  iat?: number;  // issued at timestamp
  exp?: number;  // expiration timestamp
}

const JWT_SECRET = process.env.JWT_SECRET || '';

export const createToken = (payload: JWTPayload): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
};

export const verifyToken = (token: string): JWTPayload | null => {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload;
  } catch {
    return null;
  }
};