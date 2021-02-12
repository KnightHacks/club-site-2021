import React from "react";
import { AppBar as MaterialAppBar, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  appbar: {
    marginLeft: "auto",
    minHeight: 0,
  },
});

const AppBar = () => {
  const classes = useStyles();
  return (
    <MaterialAppBar position="static">
      <Toolbar variant="dense" className={classes.appbar}>
        <Button color="inherit">About</Button>
        <Button color="inherit">Events</Button>
        <Button color="inherit">Team</Button>
        <Button color="inherit">Contact Us</Button>
      </Toolbar>
    </MaterialAppBar>
  );
};

export default AppBar;
