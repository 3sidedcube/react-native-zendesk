/**
 * @providesModule RNZendesk
 * @flow
 */
'use strict';

var NativeRNZendesk = require('NativeModules').RNZendesk;

/**
 * High-level docs for the RNZendesk iOS API can be written here.
 */
export default {
	submitSupport: function(name, email) {
    	NativeRNZendesk.submitSupport(name, email);
	}
}