/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    
    //1) typography plugin
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },

    //2) gatsby source-file-system (already npm added)
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name:`src`,
        path: `${__dirname}/content/`
      },
    },

    //3) transformer
    `gatsby-transformer-remark`,

    //4) s3 plugin
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "mohamed-albgal.com",
        protocol: "https",
        hostname: "www.mohamed-albgal.com",
      }

      //5) portfolio theme:
      
    },
    {
      resolve: "gatsby-theme-portfolio",
      options: {
        contentPath: `${__dirname}/content` // the path to your markdown files
      }
    },



  ],
}
