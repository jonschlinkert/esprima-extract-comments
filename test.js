/*!
 * esprima-extract-comments <https://github.com/jonschlinkert/esprima-extract-comments>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var assert = require('assert');
var should = require('should');
var extract = require('./');

describe('.parseFiles():', function () {
  it('should read each file as a string and extract comments from the code.', function () {
    var actual = extract('fixtures/**/*.js');

    actual.should.be.an.object;
    assert.equal(Object.keys(actual).length > 1, true);
    actual.should.have.property('fixtures/assemble.js');
  });
});

