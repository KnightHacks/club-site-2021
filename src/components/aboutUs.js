import React, { forwardRef } from "react";

const AboutUs = forwardRef(({ children }, ref) => {
  return (
    <div
      className="flex flex-col w-full text-center mt-14 mb-10 2xl:mb-24"
      ref={ref}
    >
      <h1 className="font-light flex justify-center text-gray-100 text-4xl my-5 ml-6 lg:text-5xl">
        About Us
      </h1>
      <p
        className={`
          text-gray-100 mx-8 text-xl leading-9
          sm:text-justify sm:mx-16
          md:mx-20
          lg:text-xl lg:mx-28 lg:leading-loose
          xl:text-2xl lg:mx-32 xl:leading-loose
          2xl:mx-40
        `}
      >
        {children}
      </p>
    </div>
  );
});

AboutUs.displayName = "AboutUs";

export default AboutUs;
