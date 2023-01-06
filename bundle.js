/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n\t<meta charset=\"UTF-8\">\r\n\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n\t<title>Puzzle Game</title>\r\n</head>\r\n\r\n<body>\r\n\r\n\t<div class=\"container\">\r\n\t\t<div id=\"board\" class=\"gameboard\"></div>\r\n\t</div>\r\n\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./src/public/styles/styles.css":
/*!**************************************!*\
  !*** ./src/public/styles/styles.css ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App/board.ts":
/*!**************************!*\
  !*** ./src/App/board.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
class GameBoard {
    constructor(gameboard) {
        this.draw = (opt) => {
            const { columns, rows, width, height, colors } = opt;
            this.gameboard.innerHTML = "";
            this.gameboard.style.gridTemplateColumns = `repeat(${columns}, ${width}px)`;
            this.gameboard.style.gridTemplateRows = `repeat(${rows}, ${height}px)`;
            let elements = this.createElements(columns, rows, colors);
            for (let el of elements) {
                this.gameboard.append(el);
            }
        };
        this.clear = () => (this.gameboard.innerHTML = "");
        this.createElements = (columns, rows, colors) => {
            const divElements = new Array();
            let qty = columns * rows;
            let IDs = (0, utils_1.getSetOfPseudoHash)(10, qty).values();
            for (let i = 0; i < qty; i++) {
                let div = document.createElement("div");
                let color = (0, utils_1.getRandom)(colors);
                div.id = IDs.next().value;
                div.style.backgroundColor = `#${color}`;
                div.draggable = true;
                div.style.cursor = "pointer";
                divElements.push(div);
            }
            return divElements;
        };
        this.gameboard = gameboard;
    }
}
exports["default"] = GameBoard;


/***/ }),

/***/ "./src/App/dragAndDrop.ts":
/*!********************************!*\
  !*** ./src/App/dragAndDrop.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class DragAndDrop {
    constructor(gameboard) {
        this.handleEvents = () => {
            const divElements = this.gameboard.getElementsByTagName("div");
            [...divElements].forEach((item) => {
                item.addEventListener("dragstart", this.onDragStart, false);
                item.addEventListener("dragover", this.onDragOver, false);
                item.addEventListener("drop", this.onDrop, false);
            });
        };
        this.gameboard = gameboard;
    }
    onDragStart(e) {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("dragTargetId", this.id);
    }
    onDragOver(e) {
        e.dataTransfer.dropEffect = "move";
        e.preventDefault();
    }
    onDrop(e) {
        var _a, _b;
        e.stopPropagation();
        let dragTargetId = e.dataTransfer.getData("dragTargetId");
        let dropTarget = document.getElementById(this.id);
        let dragTarget = document.getElementById(dragTargetId);
        if (dragTarget !== dropTarget) {
            const dropTargetSib = dropTarget.nextSibling === dragTarget
                ? dropTarget
                : dropTarget.nextSibling;
            (_a = dragTarget.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(dropTarget, dragTarget);
            (_b = dropTarget.parentNode) === null || _b === void 0 ? void 0 : _b.insertBefore(dragTarget, dropTargetSib);
        }
        e.preventDefault();
    }
}
exports["default"] = DragAndDrop;


/***/ }),

/***/ "./src/App/index.ts":
/*!**************************!*\
  !*** ./src/App/index.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const board_1 = __importDefault(__webpack_require__(/*! ./board */ "./src/App/board.ts"));
const config_1 = __webpack_require__(/*! ../utils/config */ "./src/utils/config.ts");
const dragAndDrop_1 = __importDefault(__webpack_require__(/*! ./dragAndDrop */ "./src/App/dragAndDrop.ts"));
const boardDiv = document.getElementById(config_1.ID.board);
new board_1.default(boardDiv).draw(config_1.options);
const dnd = new dragAndDrop_1.default(boardDiv);
dnd.handleEvents();


/***/ }),

/***/ "./src/utils/config.ts":
/*!*****************************!*\
  !*** ./src/utils/config.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ID = exports.options = exports.colorsHEX = exports.chars = exports.numbers = void 0;
exports.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
exports.chars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
exports.colorsHEX = [
    "FF595E",
    "FF924C",
    "FFCA3A",
    "C5CA30",
    "8AC926",
    "36949D",
    "1982C4",
    "4267AC",
    "565AA0",
    "6A4C93",
];
exports.options = {
    columns: 5,
    rows: 5,
    width: 120,
    height: 100,
    colors: exports.colorsHEX,
};
exports.ID = {
    board: "board",
    button: "start_btn",
};


/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSetOfPseudoHash = exports.getRandom = void 0;
const config_1 = __webpack_require__(/*! ./config */ "./src/utils/config.ts");
const getRandom = (array) => {
    let randInt = Math.floor(Math.random() * array.length);
    return array[randInt];
};
exports.getRandom = getRandom;
const getSetOfPseudoHash = (length, qty) => {
    let set = new Set();
    let hash = [];
    for (let i = 0; i < qty; i++) {
        for (let j = 0; j < length; j++) {
            let randInt = Math.floor(Math.random() * 2) + 1;
            if (randInt % 2 === 0) {
                hash.push(`${(0, exports.getRandom)(config_1.chars)}`);
            }
            else {
                hash.push(`${(0, exports.getRandom)(config_1.numbers)}`);
            }
        }
        set.add(hash.join(""));
        hash = [];
    }
    if (set.size < qty)
        return (0, exports.getSetOfPseudoHash)(length, qty);
    return set;
};
exports.getSetOfPseudoHash = getSetOfPseudoHash;


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./App/index.ts */ "./src/App/index.ts");
__webpack_require__(/*! ./index.html */ "./src/index.html");
__webpack_require__(/*! ./public/styles/styles.css */ "./src/public/styles/styles.css");

}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map