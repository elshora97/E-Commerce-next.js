export const APP_NAME = process.env.NEXT_PUPLIC_APP_NAME || 'Prostore';
export const APP_DESCRIPTION =
  process.env.NEXT_PUPLIC_APP_DESCRIPTION ||
  'A modern Ecommerce platform built with Next.js';
export const SERVER_URL =
  process.env.NEXT_PUPLIC_SERVER_URL || 'http://localhost:3000';
export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;

export const signInDefaultValues = {
  email: '',
  password: '',
};

export const signUpDefaultValues = {
  name: 'Steve Smith',
  email: 'steve@example.com',
  password: 'password',
  confirmPassword: 'password',
};
