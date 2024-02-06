import React, { useState, useMemo, useEffect } from "react";

const CustomInputNumber = (props) => {
  const { min = 0, max, step = 1, name, value, disabled, onChange, onBlur } = props;
  const [inputNumber, setInputNumber] = useState(value || 0);
  const minDisabled = useMemo(() => { return inputNumber <= min }, [min, inputNumber])
  const maxDisabled = useMemo(() => { return inputNumber >= max }, [max, inputNumber])
  let timerId = null;

  const handleDecrease = () => {
    if (!timerId) {
      setInputNumber(inputNumber - step)
      return
    }

    timerId = setInterval(() => {
      setInputNumber(inputNumber - step)
    }, 700);
  }
  const handleIncrease = () => {
    // console.log({ timerId });

    setInputNumber(inputNumber + step)


    timerId = setInterval(() => {
      setInputNumber(inputNumber + step)
    }, 700);
  }

  const handleOnBlur = () => {
    stopCalculate()
    onBlur()
  }

  const stopCalculate = () => {
    clearInterval(timerId);
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