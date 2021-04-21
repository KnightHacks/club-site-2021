import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaIcon = ({ href, ...props }) => {
  return (
    <a href={href}>
      <FontAwesomeIcon {...props} />
    </a>
  );
};

export default SocialMediaIcon;
