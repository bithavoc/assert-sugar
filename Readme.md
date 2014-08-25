assert-sugar
===
One of the most stupid Node.js modules ever!

This ~~shitty~~ module will enhance [Node.js' Assert](http://nodejs.org/api/assert.html) with more assertions (contributions welcome.)

Where is the sugar?
====

Here it is:

* `isDefined(value, [message])`
* `isUndefined(value, [message])`
* `isNull(value, [message])`
* `isNotNull(value, [message])`
* `isObject(value, [message])`
* `isNotObject(value, [message])`

Btw, this module doesn't cause diabetes. If you use `assert-sugar` with a test suite that already provides some of these functions, these functions will remain intact.

Usage
===

    var assert = require('assert');
    var sugar = require('assert-sugar');
    
    assert.isDefined(this.thisDoesNotExist) // throws assert.AssertionError

Tests
===

    npm test

Want to add more sugar?
====

1. Fork.
2. Create branch for your new sugar.
3. Commit your new sugar along with the tests in`test/test.js` (add yourself to AUTHORS).
4. Send a pull request based on the branch.

License (MIT)
====
Copyright (c) 2014 Bithavoc.io and Contributors - http://bithavoc.io

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
