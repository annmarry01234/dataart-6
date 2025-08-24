import React from 'react';

interface EventMarkerProps {
  event: {
    id: number;
    year: number;
    title: string;
    image: string;
    description: string;
  };
  onClick: () => void;
}

const EventMarker: React.FC<EventMarkerProps> = ({ event, onClick }) => {
  return (
    <div className="event-marker" onClick={onClick}>
      <span className="event-year">{event.year}</span>
      <img src={event.image} alt={event.title} className="marker-img" />
      <p className="event-title">{event.title}</p>
    </div>
  );
};

export default EventMarker;
