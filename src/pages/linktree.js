import React, { useEffect } from "react";
import KnightHacksLogo from "../assets/logos/knightHacksLogoGold.svg";

const Linktree = () => {
  useEffect(() => {
    window.location.href = "https://linktr.ee/knighthacks";
  }, []);

  return (
    <>
      <title>Linktree</title>
      <div className="KnightHacksLogo">
        <img src={KnightHacksLogo} className="KHLogo" alt="Knight Hacks Logo" />
      </div>
    </>
  );
};

export default Linktree;
