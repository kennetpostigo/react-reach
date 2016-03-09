(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["react-reach"] = factory();
	else
		root["react-reach"] = factory();
})(this, function() {
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

	var _reachGraphQL = __webpack_require__(92);

	var _reachWithDispatch = __webpack_require__(93);

	exports.reachGraphQL = _reachGraphQL.reachGraphQL;
	exports.reachWithDispatch = _reachWithDispatch.reachWithDispatch;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	var $Object = Object;
	module.exports = {
	  create: $Object.create,
	  getProto: $Object.getPrototypeOf,
	  isEnum: {}.propertyIsEnumerable,
	  getDesc: $Object.getOwnPropertyDescriptor,
	  setDesc: $Object.defineProperty,
	  setDescs: $Object.defineProperties,
	  getKeys: $Object.keys,
	  getNames: $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each: [].forEach
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var store = __webpack_require__(40)('wks'),
	    uid = __webpack_require__(43),
	    _Symbol = __webpack_require__(4).Symbol;
	module.exports = function (name) {
	  return store[name] || (store[name] = _Symbol && _Symbol[name] || (_Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	var core = module.exports = { version: '1.2.6' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof3 = __webpack_require__(5);

	var _typeof4 = _interopRequireDefault2(_typeof3);

	function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.__esModule = true;

	var _symbol = __webpack_require__(29);

	var _symbol2 = _interopRequireDefault(_symbol);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _typeof(obj) {
	  return obj && typeof _Symbol !== "undefined" && obj.constructor === _Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : (0, _typeof4.default)(obj);
	}

	exports.default = function (obj) {
	  return obj && typeof _symbol2.default !== "undefined" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(4),
	    core = __webpack_require__(3),
	    ctx = __webpack_require__(8),
	    PROTOTYPE = 'prototype';

	var $export = function $export(type, name, source) {
	  var IS_FORCED = type & $export.F,
	      IS_GLOBAL = type & $export.G,
	      IS_STATIC = type & $export.S,
	      IS_PROTO = type & $export.P,
	      IS_BIND = type & $export.B,
	      IS_WRAP = type & $export.W,
	      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
	      target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
	      key,
	      own,
	      out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? function (C) {
	      var F = function F(param) {
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	      // make static versions for prototype methods
	    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1; // forced
	$export.G = 2; // global
	$export.S = 4; // static
	$export.P = 8; // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(12);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// optional / simple context binding
	var aFunction = __webpack_require__(17);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1:
	      return function (a) {
	        return fn.call(that, a);
	      };
	    case 2:
	      return function (a, b) {
	        return fn.call(that, a, b);
	      };
	    case 3:
	      return function (a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }
	  return function () /* ...args */{
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(19)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = __webpack_require__(5);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : (0, _typeof3.default)(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var def = __webpack_require__(1).setDesc,
	    has = __webpack_require__(20),
	    TAG = __webpack_require__(2)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(67),
	    defined = __webpack_require__(18);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(55), __esModule: true };

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(58), __esModule: true };

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(1),
	    createDesc = __webpack_require__(23);
	module.exports = __webpack_require__(11) ? function (object, key, value) {
	  return $.setDesc(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	module.exports = true;

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(21);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $at = __webpack_require__(78)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(36)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      index = this._i,
	      point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(52), __esModule: true };

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(53), __esModule: true };

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(59), __esModule: true };

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _promise = __webpack_require__(16);

	var _promise2 = _interopRequireDefault(_promise);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = function (fn) {
	  return function () {
	    var gen = fn.apply(this, arguments);
	    return new _promise2.default(function (resolve, reject) {
	      function step(key, arg) {
	        try {
	          var info = gen[key](arg);
	          var value = info.value;
	        } catch (error) {
	          reject(error);
	          return;
	        }

	        if (info.done) {
	          resolve(value);
	        } else {
	          _promise2.default.resolve(value).then(function (value) {
	            step("next", value);
	          }, function (err) {
	            step("throw", err);
	          });
	        }
	      }

	      step("next");
	    });
	  };
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	var _getOwnPropertyNames = __webpack_require__(15);

	var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

	var _typeof2 = __webpack_require__(5);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g = (typeof global === "undefined" ? "undefined" : (0, _typeof3.default)(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : (0, _typeof3.default)(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : (0, _typeof3.default)(self)) === "object" ? self : undefined;

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime && (0, _getOwnPropertyNames2.default)(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	module.exports = __webpack_require__(51);

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch (e) {
	    g.regeneratorRuntime = undefined;
	  }
	}

	module.exports = { "default": module.exports, __esModule: true };
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(9),
	    TAG = __webpack_require__(2)('toStringTag')
	// ES3 wrong here
	,
	    ARG = cof(function () {
	  return arguments;
	}()) == 'Arguments';

	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	  // @@toStringTag case
	  : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	  // builtinTag case
	  : ARG ? cof(O)
	  // ES3 arguments fallback
	  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getOwnPropertyNames = __webpack_require__(15);

	var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

	var _typeof2 = __webpack_require__(5);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(14),
	    getNames = __webpack_require__(1).getNames,
	    toString = {}.toString;

	var windowNames = (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) == 'object' && _getOwnPropertyNames2.default ? (0, _getOwnPropertyNames2.default)(window) : [];

	var getWindowNames = function getWindowNames(it) {
	  try {
	    return getNames(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	module.exports.get = function getOwnPropertyNames(it) {
	  if (windowNames && toString.call(it) == '[object Window]') return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// check on default Array iterator
	var Iterators = __webpack_require__(10),
	    ITERATOR = __webpack_require__(2)('iterator'),
	    ArrayProto = Array.prototype;

	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(7);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	    // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var LIBRARY = __webpack_require__(22),
	    $export = __webpack_require__(6),
	    redefine = __webpack_require__(24),
	    hide = __webpack_require__(21),
	    has = __webpack_require__(20),
	    Iterators = __webpack_require__(10),
	    $iterCreate = __webpack_require__(69),
	    setToStringTag = __webpack_require__(13),
	    getProto = __webpack_require__(1).getProto,
	    ITERATOR = __webpack_require__(2)('iterator'),
	    BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	,
	    FF_ITERATOR = '@@iterator',
	    KEYS = 'keys',
	    VALUES = 'values';

	var returnThis = function returnThis() {
	  return this;
	};

	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function getMethod(kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS:
	        return function keys() {
	          return new Constructor(this, kind);
	        };
	      case VALUES:
	        return function values() {
	          return new Constructor(this, kind);
	        };
	    }return function entries() {
	      return new Constructor(this, kind);
	    };
	  };
	  var TAG = NAME + ' Iterator',
	      DEF_VALUES = DEFAULT == VALUES,
	      VALUES_BUG = false,
	      proto = Base.prototype,
	      $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
	      $default = $native || getMethod(DEFAULT),
	      methods,
	      key;
	  // Fix native
	  if ($native) {
	    var IteratorPrototype = getProto($default.call(new Base()));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if (!LIBRARY && has(proto, FF_ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if (DEF_VALUES && $native.name !== VALUES) {
	      VALUES_BUG = true;
	      $default = function values() {
	        return $native.call(this);
	      };
	    }
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _from = __webpack_require__(26);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ITERATOR = __webpack_require__(2)('iterator'),
	    SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () {
	    SAFE_CLOSING = true;
	  };
	  (0, _from2.default)(riter, function () {
	    throw 2;
	  });
	} catch (e) {/* empty */}

	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7],
	        iter = arr[ITERATOR]();
	    iter.next = function () {
	      safe = true;
	    };
	    arr[ITERATOR] = function () {
	      return iter;
	    };
	    exec(arr);
	  } catch (e) {/* empty */}
	  return safe;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _is = __webpack_require__(49);

	var _is2 = _interopRequireDefault(_is);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 7.2.9 SameValue(x, y)
	module.exports = _is2.default || function is(x, y) {
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _setPrototypeOf = __webpack_require__(28);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc = __webpack_require__(1).getDesc,
	    isObject = __webpack_require__(12),
	    anObject = __webpack_require__(7);
	var check = function check(O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: _setPrototypeOf2.default || ('__proto__' in {} ? // eslint-disable-line
	  function (test, buggy, set) {
	    try {
	      set = __webpack_require__(8)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	      set(test, []);
	      buggy = !(test instanceof Array);
	    } catch (e) {
	      buggy = true;
	    }
	    return function setPrototypeOf(O, proto) {
	      check(O, proto);
	      if (buggy) O.__proto__ = proto;else set(O, proto);
	      return O;
	    };
	  }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(4),
	    SHARED = '__core-js_shared__',
	    store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";

	// 7.1.4 ToInteger
	var ceil = Math.ceil,
	    floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(41),
	    min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';

	var id = 0,
	    px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var classof = __webpack_require__(32),
	    ITERATOR = __webpack_require__(2)('iterator'),
	    Iterators = __webpack_require__(10);
	module.exports = __webpack_require__(3).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(82);
	var Iterators = __webpack_require__(10);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stringify = __webpack_require__(27);

	var _stringify2 = _interopRequireDefault(_stringify);

	exports.transport = transport;

	var _isomorphicFetch = __webpack_require__(88);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * [transport creates call to server with isomorphic-fetch]
	 * @param  {[String]} path        [url to hit with request]
	 * @param  {[Object]} query       [The GraphQL query/mutation]
	 * @param  {[Object]} queryParams = {} [Params to pass into query]
	 * @return {[Promise]}            [Promise containing payload]
	 */

	function transport(path, query) {
	  var queryParams = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	  return (0, _isomorphicFetch2.default)(path, {
	    method: 'POST',
	    headers: {
	      'Accept': 'application/json',
	      'content-type': 'application/json'
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(54), __esModule: true };

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(56), __esModule: true };

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(60), __esModule: true };

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module, process) {"use strict";

	var _promise = __webpack_require__(16);

	var _promise2 = _interopRequireDefault(_promise);

	var _setPrototypeOf = __webpack_require__(28);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(48);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(5);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _iterator = __webpack_require__(50);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(29);

	var _symbol2 = _interopRequireDefault(_symbol);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!function (global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol = typeof _symbol2.default === "function" && _iterator2.default || "@@iterator";

	  var inModule = ( false ? "undefined" : (0, _typeof3.default)(module)) === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = (0, _create2.default)((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      prototype[method] = function (arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function (genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction ||
	    // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	  };

	  runtime.mark = function (genFun) {
	    if (_setPrototypeOf2.default) {
	      (0, _setPrototypeOf2.default)(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	    }
	    genFun.prototype = (0, _create2.default)(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function (arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    // This invoke function is written in a style that assumes some
	    // calling function (or Promise) will handle exceptions.
	    function invoke(method, arg) {
	      var result = generator[method](arg);
	      var value = result.value;
	      return value instanceof AwaitArgument ? _promise2.default.resolve(value.arg).then(invokeNext, invokeThrow) : _promise2.default.resolve(value).then(function (unwrapped) {
	        // When a yielded Promise is resolved, its final value becomes
	        // the .value of the Promise<{value,done}> result for the
	        // current iteration. If the Promise is rejected, however, the
	        // result for this iteration will be rejected with the same
	        // reason. Note that rejections of yielded Promises are not
	        // thrown back into the generator function, as is the case
	        // when an awaited Promise is rejected. This difference in
	        // behavior between yield and await is important, because it
	        // allows the consumer to decide what to do with the yielded
	        // rejection (swallow it and continue, manually .throw it back
	        // into the generator, abandon iteration, whatever). With
	        // await, by contrast, there is no opportunity to examine the
	        // rejection reason outside the generator function, so the
	        // only option is to throw it from the await expression, and
	        // let the generator function handle the exception.
	        result.value = unwrapped;
	        return result;
	      });
	    }

	    if ((typeof process === "undefined" ? "undefined" : (0, _typeof3.default)(process)) === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var invokeNext = invoke.bind(generator, "next");
	    var invokeThrow = invoke.bind(generator, "throw");
	    var invokeReturn = invoke.bind(generator, "return");
	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return invoke(method, arg);
	      }

	      return previousPromise =
	      // If enqueue has been called before, then we want to wait until
	      // all previous Promises have been resolved before calling invoke,
	      // so that results are always delivered in the correct order. If
	      // enqueue has not been called before, then it is important to
	      // call invoke immediately, without waiting on a callback to fire,
	      // so that the async generator function has the opportunity to do
	      // any necessary setup in a predictable way. This predictability
	      // is why the Promise constructor synchronously invokes its
	      // executor callback, and why async functions synchronously
	      // execute code before the first await. Since we implement simple
	      // async functions in terms of async generators, it is especially
	      // important to get this right, even though it requires care.
	      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
	      // Avoid propagating failures to Promises returned by later
	      // invocations of the iterator.
	      callInvokeWithMethodAndArg) : new _promise2.default(function (resolve) {
	        resolve(callInvokeWithMethodAndArg());
	      });
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

	    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	    : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          context._sent = arg;

	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function () {
	    return this;
	  };

	  Gp.toString = function () {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function (object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1,
	            next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function reset(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function stop() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function complete(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" || record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	}(
	// Among the various tricks for obtaining a reference to the global
	// object, this seems to be the most reliable technique that does not
	// use indirect eval (which violates Content Security Policy).
	(typeof global === "undefined" ? "undefined" : (0, _typeof3.default)(global)) === "object" ? global : (typeof window === "undefined" ? "undefined" : (0, _typeof3.default)(window)) === "object" ? window : (typeof self === "undefined" ? "undefined" : (0, _typeof3.default)(self)) === "object" ? self : undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(90)(module), __webpack_require__(89)))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(25);
	__webpack_require__(81);
	module.exports = __webpack_require__(3).Array.from;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _stringify = __webpack_require__(27);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var core = __webpack_require__(3);
	module.exports = function stringify(it) {
	  // eslint-disable-line no-unused-vars
	  return (core.JSON && core.JSON.stringify || _stringify2.default).apply(JSON, arguments);
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(1);
	module.exports = function create(P, D) {
	  return $.create(P, D);
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(1);
	__webpack_require__(83);
	module.exports = function getOwnPropertyNames(it) {
	  return $.getNames(it);
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(84);
	module.exports = __webpack_require__(3).Object.is;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(85);
	module.exports = __webpack_require__(3).Object.setPrototypeOf;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(45);
	__webpack_require__(25);
	__webpack_require__(46);
	__webpack_require__(86);
	module.exports = __webpack_require__(3).Promise;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(87);
	__webpack_require__(45);
	module.exports = __webpack_require__(3).Symbol;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(25);
	__webpack_require__(46);
	module.exports = __webpack_require__(2)('iterator');

/***/ },
/* 61 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function () {/* empty */};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(12),
	    document = __webpack_require__(4).document
	// in old IE typeof document.createElement is 'object'
	,
	    is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(1);
	module.exports = function (it) {
	  var keys = $.getKeys(it),
	      getSymbols = $.getSymbols;
	  if (getSymbols) {
	    var symbols = getSymbols(it),
	        isEnum = $.isEnum,
	        i = 0,
	        key;
	    while (symbols.length > i) {
	      if (isEnum.call(it, key = symbols[i++])) keys.push(key);
	    }
	  }
	  return keys;
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ctx = __webpack_require__(8),
	    call = __webpack_require__(35),
	    isArrayIter = __webpack_require__(34),
	    anObject = __webpack_require__(7),
	    toLength = __webpack_require__(42),
	    getIterFn = __webpack_require__(44);
	module.exports = function (iterable, entries, fn, that) {
	  var iterFn = getIterFn(iterable),
	      f = ctx(fn, that, entries ? 2 : 1),
	      index = 0,
	      length,
	      step,
	      iterator;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(4).document && document.documentElement;

/***/ },
/* 66 */
/***/ function(module, exports) {

	"use strict";

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	                  var un = that === undefined;
	                  switch (args.length) {
	                                    case 0:
	                                                      return un ? fn() : fn.call(that);
	                                    case 1:
	                                                      return un ? fn(args[0]) : fn.call(that, args[0]);
	                                    case 2:
	                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
	                                    case 3:
	                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
	                                    case 4:
	                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
	                  }return fn.apply(that, args);
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(9);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(9);
	module.exports = Array.isArray || function (arg) {
	  return cof(arg) == 'Array';
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(1),
	    descriptor = __webpack_require__(23),
	    setToStringTag = __webpack_require__(13),
	    IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(21)(IteratorPrototype, __webpack_require__(2)('iterator'), function () {
	  return this;
	});

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = $.create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(1),
	    toIObject = __webpack_require__(14);
	module.exports = function (object, el) {
	  var O = toIObject(object),
	      keys = $.getKeys(O),
	      length = keys.length,
	      index = 0,
	      key;
	  while (length > index) {
	    if (O[key = keys[index++]] === el) return key;
	  }
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var global = __webpack_require__(4),
	    macrotask = __webpack_require__(79).set,
	    Observer = global.MutationObserver || global.WebKitMutationObserver,
	    process = global.process,
	    Promise = global.Promise,
	    isNode = __webpack_require__(9)(process) == 'process',
	    head,
	    last,
	    notify;

	var flush = function flush() {
	  var parent, domain, fn;
	  if (isNode && (parent = process.domain)) {
	    process.domain = null;
	    parent.exit();
	  }
	  while (head) {
	    domain = head.domain;
	    fn = head.fn;
	    if (domain) domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if (domain) domain.exit();
	    head = head.next;
	  }last = undefined;
	  if (parent) parent.enter();
	};

	// Node.js
	if (isNode) {
	  notify = function notify() {
	    process.nextTick(flush);
	  };
	  // browsers with MutationObserver
	} else if (Observer) {
	    var toggle = 1,
	        node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function notify() {
	      node.data = toggle = -toggle;
	    };
	    // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	      notify = function notify() {
	        Promise.resolve().then(flush);
	      };
	      // for other environments - macrotask based on:
	      // - setImmediate
	      // - MessageChannel
	      // - window.postMessag
	      // - onreadystatechange
	      // - setTimeout
	    } else {
	        notify = function notify() {
	          // strange IE + webpack dev server bug - use .call(global)
	          macrotask.call(global, flush);
	        };
	      }

	module.exports = function asap(fn) {
	  var task = { fn: fn, next: undefined, domain: isNode && process.domain };
	  if (last) last.next = task;
	  if (!head) {
	    head = task;
	    notify();
	  }last = task;
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(6),
	    core = __webpack_require__(3),
	    fails = __webpack_require__(19);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY],
	      exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () {
	    fn(1);
	  }), 'Object', exp);
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var redefine = __webpack_require__(24);
	module.exports = function (target, src) {
	  for (var key in src) {
	    redefine(target, key, src[key]);
	  }return target;
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(3),
	    $ = __webpack_require__(1),
	    DESCRIPTORS = __webpack_require__(11),
	    SPECIES = __webpack_require__(2)('species');

	module.exports = function (KEY) {
	  var C = core[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) $.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function get() {
	      return this;
	    }
	  });
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(7),
	    aFunction = __webpack_require__(17),
	    SPECIES = __webpack_require__(2)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor,
	      S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (it, Constructor, name) {
	  if (!(it instanceof Constructor)) throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toInteger = __webpack_require__(41),
	    defined = __webpack_require__(18);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that)),
	        i = toInteger(pos),
	        l = s.length,
	        a,
	        b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ctx = __webpack_require__(8),
	    invoke = __webpack_require__(66),
	    html = __webpack_require__(65),
	    cel = __webpack_require__(62),
	    global = __webpack_require__(4),
	    process = global.process,
	    setTask = global.setImmediate,
	    clearTask = global.clearImmediate,
	    MessageChannel = global.MessageChannel,
	    counter = 0,
	    queue = {},
	    ONREADYSTATECHANGE = 'onreadystatechange',
	    defer,
	    channel,
	    port;
	var run = function run() {
	  var id = +this;
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function listner(event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [],
	        i = 1;
	    while (arguments.length > i) {
	      args.push(arguments[i++]);
	    }queue[++counter] = function () {
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(9)(process) == 'process') {
	    defer = function defer(id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	    // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	      channel = new MessageChannel();
	      port = channel.port2;
	      channel.port1.onmessage = listner;
	      defer = ctx(port.postMessage, port, 1);
	      // Browsers with postMessage, skip WebWorkers
	      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	    } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	        defer = function defer(id) {
	          global.postMessage(id + '', '*');
	        };
	        global.addEventListener('message', listner, false);
	        // IE8-
	      } else if (ONREADYSTATECHANGE in cel('script')) {
	          defer = function defer(id) {
	            html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	              html.removeChild(this);
	              run.call(id);
	            };
	          };
	          // Rest old browsers
	        } else {
	            defer = function defer(id) {
	              setTimeout(ctx(run, id, 1), 0);
	            };
	          }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(18);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _from = __webpack_require__(26);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ctx = __webpack_require__(8),
	    $export = __webpack_require__(6),
	    toObject = __webpack_require__(80),
	    call = __webpack_require__(35),
	    isArrayIter = __webpack_require__(34),
	    toLength = __webpack_require__(42),
	    getIterFn = __webpack_require__(44);
	$export($export.S + $export.F * !__webpack_require__(37)(function (iter) {
	  (0, _from2.default)(iter);
	}), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /*, mapfn = undefined, thisArg = undefined*/) {
	    var O = toObject(arrayLike),
	        C = typeof this == 'function' ? this : Array,
	        $$ = arguments,
	        $$len = $$.length,
	        mapfn = $$len > 1 ? $$[1] : undefined,
	        mapping = mapfn !== undefined,
	        index = 0,
	        iterFn = getIterFn(O),
	        length,
	        result,
	        step,
	        iterator;
	    if (mapping) mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var addToUnscopables = __webpack_require__(61),
	    step = __webpack_require__(70),
	    Iterators = __webpack_require__(10),
	    toIObject = __webpack_require__(14);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(36)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0; // next index
	  this._k = kind; // kind
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      kind = this._k,
	      index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(73)('getOwnPropertyNames', function () {
	  return __webpack_require__(33).get;
	});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(6);
	$export($export.S, 'Object', { is: __webpack_require__(38) });

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(6);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(39).set });

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(1),
	    LIBRARY = __webpack_require__(22),
	    global = __webpack_require__(4),
	    ctx = __webpack_require__(8),
	    classof = __webpack_require__(32),
	    $export = __webpack_require__(6),
	    isObject = __webpack_require__(12),
	    anObject = __webpack_require__(7),
	    aFunction = __webpack_require__(17),
	    strictNew = __webpack_require__(77),
	    forOf = __webpack_require__(64),
	    setProto = __webpack_require__(39).set,
	    same = __webpack_require__(38),
	    SPECIES = __webpack_require__(2)('species'),
	    speciesConstructor = __webpack_require__(76),
	    asap = __webpack_require__(72),
	    PROMISE = 'Promise',
	    process = global.process,
	    isNode = classof(process) == 'process',
	    P = global[PROMISE],
	    Wrapper;

	var testResolve = function testResolve(sub) {
	  var test = new P(function () {});
	  if (sub) test.constructor = Object;
	  return P.resolve(test) === test;
	};

	var USE_NATIVE = function () {
	  var works = false;
	  function P2(x) {
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, { constructor: { value: P2 } });
	    // actual Firefox has broken subclass support, test that
	    if (!(P2.resolve(5).then(function () {}) instanceof P2)) {
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if (works && __webpack_require__(11)) {
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function get() {
	          thenableThenGotten = true;
	        }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch (e) {
	    works = false;
	  }
	  return works;
	}();

	// helpers
	var sameConstructor = function sameConstructor(a, b) {
	  // library wrapper special case
	  if (LIBRARY && a === P && b === Wrapper) return true;
	  return same(a, b);
	};
	var getConstructor = function getConstructor(C) {
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function isThenable(it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function PromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve), this.reject = aFunction(reject);
	};
	var perform = function perform(exec) {
	  try {
	    exec();
	  } catch (e) {
	    return { error: e };
	  }
	};
	var notify = function notify(record, isReject) {
	  if (record.n) return;
	  record.n = true;
	  var chain = record.c;
	  asap(function () {
	    var value = record.v,
	        ok = record.s == 1,
	        i = 0;
	    var run = function run(reaction) {
	      var handler = ok ? reaction.ok : reaction.fail,
	          resolve = reaction.resolve,
	          reject = reaction.reject,
	          result,
	          then;
	      try {
	        if (handler) {
	          if (!ok) record.h = true;
	          result = handler === true ? value : handler(value);
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        reject(e);
	      }
	    };
	    while (chain.length > i) {
	      run(chain[i++]);
	    } // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if (isReject) setTimeout(function () {
	      var promise = record.p,
	          handler,
	          console;
	      if (isUnhandled(promise)) {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      }record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function isUnhandled(promise) {
	  var record = promise._d,
	      chain = record.a || record.c,
	      i = 0,
	      reaction;
	  if (record.h) return false;
	  while (chain.length > i) {
	    reaction = chain[i++];
	    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
	  }return true;
	};
	var $reject = function $reject(value) {
	  var record = this;
	  if (record.d) return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function $resolve(value) {
	  var record = this,
	      then;
	  if (record.d) return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if (record.p === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      asap(function () {
	        var wrapper = { r: record, d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch (e) {
	    $reject.call({ r: record, d: false }, e); // wrap
	  }
	};

	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor) {
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE), // <- promise
	      c: [], // <- awaiting reactions
	      a: undefined, // <- checked in isUnhandled reactions
	      s: 0, // <- state
	      d: false, // <- done
	      v: undefined, // <- value
	      h: false, // <- handled rejection
	      n: false // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch (err) {
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(74)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = new PromiseCapability(speciesConstructor(this, P)),
	          promise = reaction.promise,
	          record = this._d;
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if (record.a) record.a.push(reaction);
	      if (record.s) notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function _catch(onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: P });
	__webpack_require__(13)(P, PROMISE);
	__webpack_require__(75)(PROMISE);
	Wrapper = __webpack_require__(3)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = new PromiseCapability(this),
	        $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if (x instanceof P && sameConstructor(x.constructor, this)) return x;
	    var capability = new PromiseCapability(this),
	        $$resolve = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(37)(function (iter) {
	  P.all(iter)['catch'](function () {});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = getConstructor(this),
	        capability = new PromiseCapability(C),
	        resolve = capability.resolve,
	        reject = capability.reject,
	        values = [];
	    var abrupt = perform(function () {
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length,
	          results = Array(remaining);
	      if (remaining) $.each.call(values, function (promise, index) {
	        var alreadyCalled = false;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });else resolve(results);
	    });
	    if (abrupt) reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = getConstructor(this),
	        capability = new PromiseCapability(C),
	        reject = capability.reject;
	    var abrupt = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (abrupt) reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim

	var _typeof2 = __webpack_require__(5);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var $ = __webpack_require__(1),
	    global = __webpack_require__(4),
	    has = __webpack_require__(20),
	    DESCRIPTORS = __webpack_require__(11),
	    $export = __webpack_require__(6),
	    redefine = __webpack_require__(24),
	    $fails = __webpack_require__(19),
	    shared = __webpack_require__(40),
	    setToStringTag = __webpack_require__(13),
	    uid = __webpack_require__(43),
	    wks = __webpack_require__(2),
	    keyOf = __webpack_require__(71),
	    $names = __webpack_require__(33),
	    enumKeys = __webpack_require__(63),
	    isArray = __webpack_require__(68),
	    anObject = __webpack_require__(7),
	    toIObject = __webpack_require__(14),
	    createDesc = __webpack_require__(23),
	    getDesc = $.getDesc,
	    setDesc = $.setDesc,
	    _create = $.create,
	    getNames = $names.get,
	    $Symbol = global.Symbol,
	    $JSON = global.JSON,
	    _stringify = $JSON && $JSON.stringify,
	    setter = false,
	    HIDDEN = wks('_hidden'),
	    isEnum = $.isEnum,
	    SymbolRegistry = shared('symbol-registry'),
	    AllSymbols = shared('symbols'),
	    useNative = typeof $Symbol == 'function',
	    ObjectProto = Object.prototype;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(setDesc({}, 'a', {
	    get: function get() {
	      return setDesc(this, 'a', { value: 7 }).a;
	    }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = getDesc(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  setDesc(it, key, D);
	  if (protoDesc && it !== ObjectProto) setDesc(ObjectProto, key, protoDesc);
	} : setDesc;

	var wrap = function wrap(tag) {
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function set(value) {
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = function isSymbol(it) {
	  return (typeof it === 'undefined' ? 'undefined' : (0, _typeof3.default)(it)) == 'symbol';
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (D && has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    }return setSymbolDesc(it, key, D);
	  }return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P)),
	      i = 0,
	      l = keys.length,
	      key;
	  while (l > i) {
	    $defineProperty(it, key = keys[i++], P[key]);
	  }return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  var D = getDesc(it = toIObject(it), key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = getNames(toIObject(it)),
	      result = [],
	      i = 0,
	      key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN) result.push(key);
	  }return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var names = getNames(toIObject(it)),
	      result = [],
	      i = 0,
	      key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++])) result.push(AllSymbols[key]);
	  }return result;
	};
	var $stringify = function stringify(it) {
	  if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	  var args = [it],
	      i = 1,
	      $$ = arguments,
	      replacer,
	      $replacer;
	  while ($$.length > i) {
	    args.push($$[i++]);
	  }replacer = args[1];
	  if (typeof replacer == 'function') $replacer = replacer;
	  if ($replacer || !isArray(replacer)) replacer = function replacer(key, value) {
	    if ($replacer) value = $replacer.call(this, key, value);
	    if (!isSymbol(value)) return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if (!useNative) {
	  $Symbol = function _Symbol() {
	    if (isSymbol(this)) throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString() {
	    return this._k;
	  });

	  isSymbol = function isSymbol(it) {
	    return it instanceof $Symbol;
	  };

	  $.create = $create;
	  $.isEnum = $propertyIsEnumerable;
	  $.getDesc = $getOwnPropertyDescriptor;
	  $.setDesc = $defineProperty;
	  $.setDescs = $defineProperties;
	  $.getNames = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;

	  if (DESCRIPTORS && !__webpack_require__(22)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function _for(key) {
	    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key) {
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function useSetter() {
	    setter = true;
	  },
	  useSimple: function useSimple() {
	    setter = false;
	  }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call(('hasInstance,isConcatSpreadable,iterator,match,replace,search,' + 'species,split,toPrimitive,toStringTag,unscopables').split(','), function (it) {
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});

	setter = true;

	$export($export.G + $export.W, { Symbol: $Symbol });

	$export($export.S, 'Symbol', symbolStatics);

	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', { stringify: $stringify });

	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// the whatwg-fetch polyfill installs the fetch() function
	// on the global object (window or self)
	//
	// Return that as the export for use in Webpack, Browserify etc.
	__webpack_require__(91);
	module.exports = self.fetch.bind(self);

/***/ },
/* 89 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 90 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _promise = __webpack_require__(16);

	var _promise2 = _interopRequireDefault(_promise);

	var _getOwnPropertyNames = __webpack_require__(15);

	var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function (self) {
	  'use strict';

	  if (self.fetch) {
	    return;
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name);
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name');
	    }
	    return name.toLowerCase();
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value);
	    }
	    return value;
	  }

	  function Headers(headers) {
	    this.map = {};

	    if (headers instanceof Headers) {
	      headers.forEach(function (value, name) {
	        this.append(name, value);
	      }, this);
	    } else if (headers) {
	      (0, _getOwnPropertyNames2.default)(headers).forEach(function (name) {
	        this.append(name, headers[name]);
	      }, this);
	    }
	  }

	  Headers.prototype.append = function (name, value) {
	    name = normalizeName(name);
	    value = normalizeValue(value);
	    var list = this.map[name];
	    if (!list) {
	      list = [];
	      this.map[name] = list;
	    }
	    list.push(value);
	  };

	  Headers.prototype['delete'] = function (name) {
	    delete this.map[normalizeName(name)];
	  };

	  Headers.prototype.get = function (name) {
	    var values = this.map[normalizeName(name)];
	    return values ? values[0] : null;
	  };

	  Headers.prototype.getAll = function (name) {
	    return this.map[normalizeName(name)] || [];
	  };

	  Headers.prototype.has = function (name) {
	    return this.map.hasOwnProperty(normalizeName(name));
	  };

	  Headers.prototype.set = function (name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)];
	  };

	  Headers.prototype.forEach = function (callback, thisArg) {
	    (0, _getOwnPropertyNames2.default)(this.map).forEach(function (name) {
	      this.map[name].forEach(function (value) {
	        callback.call(thisArg, value, name, this);
	      }, this);
	    }, this);
	  };

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return _promise2.default.reject(new TypeError('Already read'));
	    }
	    body.bodyUsed = true;
	  }

	  function fileReaderReady(reader) {
	    return new _promise2.default(function (resolve, reject) {
	      reader.onload = function () {
	        resolve(reader.result);
	      };
	      reader.onerror = function () {
	        reject(reader.error);
	      };
	    });
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader();
	    reader.readAsArrayBuffer(blob);
	    return fileReaderReady(reader);
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader();
	    reader.readAsText(blob);
	    return fileReaderReady(reader);
	  }

	  var support = {
	    blob: 'FileReader' in self && 'Blob' in self && function () {
	      try {
	        new Blob();
	        return true;
	      } catch (e) {
	        return false;
	      }
	    }(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  };

	  function Body() {
	    this.bodyUsed = false;

	    this._initBody = function (body) {
	      this._bodyInit = body;
	      if (typeof body === 'string') {
	        this._bodyText = body;
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body;
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body;
	      } else if (!body) {
	        this._bodyText = '';
	      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	        // Only support ArrayBuffers for POST method.
	        // Receiving ArrayBuffers happens via Blobs, instead.
	      } else {
	          throw new Error('unsupported BodyInit type');
	        }

	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8');
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type);
	        }
	      }
	    };

	    if (support.blob) {
	      this.blob = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }

	        if (this._bodyBlob) {
	          return _promise2.default.resolve(this._bodyBlob);
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob');
	        } else {
	          return _promise2.default.resolve(new Blob([this._bodyText]));
	        }
	      };

	      this.arrayBuffer = function () {
	        return this.blob().then(readBlobAsArrayBuffer);
	      };

	      this.text = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }

	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob);
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text');
	        } else {
	          return _promise2.default.resolve(this._bodyText);
	        }
	      };
	    } else {
	      this.text = function () {
	        var rejected = consumed(this);
	        return rejected ? rejected : _promise2.default.resolve(this._bodyText);
	      };
	    }

	    if (support.formData) {
	      this.formData = function () {
	        return this.text().then(decode);
	      };
	    }

	    this.json = function () {
	      return this.text().then(JSON.parse);
	    };

	    return this;
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase();
	    return methods.indexOf(upcased) > -1 ? upcased : method;
	  }

	  function Request(input, options) {
	    options = options || {};
	    var body = options.body;
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read');
	      }
	      this.url = input.url;
	      this.credentials = input.credentials;
	      if (!options.headers) {
	        this.headers = new Headers(input.headers);
	      }
	      this.method = input.method;
	      this.mode = input.mode;
	      if (!body) {
	        body = input._bodyInit;
	        input.bodyUsed = true;
	      }
	    } else {
	      this.url = input;
	    }

	    this.credentials = options.credentials || this.credentials || 'omit';
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers);
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET');
	    this.mode = options.mode || this.mode || null;
	    this.referrer = null;

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests');
	    }
	    this._initBody(body);
	  }

	  Request.prototype.clone = function () {
	    return new Request(this);
	  };

	  function decode(body) {
	    var form = new FormData();
	    body.trim().split('&').forEach(function (bytes) {
	      if (bytes) {
	        var split = bytes.split('=');
	        var name = split.shift().replace(/\+/g, ' ');
	        var value = split.join('=').replace(/\+/g, ' ');
	        form.append(decodeURIComponent(name), decodeURIComponent(value));
	      }
	    });
	    return form;
	  }

	  function headers(xhr) {
	    var head = new Headers();
	    var pairs = xhr.getAllResponseHeaders().trim().split('\n');
	    pairs.forEach(function (header) {
	      var split = header.trim().split(':');
	      var key = split.shift().trim();
	      var value = split.join(':').trim();
	      head.append(key, value);
	    });
	    return head;
	  }

	  Body.call(Request.prototype);

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {};
	    }

	    this.type = 'default';
	    this.status = options.status;
	    this.ok = this.status >= 200 && this.status < 300;
	    this.statusText = options.statusText;
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
	    this.url = options.url || '';
	    this._initBody(bodyInit);
	  }

	  Body.call(Response.prototype);

	  Response.prototype.clone = function () {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    });
	  };

	  Response.error = function () {
	    var response = new Response(null, { status: 0, statusText: '' });
	    response.type = 'error';
	    return response;
	  };

	  var redirectStatuses = [301, 302, 303, 307, 308];

	  Response.redirect = function (url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code');
	    }

	    return new Response(null, { status: status, headers: { location: url } });
	  };

	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;

	  self.fetch = function (input, init) {
	    return new _promise2.default(function (resolve, reject) {
	      var request;
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input;
	      } else {
	        request = new Request(input, init);
	      }

	      var xhr = new XMLHttpRequest();

	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL;
	        }

	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL');
	        }

	        return;
	      }

	      xhr.onload = function () {
	        var status = xhr.status === 1223 ? 204 : xhr.status;
	        if (status < 100 || status > 599) {
	          reject(new TypeError('Network request failed'));
	          return;
	        }
	        var options = {
	          status: status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        };
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options));
	      };

	      xhr.onerror = function () {
	        reject(new TypeError('Network request failed'));
	      };

	      xhr.open(request.method, request.url, true);

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true;
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob';
	      }

	      request.headers.forEach(function (value, name) {
	        xhr.setRequestHeader(name, value);
	      });

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
	    });
	  };
	  self.fetch.polyfill = true;
	})(typeof self !== 'undefined' ? self : undefined);

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.reachGraphQL = undefined;

	var _regenerator = __webpack_require__(31);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(30);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	/**
	 * [reachGraphQL Makes queres or mutations against GraphQL]
	 * @param  {[String]} path        [path to the GraphQL server]
	 * @param  {[Object]} query       [The query that GraphQL will use to fetch your data]
	 * @param  {[object]} queryParams =  {} [Should contain object with different query params]
	 * @return {[Object]}             [Data that was queried or mutated]
	 */

	var reachGraphQL = exports.reachGraphQL = function () {
	    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(path, query) {
	        var queryParams = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	        return _regenerator2.default.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        _context.prev = 0;
	                        _context.next = 3;
	                        return (0, _transport.transport)(path, query, queryParams);

	                    case 3:
	                        return _context.abrupt('return', _context.sent);

	                    case 6:
	                        _context.prev = 6;
	                        _context.t0 = _context['catch'](0);

	                        console.log(_context.t0);

	                    case 9:
	                    case 'end':
	                        return _context.stop();
	                }
	            }
	        }, _callee, this, [[0, 6]]);
	    }));
	    return function reachGraphQL(_x, _x2, _x3) {
	        return ref.apply(this, arguments);
	    };
	}();

	var _transport = __webpack_require__(47);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reachWithDispatch = undefined;

	var _typeof2 = __webpack_require__(5);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _regenerator = __webpack_require__(31);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _asyncToGenerator2 = __webpack_require__(30);

	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

	/**
	 * [reachWithDispatch description]
	 * @param  {[String]} path        [path to the GraphQL server]
	 * @param  {[Object]} query       [The query that GraphQL will use to fetch your data]
	 * @param  {[object]} queryParams =  {} [should contain object with different query params]
	 * @param  {[type]} actionCreator =  (  [The actionCreator to dispatch]
	 * @return {[function]}               [dispatch to store]
	 */

	var reachWithDispatch = exports.reachWithDispatch = function () {
	  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(path, query) {
	    var _this = this;

	    var queryParams = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	    var actionCreator = arguments[3];

	    var _ret;

	    return _regenerator2.default.wrap(function _callee2$(_context2) {
	      while (1) {
	        switch (_context2.prev = _context2.next) {
	          case 0:
	            _context2.prev = 0;
	            return _context2.delegateYield(_regenerator2.default.mark(function _callee() {
	              var response;
	              return _regenerator2.default.wrap(function _callee$(_context) {
	                while (1) {
	                  switch (_context.prev = _context.next) {
	                    case 0:
	                      _context.next = 2;
	                      return (0, _transport.transport)(path, query, queryParams);

	                    case 2:
	                      response = _context.sent;
	                      return _context.abrupt('return', {
	                        v: function v(dispatch) {
	                          return dispatch(actionCreator(response));
	                        }
	                      });

	                    case 4:
	                    case 'end':
	                      return _context.stop();
	                  }
	                }
	              }, _callee, _this);
	            })(), 't0', 2);

	          case 2:
	            _ret = _context2.t0;

	            if (!((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object")) {
	              _context2.next = 5;
	              break;
	            }

	            return _context2.abrupt('return', _ret.v);

	          case 5:
	            _context2.next = 10;
	            break;

	          case 7:
	            _context2.prev = 7;
	            _context2.t1 = _context2['catch'](0);

	            console.log(_context2.t1);

	          case 10:
	          case 'end':
	            return _context2.stop();
	        }
	      }
	    }, _callee2, this, [[0, 7]]);
	  }));
	  return function reachWithDispatch(_x, _x2, _x3, _x4) {
	    return ref.apply(this, arguments);
	  };
	}();

	var _transport = __webpack_require__(47);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }
/******/ ])
});
;