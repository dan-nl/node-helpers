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
path = require( 'path' );
fileExists = require( './file-exists' );
fs = require( 'fs' );
Promise = require( 'bluebird' );

/**
 * @param {string} source
 * @returns {Promise}
 */
module.exports = function readFile( source ) {
  return new Promise(
    /**
     * @param {Function} resolve
     * @param {Function} reject
     */
    function ( resolve, reject ) {
      var routes;

      if ( typeof source !== 'string' ) {
        reject( 'readFile( ' + source + ' ) source not provided as a string' );
      }

      if ( !fileExists( source ) ) {
        resolve( 'readFile( ' + source + ' ) source does not exist' );
      }

      fs.readFile(
        source,
        'utf8',
        /**
         * @param {Error} err
         * @param {string} content
         */
        function ( err, content ) {
          if ( err ) {
            reject( err );
            return;
          }

          resolve( content );
        }
      );
    }
  );
};