import React, { useState, useMemo, useEffect } from "react";

const CustomInputNumber = (props) => {
  const { min = 0, max, step = 1, name, value, disabled, onChange, onBlur } = props;
  const [inputNumber, setInputNumber] = useState(value || 0);


  return (
    <div className="inputBox">
      <button
        type="button"
        disabled={false}
        onMouseDown={() => { }}
        onMouseUp={() => { }}
        onBlur={() => { }}
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
        onBlur={() => { }}
      />
      <button
        type="button"
        disabled={false}
        onMouseDown={() => { }}
        onMouseUp={() => { }}
        onBlur={() => { }}
        className={disabled ? "disabled" : ""}
      >
        <i className="fa fa-solid fa-plus"></i>
      </button>
    </div>
  )
}

export default CustomInputNumber;