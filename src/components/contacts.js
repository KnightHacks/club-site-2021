import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const Contacts = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center text-white w-full md:w-1/2">
      <h1 className="font-light text-2xl md:text-3xl lg:text-4xl my-6 w-full">
        Join the conversation.
      </h1>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full">
          <a href="https://discord.gg/Kv5g9vf">
            <FontAwesomeIcon
              icon={faDiscord}
              color="white"
              className="mb-8 text-7xl md:text-8xl lg:text-9xl hover:text-gray-500"
            />
          </a>
        </div>
        <div className="w-80 flex justify-between mb-4">
          <a href="https://github.com/KnightHacks">
            <FontAwesomeIcon
              icon={faGithub}
              color="white"
              className="text-5xl md:text-6xl lg:text-7xl hover:text-gray-500"
            />
          </a>
          <a href="https://www.instagram.com/knighthacks/">
            <FontAwesomeIcon
              icon={faInstagram}
              color="white"
              className="text-5xl md:text-6xl lg:text-7xl hover:text-gray-500"
            />
          </a>
          <a href="https://www.facebook.com/KnightHacks/">
            <FontAwesomeIcon
              icon={faFacebook}
              color="white"
              className="text-5xl md:text-6xl lg:text-7xl hover:text-gray-500"
            />
          </a>
          <a href="https://twitter.com/KnightHacks?lang=en/">
            <FontAwesomeIcon
              icon={faTwitter}
              color="white"
              className="text-5xl md:text-6xl lg:text-7xl hover:text-gray-500"
            />
          </a>
        </div>
      </div>
      <p className="m-0 mb-4">
        <a
          href="mailto:team@knighthacks.org?subject=Let's%20talk.&body=Hey%20KnightHacks!"
          className="font-light text-2xl text-white no-underline hover:text-gray-600"
        >
          team@knighthacks.org
        </a>
      </p>
    </div>
  );
};

export default Contacts;
