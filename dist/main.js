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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  color: #7f8081;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Open Sans', sans-serif;\\r\\n  font-weight: 300;\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  background-color: white;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n  overflow-x: hidden;\\r\\n  max-width: 55vw;\\r\\n  box-shadow: 0 8px 50px rgb(226, 219, 226);\\r\\n  margin: auto;\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  align-content: center;\\r\\n  padding: 20px;\\r\\n  border: 1px solid gainsboro;\\r\\n  color: #545862;\\r\\n}\\r\\n\\r\\n.sync {\\r\\n  transform: rotate(90deg);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  align-content: center;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.taskadder {\\r\\n  width: 100%;\\r\\n  border: none;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.enter-icon {\\r\\n  font-size: 20px;\\r\\n  font-weight: bold;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\nli {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  align-content: center;\\r\\n  border-top: 1px solid gainsboro;\\r\\n  border-bottom: 1px solid gainsboro;\\r\\n  padding: 20px;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.checkbox {\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n  margin: 10px;\\r\\n}\\r\\n\\r\\nli p {\\r\\n  width: 100%;\\r\\n  margin-left: 5px;\\r\\n}\\r\\n\\r\\n.draggable.dragging {\\r\\n  opacity: 0.1;\\r\\n  background-color: #7f8081;\\r\\n}\\r\\n\\r\\n.drag-btn {\\r\\n  cursor: move;\\r\\n}\\r\\n\\r\\n.trash-btn {\\r\\n  cursor: pointer;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.editing {\\r\\n  background-color: rgb(136, 241, 198);\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  width: 100%;\\r\\n  height: 10vh;\\r\\n  border: none;\\r\\n  font-size: 20px;\\r\\n  cursor: pointer;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://To-Do-List-Project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = []; // return the list of modules as css string\r\n\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = cssWithMappingToString(item);\r\n\r\n      if (item[2]) {\r\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n      }\r\n\r\n      return content;\r\n    }).join(\"\");\r\n  }; // import a list of modules into the list\r\n  // eslint-disable-next-line func-names\r\n\r\n\r\n  list.i = function (modules, mediaQuery, dedupe) {\r\n    if (typeof modules === \"string\") {\r\n      // eslint-disable-next-line no-param-reassign\r\n      modules = [[null, modules, \"\"]];\r\n    }\r\n\r\n    var alreadyImportedModules = {};\r\n\r\n    if (dedupe) {\r\n      for (var i = 0; i < this.length; i++) {\r\n        // eslint-disable-next-line prefer-destructuring\r\n        var id = this[i][0];\r\n\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n\r\n    for (var _i = 0; _i < modules.length; _i++) {\r\n      var item = [].concat(modules[_i]);\r\n\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        // eslint-disable-next-line no-continue\r\n        continue;\r\n      }\r\n\r\n      if (mediaQuery) {\r\n        if (!item[2]) {\r\n          item[2] = mediaQuery;\r\n        } else {\r\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n        }\r\n      }\r\n\r\n      list.push(item);\r\n    }\r\n  };\r\n\r\n  return list;\r\n};\n\n//# sourceURL=webpack://To-Do-List-Project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://To-Do-List-Project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar stylesInDom = [];\r\n\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n\r\n  for (var i = 0; i < stylesInDom.length; i++) {\r\n    if (stylesInDom[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n\r\n  return result;\r\n}\r\n\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var index = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3]\r\n    };\r\n\r\n    if (index !== -1) {\r\n      stylesInDom[index].references++;\r\n      stylesInDom[index].updater(obj);\r\n    } else {\r\n      stylesInDom.push({\r\n        identifier: identifier,\r\n        updater: addStyle(obj, options),\r\n        references: 1\r\n      });\r\n    }\r\n\r\n    identifiers.push(identifier);\r\n  }\r\n\r\n  return identifiers;\r\n}\r\n\r\nfunction addStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n  return function updateStyle(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\r\n        return;\r\n      }\r\n\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n}\r\n\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDom[index].references--;\r\n    }\r\n\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n\r\n      var _index = getIndexByIdentifier(_identifier);\r\n\r\n      if (stylesInDom[_index].references === 0) {\r\n        stylesInDom[_index].updater();\r\n\r\n        stylesInDom.splice(_index, 1);\r\n      }\r\n    }\r\n\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack://To-Do-List-Project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar memo = {};\r\n/* istanbul ignore next  */\r\n\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\r\n\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n\r\n    memo[target] = styleTarget;\r\n  }\r\n\r\n  return memo[target];\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n\r\n  target.appendChild(style);\r\n}\r\n\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://To-Do-List-Project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var style = document.createElement(\"style\");\r\n  options.setAttributes(style, options.attributes);\r\n  options.insert(style);\r\n  return style;\r\n}\r\n\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://To-Do-List-Project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(style) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n\r\n  if (nonce) {\r\n    style.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\n\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://To-Do-List-Project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(style, options, obj) {\r\n  var css = obj.css;\r\n  var media = obj.media;\r\n  var sourceMap = obj.sourceMap;\r\n\r\n  if (media) {\r\n    style.setAttribute(\"media\", media);\r\n  } else {\r\n    style.removeAttribute(\"media\");\r\n  }\r\n\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  } // For old IE\r\n\r\n  /* istanbul ignore if  */\r\n\r\n\r\n  options.styleTagTransform(css, style);\r\n}\r\n\r\nfunction removeStyleElement(style) {\r\n  // istanbul ignore if\r\n  if (style.parentNode === null) {\r\n    return false;\r\n  }\r\n\r\n  style.parentNode.removeChild(style);\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction domAPI(options) {\r\n  var style = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(style, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(style);\r\n    }\r\n  };\r\n}\r\n\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://To-Do-List-Project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, style) {\r\n  if (style.styleSheet) {\r\n    style.styleSheet.cssText = css;\r\n  } else {\r\n    while (style.firstChild) {\r\n      style.removeChild(style.firstChild);\r\n    }\r\n\r\n    style.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\n\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://To-Do-List-Project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/drag.js":
/*!*********************!*\
  !*** ./src/drag.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dragndrop\": () => (/* binding */ dragndrop),\n/* harmony export */   \"mousedown\": () => (/* binding */ mousedown)\n/* harmony export */ });\nfunction dragndrop(arr) {\n  arr.forEach((element) => {\n    const task = document.getElementById(element.index);\n    task.addEventListener('dragstart', (event) => {\n      event.dataTransfer.setData('index', element.index);\n    });\n    task.addEventListener('drop', (event) => {\n      const draggedIndex = event.dataTransfer.getData('index');\n      const dropIndex = element.index;\n      const dragged = arr[draggedIndex];\n      const drop = arr[dropIndex];\n      // swap\n      arr[draggedIndex] = drop;\n      arr[dropIndex] = dragged;\n      // Update indexes\n      dragged.index = dropIndex;\n      drop.index = draggedIndex;\n      task.setAttribute('draggable', false);\n      window.localStorage.setItem('tasklist', JSON.stringify(arr));\n      window.location.reload();\n    });\n    task.addEventListener('dragover', (event) => {\n      event.preventDefault();\n    });\n  });\n}\n\nfunction mousedown(element) {\n  const parent = element.parentElement;\n  element.addEventListener('mousedown', () => {\n    parent.setAttribute('draggable', true);\n  });\n}\n\n\n//# sourceURL=webpack://To-Do-List-Project/./src/drag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _drag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag */ \"./src/drag.js\");\n/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status */ \"./src/status.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n// import _ from 'lodash';\n\n\n\n\n\nconst form = document.getElementById('form');\nconst taskinput = document.querySelector('.taskadder');\nconst sync = document.querySelector('.sync');\nconst entericon = document.querySelector('.enter-icon');\nconst deletecompleted = document.getElementById('delcompleted');\nconst list = [];\nlet displayedList;\n\nconst todoList = (arr) => {\n  arr.forEach((element) => {\n    const duties = document.getElementById('duties');\n    // Create task li //\n    duties\n      .appendChild(document.createElement('li'))\n      .setAttribute('id', element.index);\n    const task = document.getElementById(element.index);\n    task.classList.add('task', 'draggable');\n    // Create checkbox //\n    task\n      .appendChild(document.createElement('input'))\n      .setAttribute('id', `${element.index}-checkbox`);\n    const checkbox = document.getElementById(`${element.index}-checkbox`);\n    checkbox.setAttribute('type', 'checkbox');\n    checkbox.classList.add('checkbox');\n    // Create description //\n    task\n      .appendChild(document.createElement('p'))\n      .setAttribute('id', `${element.index}-description`);\n    const description = document.getElementById(`${element.index}-description`);\n    description.classList.add('description');\n    description.innerText = element.description;\n    // Create DragBtn //\n    task\n      .appendChild(document.createElement('i'))\n      .setAttribute('id', `${element.index}-drag`);\n    const dragBtn = document.getElementById(`${element.index}-drag`);\n    dragBtn.classList.add('fas', 'fa-ellipsis-v', 'drag-btn');\n    // create trashcan //\n    task\n      .appendChild(document.createElement('i'))\n      .setAttribute('id', `${element.index}-trash`);\n    const trashBtn = document.getElementById(`${element.index}-trash`);\n    trashBtn.classList.add('far', 'fa-trash-alt', 'trash-btn');\n    // Create add event listeners //\n    (0,_drag__WEBPACK_IMPORTED_MODULE_1__.mousedown)(dragBtn);\n  });\n  (0,_drag__WEBPACK_IMPORTED_MODULE_1__.dragndrop)(arr);\n  (0,_status__WEBPACK_IMPORTED_MODULE_2__.status)(arr);\n  (0,_status__WEBPACK_IMPORTED_MODULE_2__.prepopstatus)(arr);\n  (0,_todo__WEBPACK_IMPORTED_MODULE_3__.edit)(arr);\n  (0,_todo__WEBPACK_IMPORTED_MODULE_3__.removetask)(arr);\n};\n\nconst retrieve = () => {\n  if (JSON.parse(localStorage.getItem('tasklist'))) {\n    displayedList = JSON.parse(localStorage.getItem('tasklist'));\n    todoList(displayedList);\n  } else {\n    displayedList = list;\n    todoList(displayedList);\n  }\n};\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  if (taskinput.value !== '') {\n    const duty = new _todo__WEBPACK_IMPORTED_MODULE_3__.Duty(taskinput.value);\n    duty.push(displayedList);\n  }\n});\n\nentericon.addEventListener('click', (e) => {\n  e.preventDefault();\n  if (taskinput.value !== '') {\n    const duty = new _todo__WEBPACK_IMPORTED_MODULE_3__.Duty(taskinput.value);\n    duty.push(displayedList);\n  }\n});\n\ndeletecompleted.addEventListener('click', (e) => {\n  e.preventDefault();\n  (0,_todo__WEBPACK_IMPORTED_MODULE_3__.removecompleted)(displayedList);\n});\n\nsync.addEventListener('click', (e) => {\n  e.preventDefault();\n  (0,_todo__WEBPACK_IMPORTED_MODULE_3__.removeAll)(displayedList);\n});\n\ndocument.addEventListener('load', retrieve());\n\n//# sourceURL=webpack://To-Do-List-Project/./src/index.js?");

