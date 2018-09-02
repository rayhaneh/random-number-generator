import React from 'react';
import { Header } from '../../atoms';
import SearchBar from '../../../containers/search-bar/search-bar';
import NumberDisplay from '../../../containers/number-display/number-display'

export const App = () => {
  return (
    <div className={'flex flex-column items-center sans-serif'}>
      <Header text={'Random Number Generator'} />
      <NumberDisplay />
      <SearchBar />
    </div>
  );
}
