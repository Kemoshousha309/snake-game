import { Segment } from "../Segment/Segment";
import "./style.css";

export const GameScreen = ({ colNum, head, body, direction }) => {
  console.log(body)
  const renderSegments = (head, body, direction) => {
    const segmentsList = [];
    for (let i = 0; i < 1000; i++) {
      let active = false;
      let headType = false;
      active = body.find((activeSeg) => i === activeSeg);
      if (i === head) {
        active = true;
        headType = true;
      }
      const segment = (
        <Segment id={i} active={!!active} head={headType}>
          {i}
        </Segment>
      );
      segmentsList.push(segment);
    }
    return segmentsList;
  };

  return (
    <div
      className="game-screen"
      style={{
        gridTemplateColumns: `repeat(${colNum}, 1fr)`,
      }}
    >
      {renderSegments(head, body, direction)}
    </div>
  );
};
