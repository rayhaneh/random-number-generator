import * as React from 'react';

export const Button = (props) => {
  const {
    text,
  } = props;

  return (
    <button 
      className={'f3 bg-blue white pa2'}
      type='submit'
    >
      {text}
    </button>
  );
}
