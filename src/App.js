import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Athlete from "./Athlete";
import Coach from "./Coach";
import Homepage from "./Homepage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/athlete" element={<Athlete />} />
        <Route path="/coach" element={<Coach />} />
      </Routes>
      <Link to="/coach">Coach</Link>
      <Link to="/athlete">Athlete</Link>
    </div>
  );
}

export default App;
