import React, { useRef } from "react";
import { graphql } from "gatsby";
import KnightHacksLogo from "../assets/logos/knightHacksLogoGold.svg";
import Newsletter from "../components/newsletter.js";
import Contacts from "../components/contacts.js";
import Calendar from "../components/calendar.js";
import AppBar from "../components/AppBar.js";
import AboutUs from "../components/aboutUs.js";
import { StylesProvider } from "@material-ui/core/styles";
import ReactParticles from "react-particles-js";
import particles_config from "../particles-config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import "@fontsource/roboto";
import "../fonts/AvenirNext-Regular.ttf";
import "../fonts/AvenirNext-UltraLight.ttf";

const IndexPage = ({ data }) => {
  const scrollRef = useRef(null);
  return (
    <StylesProvider injectFirst>
      <AppBar />
      <div className="LandingPage">
        <Particles>
          <title>Home Page</title>
          <div className="LogoContainer">
            <div className="KnightHacksLogo">
              <img
                src={KnightHacksLogo}
                className="KHLogo"
                alt="Knight Hacks Logo"
              />
              <h1 className="LogoSubheading">
                {data.site.siteMetadata.description}
              </h1>
            </div>
            <div className="ArrowContainer">
              <FontAwesomeIcon
                icon={faChevronDown}
                className="Arrow"
                onClick={() =>
                  scrollRef.current.scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  })
                }
              />
            </div>
          </div>
          <AboutUs ref={scrollRef}></AboutUs>
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
    </StylesProvider>
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

export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

export default IndexPage;
