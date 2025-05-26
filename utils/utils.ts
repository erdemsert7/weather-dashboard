export const getBackgroundGradient = (weatherCondition: string) => {
  const condition = weatherCondition.toLowerCase();
  if (condition.includes("clear")) return "from-yellow-400 to-orange-500";
  if (condition.includes("cloud")) return "from-gray-400 to-gray-600";
  if (condition.includes("rain") || condition.includes("drizzle"))
    return "from-blue-500 to-indigo-600";
  if (condition.includes("snow")) return "from-blue-200 to-gray-300";
  if (condition.includes("thunder")) return "from-purple-500 to-gray-700";
  return "from-gray-300 to-gray-500";
};

export const getUnitSymbol = (unit: "metric" | "imperial") => {
  return unit === "metric" ? "°C" : "°F";
};

export const getToggleSymbol = (isMetric: boolean) => {
  return isMetric ? "°C" : "°F";
};
