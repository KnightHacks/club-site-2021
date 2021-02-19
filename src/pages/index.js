import * as React from "react";
import KnightHacksLogo from "../assets/logos/knightHacksLogoGold.svg";
import Newsletter from "../components/newsletter.js";
import Contacts from "../components/contacts.js";
import Calendar from "../components/calendar.js";
import AppBar from "../components/AppBar.js";
import { StylesProvider } from "@material-ui/core/styles";
import Particles from "react-particles-js";
import particles_config from "../particles-config";
import "./index.css";
import "@fontsource/roboto";
import "../fonts/avenirnext-regular.ttf";
import "../fonts/avenirnext-ultralight.ttf";

const logoHeight = 100;
const logoWidth = 200;

const IndexPage = () => {
  return (
    <StylesProvider injectFirst>
      <AppBar />
      <div className="LandingPage">
        <div className="ParticlesContainer">
          <Particles className="particles" params={{ ...particles_config }} />
        </div>
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
        <div className="FooterContainer">
          <h1 className="Subtitle">Connect With Us</h1>
          <div className="Footer">
            <Newsletter></Newsletter>
            <Contacts></Contacts>
          </div>
        </div>
      </div>
    </StylesProvider>
  );
};

export default IndexPage;
