import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roomId } = req.query;
  if (typeof roomId !== 'string') return res.status(400).json({ error: 'Invalid roomId' });

  if (req.method === 'POST') {
    const { hostId, targetUserId } = req.body;
    
    if (!hostId || !targetUserId) {
      return res.status(400).json({ error: 'hostId and targetUserId are required' });
    }

    try {
      // Verify the room exists and the user is the host
      const room = await prisma.room.findUnique({
        where: { id: roomId },
      });

      if (!room) {
        return res.status(404).json({ error: 'Room not found' });
      }

      if (room.hostId !== hostId) {
        return res.status(403).json({ error: 'Only the host can kick users' });
      }

      // Prevent host from kicking themselves
      if (hostId === targetUserId) {
        return res.status(400).json({ error: 'Host cannot kick themselves' });
      }

      // Find the target user
      const targetUser = await prisma.user.findFirst({
        where: { userId: targetUserId, roomId },
      });

      if (!targetUser) {
        return res.status(404).json({ error: 'User not found in room' });
      }

      // Delete the user and all their answers
      await prisma.answer.deleteMany({
        where: { userId: targetUser.id },
      });

      await prisma.user.delete({
        where: { id: targetUser.id },
      });

      return res.status(200).json({ message: 'User kicked successfully' });
    } catch (error) {
      console.error('Error kicking user:', error);
      return res.status(500).json({ error: 'Failed to kick user', details: error });
    }
  }

  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
