import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { hostId } = req.body;
    if (!hostId) {
      return res.status(400).json({ error: 'hostId is required' });
    }
    try {
      const room = await prisma.room.create({
        data: {
          id: uuidv4(),
          createdAt: new Date(),
          question: null,
          revealed: false,
          hostId,
        },
      });
      return res.status(201).json(room);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to create room', details: error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 