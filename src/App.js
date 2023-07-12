import { useEffect, useState } from "react";
import "./App.css";
import { GameScreen } from "./Components/GameScreen/GameScreen";
import { calcMove } from "./calcMove";

function App() {
  const [state, setState] = useState({
    columnsNum: 50,
    gameSpeed: 1000,
    direction: "RIGHT",
    head: 305,
    body: [304, 303, 302, 301, 300],
  });

  const { head, body, direction, gameSpeed, columnsNum } = state;

  useEffect(() => {
    setInterval(() => {
      setState((prevState) => {
        // update head and body making the move 
        const { head, body, direction } = prevState;
        const [newHead, newBody] = calcMove(head, [...body], direction);
        console.log({body})
        return {
          ...prevState,
          head: newHead,
          body: newBody,
        };
      });
    }, gameSpeed);

    return () => clearInterval();
  }, [gameSpeed]);


  return (
    <div className="App">
      <GameScreen
        colNum={columnsNum}
        head={head}
        body={body}
        direction={direction}
      />
    </div>
  );
}

export default App;
