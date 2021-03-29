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
          <div>
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
          </div>
        </Toolbar>
      </MaterialAppBar>,
      { elevation: trigger ? 10 : 0 }
    );
  }
);

export default AppBar;
