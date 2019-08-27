import React from "react";

const Header = ({ onRun }) => {
  return (
    <header>
      <h2>Transformation</h2>
      <button onClick={onRun}>Run</button>
    </header>
  )
}

export default Header;