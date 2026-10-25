import type { NextConfig } from 'next';
import { pages } from './lib/pages';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    // The first version of the nav pointed at these .html paths.
    return pages.map((page) => ({
      source: `${page.path}.html`,
      destination: page.path,
      permanent: false,
    }));
  },
};

export default nextConfig;
