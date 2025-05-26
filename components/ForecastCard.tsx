import React from "react";
import { ForecastData } from "../types/forecast";
import Image from "next/image";
import { getBackgroundGradient, getUnitSymbol } from "../utils/utils";

interface ForecastCardProps {
  forecast: ForecastData;
  unit: "metric" | "imperial";
}

const ForecastCard: React.FC<ForecastCardProps> = ({ forecast, unit }) => {
  const dailyForecasts = forecast.list
    .filter((item) => item.dt_txt.includes("12:00:00"))
    .slice(0, 5);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("tr-TR", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };
  const unitSymbol = getUnitSymbol(unit);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {dailyForecasts.map((day, index) => (
        <div
          key={index}
          className={`bg-gradient-to-r ${getBackgroundGradient(
            day.weather[0].description
          )} ${
            day.weather[0].description
          } backdrop-blur-lg rounded-lg p-4 shadow-lg flex flex-col items-center text-white border border-gray-200 border-opacity-20`}
        >
          <h3 className="text-lg font-semibold">{formatDate(day.dt_txt)}</h3>
          <Image
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt={day.weather[0].description}
            width={80}
            height={80}
            className="object-contain"
          />
          <p className="text-xl font-bold">
            {Math.round(day.main.temp)}
            {unitSymbol}
          </p>
          <p className="text-sm capitalize">{day.weather[0].description}</p>
          <p className="text-sm mt-2">Humidity: {day.main.humidity}%</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastCard;
