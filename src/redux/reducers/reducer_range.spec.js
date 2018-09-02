import {
  CHANGE_MAX_VALUE,
  CHANGE_MIN_VALUE,
} from '../actions';
import { RangeReducer, initialState } from './reducer_range';

describe('RangeReducer', () => {
  it('should return initialState if no state is provided and action type is invalid', () => {
    const input = {
      state: undefined,
      action: {
        type: 'INVALID_ACTION'
      }
    };

    const expected = initialState;

    expect(RangeReducer(input.state, input.action)).toEqual(expected);
  });

  describe('CHANGE_MAX_VALUE', () => {
    it('should return initialState if no state is provided', () => {
      const input = {
        state: undefined,
        action: {
          type: CHANGE_MAX_VALUE
        }
      };
  
      const expected = initialState; 
    
      expect(RangeReducer(input.state, input.action)).toEqual(expected);
    });
    
    it('should return current state if payload is invalid', () => {
      const input = {
        state: {
          min: 2000,
          max: 3000,
        },
        action: {
          type: CHANGE_MAX_VALUE
        }
      };
      
      const expected = {
        min: 2000,
        max: 3000,
      };
      
      expect(RangeReducer(input.state, input.action)).toEqual(expected);
    });

    it('should update state with value provided in payload', () => {
      const input = {
        state: {
          min: 2000,
          max: 3000,
        },
        action: {
          type: CHANGE_MAX_VALUE,
          payload: 4000,
        }
      };
      
      const expected = {
        min: 2000,
        max: 4000,
      };
      
      expect(RangeReducer(input.state, input.action)).toEqual(expected);
    });
  });

  describe('CHANGE_MIN_VALUE', () => {
    it('should return initialState if no state is provided', () => {
      const input = {
        state: undefined,
        action: {
          type: CHANGE_MIN_VALUE
        }
      };

      const expected = initialState;
    
      expect(RangeReducer(input.state, input.action)).toEqual(expected);
    });

    it('should return current state if payload is invalid', () => {
      const input = {
        state: {
          min: 3000,
          max: 3500,
        },
        action: {
          type: CHANGE_MIN_VALUE
        }
      };
      
      const expected = {
        min: 3000,
        max: 3500,
      };
      
      expect(RangeReducer(input.state, input.action)).toEqual(expected);
    });

    it('should update state with value provided in payload', () => {
      const input = {
        state: {
          min: 2000,
          max: 3000,
        },
        action: {
          type: CHANGE_MIN_VALUE,
          payload: 10,
        }
      };
      
      const expected = {
        min: 10,
        max: 3000,
      };
      
      expect(RangeReducer(input.state, input.action)).toEqual(expected);
    });
  });
});
