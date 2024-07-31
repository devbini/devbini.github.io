/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? 'https://github.com/devbini/devbini.github.io/tree/gh-pages' : '',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
