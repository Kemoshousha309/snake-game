import "./CtrlPanel.css";

export const CtrlPanel = ({ children, content, open, playHandler }) => {
  return (
    <div className="ctrl-container">
      <div className="ctrl-content">
        <p>{content}</p>
      </div>
      <form className="form">
        <div className="level-container">
          <div>
            <label>Choose difficulty: </label>
          </div>
          <div className="input-control">
            <input type="radio" name="difficulty" id="easy" defaultChecked />
            <label htmlFor="easy">Easy</label>
          </div>
          <div className="input-control">
            <input type="radio" name="difficulty" id="normal" />
            <label htmlFor="normal">Normal</label>
          </div>
          <div className="input-control">
            <input type="radio" name="difficulty" id="hard" />
            <label htmlFor="hard">Hard</label>
          </div>
          <div className="input-control">
            <input type="radio" name="difficulty" id="difficult" />
            <label htmlFor="difficult">Difficult</label>
          </div>
        </div>
        <button type="submit" className="btn" onClick={playHandler} >Play</button>
      </form>
    </div>
  );
};
