import React, { useRef } from "react";
import { graphql } from "gatsby";
import KnightHacksLogo from "../assets/logos/knightHacksLogoGold.svg";
import Newsletter from "../components/newsletter.js";
import Contacts from "../components/contacts.js";
import Event from "../components/event.js";
import { AppBar, AppBarLink } from "../components/appBar.js";
import AboutUs from "../components/aboutUs.js";
import Teams from "../components/teams.js";
import { StylesProvider } from "@material-ui/core/styles";
import ReactParticles from "react-particles-js";
import particles_config from "../particles-config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import FadeIn from "react-fade-in";

const allEvents = [
  {
    title: "GBM and Project Showcase",
    description:
      "To close the semester, come to our General Body Meeting. Students that participated in our project development program will showcase the projects they have been working on this past semester. After the showcase, the club's new officers will talk about tentative plans for the club and 2021 hackathon in the fall. Then, feel free to stay for game night. Play some games and hang out with your fellow Knight Hacks members. Also, there will be a surprise, so make sure to come!",
    time: "7:30 p.m.",
    location: "Zoom",
    date: "22",
    month: "Apr",
    tags: ["GBM", "Projects"],
    presenter: "",
  },
];

const IndexPage = ({ data }) => {
  const appBarRef = useRef(null);
  const aboutUsRef = useRef(null);
  const eventsRef = useRef(null);
  const teamsRef = useRef(null);
  const contactUsRef = useRef(null);

  return (
    <StylesProvider injectFirst>
      <div className="relative bg-KHblue">
        <Particles>
          <FadeIn transitionDuration={800}>
            <AppBar
              ref={appBarRef}
              left={
                <AppBarLink href="https://linktr.ee/knighthacks">
                  Linktree
                </AppBarLink>
              }
            >
              <AppBarLink scrollAnchor={aboutUsRef}>About</AppBarLink>
              <AppBarLink scrollAnchor={eventsRef}>Events</AppBarLink>
              <AppBarLink scrollAnchor={teamsRef}>Team</AppBarLink>
              <AppBarLink scrollAnchor={contactUsRef}>Contact Us</AppBarLink>
            </AppBar>
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
                <h1 className="flex justify-center mt-3.5 whitespace-nowrap text-gray-50 font-light text-sm sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl w-full">
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
            <AboutUs ref={aboutUsRef}>
              {data.aboutUsData.rawMarkdownBody}
            </AboutUs>
            <div className="my-6" ref={eventsRef}>
              <h1 className="font-light flex justify-center text-gray-50 text-4xl mt-14 my-6 ml-6 lg:text-5xl">
                Upcoming Events
              </h1>
              {allEvents.map((event, index) => (
                <Event key={index} {...event} />
              ))}
            </div>
            <Teams ref={teamsRef} data={data.teamsData.frontmatter} />
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
    aboutUsData: markdownRemark(frontmatter: { title: { eq: "About Us" } }) {
      rawMarkdownBody
    }
    teamsData: markdownRemark(frontmatter: { title: { eq: "Teams" } }) {
      frontmatter {
        members {
          image {
            childImageSharp {
              gatsbyImageData(width: 375, height: 375, placeholder: BLURRED)
            }
          }
          linkedin
          major
          name
          position
          personal
          instagram
          github
        }
        memberCount
        directorCount
        hackathonCount
        workshopCount
      }
    }
  }
`;

export default IndexPage;
