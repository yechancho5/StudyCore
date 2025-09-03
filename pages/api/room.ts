import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma, prismaWithRetry } from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { hostId } = req.body;
    if (!hostId) {
      return res
      .status(400)
      .json({ success: false, error: {code: 'BAD_INPUT', message: 'hostId is required' } });
    }

    // minimal logs
    console.log('[POST /api/room] start');
    
    try {
      console.log('[POST /api/room] creating');
      const room = await prismaWithRetry(async () => {
        return await prisma.room.create({
          data: {
            createdAt: new Date(),
            question: null,
            revealed: false,
            hostId, // Use the hostId from the request body
          },
          select: {id: true, createdAt: true} // return only roomId + time
        });
      });
      console.log('[POST /api/room] success', room.id);
      return res.status(201).json({success: true, data: room});
    
    } catch (error) {
      console.error('[POST /api/room] error', error);
      return res
      .status(500)
      .json({ success: false, error: { code: 'DB_ERROR', message: 'Could not create room. Please try again.' } });
    } 

  } else {
    res.setHeader('Allow', ['POST']);
    res
    .status(405)
    .json({ success: false, error: { code: 'METHOD_NOT_ALLOWED', message: 'Use POST' } });
  }
} 