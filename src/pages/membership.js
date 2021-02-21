import React, { useEffect } from "react";
import KnightHacksLogo from "../assets/logos/knightHacksLogoGold.svg";

const Linktree = () => {
  useEffect(() => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSdMJzLB2qNUwOUEiCg2PBWXvQNkUvDZWXHTNo9gPUj6ns1oKw/viewform";
  }, []);

  return (
    <>
      <title>Membership</title>
      <div className="KnightHacksLogo">
        <img src={KnightHacksLogo} className="KHLogo" alt="Knight Hacks Logo" />
      </div>
    </>
  );
};

export default Linktree;
