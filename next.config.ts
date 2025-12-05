import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  crossOrigin: 'anonymous',
  turbopack: {
    root: path.join(__dirname, '..'),
  }

};

export default nextConfig;
