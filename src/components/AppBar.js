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
      position="sticky"
    >
      <Toolbar className="buttons">
        <Button color="inherit">About</Button>
        <Button color="inherit">Events</Button>
        <Button color="inherit">Team</Button>
        <Button color="inherit">Contact Us</Button>
      </Toolbar>
    </MaterialAppBar>,
    { elevation: trigger ? 10 : 0 }
  );
};

export default AppBar;
