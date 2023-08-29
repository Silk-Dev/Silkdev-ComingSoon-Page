/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true } ,

    experimental: {
        serverActions: true,
      },
    images: { unoptimized: true } 
}

module.exports = nextConfig
