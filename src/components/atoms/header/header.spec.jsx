import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { Header } from './header';

let props;
let comp;

describe('Header Component', () => {
  beforeEach(() => {
    props = {
      text: 'Main Title',
    }
  });

  it('renders properly', () => {
    comp = shallow(<Header {...props} />);
    expect(comp).toMatchSnapshot();
  });
});
