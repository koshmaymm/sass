const PlusMinusButtons = ({ val, handleVal }) => {
  return (
    <p>
      <button
        className="btn-push"
        type="button"
        onClick={() => handleVal(Number(val + 1))}
      >
        + 1
      </button>
      <button
        className="btn-push"
        type="button"
        onClick={() => handleVal(Number(val - 1))}
      >
        - 1
      </button>
    </p>
  );
};

export default PlusMinusButtons;
