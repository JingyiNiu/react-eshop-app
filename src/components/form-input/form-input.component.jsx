import React from "react";

import "./form-input.style.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {
      // if there is a label then render a label, otherwise, render nothing
      // when user is typeing then add a shrink class to lable
      label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null
    }
  </div>
);

export default FormInput;
