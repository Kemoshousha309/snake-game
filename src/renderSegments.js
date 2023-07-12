import {Segment} from "./Components/Segment/Segment.jsx"

export const renderSegments = () => {
    const segmentsList = [];
    for(let i = 0; i < 1000; i++) {
      let active = false;
      if(i === 388) {
          active = true;
      }
      const segment =
          <Segment id={i} active={active} head={false} >{i}</Segment>
      segmentsList.push(segment);
    }
    return segmentsList;
  }