import React, { useRef } from "react";
import { graphql } from "gatsby";
import KnightHacksLogo from "../assets/logos/knightHacksLogoGold.svg";
import Newsletter from "../components/newsletter.js";
import Contacts from "../components/contacts.js";
import Event from "../components/event.js";
import AppBar from "../components/appBar.js";
import AboutUs from "../components/aboutUs.js";
import Teams from "../components/teams.js";
import { StylesProvider } from "@material-ui/core/styles";
import ReactParticles from "react-particles-js";
import particles_config from "../particles-config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import "../fonts/AvenirNext-Italic.ttf";
import "../fonts/AvenirNext-Regular.ttf";
import "../fonts/AvenirNext-UltraLight.ttf";
import "../fonts/AvenirNext-UltraLightItalic.ttf";
import "../fonts/AvenirNext-Heavy.ttf";
import "../fonts/AvenirNext-Medium.ttf";
import "../fonts/AvenirNext-MediumItalic.ttf";

const IndexPage = ({ data }) => {
  const appBarRef = useRef(null);
  const aboutUsRef = useRef(null);
  const eventsRef = useRef(null);
  const teamsRef = useRef(null);
  const contactUsRef = useRef(null);

  const allEvents = [
    {
      title: "Unit Testing",
      description:
        "Everyone knows testing your code is important, but how can you do it? At this workshop, we'll talk about the motivations for testing, how to write tests, and how tests can greatly improve your codebase and workflow. We'll be using JavaScript and the Mocha.js testing framework, but the concepts will be applicable to any language. No experience required.",
      time: "7:30 p.m.",
      location: "Zoom",
      date: "16",
      month: "Mar",
      tags: "Hello World!",
      presenter: "Robert Boyd",
    },
    {
      title: "Rust",
      description:
        'Rust has been the undisputed "most loved" programming language on the Stack Overflow Developer Survey for several years. Why? Come to this workshop and find out! Anthony will be returning to teach us the basics of Rust\'s unique memory management model and answer any questions about this innovative and promising new programming language.',
      time: "7:30 p.m.",
      location: "Zoom",
      date: "18",
      month: "Mar",
      tags: "",
      presenter: "Anthony Hevia",
    },
    {
      title: "TypeScript",
      description:
        "Does JavaScript want to make you tear your hair out with errors like `undefined is not a function` and `name is not defined`? Do you miss Java features like `interface` and `enum`? Do you just like typing out the types of your variables? TypeScript might just be what you're looking for! In this workshop, we'll explore TypeScript, a popular compile-to-JS language with a surprisingly good static type system and some other cool features.",
      time: "7:30 p.m.",
      location: "Zoom",
      date: "23",
      month: "Mar",
      tags: "Hello World!",
      presenter: "Robert Boyd",
    },
    {
      title: "Getting Into Grad School",
      description: "",
      time: "7:30 p.m.",
      location: "Zoom",
      date: "25",
      month: "Mar",
      tags: "",
      presenter: "Irene Tanner",
    },
  ];
  return (
    <StylesProvider injectFirst>
      <AppBar
        ref={appBarRef}
        appBarRef={appBarRef}
        aboutUsRef={aboutUsRef}
        eventsRef={eventsRef}
        teamsRef={teamsRef}
        contactUsRef={contactUsRef}
      />
      <div className="LandingPage">
        <Particles>
          <title>Knight Hacks</title>
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
                  window.scrollTo({
                    top:
                      aboutUsRef.current.offsetTop -
                      appBarRef.current.clientHeight,
                    behavior: "smooth",
                  })
                }
              />
            </div>
          </div>
          <AboutUs ref={aboutUsRef} />
          <div className="EventsContainer" ref={eventsRef}>
            <h1 className="Subtitle">Upcoming Events</h1>
            {allEvents.map((event, index) => (
              <Event key={index} {...event} />
            ))}
            <Teams ref={teamsRef} />
          </div>
          <div className="FooterContainer" ref={contactUsRef}>
            <h1 className="Subtitle">Connect With Us</h1>
            <div className="Footer">
              <Newsletter />
              <Contacts />
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
      <ReactParticles
        params={particles_config}
        className="Particles"
        width="100vw"
        height="100vh"
      />
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
