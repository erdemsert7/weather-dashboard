import { useEffect, useState } from "react";

const MAX_HISTORY = 5;

export const useSearchHistory = () => {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem("searchHistory");
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  const addToHistory = (city: string) => {
    if (city && history[0] !== city) {
      setHistory((prev) => {
        const newHistory = [
          city,
          ...prev.filter((item) => item !== city),
        ].slice(0, MAX_HISTORY);
        localStorage.setItem("searchHistory", JSON.stringify(newHistory));
        return newHistory;
      });
    }
  };
  return { history, addToHistory };
};
