import { useEffect, useState } from "react";
import axios from "axios";
// @ts-ignore
import ReactAnimatedWeather from "react-animated-weather";
import { convertToFahrenheit } from "../utils";

function Forecast({ weather }: any) {
  const data = weather;
  const [ forecastData, setForecastData ] = useState([]);
  const [ isCelsius, setIsCelsius ] = useState(true);

  useEffect(() => {
    const fetchForecastData = async () => {
      const apiKey = "39e5af8477da8f284c04dec133475953";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=${apiKey}&units=metric`;

      try {
        const response = await axios.get(url);
        setForecastData(response.data.daily);
      } catch (error) {
        console.log("Error fetching forecast data:", error);
      }
    };

    fetchForecastData();
  }, [data.city]);

  const formatDay = (dateString: any) => {
    const options = { weekday: "short" } as const;
    const date = new Date(dateString * 1000);
    return date.toLocaleDateString("en-US", options);
  };

  const getCurrentDate = () => {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    } as const;
    const currentDate = new Date().toLocaleDateString("en-US", options);
    return currentDate;
  };

  const toggleTemperatureUnit = () => {
    setIsCelsius((prevState) => !prevState);
  };

  const renderTemperature = (temperature: number) => {
    if (isCelsius) {
      return Math.round(temperature);
    } else {
      return convertToFahrenheit(temperature);
    }
  };

  return (
    <div>
      <div className="city-name">
        <h2>
          {data.city}, <span>{data.country}</span>
        </h2>
      </div>
      <div className="date">
        <span>{getCurrentDate()}</span>
      </div>
      <div className="temp">
        {data.condition.icon_url && (
          <img
            src={data.condition.icon_url}
            alt={data.condition.description}
            className="temp-icon"
          />
        )}
        {renderTemperature(data.temperature.current)}
        <sup className="temp-deg" onClick={toggleTemperatureUnit}>
          {isCelsius ? "°C" : "°F"} | {isCelsius ? "°F" : "°C"}
        </sup>
      </div>
      <p className="weather-des">{data.condition.description}</p>
      <div className="weather-info">
        <div className="col">
          <ReactAnimatedWeather icon="WIND" size="40"/>
          <div>
            <p className="wind">{data.wind.speed}m/s</p>
            <p>Wind speed</p>
          </div>
        </div>
        <div className="col">
          <ReactAnimatedWeather icon="RAIN" size="40"/>
          <div>
            <p className="humidity">{data.temperature.humidity}%</p>
            <p>Humidity</p>
        </div>
        </div>
      </div>
      {/* <div className="forecast">
        <h3>5-Day Forecast:</h3>
        <div className="forecast-container">
          {forecastData &&
            forecastData.slice(0, 5).map((day) => (
              <div className="day" key={day.time}>
                <p className="day-name">{formatDay(day.time)}</p>
                {day.condition.icon_url && (
                  <img
                    className="day-icon"
                    src={day.condition.icon_url}
                    alt={day.condition.description}
                  />
                )}
                <p className="day-temperature">
                  {Math.round(day.temperature.minimum)}°/ <span>{Math.round(day.temperature.maximum)}°</span>
                </p>
              </div>
            ))}
        </div>
      </div> */}
    </div>
  );
}        

export default Forecast;