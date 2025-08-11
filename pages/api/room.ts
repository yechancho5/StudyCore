import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { hostId } = req.body;
    if (!hostId) {
      return res.status(400).json({ error: 'hostId is required' });
    }
    // Debug environment variables
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL);
    console.log('DATABASE_URL starts with:', process.env.DATABASE_URL?.substring(0, 20));
    
    try {
      console.log('Attempting to create room with hostId:', hostId);
      const room = await prisma.room.create({
        data: {
          id: uuidv4(),
          createdAt: new Date(),
          question: null,
          revealed: false,
          hostId, // Use the hostId from the request body
        },
      });
      console.log('Room created successfully:', room.id);
      return res.status(201).json(room);
    } catch (error) {
      console.error('Failed to create room:', error);
      return res.status(500).json({ error: 'Failed to create room', details: error });
    } finally {
      // Ensure connection is properly closed in serverless environment
      if (process.env.NODE_ENV === 'production') {
        await prisma.$disconnect();
      }
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 