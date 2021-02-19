import React from "react";
import {
  AppBar as MaterialAppBar,
  Toolbar,
  Button,
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
      </Toolbar>
    </MaterialAppBar>,
    { elevation: trigger ? 10 : 0 }
  );
};

export default AppBar;
