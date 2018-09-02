import {
  CHANGE_MAX_VALUE,
  CHANGE_MIN_VALUE, 
  changeMax,
  changeMin,
} from './action_range';

describe('changeMax', () => {
  it('should return the expected action', () => {
    const input = 200;
    const expected = {
      type: CHANGE_MAX_VALUE,
      payload: input,
    };

    expect(changeMax(input)).toEqual(expected);
  });
});

describe('changeMin', () => {
  it('should return the expected action', () => {
    const input = 10;
    const expected = {
      type: CHANGE_MIN_VALUE,
      payload: input,
    };

    expect(changeMin(input)).toEqual(expected);
  });
});
