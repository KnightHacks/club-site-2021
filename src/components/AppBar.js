import React from "react";
import {
  AppBar as MaterialAppBar,
  Toolbar,
  Button,
  ButtonGroup,
  useScrollTrigger,
} from "@material-ui/core";
import "./AppBar.css";

const AppBar = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(
    <MaterialAppBar
      className={trigger ? "opaque" : "transparent"}
      position="fixed"
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
          <Button className="button" color="inherit">
            About
          </Button>
          <Button className="button" color="inherit">
            Events
          </Button>
          <Button className="button" color="inherit">
            Team
          </Button>
          <Button className="button" color="inherit">
            Contact Us
          </Button>
        </ButtonGroup>
      </Toolbar>
    </MaterialAppBar>,
    { elevation: trigger ? 10 : 0 }
  );
};

export default AppBar;
