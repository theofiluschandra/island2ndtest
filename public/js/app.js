/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./css/style.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./css/style.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"CrimsonText\";\n  src: url(\"/techtwo/css/font/CrimsonText-Regular.ttf\") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"CrimsonText\";\n  src: url(\"/techtwo/css/font/CrimsonText-SemiBold.ttf\") format(\"truetype\");\n  font-weight: 500;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"BarlowCondensed\";\n  src: url(\"/techtwo/css/font/BarlowCondensed-Regular.ttf\") format(\"truetype\");\n  font-weight: normal;\n}\n@font-face {\n  font-family: \"BarlowCondensed\";\n  src: url(\"/techtwo/css/font/BarlowCondensed-ExtraLight.ttf\") format(\"truetype\");\n  font-weight: 100;\n}\nbody {\n  margin: 0;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"CrimsonText\";\n}\n\np {\n  font-family: \"BarlowCondensed\";\n  font-weight: lighter;\n}\n\na {\n  font-family: \"BarlowCondensed\";\n}\n\nimg {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.z-index-top {\n  z-index: 999;\n}\n\n.z-index-20 {\n  z-index: 20;\n}\n\n.sticky {\n  position: fixed;\n  width: 100%;\n  transition: all 0.5s ease;\n}\n\n.position-relative {\n  position: relative;\n}\n\n.position-absolute {\n  position: absolute;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.align-content-center {\n  align-content: center;\n}\n\n.align-items-center {\n  align-items: center;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.d-grid {\n  display: grid;\n}\n\n.hidden {\n  display: none;\n}\n\n.block {\n  display: block;\n}\n\n.visibile {\n  visibility: visible;\n}\n\n.unvisible {\n  visibility: hidden;\n}\n\n.w-90 {\n  width: 90%;\n}\n\n.w-80 {\n  width: 80%;\n}\n\n.py-20 {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.mg-side-auto {\n  margin: 0 auto;\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.section-title {\n  font-size: 40px;\n  font-weight: lighter;\n  margin: 0px;\n  padding-bottom: 25px;\n  line-height: 1em;\n}\n\n.main-header {\n  position: relative;\n  transition: all 0.5s ease;\n}\n.main-header .main-menu {\n  gap: 20px;\n}\n.main-header .main-menu * {\n  color: white;\n}\n.main-header .main-menu a {\n  text-transform: uppercase;\n  text-decoration: none;\n  font-weight: 100;\n  letter-spacing: 1.5px;\n}\n.main-header .main-menu .search-wrapper {\n  display: flex;\n  transition: all 1s ease;\n}\n.main-header .main-menu .search-wrapper.active-state {\n  align-items: center;\n  outline: none;\n  transition: all 0.3s ease;\n}\n.main-header .main-menu .search-wrapper .input-initial-state {\n  width: 0;\n  margin-right: 0;\n  visibility: hidden;\n  transition: all 0.5s ease;\n}\n.main-header .main-menu .search-wrapper .input-active-state {\n  width: 150px;\n  margin-right: 20px;\n  visibility: visible;\n  transition: all 0.5s ease;\n}\n.main-header.sticky {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  transition: all 0.5s ease;\n}\n\n.section-banner-home {\n  min-height: 100vh;\n  padding-top: 120px;\n  color: white;\n  margin-top: -121px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.section-banner-home .row-wrapper {\n  display: flex;\n  height: calc(100vh - 120px);\n  flex-direction: column;\n  justify-content: space-between;\n}\n.section-banner-home .row-wrapper .banner-title {\n  font-size: 55px;\n  text-align: center;\n  font-weight: lighter;\n}\n.section-banner-home .row-wrapper .btn-wrapper {\n  background-color: #ECB855;\n  width: 120px;\n  padding: 10px;\n  text-align: center;\n}\n.section-banner-home .row-wrapper .btn-wrapper a {\n  color: white;\n  text-decoration: none;\n}\n\n.section-menu {\n  padding-top: 65px;\n  padding-bottom: 80px;\n}\n.section-menu .row-wrapper .row-content {\n  text-align: center;\n}\n.section-menu .row-wrapper .row-content .section-content {\n  margin: 0 auto;\n  padding-bottom: 40px;\n  width: 600px;\n}\n.section-menu .row-wrapper .row-menu .big-menu-wrapper {\n  gap: 10px;\n  grid-template-columns: repeat(4, 1fr);\n}\n.section-menu .row-wrapper .row-menu .big-menu-wrapper .menu-card {\n  height: 500px;\n}\n.section-menu .row-wrapper .row-menu .big-menu-wrapper .menu-card .card-title {\n  color: white;\n  font-family: \"BarlowCondensed\";\n  font-size: 25px;\n  position: absolute;\n  z-index: 30;\n  height: 500px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-shadow: 0px 0px 0px #000000;\n  transition: all 0.5s ease;\n}\n.section-menu .row-wrapper .row-menu .big-menu-wrapper .menu-card .overlay-wrapper {\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  z-index: 10;\n  transition: all 0.5s ease;\n}\n.section-menu .row-wrapper .row-menu .big-menu-wrapper .menu-card .background-wrapper {\n  height: 100%;\n}\n.section-menu .row-wrapper .row-menu .big-menu-wrapper .menu-card:hover .overlay-wrapper {\n  background-color: rgba(0, 0, 0, 0);\n  width: 0;\n  transition: all 0.5s ease;\n}\n.section-menu .row-wrapper .row-menu .big-menu-wrapper .menu-card:hover .card-title {\n  text-shadow: 2px 2px 4px #000000;\n  transition: all 0.5s ease;\n}\n\n.section-extraction .row-wrapper {\n  text-align: center;\n  padding-bottom: 95px;\n}\n.section-extraction .row-wrapper .section-title {\n  width: 500px;\n  margin: 0 auto;\n}\n.section-extraction .row-wrapper .section-content {\n  margin: 0;\n  padding-bottom: 25px;\n  width: 600px;\n  margin: 0 auto;\n}\n.section-extraction .row-wrapper .btn-contact-wrapper {\n  background-color: #ECB855;\n  width: 90px;\n  height: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  padding: 10px;\n  font-size: 14px;\n}\n.section-extraction .row-wrapper .btn-contact-wrapper a {\n  text-decoration: none;\n  color: white;\n}\n\n.section-benefit {\n  background-color: #EFEFEF;\n}\n.section-benefit .row-wrapper {\n  padding-top: 70px;\n  padding-bottom: 95px;\n}\n.section-benefit .row-wrapper .section-title {\n  padding-bottom: 45px !important;\n}\n.section-benefit .row-wrapper .row-3-col {\n  justify-content: space-evenly;\n}\n.section-benefit .row-wrapper .row-3-col .benefit-card {\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n}\n.section-benefit .row-wrapper .row-3-col .benefit-card .icon-wrapper {\n  width: 46px;\n  height: 46px;\n}\n.section-benefit .row-wrapper .row-3-col .benefit-card .icon-wrapper img {\n  -o-object-fit: contain !important;\n     object-fit: contain !important;\n}\n.section-benefit .row-wrapper .row-3-col .benefit-card .benefit-title {\n  font-family: \"BarlowCondensed\";\n  font-size: 22px;\n}\n\n.section-blog .row-wrapper {\n  width: 70%;\n  padding: 80px 0px;\n  grid-template-columns: 45% 30%;\n  justify-content: space-evenly;\n}\n.section-blog .row-wrapper .col-left .image-wrapper {\n  height: 500px;\n}\n.section-blog .row-wrapper .col-right {\n  padding-top: 20px;\n}\n.section-blog .row-wrapper .col-right .content-wrapper .blog-header {\n  display: grid;\n  gap: 15px;\n}\n.section-blog .row-wrapper .col-right .content-wrapper .blog-header .section-subtitle {\n  font-weight: normal;\n  font-size: 22px;\n  margin: 0;\n}\n.section-blog .row-wrapper .col-right .content-wrapper .blog-header .blog-title {\n  font-family: \"CrimsonText\";\n  font-size: 35px;\n  margin: 0;\n  line-height: 1em;\n}\n.section-blog .row-wrapper .col-right .content-wrapper .blog-header .blog-details {\n  margin: 0;\n}\n.section-blog .row-wrapper .col-right .content-wrapper .blog-content {\n  padding: 17px 0px;\n}\n.section-blog .row-wrapper .col-right .content-wrapper .blog-content p {\n  line-height: 1.3em;\n  margin: 0;\n}\n.section-blog .row-wrapper .col-right .content-wrapper .blog-footer .read-more-wrapper a {\n  text-transform: uppercase;\n  font-weight: bold;\n  text-decoration: none;\n  color: black;\n  display: flex;\n  align-items: center;\n}\n.section-blog .row-wrapper .col-right .content-wrapper .blog-footer .read-more-wrapper a svg {\n  height: 18px;\n}\n\n.main-footer {\n  background-color: #222;\n}\n.main-footer * {\n  color: #9B9B9B;\n  text-decoration: none;\n}\n.main-footer .row-wrapper {\n  padding: 50px 0px 75px 0px;\n  gap: 70px;\n  grid-template-columns: max-content max-content 1fr;\n  margin: 0 auto;\n  width: 55%;\n  align-items: center;\n  justify-items: center;\n}\n.main-footer .row-wrapper .col-footer-logo .logo-wrapper {\n  width: 75px;\n}\n.main-footer .row-wrapper .col-footer-logo .logo-wrapper img {\n  -o-object-fit: contain;\n     object-fit: contain;\n  filter: grayscale(1);\n}\n.main-footer .row-wrapper .col-footer-details .social-icon-wrapper svg {\n  width: 17px;\n  height: 17px;\n}\n.main-footer .row-wrapper .col-newsletter .newsletter-wrapper {\n  display: flex;\n}\n.main-footer .row-wrapper .col-newsletter .newsletter-wrapper input#email {\n  border: 1px solid #9b9b9b;\n  background: transparent;\n  padding: 10px 15px;\n  width: 200px;\n  flex-basis: 200px;\n  border-right: none;\n  outline: none;\n  font-family: \"BarlowCondensed\";\n  font-size: 16px;\n}\n.main-footer .row-wrapper .col-newsletter .newsletter-wrapper .btn-subs {\n  background: #ECB855;\n  color: white;\n  text-transform: uppercase;\n  font-family: \"BarlowCondensed\";\n  font-size: 16px;\n  border: none;\n  padding: 10px 15px;\n}\n\n@media screen and (max-width: 980px) {\n  .section-blog .row-wrapper {\n    width: 90%;\n  }\n  .main-footer .row-wrapper {\n    width: 90%;\n    gap: 50px;\n  }\n  .main-footer .row-wrapper input#email {\n    width: 100% !important;\n    flex-basis: unset;\n  }\n}\n@media screen and (max-width: 420px) {\n  .main-header .row-wrapper {\n    flex-direction: column;\n    gap: 15px;\n  }\n  .main-header .row-wrapper .main-menu {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n  }\n  .main-header .row-wrapper .main-menu .search-wrapper {\n    grid-column: 1/span 5;\n    justify-content: center;\n  }\n  .section-banner-home {\n    padding-top: 200px;\n    margin-top: -200px;\n  }\n  .section-menu .row-wrapper .row-content .section-content {\n    width: 90%;\n  }\n  .section-menu .row-wrapper .row-menu .big-menu-wrapper {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .section-menu .row-wrapper .row-menu .big-menu-wrapper .menu-card {\n    height: 400px;\n  }\n  .section-menu .row-wrapper .row-menu .big-menu-wrapper .menu-card .card-title {\n    height: 400px;\n  }\n  .section-extraction .row-wrapper .section-title {\n    width: 100%;\n  }\n  .section-extraction .row-wrapper .section-content {\n    width: 100%;\n  }\n  .section-benefit .row-wrapper .row-3-col {\n    flex-direction: column;\n    gap: 35px;\n  }\n  .section-blog .row-wrapper {\n    width: 90%;\n    grid-template-columns: 1fr;\n  }\n  .main-footer .row-wrapper {\n    display: flex;\n    flex-direction: column;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .main-footer .row-wrapper {\n    width: 90%;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('header'); //declare the header
  var headerHeight = header.clientHeight;
  var scrollThreshold = window.innerHeight;

  // Function to handle scroll events
  var handleScroll = function handleScroll() {
    var scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > scrollThreshold) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  };

  // Attach scroll event listener
  window.addEventListener('scroll', handleScroll);
});
$(document).ready(function () {
  //   Search animation handler - Just to prove that I usually use jQuery
  $('.icon-search').click(function () {
    // $('.input-reactive').toggleClass('input-initial-state');
    $('.input-reactive').toggleClass('input-active-state');
    $('.search-wrapper').toggleClass('active-state');
  });
});
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./css/style.scss ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./style.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[3]!./css/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});
})();

/******/ })()
;