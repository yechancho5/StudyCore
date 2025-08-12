import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('Testing database connection...');
    console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Set' : 'Not set');
    
    // Test basic connection
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log('Database connection successful:', result);
    
    return res.status(200).json({ 
      success: true, 
      message: 'Database connection working',
      result 
    });
  } catch (error: any) {
    console.error('Database connection failed:', error);
    return res.status(500).json({ 
      success: false, 
      error: error.message,
      name: error.name,
      code: error.code
    });
  }
}
