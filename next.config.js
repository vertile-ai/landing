/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',   // This enables static site generation
  trailingSlash: true, // Adds trailing slashes to all routes
  images: {
    unoptimized: true, // For static export
  },
};

export default nextConfig; 