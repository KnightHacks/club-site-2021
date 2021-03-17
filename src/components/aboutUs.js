import React, { forwardRef } from "react";
import { StaticQuery, graphql } from "gatsby";


const AboutUs = forwardRef((props, ref) => {
  return (
    <div className="flex flex-col justify-center w-full text-center mt-14 mb-10" ref={ref}>
      <h1 className="font-light flex justify-center text-gray-50 text-5xl w-full my-5">
        About Us
      </h1>
      <StaticQuery
        query={graphql`
          query aboutQuery {
            markdownRemark(frontmatter: { title: { eq: "About Us" } }) {
              rawMarkdownBody
            }
          }
        `}
        render={(data) => (
          <p className="text-gray-300 sm:text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-4xl leading-loose ml-28 mr-28">{data.markdownRemark.rawMarkdownBody}</p>
        )}
      />
    </div>
  );
});

export default AboutUs;
