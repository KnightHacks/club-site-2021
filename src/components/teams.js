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
import { useEffect, useState } from "react";

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

const Teams = ({ members }) => {
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
    <div className="Teams">
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
              image={member.image}
              title={member.name}
            />
            <CardContent className="Icon">
              <Typography variant="body2" color="textSecondary" component="p">
                <a href={member.linkedin}>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    color="#0E76A8"
                    className="Iconlink"
                  />
                </a>
                <a href={member.twitter}>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    color="#00ACEE"
                    className="Iconlink2"
                    padding-left="50px"
                  />
                </a>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Carousel>

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
};

export default Teams;
