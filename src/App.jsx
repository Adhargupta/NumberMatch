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
      {/* Animated particles background */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            '--delay': `${i * 0.3}s`,
            '--duration': `${15 + Math.random() * 10}s`,
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`
          }}></div>
        ))}
      </div>

      {/* Logo with subtle animation */}
      {/* <div className="logo-container">
        <a href="">
          <img className="logo-img" src={logo} alt="" />
        </a>
      </div> */}

      {/* Main game container */}
      <div className="game-center">
        <div className="game-card">
          <Target target={target} setTarget={setTarget} start={start} />
          
          <div className="display-wrapper">
            <Display
              display={display}
              setDisplay={setDisplay}
              clicked={clicked}
              start={start}
            />
          </div>

          <div className="button-wrapper">
            <Button
              difference={difference}
              setBackground={setBackground}
              clicked={clicked}
              setClicked={setClicked}
              setStart={setStart}
            />
          </div>

          <Message messages={messages} difference={difference} />
        </div>
      </div>

      {/* Glow effect that follows the game state */}
      <div className={`ambient-glow ${clicked && Math.abs(difference) < 0.05 ? 'glow-success' : ''}`}></div>
    </div>
  );
}

export default App;
