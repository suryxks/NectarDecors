import "./App.css";
import React from "react";
import {
  Approutes,Navbar
} from "./components";

function App() {
  return (
    <div className="App">
       <Navbar />
      <Approutes />
    </div>
  );
}

export {App};