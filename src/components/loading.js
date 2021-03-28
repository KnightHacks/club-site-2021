import React from "react";
import KnightHacksIcon from "../assets/logos/knightHacksIcon.svg";

const Loading = () => {
  return (
    <div
      className={`
    mx-auto absolute align-baseline
    top-1/2 left-1/2 text-xl
    transform -translate-y-2/4 -translate-x-2/4
    sm:text-3xl
    md:text-4xl
    xl:text-5xl
    animate-pulse
    `}
    >
      <img
        src={KnightHacksIcon}
        className="w-full p-6"
        alt="Knight Hacks Logo"
      />
    </div>
  );
};

export default Loading;
