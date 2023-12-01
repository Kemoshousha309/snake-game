import { useEffect, useState } from "react";
import "./App.css";
import { GameScreen } from "./Components/GameScreen/GameScreen";
import { calcMove, getBorderSegments } from "./calcMove";
import { PopUp } from "./Components/Popup/PopUp";
import { CtrlPanel } from "./Components/CtlPanel/CtrlPanel";

function App() {
  const [state, setState] = useState({
    columnsNum: 50,
    gameSpeed: 100,
    direction: "DOWN",
    head: 305,
    body: [],
    feed: 865,
    score: 0,
    ctrPanel: {
      open: true,
      content: "Hello World!  This is a snake game made by Kareem shousha 😊 ",
    },
    gameOn: false,
  });

  const {
    head,
    body,
    direction,
    columnsNum,
    feed,
    ctrPanel,
    borders,
    gameSpeed,
    gameOn,
  } = state;

  useEffect(() => {
    const borders = getBorderSegments(columnsNum, 1000);
    setState((prev) => ({ ...prev, borders: borders }));
    let interval
    if(!gameOn) return;
      interval = setInterval(() => {
        setState((prevState) => {
          // update head and body making the move
          let { head, body, direction, feed, score } = prevState;
          const [newHead, newBody, newFeed] = calcMove(
            head,
            [...body],
            direction,
            feed,
            borders
          );
          // crash
          if (
            newBody.find((seg) => seg === newHead) ||
            borders.find((border) => border === newHead)
          ) {
            const newCtrPanel = {
              open: true,
              content: `Game over! your sorce is ${score}`
            }
            return {
              ...prevState,
              gameOn: false,
              ctrPanel: newCtrPanel
            }
          }
          if (feed !== newFeed) {
            // the snake eat the feed
            return {
              ...prevState,
              head: newHead,
              body: newBody,
              score: ++score,
              feed: newFeed,
              borders: borders,
            };
          } else {
            return {
              ...prevState,
              head: newHead,
              body: newBody,
              border: borders,
            };
          }
        });
      }, gameSpeed);

    document.onkeydown = (e) => {
      e = e || window.event;
      setState((prevState) => {
        const { direction } = prevState;
        if (e.key === "ArrowUp" && direction !== "DOWN") {
          return { ...prevState, direction: "UP" };
        } else if (e.key === "ArrowDown" && direction !== "UP") {
          return { ...prevState, direction: "DOWN" };
        } else if (e.key === "ArrowLeft" && direction !== "RIGHT") {
          return { ...prevState, direction: "LEFT" };
        } else if (e.key === "ArrowRight" && direction !== "LEFT") {
          return { ...prevState, direction: "RIGHT" };
        }
        return prevState;
      });
    };  

    return () => {
      clearInterval(interval);
      document.onkeydown = null;
    };
  }, [state.head, state.gameOn]);

  const playHandler = (event) => {
    event.preventDefault()
    const radioButtonGroup = document.getElementsByName("difficulty");
    var checkedRadio = Array.from(radioButtonGroup).find(
      (radio) => radio.checked
   );
   const difficultyMap = {
    easy: 300,
    normal: 200,
    hard:120,
    difficult: 70
   }
   console.log(checkedRadio.id)
    const newCtrPanel = {
      ...ctrPanel,
      open: false
    }
    setState((prev) => ({
      ...prev,
      ctrPanel: newCtrPanel,
      gameOn: true,
      columnsNum: 50,
      gameSpeed: difficultyMap[checkedRadio.id],
      direction: "DOWN",
      head: 305,
      body: [],
      feed: 865,
      score: 0,
    }));
  }


  return (
    <div className="App">
      <PopUp open={ctrPanel.open}>
        <CtrlPanel content={ctrPanel.content} playHandler={playHandler} /> 
      </PopUp>
      <GameScreen
        colNum={columnsNum}
        head={head}
        body={body}
        direction={direction}
        feed={feed}
        borders={borders}
      />
    </div>
  );
}

export default App;
