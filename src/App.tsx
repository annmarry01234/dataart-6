import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import { barbieEvents } from "./data/barbieevents";
import barbieLogo from "./assets/barbie-logo.png";

const App: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);
  const [lastFocused, setLastFocused] = useState<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Handle modal open
  const openModal = (id: number, target: HTMLElement) => {
    setLastFocused(target);
    setActiveEvent(id);
    dialogRef.current?.showModal();
  };

  // Handle modal close
  const closeModal = () => {
    dialogRef.current?.close();
    setActiveEvent(null);
    lastFocused?.focus();
  };

  // Trap focus inside modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }

      if (e.key === "Tab" && dialogRef.current?.open) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lastFocused]);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <img src={barbieLogo} alt="Barbie Logo" className="logo" />
        <h1 className="heading">Barbie Timeline</h1>
      </header>

      {/* Timeline */}
      <div className="timeline" role="list" aria-label="Barbie Timeline">
        {barbieEvents.map((event, index) => (
          <div
            key={event.id}
            role="listitem"
            tabIndex={0}
            aria-current={index === 0 ? "true" : undefined}
            className="marker"
            onClick={(e) => openModal(event.id, e.currentTarget)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                openModal(event.id, e.currentTarget);
              }
            }}
          >
            <span className="year">{event.year}</span>
            <span className="dot" aria-hidden="true"></span>
            <div className="marker-content">
              <img src={event.image} alt={event.title} />
              <div>
                <div className="title">{event.title}</div>
                <div className="marker-description">{event.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Accessible Modal */}
      <dialog
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        className="modal"
      >
        {activeEvent && (
          <>
            <h2 id="dialog-title">{barbieEvents.find(e => e.id === activeEvent)?.title}</h2>
            <p id="dialog-description">
              {barbieEvents.find(e => e.id === activeEvent)?.description}
            </p>
            <button onClick={closeModal} autoFocus>
              Close
            </button>
          </>
        )}
      </dialog>
    </div>
  );
};

export default App;
