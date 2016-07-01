(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("isomorphic-fetch"));
	else if(typeof define === 'function' && define.amd)
		define(["isomorphic-fetch"], factory);
	else if(typeof exports === 'object')
		exports["react-reach"] = factory(require("isomorphic-fetch"));
	else
		root["react-reach"] = factory(root["fetch"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reachWithDispatch = exports.reachGraphQL = undefined;

	var _reachGraphQL = __webpack_require__(2);

	var _reachWithDispatch = __webpack_require__(3);

	exports.reachGraphQL = _reachGraphQL.reachGraphQL;
	exports.reachWithDispatch = _reachWithDispatch.reachWithDispatch;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stringify = __webpack_require__(4);

	var _stringify2 = _interopRequireDefault(_stringify);

	exports.transport = transport;

	var _isomorphicFetch = __webpack_require__(7);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * [transport creates call to server with isomorphic-fetch]
	 * @param  {[String]} path        [url to hit with request]
	 * @param  {[Object]} query       [The GraphQL query/mutation]
	 * @param  {[Object]} queryParams = {} [Params to pass into query]
	 * @return {[Promise]}            [Promise containing payload]
	 */

	function transport(path, query, queryParams, token) {
	  return (0, _isomorphicFetch2.default)(path, {
	    method: 'POST',
	    headers: {
	      'Accept': 'application/json',
	      'content-type': 'application/json',
	      'authorization': token
	    },
	    body: (0, _stringify2.default)({
	      query: query,
	      queryParams: queryParams
	    })
	  }).then(function (response) {
	    return response.json();
	  }).then(function (responseBody) {
	    if (responseBody && responseBody.errors) {
	      throw new Error(responseBody.errors);
	    }
	    return responseBody.data;
	  });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reachGraphQL = reachGraphQL;

	var _transport = __webpack_require__(1);

	/**
	 * [reachGraphQL Makes queres or mutations against GraphQL]
	 * @param  {[String]} path        [path to the GraphQL server]
	 * @param  {[Object]} query       [The query that GraphQL will use to fetch your data]
	 * @param  {[object]} queryParams =  {} [Should contain object with different query params]
	 * @return {[Object]}             [Data that was queried or mutated]
	 */

	function reachGraphQL(path, query) {
	  var queryParams = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	  var token = arguments[3];

	  return (0, _transport.transport)(path, query, queryParams, token).then(function (res) {
	    return res;
	  });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reachWithDispatch = reachWithDispatch;

	var _transport = __webpack_require__(1);

	/**
	 * [reachWithDispatch description]
	 * @param  {[String]} path        [path to the GraphQL server]
	 * @param  {[Object]} query       [The query that GraphQL will use to fetch your data]
	 * @param  {[object]} queryParams =  {} [should contain object with different query params]
	 * @param  {[type]} actionCreator =  (  [The actionCreator to dispatch]
	 * @return {[function]}               [dispatch to store]
	 */
	function reachWithDispatch(path, query) {
	  var queryParams = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	  var token = arguments[3];
	  var actionCreator = arguments[4];

	  return (0, _transport.transport)(path, query, queryParams, token).then(function (res) {
	    return function (dispatch) {
	      return dispatch(actionCreator(res));
	    };
	  });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(6);
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }
/******/ ])
});
;