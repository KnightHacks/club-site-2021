import React, { forwardRef } from "react";
import { useScrollTrigger } from "@material-ui/core";

const AppBarLink = ({ className, children, ...props }) => {
  return (
    <a
      className={`
        cursor-pointer text-base font-regular normal-case inline-block select-none px-4 py-4 
        hover:text-KHgold active:bg-KHnavbar-dark active:text-KHgold-slightly-dark
        md:text-lg
        ${className}
      `}
      {...props}
    >
      {children}
    </a>
  );
};

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

    const shadow = {
      boxShadow: `
        0px 6px 6px -3px rgba(0,0,0,0.2),
        0px 10px 14px 1px rgba(0,0,0,0.14),
        0px 4px 18px 3px rgba(0,0,0,0.12)
      `,
    };

    return React.cloneElement(
      <div
        style={trigger ? shadow : null}
        className={
          "fixed w-full z-50 " +
          (trigger
            ? "bg-KHnavbar transition ease-out duration-300"
            : "bg-transparent transition ease-out duration-300")
        }
        ref={ref}
      >
        <div className="text-white flex justify-between xs:text-base sm:text-lg md:text-xl">
          <div className="ml-4">
            <AppBarLink href="https://linktr.ee/knighthacks">
              Linktree
            </AppBarLink>
          </div>
          <div className="mr-4">
            <AppBarLink onClick={() => scroll(aboutUsRef)}>About</AppBarLink>
            <AppBarLink onClick={() => scroll(eventsRef)}>Events</AppBarLink>
            <AppBarLink onClick={() => scroll(teamsRef)}>Team</AppBarLink>
            <AppBarLink onClick={() => scroll(contactUsRef)}>
              Contact Us
            </AppBarLink>
          </div>
        </div>
      </div>,
      { elevation: trigger ? 10 : 0 }
    );
  }
);

export default AppBar;
