import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/measure-z",
        destination: "/",
        permanent: true,
      },
      {
        source: "/measure-z-berkeley",
        destination: "/",
        permanent: true,
      },
      {
        source: "/no-on-z",
        destination: "/",
        permanent: true,
      },
      {
        source: "/no-on-measure-z",
        destination: "/",
        permanent: true,
      },
      {
        source: "/noonz",
        destination: "/",
        permanent: true,
      },
      {
        source: "/calculator",
        destination: "/cost",
        permanent: true,
      },
      {
        source: "/tax",
        destination: "/cost",
        permanent: true,
      },
      {
        source: "/public-bank",
        destination: "/why-berkeley",
        permanent: true,
      },
      {
        source: "/public-bank-berkeley",
        destination: "/why-berkeley",
        permanent: true,
      },
      {
        source: "/berkeley-public-bank",
        destination: "/why-berkeley",
        permanent: true,
      },
      {
        source: "/public-bank-east-bay",
        destination: "/why-berkeley",
        permanent: true,
      },
      {
        source: "/measure-e",
        destination: "/",
        permanent: true,
      },
      {
        source: "/measure-e-berkeley",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ordinance",
        destination: "/fine-print",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
