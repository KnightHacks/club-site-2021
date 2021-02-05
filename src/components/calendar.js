import * as React from "react";
import "./calendar.css"
const Calendar = () => {
    return(
        <div className="Calendar">
            <iframe src="https://calendar.google.com/calendar/embed?src=knighthacks.org_35fvqshrbmgg16o67ekheot8k4%40group.calendar.google.com&ctz=America%2FNew_York" 
            frameborder = "0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
        </div>
    )
}

export default Calendar
