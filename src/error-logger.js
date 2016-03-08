'use strict';

/**
 * @param {Error} err
 * @param {number} err.status
 *
 * @param {IncomingMessage} req
 * @param {string}          req.body
 * @param {Object}          req.connection
 * @param {Object}          req.headers
 * @param {string}          req.method
 * @param {string}          req.originalUrl
 * @param {Object}          req.session
 */
module.exports = function errorLogger( err, req ) {
  var msg;

  if ( !( err instanceof Error ) ) {
    console.error( 'errorLogger( ' + err + ', ' +  req + ' ) err not provided as an Error' );
    return;
  }

  if ( !( req instanceof Object ) ) {
    console.error( 'errorLogger( ' + err + ', ' +  req + ' ) req not provided as an Object' );
    return;
  }

  msg = { error: {} };
  msg.error.method = req.method || null;
  msg.error.originalUrl = req.originalUrl || null;
  msg.error.status = err.status || 500;
  msg.error.date = new Date();
  msg.error.remoteAddress = req.connection.remoteAddress || null;
  msg.error.headers = req.headers || null;
  msg.error.session = req.session || null;
  msg.error.body = req.body || null;
  msg.error.err = err || null;

  console.error( msg );
};