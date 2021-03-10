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

/***/ "./build/js/classes/LocalStorage.js":
/*!******************************************!*\
  !*** ./build/js/classes/LocalStorage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar LocalStorage = /*#__PURE__*/function () {\n  function LocalStorage() {\n    _classCallCheck(this, LocalStorage);\n  }\n\n  _createClass(LocalStorage, [{\n    key: \"addRegister\",\n    value: function addRegister(id, data) {\n      localStorage.setItem(id, JSON.stringify(data));\n      return id;\n    }\n  }]);\n\n  return LocalStorage;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocalStorage);\n\n//# sourceURL=webpack://rasks-test/./build/js/classes/LocalStorage.js?");

/***/ }),

/***/ "./build/js/classes/User.js":
/*!**********************************!*\
  !*** ./build/js/classes/User.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _LocalStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocalStorage */ \"./build/js/classes/LocalStorage.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar User = /*#__PURE__*/function () {\n  function User() {\n    _classCallCheck(this, User);\n\n    this.id = \"\";\n    this.nomeCompleto = \"\";\n    this.cpf = \"\";\n    this.telefone = \"\";\n    this.email = \"\";\n    this.localstorage = new _LocalStorage__WEBPACK_IMPORTED_MODULE_0__.default();\n  }\n\n  _createClass(User, [{\n    key: \"list\",\n    value: function list(_ref) {\n      var idUser = _ref.idUser;\n    }\n  }, {\n    key: \"listAll\",\n    value: function listAll() {}\n  }, {\n    key: \"criar\",\n    value: function criar(_ref2) {\n      var id = _ref2.id,\n          nomeCompleto = _ref2.nomeCompleto,\n          email = _ref2.email,\n          cpf = _ref2.cpf,\n          telefone = _ref2.telefone;\n      var data = {\n        \"nomeCompleto\": this.setNomeCompleto(nomeCompleto),\n        \"email\": this.setEmail(email),\n        \"cpf\": this.setCpf(cpf),\n        \"telefone\": this.setTelefone(telefone)\n      };\n      return this.localstorage.addRegister(this.setId(id), data);\n    }\n  }, {\n    key: \"editar\",\n    value: function editar() {}\n  }, {\n    key: \"excluir\",\n    value: function excluir() {}\n  }, {\n    key: \"setId\",\n    value: function setId(id) {\n      return this.id = id;\n    }\n  }, {\n    key: \"setNomeCompleto\",\n    value: function setNomeCompleto(nomeCompleto) {\n      return this.nomeCompleto = nomeCompleto;\n    }\n  }, {\n    key: \"setCpf\",\n    value: function setCpf(cpf) {\n      return this.cpf = cpf;\n    }\n  }, {\n    key: \"setTelefone\",\n    value: function setTelefone(telefone) {\n      return this.telefone = telefone;\n    }\n  }, {\n    key: \"setEmail\",\n    value: function setEmail(email) {\n      return this.email = email;\n    }\n  }]);\n\n  return User;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n\n//# sourceURL=webpack://rasks-test/./build/js/classes/User.js?");

/***/ }),

/***/ "./build/js/index.js":
/*!***************************!*\
  !*** ./build/js/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.js */ \"./build/js/user.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {});\n\n//# sourceURL=webpack://rasks-test/./build/js/index.js?");

/***/ }),

/***/ "./build/js/messages.js":
/*!******************************!*\
  !*** ./build/js/messages.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inputEmptyMessage\": () => (/* binding */ inputEmptyMessage),\n/* harmony export */   \"inputInvalidEmail\": () => (/* binding */ inputInvalidEmail),\n/* harmony export */   \"inputInvalidCPF\": () => (/* binding */ inputInvalidCPF)\n/* harmony export */ });\nvar inputEmptyMessage = \"Campo deve conter 3 caracteres ou mais\";\nvar inputInvalidEmail = \"Email invalido, o formato deve ser similar ao seguinte pedro.santos@gmail.com\";\nvar inputInvalidCPF = \"CPF invalido, use o seguinte formato 222.222.222-22\";\n\n\n//# sourceURL=webpack://rasks-test/./build/js/messages.js?");

/***/ }),

