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
 * @param {string} directoryPath
 * @returns {boolean}
 */
module.exports = function directoryExists( directoryPath ) {
  try {
    return fs.statSync( directoryPath ).isDirectory();
  } catch ( err ) {
    return false;
  }
};
