/*!
 * esprima-extract-comments <https://github.com/jonschlinkert/esprima-extract-comments>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var esprima = require('esprima');
var mapFiles = require('map-files');

/**
 * Extract code comments from a glob of files:
 *
 * **Example:**
 *
 * ```js
 * var extract = require('esprima-extract-comments');
 * extract('lib/*.js');
 * ```
 *
 * @param  {String} `patterns` Glob patterns to used.
 * @param  {Object} `options` Options to pass to [esprima] or [globby], or [map-files].
 * @return {Object} Object of code comments.
 * @api public
 */

function extract(patterns, options) {
  return mapFiles(patterns, _.extend({
    // noop for mapFiles
    rename: function(filepath) {
      return filepath;
    },
    parse: function (filepath, options) {
      var code = fs.readFileSync(filepath, 'utf8');
      return extract.fromString(code, options);
    }
  }, options));
}


/**
 * Extract code comments from the given `string`.
 *
 * **Example:**
 *
 * ```js
 * var extract = require('esprima-extract-comments');
 * extract.fromString('// this is a code comment');
 * ```
 *
 * @param  {String} `string`
 * @param  {Object} `options` Options to pass to esprima.
 * @return {Object} Object of code comments.
 * @api public
 */

extract.fromString = function(string, options) {
  var opts = _.extend({comment: true, loc: true }, options);
  var res = esprima.parse(string, opts);
  console.log(res.comments[0])
  return res.comments;
};


/**
 * Expose `extract`
 */

module.exports = extract;
