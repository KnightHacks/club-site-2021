import React, { useRef } from "react";
import AppBar from "../components/appBar.js";
import { StylesProvider } from "@material-ui/core/styles";
import Particles from "react-particles-js";
import Card from "../components/card.js";
import "./index.css";
import {Grid} from '@material-ui/core';




const directors = ({data})=> {
    const appBarRef = useRef(null);
  const aboutUsRef = useRef(null);
  const eventsRef = useRef(null);
  const teamsRef = useRef(null);
  const contactUsRef = useRef(null);
    return (
      
        <StylesProvider injectFirst>
        <AppBar
          ref={appBarRef}
          appBarRef={appBarRef}
          aboutUsRef={aboutUsRef}
          eventsRef={eventsRef}
          teamsRef={teamsRef}
          contactUsRef={contactUsRef}
        />
      <h1 className="font-light flex justify-center mt-24 text-gray-50 text-4xl my-5 ml-6 lg:text-5xl">Past Directors</h1>
      <div className="mt-32 ml-36 justify-center">
      
        <Grid container spacing={7}>
           <Grid item >
        <Card/>
        </Grid>
        <Grid item >
        <Card/>
        </Grid>
        <Grid item >
        <Card/>
        </Grid>
        <Grid item >
        <Card/>
        </Grid>
        <Grid item >
        <Card/>
        </Grid>
        <Grid item>
        <Card/>
        </Grid>
        <Grid item>
        <Card/>
        </Grid>
        <Grid item>
        <Card/>
        </Grid>
        <Grid item>
        <Card/>
        </Grid>
        <Grid item>
        <Card/>
        </Grid>
        <Grid item>
        <Card/>
        </Grid>
        <Grid item>
        <Card/>
        </Grid>
        </Grid>
        </div>
         
    
  
      </StylesProvider>
    )
}


export default directors;
