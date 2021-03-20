import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import "./event.css";
import ColorHash from "color-hash-ts";

const hash = new ColorHash({ lightness: 0.8 });

const Event = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`
        my-7 mx-8
        sm:mx-16
        md:mx-20
        lg:mx-28
        xl:mx-auto xl:max-w-screen-lg
      `}
    >
      <Accordion
        expanded={expanded}
        className="AccordionCard rounded-lg"
        onChange={() => setExpanded(!expanded)}
      >
        <AccordionSummary>
          <div className="flex items-center justify-between w-full">
            <h1 className="font-regular text-2xl px-1">{props.title}</h1>
            <span className="font-medium text-2xl md:text-3xl lg:text4xl p-2">
              {props.date}
              <span className="font-regular ml-2 text-2xl">{props.month}</span>
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails onClick={() => setExpanded(!expanded)}>
          <div className="ContentContainer">
            <div className="flex justify-between mb-3">
              <p className="text-xl px-2 text-black">{props.presenter}</p>
              <p className="text-xl px-2 text-black">
                {props.time} |
                <a
                  href="https://linktr.ee/knighthacks"
                  className="text-xl px-2 text-black hover:text-gray-500"
                >
                  {props.location}
                </a>
              </p>
            </div>
            <h3 className="font-lightitalic text-lg lg:text-xl px-2 text-gray-500">
              {props.description}
            </h3>
            <div className="flex justify-end">
              {props.tags.map((tag) => (
                <div
                  style={{ backgroundColor: hash.hex(tag) }}
                  className="rounded-full mx-1 mt-2 px-3 text-gray-600 font-regular"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Event;
