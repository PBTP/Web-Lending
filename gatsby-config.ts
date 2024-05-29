import type { GatsbyConfig } from 'gatsby';
import path from 'path';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `몽글`,
    siteUrl: `https://mgmg.life`,
    description: `빠르고 확실한 반려견 출장 목욕 서비스`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `none`,
          quality: 100,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-RKBCHRSYZL', // Google Analytics / GA
        ],
        gtagConfig: {
          optimize_id: 'GTM-T9FW9RST', // Google Tag Manager / GTA
          anonymize_ip: true,
          cookie_expires: 1000,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
          //origin: "https://www.googletagmanager.com",
          delayOnRouteUpdate: 1000,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/logo.png',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://mgmg.life/',
        sitemap: 'https://mgmg.life/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};

export default config;
