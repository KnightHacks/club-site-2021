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
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://knighthacks.us13.list-manage.com/subscribe/post?u=c9b3b1b680183317ac39a8f4f&amp;id=f84788998b",
        timeout: 3500,
      },
    },
    `gatsby-plugin-postcss`,
  ],
};
