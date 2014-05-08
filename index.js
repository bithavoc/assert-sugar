var assert = require('assert');

function extractSugarTo(obj) {
    if(!obj.isDefined) {
        obj.isDefined = function sugarIsDefined(val, msg) {
            assert.notStrictEqual(undefined, val, msg);
        };
    }
    if(!obj.isUndefined) {
        obj.isUndefined = function sugarIsUndefined(val, msg) {
            assert.strictEqual(undefined, val, msg);
        };
    }
    if(!obj.isNull) {
        obj.isNull = function sugarIsNull(val, msg) {
                assert.strictEqual(null, val, msg);
        };
    }
    if(!obj.isNotNull) {
        obj.isNotNull = function sugarIsNotNull(val, msg) {
                assert.notStrictEqual(null, val, msg);
        };
    }
}

extractSugarTo(assert);
extractSugarTo(module.exports);

module.exports.extractSugarTo = extractSugarTo;

