import { pathOr } from 'ramda';
import {
  CHANGE_MAX_VALUE,
  CHANGE_MIN_VALUE,
} from '../actions';

export const initialState = {
  min : 0,
  max: 1000,
};

export const RangeReducer = (state = initialState, action) => {
  switch(action.type){
    case CHANGE_MIN_VALUE:
      return {
        ...state,
        min: pathOr(state.min, ['payload'], action),
      }
    case CHANGE_MAX_VALUE:
      return {
        ...state,
        max: pathOr(state.max, ['payload'], action),
      }
  }
  return state
}
