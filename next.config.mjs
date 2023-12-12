/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  // basePath: "/design/static/starter-project/preview",
  // distDir: "preview",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "akcdn.detik.net.id",
        port: "",
        pathname: "**/*",
      },
    ],
  },
}

export default nextConfig
