import * as React from 'react';

import {
  Button,
} from '../../atoms';

import {
  InputFieldWithLabel
} from '../../molecules';

export const Form = (props) => {
  const {
    max,
    min,
    onMinChange,
    onMaxChange,
    onSubmit,
  } = props;

  return (
    <form 
      onSubmit={onSubmit}
      className={'pa5 flex flex-column'}
    >
      <div className={'flex flex-row mb2'}>
        <InputFieldWithLabel
          handleChange={onMinChange}
          label={'Min'}
          value={min}
          min={''}
          max={max}
        />
        <InputFieldWithLabel
          handleChange={onMaxChange}
          label={'Max'}
          value={max}
          min={min}
          max={''}
        />   
      </div>   
      <Button
        text={'GENERATE'}
      />
    </form>
  )
}
