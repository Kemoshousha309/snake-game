import "./style.css";

export const GameScreen = ({children, colNum}) => {

  return (
    <div className='game-screen' style={{
        gridTemplateColumns: `repeat(${colNum}, 1fr)`
    }} >
        {children}
    </div>
  )
}
