import React from 'react';

interface EventModalProps {
  event: {
    id: number;
    year: number;
    title: string;
    image: string;
    description: string;
  };
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>{event.year} - {event.title}</h2>
        <img src={event.image} alt={event.title} className="modal-img" />
        <p>{event.description}</p>
      </div>
    </div>
  );
};

export default EventModal;
