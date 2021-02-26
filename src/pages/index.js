import React from "react";
import KnightHacksLogo from "../assets/logos/knightHacksLogoGold.svg";
import Newsletter from "../components/newsletter.js";
import Contacts from "../components/contacts.js";
import Teams from "../components/teams.js";
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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae turpis massa sed elementum tempus egestas sed sed risus. Eleifend donec pretium vulputate sapien nec. Vitae semper quis lectus nulla at volutpat diam.",
      time: "4:00",
      location: "Zoom",
      date: "14",
      month: "Nov",
    },
    {
      title: "Long Length Title for Event Two",
      description:
        "Tempor orci dapibus ultrices in iaculis nunc sed. Eget sit amet tellus cras adipiscing. Diam donec adipiscing tristique risus nec feugiat. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Et netus et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Faucibus a pellentesque sit amet. A lacus vestibulum sed arcu non odio euismod lacinia. Justo nec ultrices dui sapien eget.",
      time: "6:00",
      location: "Discord",
      date: "02",
      month: "May",
    },
    {
      title: "Long Length Title for Event Three",
      description:
        "Tempor orci dapibus ultrices in iaculis nunc sed. Eget sit amet tellus cras adipiscing. Diam donec adipiscing tristique risus nec feugiat. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Et netus et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Faucibus a pellentesque sit amet. A lacus vestibulum sed arcu non odio euismod lacinia. Justo nec ultrices dui sapien eget.",
      time: "6:00",
      location: "Discord",
      date: "23",
      month: "Jun",
    },
    {
      title: "Long Length Title for Event Four",
      description:
        "Tempor orci dapibus ultrices in iaculis nunc sed. Eget sit amet tellus cras adipiscing. Diam donec adipiscing tristique risus nec feugiat. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Et netus et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Faucibus a pellentesque sit amet. A lacus vestibulum sed arcu non odio euismod lacinia. Justo nec ultrices dui sapien eget.",
      time: "6:00",
      location: "Discord",
      date: "12",
      month: "Jan",
    },
    {
      title: "Long Length Title for Event Five",
      description:
        "Tempor orci dapibus ultrices in iaculis nunc sed. Eget sit amet tellus cras adipiscing. Diam donec adipiscing tristique risus nec feugiat. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Et netus et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Faucibus a pellentesque sit amet. A lacus vestibulum sed arcu non odio euismod lacinia. Justo nec ultrices dui sapien eget.",
      time: "6:00",
      location: "Discord",
      date: "09",
      month: "Dec",
    },
    {
      title: "Long Length Title for Event Six",
      description:
        "Tempor orci dapibus ultrices in iaculis nunc sed. Eget sit amet tellus cras adipiscing. Diam donec adipiscing tristique risus nec feugiat. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Et netus et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Faucibus a pellentesque sit amet. A lacus vestibulum sed arcu non odio euismod lacinia. Justo nec ultrices dui sapien eget.",
      time: "6:00",
      location: "Discord",
      date: "22",
      month: "Feb",
    },
    {
      title: "Long Length Title for Event Seven",
      description:
        "Tempor orci dapibus ultrices in iaculis nunc sed. Eget sit amet tellus cras adipiscing. Diam donec adipiscing tristique risus nec feugiat. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Et netus et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Faucibus a pellentesque sit amet. A lacus vestibulum sed arcu non odio euismod lacinia. Justo nec ultrices dui sapien eget.",
      time: "6:00",
      location: "Discord",
      date: "30",
      month: "Apr",
    },
  ];
  const allMembers = [
    {
      name: "Chris Feltner",
      position:"President",
      major:
        "Computer Science & Political Science",
      image:require("../images/chris.jpg"),
      linkedin: "https://www.linkedin.com/",
      twitter:"https://twitter.com/?lang=en",
    },
    {
      name: "Cydni Turner",
      position:"Mentorship Co-Director",
      major:
        "Computer Science",
      image:require("../images/Cydni.jpeg"),

      linkedin: "https://www.linkedin.com/",
      twitter:"https://twitter.com/?lang=en",
    },
    
    {
      name: "Abraham Hernandez",
      position:"Projects Co-Director",
      major:
        "Computer Science",
        image:require("../images/Abraham.jpg"),
      linkedin: "https://www.linkedin.com/",
      twitter:"https://twitter.com/?lang=en",
    },
  
    {
      name: "Arjun Pherwani  ",
      position:"Development Director",
      major:
        "Computer Science",
      image:require("../images/Arjun.jpeg"),
      linkedin: "https://www.linkedin.com/",
      twitter:"https://twitter.com/?lang=en",

    },
   
    {
      name: "Melanie Ehrlich",
      position:"Communications Director",
      major:
        "Computer Science",
        image:require("../images/mel.jpg"),
      linkedin: "https://www.linkedin.com/",
      twitter:"https://twitter.com/?lang=en",

    },
    
  
    {
      name: "Dima Golubenko",
      position:"Projects Director",
      major:
        "Computer Science",
      image:require("../images/Dima.jpeg"),
      linkedin: "https://www.linkedin.com/",
      twitter:"https://twitter.com/?lang=en",
    },
    {
      name: "Robert Boyd ",
      position:"Workshops Director",
      major:
        "Computer Science",
      image:require("../images/rob.jpg"),
      linkedin: "https://www.linkedin.com/",
      twitter:"https://twitter.com/?lang=en",
    },
    {
      name: "Fridjinah Francois ",
      position:"Mentorship Co-Director",
      major:
        "Mathematics",
      image:require("../images/Fridjinah.jpg"),
      linkedin: "https://www.linkedin.com/",
      twitter:"https://twitter.com/?lang=en",
    },
    {
      name: "Rada Ursu ",
      position:"Design Director",
      major:
        "Experimental Animation",
      image:require("../images/rada.jpg"),
      linkedin: "https://www.linkedin.com/",
      twitter:"https://twitter.com/?lang=en",
    },
    {
      name: "Abrahan Nevarez ",
      position:"Development Director",
      major:
        "Information Technology",
      image:require("../images/abr.jpg"),
      linkedin: "https://www.linkedin.com/",
      twitter:"https://twitter.com/?lang=en",
    },
    {
      name: "Victoria Williamson",
      position:"Lead Hackathon Organizer",
      major:
        "Computer Science and Statistics ",
      image:require("../images/victoria.png"),
      linkedin: "https://www.linkedin.com/",
      twitter:"https://twitter.com/?lang=en",
    },
    {
      name: "Nicholas Yardich",
      position:"Logistics Director",
      major:
        "Computer Science",
      image:require("../images/nicholas.png"),
      linkedin: "https://www.linkedin.com/",
      twitter:"https://twitter.com/?lang=en",
    },
  ];

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
              <h1 className="LogoSubheading"> UCFs Hackathon Club</h1>
            </div>
          </div>
          <div className="EventsContainer">
            <h1 className="Subtitle">Upcoming Events</h1>
            {allEvents.map((event, index) => (
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
          <Teams members={allMembers} />
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

export default IndexPage;
