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
      title: "Alexa Stock Ticker",
      description:
        "Learn how to make an Alexa skill with Knight Hacks! No coding experience is required. We will be making an Alexa skill that gets stock prices so you can ask your device what your favorite company is trading at. Along the way, we'll demonstrate some basic programming concepts for participants who are new to programming. We'll also be giving away an Amazon Echo device to a lucky workshop participant!",
      time: "7:30 p.m.",
      location: "Zoom",
      date: "25",
      month: "Feb",
      presenter: "Chris Feltner",
    },
    {
      title: "What's the Point of Pointers?",
      description:
        "Memory allocation is one of the more difficult parts of CS1, so this week we are going to do a review of the topic to help you succeed in your class! Knight Hacks President Chris Feltner will go over what pointers are, how to use them, and how to allocate and free memory. We'll be making a meal ordering system for the terminal in C to demonstrate these techniques.",
      time: "7:30 p.m.",
      location: "Zoom",
      date: "02",
      month: "Mar",
      presenter: "Chris Feltner",
    },
    {
      title: "Vim and Vigor",
      description:
        "Interested in a text editor included with nearly every Linux server and installation of MacOS? Ever typed `git commit` and gotten stuck in a strange program where the keys do seemingly random things? Curious about this `vim` thing you've seen Rob typing at `Hello, World!` ? Whatever your reason, this workshop is for you! We will learn the legendary Vim text editor, from basics like how to exit, to the powerful keybindings that have made it a popular choice for decades. No experience required!",
      time: "7:30 p.m.",
      location: "Zoom",
      date: "04",
      month: "Mar",
      presenter: "Robert Boyd",
    },
    {
      title: "Career Development Panel",
      description:
        "Join us for a panel with former students who have graduated and now work full time! You can listen and ask questions about their path into their current career and what they might have done differently. This panel is a great opportunity to learn about the reality of the job market and what you need to do to be successful!",
      time: "7:30 p.m.",
      location: "Zoom",
      date: "11",
      month: "Mar",
      presenter: "",
    },
    {
      title: "Rust",
      description:
        'Rust has been the undisputed "most loved" programming language on the Stack Overflow Developer Survey for several years. Why? Come to this workshop and find out! Anthony will be returning to teach us the basics of Rust\'s unique memory management model and answer any questions about this innovative and promising new programming language.',
      time: "7:30 p.m.",
      location: "Zoom",
      date: "18",
      month: "Mar",
      presenter: "Anthony Hevia",
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
            <div className="KnightHacksLogo mx-auto absolute align-baseline top-1/2 left-1/2 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl transform -translate-y-2/4 -translate-x-2/4">
              <img
                src={KnightHacksLogo}
                className="w-full p-6"
                alt="Knight Hacks Logo"
              />
              <h1 className="flex justify-center mt-3.5 whitespace-nowrap text-gray-50 font-light">
                {data.site.siteMetadata.description}
              </h1>
            </div>
            <div className=" flex absolute left-2/4 bottom-2">
              <FontAwesomeIcon
                icon={faChevronDown}
                className=" cursor-pointer text-KHgold text-5xl xs:text-4xl sm:text-5xl md:text-6xl"
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
          <div className="EventsContainer my-6" ref={eventsRef}>
            <h1 className="font-light flex justify-center text-gray-50 text-5xl w-full my-5">
              Upcoming Events
            </h1>
            {allEvents.map((event, index) => (
              <Event key={index} {...event} />
            ))}
            <Teams ref={teamsRef} />
          </div>
          <div
            className="FooterContainer flex flex-col my-5"
            ref={contactUsRef}
          >
            <h1 className="Subtitle font-light flex justify-center text-gray-50 text-5xl w-full my-5">
              Connect With Us
            </h1>
            <div className="Footer flex items-start justify-around w-full text-center flex-wrap">
              <div className="FooterElement">
                <Newsletter />
              </div>
              <div className="FooterElement">
                <Contacts />
              </div>
            </div>
          </div>
        </Particles>
      </div>
    </StylesProvider>
  );
};

const Particles = ({ children }) => {
  return (
    <div className="ParticlesContainer absolute">
      <ReactParticles
        params={particles_config}
        className="Particles fixed top-0 left-0"
        width="100vw"
        height="100vh"
      />
      {children && <div className="Children relative">{children}</div>}
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
