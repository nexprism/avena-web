/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "37.27.204.91",

      },
    ],
  },
};

export default nextConfig;
