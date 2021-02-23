import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import "./event.css";

const Events = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`CalendarContainer ${expanded ? "Expanded" : ""}`}>
      <Accordion
        className="AccordionCard"
        id="panel1bh"
        onChange={() => setExpanded(!expanded)}
      >
        <AccordionSummary
          className="AccordionHeader"
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className="AccordionSchedule">
            <h1 className="EventTitle"> {props.title} </h1>
            <span className="EventDate">
              {props.date}
              <span className="EventMonth">{props.month}</span>
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails className="AccordionContent">
          <div className="ContentContainer">
            <p className="EventTime">
              {props.time} | {props.location}
            </p>
            <h3 className="EventDescription">{props.description}</h3>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Events;
