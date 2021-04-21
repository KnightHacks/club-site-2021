import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export default SocialMediaIcon;
