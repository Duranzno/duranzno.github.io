/* eslint-disable */
const { siteMetadata, pluginManifest: options } = require("./config")
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet-async`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-netlify`,
    'gatsby-plugin-robots-txt',
    {
      resolve: "gatsby-plugin-favicon",
      options: {
        logo: "./src/static/Alternative.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        head: true,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options,
    // },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: options.theme_color,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@common": "src/common",
          "@sections": "src/sections",
          "@components": "src/micro",
          "@utils": "src/utils",
        },
        extensions: ["js"],
      },
    },
    {
      resolve: "gatsby-source-dev",
      options: {
        username: "duranzno_",
      },
    },
    "gatsby-plugin-offline",
  ],
}
