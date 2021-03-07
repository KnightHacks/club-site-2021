import React from "react";
import Carousel from "react-elastic-carousel";
import CountUp from "react-countup";
import "./teams.css";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
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
            image
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
    <div className="Teams" ref={ref}>
      <h1 className="Subtitle">Meet the Team</h1>
      <Carousel
        itemsToShow={itemsToShow}
        itemsToScroll={itemsToShow}
        style={{ width: "90vw" }}
      >
        {members.map((member, index) => (
          <Card className="TeamCard" key={index}>
            <CardHeader
              className="TeamHeader"
              title={member.name}
              subheader={member.position}
            />
            <Typography
              className="Major"
              align="left"
              variant="subtitle1"
              color="textSecondary"
              component="p"
            >
              {member.major}
            </Typography>

            <CardMedia
              className="TeamPicture"
              image={require(`../images/${member.image}`)}
              title={member.name}
            />
            <CardContent className="SocialIcons">
              <Typography variant="body2" color="textSecondary" component="p">
                {member.linkedin ? (
                  <a href={member.linkedin} draggable="false">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      color="#000000"
                      className="Iconlink"
                    />
                  </a>
                ) : null}
                {member.instagram ? (
                  <a href={member.instagram} draggable="false">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      color="#000000"
                      className="Iconlink"
                    />
                  </a>
                ) : null}
                {member.twitter ? (
                  <a href={member.twitter} draggable="false">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      color="#000000"
                      className="Iconlink"
                    />
                  </a>
                ) : null}
                {member.github ? (
                  <a href={member.github} draggable="false">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="Iconlink"
                      color="#000000"
                    />
                  </a>
                ) : null}
                {member.personal ? (
                  <a href={member.personal} draggable="false">
                    <FontAwesomeIcon
                      icon={faLaptopCode}
                      className="Iconlink"
                      color="#000000"
                    />
                  </a>
                ) : null}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Carousel>

      <h1 className="TeamSubtitle">Our Members</h1>

      <div className="Members">
        <div className="ClubMembers">
          <h1 className="Counter">
            <CountUp
              end={data.markdownRemark.frontmatter.memberCount}
              duration={7}
            />
          </h1>
          <span className="MemberSubtitle">active members</span>
        </div>
        <div className="ClubDirectors">
          <h1 className="Counter">
            <CountUp
              end={data.markdownRemark.frontmatter.directorCount}
              duration={7}
            />
          </h1>
          <span className="MemberSubtitle">developers & directors</span>
        </div>
      </div>
    </div>
  );
});

export default Teams;
