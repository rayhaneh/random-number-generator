import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { Button } from './button';

let props;
let comp;

describe('Button Component', () => {
  beforeEach(() => {
    props = {
      text: 'Submit'
    }
  });

  it('renders properly', () => {
    comp = shallow(<Button {...props} />);
    expect(comp).toMatchSnapshot();
  });
});
