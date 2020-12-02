const { createFilePath } = require( `gatsby-source-filesystem`);


exports.onCreateNode = ( { node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages`})
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
    }
}

// exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions 
//     const result = await graphql(`
//         query {
//             allmarkdownRemark {
//                 edges{
//                     node {
//                         fields {
//                             slug
//                         }
//                     }
//                 }
//             }
//         }
//     `);

//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//         createPage({
//             path: node.fields.slug,
//             compoent: path.resolve(`./src/templates/blog-post.js`)
//         })
//     });
// }