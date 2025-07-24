/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["a-us.storyblok.com", "interfacejournal.com"],
    unoptimized: true, // Add this for Netlify compatibility
  },
  output: 'export', // Add this for static site generation
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;