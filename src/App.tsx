import "./styles/reset.css";
import "./App.scss";
import { useState } from "react";
import { Table } from "./Table";

function App() {
  const [collapse, setCollapse] = useState(false);
  // const [show, setShow] = useState(true);
  const contentList = [...new Array(100)].map((_, index) => (
    <div key={index}>{index}</div>
  ));

  return (
    <div className={`layout ${collapse ? "collapse" : ""}`}>
      <div className="sidebar">
        <button onClick={() => setCollapse(!collapse)}>Toggle menu</button>
        <h1 className="title">SIDEBAR</h1>
      </div>

      <div className="content">
        <div className="header">
          <button onClick={() => setCollapse(!collapse)}>Toggle menu</button>

          <h1 className="title">HEADER</h1>
        </div>
        <div className="body">
          <h1 className="title">CONTENT</h1>

          <Table />

          {contentList}
        </div>
      </div>
    </div>
  );
}

export default App;
