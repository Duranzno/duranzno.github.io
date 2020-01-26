/* eslint-disable */
const colors=require('../src/data/colors');
const  siteMetadata= {
  title: '',
  description: '',
  author: '',
  siteUrl: `https://www.example.com`,
}
const pluginManifest={
  name: `gatsby-starter-default`,
  short_name: `starter`,
  start_url: `/`,
  display: `minimal-ui`,
  ...colors,
};
module.exports = {
  pluginManifest,
  siteMetadata,
}