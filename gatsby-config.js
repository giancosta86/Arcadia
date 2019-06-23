module.exports = {
  pathPrefix: `/Arcadia`,

  plugins: [
    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/markdown`,
        name: `markdown`,
      },
    },

    `gatsby-transformer-remark`,

    `gatsby-plugin-react-helmet`,
  ],
}
