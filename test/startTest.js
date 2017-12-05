const assert = require('assert');
const Main = require('../start')

describe('Main', () => {
    it('should return me hi there', () => {
        assert.equal(Main(), 'hi there')
    })
})