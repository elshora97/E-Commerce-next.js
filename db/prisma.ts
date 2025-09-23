import { PrismaClient } from '../lib/generated/prisma';

// Extends the PrismaClient with a custom result transformer to convert the price and rating fields to strings.
export const prisma = new PrismaClient().$extends({
  result: {
    product: {
      price: {
        compute(product: { price: any }) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product: { rating: any }) {
          return product.rating.toString();
        },
      },
    },
  },
});
