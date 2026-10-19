/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow verification builds to use a separate output folder from the local dev server.
  distDir: process.env.QSS_BUILD_DIR ?? ".next",
};

export default nextConfig;
