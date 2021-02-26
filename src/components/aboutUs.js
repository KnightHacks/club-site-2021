import React, { forwardRef } from "react";
import { StaticQuery, graphql } from "gatsby";
import "./aboutUs.css";

const AboutUs = forwardRef((props, ref) => {
  return (
    <div className="AboutUsContainer" ref={ref}>
      <h1 className="Subtitle">About Us</h1>
      <StaticQuery
        query={graphql`
          query aboutQuery {
            markdownRemark(frontmatter: { title: { eq: "About Us" } }) {
              rawMarkdownBody
            }
          }
        `}
        render={(data) => (
          <p className="AboutUsText">{data.markdownRemark.rawMarkdownBody}</p>
        )}
      />
    </div>
  );
});

export default AboutUs;
