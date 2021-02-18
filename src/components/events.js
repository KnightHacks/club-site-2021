import React, { useState } from "react";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import "./events.css";

const Events = () => {

  const [expanded, setExpanded] = React.useState('panel1');

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
          <h1 className="Heading">Event Title</h1>
        </AccordionSummary>
        <AccordionDetails
        className="AccordionContent"
        >
          <h3 className="Secondary">
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </h3>
        </AccordionDetails>
      </Accordion>
      <Accordion
      defaultExpanded
      // expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
      className="AccordionCard">
        <AccordionSummary
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <h1 className="Heading">Event Title</h1>
        </AccordionSummary>
        <AccordionDetails>
          <h3 className="Secondary">
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
            diam eros in elit. Pellentesque convallis laoreet laoreet.
          </h3>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Events;
