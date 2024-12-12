"use client";
import { useState } from "react";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "408d4e797f164849c68729e28200d6ad";

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }
    setError(""); 
    try {
      const response = await fetch(
      
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeather(data);
      console.log(data)
    } catch (err) {
      setError(err.message);
      setWeather(null);
    
    }
  }
  

  const getWeatherImage = (weatherCondition) => {
    switch ( weatherCondition) {
      case "Clear":
        return "sun.png"; 
      case "Clouds":
        return "Clouds.png"; 
      case "Rain":
        return "Rain.png"; 
      case "Snow":
        return "snow.png"; 
      case "Thunderstorm":
        return "thunderstorm.png"; 
      case "Drizzle":
        return "Rain.png"; 
      default:
        return "sun.png"; 
    }
  };


  const getNightImage = (weatherCondition) => {
    switch ( weatherCondition) {
      case "Clear":
        return "Nightsun.png"; 
      case "Clouds":
        return "NightCloud.png"; 
      case "Rain":
        return "NightRain.png"; 
      case "Snow":
        return "Nightsnow.png"; 
      case "Thunderstorm":
        return "Nightthunderstorm.png"; 
      case "Drizzle":
        return "NightRain.png"; 
      default:
        return "Nightsun.png"; 
    }
  };

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        fetchWeather();
      }

  };

  return (
    <div className="w-full h-screen z-0 bg-black flex overflow-x-hidden justify-center overflow-y-hidden flex">
      <div className="justify-center items-center flex">
        <div className="rounded-lg bg-weather w-night-800 h-night-1200 top-40 left-36 z-10 flex justify-center items-center ">
          <input
            onChange={(e) => setCity(e.target.value)}
            value={city}
            onKeyDown={handleKeyDown}
            placeholder="Search"
            className="absolute z-10 h-input w-input left-input Left top-7 rounded-3xl box-shadow: 0px 12px 24px 0px #0000000F font-xl text-black text-3xl focus:outline-none"
          />
          {/* <button
            onClick={fetchWeather}
            className="absolute top-1 bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Get Weather
          </button> */}
          {error && <div className="text-red-500 absolute top-16">{error}</div>}
          {weather && (
            <div className="bg-white bg-opacity-75 h-city w-city flex justify-center items-center rounded-xl relative">
              <div className="text-black bg-custom-gradient bg-clip-text text-transparent absolute font-bold text-city top-cityTop left-cityLeft">
                {weather.name}
              </div>
              <h1 className="text-9xl absolute font-bold bottom-temp left-10 bg-gradient-to-r from-slate-400 via-slate-800 to-slate-900 bg-clip-text text-transparent text-black">
                {Math.round(weather.main.temp)}°
              </h1>
              <div className="text-mood font-bold text-moods bottom-moodBottom left-moodLeft absolute">
                {weather.weather[0].main}
              </div>
              <img
                className="absolute w-64 h-64 bottom-image-bottom"
                src={getWeatherImage(weather.weather[0].main)}></img>
            </div>
          )}
        </div>
        <div className="rounded-lg bg-nightColor h-night-1200 w-night-800 right-36 top-40 my-28 z-10 top-40 left-36 z-10 flex justify-center items-center ">
       
          {/* <button
            onClick={fetchWeather}
            className="absolute top-1 bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Get Weather
          </button> */}
          {error && <div className="text-red-500 absolute top-16">{error}</div>}
          {weather && (
            <div className="bg-night bg-opacity-75 h-city w-city flex justify-center items-center rounded-xl relative">
              <div className="text-white bg-custom-gradient bg-clip-text text-transparent absolute font-bold text-city top-cityTop left-cityLeft">
                {weather.name}
              </div>
              <h1 className="text-9xl absolute font-bold bottom-temp left-10 bg-gradient-to-r from-slate-400 via-slate-800 to-slate-900 bg-clip-text text-transparent text-white">
                {Math.round(weather.main.temp)}°
              </h1>
              <div className="text-purple font-bold text-moods bottom-moodBottom left-moodLeft absolute">
                {weather.weather[0].main}
              </div>
              <img
                className="absolute w-64 h-64 bottom-image-bottom"
                src={getNightImage(weather.weather[0].main)}></img>
            </div>
          )}
          
        
        </div>
      </div>
    </div>
  );

}
