import React, { forwardRef } from "react";
import {
  AppBar as MaterialAppBar,
  Toolbar,
  Button,
  ButtonGroup,
  useScrollTrigger,
} from "@material-ui/core";

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
        <Toolbar className="flex justify-between">
          <Button
            href="https://linktr.ee/knighthacks"
            className="text-white font-regular normal-case xs:text-base sm:text-lg md:text-xl"
            color="inherit"
          >
            Linktree
          </Button>
          <ButtonGroup variant="text">
            <Button
              className="font-regular normal-case focus:outline-none focus:ring-2 focus:ring-white rounded-md xs:text-base sm:text-lg md:text-xl"
              color="inherit"
              onClick={() => scroll(aboutUsRef)}
            >
              About
            </Button>
            <Button
              className="font-regular normal-case focus:outline-none focus:ring-2 focus:ring-white rounded-md xs:text-base sm:text-lg md:text-xl"
              color="inherit"
              onClick={() => scroll(eventsRef)}
            >
              Events
            </Button>
            <Button
              className="font-regular normal-case focus:outline-none focus:ring-2 focus:ring-white rounded-md xs:text-base sm:text-lg md:text-xl"
              color="inherit"
              onClick={() => scroll(teamsRef)}
            >
              Team
            </Button>
            <Button
              className="font-regular normal-case focus:outline-none focus:ring-2 focus:ring-white rounded-md xs:text-base sm:text-lg md:text-xl"
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
