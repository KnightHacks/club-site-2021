import React, { forwardRef, useRef } from "react";

import { StylesProvider } from "@material-ui/core/styles";
import ReactParticles from "react-particles-js";
import particles_config from "../particles-config";
import "./index.css";
import { Grid } from "@material-ui/core";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStaticQuery, graphql } from "gatsby";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import index from "../../src/pages/index.js";
import { useEffect, useState } from "react";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

const directors = forwardRef((props, ref) => {
  const [members, setMembers] = useState([]);
  const data = useStaticQuery(graphql`
    query pastDirectorsQuery {
      markdownRemark(frontmatter: { title: { eq: "pastDirectors" } }) {
        frontmatter {
          members {
            image
            linkedin
            name
            position
            instagram
            github
            years
          }
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

  return (
    <Router>
      <StylesProvider injectFirst>
        <Particles>
          <Link to="/index">
            <Button variant="contained" color="primary" className="ml-9 mt-9">
              Back to Home
            </Button>
          </Link>
          <Switch>
            <Route path="/index" component={index} exact={true} />
          </Switch>
          <h1
            className="font-light flex justify-center mt-24 text-gray-50 text-4xl my-5 ml-6 lg:text-5xl"
            ref={ref}
          >
            Past Directors
          </h1>

          <div className="mt-32 ml-36 justify-center">
            <Grid container spacing={3}>
              <Grid item>
                {members.map((member, index) => (
                  <Card key={index}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Student Image"
                        height="140"
                        image={member.image}
                        title="Student Image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {member.name}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {member.contributions}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a href={member.linkedin}>
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          color="#000000"
                          className="mr-2 pr-0.5 pl-2 mt-0 text-4xl hover:text-gray-400"
                        />
                      </a>
                      <a href={member.instagram}>
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
                        {member.year}
                      </Typography>
                    </CardActions>
                  </Card>
                ))}
                );
              </Grid>
              <Grid item>
                <Card />
              </Grid>
              <Grid item>
                <Card />
              </Grid>
              <Grid item>
                <Card />
              </Grid>
              <Grid item>
                <Card />
              </Grid>
              <Grid item>
                <Card />
              </Grid>
              <Grid item>
                <Card />
              </Grid>
              <Grid item>
                <Card />
              </Grid>
              <Grid item>
                <Card />
              </Grid>
              <Grid item>
                <Card />
              </Grid>
              <Grid item>
                <Card />
              </Grid>
              <Grid item>
                <Card />
              </Grid>
            </Grid>
          </div>
        </Particles>
      </StylesProvider>
    </Router>
  );
});

const Particles = ({ children }) => {
  return (
    <div className="absolute w-full">
      <ReactParticles
        params={particles_config}
        className="fixed top-0 left-0"
        width="100vw"
        height="100vh"
      />
      {children && <div className="relative">{children}</div>}
    </div>
  );
};

export default directors;
