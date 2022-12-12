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
    SECRET: process.env.SECRET,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    GMAIL_TO: process.env.GMAIL_TO,
    GMAIL_REFRESH_TOKEN: process.env.GMAIL_REFRESH_TOKEN,
    GMAIL_ID: process.env.GMAIL_ID,
    GMAIL_CLIENT_SECRET: process.env.GMAIL_CLIENT_SECRET,
    GMAIL_CLIENT_ID: process.env.GMAIL_CLIENT_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    GMAIL_PASSWORD: process.env.GMAIL_PASSWORD,
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
