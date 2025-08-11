import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : [],
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
    // Better connection management for serverless
    __internal: {
      engine: {
        connectionLimit: 1, // Limit connections for serverless
      },
    },
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; 