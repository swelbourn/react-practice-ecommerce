import React from 'react';

import './form-input.styles.scss';

export const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        htmlFor={otherProps.id}
        className={
          otherProps.value.length
            ? 'shrink form-input-label'
            : 'form-input-label'
        }
      >
        {label}
      </label>
    ) : null}
  </div>
);
