"use client"
import { useEffect, useState } from "react";
import react from "react";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");



  const API_KEY = "408d4e797f164849c68729e28200d6ad"
  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }
    setError(""); // Clear previous errors
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      console.log("Weather Data:", data); // Debugging: Check API response
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
    const weatherData = data?.main || {}; 
  };
  

  


  // useEffect(() => {
  //   async function fetchData() {
  //     const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY; // Store the API key in an environment variable
  //     const lat = 47.9077;
  //     const lon = 106.8832;
  //     const cityName;

  //     try {
  //       const response = await fetch(
  //         `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`
  //       );

  //       if (!response.ok) {
  //         throw new Error("Failed to fetch weather data");
  //       }

  //       const data = await response.json();
  //       setWeatherData(data);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   }

  //   fetchData();
  // }, []);

  return (
<div className="w-full h-screen z-0 bg-black  flex overflow-x-hidden overflow-y-hidden"> 
<div className="justify-center items-center flex"> 

  <div className="rounded-lg bg-weather w-night-800 h-night-1200 top-40 left-36  z-10 flex justify-center  items-center "> 
    <input onChange={(e) => setCity(e.target.value)}  value={city} placeholder="Enter a city" className="absolute z-10  h-input w-input left-inputLeft top-7 rounded-lg value={city}"></input>
    <button onClick={fetchWeather}  className="absolute top-1">Get Weather</button>
    <div className="  bg-white bg-opacity-75 h-city w-city justify-self-center align-self justify-center items-center flex rounded-xl relative" >
     <div className="  text-black bg-custom-gradient bg-clip-text text-transparent absolute font-bold text-city top-cityTop left-cityLeft ">Kraków</div> 
     <h1 className=" text-9xl absolute font-bold  bottom-temp left-10 bg-gradient-to-r from-slate-400 via-slate-800 to-slate-900 bg-clip-text text-transparent">{weather.main.temp}</h1>
     <div className="text-mood font-bold text-moods bottom-moodBottom left-moodLeft absolute">Bright</div>
     <img className=" absolute w-64 h-64 bottom-image-bottom" src="sun.png"></img>
      </div>
  </div>
  <div className=" rounded-lg bg-nightColor h-night-1200 w-night-800 right-36 top-40 my-28 z-10 ">
  </div>
  </div>
</div>

  );


};