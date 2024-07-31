/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/repository/' : '',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
