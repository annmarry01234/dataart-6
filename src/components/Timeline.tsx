import React from "react";
import { barbieEvents } from "../data/barbieevents";

const Timeline: React.FC = () => {
  return (
    <div className="timeline">
      {barbieEvents.map((event) => (
        <div key={event.id} className="event-card">
          <img src={event.image} alt={event.title} className="event-image" />
          <h2>{event.year}</h2>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
