import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roomId } = req.query;
  if (typeof roomId !== 'string' || roomId.trim() === '') {
  return res
    .status(400)
    .json({ success: false, error: { code: 'BAD_INPUT', message: 'roomId is required' } });
}

  if (req.method === 'GET') {
    try {
      const room = await prisma.room.findUnique({
        where: { id: roomId },
        select: { id: true, question: true, revealed: true, hostId: true} // minimal UI payload
      });
      if (!room) {
        return res
          .status(404)
          .json({ success: false, error: { code: 'NOT_FOUND', message: 'Room not found' } });
      }
      return res.status(200).json({ success: true, data: room });
    } catch (error) {
      return res
      .status(500)
      .json({ success: false, error: {code: 'DB_ERROR', message: 'Could not fetch room. Please try again.'} } );
    }
  }

  if (req.method === 'PATCH') {
    const { question, revealed } = req.body;
    const hasQuestion = Object.prototype.hasOwnProperty.call(req.body ?? {}, 'question');
    const hasRevealed = Object.prototype.hasOwnProperty.call(req.body ?? {}, 'revealed');

    if (!hasQuestion && !hasRevealed) {
      return res
        .status(400)
        .json({ success: false, error: { code: 'BAD_INPUT', message: 'Provide question and/or revealed' } });
    }
    
    try {
      // Build data object only with provided fields
      const updateData: any = {};
      if (hasQuestion) updateData.question = question;
      if (hasRevealed) updateData.revealed = revealed;

      // CASE A: new question provided AND revealed explicitly false → update + clear answers
      if (hasQuestion && hasRevealed && revealed === false) {
        const [updated] = await prisma.$transaction([
          prisma.room.update({
            where: { id: roomId },
            data: { question, revealed }, // both present
            select: { id: true, question: true, revealed: true }
          }),
          prisma.answer.deleteMany({ where: { roomId } })
        ]);
        return res.status(200).json({ success: true, data: updated });
      }

      // CASE B: normal partial update (one or both fields provided), no clearing
      const updated = await prisma.room.update({
        where: { id: roomId },
        data: updateData,
        select: { id: true, question: true, revealed: true }
      });
      return res.status(200).json({ success: true, data: updated });

    } catch (error) {
      return res
        .status(500)
        .json({ success: false, error: {code: 'DB_ERROR', message: 'Could not update room. Please try again.'} });
    }
  }

  res.setHeader('Allow', ['GET', 'PATCH']);
  return res
    .status(405)
    .json({ success: false, error: { code: 'METHOD_NOT_ALLOWED', message: 'Use GET, PATCH' } });

} 