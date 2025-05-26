import { Routes, Route } from "react-router-dom";
import ForecastPage from "./forecast";
import WeatherDashboardPage from "./weatherDashboard";

export default function Home() {
  return (
    <Routes>
      <Route path="/" element={<WeatherDashboardPage />} />
      <Route path="/forecast/:city/:unit" element={<ForecastPage />} />
    </Routes>
  );
}
