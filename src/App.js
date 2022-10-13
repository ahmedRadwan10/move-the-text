import React, { useState } from "react";
import './App.css';

const App = () => {
  const [xCursorPosition, setXPosition] = useState(0);
  const [yCursorPosition, setYPosition] = useState(100);

  document.ondragover = (e) => {
    e.preventDefault();
  }

  const handleDragEnd = (e) => { 
    setXPosition(e.clientX);
    setYPosition(e.clientY);
  }


  return (
    <>
      <h1
        draggable="true"
        onDragEnd={handleDragEnd}
        style={{
          position: "absolute",
          top: yCursorPosition,
          left: xCursorPosition || "50%",
          transform: "translate(-50%, -50%)"
        }}>Drag me to any place !!</h1>
    </>
  );
}

export default App;
