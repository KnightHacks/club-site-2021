import React from "react";
import Carousel from "react-elastic-carousel";
import CountUp from "react-countup";
import "./teams.css";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, forwardRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const useWidth = () => {
  let tempWidth;
  if (typeof window !== "undefined") {
    tempWidth = window.innerWidth;
  }

  const [width, setWidth] = useState(tempWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

const getItemsToShow = (width) => {
  switch (true) {
    case width >= 1500:
      return 4;
    case width >= 1200:
      return 3;
    case width >= 768:
      return 2;
    default:
      return 1;
  }
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

const Teams = forwardRef((props, ref) => {
  const width = useWidth();
  const [itemsToShow, setItemsToShow] = useState(getItemsToShow(width));
  const [members, setMembers] = useState([]);

  const data = useStaticQuery(graphql`
    query teamsQuery {
      markdownRemark(frontmatter: { title: { eq: "Teams" } }) {
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
        }
      }
    }
  `);

  useEffect(() => {
    const handleRandomize = () => {
      const members = shuffleArray(data.markdownRemark.frontmatter.members);
      setMembers(members);
    };
    handleRandomize();
  }, []);

  useEffect(() => {
    setItemsToShow(getItemsToShow(width));
  }, [width]);

  return (
    <div className="flex flex-col items-center w-full" ref={ref}>
      <h1 className="font-light flex justify-center text-gray-50 text-4xl mt-14 my-6 ml-6 lg:text-5xl">
        Meet the Team
      </h1>
      <Carousel
        itemsToShow={itemsToShow}
        itemsToScroll={itemsToShow}
        style={{ width: "90vw" }}
      >
        {members.map((member, index) => (
          <Card
            className="font-regular w-max m-1 sm:m-5 focus:outline-none focus:ring-2 focus:ring-white rounded-md text-xs"
            key={index}
          >
            <CardHeader className="pb-0" />
            <Typography className="mt-0 pl-4 pb-0 font-regular text-xl sm:text-2xl">
              {member.name}
            </Typography>
            <Typography className="pl-4 pb-0 font-regular font-bold text-gray-500 text-xs sm:text-sm">
              {member.position}
            </Typography>
            <Typography
              className="pl-4 pb-1.5 text-gray-400 font-regular text-xs sm:text-sm"
              align="left"
              variant="subtitle1"
              component="p"
            >
              {member.major}
            </Typography>

            <GatsbyImage
              image={getImage(member.image)}
              imgStyle={{
                userDrag: "none",
                userSelect: "none",
                MozUserSelect: "none",
                WebkitUserDrag: "none",
                WebkitUserSelect: "none",
                msUserSelect: "none",
              }}
            />

            <CardContent className="flex items-start h-14">
              <Typography variant="body2" color="textSecondary" component="p">
                {member.linkedin ? (
                  <a href={member.linkedin} draggable="false">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      color="#000000"
                      className="mr-2 pr-0.5 pl-2 mt-0 text-4xl hover:text-gray-400"
                    />
                  </a>
                ) : null}
                {member.instagram ? (
                  <a href={member.instagram} draggable="false">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      color="#000000"
                      className="mr-2 pr-0.5 pl-2 text-4xl hover:text-gray-400"
                    />
                  </a>
                ) : null}
                {member.twitter ? (
                  <a href={member.twitter} draggable="false">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      color="#000000"
                      className="mr-2 pr-0.5 pl-2 text-4xl hover:text-gray-400"
                    />
                  </a>
                ) : null}
                {member.github ? (
                  <a href={member.github} draggable="false">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="mr-2 pr-0.5 pl-2 text-4xl hover:text-gray-400"
                      color="#000000"
                    />
                  </a>
                ) : null}
                {member.personal ? (
                  <a href={member.personal} draggable="false">
                    <FontAwesomeIcon
                      icon={faLaptopCode}
                      className="mr-1 pr-0.5 pl-2 text-3xl hover:text-gray-400"
                      color="#000000"
                    />
                  </a>
                ) : null}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Carousel>

      <h1 className="font-light flex items-start justify-around text-center text-gray-50 text-3xl w-full my-5 flex-wrap">
        Our Members
      </h1>

      <div className="font-light flex justify-center flex-row text-white mb-12">
        <div className="text-4xl text-center my-0 mx-3.5">
          <h1 className="mb-0">
            <CountUp
              end={data.markdownRemark.frontmatter.memberCount}
              duration={7}
            />
          </h1>
          <span className="m-0 text-2xl">active members</span>
        </div>
        <div className="text-4xl text-center">
          <h1 className="mb-0">
            <CountUp
              end={data.markdownRemark.frontmatter.directorCount}
              duration={7}
            />
          </h1>
          <span className="m-0 text-2xl">developers & directors</span>
        </div>
      </div>
    </div>
  );
});

export default Teams;
