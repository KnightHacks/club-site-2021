import * as React from "react";
import "./newsletter.css";
import { TextField, Button } from '@material-ui/core';

const Newsletter = () => {
  return (
    <div className="Newsletter">
      <div className="Email-Signup">
        <h1 className="email-signup-page__content__header">
          Sign up for our newsletter!
        </h1>
        <form
          action="https://knighthacks.us13.list-manage.com/subscribe/post?u=c9b3b1b680183317ac39a8f4f&amp;id=f84788998b"
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
            className="email-signup-page__email"
            id="mce-EMAIL"
            placeholder="Email *"
            required
            InputProps={{
              style: {color: "#eee", width: "25vw"}
            }}
          />
          <Button
            mat-raised-button
            variant="contained"
            color="secondary"
            className="email-signup-page__content__form__submit"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
