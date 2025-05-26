interface SearchHistoryProps {
  history: string[];
  onSelect: (city: string) => void;
}

const SearchHistory: React.FC<SearchHistoryProps> = ({ history, onSelect }) => {
  return (
    <div className="max-w-xs w-full mt-4">
      <h3 className="text-lg font-semibold">Search History</h3>
      <ul className="mt-2 space-y-2">
        {history.map((city) => (
          <li
            key={city}
            className="cursor-pointer text-blue-500 hover:underline"
            onClick={() => onSelect(city)}
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
