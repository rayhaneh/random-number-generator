import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { Label } from './label';

let props;
let comp;

describe('Label Component', () => {
  beforeEach(() => {
    props = {
      text: 'Label'
    }
  });

  it('renders properly', () => {
    comp = shallow(<Label {...props} />);
    expect(comp).toMatchSnapshot();
  });
});
