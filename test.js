'use strict'

var test = require('tap').test;
var httpGetPathname = require('./');

test('complex', function( t ){
	run(t, { url: '/path/name?someQueryString' }, 'path/name');
});

test('multi level', function( t ){
	run(t, { url: '/path/name' }, 'path/name');
});

test('single level', function( t ){
	run(t, { url: '/pathname' }, 'pathname');
});

test('index', function( t ){
	run(t, { url: '/' }, '');
});

test('empty', function( t ){
	run(t, { url: '' }, '');
});

function run( t, request, expexted ){
	t.equal(httpGetPathname(request), expexted, 'returns correct pathname');
	t.equal(httpGetPathname(request), expexted, 'correct on subsequent call');
	t.equal(httpGetPathname(request, true), '/' + expexted, 'returns with leading slash');
	t.end();
}
