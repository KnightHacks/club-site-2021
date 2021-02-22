import React, { useState } from "react";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import "./event.css";

const Events = () => {

  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="CalendarContainer">
      <Accordion
      defaultExpanded
      className="AccordionCard"
      id="panel1bh"
      >
        <AccordionSummary
          className="AccordionHeader"
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        <div className="AccordionSchedule">
          <h1 className="EventTitle"> Event Title </h1>
          <span className="EventDate">
            22
            <span className="EventMonth">
            February
            </span>
            </span>
        </div>
        </AccordionSummary>
        <AccordionDetails
        className="AccordionContent"
        >
          <h3 className="EventDescription">
            Event Description.
          </h3>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Events;
