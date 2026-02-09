import { useEffect, useState } from "react";
import Target from "./components/Target";
import Display from "./components/Display";
import Button from "./components/Button";
import Message from "./components/Message";
import logo from "./assets/logo.png";

function App() {
  const [start, setStart] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [messages, setMessages] = useState(false);

  const [target, setTarget] = useState(0);
  const [display, setDisplay] = useState(0);

  const [difference, setDifference] = useState(0);
  const [background, setBackground] = useState("container");

  // Update message state
  useEffect(() => {
    setMessages(clicked);
  }, [clicked]);

  // Correct difference calculation (numeric only)
  useEffect(() => {
    setDifference(target - display / 10);
  }, [target, display]);

  // Keydown listener with updated difference
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Enter" || e.code === "Space") {
        if (e.target.tagName === "BUTTON") return;

        setClicked((prev) => {
          if (!prev) {
            // Stop action
            if (Math.abs(difference) < 0.05) {
              setBackground("container2");
            }
            return true;
          } else {
            // Restart action
            setStart((s) => s + 1);
            setBackground("container");
            return false;
          }
        });
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [difference]);

  return (
    <div className={background}>
      <div className="pt-5 pl-5">
        <a href="">
          <img className="mix-blend-color-burn w-35" src={logo} alt="" />
        </a>
      </div>

      <div className="center mt-[-12px]">
        <Target target={target} setTarget={setTarget} start={start} />

        <br />

        <Display
          display={display}
          setDisplay={setDisplay}
          clicked={clicked}
          start={start}
        />

        <br />

        <Button
          difference={difference}
          setBackground={setBackground}
          clicked={clicked}
          setClicked={setClicked}
          setStart={setStart}
        />

        <br />

        <Message messages={messages} difference={difference} />
      </div>
    </div>
  );
}

export default App;
