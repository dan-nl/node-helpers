'use strict';

var helpers;

helpers = {};
helpers.errorLogger = require( './src/error-logger' );
helpers.getGenericRequestOptions = require( './src/get-generic-request-options' );
helpers.requestHelper = require( './src/request-helper' );
helpers.setLocale = require( './src/set-locale' );

module.exports = helpers;