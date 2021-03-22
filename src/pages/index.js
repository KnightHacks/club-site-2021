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
      tags: ["Hello World!"],
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
      tags: [],
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
      tags: ["Hello World!"],
      presenter: "Robert Boyd",
    },
    {
      title: "Getting Into Grad School",
      description: "",
      time: "7:30 p.m.",
      location: "Zoom",
      date: "25",
      month: "Mar",
      tags: [],
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
      <div className="relative bg-KHblue">
        <Particles>
          <title>Knight Hacks</title>
          <div className="relative h-screen">
            <div
              className={`
              mx-auto absolute align-baseline
              top-1/2 left-1/2 text-xl
              transform -translate-y-2/4 -translate-x-2/4
              sm:text-3xl
              md:text-4xl
              xl:text-5xl
              `}
            >
              <img
                src={KnightHacksLogo}
                className="w-full p-6"
                alt="Knight Hacks Logo"
              />
              <h1 className="flex justify-center mt-3.5 whitespace-nowrap text-gray-50 font-light">
                {data.site.siteMetadata.description}
              </h1>
            </div>
            <div className="flex absolute left-2/4 bottom-2 visible">
              <FontAwesomeIcon
                icon={faChevronDown}
                className="cursor-pointer text-KHgold text-5xl xs:text-4xl sm:text-5xl md:text-6xl"
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
          <div className="my-6" ref={eventsRef}>
            <h1 className="font-light flex justify-center text-gray-50 text-4xl my-5 ml-6 lg:text-5xl">
              Upcoming Events
            </h1>
            {allEvents.map((event, index) => (
              <Event key={index} {...event} />
            ))}
          </div>
          <Teams ref={teamsRef} />
          <div className="flex flex-col my-5 h-96" ref={contactUsRef}>
            <h1 className="font-light flex justify-center text-gray-50 text-4xl my-5 ml-6 lg:text-5xl">
              Connect With Us
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-around w-full text-center h-full">
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
    <div className="absolute w-full">
      <ReactParticles
        params={particles_config}
        className="fixed top-0 left-0"
        width="100vw"
        height="100vh"
      />
      {children && <div className="relative">{children}</div>}
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
