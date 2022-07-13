import React, { useState } from "react";
import "./App.css";

const RESET_TIME_MS = 300;

const App = () => {
  const [events, setEvents] = useState([]);
  const [clickLocation, setClickLocation] = useState(null);

  let lastEventTimestamp = Date.now();
  const handler = (event) => {
    const now = Date.now()
    if (now - lastEventTimestamp > RESET_TIME_MS) {
      setEvents([event.type]);
    } else {
      setEvents([...events, event.type]);
    }
    lastEventTimestamp = now;
  };

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        height: "100vh",
        width: "100vw",
      }}
      onClick={(event) => {
        setClickLocation({ x: event.clientX, y: event.clientY });
      }}
    >
      {clickLocation && (
        <svg
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            height: "100%",
            width: "100%",
            pointerEvents: "none",
          }}
        >
          <circle cx={clickLocation.x} cy={clickLocation.y} r="10" />
        </svg>
      )}
      <div
        style={{
          width: 200,
          height: 200,
          backgroundColor: "lightgrey",
          border: "1px solid black",
          margin: 50,
        }}
        onTouchStart={handler}
        onTouchEnd={handler}
        onPointerDown={handler}
        onPointerUp={handler}
        onMouseDown={handler}
        onMouseUp={handler}
        onClick={handler}
      >
        {events.map((event, index) => (
          <div key={`${event}-${index}`}>{event}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
