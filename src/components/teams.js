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
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Img from "gatsby-image";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, forwardRef } from "react";
import { StaticQuery, graphql } from "gatsby";

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

const Teams = forwardRef(({ members, ...props }, ref) => {
  const width = useWidth();
  const getItemsToShow = () => {
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
  const [itemsToShow, setItemsToShow] = useState(getItemsToShow());

  useEffect(() => {
    setItemsToShow(getItemsToShow());
  }, [width]);

  return (
    <div className="Teams" ref={ref}>
      <h1 className="Subtitle">Meet the Team</h1>
      <StaticQuery
        query={graphql`
          query teamsQuery {
            markdownRemark(frontmatter: { title: { eq: "Teams" } }) {
              frontmatter {
                members {
                  image {
                    childImageSharp {
                      fluid(maxWidth: 300, maxHeight: 320) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                  linkedin
                  major
                  name
                  position
                  twitter
                }
              }
            }
          }
        `}
        render={(data) => (
          <Carousel
            itemsToShow={itemsToShow}
            itemsToScroll={itemsToShow}
            style={{ width: "90vw" }}
          >
            {data.markdownRemark.frontmatter.members.map((member, index) => (
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

                <Img
                  title={member.name}
                  alt={member.name}
                  fluid={member.image.childImageSharp.fluid}
                />

                <CardContent className="Icon">
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {member.linkedin ? (
                      <a href={member.linkedin}>
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          color="#0E76A8"
                          className="Iconlink"
                        />
                      </a>
                    ) : null}
                    {member.twitter ? (
                      <a href={member.twitter}>
                        <FontAwesomeIcon
                          icon={faTwitter}
                          color="#00ACEE"
                          className="Iconlink"
                        />
                      </a>
                    ) : null}
                    {member.personal ? (
                      <a href={"https://google.com/"}>
                        <FontAwesomeIcon
                          icon={faLaptopCode}
                          className="Iconlink"
                          color="#aaa"
                        />
                      </a>
                    ) : null}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Carousel>
        )}
      />

      <h1 className="TeamSubtitle">Our Members</h1>

      <div className="Members">
        <div className="ClubMembers">
          <h1 className="Counter">
            <CountUp end={127} duration={7} />
          </h1>
          <span className="MemberSubtitle">active members</span>
        </div>
        <div className="ClubDirectors">
          <h1 className="Counter">
            <CountUp end={24} duration={7} />
          </h1>
          <span className="MemberSubtitle">developers & directors</span>
        </div>
      </div>
    </div>
  );
});

export default Teams;
