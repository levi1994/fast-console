/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _index = __webpack_require__(1);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _main = __webpack_require__(10);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _console = __webpack_require__(14);
	
	var _console2 = _interopRequireDefault(_console);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var $node = (0, _main2.default)();
	var consoleComp = new _console2.default($node);
	consoleComp;
	_index2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/._css-loader@0.28.0@css-loader/index.js!./index.css", function() {
				var newContent = require("!!../../node_modules/._css-loader@0.28.0@css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)(undefined);
	// imports
	
	
	// module
	exports.push([module.id, ".fast-console{\r\n  position: fixed;\r\n  top:0;\r\n  bottom: 0;\r\n  left:0;\r\n  right: 0;\r\n}\r\n.fast-console .co-header{\r\n  display: block;\r\n  width: 100%;\r\n  height: 56px;\r\n  background: rgb(32, 160, 255);\r\n  box-shadow: -1px 1px 8px #989898;\r\n  cursor: pointer;\r\n  position: fixed;\r\n}\r\n.co-header div{\r\n  display: block;\r\n  float: left;\r\n  width: auto;\r\n  height: 100%;\r\n  line-height: 56px;\r\n  padding: 0 20px;\r\n  color: #fff;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n}\r\n.fast-console .main{\r\n  position: absolute;\r\n  top: 60px;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n.co-header div.focus{\r\n  background: rgba(255, 255, 255, 0.24);\r\n  border-bottom: 4px solid #fff;\r\n}\r\n.main .element-pane,.main .network-pane{\r\n  display: none;\r\n}\r\n.console-pane .tools{\r\n  width: 100%;\r\n  position: absolute;\r\n  height: 34px;\r\n  background: #fff;\r\n  box-shadow: 1px 1px 1px #ccc;\r\n}\r\n.console-pane .tools > div {\r\n  display: block;\r\n      float: left;\r\n      margin-left: 6px;\r\n      height: 16px;\r\n      line-height: 16px;\r\n      border-radius: 4px;\r\n      background: #fff;\r\n      color: #000;\r\n      padding: 4px 6px;\r\n      font-size: 12px;\r\n      margin-top: 4px\r\n}\r\n\r\n.console-pane .tools > div.focus{\r\n  background: #5f5f5f;\r\n  color: #fff;\r\n}\r\n\r\n.main .pane{\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-x: auto;\r\n  overflow-y: auto;\r\n}\r\n\r\n.console-pane .log-container{\r\n  background: rgba(225, 247, 255, 0.18);\r\n  position: absolute;\r\n  top: 34px;\r\n  width: 100%;\r\n  bottom: 0;\r\n  z-index: -1;\r\n}\r\n\r\n.logitem {\r\n    display: block;\r\n    padding: 10px 6px;\r\n    border-bottom: 1px solid rgba(204, 204, 204, 0.47);\r\n    font-size: 12px;\r\n}\r\n\r\n.logitem.t-warn {\r\n  display: block;\r\n  color: rgba(255, 237, 0, 0.97);\r\n}\r\n\r\n.logitem.t-info {\r\n  display: block;\r\n  color: blue;\r\n}\r\n\r\n.logitem.t-error{\r\n  color: rgba(255, 0, 0, 0.97);\r\n}\r\n\r\n.logitem.t-log::before{\r\n  content: \" > [log]\";\r\n  margin-right: 10px;\r\n}\r\n.logitem.t-warn::before{\r\n  content: \" > [warn]\";\r\n  margin-right: 10px;\r\n}\r\n.logitem.t-info::before{\r\n  content: \" > [info]\";\r\n  margin-right: 10px;\r\n}\r\n.logitem.t-error::before{\r\n  content: \" > [error]\";\r\n  margin-right: 10px;\r\n}\r\n\r\n.network-pane .r-header,.network-pane .x-header{\r\n  display: block;\r\n  background: #6b6b6b;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  padding-left: 10px;\r\n}\r\n.network-pane .resource,.network-pane .xhr{\r\n  display: block;\r\n  box-shadow: 1px 1px 1px #ccc;\r\n}\r\n.network-pane .xhr{\r\n  margin-top: 20px;\r\n}\r\n.r-item,.x-item{\r\n  display: flex;\r\n  padding: 8px 4px;\r\n  font-size: 12px;\r\n}\r\n.r-item > div,.x-item > div{\r\n  text-align: center;\r\n  padding:0 4px;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.fullname{\r\n  color: rgb(32, 160, 255);\r\n}\r\n\r\n.r-item .name{\r\n  flex:1;\r\n}\r\n.r-item .time{\r\n  flex:1;\r\n}\r\n.r-item .fullname{\r\n  flex:4;\r\n}\r\n\r\n.x-item .name{\r\n  flex:1;\r\n}\r\n.x-item .status{\r\n  flex:1;\r\n}\r\n.x-item .method{\r\n  flex:1;\r\n}\r\n.x-item .time{\r\n  flex:1;\r\n}\r\n.x-item .fullname{\r\n  flex:4;\r\n}\r\n", ""]);
	
	// exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {"use strict";
	
	module.exports = function (useSourceMap) {
		var list = [];
	
		list.toString = function toString() {
			return this.map(function (item) {
				var content = cssWithMappingToString(item, useSourceMap);
				if (item[2]) {
					return "@media " + item[2] + "{" + content + "}";
				} else {
					return content;
				}
			}).join("");
		};
	
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
	
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};
	
	function cssWithMappingToString(item, useSourceMap) {
		var content = item[1] || '';
		var cssMapping = item[3];
		if (!cssMapping) {
			return content;
		}
	
		if (useSourceMap) {
			var sourceMapping = toComment(cssMapping);
			var sourceURLs = cssMapping.sources.map(function (source) {
				return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
			});
	
			return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
		}
	
		return [content].join('\n');
	}
	
	function toComment(sourceMap) {
		var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
		var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
	
		return '/*# ' + data + ' */';
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	'use strict';
	
	var base64 = __webpack_require__(5);
	var ieee754 = __webpack_require__(6);
	var isArray = __webpack_require__(7);
	
	exports.Buffer = Buffer;
	exports.SlowBuffer = SlowBuffer;
	exports.INSPECT_MAX_BYTES = 50;
	
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
	
	exports.kMaxLength = kMaxLength();
	
	function typedArraySupport() {
	  try {
	    var arr = new Uint8Array(1);
	    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
	        return 42;
	      } };
	    return arr.foo() === 42 && typeof arr.subarray === 'function' && arr.subarray(1, 1).byteLength === 0;
	  } catch (e) {
	    return false;
	  }
	}
	
	function kMaxLength() {
	  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
	}
	
	function createBuffer(that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length');
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    that = new Uint8Array(length);
	    that.__proto__ = Buffer.prototype;
	  } else {
	    if (that === null) {
	      that = new Buffer(length);
	    }
	    that.length = length;
	  }
	
	  return that;
	}
	
	function Buffer(arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length);
	  }
	
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error('If encoding is specified then the first argument must be a string');
	    }
	    return allocUnsafe(this, arg);
	  }
	  return from(this, arg, encodingOrOffset, length);
	}
	
	Buffer.poolSize = 8192;
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype;
	  return arr;
	};
	
	function from(that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number');
	  }
	
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length);
	  }
	
	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset);
	  }
	
	  return fromObject(that, value);
	}
	
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length);
	};
	
	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype;
	  Buffer.__proto__ = Uint8Array;
	  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    });
	  }
	}
	
	function assertSize(size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number');
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative');
	  }
	}
	
	function alloc(that, size, fill, encoding) {
	  assertSize(size);
	  if (size <= 0) {
	    return createBuffer(that, size);
	  }
	  if (fill !== undefined) {
	    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
	  }
	  return createBuffer(that, size);
	}
	
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding);
	};
	
	function allocUnsafe(that, size) {
	  assertSize(size);
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0;
	    }
	  }
	  return that;
	}
	
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size);
	};
	
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size);
	};
	
	function fromString(that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8';
	  }
	
	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding');
	  }
	
	  var length = byteLength(string, encoding) | 0;
	  that = createBuffer(that, length);
	
	  var actual = that.write(string, encoding);
	
	  if (actual !== length) {
	    that = that.slice(0, actual);
	  }
	
	  return that;
	}
	
	function fromArrayLike(that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0;
	  that = createBuffer(that, length);
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255;
	  }
	  return that;
	}
	
	function fromArrayBuffer(that, array, byteOffset, length) {
	  array.byteLength;
	
	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds');
	  }
	
	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds');
	  }
	
	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array);
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset);
	  } else {
	    array = new Uint8Array(array, byteOffset, length);
	  }
	
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    that = array;
	    that.__proto__ = Buffer.prototype;
	  } else {
	    that = fromArrayLike(that, array);
	  }
	  return that;
	}
	
	function fromObject(that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0;
	    that = createBuffer(that, len);
	
	    if (that.length === 0) {
	      return that;
	    }
	
	    obj.copy(that, 0, 0, len);
	    return that;
	  }
	
	  if (obj) {
	    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0);
	      }
	      return fromArrayLike(that, obj);
	    }
	
	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data);
	    }
	  }
	
	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
	}
	
	function checked(length) {
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
	  }
	  return length | 0;
	}
	
	function SlowBuffer(length) {
	  if (+length != length) {
	    length = 0;
	  }
	  return Buffer.alloc(+length);
	}
	
	Buffer.isBuffer = function isBuffer(b) {
	  return !!(b != null && b._isBuffer);
	};
	
	Buffer.compare = function compare(a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers');
	  }
	
	  if (a === b) return 0;
	
	  var x = a.length;
	  var y = b.length;
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break;
	    }
	  }
	
	  if (x < y) return -1;
	  if (y < x) return 1;
	  return 0;
	};
	
	Buffer.isEncoding = function isEncoding(encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true;
	    default:
	      return false;
	  }
	};
	
	Buffer.concat = function concat(list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers');
	  }
	
	  if (list.length === 0) {
	    return Buffer.alloc(0);
	  }
	
	  var i;
	  if (length === undefined) {
	    length = 0;
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length;
	    }
	  }
	
	  var buffer = Buffer.allocUnsafe(length);
	  var pos = 0;
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i];
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers');
	    }
	    buf.copy(buffer, pos);
	    pos += buf.length;
	  }
	  return buffer;
	};
	
	function byteLength(string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length;
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength;
	  }
	  if (typeof string !== 'string') {
	    string = '' + string;
	  }
	
	  var len = string.length;
	  if (len === 0) return 0;
	
	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len;
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length;
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2;
	      case 'hex':
	        return len >>> 1;
	      case 'base64':
	        return base64ToBytes(string).length;
	      default:
	        if (loweredCase) return utf8ToBytes(string).length;
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	}
	Buffer.byteLength = byteLength;
	
	function slowToString(encoding, start, end) {
	  var loweredCase = false;
	
	  if (start === undefined || start < 0) {
	    start = 0;
	  }
	
	  if (start > this.length) {
	    return '';
	  }
	
	  if (end === undefined || end > this.length) {
	    end = this.length;
	  }
	
	  if (end <= 0) {
	    return '';
	  }
	
	  end >>>= 0;
	  start >>>= 0;
	
	  if (end <= start) {
	    return '';
	  }
	
	  if (!encoding) encoding = 'utf8';
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end);
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end);
	
	      case 'ascii':
	        return asciiSlice(this, start, end);
	
	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end);
	
	      case 'base64':
	        return base64Slice(this, start, end);
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end);
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
	        encoding = (encoding + '').toLowerCase();
	        loweredCase = true;
	    }
	  }
	}
	
	Buffer.prototype._isBuffer = true;
	
	function swap(b, n, m) {
	  var i = b[n];
	  b[n] = b[m];
	  b[m] = i;
	}
	
	Buffer.prototype.swap16 = function swap16() {
	  var len = this.length;
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits');
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1);
	  }
	  return this;
	};
	
	Buffer.prototype.swap32 = function swap32() {
	  var len = this.length;
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits');
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3);
	    swap(this, i + 1, i + 2);
	  }
	  return this;
	};
	
	Buffer.prototype.swap64 = function swap64() {
	  var len = this.length;
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits');
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7);
	    swap(this, i + 1, i + 6);
	    swap(this, i + 2, i + 5);
	    swap(this, i + 3, i + 4);
	  }
	  return this;
	};
	
	Buffer.prototype.toString = function toString() {
	  var length = this.length | 0;
	  if (length === 0) return '';
	  if (arguments.length === 0) return utf8Slice(this, 0, length);
	  return slowToString.apply(this, arguments);
	};
	
	Buffer.prototype.equals = function equals(b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
	  if (this === b) return true;
	  return Buffer.compare(this, b) === 0;
	};
	
	Buffer.prototype.inspect = function inspect() {
	  var str = '';
	  var max = exports.INSPECT_MAX_BYTES;
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
	    if (this.length > max) str += ' ... ';
	  }
	  return '<Buffer ' + str + '>';
	};
	
	Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer');
	  }
	
	  if (start === undefined) {
	    start = 0;
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0;
	  }
	  if (thisStart === undefined) {
	    thisStart = 0;
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length;
	  }
	
	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index');
	  }
	
	  if (thisStart >= thisEnd && start >= end) {
	    return 0;
	  }
	  if (thisStart >= thisEnd) {
	    return -1;
	  }
	  if (start >= end) {
	    return 1;
	  }
	
	  start >>>= 0;
	  end >>>= 0;
	  thisStart >>>= 0;
	  thisEnd >>>= 0;
	
	  if (this === target) return 0;
	
	  var x = thisEnd - thisStart;
	  var y = end - start;
	  var len = Math.min(x, y);
	
	  var thisCopy = this.slice(thisStart, thisEnd);
	  var targetCopy = target.slice(start, end);
	
	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i];
	      y = targetCopy[i];
	      break;
	    }
	  }
	
	  if (x < y) return -1;
	  if (y < x) return 1;
	  return 0;
	};
	
	function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
	  if (buffer.length === 0) return -1;
	
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset;
	    byteOffset = 0;
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff;
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000;
	  }
	  byteOffset = +byteOffset;
	  if (isNaN(byteOffset)) {
	    byteOffset = dir ? 0 : buffer.length - 1;
	  }
	
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1;else byteOffset = buffer.length - 1;
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0;else return -1;
	  }
	
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding);
	  }
	
	  if (Buffer.isBuffer(val)) {
	    if (val.length === 0) {
	      return -1;
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
	  } else if (typeof val === 'number') {
	    val = val & 0xFF;
	    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
	      }
	    }
	    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
	  }
	
	  throw new TypeError('val must be string, number or Buffer');
	}
	
	function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1;
	  var arrLength = arr.length;
	  var valLength = val.length;
	
	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase();
	    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1;
	      }
	      indexSize = 2;
	      arrLength /= 2;
	      valLength /= 2;
	      byteOffset /= 2;
	    }
	  }
	
	  function read(buf, i) {
	    if (indexSize === 1) {
	      return buf[i];
	    } else {
	      return buf.readUInt16BE(i * indexSize);
	    }
	  }
	
	  var i;
	  if (dir) {
	    var foundIndex = -1;
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i;
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex;
	        foundIndex = -1;
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true;
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false;
	          break;
	        }
	      }
	      if (found) return i;
	    }
	  }
	
	  return -1;
	}
	
	Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1;
	};
	
	Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
	};
	
	Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
	};
	
	function hexWrite(buf, string, offset, length) {
	  offset = Number(offset) || 0;
	  var remaining = buf.length - offset;
	  if (!length) {
	    length = remaining;
	  } else {
	    length = Number(length);
	    if (length > remaining) {
	      length = remaining;
	    }
	  }
	
	  var strLen = string.length;
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');
	
	  if (length > strLen / 2) {
	    length = strLen / 2;
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16);
	    if (isNaN(parsed)) return i;
	    buf[offset + i] = parsed;
	  }
	  return i;
	}
	
	function utf8Write(buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
	}
	
	function asciiWrite(buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length);
	}
	
	function latin1Write(buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length);
	}
	
	function base64Write(buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length);
	}
	
	function ucs2Write(buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
	}
	
	Buffer.prototype.write = function write(string, offset, length, encoding) {
	  if (offset === undefined) {
	    encoding = 'utf8';
	    length = this.length;
	    offset = 0;
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset;
	    length = this.length;
	    offset = 0;
	  } else if (isFinite(offset)) {
	    offset = offset | 0;
	    if (isFinite(length)) {
	      length = length | 0;
	      if (encoding === undefined) encoding = 'utf8';
	    } else {
	      encoding = length;
	      length = undefined;
	    }
	  } else {
	    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
	  }
	
	  var remaining = this.length - offset;
	  if (length === undefined || length > remaining) length = remaining;
	
	  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds');
	  }
	
	  if (!encoding) encoding = 'utf8';
	
	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length);
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length);
	
	      case 'ascii':
	        return asciiWrite(this, string, offset, length);
	
	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length);
	
	      case 'base64':
	        return base64Write(this, string, offset, length);
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length);
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	};
	
	Buffer.prototype.toJSON = function toJSON() {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  };
	};
	
	function base64Slice(buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf);
	  } else {
	    return base64.fromByteArray(buf.slice(start, end));
	  }
	}
	
	function utf8Slice(buf, start, end) {
	  end = Math.min(buf.length, end);
	  var res = [];
	
	  var i = start;
	  while (i < end) {
	    var firstByte = buf[i];
	    var codePoint = null;
	    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
	
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint;
	
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte;
	          }
	          break;
	        case 2:
	          secondByte = buf[i + 1];
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break;
	        case 3:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break;
	        case 4:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          fourthByte = buf[i + 3];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint;
	            }
	          }
	      }
	    }
	
	    if (codePoint === null) {
	      codePoint = 0xFFFD;
	      bytesPerSequence = 1;
	    } else if (codePoint > 0xFFFF) {
	      codePoint -= 0x10000;
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
	      codePoint = 0xDC00 | codePoint & 0x3FF;
	    }
	
	    res.push(codePoint);
	    i += bytesPerSequence;
	  }
	
	  return decodeCodePointsArray(res);
	}
	
	var MAX_ARGUMENTS_LENGTH = 0x1000;
	
	function decodeCodePointsArray(codePoints) {
	  var len = codePoints.length;
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints);
	  }
	
	  var res = '';
	  var i = 0;
	  while (i < len) {
	    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
	  }
	  return res;
	}
	
	function asciiSlice(buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F);
	  }
	  return ret;
	}
	
	function latin1Slice(buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i]);
	  }
	  return ret;
	}
	
	function hexSlice(buf, start, end) {
	  var len = buf.length;
	
	  if (!start || start < 0) start = 0;
	  if (!end || end < 0 || end > len) end = len;
	
	  var out = '';
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i]);
	  }
	  return out;
	}
	
	function utf16leSlice(buf, start, end) {
	  var bytes = buf.slice(start, end);
	  var res = '';
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
	  }
	  return res;
	}
	
	Buffer.prototype.slice = function slice(start, end) {
	  var len = this.length;
	  start = ~~start;
	  end = end === undefined ? len : ~~end;
	
	  if (start < 0) {
	    start += len;
	    if (start < 0) start = 0;
	  } else if (start > len) {
	    start = len;
	  }
	
	  if (end < 0) {
	    end += len;
	    if (end < 0) end = 0;
	  } else if (end > len) {
	    end = len;
	  }
	
	  if (end < start) end = start;
	
	  var newBuf;
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end);
	    newBuf.__proto__ = Buffer.prototype;
	  } else {
	    var sliceLen = end - start;
	    newBuf = new Buffer(sliceLen, undefined);
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start];
	    }
	  }
	
	  return newBuf;
	};
	
	function checkOffset(offset, ext, length) {
	  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
	}
	
	Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);
	
	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }
	
	  return val;
	};
	
	Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length);
	  }
	
	  var val = this[offset + --byteLength];
	  var mul = 1;
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul;
	  }
	
	  return val;
	};
	
	Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  return this[offset];
	};
	
	Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] | this[offset + 1] << 8;
	};
	
	Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] << 8 | this[offset + 1];
	};
	
	Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	
	  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
	};
	
	Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	
	  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
	};
	
	Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);
	
	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }
	  mul *= 0x80;
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
	
	  return val;
	};
	
	Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);
	
	  var i = byteLength;
	  var mul = 1;
	  var val = this[offset + --i];
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul;
	  }
	  mul *= 0x80;
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
	
	  return val;
	};
	
	Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  if (!(this[offset] & 0x80)) return this[offset];
	  return (0xff - this[offset] + 1) * -1;
	};
	
	Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset] | this[offset + 1] << 8;
	  return val & 0x8000 ? val | 0xFFFF0000 : val;
	};
	
	Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset + 1] | this[offset] << 8;
	  return val & 0x8000 ? val | 0xFFFF0000 : val;
	};
	
	Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	
	  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
	};
	
	Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	
	  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
	};
	
	Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return ieee754.read(this, offset, true, 23, 4);
	};
	
	Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return ieee754.read(this, offset, false, 23, 4);
	};
	
	Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return ieee754.read(this, offset, true, 52, 8);
	};
	
	Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return ieee754.read(this, offset, false, 52, 8);
	};
	
	function checkInt(buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
	  if (offset + ext > buf.length) throw new RangeError('Index out of range');
	}
	
	Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }
	
	  var mul = 1;
	  var i = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = value / mul & 0xFF;
	  }
	
	  return offset + byteLength;
	};
	
	Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }
	
	  var i = byteLength - 1;
	  var mul = 1;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = value / mul & 0xFF;
	  }
	
	  return offset + byteLength;
	};
	
	Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  this[offset] = value & 0xff;
	  return offset + 1;
	};
	
	function objectWriteUInt16(buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
	  }
	}
	
	Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value & 0xff;
	    this[offset + 1] = value >>> 8;
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2;
	};
	
	Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 8;
	    this[offset + 1] = value & 0xff;
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2;
	};
	
	function objectWriteUInt32(buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
	  }
	}
	
	Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = value >>> 24;
	    this[offset + 2] = value >>> 16;
	    this[offset + 1] = value >>> 8;
	    this[offset] = value & 0xff;
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4;
	};
	
	Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 24;
	    this[offset + 1] = value >>> 16;
	    this[offset + 2] = value >>> 8;
	    this[offset + 3] = value & 0xff;
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4;
	};
	
	Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }
	
	  var i = 0;
	  var mul = 1;
	  var sub = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
	  }
	
	  return offset + byteLength;
	};
	
	Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }
	
	  var i = byteLength - 1;
	  var mul = 1;
	  var sub = 0;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
	  }
	
	  return offset + byteLength;
	};
	
	Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  if (value < 0) value = 0xff + value + 1;
	  this[offset] = value & 0xff;
	  return offset + 1;
	};
	
	Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value & 0xff;
	    this[offset + 1] = value >>> 8;
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2;
	};
	
	Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 8;
	    this[offset + 1] = value & 0xff;
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2;
	};
	
	Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value & 0xff;
	    this[offset + 1] = value >>> 8;
	    this[offset + 2] = value >>> 16;
	    this[offset + 3] = value >>> 24;
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4;
	};
	
	Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (value < 0) value = 0xffffffff + value + 1;
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 24;
	    this[offset + 1] = value >>> 16;
	    this[offset + 2] = value >>> 8;
	    this[offset + 3] = value & 0xff;
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4;
	};
	
	function checkIEEE754(buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range');
	  if (offset < 0) throw new RangeError('Index out of range');
	}
	
	function writeFloat(buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4);
	  return offset + 4;
	}
	
	Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert);
	};
	
	Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert);
	};
	
	function writeDouble(buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8);
	  return offset + 8;
	}
	
	Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert);
	};
	
	Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert);
	};
	
	Buffer.prototype.copy = function copy(target, targetStart, start, end) {
	  if (!start) start = 0;
	  if (!end && end !== 0) end = this.length;
	  if (targetStart >= target.length) targetStart = target.length;
	  if (!targetStart) targetStart = 0;
	  if (end > 0 && end < start) end = start;
	
	  if (end === start) return 0;
	  if (target.length === 0 || this.length === 0) return 0;
	
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds');
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
	  if (end < 0) throw new RangeError('sourceEnd out of bounds');
	
	  if (end > this.length) end = this.length;
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start;
	  }
	
	  var len = end - start;
	  var i;
	
	  if (this === target && start < targetStart && targetStart < end) {
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else {
	    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
	  }
	
	  return len;
	};
	
	Buffer.prototype.fill = function fill(val, start, end, encoding) {
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start;
	      start = 0;
	      end = this.length;
	    } else if (typeof end === 'string') {
	      encoding = end;
	      end = this.length;
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0);
	      if (code < 256) {
	        val = code;
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string');
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding);
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255;
	  }
	
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index');
	  }
	
	  if (end <= start) {
	    return this;
	  }
	
	  start = start >>> 0;
	  end = end === undefined ? this.length : end >>> 0;
	
	  if (!val) val = 0;
	
	  var i;
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val;
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
	    var len = bytes.length;
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len];
	    }
	  }
	
	  return this;
	};
	
	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
	
	function base64clean(str) {
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
	
	  if (str.length < 2) return '';
	
	  while (str.length % 4 !== 0) {
	    str = str + '=';
	  }
	  return str;
	}
	
	function stringtrim(str) {
	  if (str.trim) return str.trim();
	  return str.replace(/^\s+|\s+$/g, '');
	}
	
	function toHex(n) {
	  if (n < 16) return '0' + n.toString(16);
	  return n.toString(16);
	}
	
	function utf8ToBytes(string, units) {
	  units = units || Infinity;
	  var codePoint;
	  var length = string.length;
	  var leadSurrogate = null;
	  var bytes = [];
	
	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i);
	
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      if (!leadSurrogate) {
	        if (codePoint > 0xDBFF) {
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue;
	        } else if (i + 1 === length) {
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue;
	        }
	
	        leadSurrogate = codePoint;
	
	        continue;
	      }
	
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	        leadSurrogate = codePoint;
	        continue;
	      }
	
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
	    } else if (leadSurrogate) {
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	    }
	
	    leadSurrogate = null;
	
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break;
	      bytes.push(codePoint);
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break;
	      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break;
	      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break;
	      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
	    } else {
	      throw new Error('Invalid code point');
	    }
	  }
	
	  return bytes;
	}
	
	function asciiToBytes(str) {
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    byteArray.push(str.charCodeAt(i) & 0xFF);
	  }
	  return byteArray;
	}
	
	function utf16leToBytes(str, units) {
	  var c, hi, lo;
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break;
	
	    c = str.charCodeAt(i);
	    hi = c >> 8;
	    lo = c % 256;
	    byteArray.push(lo);
	    byteArray.push(hi);
	  }
	
	  return byteArray;
	}
	
	function base64ToBytes(str) {
	  return base64.toByteArray(base64clean(str));
	}
	
	function blitBuffer(src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if (i + offset >= dst.length || i >= src.length) break;
	    dst[i + offset] = src[i];
	  }
	  return i;
	}
	
	function isnan(val) {
	  return val !== val;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.byteLength = byteLength;
	exports.toByteArray = toByteArray;
	exports.fromByteArray = fromByteArray;
	
	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
	
	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i];
	  revLookup[code.charCodeAt(i)] = i;
	}
	
	revLookup['-'.charCodeAt(0)] = 62;
	revLookup['_'.charCodeAt(0)] = 63;
	
	function placeHoldersCount(b64) {
	  var len = b64.length;
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4');
	  }
	
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
	}
	
	function byteLength(b64) {
	  return b64.length * 3 / 4 - placeHoldersCount(b64);
	}
	
	function toByteArray(b64) {
	  var i, j, l, tmp, placeHolders, arr;
	  var len = b64.length;
	  placeHolders = placeHoldersCount(b64);
	
	  arr = new Arr(len * 3 / 4 - placeHolders);
	
	  l = placeHolders > 0 ? len - 4 : len;
	
	  var L = 0;
	
	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
	    arr[L++] = tmp >> 16 & 0xFF;
	    arr[L++] = tmp >> 8 & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }
	
	  if (placeHolders === 2) {
	    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
	    arr[L++] = tmp & 0xFF;
	  } else if (placeHolders === 1) {
	    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
	    arr[L++] = tmp >> 8 & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }
	
	  return arr;
	}
	
	function tripletToBase64(num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
	}
	
	function encodeChunk(uint8, start, end) {
	  var tmp;
	  var output = [];
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
	    output.push(tripletToBase64(tmp));
	  }
	  return output.join('');
	}
	
	function fromByteArray(uint8) {
	  var tmp;
	  var len = uint8.length;
	  var extraBytes = len % 3;
	  var output = '';
	  var parts = [];
	  var maxChunkLength = 16383;
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
	  }
	
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1];
	    output += lookup[tmp >> 2];
	    output += lookup[tmp << 4 & 0x3F];
	    output += '==';
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
	    output += lookup[tmp >> 10];
	    output += lookup[tmp >> 4 & 0x3F];
	    output += lookup[tmp << 2 & 0x3F];
	    output += '=';
	  }
	
	  parts.push(output);
	
	  return parts.join('');
	}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = -7;
	  var i = isLE ? nBytes - 1 : 0;
	  var d = isLE ? -1 : 1;
	  var s = buffer[offset + i];
	
	  i += d;
	
	  e = s & (1 << -nBits) - 1;
	  s >>= -nBits;
	  nBits += eLen;
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : (s ? -1 : 1) * Infinity;
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
	};
	
	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
	  var i = isLE ? 0 : nBytes - 1;
	  var d = isLE ? 1 : -1;
	  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
	
	  value = Math.abs(value);
	
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }
	
	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }
	
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	
	  e = e << mLen | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	
	  buffer[offset + i - d] |= s * 128;
	};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';
	
	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			// Test for IE <= 9 as proposed by Browserhacks
			// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
			// Tests for existence of standard globals is to allow style-loader 
			// to operate correctly into non-standard environments
			// @see https://github.com/webpack-contrib/style-loader/issues/177
			return window && document && document.all && !window.atob;
		}),
		getElement = (function(fn) {
			var memo = {};
			return function(selector) {
				if (typeof memo[selector] === "undefined") {
					memo[selector] = fn.call(this, selector);
				}
				return memo[selector]
			};
		})(function (styleTarget) {
			return document.querySelector(styleTarget)
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [],
		fixUrls = __webpack_require__(9);
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		options.attrs = typeof options.attrs === "object" ? options.attrs : {};
	
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the <head> element
		if (typeof options.insertInto === "undefined") options.insertInto = "head";
	
		// By default, add <style> tags to the bottom of the target
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	};
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var styleTarget = getElement(options.insertInto)
		if (!styleTarget) {
			throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
		}
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				styleTarget.insertBefore(styleElement, styleTarget.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				styleTarget.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			styleTarget.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		options.attrs.type = "text/css";
	
		attachTagAttrs(styleElement, options.attrs);
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		options.attrs.type = "text/css";
		options.attrs.rel = "stylesheet";
	
		attachTagAttrs(linkElement, options.attrs);
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function attachTagAttrs(element, attrs) {
		Object.keys(attrs).forEach(function (key) {
			element.setAttribute(key, attrs[key]);
		});
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement, options);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, options, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
		*/
		var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;
	
		if (options.convertToAbsoluteUrls || autoFixUrls){
			css = fixUrls(css);
		}
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (css) {
		var location = typeof window !== "undefined" && window.location;
	
		if (!location) {
			throw new Error("fixUrls requires window.location");
		}
	
		if (!css || typeof css !== "string") {
			return css;
		}
	
		var baseUrl = location.protocol + "//" + location.host;
		var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");
	
		var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
			var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
				return $1;
			}).replace(/^'(.*)'$/, function (o, $1) {
				return $1;
			});
	
			if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
				return fullMatch;
			}
	
			var newUrl;
	
			if (unquotedOrigUrl.indexOf("//") === 0) {
				newUrl = unquotedOrigUrl;
			} else if (unquotedOrigUrl.indexOf("/") === 0) {
				newUrl = baseUrl + unquotedOrigUrl;
			} else {
				newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, "");
			}
	
			return "url(" + JSON.stringify(newUrl) + ")";
		});
	
		return fixedCss;
	};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _template = __webpack_require__(11);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _jquery = __webpack_require__(12);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Main() {
	  var html = _template2.default;
	  var $node = (0, _jquery2.default)(html);
	
	  (0, _jquery2.default)('body').append($node);
	
	  var $main = $node.find('.main');
	  $node.on('click', '.co-menu', function () {
	    $node.find(".co-menu").removeClass('focus');
	    var $this = (0, _jquery2.default)(this);
	    $this.addClass('focus');
	    $main.find('.pane').hide();
	    if ($this.hasClass('console')) {
	      $main.find('.console-pane').show();
	    } else if ($this.hasClass('network')) {
	      $main.find('.network-pane').show();
	    } else if ($this.hasClass('element')) {
	      $main.find('.element-pane').show();
	    }
	  });
	
	  return $node;
	}
	
	exports.default = Main;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"fast-console\" id=\"fast-console\">\r\n  <div class=\"co-header\">\r\n    <div class=\"co-menu console focus\">Console</div>\r\n    <div class=\"co-menu network\">Network</div>\r\n    <div class=\"co-menu element\">Element</div>\r\n  </div>\r\n  <div class=\"main\">\r\n    <div class=\"console-pane pane\">\r\n    </div>\r\n    <div class=\"network-pane pane\">\r\n      <div class=\"resource\">\r\n        <div class=\"r-header\">Resource Timing</div>\r\n        <div class=\"r-content\">\r\n          <div class=\"r-item\">\r\n            <div class=\"name\">style.css</div>\r\n            <div class=\"time\">200ms</div>\r\n            <div class=\"fullname\">http://cdn.cloud.com/style.css</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"xhr\">\r\n        <div class=\"x-header\">XMLHttpRequest</div>\r\n        <div class=\"x-content\">\r\n          <div class=\"x-item\">\r\n            <div class=\"name\">style.css</div>\r\n            <div class=\"status\">200</div>\r\n            <div class=\"method\">POST</div>\r\n            <div class=\"time\">200ms</div>\r\n            <div class=\"fullname\">http://cdn.cloud.com/style.css</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"element-pane pane\">element</div>\r\n  </div>\r\n</div>\r\n";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function (global, factory) {
	
		if (( false ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
			module.exports = global.document ? factory(global, true) : function (w) {
				if (!w.document) {
					throw new Error("jQuery requires a window with a document");
				}
				return factory(w);
			};
		} else {
			factory(global);
		}
	})(typeof window !== "undefined" ? window : undefined, function (window, noGlobal) {
	
		var deletedIds = [];
	
		var _slice = deletedIds.slice;
	
		var concat = deletedIds.concat;
	
		var push = deletedIds.push;
	
		var indexOf = deletedIds.indexOf;
	
		var class2type = {};
	
		var toString = class2type.toString;
	
		var hasOwn = class2type.hasOwnProperty;
	
		var support = {};
	
		var version = "1.11.1",
		    jQuery = function jQuery(selector, context) {
			return new jQuery.fn.init(selector, context);
		},
		    rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		    rmsPrefix = /^-ms-/,
		    rdashAlpha = /-([\da-z])/gi,
		    fcamelCase = function fcamelCase(all, letter) {
			return letter.toUpperCase();
		};
	
		jQuery.fn = jQuery.prototype = {
			jquery: version,
	
			constructor: jQuery,
	
			selector: "",
	
			length: 0,
	
			toArray: function toArray() {
				return _slice.call(this);
			},
	
			get: function get(num) {
				return num != null ? num < 0 ? this[num + this.length] : this[num] : _slice.call(this);
			},
	
			pushStack: function pushStack(elems) {
				var ret = jQuery.merge(this.constructor(), elems);
	
				ret.prevObject = this;
				ret.context = this.context;
	
				return ret;
			},
	
			each: function each(callback, args) {
				return jQuery.each(this, callback, args);
			},
	
			map: function map(callback) {
				return this.pushStack(jQuery.map(this, function (elem, i) {
					return callback.call(elem, i, elem);
				}));
			},
	
			slice: function slice() {
				return this.pushStack(_slice.apply(this, arguments));
			},
	
			first: function first() {
				return this.eq(0);
			},
	
			last: function last() {
				return this.eq(-1);
			},
	
			eq: function eq(i) {
				var len = this.length,
				    j = +i + (i < 0 ? len : 0);
				return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
			},
	
			end: function end() {
				return this.prevObject || this.constructor(null);
			},
	
			push: push,
			sort: deletedIds.sort,
			splice: deletedIds.splice
		};
	
		jQuery.extend = jQuery.fn.extend = function () {
			var src,
			    copyIsArray,
			    copy,
			    name,
			    options,
			    clone,
			    target = arguments[0] || {},
			    i = 1,
			    length = arguments.length,
			    deep = false;
	
			if (typeof target === "boolean") {
				deep = target;
	
				target = arguments[i] || {};
				i++;
			}
	
			if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !jQuery.isFunction(target)) {
				target = {};
			}
	
			if (i === length) {
				target = this;
				i--;
			}
	
			for (; i < length; i++) {
				if ((options = arguments[i]) != null) {
					for (name in options) {
						src = target[name];
						copy = options[name];
	
						if (target === copy) {
							continue;
						}
	
						if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && jQuery.isArray(src) ? src : [];
							} else {
								clone = src && jQuery.isPlainObject(src) ? src : {};
							}
	
							target[name] = jQuery.extend(deep, clone, copy);
						} else if (copy !== undefined) {
							target[name] = copy;
						}
					}
				}
			}
	
			return target;
		};
	
		jQuery.extend({
			expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
	
			isReady: true,
	
			error: function error(msg) {
				throw new Error(msg);
			},
	
			noop: function noop() {},
	
			isFunction: function isFunction(obj) {
				return jQuery.type(obj) === "function";
			},
	
			isArray: Array.isArray || function (obj) {
				return jQuery.type(obj) === "array";
			},
	
			isWindow: function isWindow(obj) {
				return obj != null && obj == obj.window;
			},
	
			isNumeric: function isNumeric(obj) {
				return !jQuery.isArray(obj) && obj - parseFloat(obj) >= 0;
			},
	
			isEmptyObject: function isEmptyObject(obj) {
				var name;
				for (name in obj) {
					return false;
				}
				return true;
			},
	
			isPlainObject: function isPlainObject(obj) {
				var key;
	
				if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
					return false;
				}
	
				try {
					if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
						return false;
					}
				} catch (e) {
					return false;
				}
	
				if (support.ownLast) {
					for (key in obj) {
						return hasOwn.call(obj, key);
					}
				}
	
				for (key in obj) {}
	
				return key === undefined || hasOwn.call(obj, key);
			},
	
			type: function type(obj) {
				if (obj == null) {
					return obj + "";
				}
				return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
			},
	
			globalEval: function globalEval(data) {
				if (data && jQuery.trim(data)) {
					(window.execScript || function (data) {
						window["eval"].call(window, data);
					})(data);
				}
			},
	
			camelCase: function camelCase(string) {
				return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
			},
	
			nodeName: function nodeName(elem, name) {
				return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
			},
	
			each: function each(obj, callback, args) {
				var value,
				    i = 0,
				    length = obj.length,
				    isArray = isArraylike(obj);
	
				if (args) {
					if (isArray) {
						for (; i < length; i++) {
							value = callback.apply(obj[i], args);
	
							if (value === false) {
								break;
							}
						}
					} else {
						for (i in obj) {
							value = callback.apply(obj[i], args);
	
							if (value === false) {
								break;
							}
						}
					}
				} else {
					if (isArray) {
						for (; i < length; i++) {
							value = callback.call(obj[i], i, obj[i]);
	
							if (value === false) {
								break;
							}
						}
					} else {
						for (i in obj) {
							value = callback.call(obj[i], i, obj[i]);
	
							if (value === false) {
								break;
							}
						}
					}
				}
	
				return obj;
			},
	
			trim: function trim(text) {
				return text == null ? "" : (text + "").replace(rtrim, "");
			},
	
			makeArray: function makeArray(arr, results) {
				var ret = results || [];
	
				if (arr != null) {
					if (isArraylike(Object(arr))) {
						jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
					} else {
						push.call(ret, arr);
					}
				}
	
				return ret;
			},
	
			inArray: function inArray(elem, arr, i) {
				var len;
	
				if (arr) {
					if (indexOf) {
						return indexOf.call(arr, elem, i);
					}
	
					len = arr.length;
					i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
	
					for (; i < len; i++) {
						if (i in arr && arr[i] === elem) {
							return i;
						}
					}
				}
	
				return -1;
			},
	
			merge: function merge(first, second) {
				var len = +second.length,
				    j = 0,
				    i = first.length;
	
				while (j < len) {
					first[i++] = second[j++];
				}
	
				if (len !== len) {
					while (second[j] !== undefined) {
						first[i++] = second[j++];
					}
				}
	
				first.length = i;
	
				return first;
			},
	
			grep: function grep(elems, callback, invert) {
				var callbackInverse,
				    matches = [],
				    i = 0,
				    length = elems.length,
				    callbackExpect = !invert;
	
				for (; i < length; i++) {
					callbackInverse = !callback(elems[i], i);
					if (callbackInverse !== callbackExpect) {
						matches.push(elems[i]);
					}
				}
	
				return matches;
			},
	
			map: function map(elems, callback, arg) {
				var value,
				    i = 0,
				    length = elems.length,
				    isArray = isArraylike(elems),
				    ret = [];
	
				if (isArray) {
					for (; i < length; i++) {
						value = callback(elems[i], i, arg);
	
						if (value != null) {
							ret.push(value);
						}
					}
				} else {
					for (i in elems) {
						value = callback(elems[i], i, arg);
	
						if (value != null) {
							ret.push(value);
						}
					}
				}
	
				return concat.apply([], ret);
			},
	
			guid: 1,
	
			proxy: function proxy(fn, context) {
				var args, proxy, tmp;
	
				if (typeof context === "string") {
					tmp = fn[context];
					context = fn;
					fn = tmp;
				}
	
				if (!jQuery.isFunction(fn)) {
					return undefined;
				}
	
				args = _slice.call(arguments, 2);
				proxy = function proxy() {
					return fn.apply(context || this, args.concat(_slice.call(arguments)));
				};
	
				proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
				return proxy;
			},
	
			now: function now() {
				return +new Date();
			},
	
			support: support
		});
	
		jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
			class2type["[object " + name + "]"] = name.toLowerCase();
		});
	
		function isArraylike(obj) {
			var length = obj.length,
			    type = jQuery.type(obj);
	
			if (type === "function" || jQuery.isWindow(obj)) {
				return false;
			}
	
			if (obj.nodeType === 1 && length) {
				return true;
			}
	
			return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
		}
		var Sizzle = function (window) {
	
			var i,
			    support,
			    Expr,
			    getText,
			    isXML,
			    tokenize,
			    compile,
			    select,
			    outermostContext,
			    sortInput,
			    hasDuplicate,
			    setDocument,
			    document,
			    docElem,
			    documentIsHTML,
			    rbuggyQSA,
			    rbuggyMatches,
			    matches,
			    contains,
			    expando = "sizzle" + -new Date(),
			    preferredDoc = window.document,
			    dirruns = 0,
			    done = 0,
			    classCache = createCache(),
			    tokenCache = createCache(),
			    compilerCache = createCache(),
			    sortOrder = function sortOrder(a, b) {
				if (a === b) {
					hasDuplicate = true;
				}
				return 0;
			},
			    strundefined =  true ? "undefined" : _typeof(undefined),
			    MAX_NEGATIVE = 1 << 31,
			    hasOwn = {}.hasOwnProperty,
			    arr = [],
			    pop = arr.pop,
			    push_native = arr.push,
			    push = arr.push,
			    slice = arr.slice,
			    indexOf = arr.indexOf || function (elem) {
				var i = 0,
				    len = this.length;
				for (; i < len; i++) {
					if (this[i] === elem) {
						return i;
					}
				}
				return -1;
			},
			    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			    whitespace = "[\\x20\\t\\r\\n\\f]",
			    characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			    identifier = characterEncoding.replace("w", "w#"),
			    attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
			    pseudos = ":(" + characterEncoding + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)",
			    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
			    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
			    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
			    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
			    rpseudo = new RegExp(pseudos),
			    ridentifier = new RegExp("^" + identifier + "$"),
			    matchExpr = {
				"ID": new RegExp("^#(" + characterEncoding + ")"),
				"CLASS": new RegExp("^\\.(" + characterEncoding + ")"),
				"TAG": new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
				"ATTR": new RegExp("^" + attributes),
				"PSEUDO": new RegExp("^" + pseudos),
				"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
				"bool": new RegExp("^(?:" + booleans + ")$", "i"),
	
				"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
			},
			    rinputs = /^(?:input|select|textarea|button)$/i,
			    rheader = /^h\d$/i,
			    rnative = /^[^{]+\{\s*\[native \w/,
			    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			    rsibling = /[+~]/,
			    rescape = /'|\\/g,
			    runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
			    funescape = function funescape(_, escaped, escapedWhitespace) {
				var high = "0x" + escaped - 0x10000;
	
				return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
			};
	
			try {
				push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
	
				arr[preferredDoc.childNodes.length].nodeType;
			} catch (e) {
				push = { apply: arr.length ? function (target, els) {
						push_native.apply(target, slice.call(els));
					} : function (target, els) {
						var j = target.length,
						    i = 0;
	
						while (target[j++] = els[i++]) {}
						target.length = j - 1;
					}
				};
			}
	
			function Sizzle(selector, context, results, seed) {
				var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;
	
				if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
					setDocument(context);
				}
	
				context = context || document;
				results = results || [];
	
				if (!selector || typeof selector !== "string") {
					return results;
				}
	
				if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) {
					return [];
				}
	
				if (documentIsHTML && !seed) {
					if (match = rquickExpr.exec(selector)) {
						if (m = match[1]) {
							if (nodeType === 9) {
								elem = context.getElementById(m);
	
								if (elem && elem.parentNode) {
									if (elem.id === m) {
										results.push(elem);
										return results;
									}
								} else {
									return results;
								}
							} else {
								if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
									results.push(elem);
									return results;
								}
							}
						} else if (match[2]) {
							push.apply(results, context.getElementsByTagName(selector));
							return results;
						} else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
							push.apply(results, context.getElementsByClassName(m));
							return results;
						}
					}
	
					if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
						nid = old = expando;
						newContext = context;
						newSelector = nodeType === 9 && selector;
	
						if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
							groups = tokenize(selector);
	
							if (old = context.getAttribute("id")) {
								nid = old.replace(rescape, "\\$&");
							} else {
								context.setAttribute("id", nid);
							}
							nid = "[id='" + nid + "'] ";
	
							i = groups.length;
							while (i--) {
								groups[i] = nid + toSelector(groups[i]);
							}
							newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
							newSelector = groups.join(",");
						}
	
						if (newSelector) {
							try {
								push.apply(results, newContext.querySelectorAll(newSelector));
								return results;
							} catch (qsaError) {} finally {
								if (!old) {
									context.removeAttribute("id");
								}
							}
						}
					}
				}
	
				return select(selector.replace(rtrim, "$1"), context, results, seed);
			}
	
			function createCache() {
				var keys = [];
	
				function cache(key, value) {
					if (keys.push(key + " ") > Expr.cacheLength) {
						delete cache[keys.shift()];
					}
					return cache[key + " "] = value;
				}
				return cache;
			}
	
			function markFunction(fn) {
				fn[expando] = true;
				return fn;
			}
	
			function assert(fn) {
				var div = document.createElement("div");
	
				try {
					return !!fn(div);
				} catch (e) {
					return false;
				} finally {
					if (div.parentNode) {
						div.parentNode.removeChild(div);
					}
	
					div = null;
				}
			}
	
			function addHandle(attrs, handler) {
				var arr = attrs.split("|"),
				    i = attrs.length;
	
				while (i--) {
					Expr.attrHandle[arr[i]] = handler;
				}
			}
	
			function siblingCheck(a, b) {
				var cur = b && a,
				    diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
	
				if (diff) {
					return diff;
				}
	
				if (cur) {
					while (cur = cur.nextSibling) {
						if (cur === b) {
							return -1;
						}
					}
				}
	
				return a ? 1 : -1;
			}
	
			function createInputPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === type;
				};
			}
	
			function createButtonPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return (name === "input" || name === "button") && elem.type === type;
				};
			}
	
			function createPositionalPseudo(fn) {
				return markFunction(function (argument) {
					argument = +argument;
					return markFunction(function (seed, matches) {
						var j,
						    matchIndexes = fn([], seed.length, argument),
						    i = matchIndexes.length;
	
						while (i--) {
							if (seed[j = matchIndexes[i]]) {
								seed[j] = !(matches[j] = seed[j]);
							}
						}
					});
				});
			}
	
			function testContext(context) {
				return context && _typeof(context.getElementsByTagName) !== strundefined && context;
			}
	
			support = Sizzle.support = {};
	
			isXML = Sizzle.isXML = function (elem) {
				var documentElement = elem && (elem.ownerDocument || elem).documentElement;
				return documentElement ? documentElement.nodeName !== "HTML" : false;
			};
	
			setDocument = Sizzle.setDocument = function (node) {
				var hasCompare,
				    doc = node ? node.ownerDocument || node : preferredDoc,
				    parent = doc.defaultView;
	
				if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
					return document;
				}
	
				document = doc;
				docElem = doc.documentElement;
	
				documentIsHTML = !isXML(doc);
	
				if (parent && parent !== parent.top) {
					if (parent.addEventListener) {
						parent.addEventListener("unload", function () {
							setDocument();
						}, false);
					} else if (parent.attachEvent) {
						parent.attachEvent("onunload", function () {
							setDocument();
						});
					}
				}
	
				support.attributes = assert(function (div) {
					div.className = "i";
					return !div.getAttribute("className");
				});
	
				support.getElementsByTagName = assert(function (div) {
					div.appendChild(doc.createComment(""));
					return !div.getElementsByTagName("*").length;
				});
	
				support.getElementsByClassName = rnative.test(doc.getElementsByClassName) && assert(function (div) {
					div.innerHTML = "<div class='a'></div><div class='a i'></div>";
	
					div.firstChild.className = "i";
	
					return div.getElementsByClassName("i").length === 2;
				});
	
				support.getById = assert(function (div) {
					docElem.appendChild(div).id = expando;
					return !doc.getElementsByName || !doc.getElementsByName(expando).length;
				});
	
				if (support.getById) {
					Expr.find["ID"] = function (id, context) {
						if (_typeof(context.getElementById) !== strundefined && documentIsHTML) {
							var m = context.getElementById(id);
	
							return m && m.parentNode ? [m] : [];
						}
					};
					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							return elem.getAttribute("id") === attrId;
						};
					};
				} else {
					delete Expr.find["ID"];
	
					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							var node = _typeof(elem.getAttributeNode) !== strundefined && elem.getAttributeNode("id");
							return node && node.value === attrId;
						};
					};
				}
	
				Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
					if (_typeof(context.getElementsByTagName) !== strundefined) {
						return context.getElementsByTagName(tag);
					}
				} : function (tag, context) {
					var elem,
					    tmp = [],
					    i = 0,
					    results = context.getElementsByTagName(tag);
	
					if (tag === "*") {
						while (elem = results[i++]) {
							if (elem.nodeType === 1) {
								tmp.push(elem);
							}
						}
	
						return tmp;
					}
					return results;
				};
	
				Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
					if (_typeof(context.getElementsByClassName) !== strundefined && documentIsHTML) {
						return context.getElementsByClassName(className);
					}
				};
	
				rbuggyMatches = [];
	
				rbuggyQSA = [];
	
				if (support.qsa = rnative.test(doc.querySelectorAll)) {
					assert(function (div) {
						div.innerHTML = "<select msallowclip=''><option selected=''></option></select>";
	
						if (div.querySelectorAll("[msallowclip^='']").length) {
							rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
						}
	
						if (!div.querySelectorAll("[selected]").length) {
							rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
						}
	
						if (!div.querySelectorAll(":checked").length) {
							rbuggyQSA.push(":checked");
						}
					});
	
					assert(function (div) {
						var input = doc.createElement("input");
						input.setAttribute("type", "hidden");
						div.appendChild(input).setAttribute("name", "D");
	
						if (div.querySelectorAll("[name=d]").length) {
							rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
						}
	
						if (!div.querySelectorAll(":enabled").length) {
							rbuggyQSA.push(":enabled", ":disabled");
						}
	
						div.querySelectorAll("*,:x");
						rbuggyQSA.push(",.*:");
					});
				}
	
				if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
	
					assert(function (div) {
						support.disconnectedMatch = matches.call(div, "div");
	
						matches.call(div, "[s!='']:x");
						rbuggyMatches.push("!=", pseudos);
					});
				}
	
				rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
				rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
	
				hasCompare = rnative.test(docElem.compareDocumentPosition);
	
				contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
					var adown = a.nodeType === 9 ? a.documentElement : a,
					    bup = b && b.parentNode;
					return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
				} : function (a, b) {
					if (b) {
						while (b = b.parentNode) {
							if (b === a) {
								return true;
							}
						}
					}
					return false;
				};
	
				sortOrder = hasCompare ? function (a, b) {
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}
	
					var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
					if (compare) {
						return compare;
					}
	
					compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
	
					if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
						if (a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
							return -1;
						}
						if (b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
							return 1;
						}
	
						return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
					}
	
					return compare & 4 ? -1 : 1;
				} : function (a, b) {
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}
	
					var cur,
					    i = 0,
					    aup = a.parentNode,
					    bup = b.parentNode,
					    ap = [a],
					    bp = [b];
	
					if (!aup || !bup) {
						return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
					} else if (aup === bup) {
						return siblingCheck(a, b);
					}
	
					cur = a;
					while (cur = cur.parentNode) {
						ap.unshift(cur);
					}
					cur = b;
					while (cur = cur.parentNode) {
						bp.unshift(cur);
					}
	
					while (ap[i] === bp[i]) {
						i++;
					}
	
					return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
				};
	
				return doc;
			};
	
			Sizzle.matches = function (expr, elements) {
				return Sizzle(expr, null, null, elements);
			};
	
			Sizzle.matchesSelector = function (elem, expr) {
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}
	
				expr = expr.replace(rattributeQuotes, "='$1']");
	
				if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
	
					try {
						var ret = matches.call(elem, expr);
	
						if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
							return ret;
						}
					} catch (e) {}
				}
	
				return Sizzle(expr, document, null, [elem]).length > 0;
			};
	
			Sizzle.contains = function (context, elem) {
				if ((context.ownerDocument || context) !== document) {
					setDocument(context);
				}
				return contains(context, elem);
			};
	
			Sizzle.attr = function (elem, name) {
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}
	
				var fn = Expr.attrHandle[name.toLowerCase()],
				    val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
	
				return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
			};
	
			Sizzle.error = function (msg) {
				throw new Error("Syntax error, unrecognized expression: " + msg);
			};
	
			Sizzle.uniqueSort = function (results) {
				var elem,
				    duplicates = [],
				    j = 0,
				    i = 0;
	
				hasDuplicate = !support.detectDuplicates;
				sortInput = !support.sortStable && results.slice(0);
				results.sort(sortOrder);
	
				if (hasDuplicate) {
					while (elem = results[i++]) {
						if (elem === results[i]) {
							j = duplicates.push(i);
						}
					}
					while (j--) {
						results.splice(duplicates[j], 1);
					}
				}
	
				sortInput = null;
	
				return results;
			};
	
			getText = Sizzle.getText = function (elem) {
				var node,
				    ret = "",
				    i = 0,
				    nodeType = elem.nodeType;
	
				if (!nodeType) {
					while (node = elem[i++]) {
						ret += getText(node);
					}
				} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
					if (typeof elem.textContent === "string") {
						return elem.textContent;
					} else {
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							ret += getText(elem);
						}
					}
				} else if (nodeType === 3 || nodeType === 4) {
					return elem.nodeValue;
				}
	
	
				return ret;
			};
	
			Expr = Sizzle.selectors = {
				cacheLength: 50,
	
				createPseudo: markFunction,
	
				match: matchExpr,
	
				attrHandle: {},
	
				find: {},
	
				relative: {
					">": { dir: "parentNode", first: true },
					" ": { dir: "parentNode" },
					"+": { dir: "previousSibling", first: true },
					"~": { dir: "previousSibling" }
				},
	
				preFilter: {
					"ATTR": function ATTR(match) {
						match[1] = match[1].replace(runescape, funescape);
	
						match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
	
						if (match[2] === "~=") {
							match[3] = " " + match[3] + " ";
						}
	
						return match.slice(0, 4);
					},
	
					"CHILD": function CHILD(match) {
						match[1] = match[1].toLowerCase();
	
						if (match[1].slice(0, 3) === "nth") {
							if (!match[3]) {
								Sizzle.error(match[0]);
							}
	
							match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
							match[5] = +(match[7] + match[8] || match[3] === "odd");
						} else if (match[3]) {
							Sizzle.error(match[0]);
						}
	
						return match;
					},
	
					"PSEUDO": function PSEUDO(match) {
						var excess,
						    unquoted = !match[6] && match[2];
	
						if (matchExpr["CHILD"].test(match[0])) {
							return null;
						}
	
						if (match[3]) {
							match[2] = match[4] || match[5] || "";
						} else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
							match[0] = match[0].slice(0, excess);
							match[2] = unquoted.slice(0, excess);
						}
	
						return match.slice(0, 3);
					}
				},
	
				filter: {
	
					"TAG": function TAG(nodeNameSelector) {
						var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
						return nodeNameSelector === "*" ? function () {
							return true;
						} : function (elem) {
							return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
						};
					},
	
					"CLASS": function CLASS(className) {
						var pattern = classCache[className + " "];
	
						return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
							return pattern.test(typeof elem.className === "string" && elem.className || _typeof(elem.getAttribute) !== strundefined && elem.getAttribute("class") || "");
						});
					},
	
					"ATTR": function ATTR(name, operator, check) {
						return function (elem) {
							var result = Sizzle.attr(elem, name);
	
							if (result == null) {
								return operator === "!=";
							}
							if (!operator) {
								return true;
							}
	
							result += "";
	
							return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
						};
					},
	
					"CHILD": function CHILD(type, what, argument, first, last) {
						var simple = type.slice(0, 3) !== "nth",
						    forward = type.slice(-4) !== "last",
						    ofType = what === "of-type";
	
						return first === 1 && last === 0 ? function (elem) {
							return !!elem.parentNode;
						} : function (elem, context, xml) {
							var cache,
							    outerCache,
							    node,
							    diff,
							    nodeIndex,
							    start,
							    dir = simple !== forward ? "nextSibling" : "previousSibling",
							    parent = elem.parentNode,
							    name = ofType && elem.nodeName.toLowerCase(),
							    useCache = !xml && !ofType;
	
							if (parent) {
								if (simple) {
									while (dir) {
										node = elem;
										while (node = node[dir]) {
											if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
												return false;
											}
										}
	
										start = dir = type === "only" && !start && "nextSibling";
									}
									return true;
								}
	
								start = [forward ? parent.firstChild : parent.lastChild];
	
								if (forward && useCache) {
									outerCache = parent[expando] || (parent[expando] = {});
									cache = outerCache[type] || [];
									nodeIndex = cache[0] === dirruns && cache[1];
									diff = cache[0] === dirruns && cache[2];
									node = nodeIndex && parent.childNodes[nodeIndex];
	
									while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
										if (node.nodeType === 1 && ++diff && node === elem) {
											outerCache[type] = [dirruns, nodeIndex, diff];
											break;
										}
									}
								} else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
									diff = cache[1];
								} else {
									while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
	
										if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
											if (useCache) {
												(node[expando] || (node[expando] = {}))[type] = [dirruns, diff];
											}
	
											if (node === elem) {
												break;
											}
										}
									}
								}
	
								diff -= last;
								return diff === first || diff % first === 0 && diff / first >= 0;
							}
						};
					},
	
					"PSEUDO": function PSEUDO(pseudo, argument) {
						var args,
						    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
	
						if (fn[expando]) {
							return fn(argument);
						}
	
						if (fn.length > 1) {
							args = [pseudo, pseudo, "", argument];
							return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
								var idx,
								    matched = fn(seed, argument),
								    i = matched.length;
								while (i--) {
									idx = indexOf.call(seed, matched[i]);
									seed[idx] = !(matches[idx] = matched[i]);
								}
							}) : function (elem) {
								return fn(elem, 0, args);
							};
						}
	
						return fn;
					}
				},
	
				pseudos: {
					"not": markFunction(function (selector) {
						var input = [],
						    results = [],
						    matcher = compile(selector.replace(rtrim, "$1"));
	
						return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
							var elem,
							    unmatched = matcher(seed, null, xml, []),
							    i = seed.length;
	
							while (i--) {
								if (elem = unmatched[i]) {
									seed[i] = !(matches[i] = elem);
								}
							}
						}) : function (elem, context, xml) {
							input[0] = elem;
							matcher(input, null, xml, results);
							return !results.pop();
						};
					}),
	
					"has": markFunction(function (selector) {
						return function (elem) {
							return Sizzle(selector, elem).length > 0;
						};
					}),
	
					"contains": markFunction(function (text) {
						return function (elem) {
							return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
						};
					}),
	
					"lang": markFunction(function (lang) {
						if (!ridentifier.test(lang || "")) {
							Sizzle.error("unsupported lang: " + lang);
						}
						lang = lang.replace(runescape, funescape).toLowerCase();
						return function (elem) {
							var elemLang;
							do {
								if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
	
									elemLang = elemLang.toLowerCase();
									return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
								}
							} while ((elem = elem.parentNode) && elem.nodeType === 1);
							return false;
						};
					}),
	
					"target": function target(elem) {
						var hash = window.location && window.location.hash;
						return hash && hash.slice(1) === elem.id;
					},
	
					"root": function root(elem) {
						return elem === docElem;
					},
	
					"focus": function focus(elem) {
						return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
					},
	
					"enabled": function enabled(elem) {
						return elem.disabled === false;
					},
	
					"disabled": function disabled(elem) {
						return elem.disabled === true;
					},
	
					"checked": function checked(elem) {
						var nodeName = elem.nodeName.toLowerCase();
						return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
					},
	
					"selected": function selected(elem) {
						if (elem.parentNode) {
							elem.parentNode.selectedIndex;
						}
	
						return elem.selected === true;
					},
	
					"empty": function empty(elem) {
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							if (elem.nodeType < 6) {
								return false;
							}
						}
						return true;
					},
	
					"parent": function parent(elem) {
						return !Expr.pseudos["empty"](elem);
					},
	
					"header": function header(elem) {
						return rheader.test(elem.nodeName);
					},
	
					"input": function input(elem) {
						return rinputs.test(elem.nodeName);
					},
	
					"button": function button(elem) {
						var name = elem.nodeName.toLowerCase();
						return name === "input" && elem.type === "button" || name === "button";
					},
	
					"text": function text(elem) {
						var attr;
						return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
					},
	
					"first": createPositionalPseudo(function () {
						return [0];
					}),
	
					"last": createPositionalPseudo(function (matchIndexes, length) {
						return [length - 1];
					}),
	
					"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
						return [argument < 0 ? argument + length : argument];
					}),
	
					"even": createPositionalPseudo(function (matchIndexes, length) {
						var i = 0;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),
	
					"odd": createPositionalPseudo(function (matchIndexes, length) {
						var i = 1;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),
	
					"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; --i >= 0;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),
	
					"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; ++i < length;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					})
				}
			};
	
			Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
			for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
				Expr.pseudos[i] = createInputPseudo(i);
			}
			for (i in { submit: true, reset: true }) {
				Expr.pseudos[i] = createButtonPseudo(i);
			}
	
			function setFilters() {}
			setFilters.prototype = Expr.filters = Expr.pseudos;
			Expr.setFilters = new setFilters();
	
			tokenize = Sizzle.tokenize = function (selector, parseOnly) {
				var matched,
				    match,
				    tokens,
				    type,
				    soFar,
				    groups,
				    preFilters,
				    cached = tokenCache[selector + " "];
	
				if (cached) {
					return parseOnly ? 0 : cached.slice(0);
				}
	
				soFar = selector;
				groups = [];
				preFilters = Expr.preFilter;
	
				while (soFar) {
					if (!matched || (match = rcomma.exec(soFar))) {
						if (match) {
							soFar = soFar.slice(match[0].length) || soFar;
						}
						groups.push(tokens = []);
					}
	
					matched = false;
	
					if (match = rcombinators.exec(soFar)) {
						matched = match.shift();
						tokens.push({
							value: matched,
	
							type: match[0].replace(rtrim, " ")
						});
						soFar = soFar.slice(matched.length);
					}
	
					for (type in Expr.filter) {
						if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
							matched = match.shift();
							tokens.push({
								value: matched,
								type: type,
								matches: match
							});
							soFar = soFar.slice(matched.length);
						}
					}
	
					if (!matched) {
						break;
					}
				}
	
				return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
			};
	
			function toSelector(tokens) {
				var i = 0,
				    len = tokens.length,
				    selector = "";
				for (; i < len; i++) {
					selector += tokens[i].value;
				}
				return selector;
			}
	
			function addCombinator(matcher, combinator, base) {
				var dir = combinator.dir,
				    checkNonElements = base && dir === "parentNode",
				    doneName = done++;
	
				return combinator.first ? function (elem, context, xml) {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							return matcher(elem, context, xml);
						}
					}
				} : function (elem, context, xml) {
					var oldCache,
					    outerCache,
					    newCache = [dirruns, doneName];
	
					if (xml) {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								if (matcher(elem, context, xml)) {
									return true;
								}
							}
						}
					} else {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								outerCache = elem[expando] || (elem[expando] = {});
								if ((oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
									return newCache[2] = oldCache[2];
								} else {
									outerCache[dir] = newCache;
	
									if (newCache[2] = matcher(elem, context, xml)) {
										return true;
									}
								}
							}
						}
					}
				};
			}
	
			function elementMatcher(matchers) {
				return matchers.length > 1 ? function (elem, context, xml) {
					var i = matchers.length;
					while (i--) {
						if (!matchers[i](elem, context, xml)) {
							return false;
						}
					}
					return true;
				} : matchers[0];
			}
	
			function multipleContexts(selector, contexts, results) {
				var i = 0,
				    len = contexts.length;
				for (; i < len; i++) {
					Sizzle(selector, contexts[i], results);
				}
				return results;
			}
	
			function condense(unmatched, map, filter, context, xml) {
				var elem,
				    newUnmatched = [],
				    i = 0,
				    len = unmatched.length,
				    mapped = map != null;
	
				for (; i < len; i++) {
					if (elem = unmatched[i]) {
						if (!filter || filter(elem, context, xml)) {
							newUnmatched.push(elem);
							if (mapped) {
								map.push(i);
							}
						}
					}
				}
	
				return newUnmatched;
			}
	
			function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
				if (postFilter && !postFilter[expando]) {
					postFilter = setMatcher(postFilter);
				}
				if (postFinder && !postFinder[expando]) {
					postFinder = setMatcher(postFinder, postSelector);
				}
				return markFunction(function (seed, results, context, xml) {
					var temp,
					    i,
					    elem,
					    preMap = [],
					    postMap = [],
					    preexisting = results.length,
					    elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
					    matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
					    matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
	
					if (matcher) {
						matcher(matcherIn, matcherOut, context, xml);
					}
	
					if (postFilter) {
						temp = condense(matcherOut, postMap);
						postFilter(temp, [], context, xml);
	
						i = temp.length;
						while (i--) {
							if (elem = temp[i]) {
								matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
							}
						}
					}
	
					if (seed) {
						if (postFinder || preFilter) {
							if (postFinder) {
								temp = [];
								i = matcherOut.length;
								while (i--) {
									if (elem = matcherOut[i]) {
										temp.push(matcherIn[i] = elem);
									}
								}
								postFinder(null, matcherOut = [], temp, xml);
							}
	
							i = matcherOut.length;
							while (i--) {
								if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {
	
									seed[temp] = !(results[temp] = elem);
								}
							}
						}
					} else {
						matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
						if (postFinder) {
							postFinder(null, results, matcherOut, xml);
						} else {
							push.apply(results, matcherOut);
						}
					}
				});
			}
	
			function matcherFromTokens(tokens) {
				var checkContext,
				    matcher,
				    j,
				    len = tokens.length,
				    leadingRelative = Expr.relative[tokens[0].type],
				    implicitRelative = leadingRelative || Expr.relative[" "],
				    i = leadingRelative ? 1 : 0,
				    matchContext = addCombinator(function (elem) {
					return elem === checkContext;
				}, implicitRelative, true),
				    matchAnyContext = addCombinator(function (elem) {
					return indexOf.call(checkContext, elem) > -1;
				}, implicitRelative, true),
				    matchers = [function (elem, context, xml) {
					return !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
				}];
	
				for (; i < len; i++) {
					if (matcher = Expr.relative[tokens[i].type]) {
						matchers = [addCombinator(elementMatcher(matchers), matcher)];
					} else {
						matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
	
						if (matcher[expando]) {
							j = ++i;
							for (; j < len; j++) {
								if (Expr.relative[tokens[j].type]) {
									break;
								}
							}
							return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
						}
						matchers.push(matcher);
					}
				}
	
				return elementMatcher(matchers);
			}
	
			function matcherFromGroupMatchers(elementMatchers, setMatchers) {
				var bySet = setMatchers.length > 0,
				    byElement = elementMatchers.length > 0,
				    superMatcher = function superMatcher(seed, context, xml, results, outermost) {
					var elem,
					    j,
					    matcher,
					    matchedCount = 0,
					    i = "0",
					    unmatched = seed && [],
					    setMatched = [],
					    contextBackup = outermostContext,
					    elems = seed || byElement && Expr.find["TAG"]("*", outermost),
					    dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
					    len = elems.length;
	
					if (outermost) {
						outermostContext = context !== document && context;
					}
	
					for (; i !== len && (elem = elems[i]) != null; i++) {
						if (byElement && elem) {
							j = 0;
							while (matcher = elementMatchers[j++]) {
								if (matcher(elem, context, xml)) {
									results.push(elem);
									break;
								}
							}
							if (outermost) {
								dirruns = dirrunsUnique;
							}
						}
	
						if (bySet) {
							if (elem = !matcher && elem) {
								matchedCount--;
							}
	
							if (seed) {
								unmatched.push(elem);
							}
						}
					}
	
					matchedCount += i;
					if (bySet && i !== matchedCount) {
						j = 0;
						while (matcher = setMatchers[j++]) {
							matcher(unmatched, setMatched, context, xml);
						}
	
						if (seed) {
							if (matchedCount > 0) {
								while (i--) {
									if (!(unmatched[i] || setMatched[i])) {
										setMatched[i] = pop.call(results);
									}
								}
							}
	
							setMatched = condense(setMatched);
						}
	
						push.apply(results, setMatched);
	
						if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
	
							Sizzle.uniqueSort(results);
						}
					}
	
					if (outermost) {
						dirruns = dirrunsUnique;
						outermostContext = contextBackup;
					}
	
					return unmatched;
				};
	
				return bySet ? markFunction(superMatcher) : superMatcher;
			}
	
			compile = Sizzle.compile = function (selector, match) {
				var i,
				    setMatchers = [],
				    elementMatchers = [],
				    cached = compilerCache[selector + " "];
	
				if (!cached) {
					if (!match) {
						match = tokenize(selector);
					}
					i = match.length;
					while (i--) {
						cached = matcherFromTokens(match[i]);
						if (cached[expando]) {
							setMatchers.push(cached);
						} else {
							elementMatchers.push(cached);
						}
					}
	
					cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
	
					cached.selector = selector;
				}
				return cached;
			};
	
			select = Sizzle.select = function (selector, context, results, seed) {
				var i,
				    tokens,
				    token,
				    type,
				    find,
				    compiled = typeof selector === "function" && selector,
				    match = !seed && tokenize(selector = compiled.selector || selector);
	
				results = results || [];
	
				if (match.length === 1) {
					tokens = match[0] = match[0].slice(0);
					if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
	
						context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
						if (!context) {
							return results;
						} else if (compiled) {
							context = context.parentNode;
						}
	
						selector = selector.slice(tokens.shift().value.length);
					}
	
					i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
					while (i--) {
						token = tokens[i];
	
						if (Expr.relative[type = token.type]) {
							break;
						}
						if (find = Expr.find[type]) {
							if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
								tokens.splice(i, 1);
								selector = seed.length && toSelector(tokens);
								if (!selector) {
									push.apply(results, seed);
									return results;
								}
	
								break;
							}
						}
					}
				}
	
				(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, rsibling.test(selector) && testContext(context.parentNode) || context);
				return results;
			};
	
			support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
	
			support.detectDuplicates = !!hasDuplicate;
	
			setDocument();
	
			support.sortDetached = assert(function (div1) {
				return div1.compareDocumentPosition(document.createElement("div")) & 1;
			});
	
			if (!assert(function (div) {
				div.innerHTML = "<a href='#'></a>";
				return div.firstChild.getAttribute("href") === "#";
			})) {
				addHandle("type|href|height|width", function (elem, name, isXML) {
					if (!isXML) {
						return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
					}
				});
			}
	
			if (!support.attributes || !assert(function (div) {
				div.innerHTML = "<input/>";
				div.firstChild.setAttribute("value", "");
				return div.firstChild.getAttribute("value") === "";
			})) {
				addHandle("value", function (elem, name, isXML) {
					if (!isXML && elem.nodeName.toLowerCase() === "input") {
						return elem.defaultValue;
					}
				});
			}
	
			if (!assert(function (div) {
				return div.getAttribute("disabled") == null;
			})) {
				addHandle(booleans, function (elem, name, isXML) {
					var val;
					if (!isXML) {
						return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
					}
				});
			}
	
			return Sizzle;
		}(window);
	
		jQuery.find = Sizzle;
		jQuery.expr = Sizzle.selectors;
		jQuery.expr[":"] = jQuery.expr.pseudos;
		jQuery.unique = Sizzle.uniqueSort;
		jQuery.text = Sizzle.getText;
		jQuery.isXMLDoc = Sizzle.isXML;
		jQuery.contains = Sizzle.contains;
	
		var rneedsContext = jQuery.expr.match.needsContext;
	
		var rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
	
		var risSimple = /^.[^:#\[\.,]*$/;
	
		function winnow(elements, qualifier, not) {
			if (jQuery.isFunction(qualifier)) {
				return jQuery.grep(elements, function (elem, i) {
					return !!qualifier.call(elem, i, elem) !== not;
				});
			}
	
			if (qualifier.nodeType) {
				return jQuery.grep(elements, function (elem) {
					return elem === qualifier !== not;
				});
			}
	
			if (typeof qualifier === "string") {
				if (risSimple.test(qualifier)) {
					return jQuery.filter(qualifier, elements, not);
				}
	
				qualifier = jQuery.filter(qualifier, elements);
			}
	
			return jQuery.grep(elements, function (elem) {
				return jQuery.inArray(elem, qualifier) >= 0 !== not;
			});
		}
	
		jQuery.filter = function (expr, elems, not) {
			var elem = elems[0];
	
			if (not) {
				expr = ":not(" + expr + ")";
			}
	
			return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
				return elem.nodeType === 1;
			}));
		};
	
		jQuery.fn.extend({
			find: function find(selector) {
				var i,
				    ret = [],
				    self = this,
				    len = self.length;
	
				if (typeof selector !== "string") {
					return this.pushStack(jQuery(selector).filter(function () {
						for (i = 0; i < len; i++) {
							if (jQuery.contains(self[i], this)) {
								return true;
							}
						}
					}));
				}
	
				for (i = 0; i < len; i++) {
					jQuery.find(selector, self[i], ret);
				}
	
				ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
				ret.selector = this.selector ? this.selector + " " + selector : selector;
				return ret;
			},
			filter: function filter(selector) {
				return this.pushStack(winnow(this, selector || [], false));
			},
			not: function not(selector) {
				return this.pushStack(winnow(this, selector || [], true));
			},
			is: function is(selector) {
				return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
			}
		});
	
		var rootjQuery,
		    document = window.document,
		    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		    init = jQuery.fn.init = function (selector, context) {
			var match, elem;
	
			if (!selector) {
				return this;
			}
	
			if (typeof selector === "string") {
				if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
					match = [null, selector, null];
				} else {
					match = rquickExpr.exec(selector);
				}
	
				if (match && (match[1] || !context)) {
					if (match[1]) {
						context = context instanceof jQuery ? context[0] : context;
	
						jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
	
						if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
							for (match in context) {
								if (jQuery.isFunction(this[match])) {
									this[match](context[match]);
								} else {
									this.attr(match, context[match]);
								}
							}
						}
	
						return this;
					} else {
						elem = document.getElementById(match[2]);
	
						if (elem && elem.parentNode) {
							if (elem.id !== match[2]) {
								return rootjQuery.find(selector);
							}
	
							this.length = 1;
							this[0] = elem;
						}
	
						this.context = document;
						this.selector = selector;
						return this;
					}
				} else if (!context || context.jquery) {
					return (context || rootjQuery).find(selector);
				} else {
					return this.constructor(context).find(selector);
				}
			} else if (selector.nodeType) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;
			} else if (jQuery.isFunction(selector)) {
				return typeof rootjQuery.ready !== "undefined" ? rootjQuery.ready(selector) : selector(jQuery);
			}
	
			if (selector.selector !== undefined) {
				this.selector = selector.selector;
				this.context = selector.context;
			}
	
			return jQuery.makeArray(selector, this);
		};
	
		init.prototype = jQuery.fn;
	
		rootjQuery = jQuery(document);
	
		var rparentsprev = /^(?:parents|prev(?:Until|All))/,
		    guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
		jQuery.extend({
			dir: function dir(elem, _dir, until) {
				var matched = [],
				    cur = elem[_dir];
	
				while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
					if (cur.nodeType === 1) {
						matched.push(cur);
					}
					cur = cur[_dir];
				}
				return matched;
			},
	
			sibling: function sibling(n, elem) {
				var r = [];
	
				for (; n; n = n.nextSibling) {
					if (n.nodeType === 1 && n !== elem) {
						r.push(n);
					}
				}
	
				return r;
			}
		});
	
		jQuery.fn.extend({
			has: function has(target) {
				var i,
				    targets = jQuery(target, this),
				    len = targets.length;
	
				return this.filter(function () {
					for (i = 0; i < len; i++) {
						if (jQuery.contains(this, targets[i])) {
							return true;
						}
					}
				});
			},
	
			closest: function closest(selectors, context) {
				var cur,
				    i = 0,
				    l = this.length,
				    matched = [],
				    pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
	
				for (; i < l; i++) {
					for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
						if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
	
							matched.push(cur);
							break;
						}
					}
				}
	
				return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched);
			},
	
			index: function index(elem) {
				if (!elem) {
					return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
				}
	
				if (typeof elem === "string") {
					return jQuery.inArray(this[0], jQuery(elem));
				}
	
				return jQuery.inArray(elem.jquery ? elem[0] : elem, this);
			},
	
			add: function add(selector, context) {
				return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(selector, context))));
			},
	
			addBack: function addBack(selector) {
				return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
			}
		});
	
		function sibling(cur, dir) {
			do {
				cur = cur[dir];
			} while (cur && cur.nodeType !== 1);
	
			return cur;
		}
	
		jQuery.each({
			parent: function parent(elem) {
				var parent = elem.parentNode;
				return parent && parent.nodeType !== 11 ? parent : null;
			},
			parents: function parents(elem) {
				return jQuery.dir(elem, "parentNode");
			},
			parentsUntil: function parentsUntil(elem, i, until) {
				return jQuery.dir(elem, "parentNode", until);
			},
			next: function next(elem) {
				return sibling(elem, "nextSibling");
			},
			prev: function prev(elem) {
				return sibling(elem, "previousSibling");
			},
			nextAll: function nextAll(elem) {
				return jQuery.dir(elem, "nextSibling");
			},
			prevAll: function prevAll(elem) {
				return jQuery.dir(elem, "previousSibling");
			},
			nextUntil: function nextUntil(elem, i, until) {
				return jQuery.dir(elem, "nextSibling", until);
			},
			prevUntil: function prevUntil(elem, i, until) {
				return jQuery.dir(elem, "previousSibling", until);
			},
			siblings: function siblings(elem) {
				return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
			},
			children: function children(elem) {
				return jQuery.sibling(elem.firstChild);
			},
			contents: function contents(elem) {
				return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes);
			}
		}, function (name, fn) {
			jQuery.fn[name] = function (until, selector) {
				var ret = jQuery.map(this, fn, until);
	
				if (name.slice(-5) !== "Until") {
					selector = until;
				}
	
				if (selector && typeof selector === "string") {
					ret = jQuery.filter(selector, ret);
				}
	
				if (this.length > 1) {
					if (!guaranteedUnique[name]) {
						ret = jQuery.unique(ret);
					}
	
					if (rparentsprev.test(name)) {
						ret = ret.reverse();
					}
				}
	
				return this.pushStack(ret);
			};
		});
		var rnotwhite = /\S+/g;
	
		var optionsCache = {};
	
		function createOptions(options) {
			var object = optionsCache[options] = {};
			jQuery.each(options.match(rnotwhite) || [], function (_, flag) {
				object[flag] = true;
			});
			return object;
		}
	
		jQuery.Callbacks = function (options) {
			options = typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);
	
			var firing,
			    memory,
			    _fired,
			    firingLength,
			    firingIndex,
			    firingStart,
			    list = [],
			    stack = !options.once && [],
			    fire = function fire(data) {
				memory = options.memory && data;
				_fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for (; list && firingIndex < firingLength; firingIndex++) {
					if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
						memory = false;
						break;
					}
				}
				firing = false;
				if (list) {
					if (stack) {
						if (stack.length) {
							fire(stack.shift());
						}
					} else if (memory) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
			    self = {
				add: function add() {
					if (list) {
						var start = list.length;
						(function add(args) {
							jQuery.each(args, function (_, arg) {
								var type = jQuery.type(arg);
								if (type === "function") {
									if (!options.unique || !self.has(arg)) {
										list.push(arg);
									}
								} else if (arg && arg.length && type !== "string") {
									add(arg);
								}
							});
						})(arguments);
	
						if (firing) {
							firingLength = list.length;
						} else if (memory) {
							firingStart = start;
							fire(memory);
						}
					}
					return this;
				},
	
				remove: function remove() {
					if (list) {
						jQuery.each(arguments, function (_, arg) {
							var index;
							while ((index = jQuery.inArray(arg, list, index)) > -1) {
								list.splice(index, 1);
	
								if (firing) {
									if (index <= firingLength) {
										firingLength--;
									}
									if (index <= firingIndex) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},
	
				has: function has(fn) {
					return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
				},
	
				empty: function empty() {
					list = [];
					firingLength = 0;
					return this;
				},
	
				disable: function disable() {
					list = stack = memory = undefined;
					return this;
				},
	
				disabled: function disabled() {
					return !list;
				},
	
				lock: function lock() {
					stack = undefined;
					if (!memory) {
						self.disable();
					}
					return this;
				},
	
				locked: function locked() {
					return !stack;
				},
	
				fireWith: function fireWith(context, args) {
					if (list && (!_fired || stack)) {
						args = args || [];
						args = [context, args.slice ? args.slice() : args];
						if (firing) {
							stack.push(args);
						} else {
							fire(args);
						}
					}
					return this;
				},
	
				fire: function fire() {
					self.fireWith(this, arguments);
					return this;
				},
	
				fired: function fired() {
					return !!_fired;
				}
			};
	
			return self;
		};
	
		jQuery.extend({
	
			Deferred: function Deferred(func) {
				var tuples = [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]],
				    _state = "pending",
				    _promise = {
					state: function state() {
						return _state;
					},
					always: function always() {
						deferred.done(arguments).fail(arguments);
						return this;
					},
					then: function then() {
						var fns = arguments;
						return jQuery.Deferred(function (newDefer) {
							jQuery.each(tuples, function (i, tuple) {
								var fn = jQuery.isFunction(fns[i]) && fns[i];
	
								deferred[tuple[1]](function () {
									var returned = fn && fn.apply(this, arguments);
									if (returned && jQuery.isFunction(returned.promise)) {
										returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
									} else {
										newDefer[tuple[0] + "With"](this === _promise ? newDefer.promise() : this, fn ? [returned] : arguments);
									}
								});
							});
							fns = null;
						}).promise();
					},
	
					promise: function promise(obj) {
						return obj != null ? jQuery.extend(obj, _promise) : _promise;
					}
				},
				    deferred = {};
	
				_promise.pipe = _promise.then;
	
				jQuery.each(tuples, function (i, tuple) {
					var list = tuple[2],
					    stateString = tuple[3];
	
					_promise[tuple[1]] = list.add;
	
					if (stateString) {
						list.add(function () {
							_state = stateString;
						}, tuples[i ^ 1][2].disable, tuples[2][2].lock);
					}
	
					deferred[tuple[0]] = function () {
						deferred[tuple[0] + "With"](this === deferred ? _promise : this, arguments);
						return this;
					};
					deferred[tuple[0] + "With"] = list.fireWith;
				});
	
				_promise.promise(deferred);
	
				if (func) {
					func.call(deferred, deferred);
				}
	
				return deferred;
			},
	
			when: function when(subordinate) {
				var i = 0,
				    resolveValues = _slice.call(arguments),
				    length = resolveValues.length,
				    remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,
				    deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
				    updateFunc = function updateFunc(i, contexts, values) {
					return function (value) {
						contexts[i] = this;
						values[i] = arguments.length > 1 ? _slice.call(arguments) : value;
						if (values === progressValues) {
							deferred.notifyWith(contexts, values);
						} else if (! --remaining) {
							deferred.resolveWith(contexts, values);
						}
					};
				},
				    progressValues,
				    progressContexts,
				    resolveContexts;
	
				if (length > 1) {
					progressValues = new Array(length);
					progressContexts = new Array(length);
					resolveContexts = new Array(length);
					for (; i < length; i++) {
						if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
							resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
						} else {
							--remaining;
						}
					}
				}
	
				if (!remaining) {
					deferred.resolveWith(resolveContexts, resolveValues);
				}
	
				return deferred.promise();
			}
		});
	
		var readyList;
	
		jQuery.fn.ready = function (fn) {
			jQuery.ready.promise().done(fn);
	
			return this;
		};
	
		jQuery.extend({
			isReady: false,
	
			readyWait: 1,
	
			holdReady: function holdReady(hold) {
				if (hold) {
					jQuery.readyWait++;
				} else {
					jQuery.ready(true);
				}
			},
	
			ready: function ready(wait) {
				if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
					return;
				}
	
				if (!document.body) {
					return setTimeout(jQuery.ready);
				}
	
				jQuery.isReady = true;
	
				if (wait !== true && --jQuery.readyWait > 0) {
					return;
				}
	
				readyList.resolveWith(document, [jQuery]);
	
				if (jQuery.fn.triggerHandler) {
					jQuery(document).triggerHandler("ready");
					jQuery(document).off("ready");
				}
			}
		});
	
		function detach() {
			if (document.addEventListener) {
				document.removeEventListener("DOMContentLoaded", completed, false);
				window.removeEventListener("load", completed, false);
			} else {
				document.detachEvent("onreadystatechange", completed);
				window.detachEvent("onload", completed);
			}
		}
	
		function completed() {
			if (document.addEventListener || event.type === "load" || document.readyState === "complete") {
				detach();
				jQuery.ready();
			}
		}
	
		jQuery.ready.promise = function (obj) {
			if (!readyList) {
	
				readyList = jQuery.Deferred();
	
				if (document.readyState === "complete") {
					setTimeout(jQuery.ready);
				} else if (document.addEventListener) {
					document.addEventListener("DOMContentLoaded", completed, false);
	
					window.addEventListener("load", completed, false);
				} else {
					document.attachEvent("onreadystatechange", completed);
	
					window.attachEvent("onload", completed);
	
					var top = false;
	
					try {
						top = window.frameElement == null && document.documentElement;
					} catch (e) {}
	
					if (top && top.doScroll) {
						(function doScrollCheck() {
							if (!jQuery.isReady) {
	
								try {
									top.doScroll("left");
								} catch (e) {
									return setTimeout(doScrollCheck, 50);
								}
	
								detach();
	
								jQuery.ready();
							}
						})();
					}
				}
			}
			return readyList.promise(obj);
		};
	
		var strundefined =  true ? "undefined" : _typeof(undefined);
	
		var i;
		for (i in jQuery(support)) {
			break;
		}
		support.ownLast = i !== "0";
	
		support.inlineBlockNeedsLayout = false;
	
		jQuery(function () {
			var val, div, body, container;
	
			body = document.getElementsByTagName("body")[0];
			if (!body || !body.style) {
				return;
			}
	
			div = document.createElement("div");
			container = document.createElement("div");
			container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
			body.appendChild(container).appendChild(div);
	
			if (_typeof(div.style.zoom) !== strundefined) {
				div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
	
				support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
				if (val) {
					body.style.zoom = 1;
				}
			}
	
			body.removeChild(container);
		});
	
		(function () {
			var div = document.createElement("div");
	
			if (support.deleteExpando == null) {
				support.deleteExpando = true;
				try {
					delete div.test;
				} catch (e) {
					support.deleteExpando = false;
				}
			}
	
			div = null;
		})();
	
		jQuery.acceptData = function (elem) {
			var noData = jQuery.noData[(elem.nodeName + " ").toLowerCase()],
			    nodeType = +elem.nodeType || 1;
	
			return nodeType !== 1 && nodeType !== 9 ? false : !noData || noData !== true && elem.getAttribute("classid") === noData;
		};
	
		var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		    rmultiDash = /([A-Z])/g;
	
		function dataAttr(elem, key, data) {
			if (data === undefined && elem.nodeType === 1) {
	
				var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
	
				data = elem.getAttribute(name);
	
				if (typeof data === "string") {
					try {
						data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
					} catch (e) {}
	
					jQuery.data(elem, key, data);
				} else {
					data = undefined;
				}
			}
	
			return data;
		}
	
		function isEmptyDataObject(obj) {
			var name;
			for (name in obj) {
				if (name === "data" && jQuery.isEmptyObject(obj[name])) {
					continue;
				}
				if (name !== "toJSON") {
					return false;
				}
			}
	
			return true;
		}
	
		function internalData(elem, name, data, pvt) {
			if (!jQuery.acceptData(elem)) {
				return;
			}
	
			var ret,
			    thisCache,
			    internalKey = jQuery.expando,
			    isNode = elem.nodeType,
			    cache = isNode ? jQuery.cache : elem,
			    id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
	
			if ((!id || !cache[id] || !pvt && !cache[id].data) && data === undefined && typeof name === "string") {
				return;
			}
	
			if (!id) {
				if (isNode) {
					id = elem[internalKey] = deletedIds.pop() || jQuery.guid++;
				} else {
					id = internalKey;
				}
			}
	
			if (!cache[id]) {
				cache[id] = isNode ? {} : { toJSON: jQuery.noop };
			}
	
			if ((typeof name === "undefined" ? "undefined" : _typeof(name)) === "object" || typeof name === "function") {
				if (pvt) {
					cache[id] = jQuery.extend(cache[id], name);
				} else {
					cache[id].data = jQuery.extend(cache[id].data, name);
				}
			}
	
			thisCache = cache[id];
	
			if (!pvt) {
				if (!thisCache.data) {
					thisCache.data = {};
				}
	
				thisCache = thisCache.data;
			}
	
			if (data !== undefined) {
				thisCache[jQuery.camelCase(name)] = data;
			}
	
			if (typeof name === "string") {
				ret = thisCache[name];
	
				if (ret == null) {
					ret = thisCache[jQuery.camelCase(name)];
				}
			} else {
				ret = thisCache;
			}
	
			return ret;
		}
	
		function internalRemoveData(elem, name, pvt) {
			if (!jQuery.acceptData(elem)) {
				return;
			}
	
			var thisCache,
			    i,
			    isNode = elem.nodeType,
			    cache = isNode ? jQuery.cache : elem,
			    id = isNode ? elem[jQuery.expando] : jQuery.expando;
	
			if (!cache[id]) {
				return;
			}
	
			if (name) {
	
				thisCache = pvt ? cache[id] : cache[id].data;
	
				if (thisCache) {
					if (!jQuery.isArray(name)) {
						if (name in thisCache) {
							name = [name];
						} else {
							name = jQuery.camelCase(name);
							if (name in thisCache) {
								name = [name];
							} else {
								name = name.split(" ");
							}
						}
					} else {
						name = name.concat(jQuery.map(name, jQuery.camelCase));
					}
	
					i = name.length;
					while (i--) {
						delete thisCache[name[i]];
					}
	
					if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) {
						return;
					}
				}
			}
	
			if (!pvt) {
				delete cache[id].data;
	
				if (!isEmptyDataObject(cache[id])) {
					return;
				}
			}
	
			if (isNode) {
				jQuery.cleanData([elem], true);
			} else if (support.deleteExpando || cache != cache.window) {
				delete cache[id];
			} else {
				cache[id] = null;
			}
		}
	
		jQuery.extend({
			cache: {},
	
			noData: {
				"applet ": true,
				"embed ": true,
	
				"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
			},
	
			hasData: function hasData(elem) {
				elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
				return !!elem && !isEmptyDataObject(elem);
			},
	
			data: function data(elem, name, _data) {
				return internalData(elem, name, _data);
			},
	
			removeData: function removeData(elem, name) {
				return internalRemoveData(elem, name);
			},
	
			_data: function _data(elem, name, data) {
				return internalData(elem, name, data, true);
			},
	
			_removeData: function _removeData(elem, name) {
				return internalRemoveData(elem, name, true);
			}
		});
	
		jQuery.fn.extend({
			data: function data(key, value) {
				var i,
				    name,
				    data,
				    elem = this[0],
				    attrs = elem && elem.attributes;
	
				if (key === undefined) {
					if (this.length) {
						data = jQuery.data(elem);
	
						if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
							i = attrs.length;
							while (i--) {
								if (attrs[i]) {
									name = attrs[i].name;
									if (name.indexOf("data-") === 0) {
										name = jQuery.camelCase(name.slice(5));
										dataAttr(elem, name, data[name]);
									}
								}
							}
							jQuery._data(elem, "parsedAttrs", true);
						}
					}
	
					return data;
				}
	
				if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
					return this.each(function () {
						jQuery.data(this, key);
					});
				}
	
				return arguments.length > 1 ? this.each(function () {
					jQuery.data(this, key, value);
				}) : elem ? dataAttr(elem, key, jQuery.data(elem, key)) : undefined;
			},
	
			removeData: function removeData(key) {
				return this.each(function () {
					jQuery.removeData(this, key);
				});
			}
		});
	
		jQuery.extend({
			queue: function queue(elem, type, data) {
				var queue;
	
				if (elem) {
					type = (type || "fx") + "queue";
					queue = jQuery._data(elem, type);
	
					if (data) {
						if (!queue || jQuery.isArray(data)) {
							queue = jQuery._data(elem, type, jQuery.makeArray(data));
						} else {
							queue.push(data);
						}
					}
					return queue || [];
				}
			},
	
			dequeue: function dequeue(elem, type) {
				type = type || "fx";
	
				var queue = jQuery.queue(elem, type),
				    startLength = queue.length,
				    fn = queue.shift(),
				    hooks = jQuery._queueHooks(elem, type),
				    next = function next() {
					jQuery.dequeue(elem, type);
				};
	
				if (fn === "inprogress") {
					fn = queue.shift();
					startLength--;
				}
	
				if (fn) {
					if (type === "fx") {
						queue.unshift("inprogress");
					}
	
					delete hooks.stop;
					fn.call(elem, next, hooks);
				}
	
				if (!startLength && hooks) {
					hooks.empty.fire();
				}
			},
	
			_queueHooks: function _queueHooks(elem, type) {
				var key = type + "queueHooks";
				return jQuery._data(elem, key) || jQuery._data(elem, key, {
					empty: jQuery.Callbacks("once memory").add(function () {
						jQuery._removeData(elem, type + "queue");
						jQuery._removeData(elem, key);
					})
				});
			}
		});
	
		jQuery.fn.extend({
			queue: function queue(type, data) {
				var setter = 2;
	
				if (typeof type !== "string") {
					data = type;
					type = "fx";
					setter--;
				}
	
				if (arguments.length < setter) {
					return jQuery.queue(this[0], type);
				}
	
				return data === undefined ? this : this.each(function () {
					var queue = jQuery.queue(this, type, data);
	
					jQuery._queueHooks(this, type);
	
					if (type === "fx" && queue[0] !== "inprogress") {
						jQuery.dequeue(this, type);
					}
				});
			},
			dequeue: function dequeue(type) {
				return this.each(function () {
					jQuery.dequeue(this, type);
				});
			},
			clearQueue: function clearQueue(type) {
				return this.queue(type || "fx", []);
			},
	
			promise: function promise(type, obj) {
				var tmp,
				    count = 1,
				    defer = jQuery.Deferred(),
				    elements = this,
				    i = this.length,
				    resolve = function resolve() {
					if (! --count) {
						defer.resolveWith(elements, [elements]);
					}
				};
	
				if (typeof type !== "string") {
					obj = type;
					type = undefined;
				}
				type = type || "fx";
	
				while (i--) {
					tmp = jQuery._data(elements[i], type + "queueHooks");
					if (tmp && tmp.empty) {
						count++;
						tmp.empty.add(resolve);
					}
				}
				resolve();
				return defer.promise(obj);
			}
		});
		var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
	
		var cssExpand = ["Top", "Right", "Bottom", "Left"];
	
		var isHidden = function isHidden(elem, el) {
			elem = el || elem;
			return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
		};
	
		var access = jQuery.access = function (elems, fn, key, value, chainable, emptyGet, raw) {
			var i = 0,
			    length = elems.length,
			    bulk = key == null;
	
			if (jQuery.type(key) === "object") {
				chainable = true;
				for (i in key) {
					jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
				}
			} else if (value !== undefined) {
				chainable = true;
	
				if (!jQuery.isFunction(value)) {
					raw = true;
				}
	
				if (bulk) {
					if (raw) {
						fn.call(elems, value);
						fn = null;
					} else {
						bulk = fn;
						fn = function fn(elem, key, value) {
							return bulk.call(jQuery(elem), value);
						};
					}
				}
	
				if (fn) {
					for (; i < length; i++) {
						fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
					}
				}
			}
	
			return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
		};
		var rcheckableType = /^(?:checkbox|radio)$/i;
	
		(function () {
			var input = document.createElement("input"),
			    div = document.createElement("div"),
			    fragment = document.createDocumentFragment();
	
			div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	
			support.leadingWhitespace = div.firstChild.nodeType === 3;
	
			support.tbody = !div.getElementsByTagName("tbody").length;
	
			support.htmlSerialize = !!div.getElementsByTagName("link").length;
	
			support.html5Clone = document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
	
			input.type = "checkbox";
			input.checked = true;
			fragment.appendChild(input);
			support.appendChecked = input.checked;
	
			div.innerHTML = "<textarea>x</textarea>";
			support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
	
			fragment.appendChild(div);
			div.innerHTML = "<input type='radio' checked='checked' name='t'/>";
	
			support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
	
			support.noCloneEvent = true;
			if (div.attachEvent) {
				div.attachEvent("onclick", function () {
					support.noCloneEvent = false;
				});
	
				div.cloneNode(true).click();
			}
	
			if (support.deleteExpando == null) {
				support.deleteExpando = true;
				try {
					delete div.test;
				} catch (e) {
					support.deleteExpando = false;
				}
			}
		})();
	
		(function () {
			var i,
			    eventName,
			    div = document.createElement("div");
	
			for (i in { submit: true, change: true, focusin: true }) {
				eventName = "on" + i;
	
				if (!(support[i + "Bubbles"] = eventName in window)) {
					div.setAttribute(eventName, "t");
					support[i + "Bubbles"] = div.attributes[eventName].expando === false;
				}
			}
	
			div = null;
		})();
	
		var rformElems = /^(?:input|select|textarea)$/i,
		    rkeyEvent = /^key/,
		    rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
		    rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		    rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
	
		function returnTrue() {
			return true;
		}
	
		function returnFalse() {
			return false;
		}
	
		function safeActiveElement() {
			try {
				return document.activeElement;
			} catch (err) {}
		}
	
		jQuery.event = {
	
			global: {},
	
			add: function add(elem, types, handler, data, selector) {
				var tmp,
				    events,
				    t,
				    handleObjIn,
				    special,
				    eventHandle,
				    handleObj,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = jQuery._data(elem);
	
				if (!elemData) {
					return;
				}
	
				if (handler.handler) {
					handleObjIn = handler;
					handler = handleObjIn.handler;
					selector = handleObjIn.selector;
				}
	
				if (!handler.guid) {
					handler.guid = jQuery.guid++;
				}
	
				if (!(events = elemData.events)) {
					events = elemData.events = {};
				}
				if (!(eventHandle = elemData.handle)) {
					eventHandle = elemData.handle = function (e) {
						return (typeof jQuery === "undefined" ? "undefined" : _typeof(jQuery)) !== strundefined && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined;
					};
	
					eventHandle.elem = elem;
				}
	
				types = (types || "").match(rnotwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();
	
					if (!type) {
						continue;
					}
	
					special = jQuery.event.special[type] || {};
	
					type = (selector ? special.delegateType : special.bindType) || type;
	
					special = jQuery.event.special[type] || {};
	
					handleObj = jQuery.extend({
						type: type,
						origType: origType,
						data: data,
						handler: handler,
						guid: handler.guid,
						selector: selector,
						needsContext: selector && jQuery.expr.match.needsContext.test(selector),
						namespace: namespaces.join(".")
					}, handleObjIn);
	
					if (!(handlers = events[type])) {
						handlers = events[type] = [];
						handlers.delegateCount = 0;
	
						if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
							if (elem.addEventListener) {
								elem.addEventListener(type, eventHandle, false);
							} else if (elem.attachEvent) {
								elem.attachEvent("on" + type, eventHandle);
							}
						}
					}
	
					if (special.add) {
						special.add.call(elem, handleObj);
	
						if (!handleObj.handler.guid) {
							handleObj.handler.guid = handler.guid;
						}
					}
	
					if (selector) {
						handlers.splice(handlers.delegateCount++, 0, handleObj);
					} else {
						handlers.push(handleObj);
					}
	
					jQuery.event.global[type] = true;
				}
	
				elem = null;
			},
	
			remove: function remove(elem, types, handler, selector, mappedTypes) {
				var j,
				    handleObj,
				    tmp,
				    origCount,
				    t,
				    events,
				    special,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = jQuery.hasData(elem) && jQuery._data(elem);
	
				if (!elemData || !(events = elemData.events)) {
					return;
				}
	
				types = (types || "").match(rnotwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();
	
					if (!type) {
						for (type in events) {
							jQuery.event.remove(elem, type + types[t], handler, selector, true);
						}
						continue;
					}
	
					special = jQuery.event.special[type] || {};
					type = (selector ? special.delegateType : special.bindType) || type;
					handlers = events[type] || [];
					tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
	
					origCount = j = handlers.length;
					while (j--) {
						handleObj = handlers[j];
	
						if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
							handlers.splice(j, 1);
	
							if (handleObj.selector) {
								handlers.delegateCount--;
							}
							if (special.remove) {
								special.remove.call(elem, handleObj);
							}
						}
					}
	
					if (origCount && !handlers.length) {
						if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
							jQuery.removeEvent(elem, type, elemData.handle);
						}
	
						delete events[type];
					}
				}
	
				if (jQuery.isEmptyObject(events)) {
					delete elemData.handle;
	
					jQuery._removeData(elem, "events");
				}
			},
	
			trigger: function trigger(event, data, elem, onlyHandlers) {
				var handle,
				    ontype,
				    cur,
				    bubbleType,
				    special,
				    tmp,
				    i,
				    eventPath = [elem || document],
				    type = hasOwn.call(event, "type") ? event.type : event,
				    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
	
				cur = tmp = elem = elem || document;
	
				if (elem.nodeType === 3 || elem.nodeType === 8) {
					return;
				}
	
				if (rfocusMorph.test(type + jQuery.event.triggered)) {
					return;
				}
	
				if (type.indexOf(".") >= 0) {
					namespaces = type.split(".");
					type = namespaces.shift();
					namespaces.sort();
				}
				ontype = type.indexOf(":") < 0 && "on" + type;
	
				event = event[jQuery.expando] ? event : new jQuery.Event(type, (typeof event === "undefined" ? "undefined" : _typeof(event)) === "object" && event);
	
				event.isTrigger = onlyHandlers ? 2 : 3;
				event.namespace = namespaces.join(".");
				event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
	
				event.result = undefined;
				if (!event.target) {
					event.target = elem;
				}
	
				data = data == null ? [event] : jQuery.makeArray(data, [event]);
	
				special = jQuery.event.special[type] || {};
				if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
					return;
				}
	
				if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
	
					bubbleType = special.delegateType || type;
					if (!rfocusMorph.test(bubbleType + type)) {
						cur = cur.parentNode;
					}
					for (; cur; cur = cur.parentNode) {
						eventPath.push(cur);
						tmp = cur;
					}
	
					if (tmp === (elem.ownerDocument || document)) {
						eventPath.push(tmp.defaultView || tmp.parentWindow || window);
					}
				}
	
				i = 0;
				while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
	
					event.type = i > 1 ? bubbleType : special.bindType || type;
	
					handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");
					if (handle) {
						handle.apply(cur, data);
					}
	
					handle = ontype && cur[ontype];
					if (handle && handle.apply && jQuery.acceptData(cur)) {
						event.result = handle.apply(cur, data);
						if (event.result === false) {
							event.preventDefault();
						}
					}
				}
				event.type = type;
	
				if (!onlyHandlers && !event.isDefaultPrevented()) {
	
					if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {
						if (ontype && elem[type] && !jQuery.isWindow(elem)) {
							tmp = elem[ontype];
	
							if (tmp) {
								elem[ontype] = null;
							}
	
							jQuery.event.triggered = type;
							try {
								elem[type]();
							} catch (e) {}
							jQuery.event.triggered = undefined;
	
							if (tmp) {
								elem[ontype] = tmp;
							}
						}
					}
				}
	
				return event.result;
			},
	
			dispatch: function dispatch(event) {
				event = jQuery.event.fix(event);
	
				var i,
				    ret,
				    handleObj,
				    matched,
				    j,
				    handlerQueue = [],
				    args = _slice.call(arguments),
				    handlers = (jQuery._data(this, "events") || {})[event.type] || [],
				    special = jQuery.event.special[event.type] || {};
	
				args[0] = event;
				event.delegateTarget = this;
	
				if (special.preDispatch && special.preDispatch.call(this, event) === false) {
					return;
				}
	
				handlerQueue = jQuery.event.handlers.call(this, event, handlers);
	
				i = 0;
				while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
					event.currentTarget = matched.elem;
	
					j = 0;
					while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
						if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
	
							event.handleObj = handleObj;
							event.data = handleObj.data;
	
							ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
	
							if (ret !== undefined) {
								if ((event.result = ret) === false) {
									event.preventDefault();
									event.stopPropagation();
								}
							}
						}
					}
				}
	
				if (special.postDispatch) {
					special.postDispatch.call(this, event);
				}
	
				return event.result;
			},
	
			handlers: function handlers(event, _handlers) {
				var sel,
				    handleObj,
				    matches,
				    i,
				    handlerQueue = [],
				    delegateCount = _handlers.delegateCount,
				    cur = event.target;
	
				if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
					for (; cur != this; cur = cur.parentNode || this) {
						if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
							matches = [];
							for (i = 0; i < delegateCount; i++) {
								handleObj = _handlers[i];
	
								sel = handleObj.selector + " ";
	
								if (matches[sel] === undefined) {
									matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length;
								}
								if (matches[sel]) {
									matches.push(handleObj);
								}
							}
							if (matches.length) {
								handlerQueue.push({ elem: cur, handlers: matches });
							}
						}
					}
				}
	
				if (delegateCount < _handlers.length) {
					handlerQueue.push({ elem: this, handlers: _handlers.slice(delegateCount) });
				}
	
				return handlerQueue;
			},
	
			fix: function fix(event) {
				if (event[jQuery.expando]) {
					return event;
				}
	
				var i,
				    prop,
				    copy,
				    type = event.type,
				    originalEvent = event,
				    fixHook = this.fixHooks[type];
	
				if (!fixHook) {
					this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
				}
				copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
	
				event = new jQuery.Event(originalEvent);
	
				i = copy.length;
				while (i--) {
					prop = copy[i];
					event[prop] = originalEvent[prop];
				}
	
				if (!event.target) {
					event.target = originalEvent.srcElement || document;
				}
	
				if (event.target.nodeType === 3) {
					event.target = event.target.parentNode;
				}
	
				event.metaKey = !!event.metaKey;
	
				return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
			},
	
			props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
	
			fixHooks: {},
	
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function filter(event, original) {
					if (event.which == null) {
						event.which = original.charCode != null ? original.charCode : original.keyCode;
					}
	
					return event;
				}
			},
	
			mouseHooks: {
				props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function filter(event, original) {
					var body,
					    eventDoc,
					    doc,
					    button = original.button,
					    fromElement = original.fromElement;
	
					if (event.pageX == null && original.clientX != null) {
						eventDoc = event.target.ownerDocument || document;
						doc = eventDoc.documentElement;
						body = eventDoc.body;
	
						event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
						event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
					}
	
					if (!event.relatedTarget && fromElement) {
						event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
					}
	
					if (!event.which && button !== undefined) {
						event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
					}
	
					return event;
				}
			},
	
			special: {
				load: {
					noBubble: true
				},
				focus: {
					trigger: function trigger() {
						if (this !== safeActiveElement() && this.focus) {
							try {
								this.focus();
								return false;
							} catch (e) {}
						}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function trigger() {
						if (this === safeActiveElement() && this.blur) {
							this.blur();
							return false;
						}
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function trigger() {
						if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
							this.click();
							return false;
						}
					},
	
					_default: function _default(event) {
						return jQuery.nodeName(event.target, "a");
					}
				},
	
				beforeunload: {
					postDispatch: function postDispatch(event) {
						if (event.result !== undefined && event.originalEvent) {
							event.originalEvent.returnValue = event.result;
						}
					}
				}
			},
	
			simulate: function simulate(type, elem, event, bubble) {
				var e = jQuery.extend(new jQuery.Event(), event, {
					type: type,
					isSimulated: true,
					originalEvent: {}
				});
				if (bubble) {
					jQuery.event.trigger(e, null, elem);
				} else {
					jQuery.event.dispatch.call(elem, e);
				}
				if (e.isDefaultPrevented()) {
					event.preventDefault();
				}
			}
		};
	
		jQuery.removeEvent = document.removeEventListener ? function (elem, type, handle) {
			if (elem.removeEventListener) {
				elem.removeEventListener(type, handle, false);
			}
		} : function (elem, type, handle) {
			var name = "on" + type;
	
			if (elem.detachEvent) {
				if (_typeof(elem[name]) === strundefined) {
					elem[name] = null;
				}
	
				elem.detachEvent(name, handle);
			}
		};
	
		jQuery.Event = function (src, props) {
			if (!(this instanceof jQuery.Event)) {
				return new jQuery.Event(src, props);
			}
	
			if (src && src.type) {
				this.originalEvent = src;
				this.type = src.type;
	
				this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
			} else {
				this.type = src;
			}
	
			if (props) {
				jQuery.extend(this, props);
			}
	
			this.timeStamp = src && src.timeStamp || jQuery.now();
	
			this[jQuery.expando] = true;
		};
	
		jQuery.Event.prototype = {
			isDefaultPrevented: returnFalse,
			isPropagationStopped: returnFalse,
			isImmediatePropagationStopped: returnFalse,
	
			preventDefault: function preventDefault() {
				var e = this.originalEvent;
	
				this.isDefaultPrevented = returnTrue;
				if (!e) {
					return;
				}
	
				if (e.preventDefault) {
					e.preventDefault();
				} else {
					e.returnValue = false;
				}
			},
			stopPropagation: function stopPropagation() {
				var e = this.originalEvent;
	
				this.isPropagationStopped = returnTrue;
				if (!e) {
					return;
				}
	
				if (e.stopPropagation) {
					e.stopPropagation();
				}
	
				e.cancelBubble = true;
			},
			stopImmediatePropagation: function stopImmediatePropagation() {
				var e = this.originalEvent;
	
				this.isImmediatePropagationStopped = returnTrue;
	
				if (e && e.stopImmediatePropagation) {
					e.stopImmediatePropagation();
				}
	
				this.stopPropagation();
			}
		};
	
		jQuery.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (orig, fix) {
			jQuery.event.special[orig] = {
				delegateType: fix,
				bindType: fix,
	
				handle: function handle(event) {
					var ret,
					    target = this,
					    related = event.relatedTarget,
					    handleObj = event.handleObj;
	
					if (!related || related !== target && !jQuery.contains(target, related)) {
						event.type = handleObj.origType;
						ret = handleObj.handler.apply(this, arguments);
						event.type = fix;
					}
					return ret;
				}
			};
		});
	
		if (!support.submitBubbles) {
	
			jQuery.event.special.submit = {
				setup: function setup() {
					if (jQuery.nodeName(this, "form")) {
						return false;
					}
	
					jQuery.event.add(this, "click._submit keypress._submit", function (e) {
						var elem = e.target,
						    form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined;
						if (form && !jQuery._data(form, "submitBubbles")) {
							jQuery.event.add(form, "submit._submit", function (event) {
								event._submit_bubble = true;
							});
							jQuery._data(form, "submitBubbles", true);
						}
					});
				},
	
				postDispatch: function postDispatch(event) {
					if (event._submit_bubble) {
						delete event._submit_bubble;
						if (this.parentNode && !event.isTrigger) {
							jQuery.event.simulate("submit", this.parentNode, event, true);
						}
					}
				},
	
				teardown: function teardown() {
					if (jQuery.nodeName(this, "form")) {
						return false;
					}
	
					jQuery.event.remove(this, "._submit");
				}
			};
		}
	
		if (!support.changeBubbles) {
	
			jQuery.event.special.change = {
	
				setup: function setup() {
	
					if (rformElems.test(this.nodeName)) {
						if (this.type === "checkbox" || this.type === "radio") {
							jQuery.event.add(this, "propertychange._change", function (event) {
								if (event.originalEvent.propertyName === "checked") {
									this._just_changed = true;
								}
							});
							jQuery.event.add(this, "click._change", function (event) {
								if (this._just_changed && !event.isTrigger) {
									this._just_changed = false;
								}
	
								jQuery.event.simulate("change", this, event, true);
							});
						}
						return false;
					}
	
					jQuery.event.add(this, "beforeactivate._change", function (e) {
						var elem = e.target;
	
						if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")) {
							jQuery.event.add(elem, "change._change", function (event) {
								if (this.parentNode && !event.isSimulated && !event.isTrigger) {
									jQuery.event.simulate("change", this.parentNode, event, true);
								}
							});
							jQuery._data(elem, "changeBubbles", true);
						}
					});
				},
	
				handle: function handle(event) {
					var elem = event.target;
	
					if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox") {
						return event.handleObj.handler.apply(this, arguments);
					}
				},
	
				teardown: function teardown() {
					jQuery.event.remove(this, "._change");
	
					return !rformElems.test(this.nodeName);
				}
			};
		}
	
		if (!support.focusinBubbles) {
			jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {
				var handler = function handler(event) {
					jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
				};
	
				jQuery.event.special[fix] = {
					setup: function setup() {
						var doc = this.ownerDocument || this,
						    attaches = jQuery._data(doc, fix);
	
						if (!attaches) {
							doc.addEventListener(orig, handler, true);
						}
						jQuery._data(doc, fix, (attaches || 0) + 1);
					},
					teardown: function teardown() {
						var doc = this.ownerDocument || this,
						    attaches = jQuery._data(doc, fix) - 1;
	
						if (!attaches) {
							doc.removeEventListener(orig, handler, true);
							jQuery._removeData(doc, fix);
						} else {
							jQuery._data(doc, fix, attaches);
						}
					}
				};
			});
		}
	
		jQuery.fn.extend({
	
			on: function on(types, selector, data, fn, one) {
				var type, origFn;
	
				if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {
					if (typeof selector !== "string") {
						data = data || selector;
						selector = undefined;
					}
					for (type in types) {
						this.on(type, selector, data, types[type], one);
					}
					return this;
				}
	
				if (data == null && fn == null) {
					fn = selector;
					data = selector = undefined;
				} else if (fn == null) {
					if (typeof selector === "string") {
						fn = data;
						data = undefined;
					} else {
						fn = data;
						data = selector;
						selector = undefined;
					}
				}
				if (fn === false) {
					fn = returnFalse;
				} else if (!fn) {
					return this;
				}
	
				if (one === 1) {
					origFn = fn;
					fn = function fn(event) {
						jQuery().off(event);
						return origFn.apply(this, arguments);
					};
	
					fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
				}
				return this.each(function () {
					jQuery.event.add(this, types, fn, data, selector);
				});
			},
			one: function one(types, selector, data, fn) {
				return this.on(types, selector, data, fn, 1);
			},
			off: function off(types, selector, fn) {
				var handleObj, type;
				if (types && types.preventDefault && types.handleObj) {
					handleObj = types.handleObj;
					jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
					return this;
				}
				if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {
					for (type in types) {
						this.off(type, selector, types[type]);
					}
					return this;
				}
				if (selector === false || typeof selector === "function") {
					fn = selector;
					selector = undefined;
				}
				if (fn === false) {
					fn = returnFalse;
				}
				return this.each(function () {
					jQuery.event.remove(this, types, fn, selector);
				});
			},
	
			trigger: function trigger(type, data) {
				return this.each(function () {
					jQuery.event.trigger(type, data, this);
				});
			},
			triggerHandler: function triggerHandler(type, data) {
				var elem = this[0];
				if (elem) {
					return jQuery.event.trigger(type, data, elem, true);
				}
			}
		});
	
		function createSafeFragment(document) {
			var list = nodeNames.split("|"),
			    safeFrag = document.createDocumentFragment();
	
			if (safeFrag.createElement) {
				while (list.length) {
					safeFrag.createElement(list.pop());
				}
			}
			return safeFrag;
		}
	
		var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		    rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
		    rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
		    rleadingWhitespace = /^\s+/,
		    rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		    rtagName = /<([\w:]+)/,
		    rtbody = /<tbody/i,
		    rhtml = /<|&#?\w+;/,
		    rnoInnerhtml = /<(?:script|style|link)/i,
		    rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		    rscriptType = /^$|\/(?:java|ecma)script/i,
		    rscriptTypeMasked = /^true\/(.*)/,
		    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		    wrapMap = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
	
			_default: support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		    safeFragment = createSafeFragment(document),
		    fragmentDiv = safeFragment.appendChild(document.createElement("div"));
	
		wrapMap.optgroup = wrapMap.option;
		wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
		wrapMap.th = wrapMap.td;
	
		function getAll(context, tag) {
			var elems,
			    elem,
			    i = 0,
			    found = _typeof(context.getElementsByTagName) !== strundefined ? context.getElementsByTagName(tag || "*") : _typeof(context.querySelectorAll) !== strundefined ? context.querySelectorAll(tag || "*") : undefined;
	
			if (!found) {
				for (found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++) {
					if (!tag || jQuery.nodeName(elem, tag)) {
						found.push(elem);
					} else {
						jQuery.merge(found, getAll(elem, tag));
					}
				}
			}
	
			return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found;
		}
	
		function fixDefaultChecked(elem) {
			if (rcheckableType.test(elem.type)) {
				elem.defaultChecked = elem.checked;
			}
		}
	
		function manipulationTarget(elem, content) {
			return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
		}
	
		function disableScript(elem) {
			elem.type = (jQuery.find.attr(elem, "type") !== null) + "/" + elem.type;
			return elem;
		}
		function restoreScript(elem) {
			var match = rscriptTypeMasked.exec(elem.type);
			if (match) {
				elem.type = match[1];
			} else {
				elem.removeAttribute("type");
			}
			return elem;
		}
	
		function setGlobalEval(elems, refElements) {
			var elem,
			    i = 0;
			for (; (elem = elems[i]) != null; i++) {
				jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"));
			}
		}
	
		function cloneCopyEvent(src, dest) {
	
			if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
				return;
			}
	
			var type,
			    i,
			    l,
			    oldData = jQuery._data(src),
			    curData = jQuery._data(dest, oldData),
			    events = oldData.events;
	
			if (events) {
				delete curData.handle;
				curData.events = {};
	
				for (type in events) {
					for (i = 0, l = events[type].length; i < l; i++) {
						jQuery.event.add(dest, type, events[type][i]);
					}
				}
			}
	
			if (curData.data) {
				curData.data = jQuery.extend({}, curData.data);
			}
		}
	
		function fixCloneNodeIssues(src, dest) {
			var nodeName, e, data;
	
			if (dest.nodeType !== 1) {
				return;
			}
	
			nodeName = dest.nodeName.toLowerCase();
	
			if (!support.noCloneEvent && dest[jQuery.expando]) {
				data = jQuery._data(dest);
	
				for (e in data.events) {
					jQuery.removeEvent(dest, e, data.handle);
				}
	
				dest.removeAttribute(jQuery.expando);
			}
	
			if (nodeName === "script" && dest.text !== src.text) {
				disableScript(dest).text = src.text;
				restoreScript(dest);
			} else if (nodeName === "object") {
				if (dest.parentNode) {
					dest.outerHTML = src.outerHTML;
				}
	
				if (support.html5Clone && src.innerHTML && !jQuery.trim(dest.innerHTML)) {
					dest.innerHTML = src.innerHTML;
				}
			} else if (nodeName === "input" && rcheckableType.test(src.type)) {
	
				dest.defaultChecked = dest.checked = src.checked;
	
				if (dest.value !== src.value) {
					dest.value = src.value;
				}
			} else if (nodeName === "option") {
				dest.defaultSelected = dest.selected = src.defaultSelected;
			} else if (nodeName === "input" || nodeName === "textarea") {
				dest.defaultValue = src.defaultValue;
			}
		}
	
		jQuery.extend({
			clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
				var destElements,
				    node,
				    clone,
				    i,
				    srcElements,
				    inPage = jQuery.contains(elem.ownerDocument, elem);
	
				if (support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
					clone = elem.cloneNode(true);
				} else {
					fragmentDiv.innerHTML = elem.outerHTML;
					fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
				}
	
				if ((!support.noCloneEvent || !support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
					destElements = getAll(clone);
					srcElements = getAll(elem);
	
					for (i = 0; (node = srcElements[i]) != null; ++i) {
						if (destElements[i]) {
							fixCloneNodeIssues(node, destElements[i]);
						}
					}
				}
	
				if (dataAndEvents) {
					if (deepDataAndEvents) {
						srcElements = srcElements || getAll(elem);
						destElements = destElements || getAll(clone);
	
						for (i = 0; (node = srcElements[i]) != null; i++) {
							cloneCopyEvent(node, destElements[i]);
						}
					} else {
						cloneCopyEvent(elem, clone);
					}
				}
	
				destElements = getAll(clone, "script");
				if (destElements.length > 0) {
					setGlobalEval(destElements, !inPage && getAll(elem, "script"));
				}
	
				destElements = srcElements = node = null;
	
				return clone;
			},
	
			buildFragment: function buildFragment(elems, context, scripts, selection) {
				var j,
				    elem,
				    contains,
				    tmp,
				    tag,
				    tbody,
				    wrap,
				    l = elems.length,
				    safe = createSafeFragment(context),
				    nodes = [],
				    i = 0;
	
				for (; i < l; i++) {
					elem = elems[i];
	
					if (elem || elem === 0) {
						if (jQuery.type(elem) === "object") {
							jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
						} else if (!rhtml.test(elem)) {
							nodes.push(context.createTextNode(elem));
						} else {
							tmp = tmp || safe.appendChild(context.createElement("div"));
	
							tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
							wrap = wrapMap[tag] || wrapMap._default;
	
							tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];
	
							j = wrap[0];
							while (j--) {
								tmp = tmp.lastChild;
							}
	
							if (!support.leadingWhitespace && rleadingWhitespace.test(elem)) {
								nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
							}
	
							if (!support.tbody) {
								elem = tag === "table" && !rtbody.test(elem) ? tmp.firstChild : wrap[1] === "<table>" && !rtbody.test(elem) ? tmp : 0;
	
								j = elem && elem.childNodes.length;
								while (j--) {
									if (jQuery.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length) {
										elem.removeChild(tbody);
									}
								}
							}
	
							jQuery.merge(nodes, tmp.childNodes);
	
							tmp.textContent = "";
	
							while (tmp.firstChild) {
								tmp.removeChild(tmp.firstChild);
							}
	
							tmp = safe.lastChild;
						}
					}
				}
	
				if (tmp) {
					safe.removeChild(tmp);
				}
	
				if (!support.appendChecked) {
					jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
				}
	
				i = 0;
				while (elem = nodes[i++]) {
					if (selection && jQuery.inArray(elem, selection) !== -1) {
						continue;
					}
	
					contains = jQuery.contains(elem.ownerDocument, elem);
	
					tmp = getAll(safe.appendChild(elem), "script");
	
					if (contains) {
						setGlobalEval(tmp);
					}
	
					if (scripts) {
						j = 0;
						while (elem = tmp[j++]) {
							if (rscriptType.test(elem.type || "")) {
								scripts.push(elem);
							}
						}
					}
				}
	
				tmp = null;
	
				return safe;
			},
	
			cleanData: function cleanData(elems, acceptData) {
				var elem,
				    type,
				    id,
				    data,
				    i = 0,
				    internalKey = jQuery.expando,
				    cache = jQuery.cache,
				    deleteExpando = support.deleteExpando,
				    special = jQuery.event.special;
	
				for (; (elem = elems[i]) != null; i++) {
					if (acceptData || jQuery.acceptData(elem)) {
	
						id = elem[internalKey];
						data = id && cache[id];
	
						if (data) {
							if (data.events) {
								for (type in data.events) {
									if (special[type]) {
										jQuery.event.remove(elem, type);
									} else {
										jQuery.removeEvent(elem, type, data.handle);
									}
								}
							}
	
							if (cache[id]) {
	
								delete cache[id];
	
								if (deleteExpando) {
									delete elem[internalKey];
								} else if (_typeof(elem.removeAttribute) !== strundefined) {
									elem.removeAttribute(internalKey);
								} else {
									elem[internalKey] = null;
								}
	
								deletedIds.push(id);
							}
						}
					}
				}
			}
		});
	
		jQuery.fn.extend({
			text: function text(value) {
				return access(this, function (value) {
					return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
				}, null, value, arguments.length);
			},
	
			append: function append() {
				return this.domManip(arguments, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var target = manipulationTarget(this, elem);
						target.appendChild(elem);
					}
				});
			},
	
			prepend: function prepend() {
				return this.domManip(arguments, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var target = manipulationTarget(this, elem);
						target.insertBefore(elem, target.firstChild);
					}
				});
			},
	
			before: function before() {
				return this.domManip(arguments, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this);
					}
				});
			},
	
			after: function after() {
				return this.domManip(arguments, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this.nextSibling);
					}
				});
			},
	
			remove: function remove(selector, keepData) {
				var elem,
				    elems = selector ? jQuery.filter(selector, this) : this,
				    i = 0;
	
				for (; (elem = elems[i]) != null; i++) {
	
					if (!keepData && elem.nodeType === 1) {
						jQuery.cleanData(getAll(elem));
					}
	
					if (elem.parentNode) {
						if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
							setGlobalEval(getAll(elem, "script"));
						}
						elem.parentNode.removeChild(elem);
					}
				}
	
				return this;
			},
	
			empty: function empty() {
				var elem,
				    i = 0;
	
				for (; (elem = this[i]) != null; i++) {
					if (elem.nodeType === 1) {
						jQuery.cleanData(getAll(elem, false));
					}
	
					while (elem.firstChild) {
						elem.removeChild(elem.firstChild);
					}
	
					if (elem.options && jQuery.nodeName(elem, "select")) {
						elem.options.length = 0;
					}
				}
	
				return this;
			},
	
			clone: function clone(dataAndEvents, deepDataAndEvents) {
				dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
				deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
				return this.map(function () {
					return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
				});
			},
	
			html: function html(value) {
				return access(this, function (value) {
					var elem = this[0] || {},
					    i = 0,
					    l = this.length;
	
					if (value === undefined) {
						return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, "") : undefined;
					}
	
					if (typeof value === "string" && !rnoInnerhtml.test(value) && (support.htmlSerialize || !rnoshimcache.test(value)) && (support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
	
						value = value.replace(rxhtmlTag, "<$1></$2>");
	
						try {
							for (; i < l; i++) {
								elem = this[i] || {};
								if (elem.nodeType === 1) {
									jQuery.cleanData(getAll(elem, false));
									elem.innerHTML = value;
								}
							}
	
							elem = 0;
						} catch (e) {}
					}
	
					if (elem) {
						this.empty().append(value);
					}
				}, null, value, arguments.length);
			},
	
			replaceWith: function replaceWith() {
				var arg = arguments[0];
	
				this.domManip(arguments, function (elem) {
					arg = this.parentNode;
	
					jQuery.cleanData(getAll(this));
	
					if (arg) {
						arg.replaceChild(elem, this);
					}
				});
	
				return arg && (arg.length || arg.nodeType) ? this : this.remove();
			},
	
			detach: function detach(selector) {
				return this.remove(selector, true);
			},
	
			domManip: function domManip(args, callback) {
				args = concat.apply([], args);
	
				var first,
				    node,
				    hasScripts,
				    scripts,
				    doc,
				    fragment,
				    i = 0,
				    l = this.length,
				    set = this,
				    iNoClone = l - 1,
				    value = args[0],
				    isFunction = jQuery.isFunction(value);
	
				if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
					return this.each(function (index) {
						var self = set.eq(index);
						if (isFunction) {
							args[0] = value.call(this, index, self.html());
						}
						self.domManip(args, callback);
					});
				}
	
				if (l) {
					fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);
					first = fragment.firstChild;
	
					if (fragment.childNodes.length === 1) {
						fragment = first;
					}
	
					if (first) {
						scripts = jQuery.map(getAll(fragment, "script"), disableScript);
						hasScripts = scripts.length;
	
						for (; i < l; i++) {
							node = fragment;
	
							if (i !== iNoClone) {
								node = jQuery.clone(node, true, true);
	
								if (hasScripts) {
									jQuery.merge(scripts, getAll(node, "script"));
								}
							}
	
							callback.call(this[i], node, i);
						}
	
						if (hasScripts) {
							doc = scripts[scripts.length - 1].ownerDocument;
	
							jQuery.map(scripts, restoreScript);
	
							for (i = 0; i < hasScripts; i++) {
								node = scripts[i];
								if (rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {
	
									if (node.src) {
										if (jQuery._evalUrl) {
											jQuery._evalUrl(node.src);
										}
									} else {
										jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""));
									}
								}
							}
						}
	
						fragment = first = null;
					}
				}
	
				return this;
			}
		});
	
		jQuery.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function (name, original) {
			jQuery.fn[name] = function (selector) {
				var elems,
				    i = 0,
				    ret = [],
				    insert = jQuery(selector),
				    last = insert.length - 1;
	
				for (; i <= last; i++) {
					elems = i === last ? this : this.clone(true);
					jQuery(insert[i])[original](elems);
	
					push.apply(ret, elems.get());
				}
	
				return this.pushStack(ret);
			};
		});
	
		var iframe,
		    elemdisplay = {};
	
		function actualDisplay(name, doc) {
			var style,
			    elem = jQuery(doc.createElement(name)).appendTo(doc.body),
			    display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ? style.display : jQuery.css(elem[0], "display");
	
			elem.detach();
	
			return display;
		}
	
		function defaultDisplay(nodeName) {
			var doc = document,
			    display = elemdisplay[nodeName];
	
			if (!display) {
				display = actualDisplay(nodeName, doc);
	
				if (display === "none" || !display) {
					iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);
	
					doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
	
					doc.write();
					doc.close();
	
					display = actualDisplay(nodeName, doc);
					iframe.detach();
				}
	
				elemdisplay[nodeName] = display;
			}
	
			return display;
		}
	
		(function () {
			var shrinkWrapBlocksVal;
	
			support.shrinkWrapBlocks = function () {
				if (shrinkWrapBlocksVal != null) {
					return shrinkWrapBlocksVal;
				}
	
				shrinkWrapBlocksVal = false;
	
				var div, body, container;
	
				body = document.getElementsByTagName("body")[0];
				if (!body || !body.style) {
					return;
				}
	
				div = document.createElement("div");
				container = document.createElement("div");
				container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
				body.appendChild(container).appendChild(div);
	
				if (_typeof(div.style.zoom) !== strundefined) {
					div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;" + "padding:1px;width:1px;zoom:1";
					div.appendChild(document.createElement("div")).style.width = "5px";
					shrinkWrapBlocksVal = div.offsetWidth !== 3;
				}
	
				body.removeChild(container);
	
				return shrinkWrapBlocksVal;
			};
		})();
		var rmargin = /^margin/;
	
		var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
	
		var getStyles,
		    curCSS,
		    rposition = /^(top|right|bottom|left)$/;
	
		if (window.getComputedStyle) {
			getStyles = function getStyles(elem) {
				return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
			};
	
			curCSS = function curCSS(elem, name, computed) {
				var width,
				    minWidth,
				    maxWidth,
				    ret,
				    style = elem.style;
	
				computed = computed || getStyles(elem);
	
				ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined;
	
				if (computed) {
	
					if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
						ret = jQuery.style(elem, name);
					}
	
					if (rnumnonpx.test(ret) && rmargin.test(name)) {
						width = style.width;
						minWidth = style.minWidth;
						maxWidth = style.maxWidth;
	
						style.minWidth = style.maxWidth = style.width = ret;
						ret = computed.width;
	
						style.width = width;
						style.minWidth = minWidth;
						style.maxWidth = maxWidth;
					}
				}
	
				return ret === undefined ? ret : ret + "";
			};
		} else if (document.documentElement.currentStyle) {
			getStyles = function getStyles(elem) {
				return elem.currentStyle;
			};
	
			curCSS = function curCSS(elem, name, computed) {
				var left,
				    rs,
				    rsLeft,
				    ret,
				    style = elem.style;
	
				computed = computed || getStyles(elem);
				ret = computed ? computed[name] : undefined;
	
				if (ret == null && style && style[name]) {
					ret = style[name];
				}
	
				if (rnumnonpx.test(ret) && !rposition.test(name)) {
					left = style.left;
					rs = elem.runtimeStyle;
					rsLeft = rs && rs.left;
	
					if (rsLeft) {
						rs.left = elem.currentStyle.left;
					}
					style.left = name === "fontSize" ? "1em" : ret;
					ret = style.pixelLeft + "px";
	
					style.left = left;
					if (rsLeft) {
						rs.left = rsLeft;
					}
				}
	
				return ret === undefined ? ret : ret + "" || "auto";
			};
		}
	
		function addGetHookIf(conditionFn, hookFn) {
			return {
				get: function get() {
					var condition = conditionFn();
	
					if (condition == null) {
						return;
					}
	
					if (condition) {
						delete this.get;
						return;
					}
	
					return (this.get = hookFn).apply(this, arguments);
				}
			};
		}
	
		(function () {
			var div, style, a, pixelPositionVal, boxSizingReliableVal, reliableHiddenOffsetsVal, reliableMarginRightVal;
	
			div = document.createElement("div");
			div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
			a = div.getElementsByTagName("a")[0];
			style = a && a.style;
	
			if (!style) {
				return;
			}
	
			style.cssText = "float:left;opacity:.5";
	
			support.opacity = style.opacity === "0.5";
	
			support.cssFloat = !!style.cssFloat;
	
			div.style.backgroundClip = "content-box";
			div.cloneNode(true).style.backgroundClip = "";
			support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
			support.boxSizing = style.boxSizing === "" || style.MozBoxSizing === "" || style.WebkitBoxSizing === "";
	
			jQuery.extend(support, {
				reliableHiddenOffsets: function reliableHiddenOffsets() {
					if (reliableHiddenOffsetsVal == null) {
						computeStyleTests();
					}
					return reliableHiddenOffsetsVal;
				},
	
				boxSizingReliable: function boxSizingReliable() {
					if (boxSizingReliableVal == null) {
						computeStyleTests();
					}
					return boxSizingReliableVal;
				},
	
				pixelPosition: function pixelPosition() {
					if (pixelPositionVal == null) {
						computeStyleTests();
					}
					return pixelPositionVal;
				},
	
				reliableMarginRight: function reliableMarginRight() {
					if (reliableMarginRightVal == null) {
						computeStyleTests();
					}
					return reliableMarginRightVal;
				}
			});
	
			function computeStyleTests() {
				var div, body, container, contents;
	
				body = document.getElementsByTagName("body")[0];
				if (!body || !body.style) {
					return;
				}
	
				div = document.createElement("div");
				container = document.createElement("div");
				container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
				body.appendChild(container).appendChild(div);
	
				div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" + "box-sizing:border-box;display:block;margin-top:1%;top:1%;" + "border:1px;padding:1px;width:4px;position:absolute";
	
				pixelPositionVal = boxSizingReliableVal = false;
				reliableMarginRightVal = true;
	
				if (window.getComputedStyle) {
					pixelPositionVal = (window.getComputedStyle(div, null) || {}).top !== "1%";
					boxSizingReliableVal = (window.getComputedStyle(div, null) || { width: "4px" }).width === "4px";
	
					contents = div.appendChild(document.createElement("div"));
	
					contents.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
					contents.style.marginRight = contents.style.width = "0";
					div.style.width = "1px";
	
					reliableMarginRightVal = !parseFloat((window.getComputedStyle(contents, null) || {}).marginRight);
				}
	
				div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
				contents = div.getElementsByTagName("td");
				contents[0].style.cssText = "margin:0;border:0;padding:0;display:none";
				reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
				if (reliableHiddenOffsetsVal) {
					contents[0].style.display = "";
					contents[1].style.display = "none";
					reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
				}
	
				body.removeChild(container);
			}
		})();
	
		jQuery.swap = function (elem, options, callback, args) {
			var ret,
			    name,
			    old = {};
	
			for (name in options) {
				old[name] = elem.style[name];
				elem.style[name] = options[name];
			}
	
			ret = callback.apply(elem, args || []);
	
			for (name in options) {
				elem.style[name] = old[name];
			}
	
			return ret;
		};
	
		var ralpha = /alpha\([^)]*\)/i,
		    ropacity = /opacity\s*=\s*([^)]*)/,
		    rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		    rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
		    rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"),
		    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		    cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		    cssPrefixes = ["Webkit", "O", "Moz", "ms"];
	
		function vendorPropName(style, name) {
			if (name in style) {
				return name;
			}
	
			var capName = name.charAt(0).toUpperCase() + name.slice(1),
			    origName = name,
			    i = cssPrefixes.length;
	
			while (i--) {
				name = cssPrefixes[i] + capName;
				if (name in style) {
					return name;
				}
			}
	
			return origName;
		}
	
		function showHide(elements, show) {
			var display,
			    elem,
			    hidden,
			    values = [],
			    index = 0,
			    length = elements.length;
	
			for (; index < length; index++) {
				elem = elements[index];
				if (!elem.style) {
					continue;
				}
	
				values[index] = jQuery._data(elem, "olddisplay");
				display = elem.style.display;
				if (show) {
					if (!values[index] && display === "none") {
						elem.style.display = "";
					}
	
					if (elem.style.display === "" && isHidden(elem)) {
						values[index] = jQuery._data(elem, "olddisplay", defaultDisplay(elem.nodeName));
					}
				} else {
					hidden = isHidden(elem);
	
					if (display && display !== "none" || !hidden) {
						jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
					}
				}
			}
	
			for (index = 0; index < length; index++) {
				elem = elements[index];
				if (!elem.style) {
					continue;
				}
				if (!show || elem.style.display === "none" || elem.style.display === "") {
					elem.style.display = show ? values[index] || "" : "none";
				}
			}
	
			return elements;
		}
	
		function setPositiveNumber(elem, value, subtract) {
			var matches = rnumsplit.exec(value);
			return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
		}
	
		function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
			var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0,
			    val = 0;
	
			for (; i < 4; i += 2) {
				if (extra === "margin") {
					val += jQuery.css(elem, extra + cssExpand[i], true, styles);
				}
	
				if (isBorderBox) {
					if (extra === "content") {
						val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
					}
	
					if (extra !== "margin") {
						val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
				} else {
					val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
	
					if (extra !== "padding") {
						val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
				}
			}
	
			return val;
		}
	
		function getWidthOrHeight(elem, name, extra) {
			var valueIsBorderBox = true,
			    val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			    styles = getStyles(elem),
			    isBorderBox = support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";
	
			if (val <= 0 || val == null) {
				val = curCSS(elem, name, styles);
				if (val < 0 || val == null) {
					val = elem.style[name];
				}
	
				if (rnumnonpx.test(val)) {
					return val;
				}
	
				valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
	
				val = parseFloat(val) || 0;
			}
	
			return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
		}
	
		jQuery.extend({
			cssHooks: {
				opacity: {
					get: function get(elem, computed) {
						if (computed) {
							var ret = curCSS(elem, "opacity");
							return ret === "" ? "1" : ret;
						}
					}
				}
			},
	
			cssNumber: {
				"columnCount": true,
				"fillOpacity": true,
				"flexGrow": true,
				"flexShrink": true,
				"fontWeight": true,
				"lineHeight": true,
				"opacity": true,
				"order": true,
				"orphans": true,
				"widows": true,
				"zIndex": true,
				"zoom": true
			},
	
			cssProps: {
				"float": support.cssFloat ? "cssFloat" : "styleFloat"
			},
	
			style: function style(elem, name, value, extra) {
				if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
					return;
				}
	
				var ret,
				    type,
				    hooks,
				    origName = jQuery.camelCase(name),
				    style = elem.style;
	
				name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
	
				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
	
				if (value !== undefined) {
					type = typeof value === "undefined" ? "undefined" : _typeof(value);
	
					if (type === "string" && (ret = rrelNum.exec(value))) {
						value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
	
						type = "number";
					}
	
					if (value == null || value !== value) {
						return;
					}
	
					if (type === "number" && !jQuery.cssNumber[origName]) {
						value += "px";
					}
	
					if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
						style[name] = "inherit";
					}
	
					if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
						try {
							style[name] = value;
						} catch (e) {}
					}
				} else {
					if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
						return ret;
					}
	
					return style[name];
				}
			},
	
			css: function css(elem, name, extra, styles) {
				var num,
				    val,
				    hooks,
				    origName = jQuery.camelCase(name);
	
				name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
	
				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
	
				if (hooks && "get" in hooks) {
					val = hooks.get(elem, true, extra);
				}
	
				if (val === undefined) {
					val = curCSS(elem, name, styles);
				}
	
				if (val === "normal" && name in cssNormalTransform) {
					val = cssNormalTransform[name];
				}
	
				if (extra === "" || extra) {
					num = parseFloat(val);
					return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
				}
				return val;
			}
		});
	
		jQuery.each(["height", "width"], function (i, name) {
			jQuery.cssHooks[name] = {
				get: function get(elem, computed, extra) {
					if (computed) {
						return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? jQuery.swap(elem, cssShow, function () {
							return getWidthOrHeight(elem, name, extra);
						}) : getWidthOrHeight(elem, name, extra);
					}
				},
	
				set: function set(elem, value, extra) {
					var styles = extra && getStyles(elem);
					return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
				}
			};
		});
	
		if (!support.opacity) {
			jQuery.cssHooks.opacity = {
				get: function get(elem, computed) {
					return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : computed ? "1" : "";
				},
	
				set: function set(elem, value) {
					var style = elem.style,
					    currentStyle = elem.currentStyle,
					    opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "",
					    filter = currentStyle && currentStyle.filter || style.filter || "";
	
					style.zoom = 1;
	
					if ((value >= 1 || value === "") && jQuery.trim(filter.replace(ralpha, "")) === "" && style.removeAttribute) {
						style.removeAttribute("filter");
	
						if (value === "" || currentStyle && !currentStyle.filter) {
							return;
						}
					}
	
					style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity;
				}
			};
		}
	
		jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function (elem, computed) {
			if (computed) {
				return jQuery.swap(elem, { "display": "inline-block" }, curCSS, [elem, "marginRight"]);
			}
		});
	
		jQuery.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function (prefix, suffix) {
			jQuery.cssHooks[prefix + suffix] = {
				expand: function expand(value) {
					var i = 0,
					    expanded = {},
					    parts = typeof value === "string" ? value.split(" ") : [value];
	
					for (; i < 4; i++) {
						expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
					}
	
					return expanded;
				}
			};
	
			if (!rmargin.test(prefix)) {
				jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
			}
		});
	
		jQuery.fn.extend({
			css: function css(name, value) {
				return access(this, function (elem, name, value) {
					var styles,
					    len,
					    map = {},
					    i = 0;
	
					if (jQuery.isArray(name)) {
						styles = getStyles(elem);
						len = name.length;
	
						for (; i < len; i++) {
							map[name[i]] = jQuery.css(elem, name[i], false, styles);
						}
	
						return map;
					}
	
					return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
				}, name, value, arguments.length > 1);
			},
			show: function show() {
				return showHide(this, true);
			},
			hide: function hide() {
				return showHide(this);
			},
			toggle: function toggle(state) {
				if (typeof state === "boolean") {
					return state ? this.show() : this.hide();
				}
	
				return this.each(function () {
					if (isHidden(this)) {
						jQuery(this).show();
					} else {
						jQuery(this).hide();
					}
				});
			}
		});
	
		function Tween(elem, options, prop, end, easing) {
			return new Tween.prototype.init(elem, options, prop, end, easing);
		}
		jQuery.Tween = Tween;
	
		Tween.prototype = {
			constructor: Tween,
			init: function init(elem, options, prop, end, easing, unit) {
				this.elem = elem;
				this.prop = prop;
				this.easing = easing || "swing";
				this.options = options;
				this.start = this.now = this.cur();
				this.end = end;
				this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
			},
			cur: function cur() {
				var hooks = Tween.propHooks[this.prop];
	
				return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
			},
			run: function run(percent) {
				var eased,
				    hooks = Tween.propHooks[this.prop];
	
				if (this.options.duration) {
					this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
				} else {
					this.pos = eased = percent;
				}
				this.now = (this.end - this.start) * eased + this.start;
	
				if (this.options.step) {
					this.options.step.call(this.elem, this.now, this);
				}
	
				if (hooks && hooks.set) {
					hooks.set(this);
				} else {
					Tween.propHooks._default.set(this);
				}
				return this;
			}
		};
	
		Tween.prototype.init.prototype = Tween.prototype;
	
		Tween.propHooks = {
			_default: {
				get: function get(tween) {
					var result;
	
					if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
						return tween.elem[tween.prop];
					}
	
					result = jQuery.css(tween.elem, tween.prop, "");
	
					return !result || result === "auto" ? 0 : result;
				},
				set: function set(tween) {
					if (jQuery.fx.step[tween.prop]) {
						jQuery.fx.step[tween.prop](tween);
					} else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
						jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
					} else {
						tween.elem[tween.prop] = tween.now;
					}
				}
			}
		};
	
		Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
			set: function set(tween) {
				if (tween.elem.nodeType && tween.elem.parentNode) {
					tween.elem[tween.prop] = tween.now;
				}
			}
		};
	
		jQuery.easing = {
			linear: function linear(p) {
				return p;
			},
			swing: function swing(p) {
				return 0.5 - Math.cos(p * Math.PI) / 2;
			}
		};
	
		jQuery.fx = Tween.prototype.init;
	
		jQuery.fx.step = {};
	
		var fxNow,
		    timerId,
		    rfxtypes = /^(?:toggle|show|hide)$/,
		    rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
		    rrun = /queueHooks$/,
		    animationPrefilters = [defaultPrefilter],
		    tweeners = {
			"*": [function (prop, value) {
				var tween = this.createTween(prop, value),
				    target = tween.cur(),
				    parts = rfxnum.exec(value),
				    unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
				    start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)),
				    scale = 1,
				    maxIterations = 20;
	
				if (start && start[3] !== unit) {
					unit = unit || start[3];
	
					parts = parts || [];
	
					start = +target || 1;
	
					do {
						scale = scale || ".5";
	
						start = start / scale;
						jQuery.style(tween.elem, prop, start + unit);
					} while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
				}
	
				if (parts) {
					start = tween.start = +start || +target || 0;
					tween.unit = unit;
	
					tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2];
				}
	
				return tween;
			}]
		};
	
		function createFxNow() {
			setTimeout(function () {
				fxNow = undefined;
			});
			return fxNow = jQuery.now();
		}
	
		function genFx(type, includeWidth) {
			var which,
			    attrs = { height: type },
			    i = 0;
	
			includeWidth = includeWidth ? 1 : 0;
			for (; i < 4; i += 2 - includeWidth) {
				which = cssExpand[i];
				attrs["margin" + which] = attrs["padding" + which] = type;
			}
	
			if (includeWidth) {
				attrs.opacity = attrs.width = type;
			}
	
			return attrs;
		}
	
		function createTween(value, prop, animation) {
			var tween,
			    collection = (tweeners[prop] || []).concat(tweeners["*"]),
			    index = 0,
			    length = collection.length;
			for (; index < length; index++) {
				if (tween = collection[index].call(animation, prop, value)) {
					return tween;
				}
			}
		}
	
		function defaultPrefilter(elem, props, opts) {
			var prop,
			    value,
			    toggle,
			    tween,
			    hooks,
			    oldfire,
			    display,
			    checkDisplay,
			    anim = this,
			    orig = {},
			    style = elem.style,
			    hidden = elem.nodeType && isHidden(elem),
			    dataShow = jQuery._data(elem, "fxshow");
	
			if (!opts.queue) {
				hooks = jQuery._queueHooks(elem, "fx");
				if (hooks.unqueued == null) {
					hooks.unqueued = 0;
					oldfire = hooks.empty.fire;
					hooks.empty.fire = function () {
						if (!hooks.unqueued) {
							oldfire();
						}
					};
				}
				hooks.unqueued++;
	
				anim.always(function () {
					anim.always(function () {
						hooks.unqueued--;
						if (!jQuery.queue(elem, "fx").length) {
							hooks.empty.fire();
						}
					});
				});
			}
	
			if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
				opts.overflow = [style.overflow, style.overflowX, style.overflowY];
	
				display = jQuery.css(elem, "display");
	
				checkDisplay = display === "none" ? jQuery._data(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;
	
				if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
					if (!support.inlineBlockNeedsLayout || defaultDisplay(elem.nodeName) === "inline") {
						style.display = "inline-block";
					} else {
						style.zoom = 1;
					}
				}
			}
	
			if (opts.overflow) {
				style.overflow = "hidden";
				if (!support.shrinkWrapBlocks()) {
					anim.always(function () {
						style.overflow = opts.overflow[0];
						style.overflowX = opts.overflow[1];
						style.overflowY = opts.overflow[2];
					});
				}
			}
	
			for (prop in props) {
				value = props[prop];
				if (rfxtypes.exec(value)) {
					delete props[prop];
					toggle = toggle || value === "toggle";
					if (value === (hidden ? "hide" : "show")) {
						if (value === "show" && dataShow && dataShow[prop] !== undefined) {
							hidden = true;
						} else {
							continue;
						}
					}
					orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
				} else {
					display = undefined;
				}
			}
	
			if (!jQuery.isEmptyObject(orig)) {
				if (dataShow) {
					if ("hidden" in dataShow) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = jQuery._data(elem, "fxshow", {});
				}
	
				if (toggle) {
					dataShow.hidden = !hidden;
				}
				if (hidden) {
					jQuery(elem).show();
				} else {
					anim.done(function () {
						jQuery(elem).hide();
					});
				}
				anim.done(function () {
					var prop;
					jQuery._removeData(elem, "fxshow");
					for (prop in orig) {
						jQuery.style(elem, prop, orig[prop]);
					}
				});
				for (prop in orig) {
					tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
	
					if (!(prop in dataShow)) {
						dataShow[prop] = tween.start;
						if (hidden) {
							tween.end = tween.start;
							tween.start = prop === "width" || prop === "height" ? 1 : 0;
						}
					}
				}
			} else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
				style.display = display;
			}
		}
	
		function propFilter(props, specialEasing) {
			var index, name, easing, value, hooks;
	
			for (index in props) {
				name = jQuery.camelCase(index);
				easing = specialEasing[name];
				value = props[index];
				if (jQuery.isArray(value)) {
					easing = value[1];
					value = props[index] = value[0];
				}
	
				if (index !== name) {
					props[name] = value;
					delete props[index];
				}
	
				hooks = jQuery.cssHooks[name];
				if (hooks && "expand" in hooks) {
					value = hooks.expand(value);
					delete props[name];
	
					for (index in value) {
						if (!(index in props)) {
							props[index] = value[index];
							specialEasing[index] = easing;
						}
					}
				} else {
					specialEasing[name] = easing;
				}
			}
		}
	
		function Animation(elem, properties, options) {
			var result,
			    stopped,
			    index = 0,
			    length = animationPrefilters.length,
			    deferred = jQuery.Deferred().always(function () {
				delete tick.elem;
			}),
			    tick = function tick() {
				if (stopped) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
				    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
				    temp = remaining / animation.duration || 0,
				    percent = 1 - temp,
				    index = 0,
				    length = animation.tweens.length;
	
				for (; index < length; index++) {
					animation.tweens[index].run(percent);
				}
	
				deferred.notifyWith(elem, [animation, percent, remaining]);
	
				if (percent < 1 && length) {
					return remaining;
				} else {
					deferred.resolveWith(elem, [animation]);
					return false;
				}
			},
			    animation = deferred.promise({
				elem: elem,
				props: jQuery.extend({}, properties),
				opts: jQuery.extend(true, { specialEasing: {} }, options),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function createTween(prop, end) {
					var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
					animation.tweens.push(tween);
					return tween;
				},
				stop: function stop(gotoEnd) {
					var index = 0,
					    length = gotoEnd ? animation.tweens.length : 0;
					if (stopped) {
						return this;
					}
					stopped = true;
					for (; index < length; index++) {
						animation.tweens[index].run(1);
					}
	
					if (gotoEnd) {
						deferred.resolveWith(elem, [animation, gotoEnd]);
					} else {
						deferred.rejectWith(elem, [animation, gotoEnd]);
					}
					return this;
				}
			}),
			    props = animation.props;
	
			propFilter(props, animation.opts.specialEasing);
	
			for (; index < length; index++) {
				result = animationPrefilters[index].call(animation, elem, props, animation.opts);
				if (result) {
					return result;
				}
			}
	
			jQuery.map(props, createTween, animation);
	
			if (jQuery.isFunction(animation.opts.start)) {
				animation.opts.start.call(elem, animation);
			}
	
			jQuery.fx.timer(jQuery.extend(tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			}));
	
			return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
		}
	
		jQuery.Animation = jQuery.extend(Animation, {
			tweener: function tweener(props, callback) {
				if (jQuery.isFunction(props)) {
					callback = props;
					props = ["*"];
				} else {
					props = props.split(" ");
				}
	
				var prop,
				    index = 0,
				    length = props.length;
	
				for (; index < length; index++) {
					prop = props[index];
					tweeners[prop] = tweeners[prop] || [];
					tweeners[prop].unshift(callback);
				}
			},
	
			prefilter: function prefilter(callback, prepend) {
				if (prepend) {
					animationPrefilters.unshift(callback);
				} else {
					animationPrefilters.push(callback);
				}
			}
		});
	
		jQuery.speed = function (speed, easing, fn) {
			var opt = speed && (typeof speed === "undefined" ? "undefined" : _typeof(speed)) === "object" ? jQuery.extend({}, speed) : {
				complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
				duration: speed,
				easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
			};
	
			opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
	
			if (opt.queue == null || opt.queue === true) {
				opt.queue = "fx";
			}
	
			opt.old = opt.complete;
	
			opt.complete = function () {
				if (jQuery.isFunction(opt.old)) {
					opt.old.call(this);
				}
	
				if (opt.queue) {
					jQuery.dequeue(this, opt.queue);
				}
			};
	
			return opt;
		};
	
		jQuery.fn.extend({
			fadeTo: function fadeTo(speed, to, easing, callback) {
				return this.filter(isHidden).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
			},
			animate: function animate(prop, speed, easing, callback) {
				var empty = jQuery.isEmptyObject(prop),
				    optall = jQuery.speed(speed, easing, callback),
				    doAnimation = function doAnimation() {
					var anim = Animation(this, jQuery.extend({}, prop), optall);
	
					if (empty || jQuery._data(this, "finish")) {
						anim.stop(true);
					}
				};
				doAnimation.finish = doAnimation;
	
				return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
			},
			stop: function stop(type, clearQueue, gotoEnd) {
				var stopQueue = function stopQueue(hooks) {
					var stop = hooks.stop;
					delete hooks.stop;
					stop(gotoEnd);
				};
	
				if (typeof type !== "string") {
					gotoEnd = clearQueue;
					clearQueue = type;
					type = undefined;
				}
				if (clearQueue && type !== false) {
					this.queue(type || "fx", []);
				}
	
				return this.each(function () {
					var dequeue = true,
					    index = type != null && type + "queueHooks",
					    timers = jQuery.timers,
					    data = jQuery._data(this);
	
					if (index) {
						if (data[index] && data[index].stop) {
							stopQueue(data[index]);
						}
					} else {
						for (index in data) {
							if (data[index] && data[index].stop && rrun.test(index)) {
								stopQueue(data[index]);
							}
						}
					}
	
					for (index = timers.length; index--;) {
						if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
							timers[index].anim.stop(gotoEnd);
							dequeue = false;
							timers.splice(index, 1);
						}
					}
	
					if (dequeue || !gotoEnd) {
						jQuery.dequeue(this, type);
					}
				});
			},
			finish: function finish(type) {
				if (type !== false) {
					type = type || "fx";
				}
				return this.each(function () {
					var index,
					    data = jQuery._data(this),
					    queue = data[type + "queue"],
					    hooks = data[type + "queueHooks"],
					    timers = jQuery.timers,
					    length = queue ? queue.length : 0;
	
					data.finish = true;
	
					jQuery.queue(this, type, []);
	
					if (hooks && hooks.stop) {
						hooks.stop.call(this, true);
					}
	
					for (index = timers.length; index--;) {
						if (timers[index].elem === this && timers[index].queue === type) {
							timers[index].anim.stop(true);
							timers.splice(index, 1);
						}
					}
	
					for (index = 0; index < length; index++) {
						if (queue[index] && queue[index].finish) {
							queue[index].finish.call(this);
						}
					}
	
					delete data.finish;
				});
			}
		});
	
		jQuery.each(["toggle", "show", "hide"], function (i, name) {
			var cssFn = jQuery.fn[name];
			jQuery.fn[name] = function (speed, easing, callback) {
				return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
			};
		});
	
		jQuery.each({
			slideDown: genFx("show"),
			slideUp: genFx("hide"),
			slideToggle: genFx("toggle"),
			fadeIn: { opacity: "show" },
			fadeOut: { opacity: "hide" },
			fadeToggle: { opacity: "toggle" }
		}, function (name, props) {
			jQuery.fn[name] = function (speed, easing, callback) {
				return this.animate(props, speed, easing, callback);
			};
		});
	
		jQuery.timers = [];
		jQuery.fx.tick = function () {
			var timer,
			    timers = jQuery.timers,
			    i = 0;
	
			fxNow = jQuery.now();
	
			for (; i < timers.length; i++) {
				timer = timers[i];
	
				if (!timer() && timers[i] === timer) {
					timers.splice(i--, 1);
				}
			}
	
			if (!timers.length) {
				jQuery.fx.stop();
			}
			fxNow = undefined;
		};
	
		jQuery.fx.timer = function (timer) {
			jQuery.timers.push(timer);
			if (timer()) {
				jQuery.fx.start();
			} else {
				jQuery.timers.pop();
			}
		};
	
		jQuery.fx.interval = 13;
	
		jQuery.fx.start = function () {
			if (!timerId) {
				timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
			}
		};
	
		jQuery.fx.stop = function () {
			clearInterval(timerId);
			timerId = null;
		};
	
		jQuery.fx.speeds = {
			slow: 600,
			fast: 200,
	
			_default: 400
		};
	
		jQuery.fn.delay = function (time, type) {
			time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
			type = type || "fx";
	
			return this.queue(type, function (next, hooks) {
				var timeout = setTimeout(next, time);
				hooks.stop = function () {
					clearTimeout(timeout);
				};
			});
		};
	
		(function () {
			var input, div, select, a, opt;
	
			div = document.createElement("div");
			div.setAttribute("className", "t");
			div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
			a = div.getElementsByTagName("a")[0];
	
			select = document.createElement("select");
			opt = select.appendChild(document.createElement("option"));
			input = div.getElementsByTagName("input")[0];
	
			a.style.cssText = "top:1px";
	
			support.getSetAttribute = div.className !== "t";
	
			support.style = /top/.test(a.getAttribute("style"));
	
			support.hrefNormalized = a.getAttribute("href") === "/a";
	
			support.checkOn = !!input.value;
	
			support.optSelected = opt.selected;
	
			support.enctype = !!document.createElement("form").enctype;
	
			select.disabled = true;
			support.optDisabled = !opt.disabled;
	
			input = document.createElement("input");
			input.setAttribute("value", "");
			support.input = input.getAttribute("value") === "";
	
			input.value = "t";
			input.setAttribute("type", "radio");
			support.radioValue = input.value === "t";
		})();
	
		var rreturn = /\r/g;
	
		jQuery.fn.extend({
			val: function val(value) {
				var hooks,
				    ret,
				    isFunction,
				    elem = this[0];
	
				if (!arguments.length) {
					if (elem) {
						hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
	
						if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
							return ret;
						}
	
						ret = elem.value;
	
						return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
					}
	
					return;
				}
	
				isFunction = jQuery.isFunction(value);
	
				return this.each(function (i) {
					var val;
	
					if (this.nodeType !== 1) {
						return;
					}
	
					if (isFunction) {
						val = value.call(this, i, jQuery(this).val());
					} else {
						val = value;
					}
	
					if (val == null) {
						val = "";
					} else if (typeof val === "number") {
						val += "";
					} else if (jQuery.isArray(val)) {
						val = jQuery.map(val, function (value) {
							return value == null ? "" : value + "";
						});
					}
	
					hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
	
					if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
						this.value = val;
					}
				});
			}
		});
	
		jQuery.extend({
			valHooks: {
				option: {
					get: function get(elem) {
						var val = jQuery.find.attr(elem, "value");
						return val != null ? val : jQuery.trim(jQuery.text(elem));
					}
				},
				select: {
					get: function get(elem) {
						var value,
						    option,
						    options = elem.options,
						    index = elem.selectedIndex,
						    one = elem.type === "select-one" || index < 0,
						    values = one ? null : [],
						    max = one ? index + 1 : options.length,
						    i = index < 0 ? max : one ? index : 0;
	
						for (; i < max; i++) {
							option = options[i];
	
							if ((option.selected || i === index) && (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
								value = jQuery(option).val();
	
								if (one) {
									return value;
								}
	
								values.push(value);
							}
						}
	
						return values;
					},
	
					set: function set(elem, value) {
						var optionSet,
						    option,
						    options = elem.options,
						    values = jQuery.makeArray(value),
						    i = options.length;
	
						while (i--) {
							option = options[i];
	
							if (jQuery.inArray(jQuery.valHooks.option.get(option), values) >= 0) {
								try {
									option.selected = optionSet = true;
								} catch (_) {
									option.scrollHeight;
								}
							} else {
								option.selected = false;
							}
						}
	
						if (!optionSet) {
							elem.selectedIndex = -1;
						}
	
						return options;
					}
				}
			}
		});
	
		jQuery.each(["radio", "checkbox"], function () {
			jQuery.valHooks[this] = {
				set: function set(elem, value) {
					if (jQuery.isArray(value)) {
						return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
					}
				}
			};
			if (!support.checkOn) {
				jQuery.valHooks[this].get = function (elem) {
					return elem.getAttribute("value") === null ? "on" : elem.value;
				};
			}
		});
	
		var nodeHook,
		    boolHook,
		    attrHandle = jQuery.expr.attrHandle,
		    ruseDefault = /^(?:checked|selected)$/i,
		    getSetAttribute = support.getSetAttribute,
		    getSetInput = support.input;
	
		jQuery.fn.extend({
			attr: function attr(name, value) {
				return access(this, jQuery.attr, name, value, arguments.length > 1);
			},
	
			removeAttr: function removeAttr(name) {
				return this.each(function () {
					jQuery.removeAttr(this, name);
				});
			}
		});
	
		jQuery.extend({
			attr: function attr(elem, name, value) {
				var hooks,
				    ret,
				    nType = elem.nodeType;
	
				if (!elem || nType === 3 || nType === 8 || nType === 2) {
					return;
				}
	
				if (_typeof(elem.getAttribute) === strundefined) {
					return jQuery.prop(elem, name, value);
				}
	
				if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
					name = name.toLowerCase();
					hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
				}
	
				if (value !== undefined) {
	
					if (value === null) {
						jQuery.removeAttr(elem, name);
					} else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
						return ret;
					} else {
						elem.setAttribute(name, value + "");
						return value;
					}
				} else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
					return ret;
				} else {
					ret = jQuery.find.attr(elem, name);
	
					return ret == null ? undefined : ret;
				}
			},
	
			removeAttr: function removeAttr(elem, value) {
				var name,
				    propName,
				    i = 0,
				    attrNames = value && value.match(rnotwhite);
	
				if (attrNames && elem.nodeType === 1) {
					while (name = attrNames[i++]) {
						propName = jQuery.propFix[name] || name;
	
						if (jQuery.expr.match.bool.test(name)) {
							if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
								elem[propName] = false;
							} else {
								elem[jQuery.camelCase("default-" + name)] = elem[propName] = false;
							}
						} else {
							jQuery.attr(elem, name, "");
						}
	
						elem.removeAttribute(getSetAttribute ? name : propName);
					}
				}
			},
	
			attrHooks: {
				type: {
					set: function set(elem, value) {
						if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
							var val = elem.value;
							elem.setAttribute("type", value);
							if (val) {
								elem.value = val;
							}
							return value;
						}
					}
				}
			}
		});
	
		boolHook = {
			set: function set(elem, value, name) {
				if (value === false) {
					jQuery.removeAttr(elem, name);
				} else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
					elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);
				} else {
					elem[jQuery.camelCase("default-" + name)] = elem[name] = true;
				}
	
				return name;
			}
		};
	
		jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
	
			var getter = attrHandle[name] || jQuery.find.attr;
	
			attrHandle[name] = getSetInput && getSetAttribute || !ruseDefault.test(name) ? function (elem, name, isXML) {
				var ret, handle;
				if (!isXML) {
					handle = attrHandle[name];
					attrHandle[name] = ret;
					ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
					attrHandle[name] = handle;
				}
				return ret;
			} : function (elem, name, isXML) {
				if (!isXML) {
					return elem[jQuery.camelCase("default-" + name)] ? name.toLowerCase() : null;
				}
			};
		});
	
		if (!getSetInput || !getSetAttribute) {
			jQuery.attrHooks.value = {
				set: function set(elem, value, name) {
					if (jQuery.nodeName(elem, "input")) {
						elem.defaultValue = value;
					} else {
						return nodeHook && nodeHook.set(elem, value, name);
					}
				}
			};
		}
	
		if (!getSetAttribute) {
			nodeHook = {
				set: function set(elem, value, name) {
					var ret = elem.getAttributeNode(name);
					if (!ret) {
						elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name));
					}
	
					ret.value = value += "";
	
					if (name === "value" || value === elem.getAttribute(name)) {
						return value;
					}
				}
			};
	
			attrHandle.id = attrHandle.name = attrHandle.coords = function (elem, name, isXML) {
				var ret;
				if (!isXML) {
					return (ret = elem.getAttributeNode(name)) && ret.value !== "" ? ret.value : null;
				}
			};
	
			jQuery.valHooks.button = {
				get: function get(elem, name) {
					var ret = elem.getAttributeNode(name);
					if (ret && ret.specified) {
						return ret.value;
					}
				},
				set: nodeHook.set
			};
	
			jQuery.attrHooks.contenteditable = {
				set: function set(elem, value, name) {
					nodeHook.set(elem, value === "" ? false : value, name);
				}
			};
	
			jQuery.each(["width", "height"], function (i, name) {
				jQuery.attrHooks[name] = {
					set: function set(elem, value) {
						if (value === "") {
							elem.setAttribute(name, "auto");
							return value;
						}
					}
				};
			});
		}
	
		if (!support.style) {
			jQuery.attrHooks.style = {
				get: function get(elem) {
					return elem.style.cssText || undefined;
				},
				set: function set(elem, value) {
					return elem.style.cssText = value + "";
				}
			};
		}
	
		var rfocusable = /^(?:input|select|textarea|button|object)$/i,
		    rclickable = /^(?:a|area)$/i;
	
		jQuery.fn.extend({
			prop: function prop(name, value) {
				return access(this, jQuery.prop, name, value, arguments.length > 1);
			},
	
			removeProp: function removeProp(name) {
				name = jQuery.propFix[name] || name;
				return this.each(function () {
					try {
						this[name] = undefined;
						delete this[name];
					} catch (e) {}
				});
			}
		});
	
		jQuery.extend({
			propFix: {
				"for": "htmlFor",
				"class": "className"
			},
	
			prop: function prop(elem, name, value) {
				var ret,
				    hooks,
				    notxml,
				    nType = elem.nodeType;
	
				if (!elem || nType === 3 || nType === 8 || nType === 2) {
					return;
				}
	
				notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
	
				if (notxml) {
					name = jQuery.propFix[name] || name;
					hooks = jQuery.propHooks[name];
				}
	
				if (value !== undefined) {
					return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : elem[name] = value;
				} else {
					return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name];
				}
			},
	
			propHooks: {
				tabIndex: {
					get: function get(elem) {
						var tabindex = jQuery.find.attr(elem, "tabindex");
	
						return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1;
					}
				}
			}
		});
	
		if (!support.hrefNormalized) {
			jQuery.each(["href", "src"], function (i, name) {
				jQuery.propHooks[name] = {
					get: function get(elem) {
						return elem.getAttribute(name, 4);
					}
				};
			});
		}
	
		if (!support.optSelected) {
			jQuery.propHooks.selected = {
				get: function get(elem) {
					var parent = elem.parentNode;
	
					if (parent) {
						parent.selectedIndex;
	
						if (parent.parentNode) {
							parent.parentNode.selectedIndex;
						}
					}
					return null;
				}
			};
		}
	
		jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			jQuery.propFix[this.toLowerCase()] = this;
		});
	
		if (!support.enctype) {
			jQuery.propFix.enctype = "encoding";
		}
	
		var rclass = /[\t\r\n\f]/g;
	
		jQuery.fn.extend({
			addClass: function addClass(value) {
				var classes,
				    elem,
				    cur,
				    clazz,
				    j,
				    finalValue,
				    i = 0,
				    len = this.length,
				    proceed = typeof value === "string" && value;
	
				if (jQuery.isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).addClass(value.call(this, j, this.className));
					});
				}
	
				if (proceed) {
					classes = (value || "").match(rnotwhite) || [];
	
					for (; i < len; i++) {
						elem = this[i];
						cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");
	
						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {
								if (cur.indexOf(" " + clazz + " ") < 0) {
									cur += clazz + " ";
								}
							}
	
							finalValue = jQuery.trim(cur);
							if (elem.className !== finalValue) {
								elem.className = finalValue;
							}
						}
					}
				}
	
				return this;
			},
	
			removeClass: function removeClass(value) {
				var classes,
				    elem,
				    cur,
				    clazz,
				    j,
				    finalValue,
				    i = 0,
				    len = this.length,
				    proceed = arguments.length === 0 || typeof value === "string" && value;
	
				if (jQuery.isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).removeClass(value.call(this, j, this.className));
					});
				}
				if (proceed) {
					classes = (value || "").match(rnotwhite) || [];
	
					for (; i < len; i++) {
						elem = this[i];
	
						cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");
	
						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {
								while (cur.indexOf(" " + clazz + " ") >= 0) {
									cur = cur.replace(" " + clazz + " ", " ");
								}
							}
	
							finalValue = value ? jQuery.trim(cur) : "";
							if (elem.className !== finalValue) {
								elem.className = finalValue;
							}
						}
					}
				}
	
				return this;
			},
	
			toggleClass: function toggleClass(value, stateVal) {
				var type = typeof value === "undefined" ? "undefined" : _typeof(value);
	
				if (typeof stateVal === "boolean" && type === "string") {
					return stateVal ? this.addClass(value) : this.removeClass(value);
				}
	
				if (jQuery.isFunction(value)) {
					return this.each(function (i) {
						jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
					});
				}
	
				return this.each(function () {
					if (type === "string") {
						var className,
						    i = 0,
						    self = jQuery(this),
						    classNames = value.match(rnotwhite) || [];
	
						while (className = classNames[i++]) {
							if (self.hasClass(className)) {
								self.removeClass(className);
							} else {
								self.addClass(className);
							}
						}
					} else if (type === strundefined || type === "boolean") {
						if (this.className) {
							jQuery._data(this, "__className__", this.className);
						}
	
						this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || "";
					}
				});
			},
	
			hasClass: function hasClass(selector) {
				var className = " " + selector + " ",
				    i = 0,
				    l = this.length;
				for (; i < l; i++) {
					if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
						return true;
					}
				}
	
				return false;
			}
		});
	
		jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {
			jQuery.fn[name] = function (data, fn) {
				return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
			};
		});
	
		jQuery.fn.extend({
			hover: function hover(fnOver, fnOut) {
				return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
			},
	
			bind: function bind(types, data, fn) {
				return this.on(types, null, data, fn);
			},
			unbind: function unbind(types, fn) {
				return this.off(types, null, fn);
			},
	
			delegate: function delegate(selector, types, data, fn) {
				return this.on(types, selector, data, fn);
			},
			undelegate: function undelegate(selector, types, fn) {
				return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
			}
		});
	
		var nonce = jQuery.now();
	
		var rquery = /\?/;
	
		var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	
		jQuery.parseJSON = function (data) {
			if (window.JSON && window.JSON.parse) {
				return window.JSON.parse(data + "");
			}
	
			var requireNonComma,
			    depth = null,
			    str = jQuery.trim(data + "");
	
			return str && !jQuery.trim(str.replace(rvalidtokens, function (token, comma, open, close) {
				if (requireNonComma && comma) {
					depth = 0;
				}
	
				if (depth === 0) {
					return token;
				}
	
				requireNonComma = open || comma;
	
				depth += !close - !open;
	
				return "";
			})) ? Function("return " + str)() : jQuery.error("Invalid JSON: " + data);
		};
	
		jQuery.parseXML = function (data) {
			var xml, tmp;
			if (!data || typeof data !== "string") {
				return null;
			}
			try {
				if (window.DOMParser) {
					tmp = new DOMParser();
					xml = tmp.parseFromString(data, "text/xml");
				} else {
					xml = new ActiveXObject("Microsoft.XMLDOM");
					xml.async = "false";
					xml.loadXML(data);
				}
			} catch (e) {
				xml = undefined;
			}
			if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
				jQuery.error("Invalid XML: " + data);
			}
			return xml;
		};
	
		var ajaxLocParts,
		    ajaxLocation,
		    rhash = /#.*$/,
		    rts = /([?&])_=[^&]*/,
		    rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
		    rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		    rnoContent = /^(?:GET|HEAD)$/,
		    rprotocol = /^\/\//,
		    rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		    prefilters = {},
		    transports = {},
		    allTypes = "*/".concat("*");
	
		try {
			ajaxLocation = location.href;
		} catch (e) {
			ajaxLocation = document.createElement("a");
			ajaxLocation.href = "";
			ajaxLocation = ajaxLocation.href;
		}
	
		ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
	
		function addToPrefiltersOrTransports(structure) {
			return function (dataTypeExpression, func) {
	
				if (typeof dataTypeExpression !== "string") {
					func = dataTypeExpression;
					dataTypeExpression = "*";
				}
	
				var dataType,
				    i = 0,
				    dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
	
				if (jQuery.isFunction(func)) {
					while (dataType = dataTypes[i++]) {
						if (dataType.charAt(0) === "+") {
							dataType = dataType.slice(1) || "*";
							(structure[dataType] = structure[dataType] || []).unshift(func);
						} else {
							(structure[dataType] = structure[dataType] || []).push(func);
						}
					}
				}
			};
		}
	
		function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
	
			var inspected = {},
			    seekingTransport = structure === transports;
	
			function inspect(dataType) {
				var selected;
				inspected[dataType] = true;
				jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
					var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
					if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
						options.dataTypes.unshift(dataTypeOrTransport);
						inspect(dataTypeOrTransport);
						return false;
					} else if (seekingTransport) {
						return !(selected = dataTypeOrTransport);
					}
				});
				return selected;
			}
	
			return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
		}
	
		function ajaxExtend(target, src) {
			var deep,
			    key,
			    flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
			for (key in src) {
				if (src[key] !== undefined) {
					(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
				}
			}
			if (deep) {
				jQuery.extend(true, target, deep);
			}
	
			return target;
		}
	
		function ajaxHandleResponses(s, jqXHR, responses) {
			var firstDataType,
			    ct,
			    finalDataType,
			    type,
			    contents = s.contents,
			    dataTypes = s.dataTypes;
	
			while (dataTypes[0] === "*") {
				dataTypes.shift();
				if (ct === undefined) {
					ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
				}
			}
	
			if (ct) {
				for (type in contents) {
					if (contents[type] && contents[type].test(ct)) {
						dataTypes.unshift(type);
						break;
					}
				}
			}
	
			if (dataTypes[0] in responses) {
				finalDataType = dataTypes[0];
			} else {
				for (type in responses) {
					if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
						finalDataType = type;
						break;
					}
					if (!firstDataType) {
						firstDataType = type;
					}
				}
	
				finalDataType = finalDataType || firstDataType;
			}
	
			if (finalDataType) {
				if (finalDataType !== dataTypes[0]) {
					dataTypes.unshift(finalDataType);
				}
				return responses[finalDataType];
			}
		}
	
		function ajaxConvert(s, response, jqXHR, isSuccess) {
			var conv2,
			    current,
			    conv,
			    tmp,
			    prev,
			    converters = {},
			    dataTypes = s.dataTypes.slice();
	
			if (dataTypes[1]) {
				for (conv in s.converters) {
					converters[conv.toLowerCase()] = s.converters[conv];
				}
			}
	
			current = dataTypes.shift();
	
			while (current) {
	
				if (s.responseFields[current]) {
					jqXHR[s.responseFields[current]] = response;
				}
	
				if (!prev && isSuccess && s.dataFilter) {
					response = s.dataFilter(response, s.dataType);
				}
	
				prev = current;
				current = dataTypes.shift();
	
				if (current) {
					if (current === "*") {
	
						current = prev;
					} else if (prev !== "*" && prev !== current) {
						conv = converters[prev + " " + current] || converters["* " + current];
	
						if (!conv) {
							for (conv2 in converters) {
								tmp = conv2.split(" ");
								if (tmp[1] === current) {
									conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
									if (conv) {
										if (conv === true) {
											conv = converters[conv2];
										} else if (converters[conv2] !== true) {
											current = tmp[0];
											dataTypes.unshift(tmp[1]);
										}
										break;
									}
								}
							}
						}
	
						if (conv !== true) {
							if (conv && s["throws"]) {
								response = conv(response);
							} else {
								try {
									response = conv(response);
								} catch (e) {
									return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
								}
							}
						}
					}
				}
			}
	
			return { state: "success", data: response };
		}
	
		jQuery.extend({
			active: 0,
	
			lastModified: {},
			etag: {},
	
			ajaxSettings: {
				url: ajaxLocation,
				type: "GET",
				isLocal: rlocalProtocol.test(ajaxLocParts[1]),
				global: true,
				processData: true,
				async: true,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	
	
				accepts: {
					"*": allTypes,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
	
				contents: {
					xml: /xml/,
					html: /html/,
					json: /json/
				},
	
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
	
				converters: {
					"* text": String,
	
					"text html": true,
	
					"text json": jQuery.parseJSON,
	
					"text xml": jQuery.parseXML
				},
	
				flatOptions: {
					url: true,
					context: true
				}
			},
	
			ajaxSetup: function ajaxSetup(target, settings) {
				return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
			},
	
			ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
			ajaxTransport: addToPrefiltersOrTransports(transports),
	
			ajax: function ajax(url, options) {
				if ((typeof url === "undefined" ? "undefined" : _typeof(url)) === "object") {
					options = url;
					url = undefined;
				}
	
				options = options || {};
	
				var parts,
				    i,
				    cacheURL,
				    responseHeadersString,
				    timeoutTimer,
				    fireGlobals,
				    transport,
				    responseHeaders,
				    s = jQuery.ajaxSetup({}, options),
				    callbackContext = s.context || s,
				    globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
				    deferred = jQuery.Deferred(),
				    completeDeferred = jQuery.Callbacks("once memory"),
				    _statusCode = s.statusCode || {},
				    requestHeaders = {},
				    requestHeadersNames = {},
				    state = 0,
				    strAbort = "canceled",
				    jqXHR = {
					readyState: 0,
	
					getResponseHeader: function getResponseHeader(key) {
						var match;
						if (state === 2) {
							if (!responseHeaders) {
								responseHeaders = {};
								while (match = rheaders.exec(responseHeadersString)) {
									responseHeaders[match[1].toLowerCase()] = match[2];
								}
							}
							match = responseHeaders[key.toLowerCase()];
						}
						return match == null ? null : match;
					},
	
					getAllResponseHeaders: function getAllResponseHeaders() {
						return state === 2 ? responseHeadersString : null;
					},
	
					setRequestHeader: function setRequestHeader(name, value) {
						var lname = name.toLowerCase();
						if (!state) {
							name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
							requestHeaders[name] = value;
						}
						return this;
					},
	
					overrideMimeType: function overrideMimeType(type) {
						if (!state) {
							s.mimeType = type;
						}
						return this;
					},
	
					statusCode: function statusCode(map) {
						var code;
						if (map) {
							if (state < 2) {
								for (code in map) {
									_statusCode[code] = [_statusCode[code], map[code]];
								}
							} else {
								jqXHR.always(map[jqXHR.status]);
							}
						}
						return this;
					},
	
					abort: function abort(statusText) {
						var finalText = statusText || strAbort;
						if (transport) {
							transport.abort(finalText);
						}
						done(0, finalText);
						return this;
					}
				};
	
				deferred.promise(jqXHR).complete = completeDeferred.add;
				jqXHR.success = jqXHR.done;
				jqXHR.error = jqXHR.fail;
	
				s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
	
				s.type = options.method || options.type || s.method || s.type;
	
				s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];
	
				if (s.crossDomain == null) {
					parts = rurl.exec(s.url.toLowerCase());
					s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
				}
	
				if (s.data && s.processData && typeof s.data !== "string") {
					s.data = jQuery.param(s.data, s.traditional);
				}
	
				inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
	
				if (state === 2) {
					return jqXHR;
				}
	
				fireGlobals = s.global;
	
				if (fireGlobals && jQuery.active++ === 0) {
					jQuery.event.trigger("ajaxStart");
				}
	
				s.type = s.type.toUpperCase();
	
				s.hasContent = !rnoContent.test(s.type);
	
				cacheURL = s.url;
	
				if (!s.hasContent) {
					if (s.data) {
						cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;
	
						delete s.data;
					}
	
					if (s.cache === false) {
						s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
					}
				}
	
				if (s.ifModified) {
					if (jQuery.lastModified[cacheURL]) {
						jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
					}
					if (jQuery.etag[cacheURL]) {
						jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
					}
				}
	
				if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
					jqXHR.setRequestHeader("Content-Type", s.contentType);
				}
	
				jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
	
				for (i in s.headers) {
					jqXHR.setRequestHeader(i, s.headers[i]);
				}
	
				if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
					return jqXHR.abort();
				}
	
				strAbort = "abort";
	
				for (i in { success: 1, error: 1, complete: 1 }) {
					jqXHR[i](s[i]);
				}
	
				transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
	
				if (!transport) {
					done(-1, "No Transport");
				} else {
					jqXHR.readyState = 1;
	
					if (fireGlobals) {
						globalEventContext.trigger("ajaxSend", [jqXHR, s]);
					}
	
					if (s.async && s.timeout > 0) {
						timeoutTimer = setTimeout(function () {
							jqXHR.abort("timeout");
						}, s.timeout);
					}
	
					try {
						state = 1;
						transport.send(requestHeaders, done);
					} catch (e) {
						if (state < 2) {
							done(-1, e);
						} else {
							throw e;
						}
					}
				}
	
				function done(status, nativeStatusText, responses, headers) {
					var isSuccess,
					    success,
					    error,
					    response,
					    modified,
					    statusText = nativeStatusText;
	
					if (state === 2) {
						return;
					}
	
					state = 2;
	
					if (timeoutTimer) {
						clearTimeout(timeoutTimer);
					}
	
					transport = undefined;
	
					responseHeadersString = headers || "";
	
					jqXHR.readyState = status > 0 ? 4 : 0;
	
					isSuccess = status >= 200 && status < 300 || status === 304;
	
					if (responses) {
						response = ajaxHandleResponses(s, jqXHR, responses);
					}
	
					response = ajaxConvert(s, response, jqXHR, isSuccess);
	
					if (isSuccess) {
						if (s.ifModified) {
							modified = jqXHR.getResponseHeader("Last-Modified");
							if (modified) {
								jQuery.lastModified[cacheURL] = modified;
							}
							modified = jqXHR.getResponseHeader("etag");
							if (modified) {
								jQuery.etag[cacheURL] = modified;
							}
						}
	
						if (status === 204 || s.type === "HEAD") {
							statusText = "nocontent";
						} else if (status === 304) {
							statusText = "notmodified";
						} else {
							statusText = response.state;
							success = response.data;
							error = response.error;
							isSuccess = !error;
						}
					} else {
						error = statusText;
						if (status || !statusText) {
							statusText = "error";
							if (status < 0) {
								status = 0;
							}
						}
					}
	
					jqXHR.status = status;
					jqXHR.statusText = (nativeStatusText || statusText) + "";
	
					if (isSuccess) {
						deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
					} else {
						deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
					}
	
					jqXHR.statusCode(_statusCode);
					_statusCode = undefined;
	
					if (fireGlobals) {
						globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
					}
	
					completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
	
					if (fireGlobals) {
						globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
	
						if (! --jQuery.active) {
							jQuery.event.trigger("ajaxStop");
						}
					}
				}
	
				return jqXHR;
			},
	
			getJSON: function getJSON(url, data, callback) {
				return jQuery.get(url, data, callback, "json");
			},
	
			getScript: function getScript(url, callback) {
				return jQuery.get(url, undefined, callback, "script");
			}
		});
	
		jQuery.each(["get", "post"], function (i, method) {
			jQuery[method] = function (url, data, callback, type) {
				if (jQuery.isFunction(data)) {
					type = type || callback;
					callback = data;
					data = undefined;
				}
	
				return jQuery.ajax({
					url: url,
					type: method,
					dataType: type,
					data: data,
					success: callback
				});
			};
		});
	
		jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
			jQuery.fn[type] = function (fn) {
				return this.on(type, fn);
			};
		});
	
		jQuery._evalUrl = function (url) {
			return jQuery.ajax({
				url: url,
				type: "GET",
				dataType: "script",
				async: false,
				global: false,
				"throws": true
			});
		};
	
		jQuery.fn.extend({
			wrapAll: function wrapAll(html) {
				if (jQuery.isFunction(html)) {
					return this.each(function (i) {
						jQuery(this).wrapAll(html.call(this, i));
					});
				}
	
				if (this[0]) {
					var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
	
					if (this[0].parentNode) {
						wrap.insertBefore(this[0]);
					}
	
					wrap.map(function () {
						var elem = this;
	
						while (elem.firstChild && elem.firstChild.nodeType === 1) {
							elem = elem.firstChild;
						}
	
						return elem;
					}).append(this);
				}
	
				return this;
			},
	
			wrapInner: function wrapInner(html) {
				if (jQuery.isFunction(html)) {
					return this.each(function (i) {
						jQuery(this).wrapInner(html.call(this, i));
					});
				}
	
				return this.each(function () {
					var self = jQuery(this),
					    contents = self.contents();
	
					if (contents.length) {
						contents.wrapAll(html);
					} else {
						self.append(html);
					}
				});
			},
	
			wrap: function wrap(html) {
				var isFunction = jQuery.isFunction(html);
	
				return this.each(function (i) {
					jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
				});
			},
	
			unwrap: function unwrap() {
				return this.parent().each(function () {
					if (!jQuery.nodeName(this, "body")) {
						jQuery(this).replaceWith(this.childNodes);
					}
				}).end();
			}
		});
	
		jQuery.expr.filters.hidden = function (elem) {
			return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || !support.reliableHiddenOffsets() && (elem.style && elem.style.display || jQuery.css(elem, "display")) === "none";
		};
	
		jQuery.expr.filters.visible = function (elem) {
			return !jQuery.expr.filters.hidden(elem);
		};
	
		var r20 = /%20/g,
		    rbracket = /\[\]$/,
		    rCRLF = /\r?\n/g,
		    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		    rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
		function buildParams(prefix, obj, traditional, add) {
			var name;
	
			if (jQuery.isArray(obj)) {
				jQuery.each(obj, function (i, v) {
					if (traditional || rbracket.test(prefix)) {
						add(prefix, v);
					} else {
						buildParams(prefix + "[" + ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" ? i : "") + "]", v, traditional, add);
					}
				});
			} else if (!traditional && jQuery.type(obj) === "object") {
				for (name in obj) {
					buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
				}
			} else {
				add(prefix, obj);
			}
		}
	
		jQuery.param = function (a, traditional) {
			var prefix,
			    s = [],
			    add = function add(key, value) {
				value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
				s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
			};
	
			if (traditional === undefined) {
				traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
			}
	
			if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
				jQuery.each(a, function () {
					add(this.name, this.value);
				});
			} else {
				for (prefix in a) {
					buildParams(prefix, a[prefix], traditional, add);
				}
			}
	
			return s.join("&").replace(r20, "+");
		};
	
		jQuery.fn.extend({
			serialize: function serialize() {
				return jQuery.param(this.serializeArray());
			},
			serializeArray: function serializeArray() {
				return this.map(function () {
					var elements = jQuery.prop(this, "elements");
					return elements ? jQuery.makeArray(elements) : this;
				}).filter(function () {
					var type = this.type;
	
					return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
				}).map(function (i, elem) {
					var val = jQuery(this).val();
	
					return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
						return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
					}) : { name: elem.name, value: val.replace(rCRLF, "\r\n") };
				}).get();
			}
		});
	
		jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ? function () {
			return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && createStandardXHR() || createActiveXHR();
		} : createStandardXHR;
	
		var xhrId = 0,
		    xhrCallbacks = {},
		    xhrSupported = jQuery.ajaxSettings.xhr();
	
		if (window.ActiveXObject) {
			jQuery(window).on("unload", function () {
				for (var key in xhrCallbacks) {
					xhrCallbacks[key](undefined, true);
				}
			});
		}
	
		support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
		xhrSupported = support.ajax = !!xhrSupported;
	
		if (xhrSupported) {
	
			jQuery.ajaxTransport(function (options) {
				if (!options.crossDomain || support.cors) {
	
					var _callback;
	
					return {
						send: function send(headers, complete) {
							var i,
							    xhr = options.xhr(),
							    id = ++xhrId;
	
							xhr.open(options.type, options.url, options.async, options.username, options.password);
	
							if (options.xhrFields) {
								for (i in options.xhrFields) {
									xhr[i] = options.xhrFields[i];
								}
							}
	
							if (options.mimeType && xhr.overrideMimeType) {
								xhr.overrideMimeType(options.mimeType);
							}
	
							if (!options.crossDomain && !headers["X-Requested-With"]) {
								headers["X-Requested-With"] = "XMLHttpRequest";
							}
	
							for (i in headers) {
								if (headers[i] !== undefined) {
									xhr.setRequestHeader(i, headers[i] + "");
								}
							}
	
							xhr.send(options.hasContent && options.data || null);
	
							_callback = function callback(_, isAbort) {
								var status, statusText, responses;
	
								if (_callback && (isAbort || xhr.readyState === 4)) {
									delete xhrCallbacks[id];
									_callback = undefined;
									xhr.onreadystatechange = jQuery.noop;
	
									if (isAbort) {
										if (xhr.readyState !== 4) {
											xhr.abort();
										}
									} else {
										responses = {};
										status = xhr.status;
	
										if (typeof xhr.responseText === "string") {
											responses.text = xhr.responseText;
										}
	
										try {
											statusText = xhr.statusText;
										} catch (e) {
											statusText = "";
										}
	
										if (!status && options.isLocal && !options.crossDomain) {
											status = responses.text ? 200 : 404;
										} else if (status === 1223) {
											status = 204;
										}
									}
								}
	
								if (responses) {
									complete(status, statusText, responses, xhr.getAllResponseHeaders());
								}
							};
	
							if (!options.async) {
								_callback();
							} else if (xhr.readyState === 4) {
								setTimeout(_callback);
							} else {
								xhr.onreadystatechange = xhrCallbacks[id] = _callback;
							}
						},
	
						abort: function abort() {
							if (_callback) {
								_callback(undefined, true);
							}
						}
					};
				}
			});
		}
	
		function createStandardXHR() {
			try {
				return new window.XMLHttpRequest();
			} catch (e) {}
		}
	
		function createActiveXHR() {
			try {
				return new window.ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {}
		}
	
		jQuery.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /(?:java|ecma)script/
			},
			converters: {
				"text script": function textScript(text) {
					jQuery.globalEval(text);
					return text;
				}
			}
		});
	
		jQuery.ajaxPrefilter("script", function (s) {
			if (s.cache === undefined) {
				s.cache = false;
			}
			if (s.crossDomain) {
				s.type = "GET";
				s.global = false;
			}
		});
	
		jQuery.ajaxTransport("script", function (s) {
			if (s.crossDomain) {
	
				var script,
				    head = document.head || jQuery("head")[0] || document.documentElement;
	
				return {
	
					send: function send(_, callback) {
	
						script = document.createElement("script");
	
						script.async = true;
	
						if (s.scriptCharset) {
							script.charset = s.scriptCharset;
						}
	
						script.src = s.url;
	
						script.onload = script.onreadystatechange = function (_, isAbort) {
	
							if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
								script.onload = script.onreadystatechange = null;
	
								if (script.parentNode) {
									script.parentNode.removeChild(script);
								}
	
								script = null;
	
								if (!isAbort) {
									callback(200, "success");
								}
							}
						};
	
						head.insertBefore(script, head.firstChild);
					},
	
					abort: function abort() {
						if (script) {
							script.onload(undefined, true);
						}
					}
				};
			}
		});
	
		var oldCallbacks = [],
		    rjsonp = /(=)\?(?=&|$)|\?\?/;
	
		jQuery.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function jsonpCallback() {
				var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
				this[callback] = true;
				return callback;
			}
		});
	
		jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
	
			var callbackName,
			    overwritten,
			    responseContainer,
			    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
	
			if (jsonProp || s.dataTypes[0] === "jsonp") {
				callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
	
				if (jsonProp) {
					s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
				} else if (s.jsonp !== false) {
					s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
				}
	
				s.converters["script json"] = function () {
					if (!responseContainer) {
						jQuery.error(callbackName + " was not called");
					}
					return responseContainer[0];
				};
	
				s.dataTypes[0] = "json";
	
				overwritten = window[callbackName];
				window[callbackName] = function () {
					responseContainer = arguments;
				};
	
				jqXHR.always(function () {
					window[callbackName] = overwritten;
	
					if (s[callbackName]) {
						s.jsonpCallback = originalSettings.jsonpCallback;
	
						oldCallbacks.push(callbackName);
					}
	
					if (responseContainer && jQuery.isFunction(overwritten)) {
						overwritten(responseContainer[0]);
					}
	
					responseContainer = overwritten = undefined;
				});
	
				return "script";
			}
		});
	
		jQuery.parseHTML = function (data, context, keepScripts) {
			if (!data || typeof data !== "string") {
				return null;
			}
			if (typeof context === "boolean") {
				keepScripts = context;
				context = false;
			}
			context = context || document;
	
			var parsed = rsingleTag.exec(data),
			    scripts = !keepScripts && [];
	
			if (parsed) {
				return [context.createElement(parsed[1])];
			}
	
			parsed = jQuery.buildFragment([data], context, scripts);
	
			if (scripts && scripts.length) {
				jQuery(scripts).remove();
			}
	
			return jQuery.merge([], parsed.childNodes);
		};
	
		var _load = jQuery.fn.load;
	
		jQuery.fn.load = function (url, params, callback) {
			if (typeof url !== "string" && _load) {
				return _load.apply(this, arguments);
			}
	
			var selector,
			    response,
			    type,
			    self = this,
			    off = url.indexOf(" ");
	
			if (off >= 0) {
				selector = jQuery.trim(url.slice(off, url.length));
				url = url.slice(0, off);
			}
	
			if (jQuery.isFunction(params)) {
				callback = params;
				params = undefined;
			} else if (params && (typeof params === "undefined" ? "undefined" : _typeof(params)) === "object") {
				type = "POST";
			}
	
			if (self.length > 0) {
				jQuery.ajax({
					url: url,
	
					type: type,
					dataType: "html",
					data: params
				}).done(function (responseText) {
					response = arguments;
	
					self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
				}).complete(callback && function (jqXHR, status) {
					self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
				});
			}
	
			return this;
		};
	
		jQuery.expr.filters.animated = function (elem) {
			return jQuery.grep(jQuery.timers, function (fn) {
				return elem === fn.elem;
			}).length;
		};
	
		var docElem = window.document.documentElement;
	
		function getWindow(elem) {
			return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
		}
	
		jQuery.offset = {
			setOffset: function setOffset(elem, options, i) {
				var curPosition,
				    curLeft,
				    curCSSTop,
				    curTop,
				    curOffset,
				    curCSSLeft,
				    calculatePosition,
				    position = jQuery.css(elem, "position"),
				    curElem = jQuery(elem),
				    props = {};
	
				if (position === "static") {
					elem.style.position = "relative";
				}
	
				curOffset = curElem.offset();
				curCSSTop = jQuery.css(elem, "top");
				curCSSLeft = jQuery.css(elem, "left");
				calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1;
	
				if (calculatePosition) {
					curPosition = curElem.position();
					curTop = curPosition.top;
					curLeft = curPosition.left;
				} else {
					curTop = parseFloat(curCSSTop) || 0;
					curLeft = parseFloat(curCSSLeft) || 0;
				}
	
				if (jQuery.isFunction(options)) {
					options = options.call(elem, i, curOffset);
				}
	
				if (options.top != null) {
					props.top = options.top - curOffset.top + curTop;
				}
				if (options.left != null) {
					props.left = options.left - curOffset.left + curLeft;
				}
	
				if ("using" in options) {
					options.using.call(elem, props);
				} else {
					curElem.css(props);
				}
			}
		};
	
		jQuery.fn.extend({
			offset: function offset(options) {
				if (arguments.length) {
					return options === undefined ? this : this.each(function (i) {
						jQuery.offset.setOffset(this, options, i);
					});
				}
	
				var docElem,
				    win,
				    box = { top: 0, left: 0 },
				    elem = this[0],
				    doc = elem && elem.ownerDocument;
	
				if (!doc) {
					return;
				}
	
				docElem = doc.documentElement;
	
				if (!jQuery.contains(docElem, elem)) {
					return box;
				}
	
				if (_typeof(elem.getBoundingClientRect) !== strundefined) {
					box = elem.getBoundingClientRect();
				}
				win = getWindow(doc);
				return {
					top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
					left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
				};
			},
	
			position: function position() {
				if (!this[0]) {
					return;
				}
	
				var offsetParent,
				    offset,
				    parentOffset = { top: 0, left: 0 },
				    elem = this[0];
	
				if (jQuery.css(elem, "position") === "fixed") {
					offset = elem.getBoundingClientRect();
				} else {
					offsetParent = this.offsetParent();
	
					offset = this.offset();
					if (!jQuery.nodeName(offsetParent[0], "html")) {
						parentOffset = offsetParent.offset();
					}
	
					parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
					parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
				}
	
				return {
					top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
					left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
				};
			},
	
			offsetParent: function offsetParent() {
				return this.map(function () {
					var offsetParent = this.offsetParent || docElem;
	
					while (offsetParent && !jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static") {
						offsetParent = offsetParent.offsetParent;
					}
					return offsetParent || docElem;
				});
			}
		});
	
		jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
			var top = /Y/.test(prop);
	
			jQuery.fn[method] = function (val) {
				return access(this, function (elem, method, val) {
					var win = getWindow(elem);
	
					if (val === undefined) {
						return win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method];
					}
	
					if (win) {
						win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop());
					} else {
						elem[method] = val;
					}
				}, method, val, arguments.length, null);
			};
		});
	
		jQuery.each(["top", "left"], function (i, prop) {
			jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
				if (computed) {
					computed = curCSS(elem, prop);
	
					return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
				}
			});
		});
	
		jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
			jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {
				jQuery.fn[funcName] = function (margin, value) {
					var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
					    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
	
					return access(this, function (elem, type, value) {
						var doc;
	
						if (jQuery.isWindow(elem)) {
							return elem.document.documentElement["client" + name];
						}
	
						if (elem.nodeType === 9) {
							doc = elem.documentElement;
	
							return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
						}
	
						return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
					}, type, chainable ? margin : undefined, chainable, null);
				};
			});
		});
	
		jQuery.fn.size = function () {
			return this.length;
		};
	
		jQuery.fn.andSelf = jQuery.fn.addBack;
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return jQuery;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
	
		var _jQuery = window.jQuery,
		    _$ = window.$;
	
		jQuery.noConflict = function (deep) {
			if (window.$ === jQuery) {
				window.$ = _$;
			}
	
			if (deep && window.jQuery === jQuery) {
				window.jQuery = _jQuery;
			}
	
			return jQuery;
		};
	
		if ((typeof noGlobal === "undefined" ? "undefined" : _typeof(noGlobal)) === strundefined) {
			window.jQuery = window.$ = jQuery;
		}
	
		return jQuery;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
	
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _template = __webpack_require__(15);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _jquery = __webpack_require__(12);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Console($node) {
	
	  var html = _template2.default;
	  var $tools = (0, _jquery2.default)(html);
	
	  this.logList = [];
	
	  this.logType = 0;
	
	  this.$root = $node;
	
	  this.$root.find('.console-pane').append($tools);
	
	  this._overrideConsole();
	  this._overrideOnerror();
	
	  this._bindEvent();
	}
	
	Console.prototype._overrideConsole = function () {
	  var _this = this;
	
	  var _log = window.console.log;
	  var _warn = window.console.warn;
	  var _error = window.console.error;
	  var _info = window.console.info;
	
	  console.log = function (message) {
	    _this.logList.push({ message: message, type: 1 });
	    _log(message);
	    _this._printLog(_this.logType);
	  };
	  console.warn = function (message) {
	    _this.logList.push({ message: message, type: 2 });
	    _warn(message);
	    _this._printLog(_this.logType);
	  };
	  console.info = function (message) {
	    _this.logList.push({ message: message, type: 3 });
	    _info(message);
	    _this._printLog(_this.logType);
	  };
	  console.error = function (message) {
	    _this.logList.push({ message: message, type: 4 });
	    _error(message);
	    _this._printLog(_this.logType);
	  };
	};
	
	Console.prototype._printLog = function (type) {
	  var filterArray = void 0;
	  if (type === 0) {
	    filterArray = this.logList;
	  } else {
	    filterArray = this.logList.filter(function (item) {
	      return item.type === type;
	    });
	  }
	
	  this._render(filterArray);
	};
	
	Console.prototype._overrideOnerror = function () {
	  var _onerror = window.onerror;
	
	  var self = this;
	
	  window.onerror = function (message, source, lineno, colno, error) {
	    self.logList.push({
	      message: message,
	      source: source,
	      lineno: lineno,
	      colno: colno,
	      error: error,
	      type: 4
	    });
	    self._printLog(self.$root, self.logType);
	    _onerror(message, source, lineno, colno, error);
	  };
	};
	
	Console.prototype._render = function (array) {
	  this.$root.find(".log-container").empty();
	  var $logitem = (0, _jquery2.default)('<div class="logitem"></div>');
	
	  for (var key in array) {
	    var $item = $logitem.clone();
	    var data = array[key];
	    if (_typeof(data.message) === 'object') {
	      $item.text(JSON.stringify(data.message));
	    } else {
	      $item.text(data.message);
	    }
	    if (data.type === 2) {
	      $item.addClass('t-warn');
	    } else if (data.type === 5 || data.type === 4) {
	      $item.addClass('t-error');
	    } else if (data.type === 3) {
	      $item.addClass('t-info');
	    } else {
	      $item.addClass('t-log');
	    }
	
	    this.$root.find('.log-container').append($item);
	  }
	};
	
	Console.prototype._clear = function () {
	  this.$root.find(".log-container").empty();
	  this.logList = [];
	};
	
	Console.prototype._bindEvent = function () {
	  var self = this;
	
	  self.$root.on("click", ".tools > div", function () {
	    self.$root.find(".tools > div").removeClass('focus');
	    var $this = (0, _jquery2.default)(this);
	    $this.addClass('focus');
	
	    var type = void 0;
	    if ($this.hasClass('log')) {
	      type = 1;
	    } else if ($this.hasClass('warn')) {
	      type = 2;
	    } else if ($this.hasClass('error')) {
	      type = 4;
	    } else if ($this.hasClass('info')) {
	      type = 3;
	    } else {
	      type = 0;
	    }
	
	    self._printLog(type);
	  });
	
	  self.$root.on('click', '.tools > .clear', function () {
	    self._clear();
	  });
	};
	
	exports.default = Console;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"tools\">\r\n  <a class=\"clear\">Clear</a>\r\n  <div class=\"all focus\">All</div>\r\n  <div class=\"error\">Error</div>\r\n  <div class=\"warn\">Warn</div>\r\n  <div class=\"info\">Info</div>\r\n  <div class=\"log\">Log</div>\r\n</div>\r\n<div class=\"log-container\"></div>\r\n";

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map