/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /.webm$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/images/",
          outputPath: "public/images/",
          name: "[name].[ext]",
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
