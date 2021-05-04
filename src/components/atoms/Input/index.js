import React from "react";
import "./input.scss";

const Input = ({ label, ...rest }) => {
  return (
    <>
      <div>
        <label>{label}</label>
        <input placeholder="Input" {...rest} />
      </div>
    </>
  );
};

export { Input };
