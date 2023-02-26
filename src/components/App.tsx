import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CityInput from "./CityInput";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import axios from "axios";

function App() {
  const API_KEY = "8dd42c7d54288d8c903ff6a771aa8b80";
  const { units } = useSelector((state: RootState) => state.weather);
  const { location } = useSelector((state: RootState) => state.weather);
  const [weather, setWeather] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const fetchWeather = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}&units=${units}`
      );
      console.log(response);
      setWeather(response);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchWeather();
  }, [location]);
  if (loading) return "loading...";
  return (
    <div className="App">
      <h1>Weather App</h1>
      <h2>Temperature: {weather.data.main.temp}</h2>
      <CityInput />
    </div>
  );
}

export default App;
