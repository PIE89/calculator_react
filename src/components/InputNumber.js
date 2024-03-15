function InputNumber(props) {
  const changeValue = (e) => {
    props.showNumber(e.target.value);
  };

  return (
    <input
      onChange={changeValue}
      type="number"
      className="form-control mb-3"
      id="input"
      placeholder="Введите значение"
      ref={props.inputRef}
    />
  );
}

export default InputNumber;
