import React, { forwardRef } from "react";
import { StaticQuery, graphql } from "gatsby";


const AboutUs = forwardRef((props, ref) => {
  return (
    <div className="flex flex-col w-full text-center mt-14 mb-10 2xl:mb-24" ref={ref}>
      <h1 className="font-light flex justify-center text-gray-50 text-5xl w-full my-5 ml-6 lg:text-6xl xl:text-7xl 2xl:text-9xl">
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
          <p className="text-gray-300 xs:ml-12 justify-center sm:text-xs sm:ml-14 sm:mr-14 md:text-base  md:mr-14 lg:text-2xl xl:text-3xl 2xl:text-6xl leading-loose ">{data.markdownRemark.rawMarkdownBody}</p>
        )}
      />
    </div>
  );
});

export default AboutUs;
