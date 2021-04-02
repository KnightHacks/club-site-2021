import React, { useRef } from "react";
import AppBar from "../components/appBar.js";
import { StylesProvider } from "@material-ui/core/styles";
import ReactParticles from "react-particles-js";
import particles_config from "../particles-config";
import Card from "../components/card.js";
import "./index.css";
import { Grid } from "@material-ui/core";

const directors = ({ data }) => {

  return (
    <StylesProvider injectFirst>
      <Particles>
        <h1 className="font-light flex justify-center mt-24 text-gray-50 text-4xl my-5 ml-6 lg:text-5xl">
          Past Directors
        </h1>
        <div className="mt-32 ml-36 justify-center">
          <Grid container spacing={7}>
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
            <Grid item>
              <Card />
            </Grid>
          </Grid>
        </div>
      </Particles>
    </StylesProvider>
  );
};

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
