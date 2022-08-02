/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['upload.wikimedia.org', 'links.papareact.com']
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoicGFzY3VjaCIsImEiOiJjbDJzcjVzOWEwMWhsM2RvOXM4c2x3ZDExIn0.MHtq4GI2KxqTHUqG58MfiQ'
  }
}

module.exports = nextConfig
