/** @type {import('next').NextConfig} */
const prefix =
    process.env.NODE_ENV === 'production' ? 'https://devbini.github.io/' : '';

const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    assetPrefix: prefix,
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
