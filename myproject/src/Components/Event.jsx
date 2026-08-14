import React from "react";
import "./Event.css";

function Event() {

  const events = [
    {
      title: "Winter Night Market",
      date: "January 1-3, 2025",
    },
    {
      title: "Spring Night Market",
      date: "March 1-3, 2025",
    },
    {
      title: "Summer Night Market",
      date: "July 1-3, 2025",
    },
    {
      title: "Autumn Night Market",
      date: "October 1-3, 2025",
    },
  ];
  return (
    <div>


      <div className="event-section">
        <div className="overlay"></div>

        <div className="event-content">
          <h1>Upcoming Event Dates</h1>
        </div>
      </div>



      <div className="event-container">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <h2>{event.title}</h2>
            <p>{event.date}</p>
            <p>5:00-10:00 PM</p>
            <p>Themeland Harbor Center</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Event;