import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { InputFieldWithLabel } from './input-field-with-label';

let props;
let comp;

describe('InputFieldWithLabel Component', () => {
  beforeEach(() => {
    props = {
      label: 'Label',
      handleChange: jest.fn(),
      placeholder: 'min',
      value: '',
    }
  });

  it('renders properly', () => {
    comp = shallow(<InputFieldWithLabel {...props} />);
    expect(comp).toMatchSnapshot();
  });
});
