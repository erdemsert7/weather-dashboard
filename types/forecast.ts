export interface ForecastData {
  list: {
    dt: number;
    main: {
      temp: number;
      humidity: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
    dt_txt: string;
  }[];
  city: {
    name: string;
  };
}
