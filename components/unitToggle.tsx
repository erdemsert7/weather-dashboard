import { getToggleSymbol } from "../utils/utils";
interface UnitToggleProps {
  isMetric: boolean;
  onClick: () => void;
}

const UnitToggle: React.FC<UnitToggleProps> = ({ isMetric, onClick }) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      <span
        className={`text-lg font-medium transition-colors duration-200 ${
          !isMetric ? "text-blue-600" : "text-gray-400"
        }`}
      >
        {"Fahrenheit"} {getToggleSymbol(false)}
      </span>
      <div className="relative">
        <button
          onClick={onClick}
          className={`w-16 h-8 rounded-full p-1 transition-all duration-300 ease-in-out shadow-lg ${
            isMetric ? "bg-blue-500" : "bg-gray-300"
          }`}
        >
          <div
            className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
              isMetric ? "translate-x-8" : "translate-x-0"
            }`}
          />
        </button>
      </div>
      <span
        className={`text-lg font-medium transition-colors duration-200 ${
          isMetric ? "text-blue-600" : "text-gray-400"
        }`}
      >
        {"Celsius"} {getToggleSymbol(true)}
      </span>
    </div>
  );
};

export default UnitToggle;
