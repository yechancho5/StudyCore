import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roomId } = req.query;
  if (typeof roomId !== 'string') return res.status(400).json({ error: 'Invalid roomId' });

  if (req.method === 'GET') {
    try {
      const answers = await prisma.answer.findMany({
        where: { roomId },
        include: {
          user: true, // Include the user data
        },
        orderBy: { timestamp: 'asc' },
      });
      
      // Transform the data to include the localStorage userId
      const transformedAnswers = answers.map(answer => ({
        ...answer,
        userId: answer.user?.userId || answer.userId, // Use localStorage userId for frontend compatibility
      }));
      
      return res.status(200).json(transformedAnswers);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch answers', details: error });
    }
  }

  if (req.method === 'POST') {
    const { userId, username, text, drawingData } = req.body;
    if (!userId || !username || !text) {
      return res.status(400).json({ error: 'userId, username, and text are required' });
    }
    try {
      // Ensure user exists in the room and get their database ID
      const user = await prisma.user.upsert({
        where: { userId_roomId: { userId, roomId } },
        update: { lastSeen: new Date() },
        create: {
          userId,
          username,
          roomId,
          lastSeen: new Date(),
        },
      });

      const answer = await prisma.answer.create({
        data: {
          roomId,
          userId: user.id, // Use the database User.id, not the localStorage userId
          username,
          text,
          drawingData: drawingData || null,
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