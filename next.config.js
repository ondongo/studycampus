const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          "images.unsplash.com",
          "example.com",
          "localhost:3000",
          "firebasestorage.googleapis.com",
          "ko-zua.vercel.app",
          "upload.wikimedia.org",
          "cdnwp.dealerk.com",
          "i.gaw.to",
          "googleusercontent.com",
          "lh3.googleusercontent.com",
          "static.wixstatic.com"
        ],
      },
};

module.exports = withNextIntl(nextConfig);
