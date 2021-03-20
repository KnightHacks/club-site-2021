import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { TextFieldStyle } from "./styles";
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
    <div className="flex justify-center items-center h-full w-full md:w-1/2 mb-4">
      <div className=" text-center text-white w-full">
        <h1 className="text-2xl md:text-4xl font-light text-white w-full">
          Sign up for our newsletter!
        </h1>
        <form
          onSubmit={handleSubmit}
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="mt-10 flex flex-col"
          target="_blank"
          noValidate
        >
          <TextField
            type="email"
            placeholder="Email *"
            required
            InputProps={{
              style: TextFieldStyle,
            }}
            onChange={(e) => setEmail(e.target.value)}
            error={invalid}
            value={email}
            className="flex justify-center items-center w-full"
          />
          {invalid ? (
            <div
              className="Email-Error"
              dangerouslySetInnerHTML={{ __html: message }}
            />
          ) : null}
          {subscribed ? <p className="Email-Subscribed">{message}</p> : null}
          <div className="Email-Submit mt-5">
            <Button variant="contained" color="secondary" type="submit">
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
