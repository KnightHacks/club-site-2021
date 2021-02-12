import * as React from "react";
import "./newsletter.css";
// styles
const pageStyles = {
  color: "#000000",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  padding: 50,
};

// markup
const Newsletter = () => {
  return (
    <main style={pageStyles}>
      <div class="Email-Signup">
        <h1 class="email-signup-page__content__header">
          Sign up for our newsletter!
        </h1>
        <form
          action
          action="https://knighthacks.us13.list-manage.com/subscribe/post?u=c9b3b1b680183317ac39a8f4f&amp;id=f84788998b"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="form"
          target="_blank"
          noValidate
        >
          <input
            type="email"
            name="EMAIL"
            class="email-signup-page__email"
            id="mce-EMAIL"
            placeholder="Email"
            required
          ></input>
          <button
            mat-raised-button
            color="primary"
            class="email-signup-page__content__form__submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </main>
  );
};

export default Newsletter;
