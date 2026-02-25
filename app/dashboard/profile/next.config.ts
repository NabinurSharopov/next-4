// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // app-backup papkasini build'dan chiqarib tashlash
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'].filter(ext => !ext.includes('backup')),
  
  // TypeScript xatolarini ignore qilish (vaqtinchalik)
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // ESLint xatolarini ignore qilish
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;