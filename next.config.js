/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "sv"],
    localeDetection: false
  },
  async redirects() {
    return [
      {
        source: "/",
        has: [
          {
            type: "query",
            key: "withoutLocale",
            value: "true",
          },
        ],
        permanent: false,
        destination: "/redirected",
      },
      {
        source: "/",
        has: [
          {
            type: "query",
            key: "withLocale",
            value: "true",
          },
        ],
        locale: false,
        permanent: false,
        destination: "/redirected",
      },
    ]
  },
}

module.exports = nextConfig
