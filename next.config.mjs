/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? process.env.DEPLOYED_GITHUB_PATH : "",
  basePath: isProd ? process.env.DEPLOYED_GITHUB_PATH : "",
  output: "export",
};

export default nextConfig;
