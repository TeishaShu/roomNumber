import React, { useState, useMemo, useEffect } from "react";

const CustomInputNumber = (props) => {
  const { min = 0, max, step = 1, name, value, disabled, onChange, onBlur } = props;
  const [inputNumber, setInputNumber] = useState(value || 0);
  const [timerId, setTimerId] = useState(null);
  const minDisabled = useMemo(() => { return inputNumber <= min }, [min, inputNumber])
  const maxDisabled = useMemo(() => { return inputNumber >= max }, [max, inputNumber])
  useEffect(() => {
    if (minDisabled || maxDisabled) {
      stopCalculate()
    }
  }, [minDisabled, maxDisabled])

  const handleDecrease = (event) => {
    const value = Math.max(min, inputNumber - step);
    setInputNumber(value)
    updateInputNumber(event, value)

    const timerId = setInterval(() => {
      setInputNumber(pre => {
        const value = Math.max(min, pre - step);
        updateInputNumber(event, value)
        return value;
      })
    }, 300);
    setTimerId(timerId)
  }

  const handleIncrease = (event) => {
    const value = Math.min(max, inputNumber + step);
    setInputNumber(value)
    updateInputNumber(event, value)

    const timerId = setInterval(() => {
      setInputNumber(pre => {
        const value = Math.min(max, pre + step);
        updateInputNumber(event, value)
        return value;
      })
    }, 300);
    setTimerId(timerId)
  }

  const handleOnBlur = (event) => {
    stopCalculate()
    event.target.name = name;
    event.target.value = Number(inputNumber);
    onBlur(event)
  }

  const stopCalculate = () => {
    if (timerId) { //
      clearInterval(timerId);
      setTimerId(null) //
    }
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
        min={min}
        max={max}
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