module.exports = {
  siteMetadata: {
    title: "rodrigo-diaz",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Shippori Mincho`,
            `regular\:400,500,600,800` 
          ],
          display: 'swap'
        
    },
},
  ]};
