// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v0.blob.com',
      },
      {
        protocol: 'https',
        hostname: 'sjc.microlink.io',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
    ],
  },
};
