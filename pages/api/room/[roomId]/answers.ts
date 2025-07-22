import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../../lib/prisma';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roomId } = req.query;
  if (typeof roomId !== 'string') return res.status(400).json({ error: 'Invalid roomId' });

  if (req.method === 'GET') {
    try {
      const answers = await prisma.answer.findMany({
        where: { roomId },
        orderBy: { timestamp: 'asc' },
      });
      return res.status(200).json(answers);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch answers', details: error });
    }
  }

  if (req.method === 'POST') {
    const { userId, username, text } = req.body;
    if (!userId || !username || !text) {
      return res.status(400).json({ error: 'userId, username, and text are required' });
    }
    try {
      const answer = await prisma.answer.create({
        data: {
          id: uuidv4(),
          roomId,
          userId,
          username,
          text,
          timestamp: new Date(),
          revealed: false,
        },
      });
      return res.status(201).json(answer);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to create answer', details: error });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
} 