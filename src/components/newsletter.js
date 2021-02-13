import * as React from "react";
import "./newsletter.css";
import { TextField, Button } from "@material-ui/core";

// Only submits email to real enpoint when in production
const endpoint =
  process.env.NODE_ENV === "production"
    ? "https://knighthacks.us13.list-manage.com/subscribe/post?u=c9b3b1b680183317ac39a8f4f&amp;id=f84788998b"
    : "https://getform.io/f/ae1214c2-1cf8-4b4d-8a4e-84af4c07d08c";

const Newsletter = () => {
  return (
    <div className="Newsletter">
      <div className="Email-Signup">
        <h1 className="email-signup-page__content__header">
          Sign up for our newsletter!
        </h1>
        <form
          action={endpoint}
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="form"
          target="_blank"
          noValidate
        >
          <TextField
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            placeholder="Email *"
            required
            InputProps={{
              style: { color: "#eee", width: "25vw" },
            }}
          />
          <div className="Email-Submit">
            <Button
              mat-raised-button
              variant="contained"
              color="secondary"
              type="submit"
            >
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
