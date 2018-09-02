import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import {
  NumberDisplay,
  mapStateToProps,
} from './number-display';

let props;
let comp;

describe('NumberDisplay Container', () => {
  beforeEach(() => {
    props = {
      number: 10,
    };
  });

  it('renders properly', () => {
    comp = shallow(<NumberDisplay {...props} />);
    expect(comp).toMatchSnapshot();
  });

  it('should return number from state', () => {
    const state = {
      range: {
        max: 1000,
        min: 1,
      },
      number: 200,
    };

    expect(mapStateToProps(state)).toEqual({
      number: state.number,
    });
  });
});
