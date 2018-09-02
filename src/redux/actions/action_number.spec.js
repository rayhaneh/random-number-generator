import { 
  FETCH_NUMBER,
  fetchNumber,
} from './action_number';

jest.mock('axios', () => {
  return {
    get: jest.fn(() => Promise.resolve({
      statusCode: 200,
      number: 2
    })),
  }
})

describe('fetchNumber', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should return the expected action', () => {
    const input = {
      min: 0,
      max: 10,
    }

    const expected = {
      type: FETCH_NUMBER,
      payload: {
        statusCode: 200,
        number: 2
      }
    };

    expect.assertions(1);
    return fetchNumber(input)
      .then(action => {
        expect(action).toEqual(expected)
      })
  });
});
