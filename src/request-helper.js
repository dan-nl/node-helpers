'use strict';

/**
 * module variables
 */
var request_debug_added;
var path;
var Promise;
var request;

/**
 * variable assignments
 */
path = require( 'path' );
Promise = require( 'bluebird' );
request = require( 'request' );

/**
 * @param {Function} resolve
 * @param {Function} reject
 * @param {Object} options
 */
function callRequest( resolve, reject, options ) {
  request(
    options,

    /**
     * @param {null|Error} err
     * @param {IncomingMessage} res
     * @param {string} body
     */
    function responseHandler( err, res, body ) {
      if ( err ) {
        reject( err );
      }

      resolve( body );
    }
  );
}

/**
 * @param {Object} options
 * @param {boolean} [debug]
 * @returns {Promise}
 */
module.exports = function requestHelper( options, debug ) {
  if ( debug && !request_debug_added ) {
    require( 'request-debug' )( request );
    request_debug_added = true;
  }

  return new Promise( function ( resolve, reject ) {
    callRequest.call( this, resolve, reject, options );
  } );
};