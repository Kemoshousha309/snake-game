import "./style.css";

export const Segment = ({id, active, head, children}) => {
  const style = {}
  if(active) {
      style.backgroundColor = "yellow"
  }
    
  return (
    <div className="segment" id={`segment-${id}`} style={style}>
        
    </div>
  )
}