/***/ "./build/js/user.js":
/*!**************************!*\
  !*** ./build/js/user.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleBtnCadastrar\": () => (/* binding */ handleBtnCadastrar),\n/* harmony export */   \"save\": () => (/* binding */ save),\n/* harmony export */   \"haldleForm\": () => (/* binding */ haldleForm)\n/* harmony export */ });\n/* harmony import */ var _classes_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/User */ \"./build/js/classes/User.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./build/js/utils.js\");\n/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages */ \"./build/js/messages.js\");\n\n\n\n\nvar save = function save() {\n  var data = haldleForm();\n\n  if (!data) {\n    return false;\n  }\n\n  var id = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.initializeLocalStorage)();\n  data['id'] = id;\n  var user = new _classes_User__WEBPACK_IMPORTED_MODULE_0__.default();\n  user.criar(data);\n}; // handle events\n\n\nvar haldleForm = function haldleForm() {\n  var formUser = document.querySelector('.js-form');\n  formUser.addEventListener('submit', function (event) {\n    return event.preventDefault();\n  });\n\n  if (nameEmpty() || emailEmpty() || cpfEmpty() || telefoneEmpty()) {\n    return;\n  }\n\n  return {\n    \"nomeCompleto\": formUser.nomeCompleto.value,\n    \"email\": formUser.email.value,\n    \"cpf\": formUser.cpf.value,\n    \"telefone\": formUser.telefone.value\n  };\n};\n\nvar handleBtnCadastrar = function handleBtnCadastrar() {\n  var btnCadastrar = document.querySelector('.js-cadastrar');\n\n  if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.checkPage)('pageUser')) {\n    return null;\n  }\n\n  btnCadastrar.addEventListener('click', function () {\n    save();\n  });\n}; // validate inputs\n\n\nvar nameEmpty = function nameEmpty() {\n  var formUser = document.querySelector('.js-form');\n  var nomeCompleto = formUser.nomeCompleto;\n\n  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.inputEmpty)(nomeCompleto)) {\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.addMessageError)(nomeCompleto, \"input--empty\", _messages__WEBPACK_IMPORTED_MODULE_2__.inputEmptyMessage);\n    return true;\n  }\n\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.removeMessageError)(nomeCompleto, \"input--empty\");\n  return false;\n};\n\nvar emailEmpty = function emailEmpty() {\n  var formUser = document.querySelector('.js-form');\n  var email = formUser.email;\n\n  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.inputEmpty)(email)) {\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.addMessageError)(email, \"input--empty\", _messages__WEBPACK_IMPORTED_MODULE_2__.inputEmptyMessage);\n    return true;\n  }\n\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.removeMessageError)(email, \"input--empty\");\n  return false;\n};\n\nvar cpfEmpty = function cpfEmpty() {\n  var formUser = document.querySelector('.js-form');\n  var cpf = formUser.cpf;\n\n  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.inputEmpty)(cpf)) {\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.addMessageError)(cpf, \"input--empty\", _messages__WEBPACK_IMPORTED_MODULE_2__.inputEmptyMessage);\n    return true;\n  }\n\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.removeMessageError)(cpf, \"input--empty\");\n  return false;\n};\n\nvar telefoneEmpty = function telefoneEmpty() {\n  var formUser = document.querySelector('.js-form');\n  var telefone = formUser.telefone;\n\n  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.inputEmpty)(telefone)) {\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.addMessageError)(telefone, \"input--empty\", _messages__WEBPACK_IMPORTED_MODULE_2__.inputEmptyMessage);\n    return true;\n  }\n\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.removeMessageError)(telefone, \"input--empty\");\n  return false;\n};\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  handleBtnCadastrar();\n});\n\n\n//# sourceURL=webpack://rasks-test/./build/js/user.js?");

/***/ }),

/***/ "./build/js/utils.js":
/*!***************************!*\
  !*** ./build/js/utils.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkPage\": () => (/* binding */ checkPage),\n/* harmony export */   \"initializeLocalStorage\": () => (/* binding */ initializeLocalStorage),\n/* harmony export */   \"inputEmpty\": () => (/* binding */ inputEmpty),\n/* harmony export */   \"valideEmail\": () => (/* binding */ valideEmail),\n/* harmony export */   \"valideCPF\": () => (/* binding */ valideCPF),\n/* harmony export */   \"addMessageError\": () => (/* binding */ addMessageError),\n/* harmony export */   \"removeMessageError\": () => (/* binding */ removeMessageError)\n/* harmony export */ });\nvar checkPage = function checkPage(page) {\n  return document.body.id === page ? true : false;\n};\n\nvar initializeLocalStorage = function initializeLocalStorage() {\n  var lastInsertedUser = localStorage.getItem('lastInsertedUser');\n\n  if (!lastInsertedUser) {\n    localStorage.setItem('lastInsertedUser', '1');\n    return localStorage.getItem('lastInsertedUser');\n  }\n\n  lastInsertedUser++;\n  localStorage.setItem('lastInsertedUser', lastInsertedUser);\n  return localStorage.getItem('lastInsertedUser');\n};\n\nvar inputEmpty = function inputEmpty(input) {\n  return input.value.length < 3 ? true : false;\n};\n\nvar valideEmail = function valideEmail(input) {\n  var regex = /\\w@\\w*\\.\\w/;\n  var value = input.value;\n  return regex.test(value);\n};\n\nvar valideCPF = function valideCPF(input) {\n  var regex = /\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}/;\n  var value = input.value;\n  return regex.test(value);\n};\n\nvar removeMessageError = function removeMessageError(element, className) {\n  var elementParent = element.parentNode;\n\n  if (elementParent.querySelector('span')) {\n    elementParent.querySelector('span').remove();\n  }\n\n  elementParent.classList.remove(className);\n};\n\nvar addMessageError = function addMessageError(element, className, message) {\n  var messageHTML = document.createElement('span');\n  messageHTML.classList.add('message');\n  messageHTML.innerHTML = message;\n  var elementParent = element.parentNode;\n  removeMessageError(element, className);\n  elementParent.appendChild(messageHTML);\n  elementParent.classList.add(className);\n};\n\n\n\n//# sourceURL=webpack://rasks-test/./build/js/utils.js?");

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