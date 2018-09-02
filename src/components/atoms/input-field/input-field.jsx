import * as React from 'react';

export const InputField = (props) => {
  const {
    handleChange,
    value,
    min,
    max,
  } = props;

  return (
    <input
      className={'pa2 ba b--blue blue'}
      onChange={handleChange}
      type='number'
      value={value}
      min={min}
      max={max}
    />
  );
}
