import * as React from "react";
import { Link } from "gatsby";
import KnightHacksLogo from "../assets/logos/knightHacksLogoGold.svg";
import "../pages/index.css";

const NotFoundPage = () => {
  return (
    <div className="LandingPage">
      <title>Not Found</title>
      <div className="LogoContainer">
        <div className="KnightHacksLogo">
          <img
            src={KnightHacksLogo}
            className="KHLogo"
            alt="Knight Hacks Logo"
          />
          <h1 className="LogoSubheading">
            Sorry we couldn't find what you were looking for.
          </h1>
          <Link to="/" className="GoHome">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
