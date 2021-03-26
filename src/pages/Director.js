import React, { useRef } from "react";
import AppBar from "../components/appBar.js";
import { StylesProvider } from "@material-ui/core/styles";
import Particles from "react-particles-js";
import Card from "../components/card.js";
import "./index.css";
import {Grid} from '@material-ui/core';




const Director = ({data})=> {
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
        <Grid container>
           
        <Card></Card>
     
        </Grid>
     
          <Particles>
          

       
          </Particles>
  
      </StylesProvider>
    )
}


export default Director;
