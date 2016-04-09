'use strict';

/**
 * module variables
 */
var fileExists;
var fs;
var path;
var Promise;

/**
 * variable assignments
 */
fileExists = require( './file-exists' );
fs = require( 'fs' );
path = require( 'path' );
Promise = require( 'bluebird' );

/**
 * @param {string} destination
 * @param {string} content
 *
 * @returns {Promise}
 */
module.exports = function createFile( destination, content ) {
  return new Promise(
    /**
     * @param {Function} resolve
     * @param {Function} reject
     */
    function ( resolve, reject ) {
      if ( typeof destination !== 'string' ) {
        reject( 'createFile( ' + destination + ', content ) destination not provided as a string' );
      }

      if ( typeof content !== 'string' ) {
        reject( 'createFile( ' + destination + ', content ) content not provided as a string' );
      }

      fs.writeFile(
        destination,
        content,
        /**
         * @param {Error} err
         */
        function ( err ) {
          if ( err ) {
            reject( err );
          }

          resolve( 'createFile( ' + destination + ', content ) successful' );
        }
      );
    }
  );
};