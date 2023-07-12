export function calcMove(head, body, direction) {
  const oldBody = [...body];
  switch (direction) {
    case "RIGHT":
      body[0] = head;
      head++;
      for (let i = 1; i < body.length; i++) {
        body[i] = oldBody[i - 1];
      }
      return [head, body];
    case "UP":
      body[0] = head;
      head -= 50;
      for (let i = 1; i < body.length; i++) {
        body[i] = oldBody[i - 1];
      }
      return [head, body];
    case "DOWN":
      body[0] = head;
      head += 50;
      for (let i = 1; i < body.length; i++) {
        body[i] = oldBody[i - 1];
      }
      return [head, body];
    case "LEFT":
      body[0] = head;
      head--;
      for (let i = 1; i < body.length; i++) {
        body[i] = oldBody[i - 1];
      }
      return [head, body];
    default:
      break;
  }
}
