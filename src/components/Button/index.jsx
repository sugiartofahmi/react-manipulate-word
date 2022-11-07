const AddButton = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="font-bold py-2 px-5 bg-slate-400 rounded-lg"
    >
      {text}
    </button>
  );
};

export default AddButton;
