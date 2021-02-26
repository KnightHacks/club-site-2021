import React from "react";
import Carousel from "react-elastic-carousel";
import CountUp from "react-countup";
import "./teams.css";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";


const Teams = ({members}) => {
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ];
  

  return (
    <div className="Teams">
      <h1 className="Subtitle">Meet the Team</h1>
      <Carousel breakPoints={breakPoints} style={{ width: "90vw" }}>
        {members.map(
          member => 
          <Card className="TeamCard">
          <CardHeader
            className="TeamHeader"
            title={member.name}
            subheader={member.position}
           
            
          />
           <Typography className="Major" align="left" variant="subtitle1" color="textSecondary" component="p">
           {member.major}
            </Typography>
           
          <CardMedia
            className="TeamPicture"
            image ={member.image}
            title={member.name}
          />
          <CardContent className="Icon">
          <Typography variant="body2" color="textSecondary" component="p">   
          <a href={member.linkedin}>
          <FontAwesomeIcon icon={faLinkedin} color="#0E76A8" className="Iconlink" />
          </a>          
          </Typography>
           
            
         </CardContent>
        </Card>
        )} 
        
      </Carousel>

      <h1 className="TeamSubtitle">Our Members</h1>

      <div class="Members">
        <div class="ClubMembers">
          <h1 className="Counter">
            <CountUp end={200} duration={7} />
          </h1>
          <span className="MemberSubtitle">active members</span>
        </div>
        <div class="ClubDirectors">
          <h1 className="Counter">
            <CountUp end={50} duration={7} />
          </h1>
          <span className="MemberSubtitle">developers & directors</span>
        </div>
      </div>
    </div>
  );
};

export default Teams;
