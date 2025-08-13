import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roomId } = req.query;
  if (typeof roomId !== 'string') return res.status(400).json({ error: 'Invalid roomId' });

  if (req.method === 'GET') {
    try {
      const answers = await prisma.answer.findMany({
        where: { roomId },
        select: {
          id: true,
          roomId: true,
          userId: true,
          username: true,
          text: true,
          timestamp: true,
          revealed: true,
          user: {
            select: {
              userId: true,
            }
          }
        },
        orderBy: { timestamp: 'asc' },
      });
      
      // Transform the data to include the localStorage userId and parse drawing data
      const transformedAnswers = answers.map(answer => {
        let parsedData = null;
        let answerType = 'text';
        
        // Try to parse as drawing data (JSON)
        try {
          const parsed = JSON.parse(answer.text);
          if (parsed && typeof parsed === 'object' && parsed.objects) {
            // This looks like Fabric.js drawing data
            parsedData = parsed;
            answerType = 'drawing';
            console.log('Found drawing data for answer:', answer.id, 'objects count:', parsed.objects.length);
          }
        } catch (e) {
          // Not JSON, treat as regular text
          console.log('Not JSON data for answer:', answer.id, 'text preview:', answer.text.substring(0, 50));
        }
        
        return {
          ...answer,
          userId: answer.user?.userId || answer.userId, // Use localStorage userId for frontend compatibility
          text: answerType === 'text' ? answer.text : 'Drawing answer',
          drawingData: parsedData,
          answerType,
        };
      });
      
      return res.status(200).json(transformedAnswers);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch answers', details: error });
    }
  }

  if (req.method === 'POST') {
    const { userId, username, text, drawingData } = req.body;
    if (!userId || !username || (!text && !drawingData)) {
      return res.status(400).json({ error: 'userId, username, and either text or drawingData are required' });
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

      // Store drawing data as JSON string in text field
      const textToStore = drawingData ? JSON.stringify(drawingData) : text;
      console.log('Storing answer:', { 
        hasDrawingData: !!drawingData, 
        textLength: textToStore.length,
        textPreview: textToStore.substring(0, 100)
      });

      const answer = await prisma.answer.create({
        data: {
          roomId,
          userId: user.id, // Use the database User.id, not the localStorage userId
          username,
          text: textToStore,
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