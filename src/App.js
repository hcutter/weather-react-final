import React from "react";
import axios from "axios";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Charleston" />
        <footer>
          This project was coded by Hannah Cutter{" "}
          <a
            href="https://github.com/hcutter/weather-react-final"
            target="_blank"
          >
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
