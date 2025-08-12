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
    // Add connection retry logic
    errorFormat: 'pretty',
  });

// Add connection retry wrapper
export const prismaWithRetry = async (operation: () => Promise<any>, maxRetries = 3) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await operation();
    } catch (error: any) {
      if (error?.name === 'PrismaClientInitializationError' && i < maxRetries - 1) {
        console.log(`Database connection failed, retrying... (attempt ${i + 1}/${maxRetries})`);
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1))); // Exponential backoff
        continue;
      }
      throw error;
    }
  }
};

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; 