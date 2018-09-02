export const CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE';
export const changeMax = (maxValue) => {
  return {
    type: CHANGE_MAX_VALUE,
    payload: Number(maxValue),
  }
}

export const CHANGE_MIN_VALUE = 'CHANGE_MIN_VALUE';
export const changeMin = (minValue) => {
  return {
    type: CHANGE_MIN_VALUE,
    payload: Number(minValue),
  }
}