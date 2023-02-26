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
  const [loading, setLoading] = useState<boolean>(true);
  const [properLocation, setProperLocation] = useState<string>("New York City");
  const [timeOfDay, setTimeOfDay] = useState<string>("");
  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}&units=${units}`
      );
      setWeather(response);
      setProperLocation(response.data.name);
      if (
        Date.now() / 1000 > response.data.sys.sunset ||
        Date.now() / 1000 < response.data.sys.sunrise
      ) {
        setTimeOfDay("night");
      } else {
        setTimeOfDay("day");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchWeather();
  }, [location]);
  if (!weather.data && loading) return <>loading...</>;
  return (
    <div className={timeOfDay === "night" ? "dark" : "light"}>
      <CityInput />
      <h1>Weather App</h1>
      <h2>{properLocation}</h2>
      <h2>Temperature: {weather.data.main.temp}</h2>
      <h2>time of day: {timeOfDay}</h2>
    </div>
  );
}

export default App;
