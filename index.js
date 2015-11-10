/*!
 * esprima-extract-comments <https://github.com/jonschlinkert/esprima-extract-comments>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var extend = require('extend-shallow');
var esprima = require('esprima');

/**
 * Extract code comments from the given `string`.
 *
 * ```js
 * var extract = require('esprima-extract-comments');
 * extract('// this is a code comment');
 * ```
 * @param  {String} `string`
 * @param  {Object} `options` Options to pass to esprima.
 * @return {Object} Object of code comments.
 * @api public
 */

module.exports = function extract(string, options) {
  var opts = extend({comment: true, loc: true }, options);
  return esprima.parse(string, opts).comments;
};
