/* disable-eslint */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'i.imgur.com',
      'www.vectorlogo.zone',
      'upload.wikimedia.org',
      'upload.vectorlogo.zone',
      'raw.githubusercontent.com',
      'user-images.githubusercontent.com',
    ],
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    GMAIL_ID: process.env.GMAIL_ID,
    GMAIL_PASSWORD: process.env.GMAIL_PASSWORD,
    GMAIL_TO: process.env.GMAIL_TO,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    SECRET_KEY: process.env.SECRET_KEY,
  },

  compiler: {
    styledComponents: true,
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
