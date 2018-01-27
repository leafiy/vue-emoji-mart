(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueEmojiMart"] = factory();
	else
		root["VueEmojiMart"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__anchors__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__anchors__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__category__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emoji__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__emoji__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__picker__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__picker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__preview__ = __webpack_require__(10);
/* unused harmony reexport Preview */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__search__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__skins__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__skins__["a"]; });








/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSanitizedData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return intersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deepMerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return unifiedToNative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return loadEmojiData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__build_search__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__build_search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__build_search__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(2);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }




var COLONS_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;
var SKINS = ['1F3FA', '1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'];

function unifiedToNative(unified) {
  var unicodes = unified.split('-'),
      codePoints = unicodes.map(function (u) {
    return '0x' + u;
  });

  return String.fromCodePoint.apply(String, _toConsumableArray(codePoints));
}

function sanitize(emoji) {
  var name = emoji.name,
      short_names = emoji.short_names,
      skin_tone = emoji.skin_tone,
      skin_variations = emoji.skin_variations,
      emoticons = emoji.emoticons,
      unified = emoji.unified,
      custom = emoji.custom,
      imageUrl = emoji.imageUrl,
      id = emoji.id || short_names[0],
      colons = ':' + id + ':';


  if (custom) {
    return {
      id: id,
      name: name,
      colons: colons,
      emoticons: emoticons,
      custom: custom,
      imageUrl: imageUrl
    };
  }

  if (skin_tone) {
    colons += ':skin-tone-' + skin_tone + ':';
  }

  return {
    id: id,
    name: name,
    colons: colons,
    emoticons: emoticons,
    unified: unified.toLowerCase(),
    skin: skin_tone || (skin_variations ? 1 : null),
    native: unifiedToNative(unified)
  };
}

function getSanitizedData() {
  return sanitize(getData.apply(undefined, arguments));
}

function getData(emoji, skin, set) {
  var data = window.emojiJSON;
  var emojiData = {};

  if (typeof emoji == 'string') {
    var matches = emoji.match(COLONS_REGEX);

    if (matches) {
      emoji = matches[1];

      if (matches[2]) {
        skin = parseInt(matches[2]);
      }
    }

    if (data.short_names.hasOwnProperty(emoji)) {
      emoji = data.short_names[emoji];
    }

    if (data.emojis.hasOwnProperty(emoji)) {
      emojiData = data.emojis[emoji];
    }
  } else if (emoji.custom) {
    var tmp = {};

    tmp.search = __WEBPACK_IMPORTED_MODULE_0__build_search___default()({
      short_names: emoji.short_names,
      name: emoji.name,
      keywords: emoji.keywords,
      emoticons: emoji.emoticons
    });

    tmp.search = tmp.search.join(',');
    emojiData = emoji;
    emojiData.search = tmp.search;
  } else if (emoji.id) {
    if (data.short_names.hasOwnProperty(emoji.id)) {
      emoji.id = data.short_names[emoji.id];
    }

    if (data.emojis.hasOwnProperty(emoji.id)) {
      emojiData = data.emojis[emoji.id];
      skin || (skin = emoji.skin);
    }
  }

  emojiData.emoticons || (emojiData.emoticons = []);
  emojiData.variations || (emojiData.variations = []);

  if (emojiData.skin_variations && skin > 1 && set) {
    emojiData = JSON.parse(JSON.stringify(emojiData));

    var skinKey = SKINS[skin - 1],
        variationData = emojiData.skin_variations[skinKey];

    if (!variationData.variations && emojiData.variations) {
      delete emojiData.variations;
    }

    if (variationData['has_img_' + set]) {
      emojiData.skin_tone = skin;

      for (var k in variationData) {
        var v = variationData[k];
        emojiData[k] = v;
      }
    }
  }

  if (emojiData.variations && emojiData.variations.length) {
    emojiData = JSON.parse(JSON.stringify(emojiData));
    emojiData.unified = emojiData.variations.shift();
  }

  return emojiData;
}

function intersect(a, b) {
  var aSet = new Set(a),
      bSet = new Set(b),
      intersection = null;

  intersection = new Set([].concat(_toConsumableArray(aSet)).filter(function (x) {
    return bSet.has(x);
  }));

  return Array.from(intersection);
}

function deepMerge(a, b) {
  var o = {};

  for (var key in a) {
    var originalValue = a[key],
        value = originalValue;

    if (b.hasOwnProperty(key)) {
      value = b[key];
    }

    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      value = deepMerge(originalValue, value);
    }

    o[key] = value;
  }

  return o;
}

function loadEmojiData(url) {
  var version = '1.0.5';
  var cacheVersion = __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].get('version');
  var data = __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].get('data');
  if (!data || version !== cacheVersion) {
    return fetch(url).then(function (r) {
      return r.json();
    }).then(function (data) {
      __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].set('data', data);
      __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].set('version', version);
      window.emojiJSON = data;
      return data;
    });
  } else {
    window.emojiJSON = data;
    return new Promise(function (resolve, reject) {
      resolve(data);
    });
  }
}



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var NAMESPACE = 'vue-emoji-mart';

var isLocalStorageSupported = typeof window !== 'undefined' && 'localStorage' in window;

function update(state) {
  for (var key in state) {
    var value = state[key];
    set(key, value);
  }
}

function set(key, value) {
  if (!isLocalStorageSupported) return;
  try {
    window.localStorage[NAMESPACE + '.' + key] = JSON.stringify(value);
  } catch (e) {}
}

function get(key) {
  if (!isLocalStorageSupported) return;
  try {
    var value = window.localStorage[NAMESPACE + '.' + key];
  } catch (e) {
    return;
  }

  if (value) {
    return JSON.parse(value);
  }
}

function setNamespace(namespace) {
  NAMESPACE = namespace;
}

