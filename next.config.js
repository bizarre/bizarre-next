const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin({ identifiers: "short" });

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fetchCache: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = withVanillaExtract(nextConfig);
