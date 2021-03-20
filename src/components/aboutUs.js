import React, { forwardRef } from "react";
import { StaticQuery, graphql } from "gatsby";

const AboutUs = forwardRef((props, ref) => {
  return (
    <div
      className="flex flex-col w-full text-center mt-14 mb-10 2xl:mb-24"
      ref={ref}
    >
      <h1 className="font-light flex justify-center text-gray-50 text-5xl w-full my-5 ml-6 lg:text-6xl xl:text-7xl">
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
          <p
            className={`
              text-gray-300 mx-8 text-xl leading-9
              sm:text-justify sm:mx-16
              md:mx-20
              lg:text-2xl lg:mx-28 lg:leading-loose
              xl:text-3xl lg:mx-32 xl:leading-loose
              2xl:mx-40
            `}
          >
            {data.markdownRemark.rawMarkdownBody}
          </p>
        )}
      />
    </div>
  );
});

export default AboutUs;
