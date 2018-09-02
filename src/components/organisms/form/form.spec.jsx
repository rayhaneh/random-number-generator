import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { Form } from './form';

let props;
let comp;

describe('Form Component', () => {
  beforeEach(() => {
    props = {
      max: 50,
      min: 0,
      onMaxChange: jest.fn(),
      onMinChange: jest.fn(),
      onSubmit: jest.fn(),
    };
  });

  it('renders properly', () => {
    comp = shallow(<Form {...props} />);
    expect(comp).toMatchSnapshot();
  });
});
