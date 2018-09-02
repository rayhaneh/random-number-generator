import * as React from 'react';

export const Label = (props) => {
  const {
    text,
  } = props;

  return (
    <label className='mh2 blue'>
      {text}
    </label>
  );
}
