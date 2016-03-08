'use strict';

/**
 * module variables
 */
var lang_default;

/**
 * variable assignments
 */
lang_default = 'en';

function sanitizeLangRequested( lang_requested ) {

  if ( typeof lang_requested !== 'string' ) {
    return;
  }

  // http://stackoverflow.com/questions/3962543/how-can-i-validate-a-culture-code-with-a-regular-expression
  if ( !( /^[a-z]{2,3}(?:-[A-Z]{2,3})?$/.test( lang_requested ) ) ) {
    return;
  }

  return lang_requested;
}

/**
 * sets `req.session.lang` based on the optional `lang_requested`
 * falling back to `lang_fallback` if provided or hard-coded lang_default,
 * which is `en`
 *
 * @param {IncomingMessage} req
 * @param {Object}          req.session
 *
 * @param {string} [lang_requested]
 * @param {string} [lang_fallback]
 */
module.exports = function setLocale( req, lang_requested, lang_fallback ) {
  var lang;

  if ( !( req instanceof Object ) ) {
    return;
  }

  lang = sanitizeLangRequested( lang_requested );

  if ( !lang ) {
    lang = sanitizeLangRequested( lang_fallback );
  }

  if ( !lang ) {
    lang = lang_default;
  }

  req.session.lang = lang;
};