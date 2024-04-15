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

/***/ "./src/chessBoard.js":
/*!***************************!*\
  !*** ./src/chessBoard.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass nodes {\n    constructor (x, y) {\n        this.xAxis = x\n        this.yAxis = y\n        this.above = null\n        this.below = null\n        this.right = null\n        this.left = null\n    }\n}\nclass chessBoard {\n    constructor () {\n        this.root = new nodes (0, 0)\n        this.buildChessBoard()\n    }\n    buildChessBoard () {\n        let start = this.root\n        while (start.xAxis <= 7) {\n            if (start.xAxis % 2 === 0) {\n                while (start.yAxis < 7) {\n                    let newY = start.yAxis + 1\n                    let prevNode = start\n                    start = new nodes(start.xAxis, newY)\n                    start.below = prevNode\n                    prevNode.above = start \n                }\n            }\n            else {\n                while (start.yAxis > 0) {\n                    let newY = start.yAxis - 1\n                    let prevNode = start\n                    start = new nodes (start.xAxis, newY)\n                    start.above = prevNode\n                    prevNode.below = start\n                }\n            }\n            let newX = start.xAxis + 1\n            let prevNode = start\n            start =  new nodes (newX, start.yAxis)\n            if (start.xAxis === 8){\n                break\n            }\n            prevNode.right = start\n            start.left = prevNode\n        }\n        start = this.root\n        while (start.xAxis <= 7) {\n            let currentNode\n            if (start.xAxis % 2 != 0) {\n                if (start.yAxis === 0) {\n                    currentNode = start.right\n                }\n                else {\n                    currentNode = start.below\n                }\n            }\n            else {\n                if (start.yAxis === 7) {\n                    currentNode = start.right\n                }\n                else {\n                    currentNode = start.above\n                }\n            }\n            while (currentNode.xAxis != (start.xAxis + 1)) {\n                while(currentNode.yAxis != start.yAxis) {\n                    if (start.xAxis === 7) {\n                        return\n                    }\n                    if (currentNode.xAxis % 2 === 0) {\n                        if (currentNode.yAxis != 7) {\n                            currentNode = currentNode.above\n                        }\n                        else {\n                            currentNode = currentNode.right\n                        }\n                    }\n                    else {\n                        if (currentNode.yAxis != 0) {\n                            currentNode = currentNode.below\n                        }\n                        else {\n                            currentNode = currentNode.right\n                        }\n                    }\n                }\n            }\n            currentNode.left = start\n            start.right = currentNode\n            if (start.xAxis %2 === 0) {\n                if (start.yAxis != 7) {\n                    start = start.above\n                }\n                else {\n                    start = start.right\n                }\n            }\n            else {\n                if (start.yAxis != 0) {\n                    start = start.below\n                }\n                else {\n                    start = start.right\n                }\n            }\n        }\n    }\n    find (start) {\n        let currentNode = this.root\n        let moveX = start[0]\n        let moveY = start[1]\n        while (currentNode.xAxis != start[0] && currentNode.yAxis != start[1]) {\n            if (start [0] > 0) {\n                currentNode = currentNode.right\n                moveX = moveX - 1\n            }\n            if (start[1] > 0) {\n                currentNode = currentNode.above\n                moveY = moveY - 1\n            }\n        }\n        return currentNode\n    }\n}\nlet newChessBoard = new chessBoard ()\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newChessBoard);\n\n//# sourceURL=webpack://knightstravails/./src/chessBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chessBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chessBoard */ \"./src/chessBoard.js\");\n\nconsole.log(_chessBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"].root)\nclass knight {\n    constructor (startPosition, endPosition) {\n        if (startPosition[0] > 0 && startPosition [0] < 8 && startPosition[1] > 0 && startPosition[1] < 8) {\n            this.start = startPosition\n        }\n        else {\n            console.log(\"invalid position\")\n        }\n        if (endPosition[0] > 0 && endPosition [0] < 8 && endPosition[1] > 0 && endPosition[1] < 8) {\n            this.end = endPosition\n        }\n        else {\n            console.log(\"invalid position\")\n        }\n        this.possibleMoves = [\n             [-2, 1],\n             [-1, 2],\n             [-2, -1],\n             [-1, -2],\n             [2, 1],\n             [1, 2],\n             [2, -1],\n             [1, -2],\n        ]\n        this.movesCount = this.moves()\n    }\n    movement (array, currentNode) {\n        let x = array[0]\n        let y = array[1]\n        while (x != 0) {\n            if (x > 0) {\n                if (currentNode.right === null) {\n                    return null\n                }\n                currentNode = currentNode.right\n                x = x -1\n            }\n            else {\n                if (currentNode.left === null) {\n                    return null\n                }\n                currentNode = currentNode.left\n                x = x + 1 \n            }\n        }\n        while (y != 0) {\n            if (y > 0) {\n                if (currentNode.above === null) {\n                    return null\n                }\n                currentNode = currentNode.above\n                y = y - 1\n            }\n            else {\n                if (currentNode.below === null) {\n                    return null\n                }\n                currentNode = currentNode.below\n                y = y + 1\n            }\n        }\n        return currentNode\n    }\n    moveKnight(currentNode, finishNode, i) {\n        if (currentNode === finishNode) {\n            this.movesCount = i\n            console.log(this.movesCount)\n            return\n        }\n        if (currentNode === null) {\n            this.moveKnight(_chessBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(this.start), finishNode, 0)\n        }\n        i = i + 1\n        let firstMove = Math.floor(Math.random()*8)\n        currentNode = this.movement(this.possibleMoves[firstMove], currentNode)\n        console.log(currentNode)\n        this.moveKnight(currentNode, finishNode, i)\n    }\n    moves () {\n        let startNode = _chessBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(this.start)\n        let finishNode = _chessBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(this.end)\n        let i = 0\n        let num = this.moveKnight(startNode, finishNode, i)\n        return num\n    }\n}\nlet currentKnight= new knight ([2, 2], [3, 3])\nconsole.log (currentKnight)\n\n//# sourceURL=webpack://knightstravails/./src/index.js?");

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