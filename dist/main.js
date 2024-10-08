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

/***/ "./src/boards.js":
/*!***********************!*\
  !*** ./src/boards.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createEnemyBoard: () => (/* binding */ createEnemyBoard),\n/* harmony export */   createPlayerBoard: () => (/* binding */ createPlayerBoard)\n/* harmony export */ });\nfunction createPlayerBoard(){\n    let playerBoard = document.getElementById('player-board');\n    for(let i = 0; i < 100; i++){\n        const cell = document.createElement('div');\n        cell.className = 'cell';\n        cell.id = `playerCell${i}`;\n        playerBoard.appendChild(cell);\n    }\n}\n\nfunction createEnemyBoard(){\n    let enemyBoard = document.getElementById('enemy-board');\n    for(let i = 0; i < 100; i++){\n        const cell = document.createElement('div');\n        cell.className = 'cell';\n        cell.id = `enemyCell${i}`;\n        enemyBoard.appendChild(cell); \n    }\n}\n\n\n\n\n//# sourceURL=webpack://battleship-2/./src/boards.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ \"./src/ships.js\");\n\n\nfunction runGame() {\n    // Initialize ship objects\n    const ship1 = new _ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1, 0, false);\n    const ship2 = new _ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2, 0, false);\n    const ship3 = new _ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, 0, false);\n    const ship4 = new _ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4, 0, false);\n    const ship5 = new _ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5, 0, false);\n\n    \n    const ships = document.getElementsByClassName('ships')\n\n    Array.from(ships).forEach(ship => {\n        ship.setAttribute('draggable', true)\n\n        ship.addEventListener('dragstart', (e) => {\n        e.dataTransfer.setData('text/plain', e.target.id);\n        setTimeout(() => {\n            ship.style.display = 'none'\n        }, 0)\n        });\n        ship.addEventListener('dragend', () => {\n            ship.style.display = 'block'\n        })\n    })\n    \n\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (runGame);\n\n//# sourceURL=webpack://battleship-2/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ \"./src/ships.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _boards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boards */ \"./src/boards.js\");\n\n\n\n\n(0,_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_boards__WEBPACK_IMPORTED_MODULE_2__.createEnemyBoard)();\n(0,_boards__WEBPACK_IMPORTED_MODULE_2__.createPlayerBoard)();\n\n\n\n//# sourceURL=webpack://battleship-2/./src/index.js?");

/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship{\n    constructor(size, hits, isSunk){\n        this.size = size\n        this.hits = hits\n        this.isSunk = isSunk\n    }\n}\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship-2/./src/ships.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;