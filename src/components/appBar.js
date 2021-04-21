import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
  cloneElement,
  forwardRef,
} from "react";
import { useScrollTrigger } from "@material-ui/core";
import useWidth from "../useWidth";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HamburgerContext = createContext([() => {}, () => {}]);

const AppBarLink = ({
  className,
  children,
  href,
  onMouseDown,
  scrollAnchor,
  onClick,
  ...props
}) => {
  const [closeHamburger, scroll] = useContext(HamburgerContext);
  return (
    <button
      className={`
        cursor-pointer text-base font-regular normal-case inline-block
        select-none px-8 py-4 my-1 mx-1
        hover:text-KHgold 
        active:bg-KHnavbar-dark active:text-KHgold-slightly-dark
        focus:ring focus:ring-gray-50
        md:text-lg
        ${className}
      `}
      onClick={
        href
          ? () => (window.location.href = href)
          : scrollAnchor
          ? (event) => {
              closeHamburger();
              scroll(scrollAnchor);
              if (onClick) onClick(event);
            }
          : onClick
      }
      onMouseDown={(event) => {
        event.preventDefault();
        if (onMouseDown) onMouseDown(event);
      }}
      {...props}
    >
      {children}
    </button>
  );
};

const AppBar = forwardRef(({ children }, ref) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const shadow = {
    boxShadow: `
        0px 6px 6px -3px rgba(0,0,0,0.2),
        0px 10px 14px 1px rgba(0,0,0,0.14),
        0px 4px 18px 3px rgba(0,0,0,0.12)
      `,
  };
  const width = useWidth();

  const [isOpen, setIsOpen] = useState(false);
  const closeHamburger = useCallback(() => setIsOpen(false));

  const HAMBURGER_HEIGHT = ref.current
    ? ref.current.clientHeight * children.length
    : 0;

  const scroll = (toRef) => {
    window.scrollTo({
      top:
        toRef.current.offsetTop -
        ref.current.clientHeight +
        (isOpen ? HAMBURGER_HEIGHT : 0),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (width > 700) {
      setIsOpen(false);
    }
  }, [width]);

  return React.cloneElement(
    <HamburgerContext.Provider value={[closeHamburger, scroll]}>
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
            className={isOpen ? "flex-auto text-left" : ""}
            href="https://linktr.ee/knighthacks"
          >
            Linktree
          </AppBarLink>
          <div className={width <= 700 ? "hidden" : "visible"}>{children}</div>
          <div
            className={
              width > 700
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
          {children.map((child) => {
            return cloneElement(child, {
              className: child.props.className + " text-left",
            });
          })}
        </div>
      </div>
    </HamburgerContext.Provider>,
    { elevation: trigger ? 10 : 0 }
  );
});

export { AppBar, AppBarLink };
