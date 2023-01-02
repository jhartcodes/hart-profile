/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/hart-profile",
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
