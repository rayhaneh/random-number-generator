import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { App } from './app';

let comp;

describe('App', () => {
  it('renders properly', () => {
    comp = shallow(<App />);
    expect(comp).toMatchSnapshot();
  });
});
