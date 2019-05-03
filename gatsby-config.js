require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `RGBA to HEX Converter`,
    description: `Gatsby site to convert between rgba and hex color codes, since I seem to do this a lot in frontend work`,
    author: `@daltonrowe`,
    github: `https://github.com/daltonrowe/rgbatohex`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RGBA to Hex Converter`,
        short_name: `rgbatohex`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `${process.env.GA_TRACKING_ID}`,
        head: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "rgbatohex.com",
      },
    },
    `gatsby-plugin-offline`,
  ],
}
