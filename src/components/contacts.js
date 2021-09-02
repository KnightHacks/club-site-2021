import * as React from "react";

const Contacts = ({ children, main, email }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center text-gray-50 w-full md:w-1/2 h-full">
      <h1 className="font-light text-xl md:text-2xl lg:text-3xl my-6 w-full">
        Join the conversation.
      </h1>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full">{main}</div>
        <div className="w-80 flex justify-evenly mb-4">{children}</div>
      </div>
      <p className="m-0 mb-4">{email}</p>
    </div>
  );
};

export default Contacts;
