/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "edaptdevazure.azurewebsites.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "azedaptdevlrsstr.blob.core.windows.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "edaptapidev.azurewebsites.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
