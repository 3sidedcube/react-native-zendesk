/**
 * @providesModule RNZendesk
 * @flow
 */
'use strict';

var NativeRNZendesk = require('NativeModules').RNZendesk;

/**
 * High-level docs for the RNZendesk iOS API can be written here.
 */

var RNZendesk = {
  test: function() {
    NativeRNZendesk.test();
  }
};

module.exports = RNZendesk;
