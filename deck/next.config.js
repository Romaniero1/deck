/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
    AUTH_TOKEN:process.env.AUTH_TOKEN,
    TELEGRAM_TOKEN:process.env.TELEGRAM_TOKEN,
    CHATID:process.env.CHATID,
    PASS:process.env.PASS,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /.(gif|node|webm|mp4)$/i,
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
