(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ireactivity/es5"));
	else if(typeof define === 'function' && define.amd)
		define(["ireactivity/es5"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("ireactivity/es5")) : factory(root["ireactivity/es5"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var get = function get(path) {
    var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';

    path = Array.isArray(path) ? path : path.split(separator);

    var readers = path.map(function (key) {
        return function (context) {
            if (context instanceof Object) {
                return context[key] === undefined ? undefined : context[key];
            } else {
                return undefined;
            }
        };
    });

    return function (object) {
        object = object instanceof Object ? object : {};
        var context = object;

        for (var index = 0; index < readers.length; index++) {
            if (context === undefined) {
                break;
            }

            context = readers[index](context);
        }

        return context;
    };
};

var set = function set(path) {
    var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';

    path = Array.isArray(path) ? path : path.split(separator);

    var keys = [].concat(_toConsumableArray(path));
    var last = keys.pop();

    var writers = keys.map(function (key) {
        return function (context) {
            if (!(context[key] instanceof Object)) {
                context[key] = {};
            }

            return context[key];
        };
    });

    return function (object) {
        return function (value) {
            object = object instanceof Object ? object : {};
            var context = object;

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = writers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var writer = _step.value;

                    context = writer(context);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            context[last] = value;
            return object;
        };
    };
};

var del = function del(path) {
    var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';

    path = Array.isArray(path) ? path : path.split(separator);

    var keys = [].concat(_toConsumableArray(path));
    var last = keys.pop();

    var items = keys.map(function (key) {
        return function (context) {
            return context[key] instanceof Object ? context[key] : undefined;
        };
    });

    return function (object) {
        object = object instanceof Object ? object : {};
        var context = object;

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var writer = _step2.value;

                if (context instanceof Object) {
                    context = writer(context);
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        if (context instanceof Object) {
            delete context[last];
        }

        return object;
    };
};

module.exports.get = get;
module.exports.set = set;
module.exports.del = del;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ireactivity = __webpack_require__(1);
var up = ireactivity.up;

var _require = __webpack_require__(0),
    get = _require.get,
    set = _require.set;

var input = function input(model, path) {
    var next = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return null;
    };

    return {
        onChange: function onChange(event) {
            return up(model, function () {
                var value = event.target.value;
                set(path)(model)(value);
                next(value);
            });
        },
        value: get(path)(model)
    };
};

var submit = function submit() {
    var next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
        return null;
    };

    return {
        onSubmit: function onSubmit(event) {
            event.preventDefault();
            next(event);
        }
    };
};

module.exports = Object.assign({}, ireactivity, {
    input: input,
    submit: submit
});

/***/ })
/******/ ]);
});