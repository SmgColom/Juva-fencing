/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "https://juva-fencing.vercel.app/",
          },
        ],
        destination: "https://juva-fencing.vercel.app//:path*",
        permanent: true,
      },

      
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "https://juva-fencing.vercel.app/",
          },
        ],
        destination: "https://juva-fencing.vercel.app/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
