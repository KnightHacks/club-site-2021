import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import "./navbar.css";

const Contacts = () => {
  return (
    <div className="Socials">
      <h1>join the conversation</h1>
      <div className="Links">
        <div className="Discord">
          <a href="https://discord.gg/Kv5g9vf">
            <FontAwesomeIcon icon={faDiscord} size="7x" color="#7289da" />
          </a>
        </div>
        <div className="Others">
          <a href="https://github.com/KnightHacks">
            <FontAwesomeIcon icon={faGithub} size="5x" color="white" />
          </a>
          <a href="https://www.instagram.com/knighthacks/">
            <FontAwesomeIcon icon={faInstagram} size="5x" color="white" />
          </a>
          <a href="https://www.facebook.com/KnightHacks/">
            <FontAwesomeIcon icon={faFacebook} size="5x" color="white" />
          </a>
          <a href="https://twitter.com/KnightHacks?lang=en/">
            <FontAwesomeIcon icon={faTwitter} size="5x" color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
