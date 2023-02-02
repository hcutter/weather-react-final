import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Charleston" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://capable-cannoli-c4b34d.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hannah Cutter
          </a>{" "}
          open-sourced on{" "}
          <a
            href="https://github.com/hcutter/weather-react-final"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
