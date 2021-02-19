import React from "react";
import { AppBar as MaterialAppBar, Toolbar, Button, ButtonGroup } from "@material-ui/core";
import "./AppBar.css";

const AppBar = () => {
  return (
    <MaterialAppBar position="sticky">
      <Toolbar className="buttons">
      <Button color="inherit" className = "tree"> Linktree </Button>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button className = "button" color="inherit">About</Button>
        <Button className = "button" color="inherit">Events</Button>
        <Button className = "button" color="inherit">Team</Button>
        <Button className = "button" color="inherit">Contact Us</Button>
      </ButtonGroup>
      </Toolbar>
    </MaterialAppBar>
  );
};

export default AppBar;
