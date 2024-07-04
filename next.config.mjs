/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "dev.unsined.com",
          },
        ]
    }
};

export default nextConfig;
