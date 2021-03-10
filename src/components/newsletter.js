import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { TextFieldStyle } from "./styles";
// Only submits email to real enpoint when in production
const endpoint =
  process.env.NODE_ENV === "production"
    ? "https://knighthacks.us13.list-manage.com/subscribe/post?u=c9b3b1b680183317ac39a8f4f&amp;id=f84788998b"
    : "https://getform.io/f/ae1214c2-1cf8-4b4d-8a4e-84af4c07d08c";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email.toLowerCase())) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ EMAIL: email }),
        redirect: "follow",
      };
      fetch(endpoint, requestOptions)
        .then((res) => {
          window.open(res.url);
        })
        .catch((err) => console.log(err));
      setValid(true);
      setEmail("");
    } else {
      setValid(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-full w-1/2">
      <div className=" text-center text-white ml-5">
        <h1 className="text-4xl font-light text-white">
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
            error={!valid}
            value={email}
          />
          {valid ? null : <p className="text-red-600">Invalid Email!</p>}
          <div className="mt-5">
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
