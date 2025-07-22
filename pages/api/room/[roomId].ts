import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roomId } = req.query;
  if (typeof roomId !== 'string') return res.status(400).json({ error: 'Invalid roomId' });

  if (req.method === 'GET') {
    try {
      const room = await prisma.room.findUnique({ where: { id: roomId } });
      if (!room) return res.status(404).json({ error: 'Room not found' });
      return res.status(200).json(room);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch room', details: error } );
    }
  }

  if (req.method === 'PATCH') {
    const { question, revealed } = req.body;
    try {
      const room = await prisma.room.update({
        where: { id: roomId },
        data: { question, revealed },
      });
      return res.status(200).json(room);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update room', details: error });
    }
  }

  res.setHeader('Allow', ['GET', 'PATCH']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
} 