/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [

    //4) s3 plugin
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "mohamed-albgal.com",
        protocol: "https",
        hostname: "www.mohamed-albgal.com",
      }
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
      postCssPlugins: [require('tailwindcss')('./tailwind.config.js')],
      },
    },
    //6) purgecss, for removing unused tw classes
    {
      resolve: `gatsby-plugin-purgecss`,
      options: { tailwind: true }
    }


  ],
}
