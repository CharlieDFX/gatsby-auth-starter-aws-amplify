module.exports = {
  siteMetadata: {
    title: `Covid-19 Superación Financiera`,
    description: `Kick off the COVID-19 (coronavirus) financial blues with our tools to get you financial assistance and a new job.`,
    siteUrl: `https://adc-miami.com.com`,
    author: 'Charlie Rosado`,
  },
  plugins: [
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
        name: `Guia de Covid-19 Superación Financiera`,
        short_name: `COVID-19-Guia`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
