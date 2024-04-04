/* eslint-disable */
/** @type {import('next').NextConfig} */

import withPWA from '@ducanh2912/next-pwa'

const nextConfig = withPWA({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
})

export default nextConfig

// const nextConfig = {
//   reactStrictMode: true,
// }

// const withPWA = require('next-pwa')({
//   dest: 'public',
// })
// export default withPWA(nextConfig)
