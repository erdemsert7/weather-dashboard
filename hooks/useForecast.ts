import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ForecastData } from "../types/forecast";

export const useForecast = (city: string, units: "metric" | "imperial") => {
  const forecastQuery = useQuery<ForecastData, Error>({
    queryKey: ["forecast", city],
    queryFn: async () => {
      if (!city) throw new Error("City is required");
      const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
      if (!API_KEY) throw new Error("API key is missing");

      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast",
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

  return {
    forecast: forecastQuery.data,
    isLoading: forecastQuery.isLoading,
    error: forecastQuery.error,
  };
};
