import { chakra } from "@chakra-ui/react";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/abouttt", // The path redirect from
        destination: "/about", // The path redirect to
        permanent: true, // Permanent redirecting
      },
    ];
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

export default nextConfig;
