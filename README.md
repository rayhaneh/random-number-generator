This app receives two values, min and max, and generates a random number between them.

To get a random number, this app sends a GET request to the following api endpoint:

```
https://j160x3dmd0.execute-api.us-west-2.amazonaws.com/dev/numbers?min=${minimum}&max=${maximum}
```

This endpoint is hooked up to a lambda function that returns a random number between the `min` and `max` values provided as query string parameters:

```
https://j160x3dmd0.execute-api.us-west-2.amazonaws.com/dev/numbers?min=10&max=2000
```

## Getting Started
```
$ git clone git@github.com:rayhaneh/random-number-generator.git
$ cd random-number-generator
$ npm install
$ npm start
```

## Unit Tests
To run unit tests:
```
npm run test
```

![screenshot](https://github.com/rayhaneh/random-number-generator/blob/master/screenshots/screenshot01.png)

