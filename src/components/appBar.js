import React, { forwardRef } from "react";
import {
  AppBar as MaterialAppBar,
  Toolbar,
  Button,
  ButtonGroup,
  useScrollTrigger,
} from "@material-ui/core";
import "./appBar.css";

const AppBar = forwardRef(
  ({ appBarRef, aboutUsRef, eventsRef, contactUsRef }, ref) => {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    const scroll = (toRef) => {
      window.scrollTo({
        top: toRef.current.offsetTop - appBarRef.current.clientHeight,
        behavior: "smooth",
      });
    };

    return React.cloneElement(
      <MaterialAppBar
        className={trigger ? "opaque" : "transparent"}
        position="fixed"
        ref={ref}
      >
        <Toolbar className="buttons">
          <Button
            href="https://linktr.ee/knighthacks"
            className="button"
            color="inherit"
          >
            Linktree
          </Button>
          <ButtonGroup variant="text">
            <Button
              className="button"
              color="inherit"
              onClick={() => scroll(aboutUsRef)}
            >
              About
            </Button>
            <Button
              className="button"
              color="inherit"
              onClick={() => scroll(eventsRef)}
            >
              Events
            </Button>
            <Button className="button" color="inherit">
              Team
            </Button>
            <Button
              className="button"
              color="inherit"
              onClick={() => scroll(contactUsRef)}
            >
              Contact Us
            </Button>
          </ButtonGroup>
        </Toolbar>
      </MaterialAppBar>,
      { elevation: trigger ? 10 : 0 }
    );
  }
);

export default AppBar;
