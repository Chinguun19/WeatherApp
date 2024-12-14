"use client";
import { useState } from "react";
import 'typeface-manrope';

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [results, setResults] = useState([])

  const API_KEY = "9e8f5ac630a641fa986e0bd668216f13";


  const fetchCityNames = (value) => {
    fetch(`https://countriesnow.space/api/v0.1/countries`)
      .then((response) => response.json())
      .then((json) => {
        const results = json.data.filter((country) => {
          return (
            value &&
            country &&
            country.cities &&
            country.cities.some((city) => city.toLowerCase().includes(value.toLowerCase()))
          );
        });
        setResults(results);
      });
  };
  

  fetchCityNames
  console.log(results)











  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }
    setError(""); 
    try {
      
      const response = await fetch(
      
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        
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
    <div className="w-full h-screen z-0 bg-gray-800  overflow-x-hidden justify-center overflow-y-hidden flex">
      <div className="justify-center items-center flex">
        <div className=" bg-weather w-[800px] h-[1200px] top-40 left-36 z-10 flex justify-center items-center rounded-tr-[50px] rounded-tl-[50px] ">
          <div className="">
            <img src="Vector.svg" className="absolute top-12 translate-x-3 z-50 ccolor- "></img>
          <input 
             onChange={(e) => {
              setCity(e.target.value);
              fetchCityNames(e.target.value);
            }}
            value={city}
            onKeyDown={handleKeyDown}
            placeholder="Search"
            
            className="absolute z-10 h-[80px] w-[567px] left-input Left top-7 rounded-3xl box-shadow: 0px 12px 24px 0px #0000000F font-xl text-black text-[32px] focus:outline-none px-[50px] font-manrope font-[700] " 
          />
         {results.slice(1, 4).map((country, index) => (
  <div key={index}>
    {country.cities.map((city, i) => (
      <div key={i}>{city}</div>
    ))}
  </div>
))}



          </div>

          {/* <button
            onClick={fetchWeather}
            className="absolute top-1 bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Get Weather
          </button> */}
          {error && <div className="text-red-500 absolute top-16">{error}</div>}
          {weather && (
            <div className="bg-white bg-opacity-75 h-city w-city flex justify-center items-center rounded-[48px] relative backdrop-blur-3xl">
              <div> </div>
              <div className="text-black font-manrope font-extrabold  bg-custom-gradient bg-clip-text text-transparent absolute text-[48px] top-cityTop left-cityLeft">
                {weather.city.name}
              </div>
              <h1 className="font-manrope font-extrabold text-[144px] absolute  bottom-temp left-10 bg-gradient-to-r from-slate-400 via-slate-800 to-slate-900 bg-clip-text text-transparent text-black">
              {Math.round(weather.list[0].main.temp)}°
              </h1>
              <div className="text-mood font-extrabold text-[24px] font-manrope bottom-moodBottom left-moodLeft absolute">
              {weather.list[1].weather[0].main}
              </div>
              <img
                className="absolute w-64 h-64 bottom-image-bottom"
                src={getWeatherImage(weather.list[0].weather[0].main)}></img>
                <img className="absolute w-[261px] h-[262px] opacity-[50%] bottom-image-bottom" src="shadow.png">
              
                </img>
            </div>
          )}
        </div>
        <div className="rounded-lg bg-night  h-night-1200 w-night-800 right-36 top-40 my-28 left-36 z-10 flex justify-center items-center ">
       
          {/* <button
            onClick={fetchWeather}
            className="absolute top-1 bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Get Weather
          </button> */}
          {error && <div className="text-red-500 absolute top-16">{error}</div>}
          {weather && (
            <div className="bg-night bg-opacity-75 h-city w-city flex justify-center items-center relative rounded-[48px]">
              <div></div>
              <div className="text-white font-manrope font-extrabold  bg-custom-gradient bg-clip-text text-transparent absolute text-city top-cityTop left-cityLeft">
                {weather.city.name}
              </div>
              <h1 className="font-manrope font-extrabold  text-[144px] absolute bottom-temp left-10 bg-gradient-to-r from-slate-400 via-slate-800 to-slate-900  bg-clip-text text-transparent text-white">
                {Math.round(weather.list[4].main.temp)}°
              </h1>
              <div className="text-purple font-bold text-moods bottom-moodBottom left-moodLeft absolute">
                {weather.list[4].weather[0].main}
              </div>
              <img
                className="absolute w-64 h-64 bottom-image-bottom"
                src={getNightImage(weather.list[4].weather[0].main)}></img>
                <img className="absolute w-[277px] h-[277px] bottom-image-bottom" src="nightShadow.png"></img>
            </div>
          )}
          
        
        </div>
      </div>
    </div>
  );

}