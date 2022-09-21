import { useState } from "react";
import "./App.css";
import ListItem from "./components/ListItem/ListItem";
import Navbar from "./components/Navbar/Navbar";
import { ChangeContext } from "./Context/ChangeContext";

function App() {
  const [vertical, setVertical] = useState(false);

  return (
    <ChangeContext.Provider value={{ vertical, setVertical }}>
      <div className="wrapper">
        <Navbar />
        <div className="main">
          <div className="content">
            <ListItem vertical={vertical} />
          </div>
        </div>
      </div>
    </ChangeContext.Provider>
  );
}

export default App;
