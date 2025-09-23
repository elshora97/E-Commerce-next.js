import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },
  {
    rules: {
      // Disable problematic rules during deployment
      '@typescript-eslint/no-this-alias':
        process.env.NODE_ENV === 'production' ? 'off' : 'error',
      '@typescript-eslint/no-require-imports':
        process.env.NODE_ENV === 'production' ? 'off' : 'error',
    },
  },
];

export default eslintConfig;
