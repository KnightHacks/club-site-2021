import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaIcon = ({ href, icon, color, className }) => {
  return (
    <a href={href}>
      <FontAwesomeIcon icon={icon} color={color} className={className} />
    </a>
  );
};

export default SocialMediaIcon;
