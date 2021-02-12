import * as React from "react";
import KnightHacksLogo from "../assets/logos/knightHacksLogoGold.svg";
import Newsletter from "../components/newsletter.js";
import Navbar from "../components/navbar.js";
import Calendar from "../components/calendar.js";
import "./index.css";
import "fontsource-roboto";

const logoHeight = 100;
const logoWidth = 200;

const IndexPage = () => {
  return (
    <div className="LandingPage">
      <title>Home Page</title>
      <div className="KnightHacksLogo">
        <img
          src={KnightHacksLogo}
          className="KHLogo"
          height={logoHeight}
          width={logoWidth}
          alt="Knight Hacks Logo"
        />
      </div>
      <Calendar></Calendar>
      <Newsletter></Newsletter>
      <Navbar></Navbar>
    </div>
  );
};

export default IndexPage;
