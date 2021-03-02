import React, { useEffect } from "react";
import KnightHacksLogo from "../assets/logos/knightHacksLogoGold.svg";
import "../pages/index.css";

const Redirect = ({ pageContext }) => {
  useEffect(() => {
    window.location.href = pageContext.redirect;
  }, []);
  return (
    <div className="LandingPage">
      <title>{pageContext.title}</title>
      <div className="LogoContainer">
        <div className="KnightHacksLogo">
          <img
            src={KnightHacksLogo}
            className="KHLogo"
            alt="Knight Hacks Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Redirect;
