import * as React from "react";
import KnightHacksLogo from "../assets/logos/knightHacksLogoGold.svg";
import Newsletter from "../components/newsletter.js";
import Contacts from "../components/contacts.js";
import Calendar from "../components/calendar.js";
import ReactParticles from "react-particles-js";
import particles_config from "../particles-config";
import "./index.css";
import "@fontsource/roboto";
import "../fonts/avenirnext-regular.ttf";
import "../fonts/avenirnext-ultralight.ttf";

const logoHeight = 450;
const logoWidth = 900;

const IndexPage = () => {
  return (
    <div className="LandingPage">
      <Particles className="particles" params={{ ...particles_config }}>
        <title>Home Page</title>
        <div className="LogoContainer">
          <div className="KnightHacksLogo">
            <img
            src={KnightHacksLogo}
            className="KHLogo"
            height={logoHeight}
            width={logoWidth}
            alt="Knight Hacks Logo"
            />
          </div>
        </div>
        <Calendar></Calendar>
        <div className="FooterContainer">
          <h1 className="Subtitle">Connect With Us</h1>
          <div className="Footer">
            <Newsletter></Newsletter>
            <Contacts></Contacts>
          </div>
        </div>
      </Particles>
    </div>
  );
};

const Particles = ({ children }) => {
  return (
    <div className="ParticlesContainer">
      <ReactParticles params={particles_config} className="Particles" />
      {children && <div className="Children">{children}</div>}
    </div>
  );
};

export default IndexPage;
