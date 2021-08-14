const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query redirectsQuery {
      markdownRemark(frontmatter: { title: { eq: "Redirects" } }) {
        frontmatter {
          redirects {
            discord
            zoom
            vote
            twitter
            slack
            resume
            ops
            membership
            marketing
            linktree
            instagram
            feedback
            facebook
            dues
            qr
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const redirectTemplate = path.resolve(`src/templates/redirect.js`);
  for (const [name, link] of Object.entries(
    result.data.markdownRemark.frontmatter.redirects
  )) {
    createPage({
      path: name,
      component: redirectTemplate,
      context: {
        title: name,
        redirect: link,
      },
    });
  }
};
