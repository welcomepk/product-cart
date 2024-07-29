const RedButton = ({
  onClick,
  text,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-red hover:bg-red-dark focus:bg-red-dark focus:ring-red-dark ring-offset-2 focus:ring-2  transition-all text-rose-50 px-4 py-3 font-1 rounded-full"
    >
      {text}
    </button>
  );
};

export default RedButton;
