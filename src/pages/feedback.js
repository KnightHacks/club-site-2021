import React, { useEffect } from "react";
import KnightHacksLogo from "../assets/logos/knightHacksLogoGold.svg";

const Linktree = () => {
  useEffect(() => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSfm5RguLjB7C4MzTsGSGyM9bzgEd432_ke6VJQP7OVJr2D2CA/viewform";
  }, []);

  return (
    <>
      <title>Feedback</title>
      <div className="KnightHacksLogo">
        <img src={KnightHacksLogo} className="KHLogo" alt="Knight Hacks Logo" />
      </div>
    </>
  );
};

export default Linktree;
