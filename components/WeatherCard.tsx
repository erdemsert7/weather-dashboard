import { useNavigate } from "react-router-dom";
import { WeatherData } from "../types/weather";
import Image from "next/image";
import { getBackgroundGradient, getUnitSymbol } from "../utils/utils";

interface WeatherCardProps {
  weather: WeatherData;
  time: Date;
  city: string;
  unit: "metric" | "imperial";
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  weather,
  time,
  city,
  unit,
}) => {
  const unitSymbol = getUnitSymbol(unit);
  const backgroundGradient = getBackgroundGradient(
    weather.weather[0].description
  );
  const navigate = useNavigate();

  const handleCardClick = (city: string, unit: "metric" | "imperial") => {
    navigate(`/forecast/${city}/${unit}`);
  };

  return (
    <div
      className={`relative bg-gradient-to-r ${backgroundGradient} text-white rounded-xl shadow-lg p-6 max-w-sm w-full mx-auto mt-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fadeIn cursor-pointer py-4 mb-4`}
      onClick={() => handleCardClick(city, unit)}
    >
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold tracking-tight">
          {weather.name}, {weather.sys.country}
        </h2>
        <h3>
          {time.getHours()}: {time.getMinutes()}
        </h3>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-lg capitalize opacity-90">
            {weather.weather[0].description}
          </p>
          <p className="text-5xl font-extrabold mt-1">
            {Math.round(weather.main.temp)}
            {unitSymbol}
          </p>
        </div>
        <Image
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
      <div className="mt-6 flex justify-between text-sm opacity-90">
        <div className="flex items-center gap-2">
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
        <div className="flex items-center gap-2">
          <p>Wind: {weather.wind.speed} m/s</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-10 rounded-xl pointer-events-none" />
    </div>
  );
};

export default WeatherCard;
