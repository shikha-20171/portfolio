/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "miro.medium.com"
      },
      {
        protocol: "https",
        hostname: "techior.com"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "oyelabs.com"
      }
    ]
  }
};

export default nextConfig;
