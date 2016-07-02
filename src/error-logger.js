'use strict';

/**
 * @param {Error} err
 * @param {number} err.status
 *
 * @param {IncomingMessage} req
 * @param {Object} req.body
 * @param {Object} req.connection
 * @param {string} req.connection.remoteAddress
 * @param {Object} req.headers
 * @param {string} req.method
 * @param {string} req.originalUrl
 * @param {Object} req.session
 *
 * @param {ServerResponse} [res]
 */
module.exports = function errorLogger( err, req, res ) {
  var msg = { error: {} };

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

  if ( err.status !== 404 ) {
    console.error( err.stack );
  }
};
