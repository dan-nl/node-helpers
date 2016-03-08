'use strict';

/**
 * @param {Object} request_options
 *
 * @param {Object} [user_options]
 * @param {string} user_options.user-agent
 * @param {number} user_options.timeout
 *
 * @returns {*}
 */
function addUserOptions( request_options, user_options ) {
  if ( !( user_options instanceof Object ) ) {
    return request_options;
  }

  if ( typeof user_options[ 'user-agent' ] === 'string' ) {
    request_options.headers[ 'user-agent' ] = user_options[ 'user-agent' ];
  }

  if ( typeof user_options.timeout === 'number' && !isNaN( user_options.timeout ) ) {
    request_options.timeout = user_options.timeout;
  }

  return request_options;
}

/**
 * @param {IncomingMessage} req
 * @param {Object} req.headers
 *
 * @param {Object} request_options
 *
 * @returns {*}
 */
function addRequestHeaders( req, request_options ) {
  if ( !( req instanceof Object) ) {
    return request_options;
  }

  if ( typeof req.headers[ 'x-forwarded-for' ] === 'string' ) {
    request_options.headers[ 'x-forwarded-for' ] = req.headers[ 'x-forwarded-for' ];
  }

  if ( typeof req.headers[ 'x-forwarded-proto' ] === 'string' ) {
    request_options.headers[ 'x-forwarded-proto' ] = req.headers[ 'x-forwarded-proto' ];
  }

  if ( typeof req.headers[ 'x-real-ip' ] === 'string' ) {
    request_options.headers[ 'x-real-ip' ] = req.headers[ 'x-real-ip' ];
  }

  if ( typeof req.headers[ 'x-real-agent' ] === 'string' ) {
    request_options.headers[ 'x-real-agent' ] = req.headers[ 'x-real-agent' ];
  }

  return request_options;
}

/**
 * augments the `request_options` provided
 *
 * @param {IncomingMessage} req
 * @param {Array} req.headers
 *
 * @param {Object} request_options
 * @param {Object} [user_options]
 *
 * @returns {Object}
 */
module.exports = function getGenericRequestOptions( req, request_options, user_options ) {
  if ( !( request_options instanceof Object ) ) {
    return request_options;
  }

  // headers
  if ( !request_options.headers ) {
    request_options.headers = {};
  }

  // user-agent
  request_options.headers[ 'user-agent' ] = 'request/2.69.0 ( https://www.npmjs.com/package/request )';

  // timeout
  request_options.timeout = ( 3 * 1000 );

  addRequestHeaders( req, request_options );
  addUserOptions( request_options, user_options );

  return request_options;
};