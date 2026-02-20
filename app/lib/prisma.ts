import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient(); // reads DATABASE_URL from env