import * as React from "react";
import KnightHacksLogo from "../assets/logos/knightHacksLogoGold.svg";
import Newsletter from "../components/newsletter.js";
import Contacts from "../components/contacts.js";
import Calendar from "../components/calendar.js";
import Event from "../components/event.js";
import AppBar from "../components/AppBar.js";
import { StylesProvider } from "@material-ui/core/styles";
import ReactParticles from "react-particles-js";
import particles_config from "../particles-config";
import "./index.css";
import "@fontsource/roboto";
import "../fonts/AvenirNext-Regular.ttf";
import "../fonts/AvenirNext-UltraLight.ttf";

const IndexPage = () => {
  const allEvents = [
    {
      title: "Long Length Title for Event One",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae turpis massa sed elementum tempus egestas sed sed risus. Eleifend donec pretium vulputate sapien nec. Vitae semper quis lectus nulla at volutpat diam.",
      time: "4:00",
      location: "Zoom",
      date: "14",
      month: "August",
    },
    {
      title: "Long Length Title for Event Two",
      description: "Tempor orci dapibus ultrices in iaculis nunc sed. Eget sit amet tellus cras adipiscing. Diam donec adipiscing tristique risus nec feugiat. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Et netus et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Faucibus a pellentesque sit amet. A lacus vestibulum sed arcu non odio euismod lacinia. Justo nec ultrices dui sapien eget.",
      time: "6:00",
      location: "Discord",
      date: "2",
      month: "May",
    }
  ]

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
              <h1 className ="LogoSubheading">UCFs Hackathon Club</h1>
            </div>
          </div>
          <div className="EventsContainer">
            <h1 className="Subtitle">Upcoming Events</h1>
            {allEvents.map((event, index) =>(
              <Event
                key={index}
                title={event.title}
                description={event.description}
                time={event.time}
                location={event.location}
                date={event.date}
                month={event.month}
              />
            ))}
          </div>
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

export default IndexPage;
