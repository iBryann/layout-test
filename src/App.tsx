import "./styles/reset.css";
import "./App.scss";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  const contentList = [...new Array(100)].fill("Content").map((item, index) => (
    <p key={index}>
      {index + 1}. {item}
    </p>
  ));

  return (
    <div className={`layout ${show ? "show" : "hide"}`}>
      <div className="sidebar">Sidebar</div>

      <div className="content">
        <div className="header">
          <button onClick={() => setShow(!show)}>Toggle</button>

          {contentList.slice(0, 2)}
        </div>
        <div className="body">{contentList}</div>
      </div>
    </div>
  );
}

export default App;
