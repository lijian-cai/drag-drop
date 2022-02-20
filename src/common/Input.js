import React from "react";

export default function Input({ name, value, onChange, onBlur }) {
  return (
    <input
      onBlur={onBlur}
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      autoFocus
    />
  );
}
