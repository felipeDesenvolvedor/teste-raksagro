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

/***/ "./build/js/classes/User.js":
/*!**********************************!*\
  !*** ./build/js/classes/User.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar User = /*#__PURE__*/function () {\n  function User() {\n    _classCallCheck(this, User);\n\n    this.id = \"\";\n    this.nomeCompleto = \"\";\n    this.cpf = \"\";\n    this.telefone = \"\";\n    this.email = \"\";\n  }\n\n  _createClass(User, [{\n    key: \"list\",\n    value: function list(_ref) {\n      var idUser = _ref.idUser;\n    }\n  }, {\n    key: \"listAll\",\n    value: function listAll() {}\n  }, {\n    key: \"criar\",\n    value: function criar(_ref2) {\n      var nomeCompleto = _ref2.nomeCompleto,\n          cpf = _ref2.cpf,\n          telefone = _ref2.telefone,\n          email = _ref2.email;\n      var id = parseInt(this.id) + 1;\n      this.id = id.toString();\n      console.log(this.id);\n    }\n  }, {\n    key: \"editar\",\n    value: function editar() {}\n  }, {\n    key: \"excluir\",\n    value: function excluir() {}\n  }]);\n\n  return User;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n\n//# sourceURL=webpack://rasks-test/./build/js/classes/User.js?");

/***/ }),

/***/ "./build/js/index.js":
/*!***************************!*\
  !*** ./build/js/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.js */ \"./build/js/user.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {});\n\n//# sourceURL=webpack://rasks-test/./build/js/index.js?");

/***/ }),

/***/ "./build/js/user.js":
/*!**************************!*\
  !*** ./build/js/user.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeInsertedUser\": () => (/* binding */ initializeInsertedUser),\n/* harmony export */   \"salve\": () => (/* binding */ salve)\n/* harmony export */ });\n/* harmony import */ var _classes_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/User */ \"./build/js/classes/User.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./build/js/utils.js\");\n\n\n\nvar initializeInsertedUser = function initializeInsertedUser() {\n  if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.checkPage)('pageUser')) {\n    return false;\n  }\n\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.initializeLocalStorage)();\n  return true;\n};\n\nvar salve = function salve() {\n  var formUser = document.querySelector('.js-form'); // js-cadastrar\n};\n\ndocument.addEventListener('DOMContentLoaded', function () {});\n\n\n//# sourceURL=webpack://rasks-test/./build/js/user.js?");

/***/ }),

/***/ "./build/js/utils.js":
/*!***************************!*\
  !*** ./build/js/utils.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkPage\": () => (/* binding */ checkPage),\n/* harmony export */   \"initializeLocalStorage\": () => (/* binding */ initializeLocalStorage)\n/* harmony export */ });\nvar checkPage = function checkPage(page) {\n  return document.body.id === page ? true : false;\n};\n\nvar initializeLocalStorage = function initializeLocalStorage() {\n  var lastInsertedUser = localStorage.getItem('lastInsertedUser');\n\n  if (!lastInsertedUser) {\n    localStorage.setItem('lastInsertedUser', '1');\n    return localStorage.getItem('lastInsertedUser');\n  }\n\n  lastInsertedUser++;\n  localStorage.setItem('lastInsertedUser', lastInsertedUser);\n  return localStorage.getItem('lastInsertedUser');\n};\n\n\n\n//# sourceURL=webpack://rasks-test/./build/js/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./build/js/index.js");
/******/ 	
/******/ })()
;