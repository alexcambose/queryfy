# queryfy

## Install
```
npm install -S queryfy
```

## Usage

#### Standard
```js
const q = require('queryfy');

const params = {
  param1: 'This is param1',
  param2: 'This is param2'
};

const path = 'https://something.com/';

console.log(path + q.queryfy(params));
// https://something.com/?param1=This%20is%20param1&param2=This%20is%20param2
```
#### Reverse

```js
const q = require('queryfy');

const path = 'https://something.com/?param1=This%20is%20param1&param2=This%20is%20param2';


console.log(q.deQueryfy(path));
// { param1: 'This is param1', param2: 'This is param2' }
```
it also supports only the query string with or without `?`
```js
console.log(q.deQueryfy('param1=This%20is%20param1&param2=This%20is%20param2'));
// { param1: 'This is param1', param2: 'This is param2' }

console.log(q.deQueryfy('?param1=This%20is%20param1&param2=This%20is%20param2'));
// { param1: 'This is param1', param2: 'This is param2' }
```
