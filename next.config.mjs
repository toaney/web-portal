

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    unoptimized: true
  },
  // transpilePackages: [
  //   '@adobe/react-spectrum',
  //   '@react-spectrum/*',
  //   '@spectrum-icons/*',
  // ].flatMap(spec => glob.sync(`${spec}`, { cwd: 'node_modules/' })),
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  async headers() {
    return [
        {
            // matching all API routes
            source: "/api/:path*",
            headers: [
                { key: "Access-Control-Allow-Credentials", value: "true" },
                { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
        }
    ]
}
};

export default nextConfig;



// // import localesPlugin from '@react-aria/optimize-locales-plugin';
// import glob from 'glob';

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // webpack(config, { isServer }) {
//   //   if (!isServer) {
//   //     // Don't include any locale strings in the client JS bundle.
//   //     config.plugins.push(localesPlugin.webpack({ locales: [] }));
//   //   }
//   //   return config;
//   // },
//   transpilePackages: [
//     '@adobe/react-spectrum',
//     '@react-spectrum/*',
//     '@spectrum-icons/*',
//   ].flatMap(spec => glob.sync(`${spec}`, { cwd: 'node_modules/' })),
// }

// module.exports = nextConfig