/* harmony default export */ __webpack_exports__["a"] = ({ update: update, set: set, get: get, setNamespace: setNamespace });

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/

module.exports = function mergeJSXProps (objs) {
  return objs.reduce(function (a, b) {
    var aa, bb, key, nestedKey, temp
    for (key in b) {
      aa = a[key]
      bb = b[key]
      if (aa && nestRE.test(key)) {
        // normalize class
        if (key === 'class') {
          if (typeof aa === 'string') {
            temp = aa
            a[key] = aa = {}
            aa[temp] = true
          }
          if (typeof bb === 'string') {
            temp = bb
            b[key] = bb = {}
            bb[temp] = true
          }
        }
        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
          // merge functions
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey])
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb)
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb)
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey]
          }
        }
      } else {
        a[key] = b[key]
      }
    }
    return a
  }, {})
}

function mergeFn (a, b) {
  return function () {
    a.apply(this, arguments)
    b.apply(this, arguments)
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(2);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



var DEFAULTS = ['+1', 'grinning', 'kissing_heart', 'heart_eyes', 'laughing', 'stuck_out_tongue_winking_eye', 'sweat_smile', 'joy', 'scream', 'disappointed', 'unamused', 'weary', 'sob', 'sunglasses', 'heart', 'poop'];

var frequently = __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].get('frequently');
var defaults = {};

function add(emoji) {
  var id = emoji.id;


  frequently || (frequently = defaults);
  frequently[id] || (frequently[id] = 0);
  frequently[id] += 1;

  __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].set('last', id);
  __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].set('frequently', frequently);
}

function get(perLine) {
  if (!frequently) {
    defaults = {};

    // Use Array.prototype.fill() when it is more widely supported.
    return [].concat(_toConsumableArray(Array(perLine))).map(function (_, i) {
      defaults[DEFAULTS[i]] = perLine - i;
      return DEFAULTS[i];
    });
  }

  var quantity = perLine * 4,
      sorted = Object.keys(frequently).sort(function (a, b) {
    return frequently[a] - frequently[b];
  }).reverse(),
      sliced = sorted.slice(0, quantity),
      last = __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].get('last');

  if (last && sliced.indexOf(last) == -1) {
    sliced.pop();
    sliced.push(last);
  }

  return sliced;
}

/* harmony default export */ __webpack_exports__["a"] = ({ add: add, get: get });

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var div = document.createElement('div');

  div.style.width = '100px';
  div.style.height = '100px';
  div.style.overflow = 'scroll';
  div.style.position = 'absolute';
  div.style.top = '-9999px';

  document.body.appendChild(div);

  var scrollbarWidth = div.offsetWidth - div.clientWidth;

  document.body.removeChild(div);

  return scrollbarWidth;
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svgs__ = __webpack_require__(14);

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Anchors',
  props: {
    categories: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    anchorClick: Function,
    i18n: Object,
    color: String
  },
  data: function data() {
    var defaultCategory = null;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var category = _step.value;

        if (category.first) {
          defaultCategory = category;
          break;
        }
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

    return {
      selected: defaultCategory.name
    };
  },
  render: function render() {
    var h = arguments[0];
    var categories = this.categories,
        anchorClick = this.anchorClick,
        color = this.color,
        i18n = this.i18n,
        selected = this.selected;


    return h(
      'div',
      { 'class': 'emoji-mart-anchors' },
      [categories.map(function (category, i) {
        var name = category.name,
            anchor = category.anchor,
            isSelected = name == selected,
            SVGElement = __WEBPACK_IMPORTED_MODULE_0__svgs__[name];


        if (anchor === false) {
          return null;
        }

        return h(
          'span',
          {
            key: name,
            attrs: { title: i18n.categories[name.toLowerCase()]
            },
            on: {
              'click': function click() {
                return anchorClick(category, i);
              }
            },

            'class': { 'emoji-mart-anchor': true, 'emoji-mart-anchor-selected': isSelected },
            style: { color: isSelected ? color : null }
          },
          [h(
            SVGElement,
            null,
            []
          ), h(
            'span',
            { 'class': 'emoji-mart-anchor-bar', style: { backgroundColor: color } },
            []
          )]
        );
      })]
    );
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_frequently__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(0);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Category',
  props: {
    emojis: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    hasStickyPosition: true,
    name: {
      type: String,
      required: true
    },
    custom: Array,
    native: {
      type: Boolean,
      required: true
    },
    perLine: {
      type: Number,
      required: true
    },
    i18n: Object,
    emojiProps: {
      type: Object,
      required: true
    }
  },
  methods: {
    getEmojis: function getEmojis() {
      var name = this.name,
          emojis = this.emojis,
          perLine = this.perLine;


      if (name == 'Recent') {
        var custom = this.custom;

        var frequentlyUsed = __WEBPACK_IMPORTED_MODULE_1__utils_frequently__["a" /* default */].get(perLine);

        if (frequentlyUsed.length) {
          emojis = frequentlyUsed.map(function (id) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = custom[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var emoji = _step.value;

                if (emoji.id === id) {
                  return emoji;
                }
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

            return id;
          });
        }
      }

      if (emojis) {
        emojis = emojis.slice(0);
      }

      return emojis;
    },
    memoizeSize: function memoizeSize() {
      var _container$getBoundin = this.container.getBoundingClientRect(),
          top = _container$getBoundin.top,
          height = _container$getBoundin.height;

      var _parent$getBoundingCl = this.parent.getBoundingClientRect(),
          parentTop = _parent$getBoundingCl.top;

      var _label$getBoundingCli = this.label.getBoundingClientRect(),
          labelHeight = _label$getBoundingCli.height;

      this.top = top - parentTop + this.parent.scrollTop;

      if (height == 0) {
        this.maxMargin = 0;
      } else {
        this.maxMargin = height - labelHeight;
      }
    },
    handleScroll: function handleScroll(scrollTop) {
      var margin = scrollTop - this.top;
      margin = margin < this.minMargin ? this.minMargin : margin;
      margin = margin > this.maxMargin ? this.maxMargin : margin;

      if (margin == this.margin) return;
      var name = this.name;


      if (!this.hasStickyPosition) {
        this.label.style.top = margin + 'px';
      }

      this.margin = margin;
      return true;
    },
    updateDisplay: function updateDisplay(display) {
      var emojis = this.getEmojis();

      if (!emojis) {
        return;
      }

      this.container.style.display = display;
    }
  },
  mounted: function mounted() {
    this.container = this.$refs.container;
    this.label = this.$refs.label;
    this.parent = this.container.parentNode;

    this.margin = 0;
    this.minMargin = 0;

    this.memoizeSize();
  },
  render: function render(h) {
    var name = this.name,
        hasStickyPosition = this.hasStickyPosition,
        emojiProps = this.emojiProps,
        i18n = this.i18n,
        emojis = this.getEmojis(),
        labelStyles = {},
        labelSpanStyles = {},
        containerStyles = {};


    if (!emojis) {
      containerStyles = {
        display: 'none'
      };
    }

    if (!hasStickyPosition) {
      labelStyles = {
        height: 28
      };

      labelSpanStyles = {
        position: 'absolute'
      };
    }

    return h(
      'div',
      { ref: 'container', 'class': { 'emoji-mart-category': true, 'emoji-mart-no-results': emojis && !emojis.length }, style: containerStyles },
      [h(
        'div',
        { style: labelStyles, attrs: { 'data-name': name },
          'class': 'emoji-mart-category-label' },
        [h(
          'span',
          { style: labelSpanStyles, ref: 'label' },
          [i18n.categories[name.toLowerCase()]]
        )]
      ), emojis && emojis.map(function (emoji) {
        return h(
          __WEBPACK_IMPORTED_MODULE_2____["b" /* Emoji */],
          __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
            attrs: { emoji: emoji }
          }, { props: emojiProps }]),
          []
        );
      }), emojis && !emojis.length && h(
        'div',
        null,
        [h(
          'div',
          null,
          [h(
            __WEBPACK_IMPORTED_MODULE_2____["b" /* Emoji */],
            __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
              attrs: { size: 38, emoji: 'sleuth_or_spy' }
            }, { props: emojiProps }]),
            []
          )]
        ), h(
          'div',
          { 'class': 'emoji-mart-no-results-label' },
          [i18n.notfound]
        )]
      )]
    );
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);


