/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true,
  },
  images: {
    unoptimized: true,
    domains: [
      "images.unsplash.com",
      "wedding-rsvp-zate.appspot.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
