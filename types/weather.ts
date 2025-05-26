export interface WeatherData {
  name: string;
  sys: { country: string };
  main: { temp: number; humidity: number };
  weather: { id: number; description: string; icon: string }[];
  wind: { speed: number };
}
