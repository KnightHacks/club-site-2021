import React, { useRef, forwardRef } from "react";
import { graphql } from "gatsby";
import KnightHacksLogo from "../assets/logos/knightHacksLogoGold.svg";
import Newsletter from "../components/newsletter.js";
import Contacts from "../components/contacts.js";
import SocialMediaIcon from "../components/socialMediaIcon.js";
import Event from "../components/event.js";
import { AppBar, AppBarLink } from "../components/appBar.js";
import AboutUs from "../components/aboutUs.js";
import Teams from "../components/teams.js";
import { StylesProvider } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import AnimatedHue from "../components/animatedHue";
import "./index.css";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import allEvents from "../assets/json/events.json";

const IndexPage = ({ data }) => {
  const appBarRef = useRef(null);
  const aboutUsRef = useRef(null);
  const eventsRef = useRef(null);
  const teamsRef = useRef(null);
  const contactUsRef = useRef(null);

  return (
    <Wrappers>
      <title>Knight Hacks</title>
      <AppBar ref={appBarRef}>
        <AppBarLink href="https://linktr.ee/knighthacks">Linktree</AppBarLink>
        <AppBarLink scrollAnchor={aboutUsRef}>About</AppBarLink>
        <AppBarLink scrollAnchor={eventsRef}>Events</AppBarLink>
        <AppBarLink scrollAnchor={teamsRef}>Team</AppBarLink>
        <AppBarLink scrollAnchor={contactUsRef}>Contact Us</AppBarLink>
      </AppBar>
      <KHLogo
        subtitle={data.site.siteMetadata.description}
        scrollAnchor={aboutUsRef}
        appBarRef={appBarRef}
      />
      <AboutUs ref={aboutUsRef}>{data.aboutUsData.rawMarkdownBody}</AboutUs>
      <Events ref={eventsRef} />
      <Teams ref={teamsRef} data={data.teamsData.frontmatter} />
      <ConnectWithUs ref={contactUsRef} />
    </Wrappers>
  );
};

const Wrappers = ({ children }) => {
  return (
    <AnimatedHue
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
      }}
    >
      <StylesProvider injectFirst>
        <div>
          {children}
          {/* <Particles>
          <FadeIn transitionDuration={800}>{children}</FadeIn>
        </Particles> */}
        </div>
      </StylesProvider>
    </AnimatedHue>
  );
};

const KHLogo = ({ subtitle, scrollAnchor, appBarRef }) => {
  return (
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
          {subtitle}
        </h1>
      </div>
      <CtaArrow scrollAnchor={scrollAnchor} appBarRef={appBarRef} />
    </div>
  );
};

const CtaArrow = ({ scrollAnchor, appBarRef }) => {
  return (
    <div className="flex w-full justify-center absolute bottom-0">
      <FontAwesomeIcon
        icon={faChevronDown}
        className="cursor-pointer text-KHgold text-5xl md:text-7xl w-12 md:w-32"
        onClick={() =>
          window.scrollTo({
            top:
              scrollAnchor.current.offsetTop - appBarRef.current.clientHeight,
            behavior: "smooth",
          })
        }
      />
    </div>
  );
};

const Events = forwardRef((props, ref) => {
  return (
    <div className="my-6" ref={ref}>
      <h1 className="font-light flex justify-center text-gray-50 text-4xl mt-14 my-6 ml-6 lg:text-5xl">
        Upcoming Events
      </h1>
      {allEvents.map((event, index) => (
        <Event key={index} {...event} />
      ))}
    </div>
  );
});

Events.displayName = "Events";

const ConnectWithUs = forwardRef((props, ref) => {
  return (
    <div className="flex flex-col my-5 h-96" ref={ref}>
      <h1 className="font-light flex justify-center text-gray-50 text-4xl mt-24 my-5 lg:text-5xl">
        Connect With Us
      </h1>
      <div className="my-6 flex flex-col md:flex-row items-center justify-around w-full text-center h-full">
        <Newsletter />
        <Contacts
          main={
            <SocialMediaIcon
              href="https://discord.gg/Kv5g9vf"
              icon={faDiscord}
              color="white"
              className="mb-8 text-4xl md:text-7xl lg:text-8xl hover:text-gray-500"
            />
          }
          email={
            <a
              href="mailto:team@knighthacks.org?subject=Let's%20talk.&body=Hey%20KnightHacks!"
              className="font-light text-2xl text-white no-underline hover:text-gray-600"
            >
              team@knighthacks.org
            </a>
          }
        >
          <SocialMediaIcon
            href="https://github.com/KnightHacks"
            icon={faGithub}
            color="white"
            className="text-4xl md:text-5xl lg:text-6xl hover:text-gray-500"
          />
          <SocialMediaIcon
            href="https://www.instagram.com/knighthacks/"
            icon={faInstagram}
            color="white"
            className="text-4xl md:text-5xl lg:text-6xl hover:text-gray-500"
          />
          <SocialMediaIcon
            href="https://www.facebook.com/KnightHacks/"
            icon={faFacebook}
            color="white"
            className="text-4xl md:text-5xl lg:text-6xl hover:text-gray-500"
          />
          <SocialMediaIcon
            href="https://twitter.com/KnightHacks?lang=en/"
            icon={faTwitter}
            color="white"
            className="text-4xl md:text-5xl lg:text-6xl hover:text-gray-500"
          />
        </Contacts>
      </div>
    </div>
  );
});

ConnectWithUs.displayName = "ConnectWithUs";

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
