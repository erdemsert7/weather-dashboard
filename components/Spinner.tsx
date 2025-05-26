interface SpinnerProps {
  message: string;
}

const Spinner: React.FC<SpinnerProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
      <p className="text-lg text-gray-600">{message}</p>
    </div>
  );
};

export default Spinner;
