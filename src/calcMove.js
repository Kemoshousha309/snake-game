export function calcMove(head, body, direction, feed, borders) {
  const oldBody = [...body];
  let innerHead = head;
  let newFeed = feed;
  switch (direction) {
    case "RIGHT":
      body[0] = head;
      innerHead++;
      for (let i = 1; i < body.length; i++) {
        body[i] = oldBody[i - 1];
      }
      if (innerHead === feed) {
        newFeed = getRandomFeed(1,1000, borders, body);
        body.push(body[body.length-1] - 1)
      }
      return [innerHead, body, newFeed];
    case "UP":
      body[0] = innerHead;
      innerHead -= 50;
      for (let i = 1; i < body.length; i++) {
        body[i] = oldBody[i - 1];
      }
      if (innerHead === feed) {
        newFeed = getRandomFeed(1,1000, borders, body);
        body.push(body[body.length-1] - 1)
      }
      return [innerHead, body, newFeed];
    case "DOWN":
      body[0] = innerHead;
      innerHead += 50;
      for (let i = 1; i < body.length; i++) {
        body[i] = oldBody[i - 1];
      }
      if (innerHead === feed) {
        newFeed = getRandomFeed(1,1000, borders, body);
        body.push(body[body.length-1] - 1)
      }
      return [innerHead, body, newFeed];
    case "LEFT":
      body[0] = innerHead;
      innerHead--;
      for (let i = 1; i < body.length; i++) {
        body[i] = oldBody[i - 1];
      }
      if (innerHead === feed) {
        newFeed = getRandomFeed(1,1000, borders, body);
        body.push(body[body.length-1] - 1)
      }
      return [innerHead, body, newFeed];
    default:
      break;
  }
}

function getRandomFeed(min, max, borders, body) {
  let randNum;
  let accepted = false; 
  while(!accepted) {
    randNum = Math.round(Math.random() * (max - min) + min);
    const isBorder = borders.includes(randNum);
    const isBody = body.includes(randNum);
    if(!isBody && !isBorder) {
      accepted = true;
    }
  }
  return randNum;
}

export function getBorderSegments(colNum, segmentsNum) {
  const borderSegments = [0];
  for(let i = 0; i < segmentsNum; i++) {
    // top
    if(i < colNum) {
      borderSegments.push(i);
    }
    // bottom
    if(i >= (segmentsNum-colNum)){
      borderSegments.push(i)
    }
  }
  let j = 0;
  let f = colNum-1;
  while(j < (segmentsNum-colNum)) {
    borderSegments.push(j)
    borderSegments.push(f)
    j += 50;
    f += 50;
  }
  return borderSegments;
}