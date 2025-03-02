// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["dev-team-server"],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "dev-team-server",
        port: "9008",
        pathname: "/api/refrences/v1.0/images/**",
      },
    ],
  },
};

export default nextConfig;
