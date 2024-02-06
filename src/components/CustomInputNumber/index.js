import React, { useState, useMemo, useEffect } from "react";

const CustomInputNumber = (props) => {
  const { min = 0, max, step = 1, name, value, disabled, onChange, onBlur } = props;
  const [inputNumber, setInputNumber] = useState(value || 0);
  const minDisabled = useMemo(() => { return inputNumber <= min }, [min, inputNumber])
  const maxDisabled = useMemo(() => { return inputNumber >= max }, [max, inputNumber])
  let timerId = null;

  const handleDecrease = (event) => {
    const value = inputNumber - step;
    setInputNumber(value)
    updateInputNumber(event, value)

    timerId = setInterval(() => {
      setInputNumber(pre => pre - step)
    }, 300);
  }
  const handleIncrease = (event) => {
    const value = inputNumber + step;
    setInputNumber(value)
    updateInputNumber(event, value)


    timerId = setInterval(() => {
      setInputNumber(pre => pre + step)
    }, 300);
  }

  const handleOnBlur = () => {
    stopCalculate()
    onBlur()
  }

  const stopCalculate = () => {
    clearInterval(timerId);
  }

  const updateInputNumber = (event, updateValue) => {
    event.target.name = name;
    event.target.value = updateValue;
    onChange(event)
  }

  return (
    <div className="inputBox">
      <button
        type="button"
        disabled={minDisabled}
        onMouseDown={handleDecrease}
        onMouseUp={stopCalculate}
        onBlur={handleOnBlur}
        className={disabled ? "disabled" : ""}
      >
        <i className="fa fa-solid fa-minus"></i>
      </button>
      <input
        type="number"
        name={name}
        value={inputNumber}
        min={minDisabled}
        max={maxDisabled}
        onChange={() => { }}
        onBlur={handleOnBlur}
      />
      <button
        type="button"
        disabled={maxDisabled}
        onMouseDown={handleIncrease}
        onMouseUp={stopCalculate}
        onBlur={handleOnBlur}
        className={disabled ? "disabled" : ""}
      >
        <i className="fa fa-solid fa-plus"></i>
      </button>
    </div>
  )
}

export default CustomInputNumber;