import React from 'react';

export const Header = (props) => {
  const {
    text
  } = props;

  return (
    <h1 className={'blue'}>
      {text}
    </h1>
  );
}
