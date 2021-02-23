import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import "./contacts.css";

const Contacts = () => {
  return (
    <div className="Socials">
      <h1 className="Socials-Header">Join the conversation.</h1>
      <div className="Links">
        <div>
          <a href="https://discord.gg/Kv5g9vf">
            <FontAwesomeIcon icon={faDiscord} className="Icon Discord" />
          </a>
        </div>
        <div className="Others">
          <a href="https://github.com/KnightHacks">
            <FontAwesomeIcon icon={faGithub} color="white" className="Icon" />
          </a>
          <a href="https://www.instagram.com/knighthacks/">
            <FontAwesomeIcon
              icon={faInstagram}
              color="white"
              className="Icon"
            />
          </a>
          <a href="https://www.facebook.com/KnightHacks/">
            <FontAwesomeIcon icon={faFacebook} color="white" className="Icon" />
          </a>
          <a href="https://twitter.com/KnightHacks?lang=en/">
            <FontAwesomeIcon icon={faTwitter} color="white" className="Icon" />
          </a>
        </div>
      </div>
      <p className="Contact-Email">
      <a href="mailto:team@knighthacks.org?subject=Let's%20talk.&body=Hey%20KnightHacks!">team@knighthacks.org</a>
      </p>
    </div>
  );
};

export default Contacts;
