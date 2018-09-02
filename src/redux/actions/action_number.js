import { get } from 'axios';

export const FETCH_NUMBER = 'FETCH_NUMBER'
export const fetchNumber = (range) => {
  const API_BASE_URL='https://j160x3dmd0.execute-api.us-west-2.amazonaws.com/dev';
  const url = `${ API_BASE_URL }/numbers?min=${ range.min }&max=${ range.max }`
  return get(url)
    .then(response => {
      return {
        type: FETCH_NUMBER,
        payload: response
      }
    });
}
