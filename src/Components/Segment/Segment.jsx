import "./style.css";

export const Segment = ({ id, active, head, feed, children, direction, border }) => {
  const style = {};
  let eyePosition = "eye-right";
  if (active) {
    style.backgroundColor = "#606C5D";
  }
  if (head) {
    switch (direction) {
      case "UP":
        eyePosition = "eye-up"
        style.clipPath = "polygon(0 0, 50% 51%, 100% 0, 100% 100%, 0 100%)";
        break;
      case "RIGHT":
        style.clipPath = "polygon(100% 0, 43% 52%, 100% 100%, 0 100%, 0 0)";
        break;
      case "DOWN":
        eyePosition = "eye-down"
        style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 49% 49%, 0 100%)";
        break;
      case "LEFT":
        eyePosition = "eye-left"
        style.clipPath = "polygon(100% 0, 100% 100%, 0 100%, 54% 51%, 0 0)";
        break;
      default:
        break;
    }
  }
  if (feed) {
    style.backgroundColor = "#E55807";
    style.clipPath =
      "polygon(24% 19%, 69% 18%, 86% 52%, 69% 84%, 25% 84%, 8% 50%)";
  }
  if(border) {
    style.borderRadius = "0px";
    style.backgroundColor = "#7D7463"
  }

  return (
    <div className="segment" id={`segment-${id}`} style={style}>
      {head ? <div className={`eye ${eyePosition}`} /> : null}
      {children}
    </div>
  );
};
