const path = require("path");

module.exports = {
  siteMetadata: {
    title: "KnightHacks Club Site",
    description: "UCF's Software Development & Hackathon RSO",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: path.join(__dirname, "src", "markdown-pages"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "image",
        path: path.join(__dirname, "src", "images"),
      },
    },
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
};
