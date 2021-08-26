const assert = require('assert');
import demo from './demo';

describe("Test Demo", function () {

    it("passes test", function () {
        const demo = new demo();
        assert.equal(true, true);
    })
});
