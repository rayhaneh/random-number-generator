import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { InputField } from './input-field';

let props;
let comp;
let mockHandleChange = jest.fn();

describe('InputField Component', () => {
  beforeEach(() => {
    props = {
      placeholder: 'min',
      value: '',
      handleChange: mockHandleChange,
    }
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders properly', () => {
    comp = shallow(<InputField {...props} />);
    expect(comp).toMatchSnapshot();
  });

  it('calls handleChange when input is changed', () => {
    comp = shallow(<InputField {...props} />);
    comp.find('input')
      .first()
      .simulate('change', 3);
    expect(mockHandleChange.mock.calls.length).toBe(1);
  });
});
