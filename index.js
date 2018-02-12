/*!
 * esprima-extract-comments <https://github.com/jonschlinkert/esprima-extract-comments>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

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

module.exports = function(str) {
  var ast = esprima.parse(str, {
    tolerant: true,
    comment: true,
    tokens: true,
    range: true,
    loc: true
  });

  return ast.comments;
};
