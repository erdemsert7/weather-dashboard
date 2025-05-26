import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import ForecastCard from "../components/ForecastCard";
import { useForecast } from "../hooks/useForecast";
import Spinner from "@/components/Spinner";

const ForecastPage: React.FC = () => {
  const { city, unit } = useParams<{
    city: string;
    unit: "metric" | "imperial";
  }>();
  const navigate = useNavigate();
  const { forecast, isLoading, error } = useForecast(
    (city as string) || "",
    unit as "metric" | "imperial"
  );

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      {isLoading ? (
        <Spinner message="Loading forecast data..." />
      ) : (
        forecast && (
          <div className="w-full max-w-4xl">
            <h1 className="text-3xl capitalize font-bold mb-6 text-center">
              {city} - 5 Days Forecast
            </h1>
            <ForecastCard
              forecast={forecast}
              unit={unit as "metric" | "imperial"}
            />
          </div>
        )
      )}
      {error && <ErrorMessage message={error.message} />}
      <button
        onClick={handleBackClick}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Go Back
      </button>
    </div>
  );
};

export default ForecastPage;