/***/ }),

/***/ "./src/status.js":
/*!***********************!*\
  !*** ./src/status.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"status\": () => (/* binding */ status),\n/* harmony export */   \"prepopstatus\": () => (/* binding */ prepopstatus)\n/* harmony export */ });\nfunction status(arr) {\n  arr.forEach((element) => {\n    const checkbox = document.getElementById(`${element.index}-checkbox`);\n    checkbox.addEventListener('change', () => {\n      if (checkbox.checked) {\n        element.completed = true;\n        window.localStorage.setItem('tasklist', JSON.stringify(arr));\n      } else {\n        element.completed = false;\n        window.localStorage.setItem('tasklist', JSON.stringify(arr));\n      }\n    });\n  });\n}\n\nfunction prepopstatus(arr) {\n  arr.forEach((element) => {\n    const checkbox = document.getElementById(`${element.index}-checkbox`);\n    if (element.completed === true) {\n      checkbox.checked = true;\n    } else {\n      checkbox.checked = false;\n    }\n  });\n}\n\n\n//# sourceURL=webpack://To-Do-List-Project/./src/status.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Duty\": () => (/* binding */ Duty),\n/* harmony export */   \"removecompleted\": () => (/* binding */ removecompleted),\n/* harmony export */   \"removeAll\": () => (/* binding */ removeAll),\n/* harmony export */   \"edit\": () => (/* binding */ edit),\n/* harmony export */   \"removetask\": () => (/* binding */ removetask)\n/* harmony export */ });\nclass Duty {\n  constructor(description) {\n    this.description = description;\n    this.completed = false;\n    this.index = 0;\n  }\n\n  push(arr) {\n    this.index = arr.length;\n    arr.push(this);\n    window.localStorage.setItem('tasklist', JSON.stringify(arr));\n    window.location.reload();\n  }\n}\n\nfunction removecompleted(arr) {\n  const todelete = [];\n  arr.forEach((element) => {\n    if (element.completed === true) {\n      todelete.push(element);\n      const filteredArray = arr.filter((item) => !todelete.includes(item));\n      filteredArray.forEach((element) => {\n        element.index = filteredArray.indexOf(element);\n      });\n      window.localStorage.setItem('tasklist', JSON.stringify(filteredArray));\n      window.location.reload();\n    }\n  });\n}\n\nfunction removeAll(arr) {\n  arr = [];\n  window.localStorage.setItem('tasklist', JSON.stringify(arr));\n  window.location.reload();\n}\n\nfunction edit(arr) {\n  arr.forEach((element) => {\n    const description = document.getElementById(`${element.index}-description`);\n    const dragBtn = document.getElementById(`${element.index}-drag`);\n    const trashBtn = document.getElementById(`${element.index}-trash`);\n    description.addEventListener('click', () => {\n      description.setAttribute('contenteditable', true);\n      description.classList.add('editing');\n      dragBtn.style.display = 'none';\n      trashBtn.style.display = 'block';\n    });\n    document.addEventListener('dblclick', () => {\n      description.setAttribute('contenteditable', false);\n      description.classList.remove('editing');\n      dragBtn.style.display = 'block';\n      trashBtn.style.display = 'none';\n      element.description = description.innerHTML;\n      window.localStorage.setItem('tasklist', JSON.stringify(arr));\n      window.location.reload();\n    });\n  });\n}\n\nfunction removetask(arr) {\n  arr.forEach((element) => {\n    const trashBtn = document.getElementById(`${element.index}-trash`);\n    const todelete = [];\n    trashBtn.addEventListener('click', () => {\n      todelete.push(element);\n      const filteredArray = arr.filter((item) => !todelete.includes(item));\n      filteredArray.forEach((element) => {\n        element.index = filteredArray.indexOf(element);\n      });\n      window.localStorage.setItem('tasklist', JSON.stringify(filteredArray));\n      window.location.reload();\n    });\n  });\n}\n\n\n//# sourceURL=webpack://To-Do-List-Project/./src/todo.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;