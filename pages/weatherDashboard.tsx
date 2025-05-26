import { useState, useCallback } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ErrorMessage from "../components/ErrorMessage";
import SearchHistory from "../components/SearchHistory";
import { useWeather } from "../hooks/useWeather";
import { useSearchHistory } from "../hooks/useSearchHistory";
import UnitToggle from "../components/unitToggle";
import { useUnitToggle } from "../hooks/useUnitToggle";
import Spinner from "@/components/Spinner";

const WeatherDashboardPage: React.FC = () => {
  const [city, setCity] = useState("");
  const [inputError, setInputError] = useState<string | null>(null);
  const { history, addToHistory } = useSearchHistory();
  const { isMetric, setIsMetric, addUnitToLocalStorage } = useUnitToggle();

  const handleWeatherSuccess = useCallback(() => {
    if (city) {
      addToHistory(city);
      setInputError(null);
    }
  }, [city, addToHistory]);

  const handleWeatherError = useCallback((error: Error) => {
    setInputError(error.message);
  }, []);

  const { weather, error, isLoading } = useWeather(
    city,
    isMetric ? "metric" : "imperial",
    handleWeatherSuccess,
    handleWeatherError
  );

  const handleSearch = (newCity: string) => {
    setCity(newCity);
  };

  const onToggleChange = () => {
    setIsMetric(!isMetric);
    addUnitToLocalStorage(!isMetric);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6">Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {inputError && <ErrorMessage message={inputError} />}
      {error && (
        <ErrorMessage
          message={
            error.message.includes("404")
              ? "City could not be found. Please try again."
              : "An error occurred while fetching weather data."
          }
        />
      )}
      <div className="flex flex-row mx-auto w-full max-w-3xl mt-8 px-2">
        {history.length > 0 && (
          <SearchHistory history={history} onSelect={handleSearch} />
        )}
        <div className="flex flex-col w-full max-w-3xl">
          {isLoading ? (
            <Spinner message="Loading weather data..." />
          ) : (
            weather && (
              <>
                <UnitToggle isMetric={isMetric} onClick={onToggleChange} />
                <WeatherCard
                  weather={weather}
                  time={new Date()}
                  city={city}
                  unit={isMetric ? "metric" : "imperial"}
                />
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboardPage;
