import { createElement } from "react";
import "./style.css";

export const GameScreen = ({children}) => {
  
  // produce 500 of portion divs 
  const renderPortions = () => {
    const unitDiv = (index) => createElement(
      'div',
      { id: `portion-${index}` }
    );
    const portionsList = [];
    for(let i = 0; i < 500; i++) {
      portionsList.push(unitDiv(i));
    }
    return portionsList;
  }

  return (
    <div className='game-screen'>
        {
         renderPortions()
        }
        {children}
    </div>
  )
}
