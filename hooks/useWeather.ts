import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { WeatherData } from "../types/weather";
import { useEffect } from "react";

export const useWeather = (
  city: string,
  units: string,
  onSuccessCallback?: (data: WeatherData) => void,
  onErrorCallback?: (error: Error) => void
) => {
  const weatherQuery = useQuery<WeatherData, Error>({
    queryKey: ["weather", city, units],
    queryFn: async () => {
      if (!city) throw new Error("City is required");
      const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
      if (!API_KEY) throw new Error("API key is missing");

      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: { q: city, appid: API_KEY, units },
        }
      );
      return response.data;
    },
    enabled: !!city,
    retry: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (weatherQuery.isSuccess && weatherQuery.data && onSuccessCallback) {
      onSuccessCallback(weatherQuery.data);
    }
  }, [weatherQuery.isSuccess, weatherQuery.data, onSuccessCallback]);

  useEffect(() => {
    if (weatherQuery.isError && weatherQuery.error && onErrorCallback) {
      onErrorCallback(weatherQuery.error);
    }
  }, [weatherQuery.isError, weatherQuery.error, onErrorCallback]);

  return {
    weather: weatherQuery.data,
    isLoading: weatherQuery.isLoading,
    error: weatherQuery.error,
  };
};
