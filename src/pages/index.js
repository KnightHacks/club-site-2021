import * as React from "react";
import KnightHacksLogo from "../assets/logos/knightHacksLogoGold.svg";
import Newsletter from "../components/newsletter.js";
import Navbar from "../components/navbar.js";
import Calendar from "../components/calendar.js";
import AppBar from "../components/AppBar.js";
import { StylesProvider } from "@material-ui/core/styles";
import "./index.css";
import "@fontsource/roboto";
import "../fonts/avenirnext-regular.ttf";
import "../fonts/avenirnext-ultralight.ttf";

const logoHeight = 100;
const logoWidth = 200;

const IndexPage = () => {
  return (
    <StylesProvider injectFirst>
      <div className="LandingPage">
        <title>Home Page</title>
        <AppBar />
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
    </StylesProvider>
  );
};

export default IndexPage;
