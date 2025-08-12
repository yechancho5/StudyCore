import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roomId } = req.query;
  if (typeof roomId !== 'string') return res.status(400).json({ error: 'Invalid roomId' });

  if (req.method === 'GET') {
    try {
      const room = await prisma.room.findUnique({ where: { id: roomId } });
      if (!room) return res.status(404).json({ error: 'Room not found' });
      
      const users = await prisma.user.findMany({
        where: { roomId },
        orderBy: { createdAt: 'asc' },
      });
      
      // Sort users to put host first
      const sortedUsers = users.sort((a, b) => {
        if (a.userId === room.hostId) return -1;
        if (b.userId === room.hostId) return 1;
        return 0;
      });
      
      return res.status(200).json(sortedUsers);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch users', details: error });
    }
  }

  if (req.method === 'POST') {
    const { userId, username } = req.body;
    if (!userId || !username) {
      return res.status(400).json({ error: 'userId and username are required' });
    }
    console.log('Attempting to add user to room:', { roomId, userId, username });
    
    // Check if room exists first
    const room = await prisma.room.findUnique({ where: { id: roomId } });
    if (!room) {
      console.error('Room not found:', roomId);
      return res.status(404).json({ error: 'Room not found' });
    }
    console.log('Room found:', room.id);
    
    try {
      // Check if user already exists in this room
      const existingUser = await prisma.user.findFirst({
        where: { userId, roomId },
      });

      if (existingUser) {
        // Update lastSeen and username
        console.log('Updating existing user:', existingUser.id);
        const user = await prisma.user.update({
          where: { id: existingUser.id },
          data: { 
            lastSeen: new Date(),
            username 
          },
        });
        return res.status(200).json(user);
      } else {
        // Create new user
        console.log('Creating new user with roomId:', roomId);
        const user = await prisma.user.create({
          data: {
            userId,
            username,
            roomId,
            lastSeen: new Date(),
          },
        });
        console.log('User created successfully:', user.id);
        return res.status(201).json(user);
      }
    } catch (error) {
      console.error('Error creating/updating user:', error);
      return res.status(500).json({ error: 'Failed to create/update user', details: error });
    }
  }

  if (req.method === 'DELETE') {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ error: 'userId is required' });
    }
    try {
      await prisma.user.deleteMany({
        where: { userId, roomId },
      });
      return res.status(200).json({ message: 'User removed from room' });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to remove user', details: error });
    }
  }

  res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
