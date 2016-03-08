# node helpers
a set of helpers for node applications

## errorLogger( err, req )
logs to stdout an error message object containing:
* req.method
* req.originalUrl
* req.status
* date
* req.remoteAddress
* req.headers
* req.session
* req.body
* err
```javascript
@param {Error} err
@param {IncomingMessage} req
```

## getGenericRequestOptions( req, request_options, user_options )
augments the `request_options` provided
```javascript
@param {IncomingMessage} req
@param {Object} request_options
@param {Object} [user_options]
@param {string} [user_options.user-agent = request/2.69.0 ( https://www.npmjs.com/package/request )]
@param {number} [user_options.timeout = ( 3 * 1000 )]
```

## requestHelper( options, debug )
```javascript
@param {Object} options
@param {boolean} [debug]
@returns {Promise}
```

## setLocale()
sets `req.session.lang` based on the optional `lang_requested` falling back to `lang_fallback`, if provided, or hard-coded `lang_default`, which is `en`
```javascript
@param {IncomingMessage} req
@param {string} [lang_requested]
@param {string} [lang_fallback]
```