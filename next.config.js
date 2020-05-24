const { resolve } = require("path");

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["~"] = resolve(__dirname, "src");
    return config;
  },
};

module.exports = nextConfig;
