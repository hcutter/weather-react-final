import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0) {
              if (index < 6) {
                return (
                  <div className="col" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                );
              }
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "e487ad872752ff8b32a9f28dbc0c6d35";
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiURL).then(handleResponse);

    return null;
  }
}
