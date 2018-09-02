import * as React from 'react';
import {
  InputField,
  Label
} from '../../atoms';

export const InputFieldWithLabel = (props) => {
  const {
    label,
    handleChange,
    value,
    min,
    max,
  } = props;

  return (
    <div>
      <Label text={label}/>
      <InputField
        handleChange={handleChange}
        value={value}
        min={min}
        max={max}
      />
    </div>
  );
}
