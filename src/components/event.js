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
    <div className={`CalendarContainer ${expanded ? "Expanded" : ""}`}>
      <Accordion
        expanded={expanded}
        className="AccordionCard rounded-lg"
        onChange={() => setExpanded(!expanded)}
      >
        <AccordionSummary>
          <div className="flex items-center justify-between w-full">
            <h1 className="font-regular text-2xl px-1">{props.title}</h1>
            <span className="font-medium text-2xl p-2">
              {props.date}
              <span className="font-regular ml-2">{props.month}</span>
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails
          className="AccordionContent"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="ContentContainer">
            <div className="EventDetails">
              <p className="EventPresenter">{props.presenter}</p>
              <p className="EventTime">
                {props.time} |
                <a
                  href="https://linktr.ee/knighthacks"
                  className="EventLocation"
                >
                  {props.location}
                </a>
              </p>
            </div>
            <h3 className="EventDescription">{props.description}</h3>
            <div className="flex justify-end">
              {props.tags.map((tag) => (
                <div
                  style={{ backgroundColor: hash.hex(tag) }}
                  className="rounded-full mx-1 mt-2 px-3 text-gray-700 font-light"
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
