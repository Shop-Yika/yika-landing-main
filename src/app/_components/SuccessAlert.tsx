type Props = {
  message: string;
};

const SuccessAlert = ({ message }: Props) => {
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-3 rounded-lg bg-green-100 text-green-800 p-4 shadow-lg animate-slide-in">
      <span>{message}</span>
    </div>
  );
};

export default SuccessAlert;
