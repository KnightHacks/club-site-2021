import React, { useState, forwardRef } from "react";
import {
  AppBar as MaterialAppBar,
  Toolbar,
  Button,
  ButtonGroup,
  useScrollTrigger,
  Hidden,
  Menu,
  MenuItem,
} from "@material-ui/core";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppBar = forwardRef(
  ({ appBarRef, aboutUsRef, eventsRef, contactUsRef, teamsRef }, ref) => {
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

    const [anchorEl, setAnchorEl] = useState(null);

    return React.cloneElement(
      <MaterialAppBar
        className={
          trigger
            ? "bg-KHnavbar transition ease-out duration-300"
            : "bg-transparent transition ease-out duration-300"
        }
        position="fixed"
        ref={ref}
      >
        <Toolbar className="flex justify-between xs:text-base sm:text-lg md:text-xl">
          <Button
            href="https://linktr.ee/knighthacks"
            className={`
              text-base text-white font-regular normal-case
              md:text-lg
              `}
            color="inherit"
          >
            Linktree
          </Button>
          <Hidden smDown={true}>
            <ButtonGroup variant="none">
              <Button
                className={`
                text-base
                font-regular normal-case
                focus:outline-none focus:ring-0
                focus:text-KHgold
                md:text-lg
                `}
                color="inherit"
                onClick={() => scroll(aboutUsRef)}
              >
                About
              </Button>
              <Button
                className={`
                text-base
                font-regular normal-case
                focus:outline-none focus:ring-0
                focus:text-KHgold
                md:text-lg
                `}
                color="inherit"
                onClick={() => scroll(eventsRef)}
              >
                Events
              </Button>
              <Button
                className={`
              text-base
              font-regular normal-case
              focus:outline-none focus:ring-0
              focus:text-KHgold
              md:text-lg
              `}
                color="inherit"
                onClick={() => scroll(teamsRef)}
              >
                Team
              </Button>
              <Button
                className={`
              text-base
              font-regular normal-case
              focus:outline-none focus:ring-0
              focus:text-KHgold
              md:text-lg
              `}
                color="inherit"
                onClick={() => scroll(contactUsRef)}
              >
                Contact Us
              </Button>
            </ButtonGroup>
          </Hidden>
          <Hidden smUp={true}>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              color="inherit"
              className={`
              text-base
              font-regular normal-case
              focus:outline-none focus:ring-0
              focus:text-KHgold
              md:text-lg
              bg-opacity-0
              `}
              onClick={(event) => setAnchorEl(event.currentTarget)}
              style={{ backgroundColor: "transparent" }}
            >
              <FontAwesomeIcon icon={faBars} />
            </Button>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem
                style={{
                  backgroundColor: "#181d41",
                  color: "white",
                  fontFamily: "Avenir Next Regular",
                }}
                onClick={() => {
                  scroll(aboutUsRef);
                  setAnchorEl(null);
                }}
              >
                About
              </MenuItem>
              <MenuItem
                style={{
                  backgroundColor: "#181d41",
                  color: "white",
                  fontFamily: "Avenir Next Regular",
                }}
                onClick={() => {
                  scroll(eventsRef);
                  setAnchorEl(null);
                }}
              >
                Events
              </MenuItem>
              <MenuItem
                style={{
                  backgroundColor: "#181d41",
                  color: "white",
                  fontFamily: "Avenir Next Regular",
                }}
                onClick={() => {
                  scroll(teamsRef);
                  setAnchorEl(null);
                }}
              >
                Team
              </MenuItem>
              <MenuItem
                style={{
                  backgroundColor: "#181d41",
                  color: "white",
                  fontFamily: "Avenir Next Regular",
                }}
                onClick={() => {
                  scroll(contactUsRef);
                  setAnchorEl(null);
                }}
              >
                Contact Us
              </MenuItem>
            </Menu>
          </Hidden>
        </Toolbar>
      </MaterialAppBar>,
      { elevation: trigger ? 10 : 0 }
    );
  }
);

export default AppBar;
