import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // When using `output: 'export'` (static export) the default Image Optimization API
  // isn't available. Disable optimization so `next/image` can be used for static export.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
