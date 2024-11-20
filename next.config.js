/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_PUBLIC_EMAILJS_KEY: process.env.API_PUBLIC_EMAILJS_KEY,
    API_TEMPLATE_EMAILJS_KEY: process.env.API_TEMPLATE_EMAILJS_KEY,
    API_PRIVATE_EMAILJS_KEY: process.env.API_PRIVATE_EMAILJS_KEY,
  },
};

module.exports = nextConfig;
