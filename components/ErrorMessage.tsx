interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="bg-red-100 text-red-700 p-4 rounded-md max-w-md mx-auto mt-4 flex items-center gap-2 animate-shake border border-red-300">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;