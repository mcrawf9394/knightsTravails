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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass nodes {\n    constructor (x, y) {\n        this.xAxis = x\n        this.yAxis = y\n        this.next = null\n        this.prev = null\n        this.UUR = null\n        this.URR = null\n        this.ULL = null\n        this.UUL = null\n        this.DRR = null\n        this.DDR = null\n        this.DLL = null\n        this.DDL = null\n    }\n}\nclass chessBoard {\n    constructor () {\n        this.root = new nodes (0, 0)\n        this.buildChessBoard()\n    }\n    buildChessBoard () {\n        let start = this.root\n        while (start.xAxis <= 7) {\n            while (start.yAxis < 7) {\n                let newY = start.yAxis + 1\n                let prevNode = start\n                start = new nodes(start.xAxis, newY)\n                prevNode.next = start \n            }\n            let newX = start.xAxis + 1\n            let prevNode = start\n            start =  new nodes (newX, 0)\n            if (start.xAxis === 8){\n                break\n            }\n            prevNode.next = start\n        }\n        start = this.root\n        let newX\n        let newY\n        while (start.xAxis <= 7 && start.yAxis <=7) {\n            newX = start.xAxis + 1\n            newY = start.yAxis + 2\n            if (this.checkValid(newX, newY) === true) {\n                start.UUR = this.find(newX, newY)\n            }\n            newX = start.xAxis + 2\n            newY = start.yAxis + 1\n            if (this.checkValid(newX, newY) === true) {\n                start.URR = this.find(newX, newY)\n            }\n            newX = start.xAxis - 2\n            newY = start.yAxis + 1\n            if (this.checkValid(newX, newY) === true) {\n                start.ULL = this.find(newX, newY)\n            }\n            newX = start.xAxis - 1\n            newY = start.yAxis + 2\n            if (this.checkValid(newX, newY) === true) {\n                start.UUL = this.find(newX, newY)\n            }\n            newX = start.xAxis + 2\n            newY = start.yAxis - 1\n            if (this.checkValid(newX, newY) === true) {\n                start.DRR = this.find(newX, newY)\n            }\n            newX = start.xAxis + 1\n            newY = start.yAxis - 2\n            if (this.checkValid(newX, newY) === true) {\n                start.DDR = this.find(newX, newY)\n            }\n            newX = start.xAxis - 2\n            newY = start.yAxis - 1\n            if (this.checkValid(newX, newY) === true) {\n                start.DLL = this.find(newX, newY)\n            }\n            newX = start.xAxis - 1\n            newY = start.yAxis - 2\n            if (this.checkValid(newX, newY) === true) {\n                start.DDL = this.find(newX, newY)\n            }\n            if (start.next) {\n                start = start.next\n            }\n            else {\n                return\n            }\n        }\n    }\n    checkValid (x, y) {\n        if (x > 0 && x <= 7 && y > 0 && y <= 7) {\n            return true\n        }\n        else {\n            return false\n        }\n    }\n    find (x, y) {\n        let currentNode = this.root\n        while (currentNode.xAxis != x) {\n            currentNode = currentNode.next\n            while (currentNode.yAxis != y) {\n                currentNode = currentNode.next\n            }\n        }\n        return currentNode\n    }\n}\nlet newChessBoard = new chessBoard ()\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newChessBoard);\n\n//# sourceURL=webpack://knightstravails/./src/chessBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chessBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chessBoard */ \"./src/chessBoard.js\");\n\nclass knight {\n    constructor (startPosition, endPosition) {\n        if (startPosition[0] > 0 && startPosition [0] < 8 && startPosition[1] > 0 && startPosition[1] < 8) {\n            this.start = startPosition\n        }\n        else {\n            console.log(\"invalid position\")\n        }\n        if (endPosition[0] > 0 && endPosition [0] < 8 && endPosition[1] > 0 && endPosition[1] < 8) {\n            this.end = endPosition\n        }\n        else {\n            console.log(\"invalid position\")\n        }\n        this.pathway = this.moves()\n        this.moveCount = this.pathway.length - 1\n    }\n    moves () {\n        let x = this.start[0]\n        let y = this.start[1]\n        let currentNode = _chessBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(x, y)\n        x = this.end[0]\n        y = this.end[1]\n        let endNode = _chessBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(x, y)\n        let pathway = []\n        let queue = []\n        let i = 0\n        function check (node, end) {\n            if (node === end) {\n                return true\n            }\n            else {\n                let currentNode = queue[0]\n                console.log(currentNode)\n                let array = [currentNode.UUR, currentNode.URR, currentNode.DRR, currentNode.DDR, currentNode.ULL, currentNode.UUL, currentNode.DDL, currentNode.DLL]\n                array.forEach(node => {\n                    if (node) {\n                        node.prev = currentNode\n                    }\n                })\n                queue.push(currentNode.UUR, currentNode.URR, currentNode.DRR, currentNode.DDR, currentNode.ULL, currentNode.UUL, currentNode.DDL, currentNode.DLL)\n                return false\n            }\n        }\n        queue.push(currentNode)\n        while (queue.length > 0) {\n            if (queue[0] === null) {\n                queue.splice(0, 1)\n            }\n            else {\n                if (check(queue[0], endNode) === true) {\n                    pathway.push(endNode)\n                    currentNode.prev = null\n                    while (endNode.prev) {\n                        pathway.unshift(endNode.prev)\n                        endNode = endNode.prev\n                    }\n                    return (pathway)\n                }\n                queue.splice(0, 1)\n            }\n        }\n    }\n}\nlet currentKnight= new knight ([2, 2], [5, 3])\nconsole.log (currentKnight.pathway, currentKnight.moveCount)\n\n//# sourceURL=webpack://knightstravails/./src/index.js?");

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