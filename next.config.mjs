/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // next/image only optimizes remote images from hosts listed here.
    // Add the client's image host if photos come from somewhere else.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