var SHEET_COLUMNS = 49;

var _getPosition = function _getPosition(props) {
  var _getData2 = _getData(props),
      sheet_x = _getData2.sheet_x,
      sheet_y = _getData2.sheet_y,
      multiply = 100 / (SHEET_COLUMNS - 1);

  return multiply * sheet_x + '% ' + multiply * sheet_y + '%';
};

var _getData = function _getData(props) {
  var emoji = props.emoji,
      skin = props.skin,
      set = props.set;

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* getData */])(emoji, skin, set);
};

var _getSanitizedData = function _getSanitizedData(props) {
  var emoji = props.emoji,
      skin = props.skin,
      set = props.set;

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* getSanitizedData */])(emoji, skin, set);
};

var _handleClick = function _handleClick(e, props) {
  if (!props.emojiClick) {
    return;
  }
  var emojiClick = props.emojiClick,
      emoji = _getSanitizedData(props);


  emojiClick(emoji, e);
};

var _handleOver = function _handleOver(e, props) {
  if (!props.emojiOver) {
    return;
  }
  var emojiOver = props.emojiOver,
      emoji = _getSanitizedData(props);


  emojiOver(emoji, e);
};

var _handleLeave = function _handleLeave(e, props) {
  if (!props.emojiLeave) {
    return;
  }
  var emojiLeave = props.emojiLeave,
      emoji = _getSanitizedData(props);


  emojiLeave(emoji, e);
};

var defaultProps = {
  skin: 1,
  set: 'apple',
  sheetSize: 64,
  native: false,
  forceSize: false,
  backgroundImageFn: function backgroundImageFn(set, sheetSize) {
    return 'https://unpkg.com/emoji-datasource-' + set + '@' + '^3.0.0' + '/img/' + set + '/sheets/' + sheetSize + '.png';
  },
  emojiOver: function emojiOver() {},
  emojiLeave: function emojiLeave() {},
  emojiClick: function emojiClick() {}
};

var Emoji = {
  name: 'Emoji',
  props: {
    size: Number,
    emoji: Object | String,
    skin: {
      type: Number,
      default: defaultProps.skin
    },
    set: {
      type: String,
      default: defaultProps.set
    },
    sheetSize: {
      type: Number,
      default: defaultProps.sheetSize
    },
    native: {
      type: Boolean,
      default: defaultProps.native
    },
    forceSize: {
      type: Boolean,
      default: defaultProps.forceSize
    },
    backgroundImageFn: {
      type: Function,
      default: defaultProps.backgroundImageFn
    },
    emojiOver: {
      type: Function,
      default: defaultProps.emojiOver
    },
    emojiLeave: {
      type: Function,
      default: defaultProps.emojiLeave
    },
    emojiClick: {
      type: Function,
      default: defaultProps.emojiClick
    }
  },
  data: function data() {
    return {};
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var emoji = this.emoji;

    var _getData3 = _getData(this),
        unified = _getData3.unified,
        custom = _getData3.custom,
        imageUrl = _getData3.imageUrl,
        style = {},
        children = this.children;

    if (!unified && !custom) {
      return null;
    }

    if (this.native && unified) {
      style = { fontSize: this.size + 'px' };
      children = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* unifiedToNative */])(unified);

      if (this.forceSize) {
        style.display = 'inline-block';
        style.width = this.size + 'px';
        style.height = this.size + 'px';
      }
    } else if (custom) {
      style = {
        width: this.size + 'px',
        height: this.size + 'px',
        display: 'inline-block',
        backgroundImage: 'url(' + imageUrl + ')',
        backgroundSize: '100%'
      };
    } else {
      var setHasEmoji = _getData(this)['has_img_' + this.set];

      if (!setHasEmoji) {
        return null;
      }

      style = {
        width: this.size + 'px',
        height: this.size + 'px',
        display: 'inline-block',
        backgroundImage: 'url(' + this.backgroundImageFn(this.set, this.sheetSize) + ')',
        backgroundSize: 100 * SHEET_COLUMNS + '%',
        backgroundPosition: _getPosition(this)
      };
    }
    return h(
      'span',
      {
        key: emoji.id || emoji,
        on: {
          'click': function click(e) {
            return _handleClick(e, _this);
          },
          'mouseenter': function mouseenter(e) {
            return _handleOver(e, _this);
          },
          'mouseleave': function mouseleave(e) {
            return _handleLeave(e, _this);
          }
        },

        'class': 'emoji-mart-emoji' },
      [h(
        'span',
        { style: style },
        [children]
      )]
    );
  }
};

