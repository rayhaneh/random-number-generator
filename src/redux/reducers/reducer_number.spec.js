import {
  FETCH_NUMBER,
} from '../actions';
import { NumberReducer, initialState } from './reducer_number';

describe('NumberReducer', () => {
  it('should return initialState if no state is provided and action type is invalid', () => {
    const input = {
      state: undefined,
      action: {
        type: 'INVALID_ACTION'
      }
    };
    
    const expected = initialState;
    
    expect(NumberReducer(input.state, input.action)).toEqual(expected);
  });

  it('should return current state if payload is invalid', () => {
    const input = {
      state: 0,
      action: {
        type: FETCH_NUMBER,
      }
    };
    
    const expected = 0;
    
    expect(NumberReducer(input.state, input.action)).toEqual(expected);
  });

  it('should update state with value provided in payload', () => {
    const input = {
      state: 100,
      action: {
        type: FETCH_NUMBER,
        payload: {
          data: {
            number: 200,
          },
        }
      },
    };
    
    const expected = 200;
    
    expect(NumberReducer(input.state, input.action)).toEqual(expected);
  });
});
