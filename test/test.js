var sugar = require('../');
var mocha = require('mocha');
var assert = require('assert');

function generateTestExports(target, name) {
    describe('assert-sugar exports for ' + name, function() {
        it('should export isDefined as function', function() {
            assert(typeof target.isDefined == 'function');
        });
        it('should export isUndefined as function', function() {
            assert(typeof target.isUndefined == 'function');
        });
        it('should export isNull as function', function() {
            assert(typeof target.isNull == 'function');
        });
        it('should export isNotNull as function', function() {
            assert(typeof target.isNotNull == 'function');
        });
        it('should export isObject as function', function() {
            assert(typeof target.isObject == 'function');
        });
    });
}
generateTestExports(assert, 'Global Node.js Assert Module');
generateTestExports(sugar, 'Sugar Module');
describe('extractSugarTo', function() {
    var obj = {};
    sugar.extractSugarTo(obj);
    generateTestExports(obj, "Custom Object");
});

describe('assert-sugar asserts', function() {
    it('isDefined should throw when undefined value is given', function() {
        assert.throws(function() {
            sugar.isDefined(undefined);
        }, assert.AssertionError);
    });
    it('isDefined should not throw when a non-undefined value is given', function() {
        assert.doesNotThrow(function() {
            sugar.isDefined(1);
        });
    });
    it('isUndefined should throw when non-undefined value is given', function() {
        assert.throws(function() {
            sugar.isUndefined(1);
        }, assert.AssertionError);
    });
    it('isUndefined should not throw when a undefined value is given', function() {
        assert.doesNotThrow(function() {
            sugar.isUndefined(undefined);
        });
    });
    it('isNull should throw when not-null value is given', function() {
        assert.throws(function() {
            sugar.isNull(1);
        }, assert.AssertionError);
    });
    it('isNull should not throw when a null value is given', function() {
        assert.doesNotThrow(function() {
            sugar.isNull(null);
        });
    });
    it('isNotNull should throw when null value is given', function() {
        assert.throws(function() {
            sugar.isNotNull(null);
        }, assert.AssertionError);
    });
    it('isNotNull should not throw when a non-null value is given', function() {
        assert.doesNotThrow(function() {
            sugar.isNotNull(1);
        });
    });
    it('isObject should throw when not-object value is given', function() {
        assert.throws(function() {
            sugar.isObject(1);
        }, assert.AssertionError);
    });
    it('isObject should not throw when an object value is given', function() {
        assert.doesNotThrow(function() {
            sugar.isObject({});
        });
    });
    it('isNotObject should throw when object value is given', function() {
        assert.throws(function() {
            sugar.isNotObject({});
        }, assert.AssertionError);
    });
    it('isNotObject should not throw when a non-object value is given', function() {
        assert.doesNotThrow(function() {
            sugar.isNotObject(1);
        });
    });
});
