import { IconContext } from "react-icons";
import "./style.css";

export const PopUp = ({ children, open }) => {
  if(!open) return;
  return (
    <div className="back-drop" >
      <IconContext.Provider value={{ className: "icon" }}>
        <div className="window">
          {children}
        </div>
      </IconContext.Provider>
    </div>
  );
};
