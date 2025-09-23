import { z } from 'zod';
import { insertProductSchema } from '@/lib/constants/validator';

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  createdAt: Date;
  rating: string;
  numReviews: number;
};
