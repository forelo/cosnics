(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cosnics-rubric"] = factory(require("vue"));
	else
		root["cosnics-rubric"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "cc54");
/******/ })
/************************************************************************/
/******/ ({

/***/ "000a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0e29");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "0051":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("7abc").IteratorPrototype;
var create = __webpack_require__("2c24");
var createPropertyDescriptor = __webpack_require__("62ca");
var setToStringTag = __webpack_require__("5c65");
var Iterators = __webpack_require__("0279");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "0209":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("70b9");
var definePropertyModule = __webpack_require__("e6a8");
var createPropertyDescriptor = __webpack_require__("62ca");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "0279":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "02c0":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("7104");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "0379":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("8702");
var redefine = __webpack_require__("6a8a");
var toString = __webpack_require__("4a04");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "04be":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0e29");
var settle = __webpack_require__("aff3");
var buildURL = __webpack_require__("18c2");
var buildFullPath = __webpack_require__("43e9");
var parseHeaders = __webpack_require__("f072");
var isURLSameOrigin = __webpack_require__("b0a1");
var createError = __webpack_require__("9b46");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__("15f8");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "05dc":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("70b9");
var propertyIsEnumerableModule = __webpack_require__("0ffc");
var createPropertyDescriptor = __webpack_require__("62ca");
var toIndexedObject = __webpack_require__("2060");
var toPrimitive = __webpack_require__("370b");
var has = __webpack_require__("e414");
var IE8_DOM_DEFINE = __webpack_require__("4bec");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "05e6":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("2afe");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "073e":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("4a1c");
var toObject = __webpack_require__("64f1");
var nativeKeys = __webpack_require__("ce57");
var fails = __webpack_require__("7104");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "0876":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("731d");
var global = __webpack_require__("b5f1");
var isObject = __webpack_require__("2f69");
var createNonEnumerableProperty = __webpack_require__("0209");
var objectHas = __webpack_require__("e414");
var sharedKey = __webpack_require__("691f");
var hiddenKeys = __webpack_require__("4427");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "091c":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("4736");
var Iterators = __webpack_require__("0279");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "0949":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("b5f1");

module.exports = global;


/***/ }),

/***/ "0e29":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("c097");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "0e60":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("f914");
var definePropertyModule = __webpack_require__("e6a8");
var wellKnownSymbol = __webpack_require__("4736");
var DESCRIPTORS = __webpack_require__("70b9");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "0ffa":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("2060");
var nativeGetOwnPropertyNames = __webpack_require__("9161").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "0ffc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "1135":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricBuilderFull_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6bb2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricBuilderFull_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricBuilderFull_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricBuilderFull_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1161":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("7104");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "15f8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0e29");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "164f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0e29");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "17bb":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("f914");
var getOwnPropertyNamesModule = __webpack_require__("9161");
var getOwnPropertySymbolsModule = __webpack_require__("5dc3");
var anObject = __webpack_require__("6161");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "18c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0e29");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "1a6b":
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
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
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
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

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
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
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
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
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
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

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
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

  runtime.keys = function(object) {
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
        var i = -1, next = function next() {
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

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
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

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
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

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "1b63":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("e414");
var toObject = __webpack_require__("64f1");
var sharedKey = __webpack_require__("691f");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("efa9");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "1c0f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricResult_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ca6d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricResult_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricResult_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricResult_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1ce3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("4a1c");
var toAbsoluteIndex = __webpack_require__("dd93");
var toInteger = __webpack_require__("4ff6");
var toLength = __webpack_require__("7cf1");
var toObject = __webpack_require__("64f1");
var arraySpeciesCreate = __webpack_require__("62c9");
var createProperty = __webpack_require__("c46f");
var arrayMethodHasSpeciesSupport = __webpack_require__("7aeb");
var arrayMethodUsesToLength = __webpack_require__("3bd5");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "1d07":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("f914");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1e4c":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("8af9");
var Iterators = __webpack_require__("0279");
var wellKnownSymbol = __webpack_require__("4736");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "2060":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("2be1");
var requireObjectCoercible = __webpack_require__("b2c6");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "21be":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("6a8a");
var anObject = __webpack_require__("6161");
var fails = __webpack_require__("7104");
var flags = __webpack_require__("89bd");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "236c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("4a1c");
var fails = __webpack_require__("7104");
var isArray = __webpack_require__("8d52");
var isObject = __webpack_require__("2f69");
var toObject = __webpack_require__("64f1");
var toLength = __webpack_require__("7cf1");
var createProperty = __webpack_require__("c46f");
var arraySpeciesCreate = __webpack_require__("62c9");
var arrayMethodHasSpeciesSupport = __webpack_require__("7aeb");
var wellKnownSymbol = __webpack_require__("4736");
var V8_VERSION = __webpack_require__("39e8");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "250b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("70b9");
var global = __webpack_require__("b5f1");
var isForced = __webpack_require__("02c0");
var redefine = __webpack_require__("6a8a");
var has = __webpack_require__("e414");
var classof = __webpack_require__("3ab7");
var inheritIfRequired = __webpack_require__("2ab9");
var toPrimitive = __webpack_require__("370b");
var fails = __webpack_require__("7104");
var create = __webpack_require__("2c24");
var getOwnPropertyNames = __webpack_require__("9161").f;
var getOwnPropertyDescriptor = __webpack_require__("05dc").f;
var defineProperty = __webpack_require__("e6a8").f;
var trim = __webpack_require__("7c64").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "2690":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("d0d3").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "2752":
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__("4427");
var isObject = __webpack_require__("2f69");
var has = __webpack_require__("e414");
var defineProperty = __webpack_require__("e6a8").f;
var uid = __webpack_require__("5be7");
var FREEZING = __webpack_require__("d4e2");

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "287c":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("4a1c");
var setPrototypeOf = __webpack_require__("a8a2");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),

/***/ "289f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiDrag", function() { return MultiDragPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sortable", function() { return Sortable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swap", function() { return SwapPlugin; });
/**!
 * Sortable 1.10.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var version = "1.10.2";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !!
    /*@__PURE__*/
    navigator.userAgent.match(pattern);
  }
}

var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};

function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}

function matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }

  return null;
}

var R_SPACE = /\s+/g;

function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}

function css(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;

    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function getChild(el, childNum, options) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && children[i] !== Sortable.dragged && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function index(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return getWindowScrollingElement();
}

function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var _throttleTimeout;

function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}

function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}

function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

function setRect(el, rect) {
  css(el, 'position', 'absolute');
  css(el, 'top', rect.top);
  css(el, 'left', rect.left);
  css(el, 'width', rect.width);
  css(el, 'height', rect.height);
}

function unsetRect(el) {
  css(el, 'position', '');
  css(el, 'top', '');
  css(el, 'left', '');
  css(el, 'width', '');
  css(el, 'height', '');
}

var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });

        var fromRect = _objectSpread({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function repaint(target) {
  return target.offsetWidth;
}

function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }

    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;

      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

  var allEventProperties = _objectSpread({}, extraEventProperties, PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, ["evt"]);

  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function _dispatchEvent(info) {
  dispatchEvent(_objectSpread({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}

var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
_silent = false,
    savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
  if (!documentExists) return; // false when <= IE11

  if (IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    _detectDirection = function _detectDirection(el, options) {
  var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  sortables.some(function (sortable) {
    if (lastChild(sortable)) return;
    var rect = getRect(sortable),
        threshold = sortable[expando].options.emptyInsertThreshold,
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (threshold && insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    _prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || _typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    _hideGhostForTarget = function _hideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if (documentExists) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}

var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;

    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[expando]._onDragOver(event);
    }
  }
};

var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  _prepareGroup(options); // Bind all private methods


  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }

  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}

Sortable.prototype =
/** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


    if (dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    }

    target = closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });

        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item


        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }

      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {

    awaitingDragStarted = false;

    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;

      _hideGhostForTarget();

      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      dragEl.parentNode[expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;

        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }

        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }

        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }

      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });

    if (Sortable.eventCanceled) {
      this._onDrop();

      return;
    }

    pluginEvent('setupClone', this);

    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }

      _this._hideClone();

      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on(document, 'drop', _this); // #1276 fix:

      css(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if (_silent) return;

    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }

        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);

      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;

    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;

      if (revert) {
        parentEl = rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = lastChild(el, options.draggable);

      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // assign target only if condition is true


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = getRect(target);
        }

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          el.appendChild(dragEl);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);

          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;

        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          _silent = true;
          setTimeout(_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains(dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);

    if (Sortable.eventCanceled) {
      this._nulling();

      return;
    }

    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);

    _cancelNextTick(this.cloneId);

    _cancelNextTick(this._dragStartId); // Unbind events


    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css(document.body, 'user-select', '');
    }

    css(dragEl, 'transform', '');

    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }

      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }

        _disableDraggable(dragEl);

        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event


            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another


            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }

          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }

          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting


          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);

          _globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }

      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }

      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};

function _globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function _disableDraggable(el) {
  el.draggable = false;
}

function _unsilent() {
  _silent = false;
}

function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }

      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}

function _nextTick(fn) {
  return setTimeout(fn, 0);
}

function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) Sortable.utils = _objectSpread({}, Sortable.utils, plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export


Sortable.version = version;

var autoScrolls = [],
    scrollEl,
    scrollRootEl,
    scrolling = false,
    lastAutoScrollX,
    lastAutoScrollY,
    touchEvt$1,
    pointerElemChangedInterval;

function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }

  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;

      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;

      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }

      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;

      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = getParentAutoScrollElement(elem, true);

        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }

            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }

        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}

function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}

function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}

var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;

    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }

  var layersOut = 0;
  var currentParent = scrollEl;

  do {
    var el = currentParent,
        rect = getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = css(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;

    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }

    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }

    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);

      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

          }

          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }

          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }

    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function Revert() {}

Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};

_extends(Revert, {
  pluginName: 'revertOnSpill'
});

function Remove() {}

Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};

_extends(Remove, {
  pluginName: 'removeOnSpill'
});

var lastSwapEl;

function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }

  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
          target = _ref2.target,
          onMove = _ref2.onMove,
          activeSortable = _ref2.activeSortable,
          changed = _ref2.changed,
          cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
          options = this.options;

      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;

        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }

        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }

      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
          putSortable = _ref3.putSortable,
          dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);

      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}

function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
      p2 = n2.parentNode,
      i1,
      i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);

  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }

  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}

var multiDragElements = [],
    multiDragClones = [],
    lastMultiDragSelect,
    // for selection with modifier key down (SHIFT)
multiDragSortable,
    initialFolding = false,
    // Initial multi-drag fold when drag started
folding = false,
    // Folding any other time
dragStarted = false,
    dragEl$1,
    clonesFromRect,
    clonesHidden;

function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }

    if (sortable.options.supportPointer) {
      on(document, 'pointerup', this._deselectMultiDrag);
    } else {
      on(document, 'mouseup', this._deselectMultiDrag);
      on(document, 'touchend', this._deselectMultiDrag);
    }

    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';

        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }

        dataTransfer.setData('Text', data);
      }
    };
  }

  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
          cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;

      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }

      sortable._hideClone();

      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
          rootEl = _ref3.rootEl,
          dispatchSortableEvent = _ref3.dispatchSortableEvent,
          cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;

      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
          rootEl = _ref4.rootEl,
          cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;

      var sortable = _ref5.sortable,
          cloneNowHidden = _ref5.cloneNowHidden,
          cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', 'none');

        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      var sortable = _ref6.sortable;

      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }

      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      }); // Sort multi-drag elements

      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;

      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;

      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM
        sortable.captureAnimationState();

        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }

      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;

        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        } // Remove all auxiliary multidrag items from el, if sorting enabled


        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
          completed = _ref8.completed,
          cancel = _ref8.cancel;

      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
          rootEl = _ref9.rootEl,
          sortable = _ref9.sortable,
          dragRect = _ref9.dragRect;

      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
          isOwner = _ref10.isOwner,
          insertion = _ref10.insertion,
          activeSortable = _ref10.activeSortable,
          parentEl = _ref10.parentEl,
          putSortable = _ref10.putSortable;
      var options = this.options;

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }

        initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out


        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }

          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;

            activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden


            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
          isOwner = _ref11.isOwner,
          activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });

      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
          rootEl = _ref12.rootEl,
          parentEl = _ref12.parentEl,
          sortable = _ref12.sortable,
          dispatchSortableEvent = _ref12.dispatchSortableEvent,
          oldIndex = _ref12.oldIndex,
          putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
          children = parentEl.children; // Multi-drag selection

      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }

        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));

        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1,
            originalEvt: evt
          }); // Modifier activated, select from last to dragEl

          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
                currentIndex = index(dragEl$1);

            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              // Must include lastMultiDragSelect (select it), in case modified selection from no selection
              // (but previous selection existed)
              var n, i;

              if (currentIndex > lastIndex) {
                i = lastIndex;
                n = currentIndex;
              } else {
                i = currentIndex;
                n = lastIndex + 1;
              }

              for (; i < n; i++) {
                if (~multiDragElements.indexOf(children[i])) continue;
                toggleClass(children[i], options.selectedClass, true);
                multiDragElements.push(children[i]);
                dispatchEvent({
                  sortable: sortable,
                  rootEl: rootEl,
                  name: 'select',
                  targetEl: children[i],
                  originalEvt: evt
                });
              }
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }

          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1,
            originalEvt: evt
          });
        }
      } // Multi-drag drop


      if (dragStarted && this.isMultiDrag) {
        // Do not "unfold" after around dragEl if reverted
        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
              multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();

          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;

                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect; // Prepare unfold animation

                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed


            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }

              multiDragIndex++;
            }); // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.

            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });

              if (update) {
                dispatchSortableEvent('update');
              }
            }
          } // Must be done after capturing individual rects (scroll bar)


          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }

        multiDragSortable = toSortable;
      } // Remove clones if necessary


      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();

      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable

      if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable

      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click

      if (evt && evt.button !== 0) return;

      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el,
          originalEvt: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;

        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();

          multiDragSortable = sortable;
        }

        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },

      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
            index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;

      var oldIndicies = [],
          newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        }); // multiDragElements will already be sorted if folding

        var newIndex;

        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }

        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();

        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }

        return key;
      }
    }
  });
}

function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */


function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}

function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);

/* harmony default export */ __webpack_exports__["default"] = (Sortable);



/***/ }),

/***/ "2ab9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("2f69");
var setPrototypeOf = __webpack_require__("a8a2");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "2afe":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("0949");
var has = __webpack_require__("e414");
var wrappedWellKnownSymbolModule = __webpack_require__("49ae");
var defineProperty = __webpack_require__("e6a8").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "2be1":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("7104");
var classof = __webpack_require__("3ab7");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "2c24":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("6161");
var defineProperties = __webpack_require__("2dc3");
var enumBugKeys = __webpack_require__("b337");
var hiddenKeys = __webpack_require__("4427");
var html = __webpack_require__("1d07");
var documentCreateElement = __webpack_require__("893b");
var sharedKey = __webpack_require__("691f");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "2d4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("b5f1");
var getOwnPropertyDescriptor = __webpack_require__("05dc").f;
var classof = __webpack_require__("3ab7");
var macrotask = __webpack_require__("371a").set;
var IS_IOS = __webpack_require__("edef");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !IS_IOS) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "2dc3":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("70b9");
var definePropertyModule = __webpack_require__("e6a8");
var anObject = __webpack_require__("6161");
var objectKeys = __webpack_require__("ce57");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "2f23":
/***/ (function(module, exports) {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};

// Adds compatibility for ES modules
debounce.debounce = debounce;

module.exports = debounce;


/***/ }),

/***/ "2f4a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("b5f1");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "2f69":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "2fec":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("70b9");
var defineProperty = __webpack_require__("e6a8").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "326d":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("6373");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "33a3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "370b":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("2f69");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "371a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("b5f1");
var fails = __webpack_require__("7104");
var classof = __webpack_require__("3ab7");
var bind = __webpack_require__("326d");
var html = __webpack_require__("1d07");
var createElement = __webpack_require__("893b");
var IS_IOS = __webpack_require__("edef");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && !fails(post)) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "39e8":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("b5f1");
var userAgent = __webpack_require__("e4e7");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "3ab7":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "3b2c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("4a1c");

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
$({ target: 'URL', proto: true, enumerable: true }, {
  toJSON: function toJSON() {
    return URL.prototype.toString.call(this);
  }
});


/***/ }),

/***/ "3b5d":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("e414");
var toIndexedObject = __webpack_require__("2060");
var indexOf = __webpack_require__("f7f3").indexOf;
var hiddenKeys = __webpack_require__("4427");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "3bd5":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("70b9");
var fails = __webpack_require__("7104");
var has = __webpack_require__("e414");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "3ce2":
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"builder":"Rubric","levels":"Levels","builderfull":"Quick Feedback"},"fr":{"builder":"Rubrique","levels":"Niveaux","builderfull":"Rétroaction Rapide"},"nl":{"builder":"Rubric","levels":"Niveaus","builderfull":"Snelle Feedback"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "3f78":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("70b9");
var objectKeys = __webpack_require__("ce57");
var toIndexedObject = __webpack_require__("2060");
var propertyIsEnumerable = __webpack_require__("0ffc").f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.github.io/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.github.io/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "4047":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("6161");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "4056":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lower_bound_1 = __webpack_require__("55c0");
class PriorityQueue {
    constructor() {
        Object.defineProperty(this, "_queue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    enqueue(run, options) {
        options = Object.assign({ priority: 0 }, options);
        const element = {
            priority: options.priority,
            run
        };
        if (this.size && this._queue[this.size - 1].priority >= options.priority) {
            this._queue.push(element);
            return;
        }
        const index = lower_bound_1.default(this._queue, element, (a, b) => b.priority - a.priority);
        this._queue.splice(index, 0, element);
    }
    dequeue() {
        const item = this._queue.shift();
        return item && item.run;
    }
    filter(options) {
        return this._queue.filter(element => element.priority === options.priority).map(element => element.run);
    }
    get size() {
        return this._queue.length;
    }
}
exports.default = PriorityQueue;


/***/ }),

/***/ "4075":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__("742f");
var collectionStrong = __webpack_require__("c21e");

// `Map` constructor
// https://tc39.github.io/ecma262/#sec-map-objects
module.exports = collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "43e9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__("bd27");
var combineURLs = __webpack_require__("d821");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "4427":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "4736":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("b5f1");
var shared = __webpack_require__("943e");
var has = __webpack_require__("e414");
var uid = __webpack_require__("5be7");
var NATIVE_SYMBOL = __webpack_require__("49cf");
var USE_SYMBOL_AS_UID = __webpack_require__("7f0c");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "49ae":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("4736");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "49b6":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("4a1c");
var assign = __webpack_require__("ffbc");

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "49cf":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("7104");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "4a04":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("8702");
var classof = __webpack_require__("8af9");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "4a1c":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("b5f1");
var getOwnPropertyDescriptor = __webpack_require__("05dc").f;
var createNonEnumerableProperty = __webpack_require__("0209");
var redefine = __webpack_require__("6a8a");
var setGlobal = __webpack_require__("a134");
var copyConstructorProperties = __webpack_require__("6d94");
var isForced = __webpack_require__("02c0");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "4bc5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("3ab7");
var regexpExec = __webpack_require__("9a1c");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "4bec":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("70b9");
var fails = __webpack_require__("7104");
var createElement = __webpack_require__("893b");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "4ff6":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "5270":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("b5f1");
var DOMIterables = __webpack_require__("68b7");
var forEach = __webpack_require__("8239");
var createNonEnumerableProperty = __webpack_require__("0209");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "529c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("4a1c");
var $find = __webpack_require__("ec68").find;
var addToUnscopables = __webpack_require__("9b73");
var arrayMethodUsesToLength = __webpack_require__("3bd5");

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "52b3":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "5301":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("2060");
var addToUnscopables = __webpack_require__("9b73");
var Iterators = __webpack_require__("0279");
var InternalStateModule = __webpack_require__("0876");
var defineIterator = __webpack_require__("7935");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "55c0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Port of lower_bound from http://en.cppreference.com/w/cpp/algorithm/lower_bound
// Used to compute insertion index to keep queue sorted after insertion
function lowerBound(array, value, comparator) {
    let first = 0;
    let count = array.length;
    while (count > 0) {
        const step = (count / 2) | 0;
        let it = first + step;
        if (comparator(array[it], value) <= 0) {
            first = ++it;
            count -= step + 1;
        }
        else {
            count = step;
        }
    }
    return first;
}
exports.default = lowerBound;


/***/ }),

/***/ "57bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("6161");
var isObject = __webpack_require__("2f69");
var newPromiseCapability = __webpack_require__("c517");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "5bc1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricBuilder_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3ce2");
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricBuilder_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_kazupon_vue_i18n_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricBuilder_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_kazupon_vue_i18n_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricBuilder_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5be7":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "5c65":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("e6a8").f;
var has = __webpack_require__("e414");
var wellKnownSymbol = __webpack_require__("4736");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "5dc3":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "6000":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6161":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("2f69");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "62c8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("4a1c");
var $indexOf = __webpack_require__("f7f3").indexOf;
var arrayMethodIsStrict = __webpack_require__("9fac");
var arrayMethodUsesToLength = __webpack_require__("3bd5");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "62c9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("2f69");
var isArray = __webpack_require__("8d52");
var wellKnownSymbol = __webpack_require__("4736");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "62ca":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "6373":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "6431":
/***/ (function(module, exports, __webpack_require__) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "02f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0fc9":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "1654":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("71c1")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("30f1")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "1691":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "1af6":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__("63b6");

$export($export.S, 'Array', { isArray: __webpack_require__("9003") });


/***/ }),

/***/ "1bc3":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("f772");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1ec9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
var document = __webpack_require__("e53d").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "20fd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("b0c5");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");
var regexpExec = __webpack_require__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "241e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "25eb":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "294c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2fdb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("5ca1");
var context = __webpack_require__("d2c8");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("5147")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "30f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("b8e3");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var $iterCreate = __webpack_require__("8f60");
var setToStringTag = __webpack_require__("45f2");
var getPrototypeOf = __webpack_require__("53e2");
var ITERATOR = __webpack_require__("5168")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
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
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "32a6":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("241e");
var $keys = __webpack_require__("c3a1");

__webpack_require__("ce7e")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "32fc":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("e53d").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "335c":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6b4c");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "355d":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");
module.exports = __webpack_require__("8e60") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "36c3":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("335c");
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "3702":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("481b");
var ITERATOR = __webpack_require__("5168")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "3a38":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "40c3":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("6b4c");
var TAG = __webpack_require__("5168")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "45f2":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("d9f6").f;
var has = __webpack_require__("07e3");
var TAG = __webpack_require__("5168")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "469f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6c1c");
__webpack_require__("1654");
module.exports = __webpack_require__("7d7b");


/***/ }),

/***/ "481b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "4aa6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dc62");

/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "4ee1":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("5168")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "50ed":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "5147":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "5168":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("dbdb")('wks');
var uid = __webpack_require__("62a0");
var Symbol = __webpack_require__("e53d").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "5176":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("51b6");

/***/ }),

/***/ "51b6":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("a3c3");
module.exports = __webpack_require__("584a").Object.assign;


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "53e2":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("07e3");
var toObject = __webpack_require__("241e");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "549b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("d864");
var $export = __webpack_require__("63b6");
var toObject = __webpack_require__("241e");
var call = __webpack_require__("b0dc");
var isArrayIter = __webpack_require__("3702");
var toLength = __webpack_require__("b447");
var createProperty = __webpack_require__("20fd");
var getIterFn = __webpack_require__("7cd6");

$export($export.S + $export.F * !__webpack_require__("4ee1")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "54a1":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6c1c");
__webpack_require__("1654");
module.exports = __webpack_require__("95d5");


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5559":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("dbdb")('keys');
var uid = __webpack_require__("62a0");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "5b4e":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("36c3");
var toLength = __webpack_require__("b447");
var toAbsoluteIndex = __webpack_require__("0fc9");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5d73":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("469f");

/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "62a0":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "63b6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var ctx = __webpack_require__("d864");
var hide = __webpack_require__("35e8");
var has = __webpack_require__("07e3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "6762":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("5ca1");
var $includes = __webpack_require__("c366")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("9c6c")('includes');


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6b4c":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6c1c":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c367");
var global = __webpack_require__("e53d");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var TO_STRING_TAG = __webpack_require__("5168")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "71c1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var defined = __webpack_require__("25eb");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "774e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("d2d5");

/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "794b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("8e60") && !__webpack_require__("294c")(function () {
  return Object.defineProperty(__webpack_require__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "79aa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7cd6":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("40c3");
var ITERATOR = __webpack_require__("5168")('iterator');
var Iterators = __webpack_require__("481b");
module.exports = __webpack_require__("584a").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "7d7b":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var get = __webpack_require__("7cd6");
module.exports = __webpack_require__("584a").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "7e90":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var anObject = __webpack_require__("e4ae");
var getKeys = __webpack_require__("c3a1");

module.exports = __webpack_require__("8e60") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "8436":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8aae":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("32a6");
module.exports = __webpack_require__("584a").Object.keys;


/***/ }),

/***/ "8e60":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8f60":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("a159");
var descriptor = __webpack_require__("aebd");
var setToStringTag = __webpack_require__("45f2");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("35e8")(IteratorPrototype, __webpack_require__("5168")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "9003":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("6b4c");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "9138":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("35e8");


/***/ }),

/***/ "9306":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("c3a1");
var gOPS = __webpack_require__("9aa9");
var pIE = __webpack_require__("355d");
var toObject = __webpack_require__("241e");
var IObject = __webpack_require__("335c");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("294c")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "9427":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__("a159") });


/***/ }),

/***/ "95d5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("40c3");
var ITERATOR = __webpack_require__("5168")('iterator');
var Iterators = __webpack_require__("481b");
module.exports = __webpack_require__("584a").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "9aa9":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a159":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("e4ae");
var dPs = __webpack_require__("7e90");
var enumBugKeys = __webpack_require__("1691");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("1ec9")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("32fc").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "a352":
/***/ (function(module, exports) {

module.exports = __webpack_require__("289f");

/***/ }),

/***/ "a3c3":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("63b6");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("9306") });


/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("cb7c");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var toInteger = __webpack_require__("4588");
var advanceStringIndex = __webpack_require__("0390");
var regExpExec = __webpack_require__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "a4bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8aae");

/***/ }),

/***/ "a745":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f410");

/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "aebd":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("520a");
__webpack_require__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "b0dc":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("e4ae");
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


/***/ }),

/***/ "b447":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("3a38");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b8e3":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c367":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("8436");
var step = __webpack_require__("50ed");
var Iterators = __webpack_require__("481b");
var toIObject = __webpack_require__("36c3");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("30f1")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
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


/***/ }),

/***/ "c3a1":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("e6f3");
var enumBugKeys = __webpack_require__("1691");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "c649":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return insertNodeAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return console; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeNode; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a481");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_source_Vue_Draggable_node_modules_babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4aa6");
/* harmony import */ var F_source_Vue_Draggable_node_modules_babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(F_source_Vue_Draggable_node_modules_babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1__);



function getConsole() {
  if (typeof window !== "undefined") {
    return window.console;
  }

  return global.console;
}

var console = getConsole();

function cached(fn) {
  var cache = F_source_Vue_Draggable_node_modules_babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_1___default()(null);

  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

var regex = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(regex, function (_, c) {
    return c ? c.toUpperCase() : "";
  });
});

function removeNode(node) {
  if (node.parentElement !== null) {
    node.parentElement.removeChild(node);
  }
}

function insertNodeAt(fatherNode, node, position) {
  var refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
  fatherNode.insertBefore(node, refNode);
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c8bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("54a1");

/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce7e":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("63b6");
var core = __webpack_require__("584a");
var fails = __webpack_require__("294c");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "d2c8":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("aae3");
var defined = __webpack_require__("be13");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "d2d5":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1654");
__webpack_require__("549b");
module.exports = __webpack_require__("584a").Array.from;


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d864":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("79aa");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d9f6":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var toPrimitive = __webpack_require__("1bc3");
var dP = Object.defineProperty;

exports.f = __webpack_require__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "dbdb":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("584a");
var global = __webpack_require__("e53d");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("b8e3") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "dc62":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("9427");
var $Object = __webpack_require__("584a").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "e4ae":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "e53d":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "e6f3":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("07e3");
var toIObject = __webpack_require__("36c3");
var arrayIndexOf = __webpack_require__("5b4e")(false);
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "f410":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1af6");
module.exports = __webpack_require__("584a").Array.isArray;


/***/ }),

/***/ "f559":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__("5ca1");
var toLength = __webpack_require__("9def");
var context = __webpack_require__("d2c8");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__("5147")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("5176");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __webpack_require__("f559");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("a4bb");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("a745");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("5d73");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (is_array_default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("774e");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("c8bb");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js


function _iterableToArray(iter) {
  if (is_iterable_default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_default()(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: external {"commonjs":"sortablejs","commonjs2":"sortablejs","amd":"sortablejs","root":"Sortable"}
var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_ = __webpack_require__("a352");
var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_);

// EXTERNAL MODULE: ./src/util/helper.js
var helper = __webpack_require__("c649");

// CONCATENATED MODULE: ./src/vuedraggable.js










function buildAttribute(object, propName, value) {
  if (value === undefined) {
    return object;
  }

  object = object || {};
  object[propName] = value;
  return object;
}

function computeVmIndex(vnodes, element) {
  return vnodes.map(function (elt) {
    return elt.elm;
  }).indexOf(element);
}

function _computeIndexes(slots, children, isTransition, footerOffset) {
  if (!slots) {
    return [];
  }

  var elmFromNodes = slots.map(function (elt) {
    return elt.elm;
  });
  var footerIndex = children.length - footerOffset;

  var rawIndexes = _toConsumableArray(children).map(function (elt, idx) {
    return idx >= footerIndex ? elmFromNodes.length : elmFromNodes.indexOf(elt);
  });

  return isTransition ? rawIndexes.filter(function (ind) {
    return ind !== -1;
  }) : rawIndexes;
}

function emit(evtName, evtData) {
  var _this = this;

  this.$nextTick(function () {
    return _this.$emit(evtName.toLowerCase(), evtData);
  });
}

function delegateAndEmit(evtName) {
  var _this2 = this;

  return function (evtData) {
    if (_this2.realList !== null) {
      _this2["onDrag" + evtName](evtData);
    }

    emit.call(_this2, evtName, evtData);
  };
}

function isTransitionName(name) {
  return ["transition-group", "TransitionGroup"].includes(name);
}

function vuedraggable_isTransition(slots) {
  if (!slots || slots.length !== 1) {
    return false;
  }

  var _slots = _slicedToArray(slots, 1),
      componentOptions = _slots[0].componentOptions;

  if (!componentOptions) {
    return false;
  }

  return isTransitionName(componentOptions.tag);
}

function getSlot(slot, scopedSlot, key) {
  return slot[key] || (scopedSlot[key] ? scopedSlot[key]() : undefined);
}

function computeChildrenAndOffsets(children, slot, scopedSlot) {
  var headerOffset = 0;
  var footerOffset = 0;
  var header = getSlot(slot, scopedSlot, "header");

  if (header) {
    headerOffset = header.length;
    children = children ? [].concat(_toConsumableArray(header), _toConsumableArray(children)) : _toConsumableArray(header);
  }

  var footer = getSlot(slot, scopedSlot, "footer");

  if (footer) {
    footerOffset = footer.length;
    children = children ? [].concat(_toConsumableArray(children), _toConsumableArray(footer)) : _toConsumableArray(footer);
  }

  return {
    children: children,
    headerOffset: headerOffset,
    footerOffset: footerOffset
  };
}

function getComponentAttributes($attrs, componentData) {
  var attributes = null;

  var update = function update(name, value) {
    attributes = buildAttribute(attributes, name, value);
  };

  var attrs = keys_default()($attrs).filter(function (key) {
    return key === "id" || key.startsWith("data-");
  }).reduce(function (res, key) {
    res[key] = $attrs[key];
    return res;
  }, {});

  update("attrs", attrs);

  if (!componentData) {
    return attributes;
  }

  var on = componentData.on,
      props = componentData.props,
      componentDataAttrs = componentData.attrs;
  update("on", on);
  update("props", props);

  assign_default()(attributes.attrs, componentDataAttrs);

  return attributes;
}

var eventsListened = ["Start", "Add", "Remove", "Update", "End"];
var eventsToEmit = ["Choose", "Unchoose", "Sort", "Filter", "Clone"];
var readonlyProperties = ["Move"].concat(eventsListened, eventsToEmit).map(function (evt) {
  return "on" + evt;
});
var draggingElement = null;
var vuedraggable_props = {
  options: Object,
  list: {
    type: Array,
    required: false,
    default: null
  },
  value: {
    type: Array,
    required: false,
    default: null
  },
  noTransitionOnDrag: {
    type: Boolean,
    default: false
  },
  clone: {
    type: Function,
    default: function _default(original) {
      return original;
    }
  },
  element: {
    type: String,
    default: "div"
  },
  tag: {
    type: String,
    default: null
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: false,
    default: null
  }
};
var draggableComponent = {
  name: "draggable",
  inheritAttrs: false,
  props: vuedraggable_props,
  data: function data() {
    return {
      transitionMode: false,
      noneFunctionalComponentMode: false
    };
  },
  render: function render(h) {
    var slots = this.$slots.default;
    this.transitionMode = vuedraggable_isTransition(slots);

    var _computeChildrenAndOf = computeChildrenAndOffsets(slots, this.$slots, this.$scopedSlots),
        children = _computeChildrenAndOf.children,
        headerOffset = _computeChildrenAndOf.headerOffset,
        footerOffset = _computeChildrenAndOf.footerOffset;

    this.headerOffset = headerOffset;
    this.footerOffset = footerOffset;
    var attributes = getComponentAttributes(this.$attrs, this.componentData);
    return h(this.getTag(), attributes, children);
  },
  created: function created() {
    if (this.list !== null && this.value !== null) {
      helper["b" /* console */].error("Value and list props are mutually exclusive! Please set one or another.");
    }

    if (this.element !== "div") {
      helper["b" /* console */].warn("Element props is deprecated please use tag props instead. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#element-props");
    }

    if (this.options !== undefined) {
      helper["b" /* console */].warn("Options props is deprecated, add sortable options directly as vue.draggable item, or use v-bind. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#options-props");
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.noneFunctionalComponentMode = this.getTag().toLowerCase() !== this.$el.nodeName.toLowerCase() && !this.getIsFunctional();

    if (this.noneFunctionalComponentMode && this.transitionMode) {
      throw new Error("Transition-group inside component is not supported. Please alter tag value or remove transition-group. Current tag value: ".concat(this.getTag()));
    }

    var optionsAdded = {};
    eventsListened.forEach(function (elt) {
      optionsAdded["on" + elt] = delegateAndEmit.call(_this3, elt);
    });
    eventsToEmit.forEach(function (elt) {
      optionsAdded["on" + elt] = emit.bind(_this3, elt);
    });

    var attributes = keys_default()(this.$attrs).reduce(function (res, key) {
      res[Object(helper["a" /* camelize */])(key)] = _this3.$attrs[key];
      return res;
    }, {});

    var options = assign_default()({}, this.options, attributes, optionsAdded, {
      onMove: function onMove(evt, originalEvent) {
        return _this3.onDragMove(evt, originalEvent);
      }
    });

    !("draggable" in options) && (options.draggable = ">*");
    this._sortable = new external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default.a(this.rootContainer, options);
    this.computeIndexes();
  },
  beforeDestroy: function beforeDestroy() {
    if (this._sortable !== undefined) this._sortable.destroy();
  },
  computed: {
    rootContainer: function rootContainer() {
      return this.transitionMode ? this.$el.children[0] : this.$el;
    },
    realList: function realList() {
      return this.list ? this.list : this.value;
    }
  },
  watch: {
    options: {
      handler: function handler(newOptionValue) {
        this.updateOptions(newOptionValue);
      },
      deep: true
    },
    $attrs: {
      handler: function handler(newOptionValue) {
        this.updateOptions(newOptionValue);
      },
      deep: true
    },
    realList: function realList() {
      this.computeIndexes();
    }
  },
  methods: {
    getIsFunctional: function getIsFunctional() {
      var fnOptions = this._vnode.fnOptions;
      return fnOptions && fnOptions.functional;
    },
    getTag: function getTag() {
      return this.tag || this.element;
    },
    updateOptions: function updateOptions(newOptionValue) {
      for (var property in newOptionValue) {
        var value = Object(helper["a" /* camelize */])(property);

        if (readonlyProperties.indexOf(value) === -1) {
          this._sortable.option(value, newOptionValue[property]);
        }
      }
    },
    getChildrenNodes: function getChildrenNodes() {
      if (this.noneFunctionalComponentMode) {
        return this.$children[0].$slots.default;
      }

      var rawNodes = this.$slots.default;
      return this.transitionMode ? rawNodes[0].child.$slots.default : rawNodes;
    },
    computeIndexes: function computeIndexes() {
      var _this4 = this;

      this.$nextTick(function () {
        _this4.visibleIndexes = _computeIndexes(_this4.getChildrenNodes(), _this4.rootContainer.children, _this4.transitionMode, _this4.footerOffset);
      });
    },
    getUnderlyingVm: function getUnderlyingVm(htmlElt) {
      var index = computeVmIndex(this.getChildrenNodes() || [], htmlElt);

      if (index === -1) {
        //Edge case during move callback: related element might be
        //an element different from collection
        return null;
      }

      var element = this.realList[index];
      return {
        index: index,
        element: element
      };
    },
    getUnderlyingPotencialDraggableComponent: function getUnderlyingPotencialDraggableComponent(_ref) {
      var vue = _ref.__vue__;

      if (!vue || !vue.$options || !isTransitionName(vue.$options._componentTag)) {
        if (!("realList" in vue) && vue.$children.length === 1 && "realList" in vue.$children[0]) return vue.$children[0];
        return vue;
      }

      return vue.$parent;
    },
    emitChanges: function emitChanges(evt) {
      var _this5 = this;

      this.$nextTick(function () {
        _this5.$emit("change", evt);
      });
    },
    alterList: function alterList(onList) {
      if (this.list) {
        onList(this.list);
        return;
      }

      var newList = _toConsumableArray(this.value);

      onList(newList);
      this.$emit("input", newList);
    },
    spliceList: function spliceList() {
      var _arguments = arguments;

      var spliceList = function spliceList(list) {
        return list.splice.apply(list, _toConsumableArray(_arguments));
      };

      this.alterList(spliceList);
    },
    updatePosition: function updatePosition(oldIndex, newIndex) {
      var updatePosition = function updatePosition(list) {
        return list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);
      };

      this.alterList(updatePosition);
    },
    getRelatedContextFromMoveEvent: function getRelatedContextFromMoveEvent(_ref2) {
      var to = _ref2.to,
          related = _ref2.related;
      var component = this.getUnderlyingPotencialDraggableComponent(to);

      if (!component) {
        return {
          component: component
        };
      }

      var list = component.realList;
      var context = {
        list: list,
        component: component
      };

      if (to !== related && list && component.getUnderlyingVm) {
        var destination = component.getUnderlyingVm(related);

        if (destination) {
          return assign_default()(destination, context);
        }
      }

      return context;
    },
    getVmIndex: function getVmIndex(domIndex) {
      var indexes = this.visibleIndexes;
      var numberIndexes = indexes.length;
      return domIndex > numberIndexes - 1 ? numberIndexes : indexes[domIndex];
    },
    getComponent: function getComponent() {
      return this.$slots.default[0].componentInstance;
    },
    resetTransitionData: function resetTransitionData(index) {
      if (!this.noTransitionOnDrag || !this.transitionMode) {
        return;
      }

      var nodes = this.getChildrenNodes();
      nodes[index].data = null;
      var transitionContainer = this.getComponent();
      transitionContainer.children = [];
      transitionContainer.kept = undefined;
    },
    onDragStart: function onDragStart(evt) {
      this.context = this.getUnderlyingVm(evt.item);
      evt.item._underlying_vm_ = this.clone(this.context.element);
      draggingElement = evt.item;
    },
    onDragAdd: function onDragAdd(evt) {
      var element = evt.item._underlying_vm_;

      if (element === undefined) {
        return;
      }

      Object(helper["d" /* removeNode */])(evt.item);
      var newIndex = this.getVmIndex(evt.newIndex);
      this.spliceList(newIndex, 0, element);
      this.computeIndexes();
      var added = {
        element: element,
        newIndex: newIndex
      };
      this.emitChanges({
        added: added
      });
    },
    onDragRemove: function onDragRemove(evt) {
      Object(helper["c" /* insertNodeAt */])(this.rootContainer, evt.item, evt.oldIndex);

      if (evt.pullMode === "clone") {
        Object(helper["d" /* removeNode */])(evt.clone);
        return;
      }

      var oldIndex = this.context.index;
      this.spliceList(oldIndex, 1);
      var removed = {
        element: this.context.element,
        oldIndex: oldIndex
      };
      this.resetTransitionData(oldIndex);
      this.emitChanges({
        removed: removed
      });
    },
    onDragUpdate: function onDragUpdate(evt) {
      Object(helper["d" /* removeNode */])(evt.item);
      Object(helper["c" /* insertNodeAt */])(evt.from, evt.item, evt.oldIndex);
      var oldIndex = this.context.index;
      var newIndex = this.getVmIndex(evt.newIndex);
      this.updatePosition(oldIndex, newIndex);
      var moved = {
        element: this.context.element,
        oldIndex: oldIndex,
        newIndex: newIndex
      };
      this.emitChanges({
        moved: moved
      });
    },
    updateProperty: function updateProperty(evt, propertyName) {
      evt.hasOwnProperty(propertyName) && (evt[propertyName] += this.headerOffset);
    },
    computeFutureIndex: function computeFutureIndex(relatedContext, evt) {
      if (!relatedContext.element) {
        return 0;
      }

      var domChildren = _toConsumableArray(evt.to.children).filter(function (el) {
        return el.style["display"] !== "none";
      });

      var currentDOMIndex = domChildren.indexOf(evt.related);
      var currentIndex = relatedContext.component.getVmIndex(currentDOMIndex);
      var draggedInList = domChildren.indexOf(draggingElement) !== -1;
      return draggedInList || !evt.willInsertAfter ? currentIndex : currentIndex + 1;
    },
    onDragMove: function onDragMove(evt, originalEvent) {
      var onMove = this.move;

      if (!onMove || !this.realList) {
        return true;
      }

      var relatedContext = this.getRelatedContextFromMoveEvent(evt);
      var draggedContext = this.context;
      var futureIndex = this.computeFutureIndex(relatedContext, evt);

      assign_default()(draggedContext, {
        futureIndex: futureIndex
      });

      var sendEvt = assign_default()({}, evt, {
        relatedContext: relatedContext,
        draggedContext: draggedContext
      });

      return onMove(sendEvt, originalEvent);
    },
    onDragEnd: function onDragEnd() {
      this.computeIndexes();
      draggingElement = null;
    }
  }
};

if (typeof window !== "undefined" && "Vue" in window) {
  window.Vue.component("draggable", draggableComponent);
}

/* harmony default export */ var vuedraggable = (draggableComponent);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (vuedraggable);



/***/ })

/******/ })["default"];
//# sourceMappingURL=vuedraggable.common.js.map

/***/ }),

/***/ "6485":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "64f1":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("b2c6");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "6870":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("4a1c");
var $reduce = __webpack_require__("a3a9").left;
var arrayMethodIsStrict = __webpack_require__("9fac");
var arrayMethodUsesToLength = __webpack_require__("3bd5");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "68b7":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "68be":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("4a1c");
var exec = __webpack_require__("9a1c");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "691f":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("943e");
var uid = __webpack_require__("5be7");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "6985":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6a8a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("b5f1");
var createNonEnumerableProperty = __webpack_require__("0209");
var has = __webpack_require__("e414");
var setGlobal = __webpack_require__("a134");
var inspectSource = __webpack_require__("b2be");
var InternalStateModule = __webpack_require__("0876");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "6bb2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6bbe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricEntry_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cdab");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricEntry_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricEntry_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricEntry_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6d94":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("e414");
var ownKeys = __webpack_require__("17bb");
var getOwnPropertyDescriptorModule = __webpack_require__("05dc");
var definePropertyModule = __webpack_require__("e6a8");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "70b9":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("7104");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "7104":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "71eb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricBuilder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9ad2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricBuilder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricBuilder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricBuilder_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "731d":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("b5f1");
var inspectSource = __webpack_require__("b2be");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "7350":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("2f69");
var classof = __webpack_require__("3ab7");
var wellKnownSymbol = __webpack_require__("4736");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "742f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("4a1c");
var global = __webpack_require__("b5f1");
var isForced = __webpack_require__("02c0");
var redefine = __webpack_require__("6a8a");
var InternalMetadataModule = __webpack_require__("2752");
var iterate = __webpack_require__("8ea6");
var anInstance = __webpack_require__("93cb");
var isObject = __webpack_require__("2f69");
var fails = __webpack_require__("7104");
var checkCorrectnessOfIteration = __webpack_require__("c968");
var setToStringTag = __webpack_require__("5c65");
var inheritIfRequired = __webpack_require__("2ab9");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "7482":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LevelsView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6985");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LevelsView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LevelsView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LevelsView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "764f":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "7935":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("4a1c");
var createIteratorConstructor = __webpack_require__("0051");
var getPrototypeOf = __webpack_require__("1b63");
var setPrototypeOf = __webpack_require__("a8a2");
var setToStringTag = __webpack_require__("5c65");
var createNonEnumerableProperty = __webpack_require__("0209");
var redefine = __webpack_require__("6a8a");
var wellKnownSymbol = __webpack_require__("4736");
var IS_PURE = __webpack_require__("764f");
var Iterators = __webpack_require__("0279");
var IteratorsCore = __webpack_require__("7abc");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7a0d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7abc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__("1b63");
var createNonEnumerableProperty = __webpack_require__("0209");
var has = __webpack_require__("e414");
var wellKnownSymbol = __webpack_require__("4736");
var IS_PURE = __webpack_require__("764f");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "7aeb":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("7104");
var wellKnownSymbol = __webpack_require__("4736");
var V8_VERSION = __webpack_require__("39e8");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "7c42":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("6a8a");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "7c64":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("b2c6");
var whitespaces = __webpack_require__("9538");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "7cf1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4ff6");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "7f0c":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("49cf");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "80fa":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("b5f1");
var DOMIterables = __webpack_require__("68b7");
var ArrayIteratorMethods = __webpack_require__("5301");
var createNonEnumerableProperty = __webpack_require__("0209");
var wellKnownSymbol = __webpack_require__("4736");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "81b4":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("9e7e")))

/***/ }),

/***/ "8239":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("ec68").forEach;
var arrayMethodIsStrict = __webpack_require__("9fac");
var arrayMethodUsesToLength = __webpack_require__("3bd5");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "8324":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("e1f8");

/***/ }),

/***/ "836d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8414":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricDemoHome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("836d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricDemoHome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricDemoHome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricDemoHome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8702":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("4736");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "8796":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0e29");
var buildURL = __webpack_require__("18c2");
var InterceptorManager = __webpack_require__("164f");
var dispatchRequest = __webpack_require__("f23c");
var mergeConfig = __webpack_require__("eb13");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "8808":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8898":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("4a1c");
var IS_PURE = __webpack_require__("764f");
var global = __webpack_require__("b5f1");
var getBuiltIn = __webpack_require__("f914");
var NativePromise = __webpack_require__("f9d2");
var redefine = __webpack_require__("6a8a");
var redefineAll = __webpack_require__("7c42");
var setToStringTag = __webpack_require__("5c65");
var setSpecies = __webpack_require__("0e60");
var isObject = __webpack_require__("2f69");
var aFunction = __webpack_require__("6373");
var anInstance = __webpack_require__("93cb");
var classof = __webpack_require__("3ab7");
var inspectSource = __webpack_require__("b2be");
var iterate = __webpack_require__("8ea6");
var checkCorrectnessOfIteration = __webpack_require__("c968");
var speciesConstructor = __webpack_require__("bbec");
var task = __webpack_require__("371a").set;
var microtask = __webpack_require__("2d4e");
var promiseResolve = __webpack_require__("57bb");
var hostReportErrors = __webpack_require__("2f4a");
var newPromiseCapabilityModule = __webpack_require__("c517");
var perform = __webpack_require__("c7f9");
var InternalStateModule = __webpack_require__("0876");
var isForced = __webpack_require__("02c0");
var wellKnownSymbol = __webpack_require__("4736");
var V8_VERSION = __webpack_require__("39e8");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "893b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("b5f1");
var isObject = __webpack_require__("2f69");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "89bd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("6161");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "8af9":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("8702");
var classofRaw = __webpack_require__("3ab7");
var wellKnownSymbol = __webpack_require__("4736");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8d52":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("3ab7");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "8ea6":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("6161");
var isArrayIteratorMethod = __webpack_require__("091c");
var toLength = __webpack_require__("7cf1");
var bind = __webpack_require__("326d");
var getIteratorMethod = __webpack_require__("1e4c");
var callWithSafeIterationClosing = __webpack_require__("4047");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "9151":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("4a1c");
var $entries = __webpack_require__("3f78").entries;

// `Object.entries` method
// https://tc39.github.io/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


/***/ }),

/***/ "9161":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("3b5d");
var enumBugKeys = __webpack_require__("b337");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "93cb":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "943e":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("764f");
var store = __webpack_require__("98a2");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "9538":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "96cd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("d0d3").charAt;
var InternalStateModule = __webpack_require__("0876");
var defineIterator = __webpack_require__("7935");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "97f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "98a2":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("b5f1");
var setGlobal = __webpack_require__("a134");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "9a1c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("89bd");
var stickyHelpers = __webpack_require__("1161");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "9ad2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9b46":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("fabe");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "9b73":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("4736");
var create = __webpack_require__("2c24");
var definePropertyModule = __webpack_require__("e6a8");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9c4f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "9df3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("4a1c");
var isObject = __webpack_require__("2f69");
var isArray = __webpack_require__("8d52");
var toAbsoluteIndex = __webpack_require__("dd93");
var toLength = __webpack_require__("7cf1");
var toIndexedObject = __webpack_require__("2060");
var createProperty = __webpack_require__("c46f");
var wellKnownSymbol = __webpack_require__("4736");
var arrayMethodHasSpeciesSupport = __webpack_require__("7aeb");
var arrayMethodUsesToLength = __webpack_require__("3bd5");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "9e7e":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("81b4");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "9ebe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("97f0");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "9fac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("7104");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a134":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("b5f1");
var createNonEnumerableProperty = __webpack_require__("0209");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "a251":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CriteriumDetailsView_vue_vue_type_style_index_0_id_21b1ed4e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7a0d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CriteriumDetailsView_vue_vue_type_style_index_0_id_21b1ed4e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CriteriumDetailsView_vue_vue_type_style_index_0_id_21b1ed4e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CriteriumDetailsView_vue_vue_type_style_index_0_id_21b1ed4e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a3a9":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("6373");
var toObject = __webpack_require__("64f1");
var IndexedObject = __webpack_require__("2be1");
var toLength = __webpack_require__("7cf1");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "a7a2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("326d");
var toObject = __webpack_require__("64f1");
var callWithSafeIterationClosing = __webpack_require__("4047");
var isArrayIteratorMethod = __webpack_require__("091c");
var toLength = __webpack_require__("7cf1");
var createProperty = __webpack_require__("c46f");
var getIteratorMethod = __webpack_require__("1e4c");

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "a7bd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a8a2":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("6161");
var aPossiblePrototype = __webpack_require__("afc5");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "af21":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SplitViewButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6000");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SplitViewButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SplitViewButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SplitViewButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "afc5":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("2f69");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "aff3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("9b46");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "b072":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("4a1c");
var IndexedObject = __webpack_require__("2be1");
var toIndexedObject = __webpack_require__("2060");
var arrayMethodIsStrict = __webpack_require__("9fac");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "b0a1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0e29");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "b2be":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("98a2");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "b2c6":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "b337":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "b537":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("4a1c");
var from = __webpack_require__("a7a2");
var checkCorrectnessOfIteration = __webpack_require__("c968");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "b5f1":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("52b3")))

/***/ }),

/***/ "b6bc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("68be");
var redefine = __webpack_require__("6a8a");
var fails = __webpack_require__("7104");
var wellKnownSymbol = __webpack_require__("4736");
var regexpExec = __webpack_require__("9a1c");
var createNonEnumerableProperty = __webpack_require__("0209");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "b7cf":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "b7e4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("4a1c");
var DESCRIPTORS = __webpack_require__("70b9");
var ownKeys = __webpack_require__("17bb");
var toIndexedObject = __webpack_require__("2060");
var getOwnPropertyDescriptorModule = __webpack_require__("05dc");
var createProperty = __webpack_require__("c46f");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "b8f8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter = __webpack_require__("9c4f");
const p_timeout_1 = __webpack_require__("fde1");
const priority_queue_1 = __webpack_require__("4056");
const empty = () => { };
const timeoutError = new p_timeout_1.TimeoutError();
/**
Promise queue with concurrency control.
*/
class PQueue extends EventEmitter {
    constructor(options) {
        super();
        Object.defineProperty(this, "_carryoverConcurrencyCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_isIntervalIgnored", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_intervalCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "_intervalCap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_interval", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_intervalEnd", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "_intervalId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_timeoutId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_queue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_queueClass", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_pendingCount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        // The `!` is needed because of https://github.com/microsoft/TypeScript/issues/32194
        Object.defineProperty(this, "_concurrency", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_isPaused", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_resolveEmpty", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: empty
        });
        Object.defineProperty(this, "_resolveIdle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: empty
        });
        Object.defineProperty(this, "_timeout", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_throwOnTimeout", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
        options = Object.assign({ carryoverConcurrencyCount: false, intervalCap: Infinity, interval: 0, concurrency: Infinity, autoStart: true, queueClass: priority_queue_1.default }, options
        // TODO: Remove this `as`.
        );
        if (!(typeof options.intervalCap === 'number' && options.intervalCap >= 1)) {
            throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${options.intervalCap}\` (${typeof options.intervalCap})`);
        }
        if (options.interval === undefined || !(Number.isFinite(options.interval) && options.interval >= 0)) {
            throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${options.interval}\` (${typeof options.interval})`);
        }
        this._carryoverConcurrencyCount = options.carryoverConcurrencyCount;
        this._isIntervalIgnored = options.intervalCap === Infinity || options.interval === 0;
        this._intervalCap = options.intervalCap;
        this._interval = options.interval;
        this._queue = new options.queueClass();
        this._queueClass = options.queueClass;
        this.concurrency = options.concurrency;
        this._timeout = options.timeout;
        this._throwOnTimeout = options.throwOnTimeout === true;
        this._isPaused = options.autoStart === false;
    }
    get _doesIntervalAllowAnother() {
        return this._isIntervalIgnored || this._intervalCount < this._intervalCap;
    }
    get _doesConcurrentAllowAnother() {
        return this._pendingCount < this._concurrency;
    }
    _next() {
        this._pendingCount--;
        this._tryToStartAnother();
    }
    _resolvePromises() {
        this._resolveEmpty();
        this._resolveEmpty = empty;
        if (this._pendingCount === 0) {
            this._resolveIdle();
            this._resolveIdle = empty;
        }
    }
    _onResumeInterval() {
        this._onInterval();
        this._initializeIntervalIfNeeded();
        this._timeoutId = undefined;
    }
    _isIntervalPaused() {
        const now = Date.now();
        if (this._intervalId === undefined) {
            const delay = this._intervalEnd - now;
            if (delay < 0) {
                // Act as the interval was done
                // We don't need to resume it here because it will be resumed on line 160
                this._intervalCount = (this._carryoverConcurrencyCount) ? this._pendingCount : 0;
            }
            else {
                // Act as the interval is pending
                if (this._timeoutId === undefined) {
                    this._timeoutId = setTimeout(() => {
                        this._onResumeInterval();
                    }, delay);
                }
                return true;
            }
        }
        return false;
    }
    _tryToStartAnother() {
        if (this._queue.size === 0) {
            // We can clear the interval ("pause")
            // Because we can redo it later ("resume")
            if (this._intervalId) {
                clearInterval(this._intervalId);
            }
            this._intervalId = undefined;
            this._resolvePromises();
            return false;
        }
        if (!this._isPaused) {
            const canInitializeInterval = !this._isIntervalPaused();
            if (this._doesIntervalAllowAnother && this._doesConcurrentAllowAnother) {
                this.emit('active');
                this._queue.dequeue()();
                if (canInitializeInterval) {
                    this._initializeIntervalIfNeeded();
                }
                return true;
            }
        }
        return false;
    }
    _initializeIntervalIfNeeded() {
        if (this._isIntervalIgnored || this._intervalId !== undefined) {
            return;
        }
        this._intervalId = setInterval(() => {
            this._onInterval();
        }, this._interval);
        this._intervalEnd = Date.now() + this._interval;
    }
    _onInterval() {
        if (this._intervalCount === 0 && this._pendingCount === 0 && this._intervalId) {
            clearInterval(this._intervalId);
            this._intervalId = undefined;
        }
        this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
        this._processQueue();
    }
    /**
    Executes all queued functions until it reaches the limit.
    */
    _processQueue() {
        // eslint-disable-next-line no-empty
        while (this._tryToStartAnother()) { }
    }
    get concurrency() {
        return this._concurrency;
    }
    set concurrency(newConcurrency) {
        if (!(typeof newConcurrency === 'number' && newConcurrency >= 1)) {
            throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${newConcurrency}\` (${typeof newConcurrency})`);
        }
        this._concurrency = newConcurrency;
        this._processQueue();
    }
    /**
    Adds a sync or async task to the queue. Always returns a promise.
    */
    async add(fn, options = {}) {
        return new Promise((resolve, reject) => {
            const run = async () => {
                this._pendingCount++;
                this._intervalCount++;
                try {
                    const operation = (this._timeout === undefined && options.timeout === undefined) ? fn() : p_timeout_1.default(Promise.resolve(fn()), (options.timeout === undefined ? this._timeout : options.timeout), () => {
                        if (options.throwOnTimeout === undefined ? this._throwOnTimeout : options.throwOnTimeout) {
                            reject(timeoutError);
                        }
                        return undefined;
                    });
                    resolve(await operation);
                }
                catch (error) {
                    reject(error);
                }
                this._next();
            };
            this._queue.enqueue(run, options);
            this._tryToStartAnother();
        });
    }
    /**
    Same as `.add()`, but accepts an array of sync or async functions.

    @returns A promise that resolves when all functions are resolved.
    */
    async addAll(functions, options) {
        return Promise.all(functions.map(async (function_) => this.add(function_, options)));
    }
    /**
    Start (or resume) executing enqueued tasks within concurrency limit. No need to call this if queue is not paused (via `options.autoStart = false` or by `.pause()` method.)
    */
    start() {
        if (!this._isPaused) {
            return this;
        }
        this._isPaused = false;
        this._processQueue();
        return this;
    }
    /**
    Put queue execution on hold.
    */
    pause() {
        this._isPaused = true;
    }
    /**
    Clear the queue.
    */
    clear() {
        this._queue = new this._queueClass();
    }
    /**
    Can be called multiple times. Useful if you for example add additional items at a later time.

    @returns A promise that settles when the queue becomes empty.
    */
    async onEmpty() {
        // Instantly resolve if the queue is empty
        if (this._queue.size === 0) {
            return;
        }
        return new Promise(resolve => {
            const existingResolve = this._resolveEmpty;
            this._resolveEmpty = () => {
                existingResolve();
                resolve();
            };
        });
    }
    /**
    The difference with `.onEmpty` is that `.onIdle` guarantees that all work from the queue has finished. `.onEmpty` merely signals that the queue is empty, but it could mean that some promises haven't completed yet.

    @returns A promise that settles when the queue becomes empty, and all promises have completed; `queue.size === 0 && queue.pending === 0`.
    */
    async onIdle() {
        // Instantly resolve if none pending and if nothing else is queued
        if (this._pendingCount === 0 && this._queue.size === 0) {
            return;
        }
        return new Promise(resolve => {
            const existingResolve = this._resolveIdle;
            this._resolveIdle = () => {
                existingResolve();
                resolve();
            };
        });
    }
    /**
    Size of the queue.
    */
    get size() {
        return this._queue.size;
    }
    /**
    Size of the queue, filtered by the given options.

    For example, this can be used to find the number of items remaining in the queue with a specific priority level.
    */
    sizeBy(options) {
        return this._queue.filter(options).length;
    }
    /**
    Number of pending promises.
    */
    get pending() {
        return this._pendingCount;
    }
    /**
    Whether the queue is currently paused.
    */
    get isPaused() {
        return this._isPaused;
    }
    /**
    Set the timeout for future operations.
    */
    set timeout(milliseconds) {
        this._timeout = milliseconds;
    }
    get timeout() {
        return this._timeout;
    }
}
exports.default = PQueue;


/***/ }),

/***/ "bab4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("4a1c");
var fails = __webpack_require__("7104");
var toIndexedObject = __webpack_require__("2060");
var nativeGetOwnPropertyDescriptor = __webpack_require__("05dc").f;
var DESCRIPTORS = __webpack_require__("70b9");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "bbec":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("6161");
var aFunction = __webpack_require__("6373");
var wellKnownSymbol = __webpack_require__("4736");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "bd27":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "bf4d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricDemoWrapper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a7bd");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricDemoWrapper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricDemoWrapper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricDemoWrapper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c097":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "c21e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__("e6a8").f;
var create = __webpack_require__("2c24");
var redefineAll = __webpack_require__("7c42");
var bind = __webpack_require__("326d");
var anInstance = __webpack_require__("93cb");
var iterate = __webpack_require__("8ea6");
var defineIterator = __webpack_require__("7935");
var setSpecies = __webpack_require__("0e60");
var DESCRIPTORS = __webpack_require__("70b9");
var fastKey = __webpack_require__("2752").fastKey;
var InternalStateModule = __webpack_require__("0876");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "c40e":
/***/ (function(module, exports) {



/***/ }),

/***/ "c46f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("370b");
var definePropertyModule = __webpack_require__("e6a8");
var createPropertyDescriptor = __webpack_require__("62ca");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "c517":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("6373");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "c790":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = (promise, onFinally) => {
	onFinally = onFinally || (() => {});

	return promise.then(
		val => new Promise(resolve => {
			resolve(onFinally());
		}).then(() => val),
		err => new Promise(resolve => {
			resolve(onFinally());
		}).then(() => {
			throw err;
		})
	);
};


/***/ }),

/***/ "c7f9":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "c968":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("4736");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "ca6d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cc54":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("b7cf")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("236c");

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("e57b");

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("d656");

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("b537");

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("62c8");

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("5301");

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("f7ad");

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("6870");

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("1ce3");

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__("4075");

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("0379");

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("96cd");

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("5270");

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("80fa");

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/web.url.to-json.js
var web_url_to_json = __webpack_require__("3b2c");

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("fba6");

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("ce1a");

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("05e6");

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("21be");

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/@babel/runtime/helpers/esm/iterableToArray.js









function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/@babel/runtime/helpers/esm/typeof.js







function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of = __webpack_require__("e789");

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.object.set-prototype-of.js
var es_object_set_prototype_of = __webpack_require__("287c");

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js


function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("bab4");

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.reflect.get.js
var es_reflect_get = __webpack_require__("cce3");

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/@babel/runtime/helpers/esm/superPropBase.js

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/@babel/runtime/helpers/esm/get.js



function get_get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    get_get = Reflect.get;
  } else {
    get_get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return get_get(target, property, receiver || target);
}
// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("b072");

// CONCATENATED MODULE: ./src/Domain/TreeNode.ts







var TreeNode_TreeNode =
/*#__PURE__*/
function () {
  function TreeNode() {
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var id = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, TreeNode);

    this.title = '';
    this._children = [];
    this.isRoot = false;
    this.parent = null;
    if (!id) this.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15); //GUID
    else this.id = id;
    this.title = title;
  }

  _createClass(TreeNode, [{
    key: "canHaveChildren",
    value: function canHaveChildren() {
      return true;
    }
  }, {
    key: "hasChildren",
    value: function hasChildren() {
      return this.children.length > 0;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.title;
    }
  }, {
    key: "addChild",
    value: function addChild(treeNode) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      treeNode.parent = this;

      this._children.splice(index, 0, treeNode);

      if (this.parent) this.parent.notifyAddChild(treeNode);
      if (this.isRoot) this.notifyAddChild(treeNode);
    }
  }, {
    key: "notifyAddChild",
    value: function notifyAddChild(treeNode) {
      if (this.parent) {
        //bubble up the change
        this.parent.notifyAddChild(treeNode);
      }
    }
  }, {
    key: "notifyRemoveChild",
    value: function notifyRemoveChild(treeNodeContainer, treeNode) {
      if (this.parent) //bubble up the chain
        this.parent.notifyRemoveChild(treeNodeContainer, treeNode);
    }
  }, {
    key: "removeChild",
    value: function removeChild(treeNode) {
      var notify = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (treeNode.parent !== this) {
        throw new Error("treeNode: " + treeNode.title + " not part of treeNode: " + this.title);
      }

      var index = this._children.indexOf(treeNode);

      this._children.splice(index, 1);

      if (notify && this.parent) {
        this.parent.notifyRemoveChild(this, treeNode);
      }

      treeNode.parent = null;
    }
  }, {
    key: "moveChild",
    value: function moveChild(child, newIndex, oldIndex) {
      if (child.parent !== this) {
        throw new Error("treeNode: " + child.title + " not part of treeNode: " + this.title);
      }

      if (!oldIndex) oldIndex = this.children.indexOf(child);
      this.moveItemInArray(this.children, oldIndex, newIndex);
    }
    /*static moveTreeNodeToContainerAtIndex(treeNode: TreeNode, container: TreeNode, index:number ) {
        ContainerManager.removeTreeNodeFromContainer(treeNode, container);
    }*/

  }, {
    key: "moveItemInArray",
    value: function moveItemInArray(array, from, to) {
      if (to >= array.length || from >= array.length) return;
      if (to < 0 || from < 0) return;
      array.splice(to, 0, array.splice(from, 1)[0]);
    }
  }, {
    key: "children",
    get: function get() {
      return this._children;
    },
    set: function set(children) {
      this._children = children;
    }
  }]);

  return TreeNode;
}();


// CONCATENATED MODULE: ./src/Domain/Criterium.ts








var Criterium_Criterium =
/*#__PURE__*/
function (_TreeNode) {
  _inherits(Criterium, _TreeNode);

  function Criterium() {
    var _this;

    _classCallCheck(this, Criterium);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Criterium).apply(this, arguments));
    _this.weight = 100;
    return _this;
  }

  _createClass(Criterium, [{
    key: "weightToString",
    value: function weightToString() {
      return String(this.weight * 100);
    }
  }, {
    key: "getType",
    value: function getType() {
      return 'criterium';
    }
  }, {
    key: "getScore",
    value: function getScore() {
      return 0;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "Criterium (id: ".concat(this.id, ", title: ").concat(this.title, ")");
    }
  }, {
    key: "canHaveChildren",
    value: function canHaveChildren() {
      return false;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        id: this.id,
        title: this.title,
        weight: this.weight
      };
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(criterium) {
      var criteriumObject;

      if (typeof criterium === 'string') {
        criteriumObject = JSON.parse(criterium);
      } else {
        criteriumObject = criterium;
      }

      var newCriterium = new Criterium(criteriumObject.title, criteriumObject.id);
      newCriterium.weight = criteriumObject.weight;
      return newCriterium;
    }
  }]);

  return Criterium;
}(TreeNode_TreeNode);


// CONCATENATED MODULE: ./src/Domain/Category.ts














var Category_Category =
/*#__PURE__*/
function (_TreeNode) {
  _inherits(Category, _TreeNode);

  function Category() {
    var _this;

    _classCallCheck(this, Category);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Category).apply(this, arguments));
    _this.color = 'blue';
    return _this;
  }

  _createClass(Category, [{
    key: "rgbColor",
    value: function rgbColor() {
      var opacity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      console.log(this.color); // note: hexStr should be #rrggbb

      var hex = parseInt(this.color.substring(1), 16);
      var r = (hex & 0xff0000) >> 16;
      var g = (hex & 0x00ff00) >> 8;
      var b = hex & 0x0000ff;
      return [r, g, b, opacity].join(',');
    }
  }, {
    key: "getType",
    value: function getType() {
      return 'category';
    }
  }, {
    key: "getScore",
    value: function getScore() {
      return 0;
    }
  }, {
    key: "addCriterium",
    value: function addCriterium(criterium) {
      get_get(_getPrototypeOf(Category.prototype), "addChild", this).call(this, criterium);
    }
  }, {
    key: "removeCriterium",
    value: function removeCriterium(criterium) {
      get_get(_getPrototypeOf(Category.prototype), "removeChild", this).call(this, criterium);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        id: this.id,
        title: this.title,
        color: this.color,
        criteria: this._children
      };
    }
  }, {
    key: "criteria",
    get: function get() {
      return this.children.filter(function (child) {
        return child instanceof Criterium_Criterium;
      });
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(category) {
      var categoryObject;

      if (typeof category === 'string') {
        categoryObject = JSON.parse(category);
      } else {
        categoryObject = category;
      }

      var newCategory = new Category(categoryObject.title, categoryObject.id);
      newCategory.color = categoryObject.color;
      newCategory.id = categoryObject.id;
      var criteria = categoryObject.criteria.map(function (criteriumJsonObject) {
        return Criterium_Criterium.fromJSON(criteriumJsonObject);
      });
      criteria.forEach(function (criterium) {
        return criterium.parent = newCategory;
      }); // Note: Setting children directly loses the notifyAddChild behavior.

      newCategory._children = criteria;
      return newCategory;
    }
  }]);

  return Category;
}(TreeNode_TreeNode);


// CONCATENATED MODULE: ./src/Domain/Cluster.ts
















var Cluster_Cluster =
/*#__PURE__*/
function (_TreeNode) {
  _inherits(Cluster, _TreeNode);

  function Cluster() {
    var _this;

    _classCallCheck(this, Cluster);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Cluster).apply(this, arguments));
    _this.collapsed = false;
    return _this;
  }

  _createClass(Cluster, [{
    key: "getType",
    value: function getType() {
      return 'cluster';
    }
  }, {
    key: "getScore",
    value: function getScore() {
      return 0;
    }
  }, {
    key: "toggleCollapsed",
    value: function toggleCollapsed() {
      this.collapsed = !this.collapsed;
    }
  }, {
    key: "addCategory",
    value: function addCategory(category) {
      get_get(_getPrototypeOf(Cluster.prototype), "addChild", this).call(this, category);
    }
  }, {
    key: "addCriterium",
    value: function addCriterium(criterium) {
      get_get(_getPrototypeOf(Cluster.prototype), "addChild", this).call(this, criterium);
    }
  }, {
    key: "removeCriterium",
    value: function removeCriterium(criterium) {
      get_get(_getPrototypeOf(Cluster.prototype), "removeChild", this).call(this, criterium);
    }
  }, {
    key: "removeCategory",
    value: function removeCategory(category) {
      get_get(_getPrototypeOf(Cluster.prototype), "removeChild", this).call(this, category);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        id: this.id,
        title: this.title,
        categories: this.children.filter(function (child) {
          return child instanceof Category_Category;
        }).map(function (category) {
          return category.toJSON();
        }),
        criteria: this.children.filter(function (child) {
          return child instanceof Criterium_Criterium;
        }).map(function (criterium) {
          return criterium.toJSON();
        })
      };
    }
  }, {
    key: "criteria",
    get: function get() {
      return this.children.filter(function (child) {
        return child instanceof Criterium_Criterium;
      });
    }
  }, {
    key: "categories",
    get: function get() {
      return this.children.filter(function (child) {
        return child instanceof Category_Category;
      });
    }
  }, {
    key: "clusters",
    get: function get() {
      return this.children; //invariant garded at addChild
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(cluster) {
      var clusterObject;

      if (typeof cluster === 'string') {
        clusterObject = JSON.parse(cluster);
      } else {
        clusterObject = cluster;
      }

      var newCluster = new Cluster(clusterObject.title, clusterObject.id);
      var categories = clusterObject.categories.map(function (categoryJsonObject) {
        return Category_Category.fromJSON(categoryJsonObject);
      });
      var criteria = clusterObject.criteria.map(function (criteriumObject) {
        return Criterium_Criterium.fromJSON(criteriumObject);
      });
      var children = categories.concat(criteria);
      children.forEach(function (child) {
        return child.parent = newCluster;
      }); // Note: Setting children directly loses the notifyAddChild behavior.

      newCluster._children = children;
      return newCluster;
    }
  }]);

  return Cluster;
}(TreeNode_TreeNode);


// CONCATENATED MODULE: ./src/Domain/Level.ts







var Signal;

(function (Signal) {
  Signal[Signal["GREEN"] = 0] = "GREEN";
  Signal[Signal["ORANGE"] = 1] = "ORANGE";
  Signal[Signal["RED"] = 2] = "RED";
})(Signal || (Signal = {}));

var Level_Level =
/*#__PURE__*/
function () {
  function Level(title) {
    var description = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var score = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
    var signal = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Signal.GREEN;
    var isDefault = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var id = arguments.length > 5 ? arguments[5] : undefined;

    _classCallCheck(this, Level);

    this.title = title;
    this.description = description;
    this.score = score;
    this.signal = signal;
    this.isDefault = isDefault;
    if (!id) this.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15); // GUID
    else this.id = id;
  }

  _createClass(Level, [{
    key: "toString",
    value: function toString() {
      return "Level (id: ".concat(this.id, ", title: ").concat(this.title, ")");
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        id: this.id,
        title: this.title,
        description: this.description,
        score: this.score,
        is_default: this.isDefault
      };
    }
  }, {
    key: "is_default",
    get: function get() {
      return this.isDefault;
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(level) {
      var levelObject;

      if (typeof level === 'string') {
        levelObject = JSON.parse(level);
      } else {
        levelObject = level;
      }

      var newLevel = new Level(levelObject.title, levelObject.description, levelObject.score);
      newLevel.isDefault = levelObject.is_default;
      newLevel.id = levelObject.id;
      return newLevel;
    }
  }]);

  return Level;
}();


// CONCATENATED MODULE: ./src/Domain/Choice.ts



var Choice_Choice =
/*#__PURE__*/
function () {
  function Choice() {
    var selected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var feedback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    _classCallCheck(this, Choice);

    this.hasFixedScore = false;
    this.fixedScore_ = 10;
    this.selected = selected;
    this.feedback = feedback;
  } // @ts-ignore


  _createClass(Choice, [{
    key: "toJSON",
    value: function toJSON(criteriumId, levelId) {
      return {
        selected: this.selected,
        feedback: this.feedback,
        has_fixed_score: this.hasFixedScore,
        fixed_score: this.fixedScore,
        criterium_id: criteriumId,
        level_id: levelId
      };
    }
  }, {
    key: "fixedScore",
    get: function get() {
      return this.fixedScore_;
    } // @ts-ignore
    ,
    set: function set(v) {
      if (typeof v === 'number') {
        this.fixedScore_ = v;
      } else {
        this.fixedScore_ = parseFloat(v);
      }
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(choice) {
      var choiceObject;

      if (typeof choice === 'string') {
        choiceObject = JSON.parse(choice);
      } else {
        choiceObject = choice;
      }

      var newChoice = new Choice(choiceObject.selected, choiceObject.feedback);
      newChoice.hasFixedScore = choiceObject.has_fixed_score;
      newChoice.fixedScore = choiceObject.fixed_score;
      return newChoice;
    }
  }]);

  return Choice;
}();


Choice_Choice.FIXED_SCORE = 10;
// CONCATENATED MODULE: ./src/Domain/Rubric.ts




























var Rubric_Rubric =
/*#__PURE__*/
function (_TreeNode) {
  _inherits(Rubric, _TreeNode);

  function Rubric() {
    var _this;

    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var id = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, Rubric);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rubric).call(this, title, id));
    _this.useScores = true;
    _this.levels = [];
    _this.choices = new Map();
    _this.isRoot = true;
    return _this;
  }

  _createClass(Rubric, [{
    key: "getType",
    value: function getType() {
      return 'rubric';
    }
  }, {
    key: "addCluster",
    value: function addCluster(cluster) {
      this.addChild(cluster);
    }
  }, {
    key: "removeCluster",
    value: function removeCluster(cluster) {
      this.removeChild(cluster);
    }
  }, {
    key: "notifyAddChild",
    value: function notifyAddChild(treeNode) {
      var _this2 = this;

      if (treeNode instanceof Criterium_Criterium) {
        this.onCriteriumAdded(treeNode);
      } else {
        //if for example a cluster is added, we add any choices from criteria in that cluster. This could happen when bootstrapping from json data model
        var addedCriteria = this.getAllCriteria(treeNode);
        addedCriteria.forEach(function (criterium) {
          _this2.onCriteriumAdded(criterium);
        });
      } //no more bubbling

    }
  }, {
    key: "onCriteriumAdded",
    value: function onCriteriumAdded(criterium) {
      var _this3 = this;

      this.levels.forEach(function (level) {
        //choice already exists for criterium? Could be through json bootstrapping.
        var choice = _this3.findChoice(criterium, level);

        if (!choice) {
          choice = new Choice_Choice(false, "");
        }

        _this3.addChoice(choice, criterium.id, level.id);
      });
    }
  }, {
    key: "notifyRemoveChild",
    value: function notifyRemoveChild(parent, treeNode) {
      var _this4 = this;

      var criteriaToBeRemoved = this.getAllCriteria(treeNode);
      criteriaToBeRemoved.forEach(function (criterium) {
        return _this4.removeChoicesByCriterium(criterium);
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        id: this.id,
        useScores: this.useScores,
        title: this.title,
        levels: this.levels,
        clusters: this._children.map(function (cluster) {
          return cluster.toJSON();
        }),
        choices: this.getChoicesJSON()
      };
    }
  }, {
    key: "getChoicesJSON",
    value: function getChoicesJSON() {
      var choicesArray = [];
      this.choices.forEach(function (levelMap, criteriumId) {
        levelMap.forEach(function (choice, levelId) {
          choicesArray.push(choice.toJSON(criteriumId, levelId));
        });
      });
      return choicesArray;
    }
  }, {
    key: "addChoice",
    value: function addChoice(choice, criteriumId, levelId) {
      var criteriumChoices = this.choices.get(criteriumId);

      if (criteriumChoices === undefined) {
        criteriumChoices = new Map();
        this.choices.set(criteriumId, criteriumChoices);
      }

      criteriumChoices.set(levelId, choice);
    }
  }, {
    key: "removeChoicesByCriterium",
    value: function removeChoicesByCriterium(criterium) {
      this.choices.delete(criterium.id);
    }
  }, {
    key: "setChoicesCriteriumId",
    value: function setChoicesCriteriumId(oldId, newId) {
      var criteriumChoices = this.choices.get(oldId);

      if (criteriumChoices) {
        this.choices.delete(oldId);
        this.choices.set(newId, criteriumChoices);
      }
    }
  }, {
    key: "setChoicesLevelId",
    value: function setChoicesLevelId(oldId, newId) {
      var _this5 = this;

      this.getAllCriteria().forEach(function (criterium) {
        var criteriumChoices = _this5.choices.get(criterium.id);

        if (criteriumChoices) {
          var choice = criteriumChoices.get(oldId);

          if (choice) {
            criteriumChoices.delete(oldId);
            criteriumChoices.set(newId, choice);
          }
        }
      });
    }
  }, {
    key: "removeChoicesByLevel",
    value: function removeChoicesByLevel(level) {
      Array.from(this.choices.values()).forEach(function (levelChoices) {
        return levelChoices.delete(level.id);
      });
    }
  }, {
    key: "findChoice",
    value: function findChoice(criterium, level) {
      var criteriumChoices = this.choices.get(criterium.id);

      if (criteriumChoices === undefined) {
        return undefined;
      }

      return criteriumChoices.get(level.id);
    }
    /**
     * Invariant: to the outside world a choice is always available for a criterium and level of the rubric.
     * @param criterium
     * @param level
     */

  }, {
    key: "getChoice",
    value: function getChoice(criterium, level) {
      var choice = this.findChoice(criterium, level);

      if (!choice) {
        throw new Error("No choice found for criteria: ".concat(criterium, " and level: ").concat(level));
      }

      return choice;
    }
  }, {
    key: "addLevel",
    value: function addLevel(level) {
      var _this6 = this;

      this.levels.push(level);
      this.getAllCriteria().forEach(function (criterium) {
        _this6.addChoice(new Choice_Choice(false, ""), criterium.id, level.id);
      });
    }
  }, {
    key: "removeLevel",
    value: function removeLevel(level) {
      var index = this.levels.indexOf(level);
      this.levels.splice(index, 1);
      this.removeChoicesByLevel(level);
    }
  }, {
    key: "moveLevelDown",
    value: function moveLevelDown(level) {
      this.moveItemInArray(this.levels, this.levels.indexOf(level), this.levels.indexOf(level) + 1);
    }
  }, {
    key: "moveLevelUp",
    value: function moveLevelUp(level) {
      this.moveItemInArray(this.levels, this.levels.indexOf(level), this.levels.indexOf(level) - 1);
    }
  }, {
    key: "moveItemInArray",
    value: function moveItemInArray(array, from, to) {
      if (to >= array.length || from >= array.length) return;
      if (to < 0 || from < 0) return;
      array.splice(to, 0, array.splice(from, 1)[0]);
    }
  }, {
    key: "getChoiceScore",
    value: function getChoiceScore(criterium, level) {
      var choice = this.getChoice(criterium, level);
      if (choice.hasFixedScore) return choice.fixedScore;
      return Math.round(criterium.weight * level.score / 10) / 10;
    }
  }, {
    key: "getScore",
    value: function getScore() {
      return this._children.reduce(function (accumulator, currentTreeNode) {
        return accumulator + currentTreeNode.getScore();
      }, 0);
    }
  }, {
    key: "getMaximumScore",
    value: function getMaximumScore() {
      var _this7 = this;

      var maxScore = 0;
      this.getAllCriteria().forEach(function (criterium) {
        var levelScores = _this7.levels.map(function (level) {
          return _this7.getChoiceScore(criterium, level);
        });

        var max = levelScores.reduce(function (curr, score) {
          return Math.max(curr, score);
        }, 0);
        maxScore += max;
      });
      return maxScore;
    }
  }, {
    key: "getAllCriteria",
    value: function getAllCriteria() {
      var treeNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
      var criteria = [];
      this.getCriteriaRecursive(treeNode, criteria);
      return criteria;
    }
  }, {
    key: "getAllCategories",
    value: function getAllCategories() {
      var treeNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
      var categories = [];
      this.children.filter(function (child) {
        return child instanceof Category_Category;
      }).forEach(function (category) {
        return categories.push(category);
      });
      this.children.filter(function (child) {
        return child instanceof Cluster_Cluster;
      }).forEach(function (cluster) {
        return categories.push.apply(categories, _toConsumableArray(cluster.categories));
      });
      return categories;
    }
  }, {
    key: "getCriteriaRecursive",
    value: function getCriteriaRecursive(treeNode, criteria) {
      var _this8 = this;

      treeNode.children.filter(function (child) {
        return child instanceof Criterium_Criterium;
      }).forEach(function (criterium) {
        return criteria.push(criterium);
      });
      treeNode.children.filter(function (child) {
        return child.hasChildren();
      }).forEach(function (child) {
        return _this8.getCriteriaRecursive(child, criteria);
      });
    }
  }, {
    key: "clusters",
    get: function get() {
      return this.children; //invariant garded at addChild
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(rubric) {
      var _newRubric$levels;

      var rubricObject;

      if (typeof rubric === 'string') {
        rubricObject = JSON.parse(rubric);
      } else {
        rubricObject = rubric;
      }

      var newRubric = new Rubric(rubricObject.title, rubricObject.id);

      (_newRubric$levels = newRubric.levels).push.apply(_newRubric$levels, _toConsumableArray(rubricObject.levels.map(function (level) {
        return Level_Level.fromJSON(level);
      })));

      rubricObject.choices.forEach(function (rubricChoiceJsonObject) {
        newRubric.addChoice(Choice_Choice.fromJSON(rubricChoiceJsonObject), rubricChoiceJsonObject.criterium_id, rubricChoiceJsonObject.level_id);
      });
      var clusters = rubricObject.clusters.map(function (clusterJsonObject) {
        return Cluster_Cluster.fromJSON(clusterJsonObject);
      });
      clusters.forEach(function (cluster) {
        return cluster.parent = newRubric;
      }); // Note: Setting children directly loses the notifyAddChild behavior. So we have to perform the actions here.

      newRubric._children = clusters;
      newRubric.useScores = rubricObject.useScores;
      newRubric.getAllCriteria().forEach(function (criterium) {
        return newRubric.onCriteriumAdded(criterium);
      });
      return newRubric;
    }
  }]);

  return Rubric;
}(TreeNode_TreeNode);


// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Views/RubricDemoWrapper.vue?vue&type=template&id=1e78c6f6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('router-view')}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Views/RubricDemoWrapper.vue?vue&type=template&id=1e78c6f6&

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-property-decorator/node_modules/vue-class-component/dist/vue-class-component.esm.js
/**
  * vue-class-component v7.2.3
  * (c) 2015-present Evan You
  * @license MIT
  */


function vue_class_component_esm_typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    vue_class_component_esm_typeof = function (obj) {
      return typeof obj;
    };
  } else {
    vue_class_component_esm_typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return vue_class_component_esm_typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function vue_class_component_esm_toConsumableArray(arr) {
  return vue_class_component_esm_arrayWithoutHoles(arr) || vue_class_component_esm_iterableToArray(arr) || vue_class_component_esm_nonIterableSpread();
}

function vue_class_component_esm_arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function vue_class_component_esm_iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function vue_class_component_esm_nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
function reflectionIsSupported() {
  return typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
}
function copyReflectionMetadata(to, from) {
  forwardMetadata(to, from);
  Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
    forwardMetadata(to.prototype, from.prototype, key);
  });
  Object.getOwnPropertyNames(from).forEach(function (key) {
    forwardMetadata(to, from, key);
  });
}

function forwardMetadata(to, from, propertyKey) {
  var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);
  metaKeys.forEach(function (metaKey) {
    var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);

    if (propertyKey) {
      Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
    } else {
      Reflect.defineMetadata(metaKey, metadata, to);
    }
  });
}

var fakeArray = {
  __proto__: []
};
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
  return function (target, key, index) {
    var Ctor = typeof target === 'function' ? target : target.constructor;

    if (!Ctor.__decorators__) {
      Ctor.__decorators__ = [];
    }

    if (typeof index !== 'number') {
      index = undefined;
    }

    Ctor.__decorators__.push(function (options) {
      return factory(options, key, index);
    });
  };
}
function mixins() {
  for (var _len = arguments.length, Ctors = new Array(_len), _key = 0; _key < _len; _key++) {
    Ctors[_key] = arguments[_key];
  }

  return external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    mixins: Ctors
  });
}
function isPrimitive(value) {
  var type = vue_class_component_esm_typeof(value);

  return value == null || type !== 'object' && type !== 'function';
}
function warn(message) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-class-component] ' + message);
  }
}

function collectDataFromConstructor(vm, Component) {
  // override _init to prevent to init as Vue instance
  var originalInit = Component.prototype._init;

  Component.prototype._init = function () {
    var _this = this;

    // proxy to actual vm
    var keys = Object.getOwnPropertyNames(vm); // 2.2.0 compat (props are no longer exposed as self properties)

    if (vm.$options.props) {
      for (var key in vm.$options.props) {
        if (!vm.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
    }

    keys.forEach(function (key) {
      if (key.charAt(0) !== '_') {
        Object.defineProperty(_this, key, {
          get: function get() {
            return vm[key];
          },
          set: function set(value) {
            vm[key] = value;
          },
          configurable: true
        });
      }
    });
  }; // should be acquired class property values


  var data = new Component(); // restore original _init to avoid memory leak (#209)

  Component.prototype._init = originalInit; // create plain data object

  var plainData = {};
  Object.keys(data).forEach(function (key) {
    if (data[key] !== undefined) {
      plainData[key] = data[key];
    }
  });

  if (false) {}

  return plainData;
}

var $internalHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch' // 2.6
];
function componentFactory(Component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options.name = options.name || Component._componentTag || Component.name; // prototype props.

  var proto = Component.prototype;
  Object.getOwnPropertyNames(proto).forEach(function (key) {
    if (key === 'constructor') {
      return;
    } // hooks


    if ($internalHooks.indexOf(key) > -1) {
      options[key] = proto[key];
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(proto, key);

    if (descriptor.value !== void 0) {
      // methods
      if (typeof descriptor.value === 'function') {
        (options.methods || (options.methods = {}))[key] = descriptor.value;
      } else {
        // typescript decorated data
        (options.mixins || (options.mixins = [])).push({
          data: function data() {
            return _defineProperty({}, key, descriptor.value);
          }
        });
      }
    } else if (descriptor.get || descriptor.set) {
      // computed properties
      (options.computed || (options.computed = {}))[key] = {
        get: descriptor.get,
        set: descriptor.set
      };
    }
  });
  (options.mixins || (options.mixins = [])).push({
    data: function data() {
      return collectDataFromConstructor(this, Component);
    }
  }); // decorate options

  var decorators = Component.__decorators__;

  if (decorators) {
    decorators.forEach(function (fn) {
      return fn(options);
    });
    delete Component.__decorators__;
  } // find super


  var superProto = Object.getPrototypeOf(Component.prototype);
  var Super = superProto instanceof external_commonjs_vue_commonjs2_vue_root_Vue_default.a ? superProto.constructor : external_commonjs_vue_commonjs2_vue_root_Vue_default.a;
  var Extended = Super.extend(options);
  forwardStaticMembers(Extended, Component, Super);

  if (reflectionIsSupported()) {
    copyReflectionMetadata(Extended, Component);
  }

  return Extended;
}
var reservedPropertyNames = [// Unique id
'cid', // Super Vue constructor
'super', // Component options that will be used by the component
'options', 'superOptions', 'extendOptions', 'sealedOptions', // Private assets
'component', 'directive', 'filter'];
var shouldIgnore = {
  prototype: true,
  arguments: true,
  callee: true,
  caller: true
};

function forwardStaticMembers(Extended, Original, Super) {
  // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
  Object.getOwnPropertyNames(Original).forEach(function (key) {
    // Skip the properties that should not be overwritten
    if (shouldIgnore[key]) {
      return;
    } // Some browsers does not allow reconfigure built-in properties


    var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);

    if (extendedDescriptor && !extendedDescriptor.configurable) {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(Original, key); // If the user agent does not support `__proto__` or its family (IE <= 10),
    // the sub class properties may be inherited properties from the super class in TypeScript.
    // We need to exclude such properties to prevent to overwrite
    // the component options object which stored on the extended constructor (See #192).
    // If the value is a referenced value (object or function),
    // we can check equality of them and exclude it if they have the same reference.
    // If it is a primitive value, it will be forwarded for safety.

    if (!hasProto) {
      // Only `cid` is explicitly exluded from property forwarding
      // because we cannot detect whether it is a inherited property or not
      // on the no `__proto__` environment even though the property is reserved.
      if (key === 'cid') {
        return;
      }

      var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);

      if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {
        return;
      }
    } // Warn if the users manually declare reserved properties


    if (false) {}

    Object.defineProperty(Extended, key, descriptor);
  });
}

function vue_class_component_esm_Component(options) {
  if (typeof options === 'function') {
    return componentFactory(options);
  }

  return function (Component) {
    return componentFactory(Component, options);
  };
}

vue_class_component_esm_Component.registerHooks = function registerHooks(keys) {
  $internalHooks.push.apply($internalHooks, vue_class_component_esm_toConsumableArray(keys));
};

/* harmony default export */ var vue_class_component_esm = (vue_class_component_esm_Component);


// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-property-decorator/lib/vue-property-decorator.js
/** vue-property-decorator verson 8.2.2 MIT LICENSE copyright 2019 kaorun343 */
/// <reference types='reflect-metadata'/>




/** Used for keying reactive provide/inject properties */
var reactiveInjectKey = '__reactiveInject__';
/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}
/**
 * decorator of a reactive inject
 * @param from key
 * @return PropertyDecorator
 */
function InjectReactive(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            var fromKey_1 = !!options ? options.from || options : key;
            var defaultVal_1 = (!!options && options.default) || undefined;
            if (!componentOptions.computed)
                componentOptions.computed = {};
            componentOptions.computed[key] = function () {
                var obj = this[reactiveInjectKey];
                return obj ? obj[fromKey_1] : defaultVal_1;
            };
            componentOptions.inject[reactiveInjectKey] = reactiveInjectKey;
        }
    });
}
/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (typeof provide !== 'function' || !provide.managed) {
            var original_1 = componentOptions.provide;
            provide = componentOptions.provide = function () {
                var rv = Object.create((typeof original_1 === 'function' ? original_1.call(this) : original_1) ||
                    null);
                for (var i in provide.managed)
                    rv[provide.managed[i]] = this[i];
                return rv;
            };
            provide.managed = {};
        }
        provide.managed[k] = key || k;
    });
}
/**
 * decorator of a reactive provide
 * @param key key
 * @return PropertyDecorator | void
 */
function ProvideReactive(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        // inject parent reactive services (if any)
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject = componentOptions.inject || {};
            componentOptions.inject[reactiveInjectKey] = { from: reactiveInjectKey, default: {} };
        }
        if (typeof provide !== 'function' || !provide.managedReactive) {
            var original_2 = componentOptions.provide;
            provide = componentOptions.provide = function () {
                var _this = this;
                var rv = typeof original_2 === 'function'
                    ? original_2.call(this)
                    : original_2;
                rv = Object.create(rv || null);
                // set reactive services (propagates previous services if necessary)
                rv[reactiveInjectKey] = this[reactiveInjectKey] || {};
                var _loop_1 = function (i) {
                    rv[provide.managedReactive[i]] = this_1[i]; // Duplicates the behavior of `@Provide`
                    Object.defineProperty(rv[reactiveInjectKey], provide.managedReactive[i], {
                        enumerable: true,
                        get: function () { return _this[i]; },
                    });
                };
                var this_1 = this;
                for (var i in provide.managedReactive) {
                    _loop_1(i);
                }
                return rv;
            };
            provide.managedReactive = {};
        }
        provide.managedReactive[k] = key || k;
    });
}
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) &&
            typeof options !== 'function' &&
            typeof options.type === 'undefined') {
            options.type = Reflect.getMetadata('design:type', target, key);
        }
    }
}
/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
            componentOptions.model = { prop: k, event: event || k };
        })(target, key);
    };
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}
/**
 * decorator of a synced prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param options the options for the synced prop
 * @return PropertyDecorator | void
 */
function PropSync(propName, options) {
    if (options === void 0) { options = {}; }
    // @ts-ignore
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    // @ts-ignore
                    this.$emit("update:" + propName, value);
                },
            };
        })(target, key);
    };
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return createDecorator(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, key, descriptor) {
        key = hyphenate(key);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                if (returnValue !== undefined)
                    args.unshift(returnValue);
                _this.$emit.apply(_this, [event || key].concat(args));
            };
            var returnValue = original.apply(this, args);
            if (isPromise(returnValue)) {
                returnValue.then(function (returnValue) {
                    emit(returnValue);
                });
            }
            else {
                emit(returnValue);
            }
            return returnValue;
        };
    };
}
/**
 * decorator of a ref prop
 * @param refKey the ref key defined in template
 */
function Ref(refKey) {
    return createDecorator(function (options, key) {
        options.computed = options.computed || {};
        options.computed[key] = {
            cache: false,
            get: function () {
                return this.$refs[refKey || key];
            },
        };
    });
}
function isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Views/RubricDemoWrapper.vue?vue&type=script&lang=ts&







var RubricDemoWrappervue_type_script_lang_ts_RubricDemoWrapper =
/*#__PURE__*/
function (_Vue) {
  _inherits(RubricDemoWrapper, _Vue);

  function RubricDemoWrapper() {
    _classCallCheck(this, RubricDemoWrapper);

    return _possibleConstructorReturn(this, _getPrototypeOf(RubricDemoWrapper).apply(this, arguments));
  }

  return RubricDemoWrapper;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

RubricDemoWrappervue_type_script_lang_ts_RubricDemoWrapper = __decorate([vue_class_component_esm({
  name: 'rubric-demo-wrapper'
})], RubricDemoWrappervue_type_script_lang_ts_RubricDemoWrapper);
/* harmony default export */ var RubricDemoWrappervue_type_script_lang_ts_ = (RubricDemoWrappervue_type_script_lang_ts_RubricDemoWrapper);
// CONCATENATED MODULE: ./src/Views/RubricDemoWrapper.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Views_RubricDemoWrappervue_type_script_lang_ts_ = (RubricDemoWrappervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/Views/RubricDemoWrapper.vue?vue&type=style&index=0&lang=scss&
var RubricDemoWrappervue_type_style_index_0_lang_scss_ = __webpack_require__("bf4d");

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/Views/RubricDemoWrapper.vue






/* normalize component */

var component = normalizeComponent(
  Views_RubricDemoWrappervue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Views_RubricDemoWrapper = (component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Views/RubricBuilderWrapper.vue?vue&type=template&id=5481c88c&
var RubricBuilderWrappervue_type_template_id_5481c88c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid"},[_c('rubric-builder',{attrs:{"api-config":_vm.apiConfig,"rubric-data":_vm.convertedRubricData,"version":_vm.version,"ui-state":_vm.uiState}})],1)}
var RubricBuilderWrappervue_type_template_id_5481c88c_staticRenderFns = []


// CONCATENATED MODULE: ./src/Views/RubricBuilderWrapper.vue?vue&type=template&id=5481c88c&

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("250b");

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Views/RubricBuilder.vue?vue&type=template&id=ebf3f19e&
var RubricBuildervue_type_template_id_ebf3f19e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{'builder-app': _vm.$route.name === 'Builder', 'builder-app-levels': _vm.$route.name === 'BuilderLevels', 'builder-full-app': _vm.$route.name === 'BuilderFull'},attrs:{"id":"app"}},[_c('div',{staticClass:"app-header"},[_c('nav',{attrs:{"role":"navigation"}},[_c('ul',{staticClass:"app-header-menu"},[_c('li',{staticClass:"app-header-item"},[_c('router-link',{attrs:{"to":{ name: 'Builder' }}},[_c('span',{attrs:{"tabindex":"-1"}},[_vm._v("Rubric"+_vm._s(/*$t('builder')*/))])])],1),_c('li',{staticClass:"app-header-item"},[_c('router-link',{attrs:{"to":{ name: 'BuilderLevels' }}},[_c('span',{attrs:{"tabindex":"-1"}},[_vm._v("Niveaus"+_vm._s(/*$t('levels')*/))])])],1),_c('li',{staticClass:"app-header-item"},[_c('router-link',{attrs:{"to":{ name: 'BuilderFull' }}},[_c('span',{attrs:{"tabindex":"-1"}},[_vm._v("Snelle Feedback"+_vm._s(/*$t('builderfull')*/))])])],1)])]),_c('save-area',{attrs:{"data-connector":_vm.dataConnector}})],1),_c('div',{staticClass:"rubrics"},[_c('link',{attrs:{"rel":"stylesheet","href":"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"}}),(_vm.rubric)?_c('div',{staticClass:"rubrics-wrapper",class:{ 'rubrics-wrapper-levels': _vm.$route.name === 'BuilderLevels' }},[_c('router-view',{attrs:{"rubric":_vm.rubric,"data-connector":_vm.dataConnector,"selected-criterium":_vm.selectedCriterium,"ui-state":_vm.$route.name === 'Builder' ? _vm.uiState : null},on:{"criterium-selected":_vm.selectCriterium}})],1):_c('div',{staticClass:"app-container-loading"},[_c('p',[_vm._v("Loading Rubrics...")]),_vm._m(0)])])])}
var RubricBuildervue_type_template_id_ebf3f19e_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lds-ellipsis",attrs:{"aria-hidden":"true"}},[_c('div'),_c('div'),_c('div'),_c('div')])}]


// CONCATENATED MODULE: ./src/Views/RubricBuilder.vue?vue&type=template&id=ebf3f19e&

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("529c");

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/ScoreRubricView.vue?vue&type=template&id=3fa54a53&
var ScoreRubricViewvue_type_template_id_3fa54a53_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app-container",class:_vm.mainClass},[_c('div',{staticClass:"rubric-panes-wrapper"},[_c('div',{staticClass:"rubric-panes",class:{ 'criterium-selected': !!_vm.selectedCriterium },on:{"click":_vm.hideMenu,"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.hideMenu($event)}}},[_c('rubric-pane',{attrs:{"id":"view1","show-split-view":_vm.uiState.showSplitView,"rubric":_vm.rubric,"data-connector":_vm.dataConnector,"selected-cluster":_vm.selectedClusterView1,"other-selected-cluster":_vm.selectedClusterView2,"selected-criterium":_vm.selectedCriterium,"cluster-actions-enabled":_vm.newClusterDialogView === '',"category-actions-enabled":_vm.newCategoryDialogView === '',"menu-actions-id":_vm.menuActionsId,"is-editing":_vm.isEditing,"edit-category-color-id":_vm.editCategoryColorId,"drag-item-type":_vm.dragItemType,"draggable-disabled":_vm.draggableDisabled,"banned-for-drop":_vm.bannedForDrop},on:{"split-view-changed":function($event){_vm.uiState.showSplitView = $event},"cluster-selected":function($event){return _vm.onClusterSelected($event, 'view1')},"criterium-selected":_vm.selectCriterium,"dialog-new-cluster":function($event){_vm.newClusterDialogView = $event},"dialog-new-category":function($event){_vm.newCategoryDialogView = $event},"item-actions":function($event){return _vm.onItemActions($event)},"start-edit":_vm.onStartEdit,"finish-edit":_vm.onFinishEdit,"change-color":_vm.onChangeColor,"remove":_vm.showRemoveDialog,"color-picker":_vm.onColorPicker,"start-drag":_vm.startDrag,"end-drag":_vm.endDrag,"over-element":_vm.dragOverElement}}),_c('transition',{attrs:{"name":"selected-fade","mode":"out-in"}},[(_vm.uiState.showSplitView)?_c('rubric-pane',{attrs:{"id":"view2","rubric":_vm.rubric,"data-connector":_vm.dataConnector,"selected-cluster":_vm.selectedClusterView2,"other-selected-cluster":_vm.selectedClusterView1,"selected-criterium":_vm.selectedCriterium,"cluster-actions-enabled":_vm.newClusterDialogView === '',"category-actions-enabled":_vm.newCategoryDialogView === '',"menu-actions-id":_vm.menuActionsId,"is-editing":_vm.isEditing,"edit-category-color-id":_vm.editCategoryColorId,"drag-item-type":_vm.dragItemType,"draggable-disabled":_vm.draggableDisabled,"banned-for-drop":_vm.bannedForDrop},on:{"cluster-selected":function($event){return _vm.onClusterSelected($event, 'view2')},"criterium-selected":_vm.selectCriterium,"dialog-new-cluster":function($event){_vm.newClusterDialogView = $event},"dialog-new-category":function($event){_vm.newCategoryDialogView = $event},"item-actions":function($event){return _vm.onItemActions($event)},"start-edit":_vm.onStartEdit,"finish-edit":_vm.onFinishEdit,"change-color":_vm.onChangeColor,"remove":_vm.showRemoveDialog,"color-picker":_vm.onColorPicker,"start-drag":_vm.startDrag,"end-drag":_vm.endDrag,"over-element":_vm.dragOverElement}}):_vm._e()],1)],1)]),_c('transition',{attrs:{"name":"selected-fade","mode":"out-in"}},[(_vm.selectedCriterium)?_c('criterium-details-view',{attrs:{"rubric":_vm.rubric,"criterium":_vm.selectedCriterium},on:{"close":function($event){return _vm.selectCriterium(null)},"change-criterium":_vm.onChangeCriterium,"change-choice":_vm.onChangeChoice}}):_vm._e()],1),_c('remove-dialog',{attrs:{"remove-item":_vm.removeItem},on:{"remove":_vm.onRemoveItem,"cancel":_vm.hideRemoveDialog}})],1)}
var ScoreRubricViewvue_type_template_id_3fa54a53_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/ScoreRubricView.vue?vue&type=template&id=3fa54a53&

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("68be");

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("f347");

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/RubricPane.vue?vue&type=template&id=711660aa&
var RubricPanevue_type_template_id_711660aa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"clusters-wrapper",class:{ 'category-dragging': _vm.categoryDragging },attrs:{"id":("clusters-wrapper-" + _vm.id)}},[_c('button',{staticClass:"btn-collapse",class:{ 'collapse-open': _vm.showClusters },on:{"click":_vm.toggleShowClusters}},[_c('i',{staticClass:"fa fa-institution"}),_c('span',[_vm._v("Clusters")])]),_c('div',{staticClass:"clusters-collapse"},[_c('transition',{attrs:{"name":"clusters-slide"}},[_c('div',{key:_vm.showClusters ? 'open' : 'closed',staticClass:"clusters-view",class:{ 'no-drop': _vm.clusterDragging && _vm.bannedForDrop === (_vm.id + "_clusters"), 'collapse-closed': !_vm.showClusters, 'mod-separator': _vm.clusterActionsEnabled },on:{"mouseover":function($event){return _vm.dragMouseOver((_vm.id + "_clusters"))},"mouseout":_vm.dragMouseOut}},[(_vm.id === 'view1')?_c('split-view-button',{attrs:{"show-split-view":_vm.showSplitView},on:{"changed":function($event){return _vm.$emit('split-view-changed', $event)}}}):_vm._e(),_c('draggable',{staticClass:"rb-clusters",class:{ 'cluster-dragging': _vm.clusterDragging },attrs:{"handle":".handle","disabled":_vm.draggableDisabled,"id":(_vm.id + "_clusters"),"tag":"ul","group":"clusters","ghost-class":"ghost","list":_vm.clusters,"forceFallback":true,"animation":250,"move":_vm.onMoveCluster},on:{"start":function($event){return _vm.startDrag($event, 'cluster')},"end":_vm.endDrag,"change":_vm.onChangeCluster}},_vm._l((_vm.clusters),function(cluster,index){return _c('cluster-view',{key:(_vm.id + "_" + (cluster.id)),staticClass:"rb-cluster-list-item",attrs:{"tag":"li","id":(_vm.id + "_" + (cluster.id)),"cluster":cluster,"menu-actions-id":_vm.menuActionsId,"selected":_vm.isSelected(cluster)},on:{"cluster-selected":_vm.selectCluster,"item-actions":function($event){return _vm.$emit('item-actions', $event)},"remove":_vm.onRemove,"start-edit":function($event){return _vm.onStartEdit(cluster)},"finish-edit":function($event){
var i = arguments.length, argsArray = Array(i);
while ( i-- ) argsArray[i] = arguments[i];
return _vm.onFinishEdit.apply(void 0, [ cluster ].concat( argsArray ))}}})}),1),_c('new-cluster',{attrs:{"view-id":_vm.id,"actions-enabled":_vm.clusterActionsEnabled},on:{"dialog-view":function($event){return _vm.$emit('dialog-new-cluster', $event)},"cluster-added":_vm.addCluster}})],1)])],1),(_vm.selectedCluster)?_c('h1',{staticClass:"cluster-selected"},[_vm._v(_vm._s(_vm.selectedCluster.title))]):_vm._e(),_c('transition',{attrs:{"name":_vm.categoriesTransitionName,"mode":"out-in"}},[_c('div',{key:_vm.selectedCluster ? _vm.selectedCluster.id : 'none',ref:"cluster-content",staticClass:"cluster-content",class:{ 'no-drop': _vm.categoryDragging && _vm.bannedForDrop === (_vm.id + "_categories") },on:{"mouseover":function($event){_vm.categoryDragging && _vm.dragMouseOver((_vm.id + "_categories"))},"mouseout":function($event){_vm.categoryDragging && _vm.dragMouseOut}}},[_c('draggable',{staticClass:"rb-categories",attrs:{"disabled":_vm.draggableDisabled,"id":(_vm.id + "_categories"),"tag":"ul","group":"categories","handle":".category-handle","ghost-class":"ghost","list":_vm.categories,"forceFallback":true,"animation":250,"move":_vm.onMoveCategory},on:{"start":function($event){return _vm.startDrag($event, 'category')},"end":_vm.endDrag,"change":_vm.onChangeCategory}},[_vm._l((_vm.categories),function(category){return _c('li',{key:(_vm.id + "_" + (category.id)),staticClass:"rb-category",class:{ 'no-drop': _vm.criteriumDragging && _vm.bannedForDrop === (_vm.id + "_" + (category.id)) },style:({'--category-color': category.color}),attrs:{"id":(_vm.id + "_" + (category.id))},on:{"mouseover":function($event){_vm.criteriumDragging && _vm.dragMouseOver((_vm.id + "_" + (category.id)))},"mouseout":function($event){_vm.criteriumDragging && _vm.dragMouseOut}}},[_c('category-view',{key:(_vm.id + "_" + (category.id)),attrs:{"id":(_vm.id + "_" + (category.id)),"category":category,"menu-actions-id":_vm.menuActionsId,"edit-category-color-id":_vm.editCategoryColorId},on:{"color-picker":function($event){return _vm.$emit('color-picker', $event)},"item-actions":function($event){return _vm.$emit('item-actions', $event)},"remove":_vm.onRemove,"start-edit":function($event){return _vm.onStartEdit(category)},"finish-edit":function($event){
var i = arguments.length, argsArray = Array(i);
while ( i-- ) argsArray[i] = arguments[i];
return _vm.onFinishEdit.apply(void 0, [ category ].concat( argsArray ))},"change-color":function($event){return _vm.$emit('change-color', category)}}}),(category.criteria.length === 0 && !_vm.categoriesAddingCriterium[category.id] && !_vm.criteriumDragging)?_c('div',{staticClass:"criteria-empty-list"},[_vm._v("Nog geen criteria toegevoegd")]):_vm._e(),_c('draggable',{key:(_vm.id + "_" + (category.id) + "_draggable"),staticClass:"rb-criteria",attrs:{"disabled":_vm.draggableDisabled,"tag":"ul","group":"criteria","handle":".criterium-handle","ghost-class":"ghost","swapTreshold":"0.75","list":category.criteria,"forceFallback":true,"animation":250,"move":_vm.onMoveCriterium},on:{"start":function($event){return _vm.startDrag($event,'criterium')},"end":_vm.endDrag,"change":function($event){return _vm.onChangeCriterium($event, category)}}},_vm._l((category.criteria),function(criterium){return _c('criterium-view',{key:(_vm.id + "_" + (criterium.id)),staticClass:"rb-criterium-list-item",attrs:{"tag":"li","id":(_vm.id + "_" + (criterium.id)),"criterium":criterium,"menu-actions-id":_vm.menuActionsId,"selected":_vm.isSelected(criterium)},on:{"criterium-selected":_vm.selectCriterium,"item-actions":function($event){return _vm.$emit('item-actions', $event)},"remove":_vm.onRemove,"start-edit":function($event){return _vm.onStartEdit(criterium)},"finish-edit":function($event){
var i = arguments.length, argsArray = Array(i);
while ( i-- ) argsArray[i] = arguments[i];
return _vm.onFinishEdit.apply(void 0, [ criterium ].concat( argsArray ))}}})}),1),_c('new-criterium',{attrs:{"criterium-dragging":_vm.criteriumDragging},on:{"criterium-adding":function($event){return _vm.addingCriteriumForCategory(category, $event)},"criterium-added":function($event){return _vm.addCriterium(category, $event)}}})],1)}),(_vm.criteriumDragging)?_c('li',{staticClass:"rb-category null-category",attrs:{"slot":"footer"},slot:"footer"},[_c('div',{staticClass:"category-header"},[_c('div',{staticClass:"item-header-bar"},[_c('div',{staticClass:"rb-category-title"},[_c('h2',{staticClass:"title"},[_vm._v("Nieuwe lijst met criteria...")])])])]),_c('draggable',{staticClass:"rb-criteria",attrs:{"tag":"ul","group":"criteria","handle":".criterium-handle","ghost-class":"ghost","swapTreshold":"0.75","list":[],"forceFallback":true,"animation":250},on:{"end":_vm.endDrag,"change":_vm.onChangeCriteriumInCluster}})],1):(_vm.categories.length === 0)?_c('li',{staticClass:"no-category",attrs:{"slot":"footer"},slot:"footer"}):_vm._e()],2),(_vm.selectedCluster)?_c('new-category',{attrs:{"view-id":_vm.id,"actions-enabled":_vm.categoryActionsEnabled},on:{"dialog-view":function($event){return _vm.$emit('dialog-new-category', $event)},"category-added":_vm.addCategory}}):_vm._e()],1)])],1)}
var RubricPanevue_type_template_id_711660aa_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/RubricPane.vue?vue&type=template&id=711660aa&

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vuedraggable/dist/vuedraggable.common.js
var vuedraggable_common = __webpack_require__("6431");
var vuedraggable_common_default = /*#__PURE__*/__webpack_require__.n(vuedraggable_common);

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/ClusterView.vue?vue&type=template&id=53160bc0&
var ClusterViewvue_type_template_id_53160bc0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",attrs:{"id":_vm.id,"tabindex":"0"},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.$emit('cluster-selected', _vm.cluster)},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])){ return null; }return _vm.$emit('cluster-selected', _vm.cluster)},"click":function($event){$event.stopPropagation();return _vm.$emit('cluster-selected', _vm.cluster)}}},[_c('div',{staticClass:"rb-cluster handle cluster-handle",class:{ 'is-selected': _vm.selected, 'show-menu': _vm.showMenuActions },attrs:{"tabindex":"-1"}},[_c('div',{staticClass:"item-header-bar"},[_c('div',{staticClass:"rb-cluster-title",attrs:{"title":_vm.cluster.title},on:{"dblclick":_vm.startEditing}},[_vm._v(" "+_vm._s(_vm.cluster.title)+" ")]),_c('button',{staticClass:"item-actions",class:{'show-menu': _vm.showMenuActions},attrs:{"aria-label":"Klap menu uit"},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])){ return null; }$event.stopPropagation();},"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.stopPropagation();},"click":function($event){$event.preventDefault();$event.stopPropagation();return _vm.onItemActions($event)}}},[_c('i',{class:_vm.showMenuActions ? 'fa fa-close' : 'fa fa-ellipsis-h'})]),_c('div',{staticClass:"action-menu mod-menu-fixed",class:{'show-menu': _vm.showMenuActions },style:({ left: (_vm.menuX + "px"), top: (_vm.menuY + "px")})},[_c('ul',{staticClass:"action-menu-list"},[_c('li',{staticClass:"action-menu-list-item",attrs:{"role":"button","tabindex":"0"},on:{"click":function($event){$event.stopPropagation();return _vm.startEditing($event)},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.startEditing($event)}}},[_c('i',{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}}),_c('span',[_vm._v("Wijzig naam")])]),_c('li',{staticClass:"action-menu-list-item",attrs:{"role":"button","tabindex":"0"},on:{"click":function($event){$event.stopPropagation();return _vm.$emit('remove', _vm.cluster)},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.$emit('remove', _vm.cluster)}}},[_c('i',{staticClass:"fa fa-remove",attrs:{"aria-hidden":"true"}}),_c('span',[_vm._v("Verwijder")])])])])]),(_vm.isEditing)?_c('div',{staticClass:"edit-title"},[_c('div',{staticClass:"cover",on:{"click":function($event){$event.stopPropagation();}}}),_c('name-input',{staticClass:"item-new",attrs:{"ok-title":"Wijzig","placeholder":"Titel voor onderverdeling"},on:{"ok":_vm.finishEditing,"cancel":_vm.cancel},model:{value:(_vm.newTitle),callback:function ($$v) {_vm.newTitle=$$v},expression:"newTitle"}})],1):_vm._e()])])}
var ClusterViewvue_type_template_id_53160bc0_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/ClusterView.vue?vue&type=template&id=53160bc0&

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/NameInput.vue?vue&type=template&id=676d36c4&
var NameInputvue_type_template_id_676d36c4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"name-input",on:{"click":function($event){$event.stopPropagation();}}},[_c('div',{staticClass:"name-input-title"},[_c('textarea',{ref:"name-input",staticClass:"name-input-field mod-textarea",attrs:{"placeholder":_vm.placeholder},domProps:{"value":_vm.value},on:{"keyup":[_vm.onChange,function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.cancel($event)}],"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.ok($event)},"input":_vm.onInput}})]),_c('div',{staticClass:"name-input-actions"},[_c('button',{staticClass:"btn-strong mod-confirm",attrs:{"disabled":!(_vm.allowEmpty || _vm.hasInput)},on:{"click":_vm.ok}},[_vm._v(_vm._s(_vm.okTitle || 'OK'))]),_c('button',{staticClass:"btn-strong",on:{"click":_vm.cancel}},[_vm._v(_vm._s(_vm.cancelTitle || 'Annuleer'))])])])}
var NameInputvue_type_template_id_676d36c4_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/NameInput.vue?vue&type=template&id=676d36c4&

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/NameInput.vue?vue&type=script&lang=ts&








function updateHeight(elem) {
  elem.style.height = '';
  elem.style.height = "".concat(elem.scrollHeight, "px");
}

var NameInputvue_type_script_lang_ts_NameInput =
/*#__PURE__*/
function (_Vue) {
  _inherits(NameInput, _Vue);

  function NameInput() {
    var _this;

    _classCallCheck(this, NameInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NameInput).apply(this, arguments));
    _this.hasInput = false;
    return _this;
  }

  _createClass(NameInput, [{
    key: "ok",
    value: function ok() {
      if (!(this.hasInput || this.allowEmpty)) {
        return;
      }

      this.$emit('ok');
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.$emit('cancel');
    }
  }, {
    key: "clearInput",
    value: function clearInput() {
      this.$emit('input', '');
      this.hasInput = false;

      if (this.$refs['name-input']) {
        this.$refs['name-input'].focus();
      }
    }
  }, {
    key: "onInput",
    value: function onInput(event) {
      this.$emit('input', event.target.value);
      updateHeight(event.target);
    }
  }, {
    key: "onChange",
    value: function onChange() {
      if (this.$refs['name-input']) {
        this.hasInput = this.$refs['name-input'].value !== '';
      }
    }
  }, {
    key: "mounted",
    value: function mounted() {
      if (this.value) {
        this.hasInput = true;
      }

      if (this.$refs['name-input']) {
        this.$refs['name-input'].focus();
        /*if (this.value !== '') {
            updateHeight(this.$refs['name-input'] as HTMLElement);
        }*/
      }
    }
  }]);

  return NameInput;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop(), __metadata("design:type", String)], NameInputvue_type_script_lang_ts_NameInput.prototype, "placeholder", void 0);

__decorate([Prop(), __metadata("design:type", String)], NameInputvue_type_script_lang_ts_NameInput.prototype, "classname", void 0);

__decorate([Prop(), __metadata("design:type", String)], NameInputvue_type_script_lang_ts_NameInput.prototype, "value", void 0);

__decorate([Prop(), __metadata("design:type", String)], NameInputvue_type_script_lang_ts_NameInput.prototype, "okTitle", void 0);

__decorate([Prop(), __metadata("design:type", String)], NameInputvue_type_script_lang_ts_NameInput.prototype, "cancelTitle", void 0);

__decorate([Prop({
  default: false
}), __metadata("design:type", Boolean)], NameInputvue_type_script_lang_ts_NameInput.prototype, "allowEmpty", void 0);

NameInputvue_type_script_lang_ts_NameInput = __decorate([vue_class_component_esm({
  name: 'name-input',
  components: {}
})], NameInputvue_type_script_lang_ts_NameInput);
/* harmony default export */ var NameInputvue_type_script_lang_ts_ = (NameInputvue_type_script_lang_ts_NameInput);
// CONCATENATED MODULE: ./src/Components/NameInput.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Components_NameInputvue_type_script_lang_ts_ = (NameInputvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/Components/NameInput.vue





/* normalize component */

var NameInput_component = normalizeComponent(
  Components_NameInputvue_type_script_lang_ts_,
  NameInputvue_type_template_id_676d36c4_render,
  NameInputvue_type_template_id_676d36c4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Components_NameInput = (NameInput_component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/ClusterView.vue?vue&type=script&lang=ts&






var ClusterViewvue_type_script_lang_ts_a, ClusterViewvue_type_script_lang_ts_b;






var ClusterViewvue_type_script_lang_ts_ClusterView =
/*#__PURE__*/
function (_Vue) {
  _inherits(ClusterView, _Vue);

  function ClusterView() {
    var _this;

    _classCallCheck(this, ClusterView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ClusterView).apply(this, arguments));
    _this.isEditing = false;
    _this.oldTitle = '';
    _this.newTitle = '';
    _this.menuX = 0;
    _this.menuY = 0;
    return _this;
  }

  _createClass(ClusterView, [{
    key: "mounted",
    value: function mounted() {
      this.resetTitle();
    }
  }, {
    key: "onItemActions",
    value: function onItemActions(event) {
      this.$emit('item-actions', this.id);
      var rect = event.target.getBoundingClientRect();
      this.menuX = rect.x;
      this.menuY = rect.bottom + 36;
    }
  }, {
    key: "resetTitle",
    value: function resetTitle() {
      this.newTitle = this.cluster.title;
    }
  }, {
    key: "startEditing",
    value: function startEditing() {
      // todo: dataConnector: how to deal with updates?
      this.isEditing = true;
      this.oldTitle = this.cluster.title;
      this.$emit('start-edit');
    }
  }, {
    key: "finishEditing",
    value: function finishEditing() {
      var canceled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.$emit('finish-edit', this.newTitle, canceled);
      this.isEditing = false;
      this.oldTitle = '';
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.cluster.title = this.oldTitle;
      this.finishEditing(true);
      this.resetTitle();
    } // Because mounted() only occurs once, and this component keeps its own state, we have to check if the title has changed through an external update.

  }, {
    key: "onTitleChanged",
    value: function onTitleChanged() {
      this.resetTitle();
    }
  }, {
    key: "showMenuActions",
    get: function get() {
      return this.menuActionsId === this.id;
    }
  }]);

  return ClusterView;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: String,
  default: 'div'
}), __metadata("design:type", typeof (ClusterViewvue_type_script_lang_ts_a = typeof String !== "undefined" && String) === "function" ? ClusterViewvue_type_script_lang_ts_a : Object)], ClusterViewvue_type_script_lang_ts_ClusterView.prototype, "tag", void 0);

__decorate([Prop({
  type: String,
  required: true
}), __metadata("design:type", String)], ClusterViewvue_type_script_lang_ts_ClusterView.prototype, "id", void 0);

__decorate([Prop({
  type: String,
  required: true
}), __metadata("design:type", String)], ClusterViewvue_type_script_lang_ts_ClusterView.prototype, "menuActionsId", void 0);

__decorate([Prop({
  type: Boolean,
  required: true
}), __metadata("design:type", Boolean)], ClusterViewvue_type_script_lang_ts_ClusterView.prototype, "selected", void 0);

__decorate([Prop({
  type: Cluster_Cluster,
  required: true
}), __metadata("design:type", typeof (ClusterViewvue_type_script_lang_ts_b = typeof Cluster_Cluster !== "undefined" && Cluster_Cluster) === "function" ? ClusterViewvue_type_script_lang_ts_b : Object)], ClusterViewvue_type_script_lang_ts_ClusterView.prototype, "cluster", void 0);

__decorate([Watch('cluster.title'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], ClusterViewvue_type_script_lang_ts_ClusterView.prototype, "onTitleChanged", null);

ClusterViewvue_type_script_lang_ts_ClusterView = __decorate([vue_class_component_esm({
  name: 'cluster-view',
  components: {
    NameInput: Components_NameInput
  }
})], ClusterViewvue_type_script_lang_ts_ClusterView);
/* harmony default export */ var ClusterViewvue_type_script_lang_ts_ = (ClusterViewvue_type_script_lang_ts_ClusterView);
// CONCATENATED MODULE: ./src/Components/ClusterView.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Components_ClusterViewvue_type_script_lang_ts_ = (ClusterViewvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/Components/ClusterView.vue





/* normalize component */

var ClusterView_component = normalizeComponent(
  Components_ClusterViewvue_type_script_lang_ts_,
  ClusterViewvue_type_template_id_53160bc0_render,
  ClusterViewvue_type_template_id_53160bc0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Components_ClusterView = (ClusterView_component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/CategoryView.vue?vue&type=template&id=c835d7a4&
var CategoryViewvue_type_template_id_c835d7a4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"category-header handle category-handle",class:{ 'null-category': !_vm.category.title },attrs:{"id":_vm.id}},[_c('div',{staticClass:"item-header-bar"},[_c('div',{staticClass:"rb-category-title"},[(_vm.category.title)?_c('button',{staticClass:"btn-color",class:{ 'xvue-swatches__diagonal': _vm.category.color === '' },style:({'background-color': _vm.category.color || 'transparent'}),attrs:{"aria-label":("Color Picker voor " + (_vm.category.title || 'Criteria')),"aria-expanded":_vm.isColorPickerOpened ? 'true' : 'false',"aria-controls":_vm.id + '--swatches'},on:{"click":function($event){return _vm.openColorPickerForCategory(_vm.category)}}}):_vm._e(),_c('h2',{staticClass:"title",on:{"dblclick":function($event){$event.stopPropagation();return _vm.startEditing($event)}}},[_vm._v(_vm._s(_vm.category.title || 'Lijst met criteria'))])]),_c('button',{staticClass:"item-actions",class:{'show-menu': _vm.showMenuActions},on:{"click":function($event){$event.stopPropagation();return _vm.$emit('item-actions', _vm.id)}}},[_c('i',{class:_vm.showMenuActions ? 'fa fa-close' : 'fa fa-ellipsis-h'})]),_c('div',{staticClass:"action-menu",class:{'show-menu': _vm.showMenuActions}},[_c('ul',{staticClass:"action-menu-list"},[_c('li',{staticClass:"action-menu-list-item",attrs:{"tabindex":"0"},on:{"click":function($event){$event.stopPropagation();return _vm.startEditing($event)},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.startEditing($event)}}},[_c('i',{staticClass:"fa fa-pencil"}),_c('span',[_vm._v(_vm._s(_vm.category.title ? 'Wijzig naam' : 'Wijzig naar categorie'))])]),_c('li',{staticClass:"action-menu-list-item",attrs:{"tabindex":"0"},on:{"click":function($event){$event.stopPropagation();return _vm.$emit('remove', _vm.category)},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.$emit('remove', _vm.category)}}},[_c('i',{staticClass:"fa fa-remove"}),_c('span',[_vm._v("Verwijder")])])])])]),(_vm.isColorPickerOpened)?_c('swatches',{attrs:{"id":_vm.id + '--swatches',"swatches":_vm.swatchColors,"background-color":"transparent","show-border":"","swatch-size":"20","inline":""},on:{"input":_vm.closeColorPicker},model:{value:(_vm.category.color),callback:function ($$v) {_vm.$set(_vm.category, "color", $$v)},expression:"category.color"}}):_vm._e(),(_vm.isEditing)?_c('div',{staticClass:"edit-title"},[_c('div',{staticClass:"cover"}),_c('name-input',{staticClass:"item-new",attrs:{"ok-title":"Wijzig","allow-empty":"true","placeholder":"Titel voor categorie"},on:{"ok":_vm.finishEditing,"cancel":_vm.cancel},model:{value:(_vm.newTitle),callback:function ($$v) {_vm.newTitle=$$v},expression:"newTitle"}})],1):_vm._e()],1)}
var CategoryViewvue_type_template_id_c835d7a4_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/CategoryView.vue?vue&type=template&id=c835d7a4&

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-swatches/dist/vue-swatches.umd.min.js
var vue_swatches_umd_min = __webpack_require__("dca4");
var vue_swatches_umd_min_default = /*#__PURE__*/__webpack_require__.n(vue_swatches_umd_min);

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/CategoryView.vue?vue&type=script&lang=ts&






var CategoryViewvue_type_script_lang_ts_a;







var CategoryViewvue_type_script_lang_ts_CategoryView =
/*#__PURE__*/
function (_Vue) {
  _inherits(CategoryView, _Vue);

  function CategoryView() {
    var _this;

    _classCallCheck(this, CategoryView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CategoryView).apply(this, arguments));
    _this.isEditing = false;
    _this.oldTitle = '';
    _this.newTitle = ''; // Color palette generated with http://medialab.github.io/iwanthue/

    _this.swatchColors = ['', '#5e318e', '#bd002f', '#b10099', '#1c5ce2', '#00943e', '#0182ed', '#ff2b84', '#e76f01', '#c58d00', '#ff9385', '#b7aaff', '#a4c592', '#56e9c2', '#56ee7a', '#e8d275'];
    return _this;
  }

  _createClass(CategoryView, [{
    key: "mounted",
    value: function mounted() {
      this.resetTitle();
    }
  }, {
    key: "resetTitle",
    value: function resetTitle() {
      this.newTitle = this.category.title;
    }
  }, {
    key: "openColorPickerForCategory",
    value: function openColorPickerForCategory(category) {
      var id = category ? this.id : '';
      this.$emit('color-picker', this.editCategoryColorId !== id ? id : '');
    }
  }, {
    key: "closeColorPicker",
    value: function closeColorPicker() {
      var _this2 = this;

      window.setTimeout(function () {
        return _this2.openColorPickerForCategory(null);
      }, 400);
    }
  }, {
    key: "startEditing",
    value: function startEditing() {
      this.isEditing = true;
      this.oldTitle = this.category.title;
      this.$emit('start-edit');
    }
  }, {
    key: "finishEditing",
    value: function finishEditing() {
      var canceled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.isEditing = false;
      this.oldTitle = '';
      this.$emit('finish-edit', this.newTitle, canceled);
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.category.title = this.oldTitle;
      this.finishEditing(true);
      this.resetTitle();
    } // Because mounted() only occurs once, and this component keeps its own state, we have to check if the title has changed through an external update.

  }, {
    key: "onTitleChanged",
    value: function onTitleChanged() {
      this.resetTitle();
    }
  }, {
    key: "onColorChanged",
    value: function onColorChanged() {
      this.$emit('change-color');
    }
  }, {
    key: "showMenuActions",
    get: function get() {
      return this.menuActionsId === this.id;
    }
  }, {
    key: "isColorPickerOpened",
    get: function get() {
      if (this.editCategoryColorId === '') {
        return false;
      }

      return this.id === this.editCategoryColorId;
    }
  }]);

  return CategoryView;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: String,
  required: true
}), __metadata("design:type", String)], CategoryViewvue_type_script_lang_ts_CategoryView.prototype, "id", void 0);

__decorate([Prop({
  type: String,
  required: true
}), __metadata("design:type", String)], CategoryViewvue_type_script_lang_ts_CategoryView.prototype, "menuActionsId", void 0);

__decorate([Prop({
  type: String,
  required: true
}), __metadata("design:type", String)], CategoryViewvue_type_script_lang_ts_CategoryView.prototype, "editCategoryColorId", void 0);

__decorate([Prop({
  type: Category_Category,
  required: true
}), __metadata("design:type", typeof (CategoryViewvue_type_script_lang_ts_a = typeof Category_Category !== "undefined" && Category_Category) === "function" ? CategoryViewvue_type_script_lang_ts_a : Object)], CategoryViewvue_type_script_lang_ts_CategoryView.prototype, "category", void 0);

__decorate([Watch('category.title'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], CategoryViewvue_type_script_lang_ts_CategoryView.prototype, "onTitleChanged", null);

__decorate([Watch('category.color'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], CategoryViewvue_type_script_lang_ts_CategoryView.prototype, "onColorChanged", null);

CategoryViewvue_type_script_lang_ts_CategoryView = __decorate([vue_class_component_esm({
  name: 'category-view',
  components: {
    NameInput: Components_NameInput,
    Swatches: vue_swatches_umd_min_default.a
  }
})], CategoryViewvue_type_script_lang_ts_CategoryView);
/* harmony default export */ var CategoryViewvue_type_script_lang_ts_ = (CategoryViewvue_type_script_lang_ts_CategoryView);
// CONCATENATED MODULE: ./src/Components/CategoryView.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Components_CategoryViewvue_type_script_lang_ts_ = (CategoryViewvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/Components/CategoryView.vue





/* normalize component */

var CategoryView_component = normalizeComponent(
  Components_CategoryViewvue_type_script_lang_ts_,
  CategoryViewvue_type_template_id_c835d7a4_render,
  CategoryViewvue_type_template_id_c835d7a4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Components_CategoryView = (CategoryView_component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/CriteriumView.vue?vue&type=template&id=3582500c&
var CriteriumViewvue_type_template_id_3582500c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"handle criterium-handle",attrs:{"id":_vm.id}},[_c('div',{staticClass:"rb-criterium",class:{ 'is-selected': _vm.selected }},[_c('div',{staticClass:"item-header-bar"},[_c('div',{staticClass:"rb-criterium-title",attrs:{"tabindex":"0"},on:{"click":function($event){return _vm.$emit('criterium-selected', _vm.criterium)},"dblclick":function($event){$event.stopPropagation();return _vm.startEditing($event)},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.$emit('criterium-selected', _vm.criterium)}}},[_c('h3',{staticClass:"title",attrs:{"tabindex":"-1"}},[_vm._v(_vm._s(_vm.criterium.title))])]),_c('button',{staticClass:"item-actions",class:{'show-menu': _vm.showMenuActions},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])){ return null; }$event.stopPropagation();},"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.stopPropagation();},"click":function($event){$event.stopPropagation();return _vm.$emit('item-actions', _vm.id)}}},[_c('i',{class:_vm.showMenuActions ? 'fa fa-close' : 'fa fa-ellipsis-h'})]),_c('div',{staticClass:"action-menu",class:{'show-menu': _vm.showMenuActions}},[_c('ul',{staticClass:"action-menu-list"},[_c('li',{staticClass:"action-menu-list-item menu-list-item-details",attrs:{"tabindex":"0"},on:{"click":function($event){return _vm.$emit('criterium-selected', _vm.criterium)},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.$emit('criterium-selected', _vm.criterium)}}},[_c('i',{staticClass:"fa fa-search"}),_c('span',[_vm._v("Details")])]),_c('li',{staticClass:"action-menu-list-item",attrs:{"tabindex":"0"},on:{"click":function($event){$event.stopPropagation();return _vm.startEditing($event)},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.startEditing($event)}}},[_c('i',{staticClass:"fa fa-pencil"}),_c('span',[_vm._v("Wijzig naam")])]),_c('li',{staticClass:"action-menu-list-item",attrs:{"tabindex":"0"},on:{"click":function($event){$event.stopPropagation();return _vm.$emit('remove', _vm.criterium)},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.$emit('remove', _vm.criterium)}}},[_c('i',{staticClass:"fa fa-remove"}),_c('span',[_vm._v("Verwijder")])])])])]),(_vm.isEditing)?_c('div',{staticClass:"edit-title"},[_c('div',{staticClass:"cover"}),_c('name-input',{staticClass:"item-new",attrs:{"ok-title":"Wijzig","placeholder":"Titel voor criterium"},on:{"ok":_vm.finishEditing,"cancel":_vm.cancel},model:{value:(_vm.newTitle),callback:function ($$v) {_vm.newTitle=$$v},expression:"newTitle"}})],1):_vm._e()])])}
var CriteriumViewvue_type_template_id_3582500c_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/CriteriumView.vue?vue&type=template&id=3582500c&

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/CriteriumView.vue?vue&type=script&lang=ts&






var CriteriumViewvue_type_script_lang_ts_a, CriteriumViewvue_type_script_lang_ts_b;






var CriteriumViewvue_type_script_lang_ts_CriteriumView =
/*#__PURE__*/
function (_Vue) {
  _inherits(CriteriumView, _Vue);

  function CriteriumView() {
    var _this;

    _classCallCheck(this, CriteriumView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CriteriumView).apply(this, arguments));
    _this.isEditing = false;
    _this.oldTitle = '';
    _this.newTitle = '';
    return _this;
  }

  _createClass(CriteriumView, [{
    key: "mounted",
    value: function mounted() {
      this.resetTitle();
    }
  }, {
    key: "resetTitle",
    value: function resetTitle() {
      this.newTitle = this.criterium.title;
    }
  }, {
    key: "startEditing",
    value: function startEditing() {
      // todo: dataConnector: how to deal with updates?
      this.isEditing = true;
      this.oldTitle = this.criterium.title;
      this.$emit('start-edit');
    }
  }, {
    key: "finishEditing",
    value: function finishEditing() {
      var canceled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.isEditing = false;
      this.oldTitle = '';
      this.$emit('finish-edit', this.newTitle, canceled);
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.criterium.title = this.oldTitle;
      this.finishEditing(true);
      this.resetTitle();
    } // Because mounted() only occurs once, and this component keeps its own state, we have to check if the title has changed through an external update.

  }, {
    key: "onTitleChanged",
    value: function onTitleChanged() {
      this.resetTitle();
    }
  }, {
    key: "showMenuActions",
    get: function get() {
      return this.menuActionsId === this.id;
    }
  }]);

  return CriteriumView;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: String,
  required: true
}), __metadata("design:type", String)], CriteriumViewvue_type_script_lang_ts_CriteriumView.prototype, "id", void 0);

__decorate([Prop({
  type: String,
  default: 'div'
}), __metadata("design:type", typeof (CriteriumViewvue_type_script_lang_ts_a = typeof String !== "undefined" && String) === "function" ? CriteriumViewvue_type_script_lang_ts_a : Object)], CriteriumViewvue_type_script_lang_ts_CriteriumView.prototype, "tag", void 0);

__decorate([Prop({
  type: String,
  required: true
}), __metadata("design:type", String)], CriteriumViewvue_type_script_lang_ts_CriteriumView.prototype, "menuActionsId", void 0);

__decorate([Prop({
  type: Boolean,
  required: true
}), __metadata("design:type", Boolean)], CriteriumViewvue_type_script_lang_ts_CriteriumView.prototype, "selected", void 0);

__decorate([Prop({
  type: Criterium_Criterium,
  required: true
}), __metadata("design:type", typeof (CriteriumViewvue_type_script_lang_ts_b = typeof Criterium_Criterium !== "undefined" && Criterium_Criterium) === "function" ? CriteriumViewvue_type_script_lang_ts_b : Object)], CriteriumViewvue_type_script_lang_ts_CriteriumView.prototype, "criterium", void 0);

__decorate([Watch('criterium.title'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], CriteriumViewvue_type_script_lang_ts_CriteriumView.prototype, "onTitleChanged", null);

CriteriumViewvue_type_script_lang_ts_CriteriumView = __decorate([vue_class_component_esm({
  name: 'criterium-view',
  components: {
    NameInput: Components_NameInput
  }
})], CriteriumViewvue_type_script_lang_ts_CriteriumView);
/* harmony default export */ var CriteriumViewvue_type_script_lang_ts_ = (CriteriumViewvue_type_script_lang_ts_CriteriumView);
// CONCATENATED MODULE: ./src/Components/CriteriumView.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Components_CriteriumViewvue_type_script_lang_ts_ = (CriteriumViewvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/Components/CriteriumView.vue





/* normalize component */

var CriteriumView_component = normalizeComponent(
  Components_CriteriumViewvue_type_script_lang_ts_,
  CriteriumViewvue_type_template_id_3582500c_render,
  CriteriumViewvue_type_template_id_3582500c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Components_CriteriumView = (CriteriumView_component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/NewCluster.vue?vue&type=template&id=ce3fca4c&
var NewClustervue_type_template_id_ce3fca4c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"actions"},[(_vm.inputFormShown)?_c('div',[_c('name-input',{staticClass:"cluster-new item-new",attrs:{"ok-title":"Voeg Toe","placeholder":"Titel voor nieuwe onderverdeling"},on:{"ok":_vm.addNewCluster,"cancel":_vm.cancel},model:{value:(_vm.newCluster.title),callback:function ($$v) {_vm.$set(_vm.newCluster, "title", $$v)},expression:"newCluster.title"}})],1):_c('button',{staticClass:"btn-new",attrs:{"disabled":!_vm.actionsEnabled},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.blockEnterUp($event)},"click":_vm.createNewCluster}},[_vm._v("Onderdeel toevoegen")])])}
var NewClustervue_type_template_id_ce3fca4c_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/NewCluster.vue?vue&type=template&id=ce3fca4c&

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/NewCluster.vue?vue&type=script&lang=ts&










var NewClustervue_type_script_lang_ts_NewCluster =
/*#__PURE__*/
function (_Vue) {
  _inherits(NewCluster, _Vue);

  function NewCluster() {
    var _this;

    _classCallCheck(this, NewCluster);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NewCluster).apply(this, arguments));
    _this.newCluster = null;
    _this.blockKeyUpEnter = false;
    return _this;
  }

  _createClass(NewCluster, [{
    key: "createNewCluster",
    value: function createNewCluster() {
      this.newCluster = new Cluster_Cluster();
      this.emit(this.viewId);
    }
  }, {
    key: "blockEnterUp",
    value: function blockEnterUp() {
      this.blockKeyUpEnter = true;
    }
  }, {
    key: "checkAndReleaseBlockEnterUp",
    value: function checkAndReleaseBlockEnterUp() {
      if (this.blockKeyUpEnter) {
        this.blockKeyUpEnter = false;
        return true;
      }

      return false;
    }
  }, {
    key: "addNewCluster",
    value: function addNewCluster() {
      if (this.checkAndReleaseBlockEnterUp()) {
        return;
      }

      this.$emit('cluster-added', this.newCluster);
      this.cancel();
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.newCluster = null;
      this.emit('');
    }
  }, {
    key: "emit",
    value: function emit(value) {
      if (this.viewId !== null) {
        this.$emit('dialog-view', value);
      }
    }
  }, {
    key: "inputFormShown",
    get: function get() {
      return this.newCluster !== null;
    }
  }]);

  return NewCluster;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: String,
  default: null
}), __metadata("design:type", Object)], NewClustervue_type_script_lang_ts_NewCluster.prototype, "viewId", void 0);

__decorate([Prop({
  type: Boolean,
  default: true
}), __metadata("design:type", Boolean)], NewClustervue_type_script_lang_ts_NewCluster.prototype, "actionsEnabled", void 0);

NewClustervue_type_script_lang_ts_NewCluster = __decorate([vue_class_component_esm({
  name: 'new-cluster',
  components: {
    NameInput: Components_NameInput
  }
})], NewClustervue_type_script_lang_ts_NewCluster);
/* harmony default export */ var NewClustervue_type_script_lang_ts_ = (NewClustervue_type_script_lang_ts_NewCluster);
// CONCATENATED MODULE: ./src/Components/NewCluster.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Components_NewClustervue_type_script_lang_ts_ = (NewClustervue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/Components/NewCluster.vue





/* normalize component */

var NewCluster_component = normalizeComponent(
  Components_NewClustervue_type_script_lang_ts_,
  NewClustervue_type_template_id_ce3fca4c_render,
  NewClustervue_type_template_id_ce3fca4c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Components_NewCluster = (NewCluster_component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/NewCategory.vue?vue&type=template&id=023ca596&
var NewCategoryvue_type_template_id_023ca596_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.inputFormShown)?_c('div',{staticClass:"category-name-input"},[_c('name-input',{staticClass:"category-new item-new",attrs:{"ok-title":"Voeg Toe","placeholder":"Titel voor nieuwe categorie"},on:{"ok":_vm.addNewCategory,"cancel":_vm.cancel},model:{value:(_vm.newCategory.title),callback:function ($$v) {_vm.$set(_vm.newCategory, "title", $$v)},expression:"newCategory.title"}})],1):_c('div',{staticClass:"actions"},[_c('button',{staticClass:"btn-new mod-category-add",attrs:{"disabled":!_vm.actionsEnabled},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.blockEnterUp($event)},"click":_vm.createNewCategory}},[_vm._v("Categorie toevoegen")])])}
var NewCategoryvue_type_template_id_023ca596_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/NewCategory.vue?vue&type=template&id=023ca596&

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/NewCategory.vue?vue&type=script&lang=ts&










var NewCategoryvue_type_script_lang_ts_NewCategory =
/*#__PURE__*/
function (_Vue) {
  _inherits(NewCategory, _Vue);

  function NewCategory() {
    var _this;

    _classCallCheck(this, NewCategory);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NewCategory).apply(this, arguments));
    _this.newCategory = null;
    _this.blockKeyUpEnter = false;
    return _this;
  }

  _createClass(NewCategory, [{
    key: "createNewCategory",
    value: function createNewCategory() {
      this.newCategory = new Category_Category();
      this.newCategory.color = '';
      this.emit(this.viewId);
    }
  }, {
    key: "blockEnterUp",
    value: function blockEnterUp() {
      this.blockKeyUpEnter = true;
    }
  }, {
    key: "checkAndReleaseBlockEnterUp",
    value: function checkAndReleaseBlockEnterUp() {
      if (this.blockKeyUpEnter) {
        this.blockKeyUpEnter = false;
        return true;
      }

      return false;
    }
  }, {
    key: "addNewCategory",
    value: function addNewCategory() {
      if (this.checkAndReleaseBlockEnterUp()) {
        return;
      }

      this.$emit('category-added', this.newCategory);
      this.cancel();
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.newCategory = null;
      this.emit('');
    }
  }, {
    key: "emit",
    value: function emit(value) {
      if (this.viewId !== null) {
        this.$emit('dialog-view', value);
      }
    }
  }, {
    key: "inputFormShown",
    get: function get() {
      return this.newCategory !== null;
    }
  }]);

  return NewCategory;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: String,
  default: null
}), __metadata("design:type", Object)], NewCategoryvue_type_script_lang_ts_NewCategory.prototype, "viewId", void 0);

__decorate([Prop({
  type: Boolean,
  default: true
}), __metadata("design:type", Boolean)], NewCategoryvue_type_script_lang_ts_NewCategory.prototype, "actionsEnabled", void 0);

NewCategoryvue_type_script_lang_ts_NewCategory = __decorate([vue_class_component_esm({
  name: 'new-category',
  components: {
    NameInput: Components_NameInput
  }
})], NewCategoryvue_type_script_lang_ts_NewCategory);
/* harmony default export */ var NewCategoryvue_type_script_lang_ts_ = (NewCategoryvue_type_script_lang_ts_NewCategory);
// CONCATENATED MODULE: ./src/Components/NewCategory.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Components_NewCategoryvue_type_script_lang_ts_ = (NewCategoryvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/Components/NewCategory.vue





/* normalize component */

var NewCategory_component = normalizeComponent(
  Components_NewCategoryvue_type_script_lang_ts_,
  NewCategoryvue_type_template_id_023ca596_render,
  NewCategoryvue_type_template_id_023ca596_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Components_NewCategory = (NewCategory_component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/NewCriterium.vue?vue&type=template&id=c8d050d8&
var NewCriteriumvue_type_template_id_c8d050d8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.inputFormShown)?_c('div',[_c('name-input',{ref:"name-input",staticClass:"criterium-new item-new",attrs:{"ok-title":"Voeg Toe","placeholder":"Titel voor nieuw criterium"},on:{"ok":_vm.addNewCriterium,"cancel":_vm.cancel},model:{value:(_vm.newCriterium.title),callback:function ($$v) {_vm.$set(_vm.newCriterium, "title", $$v)},expression:"newCriterium.title"}})],1):_c('div',{staticClass:"actions",class:{criteriumDragging: _vm.criteriumDragging}},[_c('button',{staticClass:"btn-new",attrs:{"disabled":!_vm.actionsEnabled},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.blockEnterUp($event)},"click":_vm.createNewCriterium}},[_vm._v("Criterium toevoegen")])])}
var NewCriteriumvue_type_template_id_c8d050d8_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/NewCriterium.vue?vue&type=template&id=c8d050d8&

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/NewCriterium.vue?vue&type=script&lang=ts&










var NewCriteriumvue_type_script_lang_ts_NewCriterium =
/*#__PURE__*/
function (_Vue) {
  _inherits(NewCriterium, _Vue);

  function NewCriterium() {
    var _this;

    _classCallCheck(this, NewCriterium);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NewCriterium).apply(this, arguments));
    _this.newCriterium = null;
    _this.blockKeyUpEnter = false;
    return _this;
  }

  _createClass(NewCriterium, [{
    key: "createNewCriterium",
    value: function createNewCriterium() {
      this.newCriterium = new Criterium_Criterium();
      this.$emit('criterium-adding', true);
    }
  }, {
    key: "blockEnterUp",
    value: function blockEnterUp() {
      this.blockKeyUpEnter = true;
    }
  }, {
    key: "checkAndReleaseBlockEnterUp",
    value: function checkAndReleaseBlockEnterUp() {
      if (this.blockKeyUpEnter) {
        this.blockKeyUpEnter = false;
        return true;
      }

      return false;
    }
  }, {
    key: "addNewCriterium",
    value: function addNewCriterium() {
      if (this.checkAndReleaseBlockEnterUp()) {
        return;
      }

      this.$emit('criterium-added', this.newCriterium);
      this.$emit('criterium-adding', false);
      this.createNewCriterium();
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.newCriterium = null;
      this.$emit('criterium-adding', false);
    }
  }, {
    key: "newCriteriumChanged",
    value: function newCriteriumChanged() {
      var _this2 = this;

      this.$nextTick(function () {
        if (_this2.inputFormShown) {
          var nameInput = _this2.$refs['name-input'].$el;

          if (nameInput.scrollIntoViewIfNeeded) {
            nameInput.scrollIntoViewIfNeeded();
          } else {
            nameInput.scrollIntoView();
          }
        }
      });
    }
  }, {
    key: "inputFormShown",
    get: function get() {
      return this.newCriterium !== null;
    }
  }]);

  return NewCriterium;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], NewCriteriumvue_type_script_lang_ts_NewCriterium.prototype, "criteriumDragging", void 0);

__decorate([Prop({
  type: Boolean,
  default: true
}), __metadata("design:type", Boolean)], NewCriteriumvue_type_script_lang_ts_NewCriterium.prototype, "actionsEnabled", void 0);

__decorate([Watch('newCriterium'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], NewCriteriumvue_type_script_lang_ts_NewCriterium.prototype, "newCriteriumChanged", null);

NewCriteriumvue_type_script_lang_ts_NewCriterium = __decorate([vue_class_component_esm({
  name: 'new-criterium',
  components: {
    NameInput: Components_NameInput
  }
})], NewCriteriumvue_type_script_lang_ts_NewCriterium);
/* harmony default export */ var NewCriteriumvue_type_script_lang_ts_ = (NewCriteriumvue_type_script_lang_ts_NewCriterium);
// CONCATENATED MODULE: ./src/Components/NewCriterium.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Components_NewCriteriumvue_type_script_lang_ts_ = (NewCriteriumvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/Components/NewCriterium.vue





/* normalize component */

var NewCriterium_component = normalizeComponent(
  Components_NewCriteriumvue_type_script_lang_ts_,
  NewCriteriumvue_type_template_id_c8d050d8_render,
  NewCriteriumvue_type_template_id_c8d050d8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Components_NewCriterium = (NewCriterium_component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/SplitViewButton.vue?vue&type=template&id=76bedb94&
var SplitViewButtonvue_type_template_id_76bedb94_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn-show-split-view",class:{ checked: _vm.showSplitView },attrs:{"title":"Split View","aria-hidden":"true"},on:{"click":function($event){$event.preventDefault();return _vm.$emit('changed', !_vm.showSplitView)}}},[_c('svg',{staticClass:"svg show-split-view",attrs:{"tabindex":"-1","viewBox":"-50 -50 100 100"}},[_c('path',{attrs:{"id":"path-1","d":"M-40 -39 L40 -39 L40 -9 L-40 -9Z"}}),_c('path',{attrs:{"id":"path-2","d":"M-40 9L40 9L40 39L-40 39Z"}})])])}
var SplitViewButtonvue_type_template_id_76bedb94_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/SplitViewButton.vue?vue&type=template&id=76bedb94&

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/SplitViewButton.vue?vue&type=script&lang=ts&







var SplitViewButtonvue_type_script_lang_ts_SplitViewButton =
/*#__PURE__*/
function (_Vue) {
  _inherits(SplitViewButton, _Vue);

  function SplitViewButton() {
    _classCallCheck(this, SplitViewButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(SplitViewButton).apply(this, arguments));
  }

  return SplitViewButton;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: Boolean,
  required: true
}), __metadata("design:type", Boolean)], SplitViewButtonvue_type_script_lang_ts_SplitViewButton.prototype, "showSplitView", void 0);

SplitViewButtonvue_type_script_lang_ts_SplitViewButton = __decorate([vue_class_component_esm({
  name: 'split-view-button'
})], SplitViewButtonvue_type_script_lang_ts_SplitViewButton);
/* harmony default export */ var SplitViewButtonvue_type_script_lang_ts_ = (SplitViewButtonvue_type_script_lang_ts_SplitViewButton);
// CONCATENATED MODULE: ./src/Components/SplitViewButton.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Components_SplitViewButtonvue_type_script_lang_ts_ = (SplitViewButtonvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/Components/SplitViewButton.vue?vue&type=style&index=0&lang=scss&
var SplitViewButtonvue_type_style_index_0_lang_scss_ = __webpack_require__("af21");

// CONCATENATED MODULE: ./src/Components/SplitViewButton.vue






/* normalize component */

var SplitViewButton_component = normalizeComponent(
  Components_SplitViewButtonvue_type_script_lang_ts_,
  SplitViewButtonvue_type_template_id_76bedb94_render,
  SplitViewButtonvue_type_template_id_76bedb94_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Components_SplitViewButton = (SplitViewButton_component.exports);
// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__("9151");

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js








function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/@babel/runtime/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("b7e4");

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("073e");

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function defineProperty_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/@babel/runtime/helpers/esm/objectSpread2.js









function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("1a6b");

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("8898");

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/axios/index.js
var axios = __webpack_require__("8324");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/p-queue/dist/index.js
var dist = __webpack_require__("b8f8");
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// CONCATENATED MODULE: ./src/Connector/DataConnector.ts










window.axios = axios_default.a;

var DataConnector_DataConnector =
/*#__PURE__*/
function () {
  function DataConnector(rubric, apiConfiguration, rubricDataId, currentVersion) {
    _classCallCheck(this, DataConnector);

    this.queue = new dist_default.a({
      concurrency: 1
    });
    this._isSaving = false;
    this.rubric = rubric;
    this.rubricDataId = rubricDataId;
    this.currentVersion = currentVersion;
    this.apiConfiguration = apiConfiguration;
  }

  _createClass(DataConnector, [{
    key: "beginSaving",
    value: function beginSaving() {
      this._isSaving = true;
    }
  }, {
    key: "endSaving",
    value: function endSaving() {
      this._isSaving = false;
    }
  }, {
    key: "addLevel",
    value: function addLevel(level, index) {
      var _this = this;

      this.addToQueue(
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var parameters, res, oldId;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                parameters = {
                  'newSort': index + 1,
                  'levelData': JSON.stringify(level)
                };
                _context.next = 3;
                return _this.executeAPIRequest(_this.apiConfiguration.addLevelURL, parameters);

              case 3:
                res = _context.sent;
                oldId = level.id;
                level.id = String(res.level.id);

                _this.rubric.setChoicesLevelId(oldId, level.id);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));
    }
  }, {
    key: "addTreeNode",
    value: function addTreeNode(treeNode, parentTreeNode, index) {
      var _this2 = this;

      this.addToQueue(
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var parameters, res, oldId;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                parameters = {
                  'treeNodeData': JSON.stringify(_objectSpread2({
                    type: treeNode.getType()
                  }, treeNode)),
                  'newParentId': parseInt(parentTreeNode.id),
                  'newSort': index + 1
                };
                _context2.next = 3;
                return _this2.executeAPIRequest(_this2.apiConfiguration.addTreeNodeURL, parameters);

              case 3:
                res = _context2.sent;
                oldId = treeNode.id;
                treeNode.id = String(res.tree_node.id);

                if (res.tree_node.type === 'criterium') {
                  _this2.rubric.setChoicesCriteriumId(oldId, treeNode.id);
                }

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })));
    }
  }, {
    key: "deleteLevel",
    value: function deleteLevel(level) {
      var _this3 = this;

      this.addToQueue(
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var parameters;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                parameters = {
                  'levelData': JSON.stringify(level)
                };
                _context3.next = 3;
                return _this3.executeAPIRequest(_this3.apiConfiguration.deleteLevelURL, parameters);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      })));
    }
  }, {
    key: "deleteTreeNode",
    value: function deleteTreeNode(treeNode) {
      var _this4 = this;

      this.addToQueue(
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        var parameters;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                parameters = {
                  'treeNodeData': JSON.stringify(treeNode)
                };
                _context4.next = 3;
                return _this4.executeAPIRequest(_this4.apiConfiguration.deleteTreeNodeURL, parameters);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      })));
    }
  }, {
    key: "moveLevel",
    value: function moveLevel(level, newIndex) {
      var _this5 = this;

      this.addToQueue(
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5() {
        var parameters;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                parameters = {
                  'levelData': JSON.stringify(level),
                  'newSort': newIndex + 1
                };
                _context5.next = 3;
                return _this5.executeAPIRequest(_this5.apiConfiguration.moveLevelURL, parameters);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      })));
    }
  }, {
    key: "moveTreeNode",
    value: function moveTreeNode(treeNode, newParentNode, newIndex) {
      var _this6 = this;

      this.addToQueue(
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6() {
        var parameters;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                parameters = {
                  'treeNodeData': JSON.stringify(treeNode),
                  'newParentId': parseInt(newParentNode.id),
                  'newSort': newIndex + 1
                };
                _context6.next = 3;
                return _this6.executeAPIRequest(_this6.apiConfiguration.moveTreeNodeURL, parameters);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      })));
    }
  }, {
    key: "updateChoice",
    value: function updateChoice(choice, criterium, level) {
      var _this7 = this;

      this.addToQueue(
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7() {
        var parameters, data;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                parameters = {
                  'choiceData': JSON.stringify(choice.toJSON(criterium.id, level.id))
                };
                console.log(parameters);
                _context7.next = 4;
                return _this7.executeAPIRequest(_this7.apiConfiguration.updateChoiceURL, parameters);

              case 4:
                data = _context7.sent;
                console.log(data);

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      })));
    }
  }, {
    key: "updateLevel",
    value: function updateLevel(level) {
      var _this8 = this;

      this.addToQueue(
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8() {
        var parameters;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                parameters = {
                  'levelData': JSON.stringify(level)
                };
                _context8.next = 3;
                return _this8.executeAPIRequest(_this8.apiConfiguration.updateLevelURL, parameters);

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      })));
    }
  }, {
    key: "updateTreeNode",
    value: function updateTreeNode(treeNode) {
      var _this9 = this;

      this.addToQueue(
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9() {
        var parameters;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                parameters = {
                  'treeNodeData': JSON.stringify(_objectSpread2({
                    type: treeNode.getType()
                  }, treeNode))
                };
                _context9.next = 3;
                return _this9.executeAPIRequest(_this9.apiConfiguration.updateTreeNodeURL, parameters);

              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      })));
    }
  }, {
    key: "addToQueue",
    value: function addToQueue(callback) {
      this.queue.add(
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee10() {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return callback();

              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      })));
      this.queue.onIdle().then(this.endSaving.bind(this));
    }
  }, {
    key: "executeAPIRequest",
    value: function () {
      var _executeAPIRequest = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee11(apiURL, parameters) {
        var formData, _i, _Object$entries, _Object$entries$_i, key, value, res;

        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                /*function timeout(ms: number) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }*/
                this.beginSaving();
                parameters['rubricDataId'] = this.rubricDataId;
                parameters['version'] = this.currentVersion;
                formData = new FormData();

                for (_i = 0, _Object$entries = Object.entries(parameters); _i < _Object$entries.length; _i++) {
                  _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
                  formData.set(key, value);
                }

                _context11.prev = 5;
                _context11.next = 8;
                return axios_default.a.post(apiURL, formData);

              case 8:
                res = _context11.sent;
                console.log('res', res);
                document.getElementById('innerhtml').innerHTML = res.data;
                this.rubricDataId = res.data.rubric.id;
                this.currentVersion = res.data.rubric.version;
                /*await timeout(300); // simulate a save
                resolve({});*/

                return _context11.abrupt("return", res.data);

              case 16:
                _context11.prev = 16;
                _context11.t0 = _context11["catch"](5);
                console.log('error', _context11.t0);
                return _context11.abrupt("return", _context11.t0);

              case 20:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[5, 16]]);
      }));

      function executeAPIRequest(_x, _x2) {
        return _executeAPIRequest.apply(this, arguments);
      }

      return executeAPIRequest;
    }()
  }, {
    key: "processingSize",
    get: function get() {
      return this.queue.pending + this.queue.size;
    }
  }, {
    key: "isSaving",
    get: function get() {
      return this._isSaving;
    }
  }]);

  return DataConnector;
}();


// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/RubricPane.vue?vue&type=script&lang=ts&








var RubricPanevue_type_script_lang_ts_a, RubricPanevue_type_script_lang_ts_b, _c, _d, _e;


















var RubricPanevue_type_script_lang_ts_RubricPane =
/*#__PURE__*/
function (_Vue) {
  _inherits(RubricPane, _Vue);

  function RubricPane() {
    var _this;

    _classCallCheck(this, RubricPane);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RubricPane).apply(this, arguments));
    _this.categoriesTransitionName = '';
    _this.showClusters = false;
    _this.categoriesAddingCriterium = {};
    return _this;
  }

  _createClass(RubricPane, [{
    key: "mounted",
    value: function mounted() {
      var _this2 = this;

      window.setTimeout(function () {
        _this2.categoriesTransitionName = 'selected-fade';
      }, 100);
      this.initScrollHandler();
    }
  }, {
    key: "initScrollHandler",
    value: function initScrollHandler() {
      /* // todo: Integrate this code, currently it's conflicting with the mouse handler in the template
      const slider = this.$refs['cluster-content'];
      if (!slider) { return; }
      let startX: number;
      let scrollLeft: number;
      let isDown: boolean;
      slider.addEventListener('mousedown', e => {
          isDown = true;
          startX = e.pageX - slider.offsetLeft;
          scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener('mouseleave', () => {
          isDown = false;
      });
      slider.addEventListener('mouseup', () => {
          isDown = false;
      });
      slider.addEventListener('mousemove', e => {
          if (!isDown) return;
          e.preventDefault();
          const x = e.pageX - slider.offsetLeft;
          slider.scrollLeft = scrollLeft - (x - startX);
      }); */
    }
  }, {
    key: "toggleShowClusters",
    // Selection
    value: function toggleShowClusters() {
      this.showClusters = !this.showClusters;
      this.$emit('dialog-new-cluster', '');
    }
  }, {
    key: "isSelected",
    value: function isSelected(item) {
      if (item instanceof Cluster_Cluster) {
        return item === this.selectedCluster;
      } else if (item instanceof Criterium_Criterium) {
        return item === this.selectedCriterium;
      }

      return false;
    }
  }, {
    key: "selectCluster",
    value: function selectCluster(cluster) {
      this.$emit('cluster-selected', cluster, this.id);
    }
  }, {
    key: "selectCriterium",
    value: function selectCriterium(criterium) {
      this.$emit('criterium-selected', criterium);
    } // Add TreeNodes

  }, {
    key: "addCluster",
    value: function addCluster(cluster) {
      var _this$dataConnector, _this$dataConnector2;

      this.rubric.addChild(cluster, this.rubric.clusters.length);
      (_this$dataConnector = this.dataConnector) === null || _this$dataConnector === void 0 ? void 0 : _this$dataConnector.addTreeNode(cluster, this.rubric, this.rubric.clusters.length);
      var category = new Category_Category();
      category.color = '';
      cluster.addChild(category, 0);
      (_this$dataConnector2 = this.dataConnector) === null || _this$dataConnector2 === void 0 ? void 0 : _this$dataConnector2.addTreeNode(category, cluster, 0);
      this.selectCluster(cluster);
    }
  }, {
    key: "addCategory",
    value: function addCategory(category) {
      var _this$dataConnector3;

      this.selectedCluster.addChild(category, this.selectedCluster.categories.length);
      (_this$dataConnector3 = this.dataConnector) === null || _this$dataConnector3 === void 0 ? void 0 : _this$dataConnector3.addTreeNode(category, this.selectedCluster, this.selectedCluster.categories.length);
      this.updateFirstCategoryIfNeeded();
    }
  }, {
    key: "updateFirstCategoryIfNeeded",
    value: function updateFirstCategoryIfNeeded() {
      if (this.selectedCluster.categories.length === 2) {
        var firstCategory = this.selectedCluster.categories[0];

        if (firstCategory.title === '') {
          var _this$dataConnector4;

          firstCategory.title = 'Categorie';
          (_this$dataConnector4 = this.dataConnector) === null || _this$dataConnector4 === void 0 ? void 0 : _this$dataConnector4.updateTreeNode(firstCategory);
        }
      }
    }
  }, {
    key: "onCategoryAddingChanged",
    value: function onCategoryAddingChanged() {
      var _this3 = this;

      this.$nextTick(function () {
        var clusterContent = _this3.$refs['cluster-content'];

        if (clusterContent) {
          clusterContent.scrollTo(clusterContent.scrollWidth, 0);
        } //(this.$refs['btn-category-add'] as HTMLElement).blur();

      });
    }
  }, {
    key: "onSelectedClusterChanged",
    value: function onSelectedClusterChanged() {
      this.$emit('dialog-new-category', '');
    }
  }, {
    key: "addCriterium",
    value: function addCriterium(category, criterium) {
      var _this$dataConnector5;

      category.addChild(criterium, category.criteria.length);
      (_this$dataConnector5 = this.dataConnector) === null || _this$dataConnector5 === void 0 ? void 0 : _this$dataConnector5.addTreeNode(criterium, category, category.criteria.length);
    }
  }, {
    key: "addingCriteriumForCategory",
    value: function addingCriteriumForCategory(category, adding) {
      if (typeof this.categoriesAddingCriterium[category.id] === 'undefined') {
        external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(this.categoriesAddingCriterium, category.id, adding);
      } else {
        this.categoriesAddingCriterium[category.id] = adding;
      }
    }
    /*@Watch('isEditing')
    // Not sure yet if I want to use this, since the result is a bit unsatisfactory. leaving this here for now.
    onEditStateChanged() {
        if (this.isEditing) {
            this.$nextTick(()=> {
                const nameInput = document.querySelector('.name-input') as HTMLElement;
                if (nameInput) {
                    if (HTMLElement.prototype.scrollIntoViewIfNeeded) {
                        nameInput.scrollIntoViewIfNeeded();
                    } else {
                        nameInput.scrollIntoView();
                    }
                }
            });
        }
    }*/
    // Menu Actions

  }, {
    key: "onStartEdit",
    value: function onStartEdit(item) {
      this.$emit('start-edit', item);
    }
  }, {
    key: "onFinishEdit",
    value: function onFinishEdit(item, newTitle) {
      var canceled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this.$emit('finish-edit', item, newTitle, canceled);
    }
  }, {
    key: "onRemove",
    value: function onRemove(item) {
      this.$emit('remove', item);
    } // Drag & Drop

  }, {
    key: "startDrag",
    value: function startDrag(event, type) {
      this.$emit('start-drag', event, type);
    }
  }, {
    key: "endDrag",
    value: function endDrag() {
      this.$emit('end-drag');
    }
  }, {
    key: "dragMouseOver",
    value: function dragMouseOver(elementId) {
      this.$emit('over-element', elementId);
    }
  }, {
    key: "dragMouseOut",
    value: function dragMouseOut() {
      this.$emit('over-element', '');
    }
  }, {
    key: "onMoveCluster",
    value: function onMoveCluster(event) {
      return event.related.parentElement.id !== this.bannedForDrop;
    }
  }, {
    key: "onMoveCategory",
    value: function onMoveCategory(event) {
      return event.related.parentElement.id !== this.bannedForDrop;
    }
  }, {
    key: "onMoveCriterium",
    value: function onMoveCriterium(event) {
      var _event$related$parent;

      return ((_event$related$parent = event.related.parentElement) === null || _event$related$parent === void 0 ? void 0 : _event$related$parent.parentElement.id) !== this.bannedForDrop;
    }
  }, {
    key: "onChangeCluster",
    value: function onChangeCluster(event) {
      if (event.added && event.added.element) {
        var _this$dataConnector6;

        var oldIndex = this.rubric.clusters.indexOf(event.added.element);
        this.rubric.moveChild(event.added.element, event.added.newIndex, oldIndex);
        (_this$dataConnector6 = this.dataConnector) === null || _this$dataConnector6 === void 0 ? void 0 : _this$dataConnector6.moveTreeNode(event.added.element, this.rubric, event.added.newIndex);
      } else if (event.moved) {
        var _this$dataConnector7;

        this.rubric.moveChild(event.moved.element, event.moved.newIndex, event.moved.oldIndex);
        (_this$dataConnector7 = this.dataConnector) === null || _this$dataConnector7 === void 0 ? void 0 : _this$dataConnector7.moveTreeNode(event.moved.element, this.rubric, event.moved.newIndex);
      }
    }
  }, {
    key: "onChangeCategory",
    value: function onChangeCategory(event) {
      if (event.added && event.added.element) {
        var _this$dataConnector8;

        if (this.otherSelectedCluster === null || this.selectedCluster === this.otherSelectedCluster) {
          throw new Error(''); // Todo: meaningful message
        }

        var _event$added = event.added,
            element = _event$added.element,
            newIndex = _event$added.newIndex; // Notify false prevents the choices of the category's criteria to be removed at the root level.
        // Is there a better way?

        this.otherSelectedCluster.removeChild(element, false);
        this.selectedCluster.addChild(element, newIndex);
        (_this$dataConnector8 = this.dataConnector) === null || _this$dataConnector8 === void 0 ? void 0 : _this$dataConnector8.moveTreeNode(element, this.selectedCluster, newIndex);
      } else if (event.moved) {
        var _this$dataConnector9;

        var category = event.moved.element;
        var cluster = category.parent;
        cluster.moveChild(category, event.moved.newIndex, event.moved.oldIndex);
        (_this$dataConnector9 = this.dataConnector) === null || _this$dataConnector9 === void 0 ? void 0 : _this$dataConnector9.moveTreeNode(category, cluster, event.moved.newIndex);
      }
    }
  }, {
    key: "onChangeCriterium",
    value: function onChangeCriterium(event, category) {
      if (event.added && event.added.element) {
        var _this$dataConnector10;

        var criterium = event.added.element;
        var oldCategory = criterium.parent;
        oldCategory.removeChild(criterium);
        category.addChild(criterium, event.added.newIndex);
        (_this$dataConnector10 = this.dataConnector) === null || _this$dataConnector10 === void 0 ? void 0 : _this$dataConnector10.moveTreeNode(criterium, category, event.added.newIndex);
      } else if (event.moved) {
        var _this$dataConnector11;

        var _criterium = event.moved.element;
        var _category = _criterium.parent;

        _category.moveChild(_criterium, event.moved.newIndex, event.moved.oldIndex);

        (_this$dataConnector11 = this.dataConnector) === null || _this$dataConnector11 === void 0 ? void 0 : _this$dataConnector11.moveTreeNode(_criterium, _category, event.moved.newIndex);
      }
    }
  }, {
    key: "onChangeCriteriumInCluster",
    value: function onChangeCriteriumInCluster(event) {
      if (event.added && event.added.element) {
        var _this$dataConnector12;

        var criterium = event.added.element;
        var oldCategory = criterium.parent;
        oldCategory.removeChild(criterium);
        var category = new Category_Category();
        category.color = '';
        this.selectedCluster.addChild(category, this.selectedCluster.categories.length);
        category.addChild(criterium, event.added.newIndex);
        (_this$dataConnector12 = this.dataConnector) === null || _this$dataConnector12 === void 0 ? void 0 : _this$dataConnector12.moveTreeNode(criterium, category, event.added.newIndex);
      }
    }
  }, {
    key: "clusters",
    get: function get() {
      return _toConsumableArray(this.rubric.clusters);
    }
  }, {
    key: "categories",
    get: function get() {
      if (!this.selectedCluster) {
        return [];
      }

      return _toConsumableArray(this.selectedCluster.categories);
    }
  }, {
    key: "clusterDragging",
    get: function get() {
      return this.dragItemType === 'cluster';
    }
  }, {
    key: "categoryDragging",
    get: function get() {
      return this.dragItemType === 'category';
    }
  }, {
    key: "criteriumDragging",
    get: function get() {
      return this.dragItemType === 'criterium';
    }
  }]);

  return RubricPane;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: String,
  required: true
}), __metadata("design:type", String)], RubricPanevue_type_script_lang_ts_RubricPane.prototype, "id", void 0);

__decorate([Prop({
  type: Rubric_Rubric,
  required: true
}), __metadata("design:type", typeof (RubricPanevue_type_script_lang_ts_a = typeof Rubric_Rubric !== "undefined" && Rubric_Rubric) === "function" ? RubricPanevue_type_script_lang_ts_a : Object)], RubricPanevue_type_script_lang_ts_RubricPane.prototype, "rubric", void 0);

__decorate([Prop({
  type: Cluster_Cluster,
  default: null
}), __metadata("design:type", Object)], RubricPanevue_type_script_lang_ts_RubricPane.prototype, "selectedCluster", void 0);

__decorate([Prop({
  type: Cluster_Cluster,
  default: null
}), __metadata("design:type", Object)], RubricPanevue_type_script_lang_ts_RubricPane.prototype, "otherSelectedCluster", void 0);

__decorate([Prop({
  type: String,
  default: ''
}), __metadata("design:type", String)], RubricPanevue_type_script_lang_ts_RubricPane.prototype, "bannedForDrop", void 0);

__decorate([Prop({
  type: Boolean,
  required: true
}), __metadata("design:type", Boolean)], RubricPanevue_type_script_lang_ts_RubricPane.prototype, "clusterActionsEnabled", void 0);

__decorate([Prop({
  type: Boolean,
  required: true
}), __metadata("design:type", Boolean)], RubricPanevue_type_script_lang_ts_RubricPane.prototype, "categoryActionsEnabled", void 0);

__decorate([Prop({
  type: String,
  required: true
}), __metadata("design:type", String)], RubricPanevue_type_script_lang_ts_RubricPane.prototype, "menuActionsId", void 0);

__decorate([Prop({
  type: String,
  required: true
}), __metadata("design:type", String)], RubricPanevue_type_script_lang_ts_RubricPane.prototype, "editCategoryColorId", void 0);

__decorate([Prop({
  type: Boolean,
  required: true
}), __metadata("design:type", Boolean)], RubricPanevue_type_script_lang_ts_RubricPane.prototype, "draggableDisabled", void 0);

__decorate([Prop({
  type: Boolean,
  required: true
}), __metadata("design:type", Boolean)], RubricPanevue_type_script_lang_ts_RubricPane.prototype, "isEditing", void 0);

__decorate([Prop({
  type: String,
  default: ''
}), __metadata("design:type", String)], RubricPanevue_type_script_lang_ts_RubricPane.prototype, "dragItemType", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], RubricPanevue_type_script_lang_ts_RubricPane.prototype, "showSplitView", void 0);

__decorate([Prop(Criterium_Criterium), __metadata("design:type", Object)], RubricPanevue_type_script_lang_ts_RubricPane.prototype, "selectedCriterium", void 0);

__decorate([Prop(DataConnector_DataConnector), __metadata("design:type", Object)], RubricPanevue_type_script_lang_ts_RubricPane.prototype, "dataConnector", void 0);

__decorate([Watch('categoryActionsEnabled'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], RubricPanevue_type_script_lang_ts_RubricPane.prototype, "onCategoryAddingChanged", null);

__decorate([Watch('selectedCluster'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], RubricPanevue_type_script_lang_ts_RubricPane.prototype, "onSelectedClusterChanged", null);

RubricPanevue_type_script_lang_ts_RubricPane = __decorate([vue_class_component_esm({
  name: 'rubric-pane',
  components: {
    ClusterView: Components_ClusterView,
    CategoryView: Components_CategoryView,
    CriteriumView: Components_CriteriumView,
    NewCluster: Components_NewCluster,
    NewCategory: Components_NewCategory,
    NewCriterium: Components_NewCriterium,
    NameInput: Components_NameInput,
    SplitViewButton: Components_SplitViewButton,
    draggable: vuedraggable_common_default.a
  }
})], RubricPanevue_type_script_lang_ts_RubricPane);
/* harmony default export */ var RubricPanevue_type_script_lang_ts_ = (RubricPanevue_type_script_lang_ts_RubricPane);
// CONCATENATED MODULE: ./src/Components/RubricPane.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Components_RubricPanevue_type_script_lang_ts_ = (RubricPanevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/Components/RubricPane.vue





/* normalize component */

var RubricPane_component = normalizeComponent(
  Components_RubricPanevue_type_script_lang_ts_,
  RubricPanevue_type_template_id_711660aa_render,
  RubricPanevue_type_template_id_711660aa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Components_RubricPane = (RubricPane_component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/CriteriumDetailsView.vue?vue&type=template&id=21b1ed4e&scoped=true&
var CriteriumDetailsViewvue_type_template_id_21b1ed4e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"criterium-details-wrapper"},[_c('transition',{attrs:{"name":"border-flash","mode":"out-in"}},[(_vm.criterium !== null)?_c('div',{key:_vm.criterium ? _vm.criterium.id : 'none',staticClass:"criterium-details"},[(_vm.criterium)?_c('div',[_c('div',{staticClass:"criterium-details-header"},[_c('div',{staticClass:"criterium-details-title"},[_c('label',{attrs:{"for":"criterium-title"}},[_vm._v("Criterium: ")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.criterium.title),expression:"criterium.title"}],staticClass:"input-detail",attrs:{"type":"text","id":"criterium-title","name":"title","autocomplete":"off"},domProps:{"value":(_vm.criterium.title)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.criterium, "title", $event.target.value)},_vm.onCriteriumChange]}})]),_c('button',{staticClass:"btn-close",on:{"click":function($event){return _vm.$emit('close')}}},[_c('i',{staticClass:"fa fa fa-close",attrs:{"aria-hidden":"true"}}),_c('span',{staticClass:"sr-only"},[_vm._v("Sluiten")])])]),_c('div',{staticClass:"criterium-path"},[_vm._v(_vm._s(_vm.criterium.parent.parent.parent.title)+" > "+_vm._s(_vm.criterium.parent.parent.title)+" "),(_vm.criterium.parent.color !== '')?_c('span',[_vm._v(" > "+_vm._s(_vm.criterium.parent.title))]):_vm._e()]),_c('div',{staticClass:"criterium-weight"},[_c('label',{attrs:{"for":"weight"}},[_vm._v("Gewicht:")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.criterium.weight),expression:"criterium.weight"}],staticClass:"input-detail",attrs:{"type":"number","id":"weight"},domProps:{"value":(_vm.criterium.weight)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.criterium, "weight", $event.target.value)},_vm.onCriteriumChange]}}),_vm._v(" %")]),_c('ul',{staticClass:"criterium-levels"},_vm._l((_vm.rubric.levels),function(level){return _c('li',{key:level.id,staticClass:"rb-criterium-level"},[_c('criterium-level-view',{attrs:{"rubric":_vm.rubric,"criterium":_vm.criterium,"level":level},on:{"input":_vm.updateHeight,"change":function($event){return _vm.onChoiceChange($event, _vm.criterium, level)}}})],1)}),0),_c('a',{staticClass:"rubric-return",attrs:{"href":"#","role":"button"},on:{"click":function($event){$event.preventDefault();return _vm.$emit('close')}}},[_c('i',{staticClass:"fa fa-arrow-left"}),_vm._v(" Terug naar rubric")])]):_vm._e()]):_vm._e()])],1)}
var CriteriumDetailsViewvue_type_template_id_21b1ed4e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/CriteriumDetailsView.vue?vue&type=template&id=21b1ed4e&scoped=true&

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/debounce/index.js
var debounce = __webpack_require__("2f23");
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/CriteriumLevelView.vue?vue&type=template&id=d2ec6aae&
var CriteriumLevelViewvue_type_template_id_d2ec6aae_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('label',{staticClass:"rb-criterium-level-title",attrs:{"for":("level-" + (_vm.level.id))}},[_vm._v(_vm._s(_vm.level.title)+" "),(_vm.level.description)?_c('span',{staticClass:"fa fa-question-circle criterium-level-description",attrs:{"title":_vm.level.description}}):_vm._e()]),_c('div',{staticClass:"criterium-level-input"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.choice.feedback),expression:"choice.feedback"}],ref:"feedbackField",staticClass:"criterium-level-feedback input-detail",attrs:{"id":("level-" + (_vm.level.id)),"placeholder":"Geef feedback"},domProps:{"value":(_vm.choice.feedback)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.choice, "feedback", $event.target.value)},_vm.onFeedbackChange]}}),(_vm.rubric.useScores)?_c('div',{staticClass:"criterium-level-score"},[(_vm.choice.hasFixedScore)?_c('button',{staticClass:"remove-fixed",attrs:{"title":"Dit criterium heeft een overschreven vaste score voor dit niveau. Klik om dit ongedaan te maken."},on:{"click":_vm.removeFixedScore}},[_c('i',{staticClass:"fa fa-lock"}),_c('i',{staticClass:"fa fa-unlock"})]):_vm._e(),(_vm.choice.hasFixedScore)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.choice.fixedScore),expression:"choice.fixedScore"}],staticClass:"fixed-score input-detail",attrs:{"type":"number","step":"0.1"},domProps:{"value":(_vm.choice.fixedScore)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.choice, "fixedScore", $event.target.value)},_vm.onChange]}}):_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.rubric.getChoiceScore(_vm.criterium, _vm.level)),expression:"rubric.getChoiceScore(criterium, level)"}],staticClass:"input-detail",attrs:{"type":"number","step":"0.1"},domProps:{"value":(_vm.rubric.getChoiceScore(_vm.criterium, _vm.level))},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.rubric, "getChoiceScore(criterium, level)", $event.target.value)},_vm.changeChoiceScore]}})]):_vm._e()])])}
var CriteriumLevelViewvue_type_template_id_d2ec6aae_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/CriteriumLevelView.vue?vue&type=template&id=d2ec6aae&

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/CriteriumLevelView.vue?vue&type=script&lang=ts&






var CriteriumLevelViewvue_type_script_lang_ts_a, CriteriumLevelViewvue_type_script_lang_ts_b, CriteriumLevelViewvue_type_script_lang_ts_c;









var CriteriumLevelViewvue_type_script_lang_ts_CriteriumLevelView =
/*#__PURE__*/
function (_Vue) {
  _inherits(CriteriumLevelView, _Vue);

  function CriteriumLevelView() {
    var _this;

    _classCallCheck(this, CriteriumLevelView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CriteriumLevelView).call(this));
    _this.onChange = debounce_default()(_this.onChange, 750);
    return _this;
  }

  _createClass(CriteriumLevelView, [{
    key: "removeFixedScore",
    value: function removeFixedScore() {
      this.choice.hasFixedScore = false;
      this.choice.fixedScore = Choice_Choice.FIXED_SCORE;
      this.onChange();
      this.$forceUpdate();
    }
  }, {
    key: "changeChoiceScore",
    value: function changeChoiceScore(event) {
      var value = parseFloat(event.target.value);

      if (!isNaN(value)) {
        this.choice.hasFixedScore = true;
        this.choice.fixedScore = value;
        this.onChange();
        this.$forceUpdate();
      }
    }
  }, {
    key: "onChange",
    value: function onChange() {
      this.$emit('change', this.choice);
    }
  }, {
    key: "onFeedbackChange",
    value: function onFeedbackChange(e) {
      this.$emit("input", e);
      this.onChange();
    }
  }, {
    key: "choice",
    get: function get() {
      return this.rubric.getChoice(this.criterium, this.level);
    }
  }]);

  return CriteriumLevelView;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: Rubric_Rubric,
  required: true
}), __metadata("design:type", typeof (CriteriumLevelViewvue_type_script_lang_ts_a = typeof Rubric_Rubric !== "undefined" && Rubric_Rubric) === "function" ? CriteriumLevelViewvue_type_script_lang_ts_a : Object)], CriteriumLevelViewvue_type_script_lang_ts_CriteriumLevelView.prototype, "rubric", void 0);

__decorate([Prop({
  type: Level_Level,
  required: true
}), __metadata("design:type", typeof (CriteriumLevelViewvue_type_script_lang_ts_b = typeof Level_Level !== "undefined" && Level_Level) === "function" ? CriteriumLevelViewvue_type_script_lang_ts_b : Object)], CriteriumLevelViewvue_type_script_lang_ts_CriteriumLevelView.prototype, "level", void 0);

__decorate([Prop({
  type: Criterium_Criterium,
  required: true
}), __metadata("design:type", typeof (CriteriumLevelViewvue_type_script_lang_ts_c = typeof Criterium_Criterium !== "undefined" && Criterium_Criterium) === "function" ? CriteriumLevelViewvue_type_script_lang_ts_c : Object)], CriteriumLevelViewvue_type_script_lang_ts_CriteriumLevelView.prototype, "criterium", void 0);

CriteriumLevelViewvue_type_script_lang_ts_CriteriumLevelView = __decorate([vue_class_component_esm({
  name: 'criterium-level-view'
}), __metadata("design:paramtypes", [])], CriteriumLevelViewvue_type_script_lang_ts_CriteriumLevelView);
/* harmony default export */ var CriteriumLevelViewvue_type_script_lang_ts_ = (CriteriumLevelViewvue_type_script_lang_ts_CriteriumLevelView);
// CONCATENATED MODULE: ./src/Components/CriteriumLevelView.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Components_CriteriumLevelViewvue_type_script_lang_ts_ = (CriteriumLevelViewvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/Components/CriteriumLevelView.vue





/* normalize component */

var CriteriumLevelView_component = normalizeComponent(
  Components_CriteriumLevelViewvue_type_script_lang_ts_,
  CriteriumLevelViewvue_type_template_id_d2ec6aae_render,
  CriteriumLevelViewvue_type_template_id_d2ec6aae_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Components_CriteriumLevelView = (CriteriumLevelView_component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/CriteriumDetailsView.vue?vue&type=script&lang=ts&













var CriteriumDetailsViewvue_type_script_lang_ts_a, CriteriumDetailsViewvue_type_script_lang_ts_b;








function _updateHeight(elem) {
  elem.style.height = '';
  elem.style.height = "".concat(elem.scrollHeight, "px");
}

var CriteriumDetailsViewvue_type_script_lang_ts_ScoreRubricView =
/*#__PURE__*/
function (_Vue) {
  _inherits(ScoreRubricView, _Vue);

  function ScoreRubricView() {
    var _this;

    _classCallCheck(this, ScoreRubricView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScoreRubricView).call(this));
    _this.onCriteriumChange = debounce_default()(_this.onCriteriumChange, 750);
    return _this;
  }

  _createClass(ScoreRubricView, [{
    key: "updateHeight",
    value: function updateHeight(e) {
      _updateHeight(e.target);
    }
  }, {
    key: "updateHeightAll",
    value: function updateHeightAll() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = document.getElementsByClassName('criterium-level-feedback')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var elem = _step.value;

          _updateHeight(elem);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "updated",
    value: function updated() {
      var _this2 = this;

      window.setTimeout(function () {
        _this2.updateHeightAll();
      }, 250);
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.updateHeightAll();
    }
  }, {
    key: "onCriteriumChange",
    value: function onCriteriumChange() {
      this.$emit('change-criterium', this.criterium);
    }
  }, {
    key: "onChoiceChange",
    value: function onChoiceChange(choice, criterium, level) {
      this.$emit('change-choice', choice, criterium, level);
    }
  }]);

  return ScoreRubricView;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: Rubric_Rubric,
  required: true
}), __metadata("design:type", typeof (CriteriumDetailsViewvue_type_script_lang_ts_a = typeof Rubric_Rubric !== "undefined" && Rubric_Rubric) === "function" ? CriteriumDetailsViewvue_type_script_lang_ts_a : Object)], CriteriumDetailsViewvue_type_script_lang_ts_ScoreRubricView.prototype, "rubric", void 0);

__decorate([Prop(Criterium_Criterium), __metadata("design:type", Object)], CriteriumDetailsViewvue_type_script_lang_ts_ScoreRubricView.prototype, "criterium", void 0);

CriteriumDetailsViewvue_type_script_lang_ts_ScoreRubricView = __decorate([vue_class_component_esm({
  name: 'criterium-details-view',
  components: {
    CriteriumLevelView: Components_CriteriumLevelView
  }
}), __metadata("design:paramtypes", [])], CriteriumDetailsViewvue_type_script_lang_ts_ScoreRubricView);
/* harmony default export */ var CriteriumDetailsViewvue_type_script_lang_ts_ = (CriteriumDetailsViewvue_type_script_lang_ts_ScoreRubricView);
// CONCATENATED MODULE: ./src/Components/CriteriumDetailsView.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Components_CriteriumDetailsViewvue_type_script_lang_ts_ = (CriteriumDetailsViewvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/Components/CriteriumDetailsView.vue?vue&type=style&index=0&id=21b1ed4e&scoped=true&lang=css&
var CriteriumDetailsViewvue_type_style_index_0_id_21b1ed4e_scoped_true_lang_css_ = __webpack_require__("a251");

// CONCATENATED MODULE: ./src/Components/CriteriumDetailsView.vue






/* normalize component */

var CriteriumDetailsView_component = normalizeComponent(
  Components_CriteriumDetailsViewvue_type_script_lang_ts_,
  CriteriumDetailsViewvue_type_template_id_21b1ed4e_scoped_true_render,
  CriteriumDetailsViewvue_type_template_id_21b1ed4e_scoped_true_staticRenderFns,
  false,
  null,
  "21b1ed4e",
  null
  
)

/* harmony default export */ var CriteriumDetailsView = (CriteriumDetailsView_component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/RemoveDialog.vue?vue&type=template&id=4f53752a&
var RemoveDialogvue_type_template_id_4f53752a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.removeItem !== null)?_c('div',{staticClass:"modal-bg",on:{"click":function($event){$event.stopPropagation();return _vm.$emit('cancel')}}},[_c('div',{staticClass:"modal-content",on:{"click":function($event){$event.stopPropagation();}}},[(_vm.removeItem.constructor.name === 'Category' && _vm.removeItem.color === '')?_c('div',{staticClass:"modal-content-title"},[_vm._v("Criteria verwijderen?")]):_c('div',{staticClass:"modal-content-title"},[_vm._v(_vm._s(_vm.removeItem.constructor.name)+" '"+_vm._s(_vm.removeItem.title)+"' verwijderen?")]),_c('div',[_c('button',{ref:"btn-remove",staticClass:"btn-strong mod-confirm",on:{"click":function($event){$event.stopPropagation();return _vm.$emit('remove')}}},[_vm._v("Verwijder")]),_c('button',{staticClass:"btn-strong",on:{"click":function($event){$event.stopPropagation();return _vm.$emit('cancel')}}},[_vm._v("Annuleer")])])])]):_vm._e()}
var RemoveDialogvue_type_template_id_4f53752a_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/RemoveDialog.vue?vue&type=template&id=4f53752a&

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/RemoveDialog.vue?vue&type=script&lang=ts&






var RemoveDialogvue_type_script_lang_ts_a, RemoveDialogvue_type_script_lang_ts_b;







var RemoveDialogvue_type_script_lang_ts_RemoveDialog =
/*#__PURE__*/
function (_Vue) {
  _inherits(RemoveDialog, _Vue);

  function RemoveDialog() {
    _classCallCheck(this, RemoveDialog);

    return _possibleConstructorReturn(this, _getPrototypeOf(RemoveDialog).apply(this, arguments));
  }

  _createClass(RemoveDialog, [{
    key: "onRemoveItemChanged",
    value: function onRemoveItemChanged() {
      var _this = this;

      if (this.removeItem) {
        this.$nextTick(function () {
          _this.$refs['btn-remove'].focus();
        });
      }
    }
  }]);

  return RemoveDialog;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: [Cluster_Cluster, Category_Category, Criterium_Criterium],
  default: null
}), __metadata("design:type", Object)], RemoveDialogvue_type_script_lang_ts_RemoveDialog.prototype, "removeItem", void 0);

__decorate([Watch('removeItem'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], RemoveDialogvue_type_script_lang_ts_RemoveDialog.prototype, "onRemoveItemChanged", null);

RemoveDialogvue_type_script_lang_ts_RemoveDialog = __decorate([vue_class_component_esm({
  name: 'remove-dialog'
})], RemoveDialogvue_type_script_lang_ts_RemoveDialog);
/* harmony default export */ var RemoveDialogvue_type_script_lang_ts_ = (RemoveDialogvue_type_script_lang_ts_RemoveDialog);
// CONCATENATED MODULE: ./src/Components/RemoveDialog.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Components_RemoveDialogvue_type_script_lang_ts_ = (RemoveDialogvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/Components/RemoveDialog.vue





/* normalize component */

var RemoveDialog_component = normalizeComponent(
  Components_RemoveDialogvue_type_script_lang_ts_,
  RemoveDialogvue_type_template_id_4f53752a_render,
  RemoveDialogvue_type_template_id_4f53752a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Components_RemoveDialog = (RemoveDialog_component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/ScoreRubricView.vue?vue&type=script&lang=ts&











var ScoreRubricViewvue_type_script_lang_ts_a, ScoreRubricViewvue_type_script_lang_ts_b, ScoreRubricViewvue_type_script_lang_ts_c;












var ScoreRubricViewvue_type_script_lang_ts_ScoreRubricView =
/*#__PURE__*/
function (_Vue) {
  _inherits(ScoreRubricView, _Vue);

  function ScoreRubricView() {
    var _this;

    _classCallCheck(this, ScoreRubricView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScoreRubricView).apply(this, arguments));
    _this.selectedClusterView1 = null;
    _this.selectedClusterView2 = null;
    _this.menuActionsId = '';
    _this.newClusterDialogView = '';
    _this.newCategoryDialogView = '';
    _this.isEditing = false;
    _this.oldItemTitle = '';
    _this.removeItem = null;
    _this.editCategoryColorId = '';
    _this.initiatedDrag = '';
    _this.dragItemType = '';
    _this.overElementId = '';
    _this.bannedForDrop = '';
    _this.innerWidth = window.innerWidth;
    return _this;
  }

  _createClass(ScoreRubricView, [{
    key: "onClusterSelected",
    // Selection
    value: function onClusterSelected(cluster, view) {
      if (view === 'view1') {
        this.selectedClusterView1 = cluster;
        this.uiState.selectedClusterView1 = cluster.id;
      } else if (view === 'view2') {
        this.selectedClusterView2 = cluster;
        this.uiState.selectedClusterView2 = cluster.id;
      }
    }
  }, {
    key: "isSelected",
    value: function isSelected(cluster) {
      var view = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'view1';

      if (view === 'view1') {
        return cluster === this.selectedClusterView1;
      } else if (view === 'view2') {
        return cluster === this.selectedClusterView2;
      }

      return false;
    }
  }, {
    key: "selectCriterium",
    value: function selectCriterium(criterium) {
      this.$emit('criterium-selected', criterium);
    } // Menu Actions

  }, {
    key: "onItemActions",
    value: function onItemActions(id) {
      this.menuActionsId = this.menuActionsId === id ? '' : id;
    }
  }, {
    key: "hideMenu",
    value: function hideMenu() {
      this.menuActionsId = '';
    }
  }, {
    key: "onStartEdit",
    value: function onStartEdit(item) {
      this.isEditing = true;
      this.oldItemTitle = item.title;
      this.hideMenu();
    }
  }, {
    key: "onFinishEdit",
    value: function onFinishEdit(item, newTitle) {
      var canceled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (!canceled && newTitle !== this.oldItemTitle) {
        var _this$dataConnector;

        item.title = newTitle;
        (_this$dataConnector = this.dataConnector) === null || _this$dataConnector === void 0 ? void 0 : _this$dataConnector.updateTreeNode(item);
      }

      this.isEditing = false;
      this.oldItemTitle = '';
    }
  }, {
    key: "onChangeColor",
    value: function onChangeColor(category) {
      var _this$dataConnector2;

      (_this$dataConnector2 = this.dataConnector) === null || _this$dataConnector2 === void 0 ? void 0 : _this$dataConnector2.updateTreeNode(category);
    }
  }, {
    key: "onChangeCriterium",
    value: function onChangeCriterium(criterium) {
      var _this$dataConnector3;

      (_this$dataConnector3 = this.dataConnector) === null || _this$dataConnector3 === void 0 ? void 0 : _this$dataConnector3.updateTreeNode(criterium);
    }
  }, {
    key: "onChangeChoice",
    value: function onChangeChoice(choice, criterium, level) {
      var _this$dataConnector4;

      (_this$dataConnector4 = this.dataConnector) === null || _this$dataConnector4 === void 0 ? void 0 : _this$dataConnector4.updateChoice(choice, criterium, level);
    }
  }, {
    key: "showRemoveDialog",
    value: function showRemoveDialog(item) {
      this.removeItem = item;
      this.hideMenu();
    }
  }, {
    key: "hideRemoveDialog",
    value: function hideRemoveDialog() {
      this.showRemoveDialog(null);
    }
  }, {
    key: "onRemoveItem",
    value: function onRemoveItem() {
      var _this$dataConnector5;

      var item = this.removeItem;

      if (item instanceof Criterium_Criterium && item === this.selectedCriterium) {
        this.selectCriterium(null);
      } else if (item instanceof Category_Category) {
        var _this$selectedCriteri;

        if (((_this$selectedCriteri = this.selectedCriterium) === null || _this$selectedCriteri === void 0 ? void 0 : _this$selectedCriteri.parent) === item) {
          this.selectCriterium(null);
        }

        if (this.editCategoryColorId && item.id === this.editCategoryColorId.split('_')[1]) {
          this.editCategoryColorId = '';
        }
      } else if (item instanceof Cluster_Cluster) {
        var _this$selectedCriteri2, _this$selectedCriteri3;

        if (((_this$selectedCriteri2 = this.selectedCriterium) === null || _this$selectedCriteri2 === void 0 ? void 0 : (_this$selectedCriteri3 = _this$selectedCriteri2.parent) === null || _this$selectedCriteri3 === void 0 ? void 0 : _this$selectedCriteri3.parent) === item) {
          this.selectCriterium(null);
        }

        if (item === this.selectedClusterView1) {
          this.selectedClusterView1 = null;
          this.uiState.selectedClusterView1 = '';
        }

        if (item === this.selectedClusterView2) {
          this.selectedClusterView2 = null;
          this.uiState.selectedClusterView2 = '';
        }
      }

      item.parent.removeChild(item);
      (_this$dataConnector5 = this.dataConnector) === null || _this$dataConnector5 === void 0 ? void 0 : _this$dataConnector5.deleteTreeNode(item);
      this.hideRemoveDialog();
    }
  }, {
    key: "onColorPicker",
    value: function onColorPicker(id) {
      this.editCategoryColorId = id;
    } // Drag & Drop

  }, {
    key: "startDrag",
    value: function startDrag(event, type) {
      var view = event.item.id.split('_')[0];
      var otherView = view === 'view1' ? 'view2' : 'view1';
      this.dragItemType = type;
      this.initiatedDrag = view;
      var bannedFilter = '';

      if (type === 'cluster') {
        bannedFilter = 'clusters';
      } else if (type === 'category') {
        bannedFilter = 'categories';
      } else {
        var _event$item$parentEle;

        bannedFilter = (_event$item$parentEle = event.item.parentElement) === null || _event$item$parentEle === void 0 ? void 0 : _event$item$parentEle.parentElement.id.split('_')[1];
      }

      if (type === 'cluster' || this.selectedClusterView1 !== null && this.selectedClusterView1 === this.selectedClusterView2) {
        this.bannedForDrop = "".concat(otherView, "_").concat(bannedFilter);
      }
    }
  }, {
    key: "endDrag",
    value: function endDrag() {
      this.dragItemType = '';
      this.initiatedDrag = '';
      this.bannedForDrop = '';
      this.overElementId = '';
    }
  }, {
    key: "dragOverElement",
    value: function dragOverElement() {
      var elementId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (!this.initiatedDrag) {
        return;
      }

      this.overElementId = elementId;
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var _this2 = this;

      if (this.uiState.selectedClusterView1) {
        var cluster = this.rubric.clusters.find(function (cluster) {
          return cluster.id === _this2.uiState.selectedClusterView1;
        });

        if (cluster) {
          this.selectedClusterView1 = cluster;
        } else {
          this.uiState.selectedClusterView1 = '';
        }
      } else {
        this.selectedClusterView1 = this.clusters.length && this.clusters[0] || null;
      }

      if (this.uiState.selectedClusterView2) {
        var _cluster = this.rubric.clusters.find(function (cluster) {
          return cluster.id === _this2.uiState.selectedClusterView2;
        });

        if (_cluster) {
          this.selectedClusterView2 = _cluster;
        } else {
          this.uiState.selectedClusterView2 = '';
        }
      } else {
        this.selectedClusterView2 = this.clusters.length && this.clusters[0] || null;
      }

      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      this.innerWidth = window.innerWidth;
    }
  }, {
    key: "onRubricChanged",
    value: function onRubricChanged() {// console.log('change');
    }
  }, {
    key: "clusters",
    get: function get() {
      return _toConsumableArray(this.rubric.clusters);
    }
  }, {
    key: "console",
    get: function get() {
      return window.console;
    }
  }, {
    key: "draggableDisabled",
    get: function get() {
      return this.innerWidth < 900 || this.isEditing || this.menuActionsId !== '' || this.newClusterDialogView !== '' || this.newCategoryDialogView !== '' || this.removeItem !== null;
    }
  }, {
    key: "mainClass",
    get: function get() {
      return {
        'dragging': this.initiatedDrag !== '',
        'not-allowed': this.bannedForDrop !== '' && this.overElementId === this.bannedForDrop,
        'split-view': this.uiState.showSplitView
      };
    }
  }]);

  return ScoreRubricView;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: Rubric_Rubric,
  required: true
}), __metadata("design:type", typeof (ScoreRubricViewvue_type_script_lang_ts_a = typeof Rubric_Rubric !== "undefined" && Rubric_Rubric) === "function" ? ScoreRubricViewvue_type_script_lang_ts_a : Object)], ScoreRubricViewvue_type_script_lang_ts_ScoreRubricView.prototype, "rubric", void 0);

__decorate([Prop(Criterium_Criterium), __metadata("design:type", Object)], ScoreRubricViewvue_type_script_lang_ts_ScoreRubricView.prototype, "selectedCriterium", void 0);

__decorate([Prop(DataConnector_DataConnector), __metadata("design:type", Object)], ScoreRubricViewvue_type_script_lang_ts_ScoreRubricView.prototype, "dataConnector", void 0);

__decorate([Prop({
  type: Object
}), __metadata("design:type", Object)], ScoreRubricViewvue_type_script_lang_ts_ScoreRubricView.prototype, "uiState", void 0);

__decorate([Watch('rubric'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], ScoreRubricViewvue_type_script_lang_ts_ScoreRubricView.prototype, "onRubricChanged", null);

ScoreRubricViewvue_type_script_lang_ts_ScoreRubricView = __decorate([vue_class_component_esm({
  name: 'score-rubric-view',
  components: {
    RubricPane: Components_RubricPane,
    RemoveDialog: Components_RemoveDialog,
    CriteriumDetailsView: CriteriumDetailsView
  }
})], ScoreRubricViewvue_type_script_lang_ts_ScoreRubricView);
/* harmony default export */ var ScoreRubricViewvue_type_script_lang_ts_ = (ScoreRubricViewvue_type_script_lang_ts_ScoreRubricView); //todo replace border with padding
// CONCATENATED MODULE: ./src/Components/ScoreRubricView.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Components_ScoreRubricViewvue_type_script_lang_ts_ = (ScoreRubricViewvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/Components/ScoreRubricView.vue





/* normalize component */

var ScoreRubricView_component = normalizeComponent(
  Components_ScoreRubricViewvue_type_script_lang_ts_,
  ScoreRubricViewvue_type_template_id_3fa54a53_render,
  ScoreRubricViewvue_type_template_id_3fa54a53_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Components_ScoreRubricView = (ScoreRubricView_component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Views/RubricBuilderFull.vue?vue&type=template&id=f7d6068c&
var RubricBuilderFullvue_type_template_id_f7d6068c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rubric"},[_c('div',{staticClass:"rubric-builder-full-view"},[_c('div',{staticClass:"table-header-wrap"},[_c('div',{staticClass:"table-header"},_vm._l((_vm.rubric.levels),function(level){return _c('div',{staticClass:"table-header-title"},[_vm._v(" "+_vm._s(level.title)+" ")])}),0)]),_c('h1',{staticClass:"rubric-title"},[_vm._v(_vm._s(_vm.rubric.title))]),_c('ul',{staticClass:"clusters",class:{'is-feedback-visible': true }},_vm._l((_vm.rubric.clusters),function(cluster){return _c('li',{staticClass:"cluster-list-item"},[_c('div',{staticClass:"cluster"},[_c('h2',{staticClass:"cluster-title"},[_vm._v(_vm._s(cluster.title))]),_c('ul',{staticClass:"categories"},_vm._l((cluster.categories),function(category){return _c('li',{staticClass:"category-list-item",style:(("--category-color: " + (category.title ? (category.color || '#999') : '#999')))},[_c('div',{staticClass:"category"},[(category.title)?_c('h3',{staticClass:"category-title category-indicator"},[_vm._v(_vm._s(category.title))]):_vm._e(),_c('ul',{staticClass:"criteria"},_vm._l((category.criteria),function(criterium){return _c('li',{staticClass:"criterium-list-item"},[_c('div',{staticClass:"criterium"},[_c('div',{staticClass:"criterium-title-header"},[_c('h4',{staticClass:"criterium-title category-indicator"},[_vm._v(_vm._s(criterium.title))])]),_vm._l((_vm.getCriteriumData(criterium).choices),function(data){return _c('div',{staticClass:"criterium-level"},[_c('div',{staticClass:"criterium-level-header"},[_c('div',{staticClass:"criterium-level-title"},[_vm._v(" "+_vm._s(data.level.title)+" ")]),_c('div',{staticClass:"score-number"},[_vm._v(_vm._s(data.score))])]),_c('div',{staticClass:"default-feedback",on:{"click":_vm.focusTextField}},[_c('feedback-field',{attrs:{"choice":data.choice},on:{"input":_vm.updateHeight,"change":function($event){return _vm.updateFeedback(data.choice, criterium, data.level)}}})],1)])})],2)])}),0)])])}),0)])])}),0)])])}
var RubricBuilderFullvue_type_template_id_f7d6068c_staticRenderFns = []


// CONCATENATED MODULE: ./src/Views/RubricBuilderFull.vue?vue&type=template&id=f7d6068c&

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/FeedbackField.vue?vue&type=template&id=672141db&
var FeedbackFieldvue_type_template_id_672141db_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.choice.feedback),expression:"choice.feedback"}],staticClass:"ta-feedback",attrs:{"placeholder":"Geef feedback"},domProps:{"value":(_vm.choice.feedback)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.choice, "feedback", $event.target.value)},_vm.onFeedbackChange]}})}
var FeedbackFieldvue_type_template_id_672141db_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/FeedbackField.vue?vue&type=template&id=672141db&

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/FeedbackField.vue?vue&type=script&lang=ts&






var FeedbackFieldvue_type_script_lang_ts_a;






var FeedbackFieldvue_type_script_lang_ts_FeedbackField =
/*#__PURE__*/
function (_Vue) {
  _inherits(FeedbackField, _Vue);

  function FeedbackField() {
    var _this;

    _classCallCheck(this, FeedbackField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FeedbackField).call(this));
    _this.onChange = debounce_default()(_this.onChange, 750);
    return _this;
  }

  _createClass(FeedbackField, [{
    key: "onChange",
    value: function onChange() {
      this.$emit('change', this.choice);
    }
  }, {
    key: "onFeedbackChange",
    value: function onFeedbackChange(e) {
      this.$emit('input', e);
      this.onChange();
    }
  }]);

  return FeedbackField;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: Choice_Choice,
  required: true
}), __metadata("design:type", typeof (FeedbackFieldvue_type_script_lang_ts_a = typeof Choice_Choice !== "undefined" && Choice_Choice) === "function" ? FeedbackFieldvue_type_script_lang_ts_a : Object)], FeedbackFieldvue_type_script_lang_ts_FeedbackField.prototype, "choice", void 0);

FeedbackFieldvue_type_script_lang_ts_FeedbackField = __decorate([vue_class_component_esm({
  name: 'feedback-field',
  components: {}
}), __metadata("design:paramtypes", [])], FeedbackFieldvue_type_script_lang_ts_FeedbackField);
/* harmony default export */ var FeedbackFieldvue_type_script_lang_ts_ = (FeedbackFieldvue_type_script_lang_ts_FeedbackField);
// CONCATENATED MODULE: ./src/Components/FeedbackField.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Components_FeedbackFieldvue_type_script_lang_ts_ = (FeedbackFieldvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/Components/FeedbackField.vue





/* normalize component */

var FeedbackField_component = normalizeComponent(
  Components_FeedbackFieldvue_type_script_lang_ts_,
  FeedbackFieldvue_type_template_id_672141db_render,
  FeedbackFieldvue_type_template_id_672141db_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Components_FeedbackField = (FeedbackField_component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Views/RubricBuilderFull.vue?vue&type=script&lang=ts&









var RubricBuilderFullvue_type_script_lang_ts_a, RubricBuilderFullvue_type_script_lang_ts_b;







function RubricBuilderFullvue_type_script_lang_ts_updateHeight(elem) {
  elem.style.height = '';
  elem.style.height = "".concat(elem.scrollHeight, "px");
}

var RubricBuilderFullvue_type_script_lang_ts_RubricBuilderFull =
/*#__PURE__*/
function (_Vue) {
  _inherits(RubricBuilderFull, _Vue);

  function RubricBuilderFull() {
    var _this;

    _classCallCheck(this, RubricBuilderFull);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RubricBuilderFull).apply(this, arguments));
    _this.criteriaData = [];
    return _this;
  }

  _createClass(RubricBuilderFull, [{
    key: "updateHeight",
    value: function updateHeight(e) {
      this.$nextTick(function () {
        RubricBuilderFullvue_type_script_lang_ts_updateHeight(e.target);
      });
    }
  }, {
    key: "updateFeedback",
    value: function updateFeedback(choice, criterium, level) {
      var _this$dataConnector;

      (_this$dataConnector = this.dataConnector) === null || _this$dataConnector === void 0 ? void 0 : _this$dataConnector.updateChoice(choice, criterium, level);
    }
  }, {
    key: "focusTextField",
    value: function focusTextField(elem) {
      if (elem.target.className === 'default-feedback') {
        elem.target.querySelector('.ta-feedback').focus();
      }
    }
  }, {
    key: "getCriteriumData",
    value: function getCriteriumData(criterium) {
      var criteriumExt = this.criteriaData.find(function (_) {
        return _.criterium === criterium;
      });

      if (!criteriumExt) {
        throw new Error("No data found for criterium: ".concat(criterium));
      }

      return criteriumExt;
    }
  }, {
    key: "initScores",
    value: function initScores(rubric) {
      var _this2 = this;

      rubric.getAllCriteria().forEach(function (criterium) {
        var criteriumExt = {
          criterium: criterium,
          choices: []
        };
        rubric.levels.forEach(function (level) {
          var choice = rubric.getChoice(criterium, level);
          var score = rubric.getChoiceScore(criterium, level);
          criteriumExt.choices.push({
            level: level,
            choice: choice,
            score: score
          });
        });

        _this2.criteriaData.push(criteriumExt);
      });
    }
  }, {
    key: "created",
    value: function created() {
      if (this.rubric) {
        this.initScores(this.rubric); // todo: get rubric data id
      }
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.$nextTick(function () {
        document.querySelectorAll('.ta-feedback').forEach(function (el) {
          RubricBuilderFullvue_type_script_lang_ts_updateHeight(el);
        });
      });
    }
  }]);

  return RubricBuilderFull;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: Rubric_Rubric,
  required: true
}), __metadata("design:type", typeof (RubricBuilderFullvue_type_script_lang_ts_a = typeof Rubric_Rubric !== "undefined" && Rubric_Rubric) === "function" ? RubricBuilderFullvue_type_script_lang_ts_a : Object)], RubricBuilderFullvue_type_script_lang_ts_RubricBuilderFull.prototype, "rubric", void 0);

__decorate([Prop(DataConnector_DataConnector), __metadata("design:type", Object)], RubricBuilderFullvue_type_script_lang_ts_RubricBuilderFull.prototype, "dataConnector", void 0);

RubricBuilderFullvue_type_script_lang_ts_RubricBuilderFull = __decorate([vue_class_component_esm({
  components: {
    FeedbackField: Components_FeedbackField
  }
})], RubricBuilderFullvue_type_script_lang_ts_RubricBuilderFull);
/* harmony default export */ var RubricBuilderFullvue_type_script_lang_ts_ = (RubricBuilderFullvue_type_script_lang_ts_RubricBuilderFull);
// CONCATENATED MODULE: ./src/Views/RubricBuilderFull.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Views_RubricBuilderFullvue_type_script_lang_ts_ = (RubricBuilderFullvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/Views/RubricBuilderFull.vue?vue&type=style&index=0&lang=scss&
var RubricBuilderFullvue_type_style_index_0_lang_scss_ = __webpack_require__("1135");

// CONCATENATED MODULE: ./src/Views/RubricBuilderFull.vue






/* normalize component */

var RubricBuilderFull_component = normalizeComponent(
  Views_RubricBuilderFullvue_type_script_lang_ts_,
  RubricBuilderFullvue_type_template_id_f7d6068c_render,
  RubricBuilderFullvue_type_template_id_f7d6068c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Views_RubricBuilderFull = (RubricBuilderFull_component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/SaveArea.vue?vue&type=template&id=b7d70ad8&
var SaveAreavue_type_template_id_b7d70ad8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"save-state"},[(_vm.dataConnector && _vm.dataConnector.isSaving)?_c('div',{staticClass:"saving"},[_vm._v(" "+_vm._s(_vm.dataConnector.processingSize)+" wijziging"+_vm._s(_vm.dataConnector.processingSize === 1 ? '' : 'en')+"... ")]):(_vm.dataConnector)?_c('div',{staticClass:"saved",attrs:{"aria-live":"polite"}},[_vm._v(" Wijzigingen opgeslagen ")]):_vm._e()])}
var SaveAreavue_type_template_id_b7d70ad8_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/SaveArea.vue?vue&type=template&id=b7d70ad8&

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/SaveArea.vue?vue&type=script&lang=ts&





var SaveAreavue_type_script_lang_ts_a;





var SaveAreavue_type_script_lang_ts_SaveArea =
/*#__PURE__*/
function (_Vue) {
  _inherits(SaveArea, _Vue);

  function SaveArea() {
    _classCallCheck(this, SaveArea);

    return _possibleConstructorReturn(this, _getPrototypeOf(SaveArea).apply(this, arguments));
  }

  return SaveArea;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop(DataConnector_DataConnector), __metadata("design:type", Object)], SaveAreavue_type_script_lang_ts_SaveArea.prototype, "dataConnector", void 0);

SaveAreavue_type_script_lang_ts_SaveArea = __decorate([vue_class_component_esm({
  name: 'save-area',
  components: {}
})], SaveAreavue_type_script_lang_ts_SaveArea);
/* harmony default export */ var SaveAreavue_type_script_lang_ts_ = (SaveAreavue_type_script_lang_ts_SaveArea);
// CONCATENATED MODULE: ./src/Components/SaveArea.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Components_SaveAreavue_type_script_lang_ts_ = (SaveAreavue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/Components/SaveArea.vue





/* normalize component */

var SaveArea_component = normalizeComponent(
  Components_SaveAreavue_type_script_lang_ts_,
  SaveAreavue_type_template_id_b7d70ad8_render,
  SaveAreavue_type_template_id_b7d70ad8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Components_SaveArea = (SaveArea_component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Views/RubricBuilder.vue?vue&type=script&lang=ts&

















var RubricBuildervue_type_script_lang_ts_RubricBuilder =
/*#__PURE__*/
function (_Vue) {
  _inherits(RubricBuilder, _Vue);

  function RubricBuilder() {
    var _this;

    _classCallCheck(this, RubricBuilder);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RubricBuilder).apply(this, arguments));
    _this.selectedCriterium = null; //private showSplitView: boolean = false; // Set through uiState
    //private content: string = 'rubric'; // Set through uiState

    _this.dataConnector = null;
    _this.rubric = null;
    return _this;
  }

  _createClass(RubricBuilder, [{
    key: "selectCriterium",
    value: function selectCriterium(criterium) {
      this.selectedCriterium = criterium;
      this.uiState.selectedCriterium = criterium ? criterium.id : '';
    }
  }, {
    key: "created",
    value: function created() {
      /*this.$i18n.locale = document.documentElement.lang;*/
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var _this2 = this;

      if (this.rubricData) {
        this.rubric = Rubric_Rubric.fromJSON(this.rubricData);

        if (this.uiState.selectedCriterium) {
          var selectedCriterium = this.rubric.getAllCriteria().find(function (criterium) {
            return criterium.id === _this2.uiState.selectedCriterium;
          });

          if (selectedCriterium) {
            this.selectedCriterium = selectedCriterium;
          } else {
            this.uiState.selectedCriterium = '';
          }
        } // todo: get rubric data id


        this.dataConnector = new DataConnector_DataConnector(this.rubric, this.apiConfig, this.rubricData.rubric_data_id, this.version);
      }
    }
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {
      if (this.rubric) {
        this.$emit('rubric-updated', this.rubric.toJSON());
      }
    }
  }, {
    key: "showSplitView",
    get: function get() {
      return this.uiState.showSplitView;
    },
    set: function set(showSplitView) {
      this.uiState.showSplitView = showSplitView;
    }
  }, {
    key: "showLevelDescriptions",
    get: function get() {
      return this.uiState.showLevelDescriptions;
    },
    set: function set(showLevelDescriptions) {
      this.uiState.showLevelDescriptions = showLevelDescriptions;
    }
  }, {
    key: "content",
    get: function get() {
      return this.uiState.content;
    },
    set: function set(content) {
      this.uiState.content = content;
    }
  }]);

  return RubricBuilder;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: Object,
  default: null
}), __metadata("design:type", Object)], RubricBuildervue_type_script_lang_ts_RubricBuilder.prototype, "rubricData", void 0);

__decorate([Prop({
  type: Object,
  default: null
}), __metadata("design:type", Object)], RubricBuildervue_type_script_lang_ts_RubricBuilder.prototype, "apiConfig", void 0);

__decorate([Prop({
  type: Number,
  default: null
}), __metadata("design:type", Object)], RubricBuildervue_type_script_lang_ts_RubricBuilder.prototype, "version", void 0);

__decorate([Prop({
  type: Object
}), __metadata("design:type", Object)], RubricBuildervue_type_script_lang_ts_RubricBuilder.prototype, "uiState", void 0);

RubricBuildervue_type_script_lang_ts_RubricBuilder = __decorate([vue_class_component_esm({
  components: {
    ScoreRubricView: Components_ScoreRubricView,
    CriteriumDetailsView: CriteriumDetailsView,
    RubricBuilderFull: Views_RubricBuilderFull,
    SaveArea: Components_SaveArea
  }
})], RubricBuildervue_type_script_lang_ts_RubricBuilder);
/* harmony default export */ var RubricBuildervue_type_script_lang_ts_ = (RubricBuildervue_type_script_lang_ts_RubricBuilder);
// CONCATENATED MODULE: ./src/Views/RubricBuilder.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Views_RubricBuildervue_type_script_lang_ts_ = (RubricBuildervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/Views/RubricBuilder.vue?vue&type=style&index=0&lang=scss&
var RubricBuildervue_type_style_index_0_lang_scss_ = __webpack_require__("71eb");

// EXTERNAL MODULE: ./src/Views/RubricBuilder.vue?vue&type=custom&index=0&blockType=i18n
var RubricBuildervue_type_custom_index_0_blockType_i18n = __webpack_require__("5bc1");

// CONCATENATED MODULE: ./src/Views/RubricBuilder.vue






/* normalize component */

var RubricBuilder_component = normalizeComponent(
  Views_RubricBuildervue_type_script_lang_ts_,
  RubricBuildervue_type_template_id_ebf3f19e_render,
  RubricBuildervue_type_template_id_ebf3f19e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof RubricBuildervue_type_custom_index_0_blockType_i18n["default"] === 'function') Object(RubricBuildervue_type_custom_index_0_blockType_i18n["default"])(RubricBuilder_component)

/* harmony default export */ var Views_RubricBuilder = (RubricBuilder_component.exports);
// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-swatches/dist/vue-swatches.css
var vue_swatches = __webpack_require__("6485");

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Views/RubricBuilderWrapper.vue?vue&type=script&lang=ts&

















function sortFn(v1, v2) {
  return v1.sort > v2.sort ? 1 : -1;
}

var RubricBuilderWrappervue_type_script_lang_ts_RubricBuilderWrapper =
/*#__PURE__*/
function (_Vue) {
  _inherits(RubricBuilderWrapper, _Vue);

  function RubricBuilderWrapper() {
    var _this;

    _classCallCheck(this, RubricBuilderWrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RubricBuilderWrapper).apply(this, arguments));
    _this.uiState = {
      showSplitView: false,
      selectedCriterium: '',
      selectedClusterView1: '',
      selectedClusterView2: ''
    };
    return _this;
  }

  _createClass(RubricBuilderWrapper, [{
    key: "convertData",
    value: function convertData(d) {
      var data = {
        "rubric_data_id": d.id,
        "id": String(d.root_node.id),
        "useScores": d.use_scores,
        "title": d.root_node.title,
        "choices": [],
        "criteria": []
      };
      d.levels.sort(sortFn);
      data.levels = d.levels.map(function (level) {
        return {
          "id": String(level.id),
          "title": level.title,
          "description": level.description || '',
          "score": level.score,
          "is_default": level.is_default
        };
      });
      var clusters = (d.root_node.children || []).filter(function (v) {
        return v.type === 'cluster';
      });
      clusters.sort(sortFn);
      data.clusters = clusters.map(function (c) {
        var cluster = {
          "id": String(c.id),
          "title": c.title,
          "criteria": []
        };
        var categories = (c.children || []).filter(function (v) {
          return v.type === 'category';
        });
        categories.sort(sortFn);
        cluster.categories = categories.map(function (c) {
          var category = {
            "id": String(c.id),
            "title": c.title,
            "color": c.color || ''
          };
          var criteria = (c.children || []).filter(function (v) {
            return v.type === 'criterium';
          });
          criteria.sort(sortFn);
          category.criteria = criteria.map(function (c) {
            var criterium = {
              "id": String(c.id),
              "title": c.title,
              "weight": c.weight
            };
            var choices = c.choices || [];
            choices.sort(sortFn);
            choices.forEach(function (choice) {
              data.choices.push({
                "criterium_id": String(criterium.id),
                "level_id": String(choice.level.id),
                "selected": choice.selected,
                "feedback": choice.feedback || '',
                "has_fixed_score": choice.has_fixed_score,
                "fixed_score": choice.fixed_score
              });
            });
            return criterium;
          });
          return category;
        });
        return cluster;
      });
      return data;
    }
  }, {
    key: "created",
    value: function created() {
      this.convertedRubricData = this.convertData(this.rubricData);
    }
  }]);

  return RubricBuilderWrapper;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: Object,
  required: true
}), __metadata("design:type", Object)], RubricBuilderWrappervue_type_script_lang_ts_RubricBuilderWrapper.prototype, "apiConfig", void 0);

__decorate([Prop({
  type: Number,
  required: true
}), __metadata("design:type", Number)], RubricBuilderWrappervue_type_script_lang_ts_RubricBuilderWrapper.prototype, "version", void 0);

__decorate([Prop({
  type: Object,
  required: true
}), __metadata("design:type", Object)], RubricBuilderWrappervue_type_script_lang_ts_RubricBuilderWrapper.prototype, "rubricData", void 0);

RubricBuilderWrappervue_type_script_lang_ts_RubricBuilderWrapper = __decorate([vue_class_component_esm({
  components: {
    RubricBuilder: Views_RubricBuilder
  }
})], RubricBuilderWrappervue_type_script_lang_ts_RubricBuilderWrapper);
/* harmony default export */ var RubricBuilderWrappervue_type_script_lang_ts_ = (RubricBuilderWrappervue_type_script_lang_ts_RubricBuilderWrapper);
// CONCATENATED MODULE: ./src/Views/RubricBuilderWrapper.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Views_RubricBuilderWrappervue_type_script_lang_ts_ = (RubricBuilderWrappervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/Views/RubricBuilderWrapper.vue?vue&type=style&index=0&lang=scss&
var RubricBuilderWrappervue_type_style_index_0_lang_scss_ = __webpack_require__("f7f2");

// CONCATENATED MODULE: ./src/Views/RubricBuilderWrapper.vue






/* normalize component */

var RubricBuilderWrapper_component = normalizeComponent(
  Views_RubricBuilderWrappervue_type_script_lang_ts_,
  RubricBuilderWrappervue_type_template_id_5481c88c_render,
  RubricBuilderWrappervue_type_template_id_5481c88c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Views_RubricBuilderWrapper = (RubricBuilderWrapper_component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Views/RubricPreviewWrapper.vue?vue&type=template&id=594dbc73&
var RubricPreviewWrappervue_type_template_id_594dbc73_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid"},[(_vm.rubric)?_c('rubric-entry',{attrs:{"rubric":_vm.rubric,"preview":true,"ui-state":_vm.uiState}}):_vm._e()],1)}
var RubricPreviewWrappervue_type_template_id_594dbc73_staticRenderFns = []


// CONCATENATED MODULE: ./src/Views/RubricPreviewWrapper.vue?vue&type=template&id=594dbc73&

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Views/RubricEntry.vue?vue&type=template&id=5515c7d2&
var RubricEntryvue_type_template_id_5515c7d2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"entry-app",attrs:{"id":"app"}},[(_vm.rubric)?_c('div',{staticClass:"rubric",class:{'is-demo': _vm.options.isDemo, 'is-evaluator-selected': _vm.options.evaluator !== ''}},[_c('link',{attrs:{"rel":"stylesheet","href":"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"}}),_c('div',{staticClass:"rubric-entry-view"},[_c('div',{staticClass:"table-header-wrap",attrs:{"aria-hidden":"true"}},[_c('ul',{staticClass:"app-header-tools"},[_vm._t("demoEvaluator"),_c('li',{staticClass:"app-header-item"},[_c('button',{staticClass:"btn-check",class:{ checked: _vm.showDefaultFeedbackFields },attrs:{"aria-label":"Toon standaard feedback beschrijvingen","aria-expanded":_vm.showDefaultFeedbackFields ? 'true' : 'false'},on:{"click":function($event){$event.preventDefault();return _vm.toggleDefaultFeedbackFields($event)}}},[_c('span',{attrs:{"tabindex":"-1"}},[_c('i',{staticClass:"check fa",attrs:{"aria-hidden":"true"}}),_vm._v(_vm._s(_vm.options.isDemo ? 'Feedback' : 'Feedback beschrijvingen'))])])])],2),_c('div',{staticClass:"table-header"},_vm._l((_vm.rubric.levels),function(level){return _c('div',{staticClass:"table-header-title"},[_vm._v(" "+_vm._s(level.title)+" ")])}),0)]),_c('h1',{staticClass:"rubric-title"},[_vm._v(_vm._s(_vm.rubric.title))]),_c('ul',{staticClass:"clusters",class:{'is-feedback-visible': _vm.showDefaultFeedbackFields}},_vm._l((_vm.rubric.clusters),function(cluster){return (_vm.rubric.getAllCriteria(cluster).length > 0)?_c('li',{staticClass:"cluster-list-item"},[_c('div',{staticClass:"cluster"},[_c('h2',{staticClass:"cluster-title"},[_vm._v(_vm._s(cluster.title))]),_c('ul',{staticClass:"categories"},_vm._l((cluster.categories),function(category){return (_vm.rubric.getAllCriteria(category).length > 0)?_c('li',{staticClass:"category-list-item",style:(("--category-color: " + (category.title ? (category.color || '#999') : '#999')))},[_c('div',{staticClass:"category"},[(category.title)?_c('h3',{staticClass:"category-title category-indicator"},[_vm._v(_vm._s(category.title))]):_vm._e(),_c('ul',{staticClass:"criteria"},_vm._l((category.criteria),function(criterium){return _c('criterium-entry',{key:("criterium-" + (criterium.id) + "-key"),staticClass:"criterium-list-item",attrs:{"tag":"li","show-default-feedback-fields":_vm.showDefaultFeedbackFields,"criterium":criterium,"preview":_vm.preview,"ext":_vm.getCriteriumData(criterium),"evaluation":_vm.getCriteriumEvaluation(criterium)},on:{"level-selected":_vm.selectLevel,"feedback-changed":_vm.onCriteriumFeedbackChanged}})}),1)])]):_vm._e()}),0),_c('div',{staticClass:"subtotal cluster-total"},[_c('div',{staticClass:"cluster-total-title"},[_vm._v("Totaal "+_vm._s(cluster.title)+":")]),_c('div',{staticClass:"score-wrap"},[_c('div',{staticClass:"score-number"},[_vm._v(_vm._s(_vm.getClusterScore(cluster))+" "),_c('span',{staticClass:"text-hidden"},[_vm._v("punten")])])])])])]):_vm._e()}),0),_c('div',{staticClass:"subtotal rubric-total"},[_c('div',{staticClass:"rubric-total-title"},[_vm._v("Totaal Rubric:")]),_c('div',{staticClass:"score-wrap"},[_c('div',{staticClass:"score-number"},[_vm._v(_vm._s(_vm.getRubricScore())+" "),_c('span',{staticClass:"text-hidden"},[_vm._v("punten")])])])]),_c('div',{staticClass:"subtotal rubric-total-max"},[_c('div',{staticClass:"rubric-total-title"},[_vm._v("Maximum:")]),_c('div',{staticClass:"score-wrap"},[_c('div',{staticClass:"score-number mod-max"},[_vm._v(_vm._s(_vm.rubric.getMaximumScore())+" "),_c('span',{staticClass:"text-hidden"},[_vm._v("punten")])])])])])]):_vm._e()])}
var RubricEntryvue_type_template_id_5515c7d2_staticRenderFns = []


// CONCATENATED MODULE: ./src/Views/RubricEntry.vue?vue&type=template&id=5515c7d2&

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/CriteriumEntry.vue?vue&type=template&id=f444d06a&
var CriteriumEntryvue_type_template_id_f444d06a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",class:{'is-feedback-visible': _vm.ext.showDefaultFeedback },attrs:{"role":"grid"}},[_c('div',{staticClass:"criterium",attrs:{"role":"row"}},[_c('div',{staticClass:"criterium-title-header",attrs:{"role":"gridcell"}},[_c('h4',{staticClass:"criterium-title category-indicator",attrs:{"id":("criterium-" + (_vm.criterium.id) + "-title")}},[_vm._v(_vm._s(_vm.criterium.title))]),(!_vm.showDefaultFeedbackFields)?_c('button',{staticClass:"btn-more",attrs:{"aria-label":"Toon standaard feedback beschrijving criterium","aria-expanded":_vm.ext.showDefaultFeedback ? 'true' : 'false'},on:{"click":function($event){$event.preventDefault();_vm.ext.showDefaultFeedback = !_vm.ext.showDefaultFeedback}}},[_c('i',{staticClass:"check fa",attrs:{"tabindex":"-1","aria-hidden":"true"}})]):_vm._e()]),_vm._l((_vm.ext.choices),function(choice){return _c('div',{staticClass:"criterium-level",attrs:{"role":"gridcell","aria-describedby":("criterium-" + (_vm.criterium.id) + "-title")}},[(_vm.preview)?_c('div',{staticClass:"criterium-level-header",class:{ selected: choice.level.isDefault },attrs:{"aria-checked":choice.level.isDefault}},[_c('div',{staticClass:"criterium-level-title"},[_vm._v(" "+_vm._s(choice.title)+" ")]),_c('span',{staticClass:"score-number",attrs:{"aria-label":((choice.score) + " punten")}},[_vm._v(_vm._s(choice.score))])]):_c('button',{staticClass:"criterium-level-header btn-score-number",class:{ selected: _vm.isSelected(choice.level) },attrs:{"role":"radio","aria-checked":_vm.isSelected(choice.level)},on:{"click":function($event){return _vm.selectLevel(choice.level)}}},[_c('div',{staticClass:"criterium-level-title"},[_vm._v(" "+_vm._s(choice.title)+" ")]),_c('span',{staticClass:"score-number",attrs:{"aria-label":((choice.score) + " punten")}},[_vm._v(_vm._s(choice.score))])]),_c('div',{staticClass:"default-feedback"},[_vm._v(" "+_vm._s(choice.feedback)+" ")])])}),_c('div',{staticClass:"subtotal criterium-total",attrs:{"role":"gridcell","aria-describedby":("criterium-" + (_vm.criterium.id) + "-title")}},[_c('div',{staticClass:"score-number"},[_c('span',{staticClass:"text-hidden"},[_vm._v("Totaal:")]),_vm._v(" "+_vm._s(_vm.preview ? 0 : _vm.criteriumScore)+" "),_c('span',{staticClass:"text-hidden"},[_vm._v("punten")])])])],2),_c('div',{staticClass:"custom-feedback"},[(_vm.evaluation)?_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.evaluation.feedback),expression:"evaluation.feedback"}],attrs:{"placeholder":"Geef Feedback"},domProps:{"value":(_vm.evaluation.feedback)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.evaluation, "feedback", $event.target.value)},function($event){return _vm.$emit('feedback-changed', _vm.evaluation)}]}}):_vm._e()])])}
var CriteriumEntryvue_type_template_id_f444d06a_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/CriteriumEntry.vue?vue&type=template&id=f444d06a&

// EXTERNAL MODULE: ./src/Domain/util.ts
var util = __webpack_require__("c40e");

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/CriteriumEntry.vue?vue&type=script&lang=ts&






var CriteriumEntryvue_type_script_lang_ts_a, CriteriumEntryvue_type_script_lang_ts_b, CriteriumEntryvue_type_script_lang_ts_c, CriteriumEntryvue_type_script_lang_ts_d;






var CriteriumEntryvue_type_script_lang_ts_CriteriumEntry =
/*#__PURE__*/
function (_Vue) {
  _inherits(CriteriumEntry, _Vue);

  function CriteriumEntry() {
    _classCallCheck(this, CriteriumEntry);

    return _possibleConstructorReturn(this, _getPrototypeOf(CriteriumEntry).apply(this, arguments));
  }

  _createClass(CriteriumEntry, [{
    key: "isSelected",
    value: function isSelected(level) {
      if (!this.evaluation) {
        return level.isDefault;
      }

      return this.evaluation.level === level;
    }
  }, {
    key: "selectLevel",
    value: function selectLevel(level) {
      if (!this.evaluation) {
        return;
      }

      this.$emit('level-selected', this.evaluation, level);
    }
  }, {
    key: "criteriumScore",
    get: function get() {
      if (!this.evaluation) {
        return 0;
      }

      return this.evaluation.score || 0;
    }
  }]);

  return CriteriumEntry;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: String,
  default: 'div'
}), __metadata("design:type", typeof (CriteriumEntryvue_type_script_lang_ts_a = typeof String !== "undefined" && String) === "function" ? CriteriumEntryvue_type_script_lang_ts_a : Object)], CriteriumEntryvue_type_script_lang_ts_CriteriumEntry.prototype, "tag", void 0);

__decorate([Prop({
  type: Criterium_Criterium,
  required: true
}), __metadata("design:type", typeof (CriteriumEntryvue_type_script_lang_ts_b = typeof Criterium_Criterium !== "undefined" && Criterium_Criterium) === "function" ? CriteriumEntryvue_type_script_lang_ts_b : Object)], CriteriumEntryvue_type_script_lang_ts_CriteriumEntry.prototype, "criterium", void 0);

__decorate([Prop({
  type: Boolean
}), __metadata("design:type", Boolean)], CriteriumEntryvue_type_script_lang_ts_CriteriumEntry.prototype, "showDefaultFeedbackFields", void 0);

__decorate([Prop({
  type: Object
}), __metadata("design:type", typeof (CriteriumEntryvue_type_script_lang_ts_c = typeof util["CriteriumExt"] !== "undefined" && util["CriteriumExt"]) === "function" ? CriteriumEntryvue_type_script_lang_ts_c : Object)], CriteriumEntryvue_type_script_lang_ts_CriteriumEntry.prototype, "ext", void 0);

__decorate([Prop({
  type: Object
}), __metadata("design:type", Object)], CriteriumEntryvue_type_script_lang_ts_CriteriumEntry.prototype, "evaluation", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], CriteriumEntryvue_type_script_lang_ts_CriteriumEntry.prototype, "preview", void 0);

CriteriumEntryvue_type_script_lang_ts_CriteriumEntry = __decorate([vue_class_component_esm({})], CriteriumEntryvue_type_script_lang_ts_CriteriumEntry);
/* harmony default export */ var CriteriumEntryvue_type_script_lang_ts_ = (CriteriumEntryvue_type_script_lang_ts_CriteriumEntry);
// CONCATENATED MODULE: ./src/Components/CriteriumEntry.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Components_CriteriumEntryvue_type_script_lang_ts_ = (CriteriumEntryvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/Components/CriteriumEntry.vue





/* normalize component */

var CriteriumEntry_component = normalizeComponent(
  Components_CriteriumEntryvue_type_script_lang_ts_,
  CriteriumEntryvue_type_template_id_f444d06a_render,
  CriteriumEntryvue_type_template_id_f444d06a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Components_CriteriumEntry = (CriteriumEntry_component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Views/RubricEntry.vue?vue&type=script&lang=ts&











var RubricEntryvue_type_script_lang_ts_a;






function add(v1, v2) {
  return v1 + v2;
}

var RubricEntryvue_type_script_lang_ts_RubricEntry =
/*#__PURE__*/
function (_Vue) {
  _inherits(RubricEntry, _Vue);

  function RubricEntry() {
    var _this;

    _classCallCheck(this, RubricEntry);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RubricEntry).apply(this, arguments));
    _this.criteriaData = [];
    return _this;
  }

  _createClass(RubricEntry, [{
    key: "toggleDefaultFeedbackFields",
    value: function toggleDefaultFeedbackFields() {
      var _this2 = this;

      this.uiState.showDefaultFeedbackFields = !this.uiState.showDefaultFeedbackFields;

      if (!this.uiState.showDefaultFeedbackFields) {
        this.rubric.getAllCriteria().forEach(function (criterium) {
          _this2.getCriteriumData(criterium).showDefaultFeedback = false;
        });
      }
    }
  }, {
    key: "onCriteriumFeedbackChanged",
    value: function onCriteriumFeedbackChanged(evaluation) {
      if (!evaluation) {
        return;
      }

      this.$emit('criterium-feedback-changed', evaluation.criterium, evaluation.feedback);
    }
  }, {
    key: "isSelected",
    value: function isSelected(criterium, level) {
      var isDefaultLevel = level.isDefault;

      if (!this.criteriumEvaluations) {
        return isDefaultLevel;
      }

      var evaluation = this.criteriumEvaluations.find(function (evaluation) {
        return evaluation.criterium === criterium;
      });

      if (!evaluation || !evaluation.level) {
        return isDefaultLevel;
      }

      return evaluation.level === level;
    }
  }, {
    key: "selectLevel",
    value: function selectLevel(evaluation, level) {
      evaluation.level = level;
      evaluation.score = this.rubric.getChoiceScore(evaluation.criterium, level);
      this.$emit('level-selected', evaluation.criterium, level);
    }
  }, {
    key: "getCriteriumScore",
    value: function getCriteriumScore(criterium) {
      if (this.preview) {
        return 0;
      }

      var evaluation = this.criteriumEvaluations.find(function (evaluation) {
        return evaluation.criterium === criterium;
      });

      if (!evaluation) {
        return 0;
      }

      return evaluation.score || 0;
    }
  }, {
    key: "getCategoryScore",
    value: function getCategoryScore(category) {
      var _this3 = this;

      if (this.preview) {
        return 0;
      }

      return this.rubric.getAllCriteria(category).map(function (criterium) {
        return _this3.getCriteriumScore(criterium);
      }).reduce(add, 0);
    }
  }, {
    key: "getClusterScore",
    value: function getClusterScore(cluster) {
      var _this4 = this;

      if (this.preview) {
        return 0;
      }

      return this.rubric.getAllCriteria(cluster).map(function (criterium) {
        return _this4.getCriteriumScore(criterium);
      }).reduce(add, 0);
    }
  }, {
    key: "getRubricScore",
    value: function getRubricScore() {
      var _this5 = this;

      if (this.preview) {
        return 0;
      }

      return this.rubric.getAllCriteria().map(function (criterium) {
        return _this5.getCriteriumScore(criterium);
      }).reduce(add, 0);
    }
  }, {
    key: "getCriteriumData",
    value: function getCriteriumData(criterium) {
      var criteriumExt = this.criteriaData.find(function (_) {
        return _.criterium === criterium;
      });
      return criteriumExt || null;
    }
  }, {
    key: "getCriteriumEvaluation",
    value: function getCriteriumEvaluation(criterium) {
      var criteriumEvaluation = this.criteriumEvaluations.find(function (_) {
        return _.criterium === criterium;
      });
      return criteriumEvaluation || null;
    }
  }, {
    key: "initData",
    value: function initData() {
      var rubric = this.rubric;
      var levels = rubric.levels;
      this.criteriaData = rubric.getAllCriteria().map(function (criterium) {
        var choices = levels.map(function (level) {
          var choice = rubric.getChoice(criterium, level);
          var score = rubric.getChoiceScore(criterium, level);
          return {
            title: level.title,
            feedback: (choice === null || choice === void 0 ? void 0 : choice.feedback) || '',
            score: score,
            choice: choice,
            level: level
          };
        });
        return {
          criterium: criterium,
          choices: choices,
          showDefaultFeedback: false
        };
      });
    }
  }, {
    key: "created",
    value: function created() {
      this.initData();
    }
  }, {
    key: "showDefaultFeedbackFields",
    get: function get() {
      return this.uiState.showDefaultFeedbackFields;
    }
  }]);

  return RubricEntry;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: Rubric_Rubric
}), __metadata("design:type", typeof (RubricEntryvue_type_script_lang_ts_a = typeof Rubric_Rubric !== "undefined" && Rubric_Rubric) === "function" ? RubricEntryvue_type_script_lang_ts_a : Object)], RubricEntryvue_type_script_lang_ts_RubricEntry.prototype, "rubric", void 0);

__decorate([Prop({
  type: Array,
  default: function _default() {
    return [];
  }
}), __metadata("design:type", Array)], RubricEntryvue_type_script_lang_ts_RubricEntry.prototype, "criteriumEvaluations", void 0);

__decorate([Prop({
  type: Object
}), __metadata("design:type", Object)], RubricEntryvue_type_script_lang_ts_RubricEntry.prototype, "uiState", void 0);

__decorate([Prop({
  type: Object,
  default: function _default() {
    return {};
  }
}), __metadata("design:type", Object)], RubricEntryvue_type_script_lang_ts_RubricEntry.prototype, "options", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], RubricEntryvue_type_script_lang_ts_RubricEntry.prototype, "preview", void 0);

RubricEntryvue_type_script_lang_ts_RubricEntry = __decorate([vue_class_component_esm({
  components: {
    CriteriumEntry: Components_CriteriumEntry
  }
})], RubricEntryvue_type_script_lang_ts_RubricEntry);
/* harmony default export */ var RubricEntryvue_type_script_lang_ts_ = (RubricEntryvue_type_script_lang_ts_RubricEntry);
// CONCATENATED MODULE: ./src/Views/RubricEntry.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Views_RubricEntryvue_type_script_lang_ts_ = (RubricEntryvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/Views/RubricEntry.vue?vue&type=style&index=0&lang=scss&
var RubricEntryvue_type_style_index_0_lang_scss_ = __webpack_require__("6bbe");

// CONCATENATED MODULE: ./src/Views/RubricEntry.vue






/* normalize component */

var RubricEntry_component = normalizeComponent(
  Views_RubricEntryvue_type_script_lang_ts_,
  RubricEntryvue_type_template_id_5515c7d2_render,
  RubricEntryvue_type_template_id_5515c7d2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Views_RubricEntry = (RubricEntry_component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Views/RubricPreviewWrapper.vue?vue&type=script&lang=ts&
















function RubricPreviewWrappervue_type_script_lang_ts_sortFn(v1, v2) {
  return v1.sort > v2.sort ? 1 : -1;
}

var RubricPreviewWrappervue_type_script_lang_ts_RubricPreviewWrapper =
/*#__PURE__*/
function (_Vue) {
  _inherits(RubricPreviewWrapper, _Vue);

  function RubricPreviewWrapper() {
    var _this;

    _classCallCheck(this, RubricPreviewWrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RubricPreviewWrapper).apply(this, arguments));
    _this.uiState = {
      showDefaultFeedbackFields: false
    };
    return _this;
  }

  _createClass(RubricPreviewWrapper, [{
    key: "convertData",
    value: function convertData(d) {
      var data = {
        "rubric_data_id": d.id,
        "id": String(d.root_node.id),
        "useScores": d.use_scores,
        "title": d.root_node.title,
        "choices": [],
        "criteria": []
      };
      d.levels.sort(RubricPreviewWrappervue_type_script_lang_ts_sortFn);
      data.levels = d.levels.map(function (level) {
        return {
          "id": String(level.id),
          "title": level.title,
          "description": level.description || '',
          "score": level.score,
          "is_default": level.is_default
        };
      });
      var clusters = (d.root_node.children || []).filter(function (v) {
        return v.type === 'cluster';
      });
      clusters.sort(RubricPreviewWrappervue_type_script_lang_ts_sortFn);
      data.clusters = clusters.map(function (c) {
        var cluster = {
          "id": String(c.id),
          "title": c.title,
          "criteria": []
        };
        var categories = (c.children || []).filter(function (v) {
          return v.type === 'category';
        });
        categories.sort(RubricPreviewWrappervue_type_script_lang_ts_sortFn);
        cluster.categories = categories.map(function (c) {
          var category = {
            "id": String(c.id),
            "title": c.title,
            "color": c.color || ''
          };
          var criteria = (c.children || []).filter(function (v) {
            return v.type === 'criterium';
          });
          criteria.sort(RubricPreviewWrappervue_type_script_lang_ts_sortFn);
          category.criteria = criteria.map(function (c) {
            var criterium = {
              "id": String(c.id),
              "title": c.title,
              "weight": c.weight
            };
            var choices = c.choices || [];
            choices.sort(RubricPreviewWrappervue_type_script_lang_ts_sortFn);
            choices.forEach(function (choice) {
              data.choices.push({
                "criterium_id": String(criterium.id),
                "level_id": String(choice.level.id),
                "selected": choice.selected,
                "feedback": choice.feedback || '',
                "has_fixed_score": choice.has_fixed_score,
                "fixed_score": choice.fixed_score
              });
            });
            return criterium;
          });
          return category;
        });
        return cluster;
      });
      return data;
    }
  }, {
    key: "created",
    value: function created() {
      this.convertedRubricData = this.convertData(this.rubricData);
      this.rubric = Rubric_Rubric.fromJSON(this.convertedRubricData);
    }
  }]);

  return RubricPreviewWrapper;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: Object,
  required: true
}), __metadata("design:type", Object)], RubricPreviewWrappervue_type_script_lang_ts_RubricPreviewWrapper.prototype, "rubricData", void 0);

RubricPreviewWrappervue_type_script_lang_ts_RubricPreviewWrapper = __decorate([vue_class_component_esm({
  components: {
    RubricEntry: Views_RubricEntry
  }
})], RubricPreviewWrappervue_type_script_lang_ts_RubricPreviewWrapper);
/* harmony default export */ var RubricPreviewWrappervue_type_script_lang_ts_ = (RubricPreviewWrappervue_type_script_lang_ts_RubricPreviewWrapper);
// CONCATENATED MODULE: ./src/Views/RubricPreviewWrapper.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Views_RubricPreviewWrappervue_type_script_lang_ts_ = (RubricPreviewWrappervue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/Views/RubricPreviewWrapper.vue





/* normalize component */

var RubricPreviewWrapper_component = normalizeComponent(
  Views_RubricPreviewWrappervue_type_script_lang_ts_,
  RubricPreviewWrappervue_type_template_id_594dbc73_render,
  RubricPreviewWrappervue_type_template_id_594dbc73_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Views_RubricPreviewWrapper = (RubricPreviewWrapper_component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-router/dist/vue-router.esm.js
/*!
  * vue-router v3.3.2
  * (c) 2020 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function vue_router_esm_warn (condition, message) {
  if (false) {}
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

function isRouterError (err, errorType) {
  return isError(err) && err._isRouter && (errorType == null || err.type === errorType)
}

function extend (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

var View = {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    // used by devtools to display a router-view badge
    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      var vnodeData = parent.$vnode ? parent.$vnode.data : {};
      if (vnodeData.routerView) {
        depth++;
      }
      if (vnodeData.keepAlive && parent._directInactive && parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      var cachedData = cache[name];
      var cachedComponent = cachedData && cachedData.component;
      if (cachedComponent) {
        // #2301
        // pass props
        if (cachedData.configProps) {
          fillPropsinData(cachedComponent, data, cachedData.route, cachedData.configProps);
        }
        return h(cachedComponent, data, children)
      } else {
        // render previous empty view
        return h()
      }
    }

    var matched = route.matched[depth];
    var component = matched && matched.components[name];

    // render empty node if no matched route or no config component
    if (!matched || !component) {
      cache[name] = null;
      return h()
    }

    // cache component
    cache[name] = { component: component };

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // register instance in init hook
    // in case kept-alive component be actived when routes changed
    data.hook.init = function (vnode) {
      if (vnode.data.keepAlive &&
        vnode.componentInstance &&
        vnode.componentInstance !== matched.instances[name]
      ) {
        matched.instances[name] = vnode.componentInstance;
      }
    };

    var configProps = matched.props && matched.props[name];
    // save route and configProps in cachce
    if (configProps) {
      extend(cache[name], {
        route: route,
        configProps: configProps
      });
      fillPropsinData(component, data, route, configProps);
    }

    return h(component, data, children)
  }
};

function fillPropsinData (component, data, route, configProps) {
  // resolve props
  var propsToPass = data.props = resolveProps(route, configProps);
  if (propsToPass) {
    // clone to prevent mutation
    propsToPass = data.props = extend({}, propsToPass);
    // pass non-declared props as attrs
    var attrs = data.attrs = data.attrs || {};
    for (var key in propsToPass) {
      if (!component.props || !(key in component.props)) {
        attrs[key] = propsToPass[key];
        delete propsToPass[key];
      }
    }
  }
}

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (false) {}
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
     false && false;
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  params = params || {};
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));

    // Fix #2505 resolving asterisk routes { name: 'not-found', params: { pathMatch: '/not-found' }}
    // and fix #3106 so that you can work with location descriptor object having params.pathMatch equal to empty string
    if (typeof params.pathMatch === 'string') { params[0] = params.pathMatch; }

    return filler(params, { pretty: true })
  } catch (e) {
    if (false) {}
    return ''
  } finally {
    // delete the 0 if it was added
    delete params[0];
  }
}

/*  */

function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next._normalized) {
    return next
  } else if (next.name) {
    next = extend({}, raw);
    var params = next.params;
    if (params && typeof params === 'object') {
      next.params = extend({}, params);
    }
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params$1 = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params$1;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params$1, ("path " + (current.path)));
    } else if (false) {}
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var noop = function () {};

var Link = {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    ariaCurrentValue: {
      type: String,
      default: 'page'
    },
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(
      this.to,
      current,
      this.append
    );
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback =
      globalActiveClass == null ? 'router-link-active' : globalActiveClass;
    var exactActiveClassFallback =
      globalExactActiveClass == null
        ? 'router-link-exact-active'
        : globalExactActiveClass;
    var activeClass =
      this.activeClass == null ? activeClassFallback : this.activeClass;
    var exactActiveClass =
      this.exactActiveClass == null
        ? exactActiveClassFallback
        : this.exactActiveClass;

    var compareTarget = route.redirectedFrom
      ? createRoute(null, normalizeLocation(route.redirectedFrom), null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var ariaCurrentValue = classes[exactActiveClass] ? this.ariaCurrentValue : null;

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location, noop);
        } else {
          router.push(location, noop);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) {
        on[e] = handler;
      });
    } else {
      on[this.event] = handler;
    }

    var data = { class: classes };

    var scopedSlot =
      !this.$scopedSlots.$hasNormal &&
      this.$scopedSlots.default &&
      this.$scopedSlots.default({
        href: href,
        route: route,
        navigate: handler,
        isActive: classes[activeClass],
        isExactActive: classes[exactActiveClass]
      });

    if (scopedSlot) {
      if (scopedSlot.length === 1) {
        return scopedSlot[0]
      } else if (scopedSlot.length > 1 || !scopedSlot.length) {
        if (false) {}
        return scopedSlot.length === 0 ? h() : h('span', {}, scopedSlot)
      }
    }

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href, 'aria-current': ariaCurrentValue };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var aData = (a.data = extend({}, a.data));
        aData.on = aData.on || {};
        // transform existing events in both objects into arrays so we can push later
        for (var event in aData.on) {
          var handler$1 = aData.on[event];
          if (event in on) {
            aData.on[event] = Array.isArray(handler$1) ? handler$1 : [handler$1];
          }
        }
        // append new listeners for router-link
        for (var event$1 in on) {
          if (event$1 in aData.on) {
            // on[event] is always a function
            aData.on[event$1].push(on[event$1]);
          } else {
            aData.on[event$1] = handler;
          }
        }

        var aAttrs = (a.data.attrs = extend({}, a.data.attrs));
        aAttrs.href = href;
        aAttrs['aria-current'] = ariaCurrentValue;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var vue_router_esm_Vue;

function vue_router_esm_install (Vue) {
  if (vue_router_esm_install.installed && vue_router_esm_Vue === Vue) { return }
  vue_router_esm_install.installed = true;

  vue_router_esm_Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  if (false) { var pathNames, found; }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (false) {}

  var pathToRegexpOptions =
    route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props:
      route.props == null
        ? {}
        : route.components
          ? route.props
          : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (false) {}
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];
    for (var i = 0; i < aliases.length; ++i) {
      var alias = aliases[i];
      if (false) {}

      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    }
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (false) {}
  }
}

function compileRouteRegex (
  path,
  pathToRegexpOptions
) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (false) { var keys; }
  return regex
}

function normalizePath (
  path,
  parent,
  strict
) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */



function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (false) {}
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
      return _createRoute(record, location, redirectedFrom)
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
      ? originalRedirect(createRoute(record, location, null, router))
      : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (false) {}
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (false) {}
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (false) {}
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || 'pathMatch'] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */

// use User Timing api (if present) for more accurate key precision
var Time =
  inBrowser && window.performance && window.performance.now
    ? window.performance
    : Date;

function genStateKey () {
  return Time.now().toFixed(3)
}

var vue_router_esm_key = genStateKey();

function getStateKey () {
  return vue_router_esm_key
}

function setStateKey (key) {
  return (vue_router_esm_key = key)
}

/*  */

var positionStore = Object.create(null);

function setupScroll () {
  // Prevent browser scroll behavior on History popstate
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
  // Fix for #1585 for Firefox
  // Fix for #2195 Add optional third attribute to workaround a bug in safari https://bugs.webkit.org/show_bug.cgi?id=182678
  // Fix for #2774 Support for apps loaded from Windows file shares not mapped to network drives: replaced location.origin with
  // window.location.protocol + '//' + window.location.host
  // location.host contains the port and location.hostname doesn't
  var protocolAndPath = window.location.protocol + '//' + window.location.host;
  var absolutePath = window.location.href.replace(protocolAndPath, '');
  // preserve existing history state as it could be overriden by the user
  var stateCopy = extend({}, window.history.state);
  stateCopy.key = getStateKey();
  window.history.replaceState(stateCopy, '', absolutePath);
  window.addEventListener('popstate', handlePopState);
  return function () {
    window.removeEventListener('popstate', handlePopState);
  }
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (false) {}

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(
      router,
      to,
      from,
      isPop ? position : null
    );

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll
        .then(function (shouldScroll) {
          scrollToPosition((shouldScroll), position);
        })
        .catch(function (err) {
          if (false) {}
        });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function handlePopState (e) {
  saveScrollPosition();
  if (e.state && e.state.key) {
    setStateKey(e.state.key);
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

var hashStartsWithNumberRE = /^#\d/;

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    // getElementById would still fail if the selector contains a more complicated query like #main[data-attr]
    // but at the same time, it doesn't make much sense to select an element with an id and an extra selector
    var el = hashStartsWithNumberRE.test(shouldScroll.selector) // $flow-disable-line
      ? document.getElementById(shouldScroll.selector.slice(1)) // $flow-disable-line
      : document.querySelector(shouldScroll.selector);

    if (el) {
      var offset =
        shouldScroll.offset && typeof shouldScroll.offset === 'object'
          ? shouldScroll.offset
          : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState =
  inBrowser &&
  (function () {
    var ua = window.navigator.userAgent;

    if (
      (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
      ua.indexOf('Mobile Safari') !== -1 &&
      ua.indexOf('Chrome') === -1 &&
      ua.indexOf('Windows Phone') === -1
    ) {
      return false
    }

    return window.history && typeof window.history.pushState === 'function'
  })();

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      // preserve existing history state as it could be overriden by the user
      var stateCopy = extend({}, history.state);
      stateCopy.key = getStateKey();
      history.replaceState(stateCopy, '', url);
    } else {
      history.pushState({ key: setStateKey(genStateKey()) }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : vue_router_esm_Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
           false && false;
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

var NavigationFailureType = {
  redirected: 1,
  aborted: 2,
  cancelled: 3,
  duplicated: 4
};

function createNavigationRedirectedError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.redirected,
    ("Redirected from \"" + (from.fullPath) + "\" to \"" + (stringifyRoute(to)) + "\" via a navigation guard.")
  )
}

function createNavigationDuplicatedError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.duplicated,
    ("Avoided redundant navigation to current location: \"" + (from.fullPath) + "\".")
  )
}

function createNavigationCancelledError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.cancelled,
    ("Navigation cancelled from \"" + (from.fullPath) + "\" to \"" + (to.fullPath) + "\" with a new navigation.")
  )
}

function createNavigationAbortedError (from, to) {
  return createRouterError(
    from,
    to,
    NavigationFailureType.aborted,
    ("Navigation aborted from \"" + (from.fullPath) + "\" to \"" + (to.fullPath) + "\" via a navigation guard.")
  )
}

function createRouterError (from, to, type, message) {
  var error = new Error(message);
  error._isRouter = true;
  error.from = from;
  error.to = to;
  error.type = type;

  return error
}

var propertiesToLog = ['params', 'query', 'hash'];

function stringifyRoute (to) {
  if (typeof to === 'string') { return to }
  if ('path' in to) { return to.path }
  var location = {};
  propertiesToLog.forEach(function (key) {
    if (key in to) { location[key] = to[key]; }
  });
  return JSON.stringify(location, null, 2)
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
  this.listeners = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (
  location,
  onComplete,
  onAbort
) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(
    route,
    function () {
      var prev = this$1.current;
      this$1.updateRoute(route);
      onComplete && onComplete(route);
      this$1.ensureURL();
      this$1.router.afterHooks.forEach(function (hook) {
        hook && hook(route, prev);
      });

      // fire ready cbs once
      if (!this$1.ready) {
        this$1.ready = true;
        this$1.readyCbs.forEach(function (cb) {
          cb(route);
        });
      }
    },
    function (err) {
      if (onAbort) {
        onAbort(err);
      }
      if (err && !this$1.ready) {
        this$1.ready = true;
        this$1.readyErrorCbs.forEach(function (cb) {
          cb(err);
        });
      }
    }
  );
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    // changed after adding errors with
    // https://github.com/vuejs/vue-router/pull/3047 before that change,
    // redirect and aborted navigation would produce an err == null
    if (!isRouterError(err) && isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) {
          cb(err);
        });
      } else {
        vue_router_esm_warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort(createNavigationDuplicatedError(current, route))
  }

  var ref = resolveQueue(
    this.current.matched,
    route.matched
  );
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort(createNavigationCancelledError(current, route))
    }
    try {
      hook(route, current, function (to) {
        if (to === false) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(createNavigationAbortedError(current, route));
        } else if (isError(to)) {
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' &&
            (typeof to.path === 'string' || typeof to.name === 'string'))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort(createNavigationRedirectedError(current, route));
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort(createNavigationCancelledError(current, route))
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) {
            cb();
          });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  this.current = route;
  this.cb && this.cb(route);
};

History.prototype.setupListeners = function setupListeners () {
  // Default implementation is empty
};

History.prototype.teardownListeners = function teardownListeners () {
  this.listeners.forEach(function (cleanupListener) {
    cleanupListener();
  });
  this.listeners = [];
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = vue_router_esm_Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(
    activated,
    'beforeRouteEnter',
    function (guard, _, match, key) {
      return bindEnterGuard(guard, match, key, cbs, isValid)
    }
  )
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
      next(cb);
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (
    instances[key] &&
    !instances[key]._isBeingDestroyed // do not reuse being destroyed instance
  ) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */

var HTML5History = /*@__PURE__*/(function (History) {
  function HTML5History (router, base) {
    History.call(this, router, base);

    this._startLocation = getLocation(this.base);
  }

  if ( History ) HTML5History.__proto__ = History;
  HTML5History.prototype = Object.create( History && History.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    if (this.listeners.length > 0) {
      return
    }

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      this.listeners.push(setupScroll());
    }

    var handleRoutingEvent = function () {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === this$1._startLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (supportsScroll) {
          handleScroll(router, route, current, true);
        }
      });
    };
    window.addEventListener('popstate', handleRoutingEvent);
    this.listeners.push(function () {
      window.removeEventListener('popstate', handleRoutingEvent);
    });
  };

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = decodeURI(window.location.pathname);
  if (base && path.toLowerCase().indexOf(base.toLowerCase()) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */

var HashHistory = /*@__PURE__*/(function (History) {
  function HashHistory (router, base, fallback) {
    History.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History ) HashHistory.__proto__ = History;
  HashHistory.prototype = Object.create( History && History.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    if (this.listeners.length > 0) {
      return
    }

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      this.listeners.push(setupScroll());
    }

    var handleRoutingEvent = function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    };
    var eventType = supportsPushState ? 'popstate' : 'hashchange';
    window.addEventListener(
      eventType,
      handleRoutingEvent
    );
    this.listeners.push(function () {
      window.removeEventListener(eventType, handleRoutingEvent);
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(
      location,
      function (route) {
        pushHash(route.fullPath);
        handleScroll(this$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(
      location,
      function (route) {
        replaceHash(route.fullPath);
        handleScroll(this$1.router, route, fromRoute, false);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(cleanPath(base + '/#' + location));
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  // empty path
  if (index < 0) { return '' }

  href = href.slice(index + 1);
  // decode the hash but not the search or hash
  // as search(query) is already decoded
  // https://github.com/vuejs/vue-router/issues/2708
  var searchIndex = href.indexOf('?');
  if (searchIndex < 0) {
    var hashIndex = href.indexOf('#');
    if (hashIndex > -1) {
      href = decodeURI(href.slice(0, hashIndex)) + href.slice(hashIndex);
    } else { href = decodeURI(href); }
  } else {
    href = decodeURI(href.slice(0, searchIndex)) + href.slice(searchIndex);
  }

  return href
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = /*@__PURE__*/(function (History) {
  function AbstractHistory (router, base) {
    History.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History ) AbstractHistory.__proto__ = History;
  AbstractHistory.prototype = Object.create( History && History.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(
      location,
      function (route) {
        this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
        this$1.index++;
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(
      location,
      function (route) {
        this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
        onComplete && onComplete(route);
      },
      onAbort
    );
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(
      route,
      function () {
        this$1.index = targetIndex;
        this$1.updateRoute(route);
      },
      function (err) {
        if (isRouterError(err, NavigationFailureType.duplicated)) {
          this$1.index = targetIndex;
        }
      }
    );
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */



var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (false) {}
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

   false && false;

  this.apps.push(app);

  // set up app destroyed handler
  // https://github.com/vuejs/vue-router/issues/2639
  app.$once('hook:destroyed', function () {
    // clean out app from this.apps array once destroyed
    var index = this$1.apps.indexOf(app);
    if (index > -1) { this$1.apps.splice(index, 1); }
    // ensure we still have a main app or null if no apps
    // we do not release the router so it can be reused
    if (this$1.app === app) { this$1.app = this$1.apps[0] || null; }

    if (!this$1.app) {
      // clean up event listeners
      // https://github.com/vuejs/vue-router/issues/2341
      this$1.history.teardownListeners();
    }
  });

  // main app previously initialized
  // return as we don't need to set up new history listener
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History || history instanceof HashHistory) {
    var setupListeners = function () {
      history.setupListeners();
    };
    history.transitionTo(history.getCurrentLocation(), setupListeners, setupListeners);
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1.history.push(location, resolve, reject);
    })
  } else {
    this.history.push(location, onComplete, onAbort);
  }
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

  // $flow-disable-line
  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1.history.replace(location, resolve, reject);
    })
  } else {
    this.history.replace(location, onComplete, onAbort);
  }
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  current = current || this.history.current;
  var location = normalizeLocation(
    to,
    current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = vue_router_esm_install;
VueRouter.version = '3.3.2';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ var vue_router_esm = (VueRouter);

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Views/RubricDemoHome.vue?vue&type=template&id=3d0a3150&
var RubricDemoHomevue_type_template_id_3d0a3150_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"demo-page",attrs:{"id":"app"}},[_c('link',{attrs:{"rel":"stylesheet","href":"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"}}),_c('h1',[_vm._v("Rubric Demo Page")]),_c('router-link',{staticClass:"rubric-demo-item",attrs:{"to":{ name: 'Builder' }}},[_c('i',{staticClass:"fa fa-institution"}),_vm._v("Builder")]),_c('router-link',{staticClass:"rubric-demo-item",attrs:{"to":{ name: 'Preview' }}},[_c('i',{staticClass:"fa fa-institution"}),_vm._v("Preview")]),_c('router-link',{staticClass:"rubric-demo-item",attrs:{"to":{ name: 'Entry' }}},[_c('i',{staticClass:"fa fa-edit"}),_vm._v("Entry")]),_c('router-link',{staticClass:"rubric-demo-item",attrs:{"to":{ name: 'Results' }}},[_c('i',{staticClass:"fa fa-calculator"}),_vm._v("Results")])],1)}
var RubricDemoHomevue_type_template_id_3d0a3150_staticRenderFns = []


// CONCATENATED MODULE: ./src/Views/RubricDemoHome.vue?vue&type=template&id=3d0a3150&

// EXTERNAL MODULE: ./src/Views/RubricDemoHome.vue?vue&type=style&index=0&lang=scss&
var RubricDemoHomevue_type_style_index_0_lang_scss_ = __webpack_require__("8414");

// CONCATENATED MODULE: ./src/Views/RubricDemoHome.vue

var script = {}



/* normalize component */

var RubricDemoHome_component = normalizeComponent(
  script,
  RubricDemoHomevue_type_template_id_3d0a3150_render,
  RubricDemoHomevue_type_template_id_3d0a3150_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RubricDemoHome = (RubricDemoHome_component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Views/RubricBuilderDemoWrapper.vue?vue&type=template&id=c2c89142&
var RubricBuilderDemoWrappervue_type_template_id_c2c89142_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid"},[_c('rubric-builder',{attrs:{"api-config":_vm.config,"rubric-data":_vm.store.rubricData,"version":_vm.version,"ui-state":_vm.store.uiState.builder},on:{"rubric-updated":_vm.onRubricUpdated}})],1)}
var RubricBuilderDemoWrappervue_type_template_id_c2c89142_staticRenderFns = []


// CONCATENATED MODULE: ./src/Views/RubricBuilderDemoWrapper.vue?vue&type=template&id=c2c89142&

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("49b6");

// CONCATENATED MODULE: ./src/store.ts
/* harmony default export */ var store = ({
  uiState: {
    builder: {
      showSplitView: false,
      selectedCriterium: '',
      selectedClusterView1: '',
      selectedClusterView2: ''
    },
    preview: {
      showDefaultFeedbackFields: false
    },
    entry: {
      showDefaultFeedbackFields: false,
      options: {
        isDemo: true,
        evaluator: ''
      }
    }
  },
  rubricData: {
    "id": "t9hnqokwvenfdgskc7ykas",
    "useScores": true,
    "title": "Holistisch scoren",
    "levels": [{
      "id": "ll1mno0a18hjedwy6w3jt",
      "title": "Overstijgt de verwachtingen",
      "description": "",
      "score": 10,
      "is_default": false
    }, {
      "id": "icoz2ha4bahqvqfi71slz",
      "title": "Voldoet aan de verwachtingen",
      "description": "",
      "score": 7,
      "is_default": false
    }, {
      "id": "ewl5t7raruutqf4gudx15",
      "title": "Voldoet bijna aan de verwachtingen",
      "description": "",
      "score": 4,
      "is_default": true
    }, {
      "id": "fcd66dsoj78g8jq0diks3b",
      "title": "Voldoet niet aan de verwachtingen",
      "description": "",
      "score": 0,
      "is_default": false
    }],
    "clusters": [{
      "id": "fbb3yazs9iaxc8zff4jurm",
      "title": "Holistisch scoren",
      "categories": [{
        "id": "r7z43w6cuzijn6782siusl",
        "title": "",
        "color": "#00943E",
        "criteria": [{
          "id": "fufp9nyhm59tpv834p7s5",
          "title": "Volledigheid antwoorden",
          "weight": 100
        }, {
          "id": "yjz8854ozprzhr2hw45wup",
          "title": "Onderbouwde mening",
          "weight": 100
        }]
      }],
      "criteria": []
    }, {
      "id": "v6ptmrbfp829l5wir7y1c",
      "title": "Professioneel Communiceren",
      "categories": [{
        "id": "qkpojkdo7195jmdwgw29sb",
        "title": "De student kan de basisprincipes van e-mail en social media policy in het Nederlands integreren in zijn of haar professionele communicatie.",
        "color": "#E76F01",
        "criteria": [{
          "id": "9ec44j2au3v1nl9sigksrq",
          "title": "Een professionele, doelgerichte en duidelijke e-mail opstellen.",
          "weight": 100
        }, {
          "id": "xzcorbibce20cm5g54xemi",
          "title": "De meest geschikte sociale media selecteren in een beroepscontext.",
          "weight": 100
        }, {
          "id": "aas2bl49lrnfl4i1m7uwho",
          "title": "Een kritische analyse maken van de e-mail en social media policy van bedrijven en organisaties.",
          "weight": 100
        }, {
          "id": "b6fxxz8q2nq21595ncj6od",
          "title": "De student kan taalkundig, stilistisch en lexicaal correct, zakelijk en helder formuleren.",
          "weight": 100
        }]
      }],
      "criteria": []
    }, {
      "id": "iltm24mgoemsoc8okbny",
      "title": "Bedrijfseconomisch handelen",
      "categories": [{
        "id": "iuxmxxycunsonrldrk16m",
        "title": "De student kan de normen van het bedrijf of de organisatie, de beroepsdeontologie en de maatschappelijke normen toepassen.",
        "color": "",
        "criteria": [{
          "id": "xkisqg35b4897yv42v0uwh",
          "title": "Een kritische analyse maken van een klant- en servicegerichte aanpak. ",
          "weight": 100
        }, {
          "id": "npq74gmgw7gykpvuyzai",
          "title": "De beroepsmogelijkheden (specifiek voor de afstudeerrichting) omschrijven.",
          "weight": 100
        }]
      }, {
        "id": "2jqipotb8yaw5cqh7nfvun",
        "title": "De student kan reflecteren over het beroepenveld, de klanten binnen de professionele werking en de servicegerichtheid.",
        "color": "",
        "criteria": [{
          "id": "m6aub4lk7xb3j3njnqf63c",
          "title": "Waarden en normen identificeren.",
          "weight": 100
        }, {
          "id": "0ws20lmnw5kk56h4mxnque",
          "title": "Persoonlijke waarden en normen aan die van een bedrijf of organisatie aftoetsen.",
          "weight": 100
        }, {
          "id": "6h2a07o2caeqeypvf1n8nj",
          "title": "Privacywetgeving, auteursrecht, portretrecht, beroepsgeheim, discretieplicht en vertrouwelijke gegevens van medewerkers en klanten of patiënten respecteren.",
          "weight": 100
        }]
      }],
      "criteria": []
    }, {
      "id": "0niw2sttq8erqq7w2zmpuah",
      "title": "Onderzoekend handelen",
      "categories": [{
        "id": "nbi1y48rvvzl3pszo33ko",
        "title": "De student kan reflecteren over creativiteit",
        "color": "",
        "criteria": [{
          "id": "6m1j1p07g5yb4jn8rxfds",
          "title": "Anders durven denken.",
          "weight": 100
        }, {
          "id": "0ckexyst4tadt2vppdqhbct",
          "title": "De adviezen en uitgewerkte alternatieven getuigen van inventiviteit en creativiteit.",
          "weight": 100
        }]
      }, {
        "id": "4rrpq53r2zebnssolx9io6",
        "title": "De student kan databanken, ook anderstalige, hanteren bij onderzoek.",
        "color": "",
        "criteria": [{
          "id": "hwdfiaeimmqk6tg4xv9d4",
          "title": "De meest geschikte databanken raadplegen.",
          "weight": 100
        }, {
          "id": "odvm3c1nde9gslxuas5q1m",
          "title": "De meest efficiënte zoekstrategieën toepassen.",
          "weight": 100
        }]
      }, {
        "id": "nlww6dbqzgi2a2u6lv7rk",
        "title": "De student kan de gepaste wetenschappelijke bronnen selecteren in het Nederlands, Frans en Engels.",
        "color": "",
        "criteria": [{
          "id": "a9rm6of2j6ox13skroxg6",
          "title": "Bronnen correct analyseren en interpreteren.",
          "weight": 100
        }, {
          "id": "7yh29o4t4zbuwdezsqiy08",
          "title": "De geraadpleegde bronnen kritisch integreren tot een gestructureerd en samenhangend verhaal.",
          "weight": 100
        }]
      }, {
        "id": "a57a1gng3gnp7pwunif49",
        "title": "De student kan correct bronnen refereren.",
        "color": "",
        "criteria": [{
          "id": "3bypc8f2th99zqdvfl5r9",
          "title": "Gebruikmaken van refereertools.",
          "weight": 100
        }, {
          "id": "tua60ec3j5oas4ki7sbkqk",
          "title": "Bronnen in de lopende tekst en in de bronnenlijst opnemen volgens de APA 6th-richtlijnen (American Psychological Association).",
          "weight": 100
        }]
      }, {
        "id": "n0r6vtcquw1q87k9td85h",
        "title": "De student kan zijn of haar visie met diepgaande argumenten onderbouwen.",
        "color": "",
        "criteria": []
      }],
      "criteria": []
    }],
    "choices": [{
      "selected": false,
      "feedback": "Student geeft steeds volledige en betrouwbare informatie. Alle informatie is opgenomen in de antwoorden.",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "fufp9nyhm59tpv834p7s5",
      "level_id": "ll1mno0a18hjedwy6w3jt"
    }, {
      "selected": false,
      "feedback": "Student geeft vaker wel dan niet volledige en betrouwbare informatie. Bijna alle informatie is opgenomen in de antwoorden.",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "fufp9nyhm59tpv834p7s5",
      "level_id": "icoz2ha4bahqvqfi71slz"
    }, {
      "selected": false,
      "feedback": "Student geeft vrij vaak onvolledige en twijfelachtige informatie, die vragen oproept. Niet alle informatie is opgenomen in de antwoorden.",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "fufp9nyhm59tpv834p7s5",
      "level_id": "ewl5t7raruutqf4gudx15"
    }, {
      "selected": false,
      "feedback": "Student geeft zo goed als altijd onvolledige en twijfelachtige informatie die vragen oproept. De antwoorden bevatten amper informatie.",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "fufp9nyhm59tpv834p7s5",
      "level_id": "fcd66dsoj78g8jq0diks3b"
    }, {
      "selected": false,
      "feedback": "De student geeft zijn mening onderbouwd en overtuigend.",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "yjz8854ozprzhr2hw45wup",
      "level_id": "ll1mno0a18hjedwy6w3jt"
    }, {
      "selected": false,
      "feedback": "De student geeft zijn mening, maar onderbouwt deze niet altijd even goed.",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "yjz8854ozprzhr2hw45wup",
      "level_id": "icoz2ha4bahqvqfi71slz"
    }, {
      "selected": false,
      "feedback": "De student geeft zijn mening, maar neemt daarbij vooral de mening over van anderen (bv. filosofen die aan bod kwamen, medestudenten) of onderbouwt deze niet",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "yjz8854ozprzhr2hw45wup",
      "level_id": "ewl5t7raruutqf4gudx15"
    }, {
      "selected": false,
      "feedback": "De student geeft geen eigen mening.",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "yjz8854ozprzhr2hw45wup",
      "level_id": "fcd66dsoj78g8jq0diks3b"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "9ec44j2au3v1nl9sigksrq",
      "level_id": "ll1mno0a18hjedwy6w3jt"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "9ec44j2au3v1nl9sigksrq",
      "level_id": "icoz2ha4bahqvqfi71slz"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "9ec44j2au3v1nl9sigksrq",
      "level_id": "ewl5t7raruutqf4gudx15"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "9ec44j2au3v1nl9sigksrq",
      "level_id": "fcd66dsoj78g8jq0diks3b"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "xzcorbibce20cm5g54xemi",
      "level_id": "ll1mno0a18hjedwy6w3jt"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "xzcorbibce20cm5g54xemi",
      "level_id": "icoz2ha4bahqvqfi71slz"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "xzcorbibce20cm5g54xemi",
      "level_id": "ewl5t7raruutqf4gudx15"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "xzcorbibce20cm5g54xemi",
      "level_id": "fcd66dsoj78g8jq0diks3b"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "aas2bl49lrnfl4i1m7uwho",
      "level_id": "ll1mno0a18hjedwy6w3jt"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "aas2bl49lrnfl4i1m7uwho",
      "level_id": "icoz2ha4bahqvqfi71slz"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "aas2bl49lrnfl4i1m7uwho",
      "level_id": "ewl5t7raruutqf4gudx15"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "aas2bl49lrnfl4i1m7uwho",
      "level_id": "fcd66dsoj78g8jq0diks3b"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "b6fxxz8q2nq21595ncj6od",
      "level_id": "ll1mno0a18hjedwy6w3jt"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "b6fxxz8q2nq21595ncj6od",
      "level_id": "icoz2ha4bahqvqfi71slz"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "b6fxxz8q2nq21595ncj6od",
      "level_id": "ewl5t7raruutqf4gudx15"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "b6fxxz8q2nq21595ncj6od",
      "level_id": "fcd66dsoj78g8jq0diks3b"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "m6aub4lk7xb3j3njnqf63c",
      "level_id": "ll1mno0a18hjedwy6w3jt"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "m6aub4lk7xb3j3njnqf63c",
      "level_id": "icoz2ha4bahqvqfi71slz"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "m6aub4lk7xb3j3njnqf63c",
      "level_id": "ewl5t7raruutqf4gudx15"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "m6aub4lk7xb3j3njnqf63c",
      "level_id": "fcd66dsoj78g8jq0diks3b"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "0ws20lmnw5kk56h4mxnque",
      "level_id": "ll1mno0a18hjedwy6w3jt"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "0ws20lmnw5kk56h4mxnque",
      "level_id": "icoz2ha4bahqvqfi71slz"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "0ws20lmnw5kk56h4mxnque",
      "level_id": "ewl5t7raruutqf4gudx15"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "0ws20lmnw5kk56h4mxnque",
      "level_id": "fcd66dsoj78g8jq0diks3b"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "6h2a07o2caeqeypvf1n8nj",
      "level_id": "ll1mno0a18hjedwy6w3jt"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "6h2a07o2caeqeypvf1n8nj",
      "level_id": "icoz2ha4bahqvqfi71slz"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "6h2a07o2caeqeypvf1n8nj",
      "level_id": "ewl5t7raruutqf4gudx15"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "6h2a07o2caeqeypvf1n8nj",
      "level_id": "fcd66dsoj78g8jq0diks3b"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "xkisqg35b4897yv42v0uwh",
      "level_id": "ll1mno0a18hjedwy6w3jt"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "xkisqg35b4897yv42v0uwh",
      "level_id": "icoz2ha4bahqvqfi71slz"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "xkisqg35b4897yv42v0uwh",
      "level_id": "ewl5t7raruutqf4gudx15"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "xkisqg35b4897yv42v0uwh",
      "level_id": "fcd66dsoj78g8jq0diks3b"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "npq74gmgw7gykpvuyzai",
      "level_id": "ll1mno0a18hjedwy6w3jt"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "npq74gmgw7gykpvuyzai",
      "level_id": "icoz2ha4bahqvqfi71slz"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "npq74gmgw7gykpvuyzai",
      "level_id": "ewl5t7raruutqf4gudx15"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "npq74gmgw7gykpvuyzai",
      "level_id": "fcd66dsoj78g8jq0diks3b"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "6m1j1p07g5yb4jn8rxfds",
      "level_id": "ll1mno0a18hjedwy6w3jt"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "6m1j1p07g5yb4jn8rxfds",
      "level_id": "icoz2ha4bahqvqfi71slz"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "6m1j1p07g5yb4jn8rxfds",
      "level_id": "ewl5t7raruutqf4gudx15"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "6m1j1p07g5yb4jn8rxfds",
      "level_id": "fcd66dsoj78g8jq0diks3b"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "0ckexyst4tadt2vppdqhbct",
      "level_id": "ll1mno0a18hjedwy6w3jt"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "0ckexyst4tadt2vppdqhbct",
      "level_id": "icoz2ha4bahqvqfi71slz"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "0ckexyst4tadt2vppdqhbct",
      "level_id": "ewl5t7raruutqf4gudx15"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "0ckexyst4tadt2vppdqhbct",
      "level_id": "fcd66dsoj78g8jq0diks3b"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "hwdfiaeimmqk6tg4xv9d4",
      "level_id": "ll1mno0a18hjedwy6w3jt"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "hwdfiaeimmqk6tg4xv9d4",
      "level_id": "icoz2ha4bahqvqfi71slz"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "hwdfiaeimmqk6tg4xv9d4",
      "level_id": "ewl5t7raruutqf4gudx15"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "hwdfiaeimmqk6tg4xv9d4",
      "level_id": "fcd66dsoj78g8jq0diks3b"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "odvm3c1nde9gslxuas5q1m",
      "level_id": "ll1mno0a18hjedwy6w3jt"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "odvm3c1nde9gslxuas5q1m",
      "level_id": "icoz2ha4bahqvqfi71slz"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "odvm3c1nde9gslxuas5q1m",
      "level_id": "ewl5t7raruutqf4gudx15"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "odvm3c1nde9gslxuas5q1m",
      "level_id": "fcd66dsoj78g8jq0diks3b"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "a9rm6of2j6ox13skroxg6",
      "level_id": "ll1mno0a18hjedwy6w3jt"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "a9rm6of2j6ox13skroxg6",
      "level_id": "icoz2ha4bahqvqfi71slz"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "a9rm6of2j6ox13skroxg6",
      "level_id": "ewl5t7raruutqf4gudx15"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "a9rm6of2j6ox13skroxg6",
      "level_id": "fcd66dsoj78g8jq0diks3b"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "7yh29o4t4zbuwdezsqiy08",
      "level_id": "ll1mno0a18hjedwy6w3jt"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "7yh29o4t4zbuwdezsqiy08",
      "level_id": "icoz2ha4bahqvqfi71slz"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "7yh29o4t4zbuwdezsqiy08",
      "level_id": "ewl5t7raruutqf4gudx15"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "7yh29o4t4zbuwdezsqiy08",
      "level_id": "fcd66dsoj78g8jq0diks3b"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "3bypc8f2th99zqdvfl5r9",
      "level_id": "ll1mno0a18hjedwy6w3jt"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "3bypc8f2th99zqdvfl5r9",
      "level_id": "icoz2ha4bahqvqfi71slz"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "3bypc8f2th99zqdvfl5r9",
      "level_id": "ewl5t7raruutqf4gudx15"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "3bypc8f2th99zqdvfl5r9",
      "level_id": "fcd66dsoj78g8jq0diks3b"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "tua60ec3j5oas4ki7sbkqk",
      "level_id": "ll1mno0a18hjedwy6w3jt"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "tua60ec3j5oas4ki7sbkqk",
      "level_id": "icoz2ha4bahqvqfi71slz"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "tua60ec3j5oas4ki7sbkqk",
      "level_id": "ewl5t7raruutqf4gudx15"
    }, {
      "selected": false,
      "feedback": "",
      "has_fixed_score": false,
      "fixed_score": 10,
      "criterium_id": "tua60ec3j5oas4ki7sbkqk",
      "level_id": "fcd66dsoj78g8jq0diks3b"
    }]
  },
  rubricResults: {
    "evaluators": ["Bob", "Alice", "Fred"],
    "evaluations": {
      "Alice": [{
        "criteriumId": "fufp9nyhm59tpv834p7s5",
        "levelId": "ll1mno0a18hjedwy6w3jt",
        "feedback": "Uitstekend!"
      }, {
        "criteriumId": "yjz8854ozprzhr2hw45wup",
        "levelId": "ll1mno0a18hjedwy6w3jt",
        "feedback": "Flink gedaan!"
      }, {
        "criteriumId": "xzcorbibce20cm5g54xemi",
        "levelId": "ll1mno0a18hjedwy6w3jt",
        "feedback": ""
      }, {
        "criteriumId": "aas2bl49lrnfl4i1m7uwho",
        "levelId": "ewl5t7raruutqf4gudx15",
        "feedback": "Hier had ik toch meer van verwacht"
      }, {
        "criteriumId": "9ec44j2au3v1nl9sigksrq",
        "levelId": "icoz2ha4bahqvqfi71slz",
        "feedback": ""
      }],
      "Bob": [{
        "criteriumId": "fufp9nyhm59tpv834p7s5",
        "levelId": "ll1mno0a18hjedwy6w3jt",
        "feedback": "Ik vond het best moeilijk maar uiteindelijk lukte het wel."
      }, {
        "criteriumId": "yjz8854ozprzhr2hw45wup",
        "levelId": "ll1mno0a18hjedwy6w3jt",
        "feedback": ""
      }, {
        "criteriumId": "xzcorbibce20cm5g54xemi",
        "levelId": "icoz2ha4bahqvqfi71slz",
        "feedback": ""
      }, {
        "criteriumId": "aas2bl49lrnfl4i1m7uwho",
        "levelId": "icoz2ha4bahqvqfi71slz",
        "feedback": ""
      }, {
        "criteriumId": "9ec44j2au3v1nl9sigksrq",
        "levelId": "icoz2ha4bahqvqfi71slz",
        "feedback": ""
      }],
      "Fred": []
    }
  }
});
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Views/RubricBuilderDemoWrapper.vue?vue&type=script&lang=ts&











var RubricBuilderDemoWrappervue_type_script_lang_ts_RubricBuilderDemoWrapper =
/*#__PURE__*/
function (_Vue) {
  _inherits(RubricBuilderDemoWrapper, _Vue);

  function RubricBuilderDemoWrapper() {
    var _this;

    _classCallCheck(this, RubricBuilderDemoWrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RubricBuilderDemoWrapper).apply(this, arguments));
    _this.config = {
      'addLevelURL': 'https://test',
      'addTreeNodeURL': 'https://test',
      'deleteLevelURL': 'https://test',
      'deleteTreeNodeURL': 'https://test',
      'moveLevelURL': 'https://test',
      'moveTreeNodeURL': 'https://test',
      'updateChoiceURL': 'https://test',
      'updateLevelURL': 'https://test',
      'updateTreeNodeURL': 'https://test'
    };
    _this.version = 0;
    _this.store = store;
    return _this;
  }

  _createClass(RubricBuilderDemoWrapper, [{
    key: "onRubricUpdated",
    value: function onRubricUpdated(data) {
      for (var member in this.store.rubricData) {
        delete this.store.rubricData[member];
      }

      Object.assign(this.store.rubricData, data);
    }
  }]);

  return RubricBuilderDemoWrapper;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

RubricBuilderDemoWrappervue_type_script_lang_ts_RubricBuilderDemoWrapper = __decorate([vue_class_component_esm({
  components: {
    RubricBuilder: Views_RubricBuilder
  }
})], RubricBuilderDemoWrappervue_type_script_lang_ts_RubricBuilderDemoWrapper);
/* harmony default export */ var RubricBuilderDemoWrappervue_type_script_lang_ts_ = (RubricBuilderDemoWrappervue_type_script_lang_ts_RubricBuilderDemoWrapper);
// CONCATENATED MODULE: ./src/Views/RubricBuilderDemoWrapper.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Views_RubricBuilderDemoWrappervue_type_script_lang_ts_ = (RubricBuilderDemoWrappervue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/Views/RubricBuilderDemoWrapper.vue





/* normalize component */

var RubricBuilderDemoWrapper_component = normalizeComponent(
  Views_RubricBuilderDemoWrappervue_type_script_lang_ts_,
  RubricBuilderDemoWrappervue_type_template_id_c2c89142_render,
  RubricBuilderDemoWrappervue_type_template_id_c2c89142_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Views_RubricBuilderDemoWrapper = (RubricBuilderDemoWrapper_component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Views/RubricPreviewDemoWrapper.vue?vue&type=template&id=52f17466&
var RubricPreviewDemoWrappervue_type_template_id_52f17466_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid"},[(_vm.rubric)?_c('rubric-entry',{attrs:{"rubric":_vm.rubric,"preview":true,"ui-state":_vm.store.uiState.preview}}):_vm._e()],1)}
var RubricPreviewDemoWrappervue_type_template_id_52f17466_staticRenderFns = []


// CONCATENATED MODULE: ./src/Views/RubricPreviewDemoWrapper.vue?vue&type=template&id=52f17466&

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Views/RubricPreviewDemoWrapper.vue?vue&type=script&lang=ts&











var RubricPreviewDemoWrappervue_type_script_lang_ts_RubricPreviewDemoWrapper =
/*#__PURE__*/
function (_Vue) {
  _inherits(RubricPreviewDemoWrapper, _Vue);

  function RubricPreviewDemoWrapper() {
    var _this;

    _classCallCheck(this, RubricPreviewDemoWrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RubricPreviewDemoWrapper).apply(this, arguments));
    _this.store = store;
    return _this;
  }

  _createClass(RubricPreviewDemoWrapper, [{
    key: "created",
    value: function created() {
      this.rubric = Rubric_Rubric.fromJSON(this.store.rubricData);
    }
  }]);

  return RubricPreviewDemoWrapper;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

RubricPreviewDemoWrappervue_type_script_lang_ts_RubricPreviewDemoWrapper = __decorate([vue_class_component_esm({
  components: {
    RubricEntry: Views_RubricEntry
  }
})], RubricPreviewDemoWrappervue_type_script_lang_ts_RubricPreviewDemoWrapper);
/* harmony default export */ var RubricPreviewDemoWrappervue_type_script_lang_ts_ = (RubricPreviewDemoWrappervue_type_script_lang_ts_RubricPreviewDemoWrapper);
// CONCATENATED MODULE: ./src/Views/RubricPreviewDemoWrapper.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Views_RubricPreviewDemoWrappervue_type_script_lang_ts_ = (RubricPreviewDemoWrappervue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/Views/RubricPreviewDemoWrapper.vue





/* normalize component */

var RubricPreviewDemoWrapper_component = normalizeComponent(
  Views_RubricPreviewDemoWrappervue_type_script_lang_ts_,
  RubricPreviewDemoWrappervue_type_template_id_52f17466_render,
  RubricPreviewDemoWrappervue_type_template_id_52f17466_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Views_RubricPreviewDemoWrapper = (RubricPreviewDemoWrapper_component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Views/RubricEntryWrapper.vue?vue&type=template&id=67522a57&
var RubricEntryWrappervue_type_template_id_67522a57_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid"},[(_vm.rubric)?_c('rubric-entry',{attrs:{"rubric":_vm.rubric,"criterium-evaluations":_vm.getCriteriumEvaluations(_vm.evaluator),"ui-state":_vm.store.uiState.entry,"options":_vm.store.uiState.entry.options},on:{"level-selected":_vm.selectLevel,"criterium-feedback-changed":_vm.updateCriteriumFeedback},scopedSlots:_vm._u([{key:"demoEvaluator",fn:function(){return [_c('li',{staticClass:"app-header-item"},[_vm._v("Demo: "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.evaluator),expression:"evaluator"}],on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.evaluator=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},function($event){_vm.store.uiState.entry.options.evaluator = $event.target.value}]}},[_c('option',{attrs:{"disabled":"","value":""}},[_vm._v("Selecteer")]),_vm._l((_vm.store.rubricResults.evaluators),function(evaluator){return _c('option',[_vm._v(_vm._s(evaluator))])})],2)])]},proxy:true}],null,false,838503716)}):_vm._e()],1)}
var RubricEntryWrappervue_type_template_id_67522a57_staticRenderFns = []


// CONCATENATED MODULE: ./src/Views/RubricEntryWrapper.vue?vue&type=template&id=67522a57&

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("2fec");

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Views/RubricEntryWrapper.vue?vue&type=script&lang=ts&















var RubricEntryWrappervue_type_script_lang_ts_RubricEntryWrapper =
/*#__PURE__*/
function (_Vue) {
  _inherits(RubricEntryWrapper, _Vue);

  function RubricEntryWrapper() {
    var _this;

    _classCallCheck(this, RubricEntryWrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RubricEntryWrapper).apply(this, arguments));
    _this.store = store;
    _this.evaluatorEvaluations = [];
    _this.evaluator = '';
    return _this;
  }

  _createClass(RubricEntryWrapper, [{
    key: "getCriteriumEvaluations",
    value: function getCriteriumEvaluations(name) {
      if (!name) {
        return [];
      }

      var evaluatorEvaluation = this.evaluatorEvaluations.find(function (evaluatorEvaluation) {
        return evaluatorEvaluation.name === name;
      });

      if (!evaluatorEvaluation) {
        throw new Error("No evaluation data found for evaluator: ".concat(name));
      }

      return evaluatorEvaluation.criteriumEvaluations;
    }
  }, {
    key: "selectLevel",
    value: function selectLevel(criterium, level) {
      if (!this.evaluator) {
        return;
      }

      var evaluations = store.rubricResults.evaluations[this.evaluator];
      var evaluation = evaluations.find(function (evaluation) {
        return evaluation.criteriumId === criterium.id;
      });

      if (!evaluation) {
        evaluations.push({
          criteriumId: criterium.id,
          levelId: level.id,
          feedback: ''
        });
      } else {
        evaluation.levelId = level.id;
      }
    }
  }, {
    key: "updateCriteriumFeedback",
    value: function updateCriteriumFeedback(criterium, feedback) {
      if (!this.evaluator) {
        return;
      }

      var evaluations = store.rubricResults.evaluations[this.evaluator];
      var evaluation = evaluations.find(function (evaluation) {
        return evaluation.criteriumId === criterium.id;
      });
      evaluation.feedback = feedback;
    }
  }, {
    key: "initData",
    value: function initData() {
      var _this2 = this;

      var rubric = this.rubric = Rubric_Rubric.fromJSON(this.store.rubricData);
      var defaultLevel = rubric.levels.find(function (level) {
        return level.isDefault;
      }) || null;
      var rubricDefaultEvaluation = rubric.getAllCriteria().map(function (criterium) {
        return {
          criterium: criterium,
          level: defaultLevel,
          score: defaultLevel ? rubric.getChoiceScore(criterium, defaultLevel) : 0,
          feedback: ''
        };
      });
      var evaluators = this.store.rubricResults.evaluators;
      this.evaluator = store.uiState.entry.options.evaluator;
      this.evaluatorEvaluations = evaluators.map(function (evaluator) {
        var evaluations = _this2.store.rubricResults.evaluations[evaluator];
        var criteriumEvaluations = rubricDefaultEvaluation.map(function (defaultCriteriumEvaluation) {
          var storeEvaluation = evaluations.find(function (evaluation) {
            return evaluation.criteriumId === defaultCriteriumEvaluation.criterium.id;
          });

          if (storeEvaluation) {
            var level = rubric.levels.find(function (level) {
              return level.id === storeEvaluation.levelId;
            });
            return {
              criterium: defaultCriteriumEvaluation.criterium,
              level: level,
              score: rubric.getChoiceScore(defaultCriteriumEvaluation.criterium, level),
              feedback: storeEvaluation.feedback
            };
          } else {
            return _objectSpread2({}, defaultCriteriumEvaluation);
          }
        });
        return {
          name: evaluator,
          criteriumEvaluations: criteriumEvaluations
        };
      });
    }
  }, {
    key: "created",
    value: function created() {
      this.initData();
    }
  }]);

  return RubricEntryWrapper;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

RubricEntryWrappervue_type_script_lang_ts_RubricEntryWrapper = __decorate([vue_class_component_esm({
  components: {
    RubricEntry: Views_RubricEntry
  }
})], RubricEntryWrappervue_type_script_lang_ts_RubricEntryWrapper);
/* harmony default export */ var RubricEntryWrappervue_type_script_lang_ts_ = (RubricEntryWrappervue_type_script_lang_ts_RubricEntryWrapper);
// CONCATENATED MODULE: ./src/Views/RubricEntryWrapper.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Views_RubricEntryWrappervue_type_script_lang_ts_ = (RubricEntryWrappervue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/Views/RubricEntryWrapper.vue





/* normalize component */

var RubricEntryWrapper_component = normalizeComponent(
  Views_RubricEntryWrappervue_type_script_lang_ts_,
  RubricEntryWrappervue_type_template_id_67522a57_render,
  RubricEntryWrappervue_type_template_id_67522a57_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Views_RubricEntryWrapper = (RubricEntryWrapper_component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Views/RubricResultWrapper.vue?vue&type=template&id=6783c0af&
var RubricResultWrappervue_type_template_id_6783c0af_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid"},[_c('rubric-result',{attrs:{"api-config":_vm.config,"version":_vm.version,"rubric-data":_vm.store.rubricData,"rubric-results":_vm.store.rubricResults}})],1)}
var RubricResultWrappervue_type_template_id_6783c0af_staticRenderFns = []


// CONCATENATED MODULE: ./src/Views/RubricResultWrapper.vue?vue&type=template&id=6783c0af&

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Views/RubricResult.vue?vue&type=template&id=f7fa120c&
var RubricResultvue_type_template_id_f7fa120c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"result-app",attrs:{"id":"app"}},[(_vm.rubric)?_c('div',{staticClass:"rubric"},[_c('link',{attrs:{"rel":"stylesheet","href":"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"}}),_c('div',{staticClass:"rubric-results-view",on:{"click":function($event){_vm.selectedCriterium = null}}},[_c('div',{staticClass:"table-header-wrap"},[_c('div',{staticClass:"table-header"},[_vm._l((_vm.evaluators),function(evaluator){return _c('div',{staticClass:"table-header-title"},[_vm._v(_vm._s(_vm._f("capitalize")(evaluator)))])}),_c('div',{staticClass:"table-header-title mod-max"},[_vm._v("Max.")])],2)]),_c('h1',{staticClass:"rubric-title"},[_vm._v(_vm._s(_vm.rubric.title))]),_c('ul',{staticClass:"clusters"},_vm._l((_vm.rubric.clusters),function(cluster){return (_vm.rubric.getAllCriteria(cluster).length > 0)?_c('li',{staticClass:"cluster-list-item"},[_c('div',{staticClass:"cluster"},[_c('h2',{staticClass:"cluster-title"},[_vm._v(_vm._s(cluster.title))]),_c('ul',{staticClass:"categories"},_vm._l((cluster.categories),function(category){return (_vm.rubric.getAllCriteria(category).length > 0)?_c('li',{staticClass:"category-list-item",style:(("--category-color: " + (category.title ? (category.color || '#999') : '#999')))},[_c('div',{staticClass:"category"},[(category.title)?_c('h3',{staticClass:"category-title category-indicator"},[_vm._v(_vm._s(category.title))]):_vm._e(),_c('ul',{staticClass:"criteria"},_vm._l((category.criteria),function(criterium){return _c('li',{staticClass:"criterium-list-item",class:{selected: _vm.selectedCriterium === criterium},on:{"click":function($event){$event.stopPropagation();_vm.selectedCriterium = criterium}}},[_c('div',{staticClass:"criterium"},[_c('div',{staticClass:"criterium-title-header"},[_c('h4',{staticClass:"criterium-title category-indicator"},[_vm._v(_vm._s(criterium.title))])]),_vm._l((_vm.evaluators),function(evaluator){return _c('div',{staticClass:"subtotal criterium-total"},[_c('div',{staticClass:"score-number",attrs:{"id":((criterium.id) + "-" + evaluator)}},[(_vm.getCriteriumData(criterium).evaluations[evaluator].feedback)?_c('i',{staticClass:"has-feedback fa fa-info"}):_vm._e(),_vm._v(_vm._s(_vm.getCriteriumScore(criterium, evaluator)))]),(_vm.getCriteriumData(criterium).evaluations[evaluator].feedback)?_c('b-tooltip',{attrs:{"triggers":"hover focus","target":((criterium.id) + "-" + evaluator),"placement":"bottom"}},[_vm._v(_vm._s(_vm.getCriteriumData(criterium).evaluations[evaluator].feedback))]):_vm._e()],1)}),_c('div',{staticClass:"subtotal criterium-total"},[_c('div',{staticClass:"score-number mod-max"},[_vm._v(_vm._s(_vm.getCriteriumMaxScore(criterium)))])])],2)])}),0)])]):_vm._e()}),0),_c('div',{staticClass:"subtotal cluster-total"},[_c('div',{staticClass:"cluster-total-title"},[_vm._v("Totaal "+_vm._s(cluster.title)+":")]),_vm._l((_vm.evaluators),function(evaluator){return _c('div',{staticClass:"score-wrap"},[_c('div',{staticClass:"score-number"},[_vm._v(_vm._s(_vm.getClusterScore(cluster, evaluator)))])])}),_c('div',{staticClass:"score-wrap"},[_c('div',{staticClass:"score-number mod-max"},[_vm._v(_vm._s(_vm.getClusterMaxScore(cluster)))])])],2)])]):_vm._e()}),0),_c('div',{staticClass:"subtotal rubric-total"},[_c('div',{staticClass:"rubric-total-title"},[_vm._v("Totaal Rubric:")]),_vm._l((_vm.evaluators),function(evaluator){return _c('div',{staticClass:"score-wrap"},[_c('div',{staticClass:"score-number"},[_vm._v(_vm._s(_vm.getRubricScore(evaluator)))])])}),_c('div',{staticClass:"score-wrap"},[_c('div',{staticClass:"score-number mod-max"},[_vm._v(_vm._s(_vm.rubric.getMaximumScore()))])])],2)]),(_vm.selectedCriterium)?_c('div',{staticClass:"rr-selected-criterium",on:{"click":function($event){$event.stopPropagation();}}},[_c('div',{staticClass:"rr-selected-criterium-results"},[_c('div',{staticClass:"title"},[_c('span',[_vm._v(_vm._s(_vm.selectedCriterium.parent.parent.title)),_c('i',{staticClass:"fa fa-angle-right separator"})]),(_vm.selectedCriterium.parent.title.trim().length !== 0)?_c('span',[_vm._v(_vm._s(_vm.selectedCriterium.parent.title)),_c('i',{staticClass:"fa fa-angle-right separator"})]):_vm._e(),_c('span',[_vm._v(_vm._s(_vm.selectedCriterium.title))])]),_vm._l((_vm.evaluators),function(evaluator){return _c('div',{staticClass:"rr-selected-result"},[(_vm.getCriteriumData(_vm.selectedCriterium).evaluations[evaluator].level !== null)?_c('p',[_c('span',[_vm._v(_vm._s(_vm._f("capitalize")(evaluator)))]),_vm._v(" gaf score "),_c('span',[_vm._v(_vm._s(_vm.getCriteriumScore(_vm.selectedCriterium, evaluator)))]),_vm._v(" ("),_c('span',{staticClass:"score-title"},[_vm._v(_vm._s(_vm.getCriteriumData(_vm.selectedCriterium).evaluations[evaluator].level.title))]),_vm._v(")")]):_vm._e(),(_vm.getCriteriumData(_vm.selectedCriterium).evaluations[evaluator].feedback)?_c('p',[_vm._v(" Extra feedback: "+_vm._s(_vm.getCriteriumData(_vm.selectedCriterium).evaluations[evaluator].feedback)+" ")]):_vm._e()])})],2),_c('div',{staticClass:"rr-selected-criterium-levels"},[_c('div',{staticClass:"title"},[_vm._v("Niveaus:")]),_c('ul',{staticClass:"levels-list"},_vm._l((_vm.rubric.levels),function(level){return _c('li',{key:level.id,staticClass:"levels-list-item"},[_c('div',{staticClass:"levels-list-item-header"},[_c('div',{staticClass:"title"},[_vm._v(_vm._s(level.title))]),(_vm.rubric.useScores)?_c('div',{staticClass:"choice-score"},[_vm._v(_vm._s(_vm.rubric.getChoiceScore(_vm.selectedCriterium, level)))]):_vm._e()]),_c('div',{staticClass:"choice-feedback"},[_vm._v(" "+_vm._s(_vm.rubric.getChoice(_vm.selectedCriterium, level).feedback)+" ")])])}),0)])]):_vm._e()]):_vm._e()])}
var RubricResultvue_type_template_id_f7fa120c_staticRenderFns = []


// CONCATENATED MODULE: ./src/Views/RubricResult.vue?vue&type=template&id=f7fa120c&

// EXTERNAL MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("9df3");

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Views/RubricResult.vue?vue&type=script&lang=ts&



















function RubricResultvue_type_script_lang_ts_add(v1, v2) {
  return v1 + v2;
}

var RubricResultvue_type_script_lang_ts_RubricResult =
/*#__PURE__*/
function (_Vue) {
  _inherits(RubricResult, _Vue);

  function RubricResult() {
    var _this;

    _classCallCheck(this, RubricResult);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RubricResult).apply(this, arguments));
    _this.rubric = null;
    _this.evaluators = null;
    _this.dataConnector = null;
    _this.selectedCriterium = null;
    _this.criteriaData = [];
    return _this;
  }

  _createClass(RubricResult, [{
    key: "getCriteriumMaxScore",
    value: function getCriteriumMaxScore(criterium) {
      var _this2 = this;

      var scores = [0];
      var iterator = this.rubric.choices.get(criterium.id);
      iterator.forEach(function (choice, levelId) {
        var level = _this2.rubric.levels.find(function (level) {
          return level.id === levelId;
        });

        scores.push(_this2.rubric.getChoiceScore(criterium, level));
      });
      return Math.max.apply(null, scores);
    }
  }, {
    key: "getClusterMaxScore",
    value: function getClusterMaxScore(cluster) {
      var _this3 = this;

      if (!this.rubric) {
        return 0;
      }

      return this.rubric.getAllCriteria(cluster).map(function (criterium) {
        return _this3.getCriteriumMaxScore(criterium);
      }).reduce(RubricResultvue_type_script_lang_ts_add, 0);
    }
  }, {
    key: "getCriteriumScore",
    value: function getCriteriumScore(criterium, evaluator) {
      return this.getCriteriumData(criterium).evaluations[evaluator].score || 0;
    }
  }, {
    key: "getCategoryScore",
    value: function getCategoryScore(category, evaluator) {
      var _this4 = this;

      if (!this.rubric) {
        return 0;
      }

      return this.rubric.getAllCriteria(category).map(function (criterium) {
        return _this4.getCriteriumScore(criterium, evaluator);
      }).reduce(RubricResultvue_type_script_lang_ts_add, 0);
    }
  }, {
    key: "getClusterScore",
    value: function getClusterScore(cluster, evaluator) {
      var _this5 = this;

      if (!this.rubric) {
        return 0;
      }

      return this.rubric.getAllCriteria(cluster).map(function (criterium) {
        return _this5.getCriteriumScore(criterium, evaluator);
      }).reduce(RubricResultvue_type_script_lang_ts_add, 0);
    }
  }, {
    key: "getRubricScore",
    value: function getRubricScore(evaluator) {
      var _this6 = this;

      if (!this.rubric) {
        return 0;
      }

      return this.rubric.getAllCriteria().map(function (criterium) {
        return _this6.getCriteriumScore(criterium, evaluator);
      }).reduce(RubricResultvue_type_script_lang_ts_add, 0);
    }
  }, {
    key: "getCriteriumData",
    value: function getCriteriumData(criterium) {
      var criteriumExt = this.criteriaData.find(function (_) {
        return _.criterium === criterium;
      });

      if (!criteriumExt) {
        throw new Error("No data found for criterium: ".concat(criterium));
      }

      return criteriumExt;
    }
  }, {
    key: "initData",
    value: function initData(rubric, results) {
      var _this7 = this;

      this.evaluators = results.evaluators;
      rubric.getAllCriteria().forEach(function (criterium) {
        var criteriumExt = {
          criterium: criterium,
          showDefaultFeedback: false,
          evaluations: {}
        };

        _this7.evaluators.forEach(function (evaluator) {
          var criteriumEvaluation = {
            feedback: '',
            score: 0,
            level: null
          };
          var evaluations = results.evaluations[evaluator];
          var criteriumEvaluationInput = evaluations.find(function (o) {
            return o.criteriumId === criterium.id;
          });

          if (criteriumEvaluationInput) {
            var chosenLevel = rubric.levels.find(function (level) {
              return level.id === criteriumEvaluationInput.levelId;
            });

            if (chosenLevel) {
              criteriumEvaluation.level = chosenLevel;
              criteriumEvaluation.score = rubric.getChoiceScore(criterium, chosenLevel);
              criteriumEvaluation.feedback = criteriumEvaluationInput.feedback;
            }
          }

          criteriumExt.evaluations[evaluator] = criteriumEvaluation;
        });

        _this7.criteriaData.push(criteriumExt);
      });
    }
  }, {
    key: "mounted",
    value: function mounted() {
      if (this.rubricData) {
        this.rubric = Rubric_Rubric.fromJSON(this.rubricData);
        this.initData(this.rubric, this.rubricResults); // todo: get rubric data id

        this.dataConnector = new DataConnector_DataConnector(this.rubric, this.apiConfig, this.rubricData.rubric_data_id, this.version);
      }
    }
  }]);

  return RubricResult;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: Object,
  default: null
}), __metadata("design:type", Object)], RubricResultvue_type_script_lang_ts_RubricResult.prototype, "rubricData", void 0);

__decorate([Prop({
  type: Object,
  default: null
}), __metadata("design:type", Object)], RubricResultvue_type_script_lang_ts_RubricResult.prototype, "apiConfig", void 0);

__decorate([Prop({
  type: Number,
  default: null
}), __metadata("design:type", Object)], RubricResultvue_type_script_lang_ts_RubricResult.prototype, "version", void 0);

__decorate([Prop({
  type: Object,
  required: true
}), __metadata("design:type", Object)], RubricResultvue_type_script_lang_ts_RubricResult.prototype, "rubricResults", void 0);

RubricResultvue_type_script_lang_ts_RubricResult = __decorate([vue_class_component_esm({
  filters: {
    capitalize: function capitalize(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
})], RubricResultvue_type_script_lang_ts_RubricResult);
/* harmony default export */ var RubricResultvue_type_script_lang_ts_ = (RubricResultvue_type_script_lang_ts_RubricResult);
// CONCATENATED MODULE: ./src/Views/RubricResult.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Views_RubricResultvue_type_script_lang_ts_ = (RubricResultvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/Views/RubricResult.vue?vue&type=style&index=0&lang=scss&
var RubricResultvue_type_style_index_0_lang_scss_ = __webpack_require__("1c0f");

// CONCATENATED MODULE: ./src/Views/RubricResult.vue






/* normalize component */

var RubricResult_component = normalizeComponent(
  Views_RubricResultvue_type_script_lang_ts_,
  RubricResultvue_type_template_id_f7fa120c_render,
  RubricResultvue_type_template_id_f7fa120c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Views_RubricResult = (RubricResult_component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Views/RubricResultWrapper.vue?vue&type=script&lang=ts&









var RubricResultWrappervue_type_script_lang_ts_RubricResultWrapper =
/*#__PURE__*/
function (_Vue) {
  _inherits(RubricResultWrapper, _Vue);

  function RubricResultWrapper() {
    var _this;

    _classCallCheck(this, RubricResultWrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RubricResultWrapper).apply(this, arguments));
    _this.config = {
      '...URL': 'https://test'
    };
    _this.version = 0;
    _this.store = store;
    return _this;
  }

  return RubricResultWrapper;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

RubricResultWrappervue_type_script_lang_ts_RubricResultWrapper = __decorate([vue_class_component_esm({
  components: {
    RubricResult: Views_RubricResult
  }
})], RubricResultWrappervue_type_script_lang_ts_RubricResultWrapper);
/* harmony default export */ var RubricResultWrappervue_type_script_lang_ts_ = (RubricResultWrappervue_type_script_lang_ts_RubricResultWrapper);
// CONCATENATED MODULE: ./src/Views/RubricResultWrapper.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Views_RubricResultWrappervue_type_script_lang_ts_ = (RubricResultWrappervue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/Views/RubricResultWrapper.vue





/* normalize component */

var RubricResultWrapper_component = normalizeComponent(
  Views_RubricResultWrappervue_type_script_lang_ts_,
  RubricResultWrappervue_type_template_id_6783c0af_render,
  RubricResultWrappervue_type_template_id_6783c0af_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Views_RubricResultWrapper = (RubricResultWrapper_component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/LevelsView.vue?vue&type=template&id=2a9a05d1&
var LevelsViewvue_type_template_id_2a9a05d1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{on:{"click":function($event){return _vm.selectLevel(null)},"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.hideRemoveLevelDialog($event)}}},[_c('div',{staticClass:"levels-container",class:{ 'has-new': !!_vm.newLevel/*, 'show-description': showLevelDescriptions */}},[_c('h1',[_vm._v("Niveaus")]),_c('ul',{staticClass:"levels-list"},[_vm._l((_vm.rubric.levels),function(level,index){return _c('level-details',{key:("level_" + index),attrs:{"has-new":!!_vm.newLevel,"selected-level":_vm.selectedLevel,"rubric":_vm.rubric,"level":level,"tag":"li"},on:{"change":_vm.onLevelChange,"level-move-up":_vm.moveLevelUp,"level-move-down":_vm.moveLevelDown,"level-selected":_vm.selectLevel,"level-default":_vm.setDefault,"level-remove":_vm.showRemoveLevelDialog}})}),(!_vm.newLevel)?_c('li',{staticClass:"level-new"},[_c('button',{staticClass:"btn-new",on:{"click":function($event){$event.stopPropagation();return _vm.createNewLevel($event)}}},[_vm._v("Niveau toevoegen")])]):_c('level-details',{key:("level_" + (_vm.rubric.levels.length)),attrs:{"selected-level":_vm.newLevel,"has-new":true,"is-new":true,"rubric":_vm.rubric,"level":_vm.newLevel,"tag":"li"},on:{"new-level-added":_vm.addLevel,"new-level-canceled":_vm.cancelLevel,"level-default":_vm.setDefault}})],2)]),(_vm.removingLevel !== null)?_c('div',{staticClass:"modal-bg",on:{"click":function($event){$event.stopPropagation();return _vm.hideRemoveLevelDialog($event)}}},[_c('div',{staticClass:"modal-content",on:{"click":function($event){$event.stopPropagation();}}},[_c('div',{staticClass:"modal-content-title"},[_vm._v("Niveau '"+_vm._s(_vm.removingLevel.title)+"' verwijderen?")]),_c('div',[_c('button',{ref:"btn-remove-level",staticClass:"btn-strong mod-confirm",on:{"click":function($event){$event.stopPropagation();return _vm.removeLevel(_vm.removingLevel)}}},[_vm._v("Verwijder")]),_c('button',{staticClass:"btn-strong",on:{"click":function($event){$event.stopPropagation();return _vm.hideRemoveLevelDialog($event)}}},[_vm._v("Annuleer")])])])]):_vm._e()])}
var LevelsViewvue_type_template_id_2a9a05d1_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/LevelsView.vue?vue&type=template&id=2a9a05d1&

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4d5a8fb2-vue-loader-template"}!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/LevelDetails.vue?vue&type=template&id=52a6bc4a&
var LevelDetailsvue_type_template_id_52a6bc4a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"level-details",class:{ /*'show-description': showDescription,*/ selected: _vm.selectedLevel === _vm.level, 'new-level': _vm.isNew },on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.cancelNewLevel($event)}}},[_c('div',{staticClass:"level-details-text"},[_c('div',{staticClass:"level-details-text-1"},[_c('div',{staticClass:"ld-title",on:{"click":function($event){$event.stopPropagation();return _vm.selectLevel($event)}}},[_c('label',{staticClass:"level-label label-hidden",attrs:{"for":("level_title_" + _vm.index)}},[_vm._v("Niveau")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.level.title),expression:"level.title"}],staticClass:"input-detail",attrs:{"id":("level_title_" + _vm.index),"tabindex":_vm.tabIndex,"type":"text","autocomplete":"off","placeholder":"Vul hier een niveau in"},domProps:{"value":(_vm.level.title)},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.isNew ? _vm.addNewLevel() : null},"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.level, "title", $event.target.value)},_vm.onChange],"focus":_vm.selectLevel}})])])]),_c('div',{staticClass:"ld-score",on:{"click":function($event){$event.stopPropagation();return _vm.selectLevel($event)}}},[_c('label',{staticClass:"level-label label-hidden",attrs:{"for":("level_score_" + _vm.index)}},[_vm._v("Punten")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.level.score),expression:"level.score"}],staticClass:"input-detail",attrs:{"id":("level_score_" + _vm.index),"tabindex":_vm.tabIndex,"type":"number","name":"Weight","maxlength":"3"},domProps:{"value":(_vm.level.score)},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.isNew ? _vm.addNewLevel() : null},"input":[function($event){if($event.target.composing){ return; }_vm.$set(_vm.level, "score", $event.target.value)},_vm.onChange],"focus":_vm.selectLevel}})]),_c('div',{staticClass:"ld-default",on:{"click":function($event){$event.stopPropagation();}}},[_c('label',{staticClass:"level-label label-hidden",attrs:{"for":("level_default_" + _vm.index)}},[_vm._v("Standaard")]),_c('input',{staticClass:"input-detail",attrs:{"id":("level_default_" + _vm.index),"tabindex":_vm.tabIndex,"type":"radio"},domProps:{"checked":_vm.level.isDefault},on:{"click":function($event){$event.stopPropagation();return _vm.setDefault($event)}}}),_c('label',{staticClass:"fa",class:("" + (_vm.level.isDefault ? 'checked' : 'not-checked')),attrs:{"for":("level_default_" + _vm.index),"aria-hidden":"true"}})]),(_vm.isNew)?_c('div',{staticClass:"actions"},[_c('button',{staticClass:"btn-strong mod-confirm",on:{"click":function($event){$event.preventDefault();return _vm.addNewLevel($event)}}},[_vm._v("Voeg toe")]),_c('button',{staticClass:"btn-strong",on:{"click":function($event){$event.preventDefault();return _vm.cancelNewLevel($event)}}},[_vm._v("Annuleer")])]):_vm._e(),_c('div',{staticClass:"level-actions",on:{"click":function($event){$event.stopPropagation();}}},[_c('div',{},[_c('button',{staticClass:"btn-level-action",attrs:{"id":("level_move_up_" + (_vm.level.id)),"disabled":_vm.isNew || _vm.index <= 0,"aria-label":"Verplaats niveau naar boven"},on:{"click":function($event){$event.stopPropagation();return _vm.$emit('level-move-up')}}},[_c('i',{staticClass:"fa fa-arrow-up",attrs:{"aria-hidden":"true"}})]),_c('button',{staticClass:"btn-level-action",attrs:{"id":("level_move_down_" + (_vm.level.id)),"disabled":_vm.isNew || _vm.index >= _vm.rubric.levels.length - 1,"aria-label":"Verplaats niveau naar beneden"},on:{"click":function($event){$event.stopPropagation();return _vm.$emit('level-move-down')}}},[_c('i',{staticClass:"fa fa-arrow-down",attrs:{"aria-hidden":"true"}})]),_c('button',{staticClass:"btn-level-action btn-delete",attrs:{"disabled":_vm.isNew,"aria-label":"Verwijder niveau"},on:{"click":function($event){$event.preventDefault();return _vm.removeLevel($event)}}},[_c('i',{staticClass:"fa fa-minus-circle",attrs:{"aria-hidden":"true"}})])])])])}
var LevelDetailsvue_type_template_id_52a6bc4a_staticRenderFns = []


// CONCATENATED MODULE: ./src/Components/LevelDetails.vue?vue&type=template&id=52a6bc4a&

// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/LevelDetails.vue?vue&type=script&lang=ts&







var LevelDetailsvue_type_script_lang_ts_a, LevelDetailsvue_type_script_lang_ts_b, LevelDetailsvue_type_script_lang_ts_c, LevelDetailsvue_type_script_lang_ts_d;







var LevelDetailsvue_type_script_lang_ts_LevelDetails =
/*#__PURE__*/
function (_Vue) {
  _inherits(LevelDetails, _Vue);

  function LevelDetails() {
    var _this;

    _classCallCheck(this, LevelDetails);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LevelDetails).call(this));
    _this.showDescription = false;
    _this.onChange = debounce_default()(_this.onChange, 750);
    return _this;
  }

  _createClass(LevelDetails, [{
    key: "selectLevel",
    value: function selectLevel() {
      this.$emit('level-selected', this.level);
    }
  }, {
    key: "setDefault",
    value: function setDefault() {
      this.$emit('level-default', this.level);
      this.onChange();
    }
  }, {
    key: "onChange",
    value: function onChange() {
      this.$emit('change', this.level);
    }
  }, {
    key: "addNewLevel",
    value: function addNewLevel() {
      this.$emit('new-level-added');
    }
  }, {
    key: "cancelNewLevel",
    value: function cancelNewLevel() {
      this.$emit('new-level-canceled');
    }
  }, {
    key: "removeLevel",
    value: function removeLevel() {
      this.$emit('level-remove', this.level);
    }
  }, {
    key: "focusable",
    get: function get() {
      if (this.isNew) {
        return true;
      }

      return !this.hasNew;
    }
  }, {
    key: "tabIndex",
    get: function get() {
      return this.focusable ? 0 : -1;
    }
  }, {
    key: "index",
    get: function get() {
      if (this.isNew) {
        return this.rubric.levels.length;
      }

      return this.rubric.levels.indexOf(this.level);
    }
  }]);

  return LevelDetails;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: Rubric_Rubric,
  required: true
}), __metadata("design:type", typeof (LevelDetailsvue_type_script_lang_ts_a = typeof Rubric_Rubric !== "undefined" && Rubric_Rubric) === "function" ? LevelDetailsvue_type_script_lang_ts_a : Object)], LevelDetailsvue_type_script_lang_ts_LevelDetails.prototype, "rubric", void 0);

__decorate([Prop({
  type: Level_Level,
  required: true
}), __metadata("design:type", typeof (LevelDetailsvue_type_script_lang_ts_b = typeof Level_Level !== "undefined" && Level_Level) === "function" ? LevelDetailsvue_type_script_lang_ts_b : Object)], LevelDetailsvue_type_script_lang_ts_LevelDetails.prototype, "level", void 0);

__decorate([Prop({
  type: Level_Level,
  default: null
}), __metadata("design:type", Object)], LevelDetailsvue_type_script_lang_ts_LevelDetails.prototype, "selectedLevel", void 0);

__decorate([Prop({
  type: String,
  default: 'div'
}), __metadata("design:type", typeof (LevelDetailsvue_type_script_lang_ts_d = typeof String !== "undefined" && String) === "function" ? LevelDetailsvue_type_script_lang_ts_d : Object)], LevelDetailsvue_type_script_lang_ts_LevelDetails.prototype, "tag", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], LevelDetailsvue_type_script_lang_ts_LevelDetails.prototype, "isNew", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], LevelDetailsvue_type_script_lang_ts_LevelDetails.prototype, "hasNew", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], LevelDetailsvue_type_script_lang_ts_LevelDetails.prototype, "showLevelDescriptions", void 0);

LevelDetailsvue_type_script_lang_ts_LevelDetails = __decorate([vue_class_component_esm({
  name: 'level-details',
  components: {}
}), __metadata("design:paramtypes", [])], LevelDetailsvue_type_script_lang_ts_LevelDetails);
/* harmony default export */ var LevelDetailsvue_type_script_lang_ts_ = (LevelDetailsvue_type_script_lang_ts_LevelDetails);
// CONCATENATED MODULE: ./src/Components/LevelDetails.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Components_LevelDetailsvue_type_script_lang_ts_ = (LevelDetailsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/Components/LevelDetails.vue





/* normalize component */

var LevelDetails_component = normalizeComponent(
  Components_LevelDetailsvue_type_script_lang_ts_,
  LevelDetailsvue_type_template_id_52a6bc4a_render,
  LevelDetailsvue_type_template_id_52a6bc4a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Components_LevelDetails = (LevelDetails_component.exports);
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--13-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/thread-loader/dist/cjs.js!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/babel-loader/lib!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/ts-loader??ref--13-3!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/cache-loader/dist/cjs.js??ref--0-0!/Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/vue-loader/lib??vue-loader-options!./src/Components/LevelsView.vue?vue&type=script&lang=ts&









var LevelsViewvue_type_script_lang_ts_a, LevelsViewvue_type_script_lang_ts_b;









var LevelsViewvue_type_script_lang_ts_LevelsView =
/*#__PURE__*/
function (_Vue) {
  _inherits(LevelsView, _Vue);

  function LevelsView() {
    var _this;

    _classCallCheck(this, LevelsView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LevelsView).call(this));
    _this.newLevel = null;
    _this.selectedLevel = null;
    _this.removingLevel = null;
    _this.onLevelMove = debounce_default()(_this.onLevelMove, 750);
    return _this;
  }

  _createClass(LevelsView, [{
    key: "createNewLevel",
    value: function createNewLevel() {
      var _this2 = this;

      this.selectLevel(null);
      this.newLevel = this.getDefaultLevel();
      this.$nextTick(function () {
        document.querySelector("#level_title_".concat(_this2.rubric.levels.length)).focus();
      });
    }
  }, {
    key: "addLevel",
    value: function addLevel() {
      var _this$dataConnector;

      if (this.newLevel.isDefault) {
        this.rubric.levels.forEach(function (level) {
          level.isDefault = false;
        });
      }

      this.rubric.addLevel(this.newLevel);
      (_this$dataConnector = this.dataConnector) === null || _this$dataConnector === void 0 ? void 0 : _this$dataConnector.addLevel(this.newLevel, this.rubric.levels.length);
      this.newLevel = null;
    }
  }, {
    key: "cancelLevel",
    value: function cancelLevel() {
      this.newLevel = null;
      this.selectLevel(null);
    }
  }, {
    key: "onLevelMove",
    value: function onLevelMove(level) {
      var _this$dataConnector2;

      var index = this.rubric.levels.indexOf(level);
      (_this$dataConnector2 = this.dataConnector) === null || _this$dataConnector2 === void 0 ? void 0 : _this$dataConnector2.moveLevel(level, index);
    }
  }, {
    key: "moveLevelUp",
    value: function moveLevelUp() {
      var _this3 = this;

      if (!this.selectedLevel) {
        return;
      }

      this.rubric.moveLevelUp(this.selectedLevel);
      this.onLevelMove(this.selectedLevel);
      this.$nextTick(function () {
        document.querySelector("#level_move_up_".concat(_this3.selectedLevel.id)).focus();
      });
    }
  }, {
    key: "moveLevelDown",
    value: function moveLevelDown() {
      var _this4 = this;

      if (!this.selectedLevel) {
        return;
      }

      this.rubric.moveLevelDown(this.selectedLevel);
      this.onLevelMove(this.selectedLevel);
      this.$nextTick(function () {
        document.querySelector("#level_move_down_".concat(_this4.selectedLevel.id)).focus();
      });
    }
  }, {
    key: "onLevelChange",
    value: function onLevelChange(level) {
      var _this$dataConnector3;

      (_this$dataConnector3 = this.dataConnector) === null || _this$dataConnector3 === void 0 ? void 0 : _this$dataConnector3.updateLevel(level);
    }
  }, {
    key: "selectLevel",
    value: function selectLevel(level) {
      if (this.newLevel) {
        return false;
      }

      this.selectedLevel = level;
      return false;
    }
  }, {
    key: "setDefault",
    value: function setDefault(defaultLevel) {
      if (this.newLevel === defaultLevel) {
        this.newLevel.isDefault = !this.newLevel.isDefault;
      } else {
        this.rubric.levels.forEach(function (level) {
          level.isDefault = defaultLevel === level ? !level.isDefault : false;
        });
      }
    }
  }, {
    key: "getDefaultLevel",
    value: function getDefaultLevel() {
      return new Level_Level('');
    }
  }, {
    key: "showRemoveLevelDialog",
    value: function showRemoveLevelDialog(level) {
      this.removingLevel = level;
    }
  }, {
    key: "hideRemoveLevelDialog",
    value: function hideRemoveLevelDialog() {
      this.showRemoveLevelDialog(null);
    }
  }, {
    key: "removeLevel",
    value: function removeLevel(level) {
      var _this$dataConnector4;

      this.removingLevel = null;
      this.rubric.removeLevel(level);
      (_this$dataConnector4 = this.dataConnector) === null || _this$dataConnector4 === void 0 ? void 0 : _this$dataConnector4.deleteLevel(level);
      this.selectLevel(null);
    }
  }, {
    key: "onRemoveItemChanged",
    value: function onRemoveItemChanged() {
      var _this5 = this;

      if (this.removingLevel) {
        this.$nextTick(function () {
          _this5.$refs['btn-remove-level'].focus();
        });
      }
    }
  }]);

  return LevelsView;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a);

__decorate([Prop({
  type: Rubric_Rubric,
  required: true
}), __metadata("design:type", typeof (LevelsViewvue_type_script_lang_ts_a = typeof Rubric_Rubric !== "undefined" && Rubric_Rubric) === "function" ? LevelsViewvue_type_script_lang_ts_a : Object)], LevelsViewvue_type_script_lang_ts_LevelsView.prototype, "rubric", void 0);

__decorate([Prop(DataConnector_DataConnector), __metadata("design:type", Object)], LevelsViewvue_type_script_lang_ts_LevelsView.prototype, "dataConnector", void 0);

__decorate([Watch('removingLevel'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], LevelsViewvue_type_script_lang_ts_LevelsView.prototype, "onRemoveItemChanged", null);

LevelsViewvue_type_script_lang_ts_LevelsView = __decorate([vue_class_component_esm({
  name: 'levels-view',
  components: {
    LevelDetails: Components_LevelDetails
  }
}), __metadata("design:paramtypes", [])], LevelsViewvue_type_script_lang_ts_LevelsView);
/* harmony default export */ var LevelsViewvue_type_script_lang_ts_ = (LevelsViewvue_type_script_lang_ts_LevelsView);
// CONCATENATED MODULE: ./src/Components/LevelsView.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Components_LevelsViewvue_type_script_lang_ts_ = (LevelsViewvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/Components/LevelsView.vue?vue&type=style&index=0&lang=scss&
var LevelsViewvue_type_style_index_0_lang_scss_ = __webpack_require__("7482");

// CONCATENATED MODULE: ./src/Components/LevelsView.vue






/* normalize component */

var LevelsView_component = normalizeComponent(
  Components_LevelsViewvue_type_script_lang_ts_,
  LevelsViewvue_type_template_id_2a9a05d1_render,
  LevelsViewvue_type_template_id_2a9a05d1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Components_LevelsView = (LevelsView_component.exports);
// CONCATENATED MODULE: ./src/Router/router.ts











external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(vue_router_esm);
var builderRoutes = [{
  path: '/',
  name: 'Builder',
  component: Components_ScoreRubricView
}, {
  path: '/levels',
  name: 'BuilderLevels',
  component: Components_LevelsView
}, {
  path: '/full-view',
  name: 'BuilderFull',
  component: Views_RubricBuilderFull
}];
var demoRoutes = [{
  path: '/',
  name: 'Home',
  component: RubricDemoHome,
  props: true
}, {
  path: '/builder',
  component: Views_RubricBuilderDemoWrapper,
  children: [{
    path: '',
    name: 'Builder',
    component: Components_ScoreRubricView
  }, {
    path: 'levels',
    name: 'BuilderLevels',
    component: Components_LevelsView
  }, {
    path: 'full-view',
    name: 'BuilderFull',
    component: Views_RubricBuilderFull
  }]
}, {
  path: '/preview',
  name: 'Preview',
  component: Views_RubricPreviewDemoWrapper,
  props: true
}, {
  path: '/entry',
  name: 'Entry',
  component: Views_RubricEntryWrapper,
  props: true
}, {
  path: '/results',
  name: 'Results',
  component: Views_RubricResultWrapper,
  props: true
}];
var routers = {
  getRouter: function getRouter(name) {
    var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'hash';

    if (['demo', 'builder'].indexOf(name) === -1) {
      throw new Error("No router with name '".concat(name, "' available."));
    }

    return new vue_router_esm({
      mode: mode,
      linkExactActiveClass: 'active-link',
      routes: name === 'builder' ? builderRoutes : demoRoutes
    });
  }
};
/* harmony default export */ var router = (routers);
// CONCATENATED MODULE: ./src/plugin.ts





/* harmony default export */ var src_plugin = ({
  install: function install(Vue, options) {
    Vue.component('RubricDemoWrapper', Views_RubricDemoWrapper);
    Vue.component('RubricBuilderWrapper', Views_RubricBuilderWrapper);
    Vue.component('RubricPreviewWrapper', Views_RubricPreviewWrapper); // console.log('adding method to proto');

    Vue.prototype.$getRouter = function (name) {
      return router.getRouter(name);
    };

    Vue.prototype.$getRubricFromJSON = function (rubricJSON) {
      return Rubric_Rubric.fromJSON(rubricJSON);
    };
  }
});
// CONCATENATED MODULE: /Users/stefan/dev/vagrantbox/synced_folders/var_www/html/cosnics/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_plugin);



/***/ }),

/***/ "cce3":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("4a1c");
var isObject = __webpack_require__("2f69");
var anObject = __webpack_require__("6161");
var has = __webpack_require__("e414");
var getOwnPropertyDescriptorModule = __webpack_require__("05dc");
var getPrototypeOf = __webpack_require__("1b63");

// `Reflect.get` method
// https://tc39.github.io/ecma262/#sec-reflect.get
function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var descriptor, prototype;
  if (anObject(target) === receiver) return target[propertyKey];
  if (descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey)) return has(descriptor, 'value')
    ? descriptor.value
    : descriptor.get === undefined
      ? undefined
      : descriptor.get.call(receiver);
  if (isObject(prototype = getPrototypeOf(target))) return get(prototype, propertyKey, receiver);
}

$({ target: 'Reflect', stat: true }, {
  get: get
});


/***/ }),

/***/ "cdab":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ce1a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("4a1c");
var DESCRIPTORS = __webpack_require__("70b9");
var global = __webpack_require__("b5f1");
var has = __webpack_require__("e414");
var isObject = __webpack_require__("2f69");
var defineProperty = __webpack_require__("e6a8").f;
var copyConstructorProperties = __webpack_require__("6d94");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "ce57":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("3b5d");
var enumBugKeys = __webpack_require__("b337");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "d0d3":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4ff6");
var requireObjectCoercible = __webpack_require__("b2c6");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "d4e2":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("7104");

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "d656":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("4a1c");
var forEach = __webpack_require__("8239");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "d821":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "dca4":
/***/ (function(module, exports, __webpack_require__) {

(function(t,e){ true?module.exports=e():undefined})("undefined"!==typeof self?self:this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"0ca3":function(t,e,n){"use strict";var r=n("c6aa"),i=n.n(r);i.a},7937:function(t,e,n){},"7fca":function(t,e,n){"use strict";var r=n("c10a"),i=n.n(r);i.a},8875:function(t,e,n){var r,i,o;(function(n,a){i=[],r=a,o="function"===typeof r?r.apply(e,i):r,void 0===o||(t.exports=o)})("undefined"!==typeof self&&self,(function(){function t(){if(document.currentScript)return document.currentScript;try{throw new Error}catch(h){var t,e,n,r=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,i=/@([^@]*):(\d+):(\d+)\s*$/gi,o=r.exec(h.stack)||i.exec(h.stack),a=o&&o[1]||!1,s=o&&o[2]||!1,c=document.location.href.replace(document.location.hash,""),l=document.getElementsByTagName("script");a===c&&(t=document.documentElement.outerHTML,e=new RegExp("(?:[^\\n]+?\\n){0,"+(s-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),n=t.replace(e,"$1").trim());for(var u=0;u<l.length;u++){if("interactive"===l[u].readyState)return l[u];if(l[u].src===a)return l[u];if(a===c&&l[u].innerHTML&&l[u].innerHTML.trim()===n)return l[u]}return null}}return t}))},9334:function(t,e,n){"use strict";var r=n("7937"),i=n.n(r);i.a},c10a:function(t,e,n){},c6aa:function(t,e,n){},fb15:function(t,e,n){"use strict";if(n.r(e),n.d(e,"DEFAULT_BACKGROUND_COLOR",(function(){return z})),n.d(e,"DEFAULT_BORDER_RADIUS",(function(){return R})),n.d(e,"DEFAULT_ROW_LENGTH",(function(){return E})),n.d(e,"DEFAULT_TRIGGER_CONTAINER_SPACE",(function(){return F})),n.d(e,"DEFAULT_SWATCH_SIZE",(function(){return L})),n.d(e,"DEFAULT_SHOW_BORDER",(function(){return A})),"undefined"!==typeof window){var r=window.document.currentScript,i=n("8875");r=i(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:i});var o=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);o&&(n.p=o[1])}var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-swatches",attrs:{tabindex:"-1"},on:{blur:function(e){return t.onBlur(e.relatedTarget)}}},[t.inline?t._e():n("div",{ref:"triggerWrapper",staticClass:"vue-swatches__trigger__wrapper",on:{click:t.togglePopover}},[t._t("trigger",[n("div",{staticClass:"vue-swatches__trigger",class:{"vue-swatches--is-empty":!t.value,"vue-swatches--is-disabled":t.disabled},style:t.triggerStyles},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isNoColor,expression:"isNoColor"}],staticClass:"vue-swatches__diagonal__wrapper vue-swatches--has-children-centered"},[n("div",{staticClass:"vue-swatches__diagonal"})])])])],2),n("transition",{attrs:{name:"vue-swatches-show-hide"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.inline||t.isOpen,expression:"inline || isOpen"}],ref:"containerWrapper",staticClass:"vue-swatches__container",class:{"vue-swatches--inline":t.inline},style:t.containerStyles},[n("div",{staticClass:"vue-swatches__wrapper",style:t.wrapperStyles},[t.isNested?t._l(t.computedSwatches,(function(e,r){return n("div",{key:r,staticClass:"vue-swatches__row"},t._l(e,(function(e,r){return n("v-swatch",{key:r,attrs:{"border-radius":t.computedBorderRadius,disabled:t.getSwatchDisabled(e),selected:t.checkEquality(t.getSwatchColor(e),t.value),"swatch-size":t.computedSwatchSize,"spacing-size":t.computedSpacingSize,"show-border":t.getSwatchShowBorder(e),"show-checkbox":t.showCheckbox,"show-labels":t.showLabels,"swatch-color":t.getSwatchColor(e),"swatch-label":t.getSwatchLabel(e),"swatch-alt":t.getSwatchAlt(e),"swatch-style":t.swatchStyle},on:{blur:function(e){return t.onBlur(e)},click:function(n){return t.updateSwatch(e)}},nativeOn:{click:function(n){return t.updateSwatch(e)}}})})),1)})):t._l(t.computedSwatches,(function(e,r){return n("v-swatch",{key:r,attrs:{"border-radius":t.computedBorderRadius,disabled:t.getSwatchDisabled(e),selected:t.checkEquality(t.getSwatchColor(e),t.value),"swatch-size":t.computedSwatchSize,"spacing-size":t.computedSpacingSize,"show-border":t.getSwatchShowBorder(e),"show-checkbox":t.showCheckbox,"show-labels":t.showLabels,"swatch-color":t.getSwatchColor(e),"swatch-label":t.getSwatchLabel(e),"swatch-alt":t.getSwatchAlt(e),"swatch-style":t.swatchStyle},on:{blur:function(e){return t.onBlur(e)},click:function(n){return t.updateSwatch(e)}},nativeOn:{click:function(n){return t.updateSwatch(e)}}})}))],2),t.showFallback?n("div",{staticClass:"vue-swatches__fallback__wrapper",style:t.computedFallbackWrapperStyles},[n("span",{staticClass:"vue-swatches__fallback__input--wrapper"},[n("input",{ref:"fallbackInput",staticClass:"vue-swatches__fallback__input",class:t.fallbackInputClass,attrs:{type:t.fallbackInputType},domProps:{value:t.internalValue},on:{input:function(e){return t.updateSwatch(e.target.value,{fromFallbackInput:!0})}}})]),t.showFallbackOk?n("button",{staticClass:"vue-swatches__fallback__button",class:t.fallbackOkClass,on:{click:function(e){return e.preventDefault(),t.onFallbackButtonClick(e)}}},[t._v(" "+t._s(t.fallbackOkText)+" ")]):t._e()]):t._e()])])],1)},s=[],c={colors:["#1FBC9C","#1CA085","#2ECC70","#27AF60","#3398DB","#2980B9","#A463BF","#8E43AD","#3D556E","#222F3D","#F2C511","#F39C19","#E84B3C","#C0382B","#DDE6E8","#BDC3C8"],rowLength:4},l={colors:["#CC0001","#E36101","#FFCC00","#009900","#0066CB","#000000","#FFFFFF"],showBorder:!0},u={colors:[["#000000","#434343","#666666","#999999","#b7b7b7","#cccccc","#d9d9d9","#efefef","#f3f3f3","#ffffff"],["#980000","#ff0000","#ff9900","#ffff00","#00ff00","#00ffff","#4a86e8","#0000ff","#9900ff","#ff00ff"],["#e6b8af","#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#c9daf8","#cfe2f3","#d9d2e9","#ead1dc"],["#dd7e6b","#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#a4c2f4","#9fc5e8","#b4a7d6","#d5a6bd"],["#cc4125","#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6d9eeb","#6fa8dc","#8e7cc3","#c27ba0"],["#a61c00","#cc0000","#e69138","#f1c232","#6aa84f","#45818e","#3c78d8","#3d85c6","#674ea7","#a64d79"],["#85200c","#990000","#b45f06","#bf9000","#38761d","#134f5c","#1155cc","#0b5394","#351c75","#741b47"],["#5b0f00","#660000","#783f04","#7f6000","#274e13","#0c343d","#1c4587","#073763","#20124d","#4c1130"]],borderRadius:"0",rowLength:10,swatchSize:24,spacingSize:0},h=function(){var t=this,e=this,n=e.$createElement,r=e._self._c||n;return r("div",{staticClass:"vue-swatches__swatch",class:{"vue-swatches__swatch--border":e.showBorder,"vue-swatches__swatch--selected":e.selected,"vue-swatches__swatch--is-disabled":e.disabled},style:e.swatchStyles,attrs:{"aria-label":e.swatchAlt,role:"button",tabindex:"0"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$emit("click",e.swatchColor)},blur:function(e){return t.$emit("blur",e.relatedTarget)}}},[""===e.swatchColor?r("div",{staticClass:"vue-swatches__diagonal__wrapper vue-swatches--has-children-centered"},[r("div",{staticClass:"vue-swatches__diagonal"})]):e._e(),r("v-check",{directives:[{name:"show",rawName:"v-show",value:e.showCheckbox&&e.selected,expression:"showCheckbox && selected"}]}),e.showLabels?r("div",{staticClass:"vue-swatches__swatch__label",style:e.labelStyles},[e._v(" "+e._s(e.swatchLabel)+" ")]):e._e()],1)},d=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-swatches__check__wrapper vue-swatches--has-children-centered"},[n("div",{staticClass:"vue-swatches__check__circle vue-swatches--has-children-centered"},[n("svg",{staticClass:"check",attrs:{version:"1.1",role:"presentation",width:"12",height:"12",viewBox:"0 0 1792 1792"}},[n("path",{staticClass:"vue-swatches__check__path",attrs:{d:"M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"}})])])])},f=[],w={name:"v-check",data:function(){return{}}},b=w;n("7fca");function S(t,e,n,r,i,o,a,s){var c,l="function"===typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=c):i&&(c=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:l}}var y=S(b,p,f,!1,null,null,null),g=y.exports,v={name:"v-swatch",components:{VCheck:g},props:{borderRadius:{type:String},disabled:{type:Boolean},selected:{type:Boolean,default:!1},showCheckbox:{type:Boolean},showBorder:{type:Boolean},showLabels:{type:Boolean},spacingSize:{type:Number},swatchColor:{type:String,default:""},swatchLabel:{type:String},swatchAlt:{type:String},swatchSize:{type:Number},swatchStyle:{type:Object}},data:function(){return{}},computed:{computedLabelStyle:function(){var t=8+3*Math.floor(this.spacingSize/5);return{bottom:"-".concat(t,"px")}},computedSwatchStyle:function(){return{width:"".concat(this.swatchSize,"px"),height:"".concat(this.swatchSize,"px"),marginBottom:"".concat(this.spacingSize,"px"),marginRight:"".concat(this.spacingSize,"px"),borderRadius:this.borderRadius,backgroundColor:""!==this.swatchColor?this.swatchColor:"#FFFFFF",cursor:this.cursorStyle}},cursorStyle:function(){return this.disabled?"not-allowed":"pointer"},labelStyles:function(){return[this.computedLabelStyle]},swatchStyles:function(){return[this.computedSwatchStyle,this.swatchStyle]}}},m=v,_=(n("0ca3"),S(m,h,d,!1,null,null,null)),C=_.exports;function k(t){return k="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){B(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function B(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var z="#ffffff",R="10px",E=4,F=5,L=42,A=!1,j={name:"v-swatches",components:{VSwatch:C},props:{backgroundColor:{type:String,default:z},closeOnSelect:{type:Boolean,default:!0},swatches:{type:[Array,String],default:function(){return"basic"}},disabled:{type:Boolean,default:!1},fallbackInputClass:{type:[Array,Object,String],default:null},fallbackInputType:{type:String,default:function(){return"text"},validator:function(t){return-1!==["text","color"].indexOf(t)}},fallbackOkClass:{type:[Array,Object,String],default:null},fallbackOkText:{type:String,default:"Ok"},inline:{type:Boolean,default:!1},shapes:{type:String,default:"squares"},popoverX:{type:String,default:"right"},popoverY:{type:String,default:"bottom"},rowLength:{type:[Number,String],default:null},showBorder:{type:Boolean,default:null},showFallback:{type:Boolean,default:!1},showCheckbox:{type:Boolean,default:!0},showLabels:{type:Boolean,default:!1},spacingSize:{type:Number,default:null},swatchSize:{type:[Number,String],default:null},swatchStyle:{type:[Object,Array],default:function(){}},triggerStyle:{type:[Object,Array],default:function(){}},wrapperStyle:{type:[Object,Array],default:function(){}},value:{type:String,default:null}},data:function(){return{alwaysOnScreenStyle:{},componentMounted:!1,presetBorderRadius:null,presetRowLength:null,presetShowBorder:null,presetSwatchSize:null,presetSpacingSize:null,internalValue:this.value,internalIsOpen:!1}},computed:{isNested:function(){return!!(this.computedSwatches&&this.computedSwatches.length&&this.computedSwatches[0]instanceof Array)},isOpen:function(){return!this.inline&&this.internalIsOpen},isNoColor:function(){return this.checkEquality("",this.value)},computedSwatches:function(){if(this.swatches instanceof Array)return this.swatches;if("string"!==typeof this.swatches)return[];switch(this.swatches){case"text-basic":return this.extractColorAndApplyPreset(l);case"text-advanced":return this.extractColorAndApplyPreset(u);case"basic":default:return this.extractColorAndApplyPreset(c)}},computedBorderRadius:function(){return null!==this.presetBorderRadius?this.presetBorderRadius:this.borderRadius},computedRowLength:function(){return null!==this.rowLength?Number(this.rowLength):null!==this.presetRowLength?this.presetRowLength:E},computedSwatchSize:function(){return null!==this.swatchSize?Number(this.swatchSize):null!==this.presetSwatchSize?this.presetSwatchSize:L},computedSpacingSize:function(){return null!==this.spacingSize?this.spacingSize:null!==this.presetSpacingSize?this.presetSpacingSize:Math.round(.25*this.computedSwatchSize)},computedShowBorder:function(){return null!==this.showBorder?this.showBorder:null!==this.presetShowBorder?this.presetShowBorder:A},showFallbackOk:function(){return!this.inline},borderRadius:function(){return"squares"===this.shapes?"".concat(Math.round(.25*this.computedSwatchSize),"px"):"circles"===this.shapes?"50%":""},wrapperWidth:function(){return this.computedRowLength*(this.computedSwatchSize+this.computedSpacingSize)},computedtriggerStyle:function(){return{width:"42px",height:"42px",backgroundColor:this.value?this.value:"#ffffff",borderRadius:"circles"===this.shapes?"50%":R}},triggerStyles:function(){return[this.computedtriggerStyle,this.triggerStyle]},containerStyles:function(){return[{backgroundColor:this.backgroundColor},this.alwaysOnScreenStyle]},computedWrapperStyle:function(){var t={paddingTop:"".concat(this.computedSpacingSize,"px"),paddingLeft:"".concat(this.computedSpacingSize,"px")};return this.inline?t:x({},t,{width:"".concat(this.wrapperWidth,"px")})},wrapperStyles:function(){return[this.computedWrapperStyle,this.wrapperStyle]},computedFallbackWrapperStyle:function(){var t={marginLeft:"".concat(this.computedSpacingSize,"px"),paddingBottom:"".concat(this.computedSpacingSize,"px")};return this.inline?t:x({},t,{width:"".concat(this.wrapperWidth-this.computedSpacingSize,"px")})},computedFallbackWrapperStyles:function(){return[this.computedFallbackWrapperStyle]}},watch:{value:function(t){this.internalValue=t}},mounted:function(){this.componentMounted=!0},methods:{checkEquality:function(t,e){return!(!t&&""!==t||!e&&""!==e)&&t.toUpperCase()===e.toUpperCase()},hidePopover:function(){this.internalIsOpen=!1,this.$el.blur(),this.$emit("close",this.internalValue)},getAlwaysOnScreenStyle:function(){var t={},e=this.$refs.triggerWrapper,n=this.$refs.containerWrapper;if(!this.componentMounted||this.inline||!e||!window||!document)return t;var r=e.getBoundingClientRect(),i=5,o=(document.documentElement.clientWidth||window.innerWidth)-5,a=5,s=(document.documentElement.clientHeight||window.innerHeight)-5;n.style.visibility="hidden",n.style.display="block";var c=n.getBoundingClientRect();return n.style.display="none",n.style.visibility="visible","top"===this.popoverY?r.top-c.height<a?(t.top="".concat(r.height+F,"px"),t.bottom="auto"):(t.bottom="".concat(r.height+F,"px"),t.top="auto"):"bottom"===this.popoverY&&(r.bottom+c.height>s?(t.bottom="".concat(r.height+F,"px"),t.top="auto"):(t.top="".concat(r.height+F,"px"),t.bottom="auto")),"left"===this.popoverX?r.right-c.width<i?(t.left=0,t.right="auto"):(t.right=0,t.left="auto"):"right"===this.popoverX&&(r.left+c.width>o?(t.right=0,t.left="auto"):(t.left=0,t.right="auto")),t},getSwatchShowBorder:function(t){return"string"===typeof t?this.computedShowBorder:"object"===k(t)?void 0!==t.showBorder?t.showBorder:this.computedShowBorder:void 0},getSwatchColor:function(t){return"string"===typeof t?t:"object"===k(t)?t.color:void 0},getSwatchDisabled:function(t){return"string"===typeof t?this.disabled:"object"===k(t)?void 0!==t.disabled?t.disabled:this.disabled:void 0},getSwatchLabel:function(t){return"string"===typeof t?t:"object"===k(t)?t.label||t.color:void 0},getSwatchAlt:function(t){return"string"===typeof t?t:"object"===k(t)?t.alt||this.getSwatchLabel(t):void 0},onBlur:function(t){this.isOpen&&(null!==t&&this.$el.contains(t)||(this.internalIsOpen=!1,this.$emit("close",this.internalValue)))},onFallbackButtonClick:function(){this.hidePopover()},showPopover:function(){this.isOpen||this.inline||this.disabled||(this.alwaysOnScreenStyle=this.getAlwaysOnScreenStyle(),this.internalIsOpen=!0,this.$el.focus(),this.$emit("open"))},togglePopover:function(){this.isOpen?this.hidePopover():this.showPopover()},updateSwatch:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.fromFallbackInput;if(!this.getSwatchDisabled(t)){var r=this.getSwatchColor(t);this.internalValue=r,this.$emit("input",r),!this.closeOnSelect||this.inline||n||this.hidePopover()}},extractColorAndApplyPreset:function(t){return t.borderRadius&&(this.presetBorderRadius=t.borderRadius),t.rowLength&&(this.presetRowLength=t.rowLength),t.showBorder&&(this.presetShowBorder=t.showBorder),t.swatchSize&&(this.presetSwatchSize=t.swatchSize),(0===t.spacingSize||t.spacingSize)&&(this.presetSpacingSize=t.spacingSize),t.colors}}},P=j,D=(n("9334"),S(P,a,s,!1,null,null,null)),T=D.exports;e["default"]=T}})["default"]}));
//# sourceMappingURL=vue-swatches.umd.min.js.map

/***/ }),

/***/ "dd93":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4ff6");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("0e29");
var normalizeHeaderName = __webpack_require__("e178");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__("04be");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__("04be");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("9e7e")))

/***/ }),

/***/ "e178":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0e29");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "e1f8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0e29");
var bind = __webpack_require__("c097");
var Axios = __webpack_require__("8796");
var mergeConfig = __webpack_require__("eb13");
var defaults = __webpack_require__("e163");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__("97f0");
axios.CancelToken = __webpack_require__("9ebe");
axios.isCancel = __webpack_require__("fe2c");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("33a3");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "e414":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "e4e7":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("f914");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "e57b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("4a1c");
var $filter = __webpack_require__("ec68").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("7aeb");
var arrayMethodUsesToLength = __webpack_require__("3bd5");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "e6a8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("70b9");
var IE8_DOM_DEFINE = __webpack_require__("4bec");
var anObject = __webpack_require__("6161");
var toPrimitive = __webpack_require__("370b");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "e789":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("4a1c");
var fails = __webpack_require__("7104");
var toObject = __webpack_require__("64f1");
var nativeGetPrototypeOf = __webpack_require__("1b63");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("efa9");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),

/***/ "eb13":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0e29");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "ec68":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("326d");
var IndexedObject = __webpack_require__("2be1");
var toObject = __webpack_require__("64f1");
var toLength = __webpack_require__("7cf1");
var arraySpeciesCreate = __webpack_require__("62c9");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "edef":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("e4e7");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "efa9":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("7104");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "f072":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0e29");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "f23c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("0e29");
var transformData = __webpack_require__("000a");
var isCancel = __webpack_require__("fe2c");
var defaults = __webpack_require__("e163");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "f347":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("b6bc");
var isRegExp = __webpack_require__("7350");
var anObject = __webpack_require__("6161");
var requireObjectCoercible = __webpack_require__("b2c6");
var speciesConstructor = __webpack_require__("bbec");
var advanceStringIndex = __webpack_require__("2690");
var toLength = __webpack_require__("7cf1");
var callRegExpExec = __webpack_require__("4bc5");
var regexpExec = __webpack_require__("9a1c");
var fails = __webpack_require__("7104");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "f7ad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("4a1c");
var $map = __webpack_require__("ec68").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("7aeb");
var arrayMethodUsesToLength = __webpack_require__("3bd5");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "f7f2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricBuilderWrapper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8808");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricBuilderWrapper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricBuilderWrapper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RubricBuilderWrapper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f7f3":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("2060");
var toLength = __webpack_require__("7cf1");
var toAbsoluteIndex = __webpack_require__("dd93");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "f914":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("0949");
var global = __webpack_require__("b5f1");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "f9d2":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("b5f1");

module.exports = global.Promise;


/***/ }),

/***/ "fabe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "fba6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("4a1c");
var global = __webpack_require__("b5f1");
var getBuiltIn = __webpack_require__("f914");
var IS_PURE = __webpack_require__("764f");
var DESCRIPTORS = __webpack_require__("70b9");
var NATIVE_SYMBOL = __webpack_require__("49cf");
var USE_SYMBOL_AS_UID = __webpack_require__("7f0c");
var fails = __webpack_require__("7104");
var has = __webpack_require__("e414");
var isArray = __webpack_require__("8d52");
var isObject = __webpack_require__("2f69");
var anObject = __webpack_require__("6161");
var toObject = __webpack_require__("64f1");
var toIndexedObject = __webpack_require__("2060");
var toPrimitive = __webpack_require__("370b");
var createPropertyDescriptor = __webpack_require__("62ca");
var nativeObjectCreate = __webpack_require__("2c24");
var objectKeys = __webpack_require__("ce57");
var getOwnPropertyNamesModule = __webpack_require__("9161");
var getOwnPropertyNamesExternal = __webpack_require__("0ffa");
var getOwnPropertySymbolsModule = __webpack_require__("5dc3");
var getOwnPropertyDescriptorModule = __webpack_require__("05dc");
var definePropertyModule = __webpack_require__("e6a8");
var propertyIsEnumerableModule = __webpack_require__("0ffc");
var createNonEnumerableProperty = __webpack_require__("0209");
var redefine = __webpack_require__("6a8a");
var shared = __webpack_require__("943e");
var sharedKey = __webpack_require__("691f");
var hiddenKeys = __webpack_require__("4427");
var uid = __webpack_require__("5be7");
var wellKnownSymbol = __webpack_require__("4736");
var wrappedWellKnownSymbolModule = __webpack_require__("49ae");
var defineWellKnownSymbol = __webpack_require__("2afe");
var setToStringTag = __webpack_require__("5c65");
var InternalStateModule = __webpack_require__("0876");
var $forEach = __webpack_require__("ec68").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "fde1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const pFinally = __webpack_require__("c790");

class TimeoutError extends Error {
	constructor(message) {
		super(message);
		this.name = 'TimeoutError';
	}
}

const pTimeout = (promise, milliseconds, fallback) => new Promise((resolve, reject) => {
	if (typeof milliseconds !== 'number' || milliseconds < 0) {
		throw new TypeError('Expected `milliseconds` to be a positive number');
	}

	if (milliseconds === Infinity) {
		resolve(promise);
		return;
	}

	const timer = setTimeout(() => {
		if (typeof fallback === 'function') {
			try {
				resolve(fallback());
			} catch (error) {
				reject(error);
			}

			return;
		}

		const message = typeof fallback === 'string' ? fallback : `Promise timed out after ${milliseconds} milliseconds`;
		const timeoutError = fallback instanceof Error ? fallback : new TimeoutError(message);

		if (typeof promise.cancel === 'function') {
			promise.cancel();
		}

		reject(timeoutError);
	}, milliseconds);

	// TODO: Use native `finally` keyword when targeting Node.js 10
	pFinally(
		// eslint-disable-next-line promise/prefer-await-to-then
		promise.then(resolve, reject),
		() => {
			clearTimeout(timer);
		}
	);
});

module.exports = pTimeout;
// TODO: Remove this for the next major release
module.exports.default = pTimeout;

module.exports.TimeoutError = TimeoutError;


/***/ }),

/***/ "fe2c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "ffbc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("70b9");
var fails = __webpack_require__("7104");
var objectKeys = __webpack_require__("ce57");
var getOwnPropertySymbolsModule = __webpack_require__("5dc3");
var propertyIsEnumerableModule = __webpack_require__("0ffc");
var toObject = __webpack_require__("64f1");
var IndexedObject = __webpack_require__("2be1");

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ })

/******/ });
});
//# sourceMappingURL=cosnics-rubric.umd.js.map