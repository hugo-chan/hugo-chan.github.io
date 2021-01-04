module.exports = {
  siteMetadata: {
    title: "Hugo Chan",
    description: "Hugo Chan's website",
  },
  pathPrefix: "/hugo-chan.github.io",
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon.png`
      }
    }
  ],
}