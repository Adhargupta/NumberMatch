import React from "react";

function Button({ clicked, setClicked, setStart, setBackground, difference }) {
  function restart(e) {
    setStart((prev) => prev + 1);
    setClicked(false);
    setBackground("container");
    e.target.blur();
  }

  function stop() {
    setClicked(true);

    if (Math.abs(difference) < 0.05) {
      setBackground("container2");
    }
  }

  return (
    <div className="button-group">
      <button
        onClick={()=>stop()}
        className={`game-button stop-button ${clicked ? "hidden" : "active"}`}
      >
        <span className="button-text">STOP</span>
        <span className="button-glow"></span>
      </button>

      <button onClick={restart} className="game-button restart-button">
        <span className="button-text">RESTART</span>
        <span className="button-glow"></span>
      </button>
    </div>
  );
}

export default Button;
