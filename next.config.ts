import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    // Will still allow production build with type errors!
    ignoreBuildErrors: true,
  },
  experimental: {
    // Disable file system watching for problematic directories
    optimizeCss: false,
  },
  webpack: (config, { dev, isServer }) => {
    // Add ignore patterns for Windows system directories
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: [
          '**/node_modules/**',
          '**/.git/**',
          '**/.next/**',
          '**/C:/Users/**/AppData/**',
          '**/C:/Users/**/Application Data/**',
          '**/C:/Users/**/Cookies/**',
          '**/C:/Users/**/Local Settings/**',
          '**/C:/Users/**/Recent/**',
          '**/C:/Users/**/SendTo/**',
          '**/C:/Users/**/Start Menu/**',
          '**/C:/Users/**/Templates/**',
          '**/C:/Windows/**',
          '**/C:/Program Files/**',
          '**/C:/Program Files (x86)/**',
        ],
      };
    }

    // Resolve symlinks to prevent scanning system directories
    config.resolve = {
      ...config.resolve,
      symlinks: false,
    };

    return config;
  },
};

export default nextConfig;
