/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ptsaw.id"],
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
