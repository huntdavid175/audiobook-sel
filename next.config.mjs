/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.squarespace-cdn.com" },
      { protocol: "https", hostname: "marketplace.canva.com" },
      { protocol: "https", hostname: "s26162.pcdn.co" },
      { protocol: "https", hostname: "sdg-migration-met.s3.amazonaws.com" },
      { protocol: "https", hostname: "www.adobe.com" },
      { protocol: "https", hostname: "cdn.pastemagazine.com" },
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "design-assets.adobeprojectm.com" },
      { protocol: "https", hostname: "www.picmaker.com" },
      { protocol: "https", hostname: "d1csarkz8obe9u.cloudfront.net" },
      { protocol: "https", hostname: "beetifulbookcovers.com" },
      { protocol: "https", hostname: "cdn.myportfolio.com" },
    ],
  },
  rules: {},
};

export default nextConfig;
