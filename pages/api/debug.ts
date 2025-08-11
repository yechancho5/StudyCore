import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Test if we can import Prisma
      const { PrismaClient } = await import('@prisma/client');
      
      // Test if we can create a client
      const prisma = new PrismaClient();
      
      // Test if we can connect
      await prisma.$connect();
      
      return res.status(200).json({
        success: true,
        message: 'Prisma client working',
        nodeEnv: process.env.NODE_ENV,
        databaseUrlExists: !!process.env.DATABASE_URL,
        timestamp: new Date().toISOString()
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        error: error.message,
        name: error.name,
        nodeEnv: process.env.NODE_ENV,
        databaseUrlExists: !!process.env.DATABASE_URL,
        timestamp: new Date().toISOString()
      });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
