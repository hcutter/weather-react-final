import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is created by Hannah Cutter
          <a
            href="https://github.com/hcutter/weather-react-final"
            target="_blank"
          ></a>
          open sourced on GitHub
        </footer>
      </div>
    </div>
  );
}
