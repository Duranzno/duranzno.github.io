/* eslint-disable */
const {theme_color,background_color} = require("../src/data/colors")
const siteMetadata = {
  title: "hey",
  description: "",
  author: "",
  siteUrl: `https://www.example.com`,
}
const pluginManifest = {
  name: `gatsby-starter-default`,
  short_name: `starter`,
  start_url: `/`,
  background_color,
  theme_color,
  icon: "src/static/favicon/favicon-512.png", 
  display: `minimal-ui`,
}
module.exports = {
  pluginManifest,
  siteMetadata,
}
