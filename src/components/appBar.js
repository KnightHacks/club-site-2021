import React, { useState, useEffect, forwardRef } from "react";
import { useScrollTrigger } from "@material-ui/core";
import useWidth from "../useWidth";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppBarLink = ({ className, children, href, ...props }) => {
  return (
    <button
      className={`
        cursor-pointer text-base font-regular normal-case inline-block select-none px-8 py-4
        hover:text-KHgold 
        focus:bg-KHnavbar-dark focus:text-KHgold-slightly-dark 
        active:bg-KHnavbar-dark active:text-KHgold-slightly-dark
        md:text-lg
        ${className}
      `}
      onClick={href ? () => (window.location.href = href) : null}
      {...props}
    >
      {children}
    </button>
  );
};

const AppBar = forwardRef(
  ({ appBarRef, aboutUsRef, eventsRef, contactUsRef, teamsRef }, ref) => {
    const HAMBURGER_HEIGHT = appBarRef.current
      ? appBarRef.current.clientHeight * 4
      : 0;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    const scroll = (toRef) => {
      window.scrollTo({
        top:
          toRef.current.offsetTop -
          appBarRef.current.clientHeight +
          (isOpen ? HAMBURGER_HEIGHT : 0),
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
    const width = useWidth();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      if (width > 600) {
        setIsOpen(false);
      }
    }, [width]);

    return React.cloneElement(
      <div
        style={trigger ? shadow : null}
        className={
          "text-white fixed w-full z-50 " +
          (trigger
            ? "bg-KHnavbar transition ease-out duration-300"
            : "bg-transparent transition ease-out duration-300")
        }
        ref={ref}
      >
        <div className="flex flex-row flex-nowrap overflow-hidden items-center justify-between xs:text-base sm:text-lg md:text-xl">
          <AppBarLink
            className={isOpen ? "flex-auto" : ""}
            href="https://linktr.ee/knighthacks"
          >
            Linktree
          </AppBarLink>
          <div className={width <= 600 ? "hidden" : "visible"}>
            <AppBarLink onClick={() => scroll(aboutUsRef)}>About</AppBarLink>
            <AppBarLink onClick={() => scroll(eventsRef)}>Events</AppBarLink>
            <AppBarLink onClick={() => scroll(teamsRef)}>Team</AppBarLink>
            <AppBarLink onClick={() => scroll(contactUsRef)}>
              Contact Us
            </AppBarLink>
          </div>
          <div
            className={
              width > 600
                ? "hidden"
                : "visible" + " flex flex-col items-center justify-center"
            }
          >
            <AppBarLink
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </AppBarLink>
          </div>
        </div>
        <div
          style={{
            /*
             * HAMBURGER_HEIGHT is the exact height of the links we are
             * using. This will break if/when links are added/removed. There's
             * no trivial way to do this automatically so I'm resorting to this
             * hack for now. Sorry.
             */
            maxHeight: isOpen ? HAMBURGER_HEIGHT : 0,
          }}
          className="overflow-hidden transition-all flex flex-col"
        >
          <AppBarLink
            onClick={() => {
              setIsOpen(false);
              scroll(aboutUsRef);
            }}
          >
            About
          </AppBarLink>
          <AppBarLink
            onClick={() => {
              setIsOpen(false);
              scroll(eventsRef);
            }}
          >
            Events
          </AppBarLink>
          <AppBarLink
            onClick={() => {
              setIsOpen(false);
              scroll(teamsRef);
            }}
          >
            Team
          </AppBarLink>
          <AppBarLink
            onClick={() => {
              setIsOpen(false);
              scroll(contactUsRef);
            }}
          >
            Contact Us
          </AppBarLink>
        </div>
      </div>,
      { elevation: trigger ? 10 : 0 }
    );
  }
);

export default AppBar;
