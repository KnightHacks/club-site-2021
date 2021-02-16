import * as React from "react";
import { graphql } from "gatsby";
import KnightHacksLogo from "../assets/logos/knightHacksLogoGold.svg";
import Newsletter from "../components/newsletter.js";
import Navbar from "../components/navbar.js";
import Calendar from "../components/calendar.js";
import "./index.css";
import "@fontsource/roboto";
import "../fonts/avenirnext-regular.ttf";
import "../fonts/avenirnext-ultralight.ttf";

const logoHeight = 100;
const logoWidth = 200;

const IndexPage = ({ data }) => {
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
        <p className="Description">{data.site.siteMetadata.description}</p>
      </div>
      <Calendar></Calendar>
      <Newsletter></Newsletter>
      <Navbar></Navbar>
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