Emoji.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["a"] = (Emoji);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_raf_polyfill__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_raf_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendor_raf_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_measure_scrollbar__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_frequently__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5____ = __webpack_require__(0);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };











var RECENT_CATEGORY = { name: 'Recent', emojis: null };
var SEARCH_CATEGORY = { name: 'Search', emojis: null, anchor: false };
var CUSTOM_CATEGORY = { name: 'Custom', emojis: [] };

var I18N = {
  search: 'Search',
  notfound: 'No Emoji Found',
  categories: {
    search: 'Search Results',
    recent: 'Frequently Used',
    people: 'Smileys & People',
    nature: 'Animals & Nature',
    foods: 'Food & Drink',
    activity: 'Activity',
    places: 'Travel & Places',
    objects: 'Objects',
    symbols: 'Symbols',
    flags: 'Flags',
    custom: 'Custom'
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Picker',
  props: {
    dataUrl: {
      type: String,
      default: 'https://unpkg.com/vue-emoji-mart/data/emoji.json'
    },
    onItemClick: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    perLine: {
      type: Number,
      default: 9
    },
    emojiSize: {
      type: Number,
      default: 24
    },
    i18ns: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    styles: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    title: {
      type: String,
      default: 'Emoji Mart™'
    },
    emoji: {
      type: String,
      default: 'department_store'
    },
    color: {
      type: String,
      default: '#ae65c5'
    },
    set: {
      type: String,
      default: __WEBPACK_IMPORTED_MODULE_5____["b" /* Emoji */].defaultProps.set
    },
    skins: {
      type: Number,
      default: __WEBPACK_IMPORTED_MODULE_5____["b" /* Emoji */].defaultProps.skin
    },
    native: {
      type: Boolean,
      default: __WEBPACK_IMPORTED_MODULE_5____["b" /* Emoji */].defaultProps.native
    },
    backgroundImageFn: {
      type: Function,
      default: __WEBPACK_IMPORTED_MODULE_5____["b" /* Emoji */].defaultProps.backgroundImageFn
    },
    sheetSize: {
      type: Number,
      default: __WEBPACK_IMPORTED_MODULE_5____["b" /* Emoji */].defaultProps.sheetSize
    },
    emojisToShowFilter: null,
    include: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    exclude: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    custom: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    enableSkins: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    this.i18n = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["e" /* deepMerge */])(I18N, this.i18ns);
    this.categories = [];
    return {
      loading: true,
      skin: __WEBPACK_IMPORTED_MODULE_2__utils_store__["a" /* default */].get('skin') || this.skins,
      firstRender: true
    };
  },
  mounted: function mounted() {
    var _this = this;

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["f" /* loadEmojiData */])(this.dataUrl).then(function (data) {
      _this.processData(data);
      _this.loading = false;
      if (_this.firstRender) {
        _this.testStickyPosition();
        _this.firstRenderTimeout = setTimeout(function () {
          _this.firstRender = false;
        }, 60);
      }
    });
  },

  watch: {
    'firstRender': function firstRender(val, oldVal) {
      this.$nextTick(function () {
        this.updateCategoriesSize();
        this.handleScroll();
      });
    }
  },
  destoryed: function destoryed() {
    SEARCH_CATEGORY.emojis = null;

    clearTimeout(this.leaveTimeout);
    clearTimeout(this.firstRenderTimeout);
  },

  methods: {
    processData: function processData(data) {
      var _this2 = this;

      this.categories = [];
      var allCategories = [].concat(data.categories);

      if (this.custom.length > 0) {
        CUSTOM_CATEGORY.emojis = this.custom.map(function (emoji) {
          return _extends({}, emoji, {
            // `<Category />` expects emoji to have an `id`.
            id: emoji.short_names[0],
            custom: true
          });
        });

        allCategories.push(CUSTOM_CATEGORY);
      }

      this.hideRecent = true;

      if (this.include != undefined) {
        data.categories.sort(function (a, b) {
          var aName = a.name.toLowerCase();
          var bName = b.name.toLowerCase();

          if (_this2.include.indexOf(aName) > _this2.include.indexOf(bName)) {
            return 1;
          }

          return 0;
        });
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = allCategories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var category = _step.value;

          var isIncluded = this.include && this.include.length ? this.include.indexOf(category.name.toLowerCase()) > -1 : true;
          var isExcluded = this.exclude && this.exclude.length ? this.exclude.indexOf(category.name.toLowerCase()) > -1 : false;
          if (!isIncluded || isExcluded) {
            continue;
          }

          if (this.emojisToShowFilter) {
            var newEmojis = [];

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = category.emojis[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var emoji = _step2.value;

                if (this.emojisToShowFilter(data.emojis[emoji] || emoji)) {
                  newEmojis.push(emoji);
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

            if (newEmojis.length) {
              var newCategory = {
                emojis: newEmojis,
                name: category.name
              };

              this.categories.push(newCategory);
            }
          } else {
            this.categories.push(category);
          }
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

      var includeRecent = this.include && this.include.length ? this.include.indexOf('recent') > -1 : true;
      var excludeRecent = this.exclude && this.exclude.length ? this.exclude.indexOf('recent') > -1 : false;
      if (includeRecent && !excludeRecent) {
        this.hideRecent = false;
        this.categories.unshift(RECENT_CATEGORY);
      }

      if (this.categories[0]) {
        this.categories[0].first = true;
      }
      this.categories.unshift(SEARCH_CATEGORY);
    },
    testStickyPosition: function testStickyPosition() {
      var stickyTestElement = document.createElement('div');
      var _arr = ['', '-webkit-', '-ms-', '-moz-', '-o-'];
      for (var _i = 0; _i < _arr.length; _i++) {
        var prefix = _arr[_i];
        stickyTestElement.style.position = prefix + 'sticky';
      }

      this.hasStickyPosition = !!stickyTestElement.style.position.length;
    },
    handleEmojiOver: function handleEmojiOver(emoji) {
      var preview = this.$refs.preview;
      // Use Array.prototype.find() when it is more widely supported.

      var emojiData = CUSTOM_CATEGORY.emojis.filter(function (customEmoji) {
        return customEmoji.id === emoji.id;
      })[0];
      // preview.emojiObj = Object.assign(emoji, emojiData)
      clearTimeout(this.leaveTimeout);
    },
    handleEmojiLeave: function handleEmojiLeave(emoji) {
      // this.leaveTimeout = setTimeout(() => {
      //   var { preview } = this.$refs
      //   preview.emojiObj = null
      // }, 16)
    },
    handleEmojiClick: function handleEmojiClick(emoji, e) {
      var _this3 = this;

      this.onItemClick(emoji, e);
      if (!this.hideRecent) __WEBPACK_IMPORTED_MODULE_3__utils_frequently__["a" /* default */].add(emoji);

      var component = this.$refs['category-1'];
      if (component) {
        var maxMargin = component.maxMargin;
        component.$forceUpdate();

        window.requestAnimationFrame(function () {
          component.memoizeSize();
          if (maxMargin == component.maxMargin) return;

          _this3.updateCategoriesSize();
          _this3.handleScrollPaint();

          if (SEARCH_CATEGORY.emojis) {
            component.updateDisplay('none');
          }
        });
      }
    },
    handleScroll: function handleScroll() {
      if (!this.waitingForPaint) {
        this.waitingForPaint = true;
        window.requestAnimationFrame(this.handleScrollPaint.bind(this));
      }
    },
    handleScrollPaint: function handleScrollPaint() {
      this.waitingForPaint = false;

      if (!this.$refs.scroll) {
        return;
      }

      var activeCategory = null;

      if (SEARCH_CATEGORY.emojis) {
        activeCategory = SEARCH_CATEGORY;
      } else {
        var target = this.$refs.scroll,
            scrollTop = target.scrollTop,
            scrollingDown = scrollTop > (this.scrollTop || 0),
            minTop = 0;

        for (var i = 0, l = this.categories.length; i < l; i++) {
          var ii = scrollingDown ? this.categories.length - 1 - i : i,
              category = this.categories[ii],
              component = this.$refs['category-' + ii];

          if (component) {
            var active = component.handleScroll(scrollTop);

            if (!minTop || component.top < minTop) {
              if (component.top > 0) {
                minTop = component.top;
              }
            }

            if (active && !activeCategory) {
              activeCategory = category;
            }
          }
        }

        if (scrollTop < minTop) {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this.categories[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var _category = _step3.value;

              if (_category.anchor === false) {
                continue;
              }

              activeCategory = _category;
              break;
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        } else if (scrollTop + this.clientHeight >= this.scrollHeight) {
          activeCategory = this.categories[this.categories.length - 1];
        }
      }

      if (activeCategory) {
        var anchors = this.$refs.anchors,
            _activeCategory = activeCategory,
            categoryName = _activeCategory.name;


        if (anchors.selected != categoryName) {
          anchors.selected = categoryName;
        }
      }

      this.scrollTop = scrollTop;
    },
    handleSearch: function handleSearch(emojis) {
      SEARCH_CATEGORY.emojis = emojis;

      for (var i = 0, l = this.categories.length; i < l; i++) {
        var component = this.$refs['category-' + i];

        if (component && component.name != 'Search') {
          var display = emojis ? 'none' : 'inherit';
          component.updateDisplay(display);
        }
      }

      this.$forceUpdate();
      this.$refs.scroll.scrollTop = 0;
      this.handleScroll();
    },
    handleAnchorClick: function handleAnchorClick(category, i) {
      var component = this.$refs['category-' + i],
          _$refs = this.$refs,
          scroll = _$refs.scroll,
          anchors = _$refs.anchors,
          scrollToComponent = null;


      scrollToComponent = function scrollToComponent() {
        if (component) {
          var top = component.top;


          if (category.first) {
            top = 0;
          } else {
            top += 1;
          }

          scroll.scrollTop = top;
        }
      };

      if (SEARCH_CATEGORY.emojis) {
        this.handleSearch(null);
        this.$refs.search.clear();

        window.requestAnimationFrame(scrollToComponent);
      } else {
        scrollToComponent();
      }
    },
    handleSkinChange: function handleSkinChange(skin) {
      var newState = { skin: skin };

      this.skin = skin;
      __WEBPACK_IMPORTED_MODULE_2__utils_store__["a" /* default */].update(newState);
    },
    updateCategoriesSize: function updateCategoriesSize() {
      for (var i = 0, l = this.categories.length; i < l; i++) {
        var component = this.$refs['category-' + i];
        if (component) component.memoizeSize();
      }

      if (this.$refs.scroll) {
        var target = this.$refs.scroll;
        this.scrollHeight = target.scrollHeight;
        this.clientHeight = target.clientHeight;
      }
    },
    getCategories: function getCategories() {
      return this.firstRender ? this.categories.slice(0, 3) : this.categories;
    }
  },
  render: function render() {
    var _this4 = this;

    var h = arguments[0];

    if (this.loading) {
      return h(
        'span',
        null,
        ['loading...']
      );
    }

    var perLine = this.perLine,
        emojiSize = this.emojiSize,
        skin = this.skin,
        set = this.set,
        sheetSize = this.sheetSize,
        styles = this.styles,
        title = this.title,
        emoji = this.emoji,
        color = this.color,
        native = this.native,
        backgroundImageFn = this.backgroundImageFn,
        emojisToShowFilter = this.emojisToShowFilter,
        include = this.include,
        exclude = this.exclude,
        autoFocus = this.autoFocus,
        enableSkins = this.enableSkins,
        width = perLine * (emojiSize + 12) + 12 + 2 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_measure_scrollbar__["a" /* default */])();


    return h(
      'div',
      { style: _extends({ width: width }, styles), 'class': 'emoji-mart' },
      [h(
        'div',
        { 'class': 'emoji-mart-bar' },
        [h(
          __WEBPACK_IMPORTED_MODULE_5____["d" /* Anchors */],
          {
            ref: 'anchors',
            attrs: { i18n: this.i18n,
              color: color,
              categories: this.categories,
              anchorClick: this.handleAnchorClick.bind(this)
            }
          },
          []
        )]
      ), h(
        __WEBPACK_IMPORTED_MODULE_5____["e" /* Search */],
        {
          ref: 'search',
          attrs: { search: this.handleSearch.bind(this),
            i18n: this.i18n,
            emojisToShowFilter: emojisToShowFilter,
            include: include,
            exclude: exclude,
            custom: CUSTOM_CATEGORY.emojis,
            autoFocus: autoFocus
          }
        },
        []
      ), h(
        'div',
        { ref: 'scroll', 'class': 'emoji-mart-scroll', on: {
            'scroll': this.handleScroll.bind(this)
          }
        },
        [this.getCategories().map(function (category, i) {
          return h(
            __WEBPACK_IMPORTED_MODULE_5____["f" /* Category */],
            {
              ref: 'category-' + i,
              key: category.name,
              attrs: { name: category.name,
                emojis: category.emojis,
                perLine: perLine,
                native: native,
                hasStickyPosition: _this4.hasStickyPosition,
                i18n: _this4.i18n,
                custom: category.name == 'Recent' ? CUSTOM_CATEGORY.emojis : undefined,
                emojiProps: {
                  native: native,
                  skin: skin,
                  size: emojiSize,
                  set: set,
                  sheetSize: sheetSize,
                  forceSize: native,
                  backgroundImageFn: backgroundImageFn,
                  emojiOver: _this4.handleEmojiOver.bind(_this4),
                  emojiLeave: _this4.handleEmojiLeave.bind(_this4),
                  emojiClick: _this4.handleEmojiClick.bind(_this4)
                }
              }
            },
            []
          );
        })]
      )]
    );
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(1);




/* unused harmony default export */ var _unused_webpack_default_export = ({
  name: 'Preview',
  props: {
    title: {
      type: String,
      required: true
    },
    emoji: {
      type: String,
      required: true
    },
    emojiProps: {
      type: Object,
      required: true
    },
    skin: {
      type: Number,
      default: __WEBPACK_IMPORTED_MODULE_1____["b" /* Emoji */].defaultProps.skin
    },
    skinsProps: {
      type: Object,
      required: true
    },
    enableSkins: {
      type: Boolean,
      required: true
    }
  },
  data: function data() {
    return { emojiObj: null };
  },
  render: function render(h) {
    var emojiObj = this.emojiObj,
        emojiProps = this.emojiProps,
        skinsProps = this.skinsProps,
        title = this.title,
        emoji = this.emoji,
        enableSkins = this.enableSkins;


    if (emojiObj) {
      var emojiData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* getData */])(emojiObj),
          emoticons = emojiData.emoticons,
          knownEmoticons = [],
          listedEmoticons = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {

        for (var _iterator = emoticons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var emoticon = _step.value;

          if (knownEmoticons.indexOf(emoticon.toLowerCase()) == -1) {
            knownEmoticons.push(emoticon.toLowerCase());
            listedEmoticons.push(emoticon);
          }
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

      return h(
        'div',
        { 'class': 'emoji-mart-preview' },
        [h(
          'div',
          { 'class': 'emoji-mart-preview-emoji' },
          [h(
            __WEBPACK_IMPORTED_MODULE_1____["b" /* Emoji */],
            __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{ key: emojiObj.id, attrs: { emoji: emojiObj }
            }, { props: emojiProps }]),
            []
          )]
        ), h(
          'div',
          { 'class': 'emoji-mart-preview-data' },
          [h(
            'div',
            { 'class': 'emoji-mart-preview-name' },
            [emojiObj.name]
          ), h(
            'div',
            { 'class': 'emoji-mart-preview-shortnames' },
            [emojiData.short_names.map(function (short_name) {
              return h(
                'span',
                { key: short_name, 'class': 'emoji-mart-preview-shortname' },
                [':', short_name, ':']
              );
            })]
          ), h(
            'div',
            { 'class': 'emoji-mart-preview-emoticons' },
            [listedEmoticons.map(function (emoticon) {
              return h(
                'span',
                { key: emoticon, 'class': 'emoji-mart-preview-emoticon' },
                [emoticon]
              );
            })]
          )]
        )]
      );
    } else {
      return h(
        'div',
        { 'class': 'emoji-mart-preview' },
        [h(
          'div',
          { 'class': 'emoji-mart-preview-emoji' },
          [emoji && emoji.length && h(
            __WEBPACK_IMPORTED_MODULE_1____["b" /* Emoji */],
            __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
              attrs: { emoji: emoji }
            }, { props: emojiProps }]),
            []
          )]
        ), h(
          'div',
          { 'class': 'emoji-mart-preview-data' },
          [h(
            'span',
            { 'class': 'emoji-mart-title-label' },
            [title]
          )]
        ), h(
          'div',
          { 'class': 'emoji-mart-preview-skins' },
          [enableSkins && h(
            __WEBPACK_IMPORTED_MODULE_1____["c" /* Skins */],
            { props: skinsProps },
            []
          )]
        )]
      );
    }
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_emoji_index__ = __webpack_require__(16);


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Search',
  props: {
    search: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    include: Array,
    exclude: Array,
    custom: Array,
    maxResults: 75,
    emojisToShowFilter: null,
    i18n: Object,
    autoFocus: false
  },
  methods: {
    handleChange: function handleChange() {
      var input = this.$refs.input,
          value = input.value;


      this.search(__WEBPACK_IMPORTED_MODULE_0__utils_emoji_index__["a" /* default */].search(value, {
        emojisToShowFilter: this.emojisToShowFilter,
        maxResults: this.maxResults,
        include: this.include,
        exclude: this.exclude,
        custom: this.custom
      }));
    },
    clear: function clear() {
      this.$refs.input.value = '';
    }
  },
  render: function render() {
    var h = arguments[0];
    var i18n = this.i18n,
        autoFocus = this.autoFocus;


    return h(
      'div',
      { 'class': 'emoji-mart-search' },
      [h(
        'input',
        {
          ref: 'input',
          attrs: { type: 'text',

            placeholder: i18n.search,
            autoFocus: autoFocus
          },
          on: {
            'input': this.handleChange.bind(this)
          }
        },
        []
      )]
    );
  }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Skins',
  props: {
    change: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    skin: {
      type: Number,
      required: true
    }
  },
  data: function data() {
    return {
      opened: false
    };
  },

  methods: {
    handleClick: function handleClick(skin) {
      var change = this.change;


      if (!this.opened) {
        this.opened = true;
      } else {
        this.opened = false;
        if (skin != this.skin) {
          this.change(skin);
        }
      }
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var skin = this.skin,
        opened = this.opened;


    return h(
      'div',
      null,
      [h(
        'div',
        { 'class': { 'emoji-mart-skin-swatches': true, 'emoji-mart-skin-swatches-opened': opened } },
        [[].concat(_toConsumableArray(Array(6))).map(function (_, i) {
          var skinTone = i + 1,
              selected = skinTone == skin;

          return h(
            'span',
            { key: 'skin-tone-' + skinTone, 'class': { 'emoji-mart-skin-swatch': true, 'emoji-mart-skin-swatch-selected': selected } },
            [h(
              'span',
              {
                on: {
                  'click': function click() {
                    return _this.handleClick(skinTone);
                  }
                },

                'class': 'emoji-mart-skin emoji-mart-skin-tone-' + skinTone },
              []
            )]
          );
        })]
      )]
    );
  }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["a"]; });
// import emojiIndex from './utils/emoji-index'
// import store from './utils/store'
// import frequently from './utils/frequently'

// export { Picker, Emoji, Category } from './components'
// export { emojiIndex, store, frequently }


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activity_svg__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activity_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__activity_svg__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Activity", function() { return __WEBPACK_IMPORTED_MODULE_0__activity_svg___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flags_svg__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flags_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__flags_svg__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Flags", function() { return __WEBPACK_IMPORTED_MODULE_1__flags_svg___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foods_svg__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foods_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__foods_svg__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Foods", function() { return __WEBPACK_IMPORTED_MODULE_2__foods_svg___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nature_svg__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nature_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__nature_svg__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Nature", function() { return __WEBPACK_IMPORTED_MODULE_3__nature_svg___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_svg__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objects_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__objects_svg__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Objects", function() { return __WEBPACK_IMPORTED_MODULE_4__objects_svg___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__people_svg__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__people_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__people_svg__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "People", function() { return __WEBPACK_IMPORTED_MODULE_5__people_svg___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__places_svg__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__places_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__places_svg__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Places", function() { return __WEBPACK_IMPORTED_MODULE_6__places_svg___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__recent_svg__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__recent_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__recent_svg__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Recent", function() { return __WEBPACK_IMPORTED_MODULE_7__recent_svg___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__symbols_svg__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__symbols_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__symbols_svg__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Symbols", function() { return __WEBPACK_IMPORTED_MODULE_8__symbols_svg___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__custom_svg__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__custom_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__custom_svg__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Custom", function() { return __WEBPACK_IMPORTED_MODULE_9__custom_svg___default.a; });











/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (data) {
  var search = [];

  var addToSearch = function addToSearch(strings, split) {
    if (!strings) {
      return;
    }

    (Array.isArray(strings) ? strings : [strings]).forEach(function (string) {
      (split ? string.split(/[-|_|\s]+/) : [string]).forEach(function (s) {
        s = s.toLowerCase();

        if (search.indexOf(s) == -1) {
          search.push(s);
        }
      });
    });
  };

  addToSearch(data.short_names, true);
  addToSearch(data.name, true);
  addToSearch(data.keywords, false);
  addToSearch(data.emoticons, false);

  return search;
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(1);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var extend = __webpack_require__(21)._extend;




var index = {};
var emojisList = {};
var emoticonsList = {};
var previousInclude = [];
var previousExclude = [];
var data;
var isInited = false;

function init() {
  if (isInited) return;
  isInited = true;
  data = window.emojiJSON;
  for (var emoji in data.emojis) {
    var emojiData = data.emojis[emoji],
        short_names = emojiData.short_names,
        emoticons = emojiData.emoticons,
        id = short_names[0];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {

      for (var _iterator = (emoticons || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var emoticon = _step.value;

        if (!emoticonsList[emoticon]) {
          emoticonsList[emoticon] = id;
        }
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

    emojisList[id] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1____["a" /* getSanitizedData */])(id);
  }
}

function search(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      emojisToShowFilter = _ref.emojisToShowFilter,
      maxResults = _ref.maxResults,
      include = _ref.include,
      exclude = _ref.exclude,
      _ref$custom = _ref.custom,
      custom = _ref$custom === undefined ? [] : _ref$custom;

  init();
  maxResults || (maxResults = 75);
  include || (include = []);
  exclude || (exclude = []);

  if (custom.length) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = custom[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var emoji = _step2.value;

        data.emojis[emoji.id] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1____["b" /* getData */])(emoji);
        emojisList[emoji.id] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1____["a" /* getSanitizedData */])(emoji);
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

    data.categories.push({
      name: 'Custom',
      emojis: custom.map(function (emoji) {
        return emoji.id;
      })
    });
  }

  var results = null,
      pool = data.emojis;

  if (value.length) {
    if (value == '-' || value == '-1') {
      return [emojisList['-1']];
    }

    var values = value.toLowerCase().split(/[\s|,|\-|_]+/),
        allResults = [];

    if (values.length > 2) {
      values = [values[0], values[1]];
    }

    if (include.length || exclude.length) {
      pool = {};

      if (previousInclude != include.sort().join(',') || previousExclude != exclude.sort().join(',')) {
        previousInclude = include.sort().join(',');
        previousExclude = exclude.sort().join(',');
        index = {};
      }

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = data.categories[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var category = _step3.value;

          var isIncluded = include && include.length ? include.indexOf(category.name.toLowerCase()) > -1 : true;
          var isExcluded = exclude && exclude.length ? exclude.indexOf(category.name.toLowerCase()) > -1 : false;
          if (!isIncluded || isExcluded) {
            continue;
          }

          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = category.emojis[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var emojiId = _step4.value;

              pool[emojiId] = data.emojis[emojiId];
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    } else if (previousInclude.length || previousExclude.length) {
      index = {};
    }

    allResults = values.map(function (value) {
      var aPool = pool,
          aIndex = index,
          length = 0;

      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = value.split('')[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var char = _step5.value;

          length++;

          aIndex[char] || (aIndex[char] = {});
          aIndex = aIndex[char];

          if (!aIndex.results) {
            (function () {
              var scores = {};

              aIndex.results = [];
              aIndex.pool = {};

              for (var id in aPool) {
                var _emoji = aPool[id],
                    _search = _emoji.search,
                    sub = value.substr(0, length),
                    subIndex = _search.indexOf(sub);


                if (subIndex != -1) {
                  var score = subIndex + 1;
                  if (sub == id) score = 0;

                  aIndex.results.push(emojisList[id]);
                  aIndex.pool[id] = _emoji;

                  scores[id] = score;
                }
              }

              aIndex.results.sort(function (a, b) {
                var aScore = scores[a.id],
                    bScore = scores[b.id];

                return aScore - bScore;
              });
            })();
          }

          aPool = aIndex.pool;
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      return aIndex.results;
    }).filter(function (a) {
      return a;
    });

    if (allResults.length > 1) {
      results = __WEBPACK_IMPORTED_MODULE_1____["c" /* intersect */].apply(undefined, _toConsumableArray(allResults));
    } else if (allResults.length) {
      results = allResults[0];
    } else {
      results = [];
    }
  }

  if (results) {
    if (emojisToShowFilter) {
      results = results.filter(function (result) {
        return emojisToShowFilter(data.emojis[result.id].unified);
      });
    }

    if (results && results.length > maxResults) {
      results = results.slice(0, maxResults);
    }
  }

  return results;
}

/* harmony default export */ __webpack_exports__["a"] = ({ search: search, emojis: emojisList, emoticons: emoticonsList });

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license

var isWindowAvailable = typeof window !== 'undefined';

isWindowAvailable && function () {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];

  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);

    lastTime = currTime + timeToCall;
    return id;
  };

  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
}();

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
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
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
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
    runClearTimeout(timeout);
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
        runTimeout(drainQueue);
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
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 19 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
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

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(20);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(19);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32), __webpack_require__(18)))

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {template: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24"><path d="M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"/></svg>'};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {template: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><g transform="translate(2 1)"><rect x="8" width="3" height="21" rx="1.5"/><rect transform="rotate(60 9.843 10.549)" x="8.343" y=".049" width="3" height="21" rx="1.5"/><rect transform="rotate(-60 9.843 10.549)" x="8.343" y=".049" width="3" height="21" rx="1.5"/></g></svg>'};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {template: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24"><path d="M0 0l6.084 24H8L1.916 0zm21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"/></svg>'};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {template: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24"><path d="M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"/></svg>'};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {template: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24"><path d="M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8m-7 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"/><path d="M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"/></svg>'};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {template: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24"><path d="M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834A6.923 6.923 0 0 1 12 19a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21a8.86 8.86 0 0 0 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"/><path d="M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"/></svg>'};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {template: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"/><path d="M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7m8 0a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7m-.768 8c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"/></svg>'};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {template: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24"><path d="M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5m11-3c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"/><path d="M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"/></svg>'};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {template: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24"><path d="M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"/><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"/></svg>'};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = {template: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24"><path d="M0 0h11v2H0zm4 11h3V6h4V4H0v2h4zm11.5 6c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493m6 5c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493m.5-9l-9 9 1.513 1.5 8.99-9.009zm-5-2c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5m-6.703 9.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"/></svg>'};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
});