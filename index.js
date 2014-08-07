'use strict';

var debug = require('debug')('http-get-pathname');

module.exports = function( request, withLeadingSlash ){
	var pathname;

	if (request._pathname || request._pathname === '') {
		pathname = request._pathname;
	} else if (request._parsedUrl) {
		pathname = request._pathname = request._parsedUrl.pathname.substring(1);
	} else {
		var qsIdx = request.url.indexOf('?');

		if (~qsIdx) {
			request._pathname = request.url.slice(1, qsIdx);
			request._query = request.url.slice(qsIdx+1);
		} else {
			request._pathname = request.url.substring(1);
			request._query = '';
		}

		pathname = request._pathname;
	}

	debug('found pathname string to be "%s"', pathname);

	return withLeadingSlash ? '/' + pathname : pathname;
};
