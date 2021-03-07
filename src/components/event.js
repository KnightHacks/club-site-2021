import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Collapse from "@material-ui/core/Collapse";
import "./event.css";

const Event = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`CalendarContainer ${expanded ? "Expanded" : ""}`}>
      <Accordion
        expanded={expanded}
        className="AccordionCard"
        onChange={() => setExpanded(!expanded)}
      >
        <AccordionSummary className="AccordionHeader">
          <div className="AccordionSchedule">
            <h1 className="EventTitle"> {props.title} </h1>
            <span className="EventDate">
              {props.date}
              <span className="EventMonth">{props.month}</span>
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails
          className="AccordionContent"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="ContentContainer">
            <p className="EventTime">
              {props.time} | {props.location}
            </p>
            <h3 className="EventDescription">{props.description}</h3>
            <h3 className="Tags">{props.tags}</h3>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Event;
