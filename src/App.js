import { useEffect, useState } from 'react';
import './App.css';
import { GameScreen } from './Components/GameScreen/GameScreen';
import { Segment } from './Components/Segment/Segment';
import { createElement } from "react";
import {renderSegments} from "./renderSegments.js"

const columnsNum = 50;


function App() {
 const []
  return (
    <div className="App">
      <GameScreen colNum={columnsNum}>
          {
              renderSegments()
          }
      </GameScreen>
    </div>
  );
}

export default App;
