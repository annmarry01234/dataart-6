import React, { useState, useRef, useEffect } from "react";

interface Event {
  id: number;
  year: number;
  title: string;
  image: string;
  description: string;
}

interface AccessibleTimelineProps {
  events: Event[];
}

const AccessibleTimeline: React.FC<AccessibleTimelineProps> = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const triggerRef = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Trap focus inside modal
  useEffect(() => {
    if (!selectedEvent || !modalRef.current) return;

    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const trap = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            (last as HTMLElement).focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            (first as HTMLElement).focus();
          }
        }
      }
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", trap);
    (first as HTMLElement)?.focus();

    return () => document.removeEventListener("keydown", trap);
  }, [selectedEvent]);

  const handleOpen = (event: Event, index: number, target: HTMLElement) => {
    setSelectedEvent(event);
    setActiveIndex(index);
    triggerRef.current = target;
  };

  const handleClose = () => {
    setSelectedEvent(null);
    triggerRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = (index + 1) % events.length;
      document.getElementById(`event-${next}`)?.focus();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = (index - 1 + events.length) % events.length;
      document.getElementById(`event-${prev}`)?.focus();
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleOpen(events[index], index, e.currentTarget as HTMLElement);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Barbie Timeline</h2>
      <div className="flex gap-4" role="list">
        {events.map((event, index) => (
          <button
            key={event.id}
            id={`event-${index}`}
            role="button"
            aria-current={index === activeIndex ? "step" : undefined}
            className={`p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${
              index === activeIndex ? "bg-pink-100" : "bg-white"
            }`}
            onClick={(e) => handleOpen(event, index, e.currentTarget)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            <span className="block font-bold">{event.year}</span>
            <span>{event.title}</span>
          </button>
        ))}
      </div>

      {selectedEvent && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="dialog-title"
          className="fixed inset-0 bg-black/50 flex items-center justify-center"
        >
          <div
            ref={modalRef}
            className="bg-white rounded-lg p-6 w-96 shadow-lg"
          >
            <h3 id="dialog-title" className="text-xl font-bold mb-2">
              {selectedEvent.title} ({selectedEvent.year})
            </h3>
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="mb-2 rounded"
            />
            <p className="mb-4">{selectedEvent.description}</p>
            <button
              onClick={handleClose}
              className="px-4 py-2 bg-pink-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibleTimeline;
