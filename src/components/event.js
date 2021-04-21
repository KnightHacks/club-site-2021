import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import "./event.css";
import ColorHash from "color-hash-ts";

const hash = new ColorHash({ lightness: 0.8 });

const Event = ({
  title,
  date,
  month,
  time,
  presenter,
  location,
  description,
  tags,
}) => {
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
            <h1 className="font-regular text-xl xs:text-2xl px-1">{title}</h1>
            <span className="font-medium p-2 text-lg xs:text-2xl">
              {date}
              <span className="font-regular ml-2 text-lg xs:text-2xl">
                {month}
              </span>
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails onClick={() => setExpanded(!expanded)}>
          <div className="ContentContainer w-full">
            <div className="flex mb-3 flex-col xs:justify-between xs:flex-row">
              <p className="px-2 text-black text-sm xs:text-xl">{presenter}</p>
              <p className="px-2 text-sm xs:text-xl text-black">
                {time} |
                <a
                  href="https://linktr.ee/knighthacks"
                  className="text-sm xs:text-xl px-2 text-black hover:text-gray-500"
                >
                  {location}
                </a>
              </p>
            </div>
            <h3 className="font-light font-semibold text-lg lg:text-xl px-2 text-gray-500">
              {description}
            </h3>
            <div className="flex justify-end">
              {tags.map((tag) => (
                <div
                  key={tag}
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
