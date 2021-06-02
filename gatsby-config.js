const siteMetadata = {
  title: `Mark W McNabola`,
  description: `This is my coding blog.`,
  menuLinks:[
      {
        name:'home',
        link:'/'
      },
      {
        name:'<Mark/>',
        link:'/page-2'
      }
  ]
};

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
        options: {
          gatsbyRemarkPlugins: [
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 640,
              },
            },
          ],
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
      path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
  ],
};