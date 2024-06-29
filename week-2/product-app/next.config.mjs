/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'static.nike.com',
        port: '',
      },
      {
        hostname: 'fakestoreapi.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
