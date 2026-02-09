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
    <div className="flex gap-9">
      <button
        onClick={()=>stop()}
        className={`bg-blue-600 ${clicked ? "hidden" : "block"}`}
      >
        Stop
      </button>

      <button onClick={restart} className="bg-white text-black">
        Restart
      </button>
    </div>
  );
}

export default Button;
