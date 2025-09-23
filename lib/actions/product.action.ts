import { LATEST_PRODUCTS_LIMIT } from '../constants';
import { prisma } from '../../db/prisma';

//get latest products

export const getLatestProducts = async () => {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: 'desc' },
  });

  return data;
};
