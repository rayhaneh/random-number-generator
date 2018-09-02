import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import {
  SearchBar,
  mapStateToProps,
  mapDispatchToProps,
} from './search-bar';
import { CHANGE_MIN_VALUE } from '../../redux/actions';

let props;
let comp;
let mockMaxChange = jest.fn();
let mockMinChange = jest.fn();
let mockFetchNumber = jest.fn();

describe('SearchBar Container', () => {
  beforeEach(() => {
    props = {
      range: {
        max: 50,
        min: 0,
      },
      changeMin: mockMinChange,
      changeMax: mockMaxChange,
      fetchNumber: mockFetchNumber,
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders properly', () => {
    comp = shallow(<SearchBar {...props} />);
    expect(comp).toMatchSnapshot();
  });

  it('should call change max action when onMaxChange method is called', () => {
    const instance = new SearchBar(props);
    expect(mockMaxChange.mock.calls.length).toBe(0);
    instance.onMaxChange({target: {value: 2000}})
    expect(mockMaxChange.mock.calls.length).toBe(1);
  });

  it('should call change min action when onMinChange method is called', () => {
    const instance = new SearchBar(props);
    expect(mockMinChange.mock.calls.length).toBe(0);
    instance.onMinChange({target: {value: 2}})
    expect(mockMinChange.mock.calls.length).toBe(1);
  });

  it('should call fetch number action when onSubmit method is called', () => {
    const instance = new SearchBar(props);
    expect(mockFetchNumber.mock.calls.length).toBe(0);
    instance.onSubmit({ preventDefault: jest.fn() })
    expect(mockFetchNumber.mock.calls.length).toBe(1);
  });

  it('should return range from the state', () => {
    const state = {
      range: {
        max: 1000,
        min: 1,
      },
      number: 200,
    };

    expect(mapStateToProps(state)).toEqual({
      range: state.range,
    });
  });

  it('should return range from the state', () => {
    const mockDispatch = jest.fn();

    mapDispatchToProps(mockDispatch).changeMin(10);
    expect(mockDispatch.mock.calls.length).toBe(1);
    expect(mockDispatch.mock.calls[0][0]).toEqual({ type: CHANGE_MIN_VALUE, payload: 10});
  });
});
