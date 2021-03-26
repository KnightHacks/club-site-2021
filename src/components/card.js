import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Student Image"
          height="140"
          image="../../images/abr.jpg"
          title="Student Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            First Last
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            A summary of the contributions that were made to the club
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a>
          <FontAwesomeIcon
            icon={faLinkedin}
            color="#000000"
            className="mr-2 pr-0.5 pl-2 mt-0 text-4xl hover:text-gray-400"
          />
        </a>
        <a>
          <FontAwesomeIcon
            icon={faInstagram}
            color="#000000"
            className="mr-2 pr-0.5 pl-2 text-4xl hover:text-gray-400"
          />
        </a>

        <Typography
          className="pl-1 pb-1.5 text-base"
          align="left"
          variant="h2"
          color="textSecondary"
          component="p"
        >
          Years Active
        </Typography>
      </CardActions>
    </Card>
  );
}
