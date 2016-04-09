'use strict';

/**
 * module variables
 */
var fs;

/**
 * module assignments
 */
fs = require( 'fs' );

/**
 * @param {string} filePath
 * @returns {boolean}
 */
module.exports = function fileExists( filePath ) {
  try {
    return fs.statSync( filePath ).isFile();
  } catch ( err ) {
    return false;
  }
};