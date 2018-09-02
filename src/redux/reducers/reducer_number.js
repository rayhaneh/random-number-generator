import { pathOr } from 'ramda';
import {
  FETCH_NUMBER,
} from '../actions';

export const initialState = 0;

export const NumberReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_NUMBER:
      return pathOr(state, [ 'payload', 'data', 'number' ], action);
  }
  return state
}
