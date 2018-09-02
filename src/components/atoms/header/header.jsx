import React from 'react';

export const Header = (props) => {
  return (
    <h1 className={'blue'}>
      {props.text}
    </h1>
  );
}
