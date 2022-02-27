import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Athlete from "./Athlete";
import Coach from "./Coach";
import Homepage from "./Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/athlete/:id?" element={<Athlete />} />
        <Route path="/coach/:id?" element={<Coach />} />
      </Routes>
      <Link to="/coach">Coach</Link>
      <Link to="/athlete">Athlete</Link>
    </div>
  );
}

export default App;
