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
 * @param {string} source
 * @param {string} destination
 * @returns {Promise}
 */
module.exports = function copyFile( source, destination ) {
  return new Promise(
    /**
     * @param {Function} resolve
     * @param {Function} reject
     */
    function ( resolve, reject ) {
      var read_stream;
      var write_stream;

      if ( typeof source !== 'string' ) {
        reject( 'copyFile( ' + source + ', ' + destination + ' ) source not provided as a string' );
      }

      if ( typeof destination !== 'string' ) {
        reject( 'copyFile( ' + source + ', ' + destination + ' ) destination not provided as a string' );
      }

      if ( !fileExists( source ) ) {
        resolve( 'copyFile( ' + source + ', ' + destination + ' ) source not present' );
        return;
      }

      read_stream = fs.createReadStream( source );
      write_stream = fs.createWriteStream( destination );

      read_stream.on( 'error', function readStreamErrorHandler( err ) {
        reject( err );
      } );

      write_stream.on( 'error', function writeStreamErrorHandler( err ) {
        reject( err );
      } );

      write_stream.on( 'finish', function writeStreamDoneHandler() {
        resolve( 'copyFile( ' + source + ', ' + destination + ' ) successful' );
      } );

      read_stream.pipe( write_stream );
    }
  );
};