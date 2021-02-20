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

/*
LEAH:
The entire div containing our logo has
the classname KnightHacksLogo.
The image itself has the classname
KHLogo.
When you want to modify the styling of these
elements, look in the index.css for the
classes .KnightHacksLogo and .KHLogo
and apply your changes there.

p.s. delete this when you're done lol
*/

const IndexPage = () => {
  return (
    <div className="LandingPage">
      <Particles className="particles" params={{ ...particles_config }}>
        <title>Home Page</title>
        <div className="KnightHacksLogo">
          <img
            src={KnightHacksLogo}
            className="KHLogo"
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
