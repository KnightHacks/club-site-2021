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
import FadeIn from "react-fade-in";

const IndexPage = ({ data }) => {
  const appBarRef = useRef(null);
  const aboutUsRef = useRef(null);
  const eventsRef = useRef(null);
  const teamsRef = useRef(null);
  const contactUsRef = useRef(null);

  const allEvents = [
    {
      title: "Design for Users, Not Requirements",
      description:
        "It’s easy to identify the list of things that need to go into your product or design; a little of this, a sprinkle of that. It becomes easy to lose track of the user and just start thinking that your pile of features is the best thing since sliced bread. Then when it gets into the hands of users it flops. I’ll show you the mindset needed to create something that is useful, usable, and even desirable.",
      time: "7:30 p.m.",
      location: "Zoom",
      date: "1",
      month: "Apr",
      tags: [],
      presenter: "JPMorgan Chase",
    },
    {
      title: "Constitutional Revision",
      description:
        "Knight Hacks is beginning the constitutional revision process. We want to make sure that our organizing document clearly states our organization's current mission, goals, and structure. Make your voice heard and provide suggestions and feedback by attending our constitutional revision meeting. The draft constitution produced as a result of this meeting will be presented to the active student members for a ratification vote.",
      time: "2:00 p.m.",
      location: "Zoom",
      date: "2",
      month: "Apr",
      tags: ["Administrative"],
      presenter: "",
    },
    {
      title: "Killing the Coding Interview",
      description:
        "Want to be hired by FAANG companies? Want to perform better at coding interviews? Then come to Killing the Coding Interview March 13th at 2 pm! A one stop shop to learn the ins and outs of the coding interview process with helpful tips on what to prepare, how to prepare and live problem solving. Pulling from critically acclaimed resources like Cracking the Coding Interview, Leetcode and many more, this series is designed by students for students.",
      time: "2:00 p.m.",
      location: "Zoom",
      date: "3",
      month: "Apr",
      tags: [],
      presenter: "Arjun Pherwani",
    },
    {
      title: "Election Day",
      description:
        "Come learn about the candidates running for the executive board of Knight Hacks! You will be able to hear the candidates' speeches and ask them questions to better inform yourself to vote. Voting will be open for 48 hours from April 8th at 8:30pm to April 10th at 8:30pm, and all active dues-paying members are eligible to vote.",
      time: "7:30 p.m.",
      location: "Zoom",
      date: "8",
      month: "Apr",
      tags: ["Election"],
      presenter: "",
    },
    {
      title: "Killing the Coding Interview",
      description:
        "Want to be hired by FAANG companies? Want to perform better at coding interviews? Then come to Killing the Coding Interview March 13th at 2 pm! A one stop shop to learn the ins and outs of the coding interview process with helpful tips on what to prepare, how to prepare and live problem solving. Pulling from critically acclaimed resources like Cracking the Coding Interview, Leetcode and many more, this series is designed by students for students.",
      time: "2:00 p.m.",
      location: "Zoom",
      date: "10",
      month: "Apr",
      tags: [],
      presenter: "Arjun Pherwani",
    },
  ];
  return (
    <StylesProvider injectFirst>
      <div className="relative bg-KHblue">
        <Particles>
          <FadeIn transitionDuration={800}>
            <AppBar
              ref={appBarRef}
              appBarRef={appBarRef}
              aboutUsRef={aboutUsRef}
              eventsRef={eventsRef}
              teamsRef={teamsRef}
              contactUsRef={contactUsRef}
            />
            <title>Knight Hacks</title>
            <div className="relative h-screen flex justify-center">
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
                <h1 className="flex justify-center mt-3.5 whitespace-nowrap text-gray-50 font-light text-base sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl w-full">
                  {data.site.siteMetadata.description}
                </h1>
              </div>
              <div className="flex w-full justify-center absolute bottom-0">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="cursor-pointer text-KHgold text-5xl md:text-7xl w-12 md:w-32"
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
              <h1 className="font-light flex justify-center text-gray-50 text-4xl mt-14 my-6 ml-6 lg:text-5xl">
                Upcoming Events
              </h1>
              {allEvents.map((event, index) => (
                <Event key={index} {...event} />
              ))}
            </div>
            <Teams ref={teamsRef} />
            <div className="flex flex-col my-5 h-96" ref={contactUsRef}>
              <h1 className="font-light flex justify-center text-gray-50 text-4xl mt-24 my-5 lg:text-5xl">
                Connect With Us
              </h1>
              <div className="my-6 flex flex-col md:flex-row items-center justify-around w-full text-center h-full">
                <Newsletter />
                <Contacts />
              </div>
            </div>
          </FadeIn>
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
