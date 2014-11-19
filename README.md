# http-get-pathname

Extract and cache the pathname string of an http request

Call this function on an incoming HTTP request in one or more places
without worrying about performance/caching and without any prior
parsing of the request/url

The leading slash is stripped by default

If you like the style, check out:

- [http-body-parse](https://github.com/srcagency/http-body-parse)
- [http-query-parse](https://github.com/srcagency/http-query-parse)

which shares some caching and thus works great together

## Installation

```shell
npm install http-get-pathname
```

## Usage

The result is cached and subsequent calls are cheap

```js
var httpGetPathname = require('http-get-pathname');

// http://localhost/path/name?someQueryString

httpGetPathname(request); // path/name

// second call is cheap
httpGetPathname(request); // path/name

// with leading slash
httpGetPathname(request, true); // /path/name
```

## License

[MIT](http://opensource.org/licenses/MIT) © [src.agency](http://src.agency)
