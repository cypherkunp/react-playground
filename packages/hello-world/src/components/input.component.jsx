import React from 'react';

function Input({ type, id, name, value, onChange, disabled = false, labelText }) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      ></input>
    </>
  );
}

export default Input;
