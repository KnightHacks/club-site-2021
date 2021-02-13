import React, { useState } from "react";
import "./newsletter.css";
import { TextField, Button } from "@material-ui/core";

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
      fetch(endpoint, requestOptions).then((res) => {
        window.open(res.url);
      });
      setValid(true);
      setEmail("");
    } else {
      setValid(false);
    }
  };

  return (
    <div className="Newsletter">
      <div className="Email-Signup">
        <h1 className="email-signup-page__content__header">
          Sign up for our newsletter!
        </h1>
        <form
          onSubmit={handleSubmit}
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="form"
          target="_blank"
          noValidate
        >
          <TextField
            type="email"
            placeholder="Email *"
            required
            InputProps={{
              style: { color: "white", width: "25vw" },
            }}
            onChange={(e) => setEmail(e.target.value)}
            error={!valid}
            value={email}
          />
          {valid ? null : <p className="Email-Error">Invalid Email!</p>}
          <div className="Email-Submit">
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
