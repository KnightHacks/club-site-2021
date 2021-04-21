import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaIcon = ({ href, icon, color, className }) => {
  return (
    <a href={href}>
      <FontAwesomeIcon
        icon={icon}
        color={color || "white"}
        className={`text-4xl md:text-5xl lg:text-6xl hover:text-gray-500 ${
          className || ""
        }`}
      />
    </a>
  );
};

const Contacts = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center text-gray-50 w-full md:w-1/2 h-full">
      <h1 className="font-light text-xl md:text-2xl lg:text-3xl my-6 w-full">
        Join the conversation.
      </h1>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full">
          <SocialMediaIcon
            href="https://discord.gg/Kv5g9vf"
            icon={faDiscord}
            className="mb-8 text-4xl md:text-7xl lg:text-8xl hover:text-gray-500"
          />
        </div>
        <div className="w-80 flex justify-evenly mb-4">
          <SocialMediaIcon
            href="https://github.com/KnightHacks"
            icon={faGithub}
          />
          <SocialMediaIcon
            href="https://www.instagram.com/knighthacks/"
            icon={faInstagram}
          />
          <SocialMediaIcon
            href="https://www.facebook.com/KnightHacks/"
            icon={faFacebook}
          />
          <SocialMediaIcon
            href="https://twitter.com/KnightHacks?lang=en/"
            icon={faTwitter}
          />
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
