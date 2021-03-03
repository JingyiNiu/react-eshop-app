import React from 'react';

import './form-input.style.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='group'>
        <input className='form-input' onchange={handleChange} {...otherProps} />
        {
            //if there is a label, then render a label, otherwise, nothing
            label ? (
                <label
                    className={`${
                        otherProps.value.length ? 'shrink' : ''
                    } form-input-label`}
                >
                    {label}
                </label>
            ) : null
        }
    </div>
);

export default FormInput;