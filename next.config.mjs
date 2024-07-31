/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? 'https://devbini.github.io/devbini.github.io/' : '',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
