import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  WiDaySunny,
  WiCloud,
  WiCloudy,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
  WiDayShowers,
  WiDayRainMix,
  WiDayRain,
  WiStrongWind
} from 'react-icons/wi';

// Mapping of weather descriptions to icons
const weatherIcons = {
  "clear sky": <WiDaySunny size={32} />,
  "few clouds": <WiCloud size={32} />,
  "scattered clouds": <WiCloudy size={32} />,
  "broken clouds": <WiCloudy size={32} />,
  "overcast clouds": <WiCloud size={32} />,
  "shower rain": <WiDayShowers size={32} />,
  "rain": <WiRain size={32} />,
  "light rain": <WiDayRainMix size={32} />,
  "moderate rain": <WiRain size={32} />,
  "heavy intensity rain": <WiRain size={32} />,
  "very heavy rain": <WiRain size={32} />,
  "extreme rain": <WiRain size={32} />,
  "freezing rain": <WiDayRain size={32} />,
  "light intensity shower rain": <WiDayShowers size={32} />,
  "heavy intensity shower rain": <WiDayShowers size={32} />,
  "ragged shower rain": <WiDayShowers size={32} />,
  "light intensity drizzle": <WiDayRainMix size={32} />,
  "drizzle": <WiDayRainMix size={32} />,
  "heavy intensity drizzle": <WiDayRainMix size={32} />,
  "light intensity drizzle rain": <WiDayRainMix size={32} />,
  "drizzle rain": <WiDayRainMix size={32} />,
  "heavy intensity drizzle rain": <WiDayRainMix size={32} />,
  "shower rain and drizzle": <WiDayRainMix size={32} />,
  "heavy shower rain and drizzle": <WiDayRainMix size={32} />,
  "shower drizzle": <WiDayRainMix size={32} />,
  "thunderstorm with light rain": <WiThunderstorm size={32} />,
  "thunderstorm with rain": <WiThunderstorm size={32} />,
  "thunderstorm with heavy rain": <WiThunderstorm size={32} />,
  "light thunderstorm": <WiThunderstorm size={32} />,
  "thunderstorm": <WiThunderstorm size={32} />,
  "heavy thunderstorm": <WiThunderstorm size={32} />,
  "ragged thunderstorm": <WiThunderstorm size={32} />,
  "thunderstorm with light drizzle": <WiThunderstorm size={32} />,
  "thunderstorm with drizzle": <WiThunderstorm size={32} />,
  "thunderstorm with heavy drizzle": <WiThunderstorm size={32} />,
  "light snow": <WiSnow size={32} />,
  "Snow": <WiSnow size={32} />,
  "heavy snow": <div><WiSnow size={32} /><WiSnow size={32} /></div>,
  "sleet": <WiSnow size={32} />,
  "light shower sleet": <WiSnow size={32} />,
  "shower sleet": <WiSnow size={32} />,
  "light rain and snow": <WiSnow size={32} />,
  "rain and snow": <WiSnow size={32} />,
  "light shower snow": <WiSnow size={32} />,
  "shower snow": <WiSnow size={32} />,
  "heavy shower snow": <div><WiSnow size={32} /><WiSnow size={32} /></div>,
  "mist": <WiFog size={32} />,
  "smoke": <WiFog size={32} />,
  "haze": <WiFog size={32} />,
  "sand/ dust whirls": <WiStrongWind size={32} />,
  "fog": <WiFog size={32} />,
  "sand": <WiStrongWind size={32} />,
  "dust": <WiStrongWind size={32} />,
  "volcanic ash": <WiStrongWind size={32} />,
  "squalls": <WiStrongWind size={32} />,
  "tornado": <WiStrongWind size={32} />,
};

// Default icon for unknown descriptions
const defaultIcon = <WiDaySunny size={32} />;

const WeatherCard = () => {
  const [temperature, setTemperature] = useState(null);
  const [weatherDescription, setWeatherDescription] = useState('');
  const [time, setTime] = useState(new Date());
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
      console.log('API Key:', apiKey);

      if (!apiKey) {
        throw new Error('API key is missing. Please check your .env file.');
      }

      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=21409,us&units=imperial&appid=${apiKey}`);
      console.log('API Response:', response);

      setTemperature(response.data.main.temp);
      setWeatherDescription(response.data.weather[0].description);
    } catch (error) {
      console.error('Error fetching the weather data:', error);
      setError('Failed to fetch weather data');
    }
  };

  useEffect(() => {
    fetchWeatherData();
    const interval = setInterval(() => setTime(new Date()), 1000);  // Update the time every second
    return () => clearInterval(interval);  // Clean up the interval on component unmount
  }, []);

  const weatherIcon = weatherIcons[weatherDescription] || defaultIcon;

  return (
    <div className="flex flex-row md:flex-row items-center justify-center  ">
      <div className=" rounded-lg  flex flex-row md:flex-row justify-center items-center">


        <p className="text-xs md:text-lg mt-2 ">
          {temperature !== null ? `${temperature} °F` : 'Loading...'}
        </p>
        <p className="3 md:text-3xl  mt-0 flex items-center h-fit">
          {weatherIcon}
        </p>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default WeatherCard;
