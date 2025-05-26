import { useState } from "react";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(city.trim());
    setCity("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-3xl mx-auto gap-2 flex-col"
    >
      <div className="flex w-full gap-2">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search for a city..."
          className="flex-1 border p-2 rounded-md focus:outline-none focus:ring-2"
        />
        <button
          type="submit"
          className="btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          disabled={city.length < 2}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
