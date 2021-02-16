module.exports = {
  siteMetadata: {
    title: "KnightHacks Club Site",
    description: "Lorem ipsum dolor sit amet",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
