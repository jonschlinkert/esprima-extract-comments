'use strict';

const fs = require('fs');
const path = require('path');
const util = require('util');
const assert = require('assert');
const extract = require('..');
const read = (name) => fs.readFileSync(path.join(__dirname, `fixtures/${name}`), 'utf8');

describe('extract comments', function() {
  describe('main export', function() {
    it('should extract line comments', function() {
      const comments = extract('foo // bar');
      assert(Array.isArray(comments));
      assert.equal(comments.filter(c => c.type === 'LineComment').length, 1);
    });

    it('should extract block comments', function() {
      const comments = extract(read('app.js'));
      assert(comments.filter(c => c.type === 'BlockComment').length > 1);
    });

    it('should extract complex comments', function() {
      const comments = extract(read('angular.js'));
      assert.equal(comments[comments.length - 1].loc.start.line, 29702);
    });
  });

  describe('.file', function() {
    it('should extract block comments from a file', function() {
      const comments = extract.file('app.js', { cwd: path.join(__dirname, 'fixtures') });
      assert(comments.filter(c => c.type === 'BlockComment').length > 1);
    });

    it('should extract line comments from a file', function() {
      const comments = extract.file('app.js', { cwd: path.join(__dirname, 'fixtures') });
      assert(comments.filter(c => c.type === 'LineComment').length >= 1);
    });
  });
});

