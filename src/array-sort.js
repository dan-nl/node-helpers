'use strict';

/**
 * @param {Array} array
 * @param {string} sort_on
 * @returns {Array} sorted array
 */
module.exports = function arraySort( array, sort_on ) {
  if ( !( array instanceof Array ) ) {
    console.warn( 'arraySort( ' + array + ', ' + sort_on + ' ): array not provided as an Array' );
    return;
  }

  if ( !sort_on ) {
    return;
  }

  return array.sort( function ( a, b ) {
    if ( !a || !b ) {
      return 0;
    }

    if ( a[ sort_on ] > b[ sort_on ] ) {
      return 1;
    }

    if ( a[ sort_on ] < b[ sort_on ] ) {
      return -1;
    }

    // a must be equal to b
    return 0;
  } );
};