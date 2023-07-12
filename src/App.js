import { useEffect, useState } from 'react';
import './App.css';
import { GameScreen } from './Components/GameScreen/GameScreen';
import { Segment } from './Components/Segment/Segment';

function App() {
  const [startPosition, setStartPosition] = useState([0, 0]);

  useEffect(() => {
    const startPoint = document.getElementById("portion-235");
    const startPointCoordinates = [
      Math.round(startPoint.getBoundingClientRect().left),
      Math.round(startPoint.getBoundingClientRect().top)
    ]
    setStartPosition(startPointCoordinates);
  }, [])

  return (
    <div className="App">
      <GameScreen>
        <Segment position={startPosition} />
      </GameScreen>
    </div>
  );
}

export default App;
