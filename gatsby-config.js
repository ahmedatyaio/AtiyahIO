module.exports = {
  siteMetadata: {
    title: `Ahmed M. Atiyah, Fullstack Web Developer`,
    description: `Egypt based, Fullstack Web Developer ready for Freelance and Part Time Jobs.`,
    author: `@atiyahio`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `atiyah-io`,
        short_name: `Atiyah`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`montserrat\:700`, `rubik`],
        display: 'swap'
      }
    },
    `gatsby-plugin-styled-components`
  ]
};
