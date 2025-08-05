/** @type {import('next').NextConfig} */
const nextConfig = {
  //   async redirects() {
  //   return [
  //     {
  //       source: '/:path*',
  //       has: [
  //         {
  //           type: 'host',
  //           value: 'www.childrenkare.com',
  //         },
  //       ],
  //       destination: 'https://childrenkare.com/:path*',
  //       permanent: true,
  //     },
  //     {
  //       source: '/:path*',
  //       has: [
  //         {
  //           type: 'protocol',
  //           value: 'http',
  //         },
  //       ],
  //       destination: 'https://childrenkare.com/:path*',
  //       permanent: true,
  //     },
  //   ];
  // },
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}'
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}'
    }
  },
  images: {
      domains: ['production.amwaus.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: '**'
      }
    ]
  },
   eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_APP_VERSION: 'v3.0.0',
    NEXTAUTH_SECRET: 'LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=',
    NEXTAUTH_URL: 'http://localhost:3000/',
    PUBLIC_URL : 'https://alpha02.amwaus.com/',
    // PUBLIC_URL : 'https://childrenkare.com/',
    // PUBLIC_URL : 'https://cktesting.amwaus.com/',
    // PUBLIC_URL : 'https://childrenkare.com/',
    NEXT_APP_GOOGLE_MAPS_API_KEY: 'AIzaSyAXv4RQK39CskcIB8fvM1Q7XCofZcLxUXw',
    NEXT_APP_MAPBOX_ACCESS_TOKEN: 'pk.eyJ1IjoicmFrZXNoLW5ha3JhbmkiLCJhIjoiY2xsNjNkZm0yMGhvcDNlb3phdjF4dHlzeiJ9.ps6azYbr7M3rGk_QTguMEQ',
    NEXT_APP_API_URL: 'https://production.amwaus.com/',
    //  NEXT_APP_API_URL: 'https://devian.amwaus.com/',
    NEXT_APP_JWT_SECRET: 'ikRgjkhi15HJiU78-OLKfjngiu',
    NEXT_APP_JWT_TIMEOUT: '86400',
    NEXTAUTH_SECRET_KEY: 'LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg='
  }
};

module.exports = nextConfig;
