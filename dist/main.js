/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Rubik/Rubik-VariableFont_wght.ttf */ \"./src/Rubik/Rubik-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! Rubik/static/Rubik-Medium.ttf */ \"./src/Rubik/static/Rubik-Medium.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! images/realistic-bg.png */ \"./src/images/realistic-bg.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: 'Rubik';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___})  format('truetype');\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  }\n\n  /* Css reset */\n\n  *, *::before, *::after {\n    box-sizing: border-box;\n   }\n   \n   * {\n    margin: 0;\n   padding: 0;\n   /* border: 1px solid red; */\n   }\n\n   \n   body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n   }\n   \n   img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n   }\n   \n   input, button, textarea, select {\n    font: inherit;\n   }\n   \n   p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n    text-align: center;\n   }\n   \n\nbody{\n    font-family: 'Rubik', Courier, monospace;\n    color: white;\n}\n\na{\n    text-decoration: none;\n\n}\n\n/* Styling */\n\n\nbody{\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n    background-size: cover;\n    background-attachment: fixed;\n    background-position: center center;\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    gap: 5vh;\n}\n\n.wrapper{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    \n}\n\n.wrapper::before{\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    opacity: 0.7;\n    z-index: -1;\n    background-color: black;\n}\n\nheader{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-bottom:2vh;\n    padding-top:2vh;\n}\n\n\nh1{\n    font-size: 3rem;\n}\n\nnav{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nnav > a{\n    font-size: 1.3rem;\n    color: white;\n    padding: 1.3rem;\n    border-bottom: 3px solid transparent;\n    position: relative;\n    bottom: 0px;\n    transition:0.5s;\n}\n\nnav > a:hover{\n    bottom: 5px;\n    cursor: pointer; \n}\n\nnav > a.active{\n    border-bottom: 3px solid white;\n    bottom: 5px; \n}\n\n/* Home styling */\n\n\n.index-main, .menu-main, .contact-main{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 5vh;\n    position: relative;\n    padding: 20px;\n    margin: 3vh 3vw;\n}\n\n.index-main::before, .menu-main::before, .contact-main::before{\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    opacity: 0.4;\n    z-index: -1;\n    background-color: black;\n}\n\n.index-main > h2{\n    font-size: 2rem;\n}\n.index-main > img{\n    max-width: 500px;\n    aspect-ratio: 1/1;\n    border-radius: 50%;\n}\n\n.index-p{\n    width: 60%;\n    font-weight: 100;\n}\n\n\n\n/* Menu styling */\n\n\n.menu-main{\n    gap: 8vh;\n}\n\n.menu-main h2{\n    font-size: 2.5rem;\n}\n\n.menu-main > div{\n    width: fit-content;\n    max-width: 60%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 5vh;\n    opacity: 0.7;\n    background-color: black;\n    padding: 4vh 4vw;\n    border-radius: 12px;\n}\n\n.menu-main > div:hover{\n    background-color: rgb(71, 66, 66);\n    transition:0.3s;\n}\n\n.menu-main h3{\n    font-size: 2rem;\n}\n\n.menu-main img{\n    max-width: 400px;\n    width: 80%;\n    aspect-ratio: 1/1;\n    border-radius: 12px;\n}\n\n.menu-main p{\n    font-size: 1.5rem;\n}\n\n\n\n/* Contact styling */\n\n.contact-main > img{\n    max-width: 80%;\n    height: auto;\n\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContactMain: () => (/* binding */ createContactMain)\n/* harmony export */ });\n/* harmony import */ var _images_restaurant_location_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/restaurant-location.png */ \"./src/images/restaurant-location.png\");\n\n\nfunction createContactMain(){\n    const divContent = document.querySelector(\"#content\")\n    const main = document.createElement(\"main\")\n    main.classList = \"contact-main\"\n    const phone = document.createElement(\"p\")\n    phone.textContent = \"📞 123456789\"\n    const address = document.createElement(\"p\")\n    address.textContent = \"🏠 Hollywood Boulevard 42, Los Angeles, USA\"\n    const img = document.createElement(\"img\")\n    img.src = _images_restaurant_location_png__WEBPACK_IMPORTED_MODULE_0__\n    \n    main.appendChild(phone)\n    main.appendChild(address)\n    main.appendChild(img)\n    divContent.appendChild(main)\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load.js */ \"./src/load.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n\n\n(0,_load_js__WEBPACK_IMPORTED_MODULE_1__.createHeader)()\n;(0,_load_js__WEBPACK_IMPORTED_MODULE_1__.createIndexMain)()\n\nconst divContent = document.querySelector(\"#content\")\n\n\nconst home = document.querySelector(\"#home\")\nhome.classList.add(\"active\")\nconsole.log(home.classList)\nconst menu = document.querySelector(\"#menu\")\nconst contact = document.querySelector(\"#contact\")\n\nfunction changeContent(event){\n    const currentMain = document.querySelector(\"main\")\n    const id = event.target.id\n    divContent.removeChild(currentMain)\n    if(id === \"menu\"){\n        if(home.classList.contains(\"active\") ){\n            home.classList.remove(\"active\")\n            home.addEventListener(\"click\", changeContent)\n        }\n        if(contact.classList.contains(\"active\")){\n            contact.classList.remove(\"active\")\n            contact.addEventListener(\"click\", changeContent)\n        }\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.createMenuMain)()\n    }\n    else if(id === \"contact\"){\n        if(home.classList.contains(\"active\")){\n            home.classList.remove(\"active\")\n            home.addEventListener(\"click\", changeContent)\n        }\n        if(menu.classList.contains(\"active\")){\n            menu.classList.remove(\"active\")\n            menu.addEventListener(\"click\", changeContent)\n        }\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.createContactMain)()\n    }\n    else if(id === \"home\"){\n        if(contact.classList.contains(\"active\")){\n            contact.classList.remove(\"active\")\n            contact.addEventListener(\"click\", changeContent)\n        }\n        if(menu.classList.contains(\"active\")){\n            menu.classList.remove(\"active\")\n            menu.addEventListener(\"click\", changeContent)\n        }\n        (0,_load_js__WEBPACK_IMPORTED_MODULE_1__.createIndexMain)()\n    }\n    event.target.classList.add(\"active\")\n    event.target.removeEventListener(\"click\", changeContent)\n}\n\nmenu.addEventListener(\"click\",changeContent)\ncontact.addEventListener(\"click\", changeContent)\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHeader: () => (/* binding */ createHeader),\n/* harmony export */   createIndexMain: () => (/* binding */ createIndexMain)\n/* harmony export */ });\n/* harmony import */ var _images_chef_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/chef.png */ \"./src/images/chef.png\");\n\n\n\nfunction createHeader(){\n    const divContent = document.querySelector(\"#content\")\n    const wrapper = document.createElement(\"div\")\n    wrapper.classList = \"wrapper\"\n    const header = document.createElement(\"header\")\n    const h1 = document.createElement(\"h1\")\n    h1.textContent = \"Galaxy Grill\"\n    header.appendChild(h1)\n    const nav = document.createElement(\"nav\")\n    const home = document.createElement(\"a\")\n    home.textContent = \"Home\"\n    home.id = \"home\"\n    const menu = document.createElement(\"a\")\n    menu.textContent = \"Menu\"\n    menu.id = \"menu\"\n    const contact = document.createElement(\"a\")\n    contact.textContent = \"Contact\"\n    contact.id = \"contact\"\n    nav.appendChild(home)\n    nav.appendChild(menu)\n    nav.appendChild(contact)\n    wrapper.appendChild(header)\n    wrapper.appendChild(nav)\n    divContent.appendChild(wrapper)\n}\n\n\nfunction createIndexMain(){\n    const divContent = document.querySelector(\"#content\")\n    const main = document.createElement(\"main\")\n    main.classList = \"index-main\"\n    const h2 = document.createElement(\"h2\")\n    h2.textContent = \"Embark on a Culinary Quest Across the Cosmos!\"\n    const img = document.createElement(\"img\")\n    img.src = _images_chef_png__WEBPACK_IMPORTED_MODULE_0__\n    const p = document.createElement(\"p\")\n    p.textContent = \"Welcome to Galaxy Grill – where starry flavors and galactic grills collide! Chef Zorg's zoomed in from Jupiter's diner scene to cook up some cosmic chow. Bite into a Meteor Meatloaf, sip on a starry Nebula Nectar, and top it off with a Supernova Sundae. Gear up, foodonauts – it's a flavor blast to the taste-budsphere!\"\n    p.classList = \"index-p\"\n    main.appendChild(h2)\n    main.appendChild(img)\n    main.appendChild(p)\n    divContent.appendChild(main)\n}\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenuMain: () => (/* binding */ createMenuMain)\n/* harmony export */ });\n/* harmony import */ var _images_meteor_metloaf_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/meteor-metloaf.png */ \"./src/images/meteor-metloaf.png\");\n/* harmony import */ var _images_cosmic_chicken_nuggets_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/cosmic-chicken-nuggets.png */ \"./src/images/cosmic-chicken-nuggets.png\");\n/* harmony import */ var _images_big_bang_burger_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/big-bang-burger.png */ \"./src/images/big-bang-burger.png\");\n/* harmony import */ var _images_nebula_nectar_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/nebula-nectar.png */ \"./src/images/nebula-nectar.png\");\n/* harmony import */ var _images_martian_margarita_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/martian-margarita.png */ \"./src/images/martian-margarita.png\");\n/* harmony import */ var _images_black_hole_smoothie_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/black-hole-smoothie.png */ \"./src/images/black-hole-smoothie.png\");\n/* harmony import */ var _images_supernova_sundae_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/supernova-sundae.png */ \"./src/images/supernova-sundae.png\");\n/* harmony import */ var _images_ufo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/ufo.png */ \"./src/images/ufo.png\");\n\n\n\n\n\n\n\n\n\n\nfunction createMenuMain() {\n    const divContent = document.querySelector(\"#content\")\n    const main = document.createElement(\"main\");\n    main.className = \"menu-main\";\n\n    const titles = [\"Galactic Grub\", \"Stellar Sips\", \"Dessert Constellations\"];\n    const items = [\n        [\n            { name: \"Meteor Meatloaf\", img: _images_meteor_metloaf_png__WEBPACK_IMPORTED_MODULE_0__, desc: \"A loaf of meat so good, it's out of this world! Served with a side of asteroid mashed potatoes.\" },\n            { name: \"Cosmic Chicken Nuggets\", img: _images_cosmic_chicken_nuggets_png__WEBPACK_IMPORTED_MODULE_1__, desc: \"These nuggets have been seasoned with our secret space spice and come with a dipping sauce made from the milk of the Milky Way.\" },\n            { name: \"Big Bang Burger\", img: _images_big_bang_burger_png__WEBPACK_IMPORTED_MODULE_2__ , desc: \"A burger so big, it caused a flavor explosion. Topped with a galaxy of cheese and a ring of onion.\" }\n        ],\n        [\n            { name: \"Nebula Nectar\", img: _images_nebula_nectar_png__WEBPACK_IMPORTED_MODULE_3__, desc: \"A cosmic concoction of fruit juices that looks like a swirling nebula in your glass.\" },\n            { name: \"Martian Margarita\", img: _images_martian_margarita_png__WEBPACK_IMPORTED_MODULE_4__, desc: \"A classic margarita with a twist of red Martian dust for that out-of-this-world flavor.\" },\n            { name: \"Black Hole Smoothie\", img: _images_black_hole_smoothie_png__WEBPACK_IMPORTED_MODULE_5__, desc: \"A dark, rich smoothie with a gravitational pull of flavors. It's impossible to escape its deliciousness.\" }\n        ],\n        [\n            { name: \"Supernova Sundae\", img: _images_supernova_sundae_png__WEBPACK_IMPORTED_MODULE_6__, desc: \"An explosion of ice cream, whipped cream, and star-shaped sprinkles.\" },\n            { name: \"UFO (Unbelievably Fantastic Oreo) Shake\", img: _images_ufo_png__WEBPACK_IMPORTED_MODULE_7__, desc: \"A milkshake with Oreos that's so mysteriously good, it must be from another galaxy.\" }\n        ]\n    ];\n\n    titles.forEach((title, index) => {\n        const h2 = document.createElement(\"h2\");\n        h2.textContent = title;\n        main.appendChild(h2);\n\n        items[index].forEach(item => {\n            const div = document.createElement(\"div\");\n\n            const h3 = document.createElement(\"h3\");\n            h3.textContent = item.name;\n            div.appendChild(h3);\n\n            const img = document.createElement(\"img\");\n            img.src = item.img;\n            img.alt = item.name;\n            div.appendChild(img);\n\n            const p = document.createElement(\"p\");\n            p.textContent = item.desc;\n            div.appendChild(p);\n\n            main.appendChild(div);\n        });\n    });\n\n    divContent.appendChild(main);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/Rubik/Rubik-VariableFont_wght.ttf":
/*!***********************************************!*\
  !*** ./src/Rubik/Rubik-VariableFont_wght.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3a4acc0356c6ea73f2c3.ttf\";\n\n//# sourceURL=webpack://restaurant/./src/Rubik/Rubik-VariableFont_wght.ttf?");

/***/ }),

