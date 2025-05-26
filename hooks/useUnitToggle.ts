import { useEffect, useState } from "react";
export const useUnitToggle = () => {
  const [isMetric, setIsMetric] = useState(false);

  useEffect(() => {
    const storedUnit = localStorage.getItem("unit");
    if (storedUnit) {
      setIsMetric(JSON.parse(storedUnit));
    }
  }, []);

  const addUnitToLocalStorage = (unit: boolean) => {
    try {
      localStorage.setItem("unit", JSON.stringify(unit));
    } catch (error) {
      console.error("Error saving unit preference to localStorage:", error);
    }
  };

  return { isMetric, setIsMetric, addUnitToLocalStorage };
};
