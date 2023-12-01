import { Segment } from "../Segment/Segment";
import "./style.css";

export const GameScreen = ({
  colNum,
  head,
  body,
  direction,
  feed,
  borders,
}) => {
  const segmentsList = [];
  for (let i = 0; i < 1000; i++) {
    let active = false;
    let headType = false;
    let feedType = false;
    let border = false;
    active = body.find((activeSeg) => i === activeSeg);
    if (i === head) {
      active = true;
      headType = true;
    }
    if (i === feed) {
      active = true;
      feedType = true;
    }
    if(borders) {
      border = borders.find((border) => border === i);
    }
    if(border === 0) border = true;
    const segment = (
      <Segment
        id={i}
        active={!!active}
        head={headType}
        feed={feedType}
        direction={direction}
        border={!!border}
      ></Segment>
    );
    segmentsList.push(segment);
  }

  return (
    <div
      className="game-screen"
      style={{
        gridTemplateColumns: `repeat(${colNum}, 1fr)`,
      }}
    >
      {segmentsList}
    </div>
  );
};