/***/ "./src/Rubik/static/Rubik-Medium.ttf":
/*!*******************************************!*\
  !*** ./src/Rubik/static/Rubik-Medium.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0e121b4fa4d6e9bc5c69.ttf\";\n\n//# sourceURL=webpack://restaurant/./src/Rubik/static/Rubik-Medium.ttf?");

/***/ }),

/***/ "./src/images/big-bang-burger.png":
/*!****************************************!*\
  !*** ./src/images/big-bang-burger.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a4b62f40f81f46cc0da8.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/big-bang-burger.png?");

/***/ }),

/***/ "./src/images/black-hole-smoothie.png":
/*!********************************************!*\
  !*** ./src/images/black-hole-smoothie.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"13eb104454400a0e61d8.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/black-hole-smoothie.png?");

/***/ }),

/***/ "./src/images/chef.png":
/*!*****************************!*\
  !*** ./src/images/chef.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7fe2e409e6049afaf6be.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/chef.png?");

/***/ }),

/***/ "./src/images/cosmic-chicken-nuggets.png":
/*!***********************************************!*\
  !*** ./src/images/cosmic-chicken-nuggets.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3b57a3d7f462cff84c3f.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/cosmic-chicken-nuggets.png?");

/***/ }),

/***/ "./src/images/martian-margarita.png":
/*!******************************************!*\
  !*** ./src/images/martian-margarita.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dc880084573d4b926738.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/martian-margarita.png?");

/***/ }),

/***/ "./src/images/meteor-metloaf.png":
/*!***************************************!*\
  !*** ./src/images/meteor-metloaf.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9f5134dc4f0159aba333.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/meteor-metloaf.png?");

/***/ }),

/***/ "./src/images/nebula-nectar.png":
/*!**************************************!*\
  !*** ./src/images/nebula-nectar.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4e018068862847531aeb.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/nebula-nectar.png?");

/***/ }),

/***/ "./src/images/realistic-bg.png":
/*!*************************************!*\
  !*** ./src/images/realistic-bg.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d01adb1fcea56b744375.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/realistic-bg.png?");

/***/ }),

/***/ "./src/images/restaurant-location.png":
/*!********************************************!*\
  !*** ./src/images/restaurant-location.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5d4ead59a4044100f85f.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/restaurant-location.png?");

/***/ }),

/***/ "./src/images/supernova-sundae.png":
/*!*****************************************!*\
  !*** ./src/images/supernova-sundae.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b542363f073106cddbb3.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/supernova-sundae.png?");

/***/ }),

/***/ "./src/images/ufo.png":
/*!****************************!*\
  !*** ./src/images/ufo.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"02cdd67f9b07e9ca15fb.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/ufo.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;