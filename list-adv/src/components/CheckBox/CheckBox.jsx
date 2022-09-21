import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import "./CheckBox.css";

const CheckBox = ({ label, checked, onChange, onClick }) => {
  const inputRef = useRef();
  const onChangeInput = () => {
    if (onChange) {
      onChange(inputRef.current);
    }
  };
  return (
    <label className="custom-checkbox">
      <input
        className="custom-checkbox__input"
        type="checkbox"
        onChange={onChangeInput}
        checked={checked}
        ref={inputRef}
        onClick={onClick}
      />
      <span className="custom-checkbox__checkmark">
        <FontAwesomeIcon icon={faCheck} className="custom-checkbox__icon" />
      </span>
      {label}
    </label>
  );
};

export default CheckBox;
