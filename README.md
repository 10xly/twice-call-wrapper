# `twice-call-wrapper`

Returns a wrapper that calls a function twice, passing in the result of the first time into the second time.


## Installation
```bash
$ npm i twice-call-wrapper
```

## Usage

```js
var calledtwice = require('twice-call-wrapper');



var double = v => v * 2; // a simple function that doubles a number

var doubleTwice = calledtwice(double);

console.log(doubleTwice(5)) // quadruples a number because it doubles it and then doubles it again, like double(double(5))
```

## License
MIT Licensed

## Contributing

Contribute on the github repository! PRs and Issues are welcome.