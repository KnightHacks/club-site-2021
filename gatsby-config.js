module.exports = {
  siteMetadata: {
    title: "KnightHacks Club Site",
    description: "UCF's Software Development & Hackathon RSO",
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
