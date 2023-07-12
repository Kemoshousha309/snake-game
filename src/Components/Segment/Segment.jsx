import "./style.css";

export const Segment = ({position}) => {
  const [x, y] = position;
  const style = {
    top: `${y}px`,
    left: `${x}px`
  }
  console.log(position)
  return (
    <div className="snake-head" style={style}>

    </div>
  )
}