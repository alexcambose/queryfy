const assert = require('chai').assert;
const q = require('../index');
describe('queryfy', function () {
    const params = {
        param1: 'This is param1',
        param2: 'This is param2'
    };
    const path = 'https://something.com/';

    it('params', function () {
        assert.equal(q.queryfy(params), 'param1=This%20is%20param1&param2=This%20is%20param2');
    });

    it('path with params', function () {
        assert.equal(q.queryfy(path, params), 'https://something.com/?param1=This%20is%20param1&param2=This%20is%20param2');
    });
});
describe('deQueryfy', function () {
    const path = 'https://something.com/?param1=This%20is%20param1&param2=This%20is%20param2';
    const query = 'param1=This%20is%20param1&param2=This%20is%20param2';
    it('params from path string', function () {
        assert.deepEqual(q.deQueryfy(path), { param1: 'This is param1', param2: 'This is param2' });
    });
    it('params from query string with ?', function () {
        assert.deepEqual(q.deQueryfy('?' + query), { param1: 'This is param1', param2: 'This is param2' });
    });
    it('params from query string without ?', function () {
        assert.deepEqual(q.deQueryfy(query), { param1: 'This is param1', param2: 'This is param2' });
    });
});