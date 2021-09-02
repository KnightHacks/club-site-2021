import React, { useState } from "react";
import { Button } from "@material-ui/core";
import addToMailchimp from "gatsby-plugin-mailchimp";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addToMailchimp(email).then((data) => {
      if (data.result === "error") {
        setInvalid(true);
        setSubscribed(false);
      } else {
        setEmail("");
        setInvalid(false);
        setSubscribed(true);
      }
      setMessage(data.msg);
    });
  };

  return (
    <div className="flex flex-col justify-center items-center text-center text-white w-full md:w-1/2 h-full mt-16 sm:m-0">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-50 w-full">
        Sign up for our newsletter!
      </h1>
      <form
        onSubmit={handleSubmit}
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="mt-10 flex flex-col w-full items-center"
        target="_blank"
        noValidate
      >
        <input
          type="email"
          placeholder="Email *"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="px-4 py-2 w-1/2 border-b text-white border-gray-900 bg-transparent focus:outline-none hover:border-blue-400 focus:border-blue-400 font-light"
        />
        {invalid ? (
          <div
            className=" text-red-600"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        ) : null}
        {subscribed ? <p className="text-green-600">{message}</p> : null}
        <div className="mt-5">
          <Button variant="contained" color="secondary" type="submit">
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
