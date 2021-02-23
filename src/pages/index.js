import * as React from "react";
import KnightHacksLogo from "../assets/logos/knightHacksLogoGold.svg";
import Newsletter from "../components/newsletter.js";
import Contacts from "../components/contacts.js";
import Calendar from "../components/calendar.js";
import Event from "../components/event.js";
import "./index.css";
import "@fontsource/roboto";
import "../fonts/avenirnext-regular.ttf";
import "../fonts/avenirnext-ultralight.ttf";

const logoHeight = 100;
const logoWidth = 200;

const IndexPage = () => {
  const allEvents = [
    {
      title: "Event One",
      description: "A long description",
      time: "4:00",
      location: "Zoom",
      date: "14",
      month: "August",
    },
    {
      title: "Event Two",
      description: "A longer description",
      time: "6:00",
      location: "Discord",
      date: "2",
      month: "May",
    }
  ]

  return (
    <div className="LandingPage">
      <title>Home Page</title>
      <div className="KnightHacksLogo">
        <img
          src={KnightHacksLogo}
          className="KHLogo"
          height={logoHeight}
          width={logoWidth}
          alt="Knight Hacks Logo"
        />
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
    </div>
  );
};

export default IndexPage;
