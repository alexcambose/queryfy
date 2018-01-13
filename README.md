# queryfy
[![Build Status](https://travis-ci.org/alexcambose/queryfy.svg?branch=master)](https://travis-ci.org/alexcambose/queryfy)
## Install
```
bower install queryfy
```
```html
<script src="bower_components/queryfy/index.js"></script>
```
or
[npm](https://www.npmjs.com/package/queryfy)
```
npm install -S queryfy
```
## Usage

### Standard

```js
const q = require('queryfy');

const params = {
  param1: 'This is param1',
  param2: 'This is param2'
};

const path = 'https://something.com/';

console.log(q.queryfy(path, params));
// https://something.com/?param1=This%20is%20param1&param2=This%20is%20param2
```

or you can specify only the first argument with the query object

```js
const params = {
  param1: 'This is param1',
  param2: 'This is param2'
};
console.log(q.queryfy(params));
// param1=This%20is%20param1&param2=This%20is%20param2
```

### Reversed

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
