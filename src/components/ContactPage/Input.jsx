import React, { useState } from "react";
import "./Input.scss";
import { validateInput } from "./inputValidation";

export const Input = ({
  label,
  placeholder,
  value: data,
  onChange,
  validators,
  textarea,
}) => {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const data = e.target.value;
    validateInput(data, setError, validators);
    onChange({ value: data, isValid: !error });
  };
  return (
    <div className="input-container">
      <h6>{label}</h6>
      {textarea ? (
        <textarea
          placeholder={placeholder}
          value={data.value}
          onChange={handleChange}
        />
      ) : (
        <input
          placeholder={placeholder}
          value={data.value}
          onChange={handleChange}
        />
      )}
      <p className="error-message">{error}</p>
    </div>
  );
};
