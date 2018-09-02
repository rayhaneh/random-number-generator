import { combineReducers } from 'redux';
import { NumberReducer } from './reducer_number';
import { RangeReducer } from './reducer_range';

const rootReducer = combineReducers({
  number: NumberReducer,
  range: RangeReducer,
});

export default rootReducer;
