import React from "react";
import { AppBar as MaterialAppBar, Toolbar, Button } from "@material-ui/core";
import "./AppBar.css";

const AppBar = () => {
  return (
    <MaterialAppBar position="sticky">
      <Toolbar className="appbar">
        <Button color="inherit">About</Button>
        <Button color="inherit">Events</Button>
        <Button color="inherit">Team</Button>
        <Button color="inherit">Contact Us</Button>
      </Toolbar>
    </MaterialAppBar>
  );
};

export default AppBar;
