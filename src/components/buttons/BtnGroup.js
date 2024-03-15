function BtnGroup(props) {
  const { statusValue, btnReset, equalValue } = props;

  const buttonsArray = [
    { name: "Minus", type: "-", onClick: () => statusValue("-") },
    { name: "Plus", type: "+", onClick: () => statusValue("+") },
    { name: "Reset", type: "reset", onClick: () => btnReset() },
    { name: "Equal", type: "=", onClick: () => equalValue() },
  ];

  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      {buttonsArray.map((button) => (
        <button
          key={button.name}
          onClick={button.onClick}
          value={button.type}
          type="button"
          className="btn btn-outline-primary"
        >
          {button.name}
        </button>
      ))}
    </div>
  );
}

export default BtnGroup;
