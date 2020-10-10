module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/home/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/swipeDown.json":
/*!*******************************!*\
  !*** ./public/swipeDown.json ***!
  \*******************************/
/*! exports provided: v, fr, ip, op, w, h, nm, ddd, assets, layers, markers, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"v\\\":\\\"5.5.2\\\",\\\"fr\\\":120,\\\"ip\\\":0,\\\"op\\\":124,\\\"w\\\":192,\\\"h\\\":192,\\\"nm\\\":\\\"Comp 2\\\",\\\"ddd\\\":0,\\\"assets\\\":[],\\\"layers\\\":[{\\\"ddd\\\":0,\\\"ind\\\":1,\\\"ty\\\":4,\\\"nm\\\":\\\"Arrow-Down Outlines\\\",\\\"sr\\\":1,\\\"ks\\\":{\\\"o\\\":{\\\"a\\\":0,\\\"k\\\":100,\\\"ix\\\":11},\\\"r\\\":{\\\"a\\\":0,\\\"k\\\":0,\\\"ix\\\":10},\\\"p\\\":{\\\"a\\\":1,\\\"k\\\":[{\\\"i\\\":{\\\"x\\\":0.667,\\\"y\\\":1},\\\"o\\\":{\\\"x\\\":0.333,\\\"y\\\":0},\\\"t\\\":0,\\\"s\\\":[96,91,0],\\\"to\\\":[0,2.833,0],\\\"ti\\\":[0,3.5,0]},{\\\"i\\\":{\\\"x\\\":0.667,\\\"y\\\":1},\\\"o\\\":{\\\"x\\\":0.333,\\\"y\\\":0},\\\"t\\\":38,\\\"s\\\":[96,108,0],\\\"to\\\":[0,-3.5,0],\\\"ti\\\":[0,1.333,0]},{\\\"i\\\":{\\\"x\\\":0.667,\\\"y\\\":1},\\\"o\\\":{\\\"x\\\":0.333,\\\"y\\\":0},\\\"t\\\":60,\\\"s\\\":[96,70,0],\\\"to\\\":[0,-1.333,0],\\\"ti\\\":[0,-3.5,0]},{\\\"i\\\":{\\\"x\\\":0.667,\\\"y\\\":1},\\\"o\\\":{\\\"x\\\":0.167,\\\"y\\\":0},\\\"t\\\":77,\\\"s\\\":[96,100,0],\\\"to\\\":[0,3.5,0],\\\"ti\\\":[0,1.5,0]},{\\\"t\\\":88,\\\"s\\\":[96,91,0]}],\\\"ix\\\":2},\\\"a\\\":{\\\"a\\\":0,\\\"k\\\":[12,12,0],\\\"ix\\\":1},\\\"s\\\":{\\\"a\\\":0,\\\"k\\\":[825,825,100],\\\"ix\\\":6}},\\\"ao\\\":0,\\\"shapes\\\":[{\\\"ty\\\":\\\"gr\\\",\\\"it\\\":[{\\\"ind\\\":0,\\\"ty\\\":\\\"sh\\\",\\\"ix\\\":1,\\\"ks\\\":{\\\"a\\\":0,\\\"k\\\":{\\\"i\\\":[[0,0],[0,0]],\\\"o\\\":[[0,0],[0,0]],\\\"v\\\":[[12,18],[12,6]],\\\"c\\\":false},\\\"ix\\\":2},\\\"nm\\\":\\\"Path 1\\\",\\\"mn\\\":\\\"ADBE Vector Shape - Group\\\",\\\"hd\\\":false},{\\\"ty\\\":\\\"tm\\\",\\\"s\\\":{\\\"a\\\":0,\\\"k\\\":0,\\\"ix\\\":1},\\\"e\\\":{\\\"a\\\":1,\\\"k\\\":[{\\\"i\\\":{\\\"x\\\":[0.667],\\\"y\\\":[1]},\\\"o\\\":{\\\"x\\\":[0.333],\\\"y\\\":[0]},\\\"t\\\":0,\\\"s\\\":[100]},{\\\"i\\\":{\\\"x\\\":[0.667],\\\"y\\\":[1]},\\\"o\\\":{\\\"x\\\":[0.333],\\\"y\\\":[0]},\\\"t\\\":38,\\\"s\\\":[32]},{\\\"t\\\":60,\\\"s\\\":[100]}],\\\"ix\\\":2},\\\"o\\\":{\\\"a\\\":0,\\\"k\\\":0,\\\"ix\\\":3},\\\"m\\\":1,\\\"ix\\\":2,\\\"nm\\\":\\\"Trim Paths 1\\\",\\\"mn\\\":\\\"ADBE Vector Filter - Trim\\\",\\\"hd\\\":false},{\\\"ty\\\":\\\"st\\\",\\\"c\\\":{\\\"a\\\":0,\\\"k\\\":[0,0,0,1],\\\"ix\\\":3},\\\"o\\\":{\\\"a\\\":0,\\\"k\\\":100,\\\"ix\\\":4},\\\"w\\\":{\\\"a\\\":0,\\\"k\\\":2,\\\"ix\\\":5},\\\"lc\\\":2,\\\"lj\\\":2,\\\"bm\\\":0,\\\"nm\\\":\\\"Stroke 1\\\",\\\"mn\\\":\\\"ADBE Vector Graphic - Stroke\\\",\\\"hd\\\":false},{\\\"ty\\\":\\\"tr\\\",\\\"p\\\":{\\\"a\\\":1,\\\"k\\\":[{\\\"i\\\":{\\\"x\\\":0.667,\\\"y\\\":1},\\\"o\\\":{\\\"x\\\":0.333,\\\"y\\\":0},\\\"t\\\":38,\\\"s\\\":[0,0],\\\"to\\\":[0,-0.167],\\\"ti\\\":[0,0]},{\\\"i\\\":{\\\"x\\\":0.667,\\\"y\\\":1},\\\"o\\\":{\\\"x\\\":0.333,\\\"y\\\":0},\\\"t\\\":60,\\\"s\\\":[0,-1],\\\"to\\\":[0,0],\\\"ti\\\":[0,-0.167]},{\\\"t\\\":77,\\\"s\\\":[0,0]}],\\\"ix\\\":2},\\\"a\\\":{\\\"a\\\":0,\\\"k\\\":[0,0],\\\"ix\\\":1},\\\"s\\\":{\\\"a\\\":0,\\\"k\\\":[100,100],\\\"ix\\\":3},\\\"r\\\":{\\\"a\\\":0,\\\"k\\\":0,\\\"ix\\\":6},\\\"o\\\":{\\\"a\\\":0,\\\"k\\\":100,\\\"ix\\\":7},\\\"sk\\\":{\\\"a\\\":0,\\\"k\\\":0,\\\"ix\\\":4},\\\"sa\\\":{\\\"a\\\":0,\\\"k\\\":0,\\\"ix\\\":5},\\\"nm\\\":\\\"Transform\\\"}],\\\"nm\\\":\\\"Group 1\\\",\\\"np\\\":3,\\\"cix\\\":2,\\\"bm\\\":0,\\\"ix\\\":1,\\\"mn\\\":\\\"ADBE Vector Group\\\",\\\"hd\\\":false},{\\\"ty\\\":\\\"gr\\\",\\\"it\\\":[{\\\"ind\\\":0,\\\"ty\\\":\\\"sh\\\",\\\"ix\\\":1,\\\"ks\\\":{\\\"a\\\":1,\\\"k\\\":[{\\\"i\\\":{\\\"x\\\":0.667,\\\"y\\\":1},\\\"o\\\":{\\\"x\\\":0.333,\\\"y\\\":0},\\\"t\\\":0,\\\"s\\\":[{\\\"i\\\":[[0,0],[0,0],[0,0]],\\\"o\\\":[[0,0],[0,0],[0,0]],\\\"v\\\":[[-5,-2.5],[0,2.5],[5,-2.5]],\\\"c\\\":false}]},{\\\"i\\\":{\\\"x\\\":0.667,\\\"y\\\":1},\\\"o\\\":{\\\"x\\\":0.333,\\\"y\\\":0},\\\"t\\\":38,\\\"s\\\":[{\\\"i\\\":[[0,0],[0,0],[0,0]],\\\"o\\\":[[0,0],[0,0],[0,0]],\\\"v\\\":[[-2.612,-1.742],[-0.064,2.431],[2.484,-1.742]],\\\"c\\\":false}]},{\\\"i\\\":{\\\"x\\\":0.667,\\\"y\\\":1},\\\"o\\\":{\\\"x\\\":0.167,\\\"y\\\":0},\\\"t\\\":60,\\\"s\\\":[{\\\"i\\\":[[0,0],[0,0],[0,0]],\\\"o\\\":[[0,0],[0,0],[0,0]],\\\"v\\\":[[-5.966,-2.5],[-0.05,2.5],[5.865,-2.5]],\\\"c\\\":false}]},{\\\"i\\\":{\\\"x\\\":0.667,\\\"y\\\":1},\\\"o\\\":{\\\"x\\\":0.333,\\\"y\\\":0},\\\"t\\\":77,\\\"s\\\":[{\\\"i\\\":[[0,0],[0,0],[0,0]],\\\"o\\\":[[0,0],[0,0],[0,0]],\\\"v\\\":[[-4.103,-2.5],[-0.016,2.5],[4.071,-2.5]],\\\"c\\\":false}]},{\\\"t\\\":88,\\\"s\\\":[{\\\"i\\\":[[0,0],[0,0],[0,0]],\\\"o\\\":[[0,0],[0,0],[0,0]],\\\"v\\\":[[-5,-2.5],[0,2.5],[5,-2.5]],\\\"c\\\":false}]}],\\\"ix\\\":2},\\\"nm\\\":\\\"Path 1\\\",\\\"mn\\\":\\\"ADBE Vector Shape - Group\\\",\\\"hd\\\":false},{\\\"ty\\\":\\\"st\\\",\\\"c\\\":{\\\"a\\\":0,\\\"k\\\":[0,0,0,1],\\\"ix\\\":3},\\\"o\\\":{\\\"a\\\":0,\\\"k\\\":100,\\\"ix\\\":4},\\\"w\\\":{\\\"a\\\":0,\\\"k\\\":2,\\\"ix\\\":5},\\\"lc\\\":2,\\\"lj\\\":2,\\\"bm\\\":0,\\\"nm\\\":\\\"Stroke 1\\\",\\\"mn\\\":\\\"ADBE Vector Graphic - Stroke\\\",\\\"hd\\\":false},{\\\"ty\\\":\\\"tr\\\",\\\"p\\\":{\\\"a\\\":0,\\\"k\\\":[12,16.5],\\\"ix\\\":2},\\\"a\\\":{\\\"a\\\":0,\\\"k\\\":[0,0],\\\"ix\\\":1},\\\"s\\\":{\\\"a\\\":0,\\\"k\\\":[87.834,87.834],\\\"ix\\\":3},\\\"r\\\":{\\\"a\\\":0,\\\"k\\\":0,\\\"ix\\\":6},\\\"o\\\":{\\\"a\\\":0,\\\"k\\\":100,\\\"ix\\\":7},\\\"sk\\\":{\\\"a\\\":0,\\\"k\\\":0,\\\"ix\\\":4},\\\"sa\\\":{\\\"a\\\":0,\\\"k\\\":0,\\\"ix\\\":5},\\\"nm\\\":\\\"Transform\\\"}],\\\"nm\\\":\\\"Group 2\\\",\\\"np\\\":2,\\\"cix\\\":2,\\\"bm\\\":0,\\\"ix\\\":2,\\\"mn\\\":\\\"ADBE Vector Group\\\",\\\"hd\\\":false}],\\\"ip\\\":0,\\\"op\\\":1215,\\\"st\\\":0,\\\"bm\\\":0}],\\\"markers\\\":[]}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3B1YmxpYy9zd2lwZURvd24uanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/swipeDown.json\n");

/***/ }),

/***/ "./src/assets/globalStyles.js":
/*!************************************!*\
  !*** ./src/assets/globalStyles.js ***!
  \************************************/
/*! exports provided: GlobalStyles, Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyles\", function() { return GlobalStyles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n\n  :root{\n\n    font-size: 62.5%;\n\n  }\n\n\n  *{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-size: 1.6rem;\n    font-family: 'Montserrat', sans-serif;\n  }\n\n\n  body,\n  html{\n    background: #F8F8F2;\n\n  }\n\n  button{\n    outline: 0;\n  }\n\n`;\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"globalStyles__Container\",\n  componentId: \"sc-1ri18qy-0\"\n})([\"display:flex;flex-direction:column;width:100%;max-width:1200px;margin:auto;padding:0 2%;\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2dsb2JhbFN0eWxlcy5qcz81NGVlIl0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJTyxNQUFNQSxZQUFZLEdBQUdDLG1FQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUF2QztBQThCQSxNQUFNQyxTQUFTLEdBQUdDLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ0dBQWYiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2dsb2JhbFN0eWxlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cblxuXG5leHBvcnQgY29uc3QgR2xvYmFsU3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGVgXG5cbiAgOnJvb3R7XG5cbiAgICBmb250LXNpemU6IDYyLjUlO1xuXG4gIH1cblxuXG4gICp7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICB9XG5cblxuICBib2R5LFxuICBodG1se1xuICAgIGJhY2tncm91bmQ6ICNGOEY4RjI7XG5cbiAgfVxuXG4gIGJ1dHRvbntcbiAgICBvdXRsaW5lOiAwO1xuICB9XG5cbmA7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMCAyJTtcblxuXG5gOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/globalStyles.js\n");

/***/ }),

/***/ "./src/pages/home/index.js":
/*!*********************************!*\
  !*** ./src/pages/home/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/pages/home/styles.js\");\n/* harmony import */ var _assets_globalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/globalStyles */ \"./src/assets/globalStyles.js\");\n/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lottie */ \"react-lottie\");\n/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_swipeDown_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/swipeDown.json */ \"./public/swipeDown.json\");\nvar _public_swipeDown_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/swipeDown.json */ \"./public/swipeDown.json\", 1);\nvar _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/NextJs/rick-and-morty/src/pages/home/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction Home() {\n  const {\n    0: showDescrition,\n    1: setShowDescription\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const defaultOptions = {\n    loop: true,\n    autoplay: true,\n    animationData: _public_swipeDown_json__WEBPACK_IMPORTED_MODULE_4__,\n    rendererSettings: {\n      preserveAspectRatio: 'xMidYMid slice'\n    }\n  };\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"StyledMain\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, __jsx(_assets_globalStyles__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"/rick.svg\",\n    alt: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, \"Rick and Morty\"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Description\"], {\n    showDescrition: showDescrition,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, \"A s\\xE9rie mostra as aventuras ins\\xF3litas do cientista beberr\\xE3o Rick Sanchez e seu neto inseguro e com horm\\xF4nios em ebuli\\xE7\\xE3o Morty Smith, membros de uma fam\\xEDlia americana comum, composta tamb\\xE9m por Jerry, um pai ignorante; Beth, uma m\\xE3e sensata e Summer, uma irm\\xE3 mais velha, t\\xEDpica adolescente alienada, que se compadece do irm\\xE3o quando passa a integrar as aventuras de seu av\\xF4.\"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"StyledButton\"], {\n    onClick: () => setShowDescription(!showDescrition),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, \" SOBRE\"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"StyledArrowDown\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }, __jsx(react_lottie__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    isClickToPauseDisabled: true,\n    options: defaultOptions,\n    height: 60,\n    width: 60,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  })))), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, \"swed\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, \"swed\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }, \"swed\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, \"swed\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, \"swed\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, \"swed\"));\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS9pbmRleC5qcz9lMDRiIl0sIm5hbWVzIjpbIkhvbWUiLCJzaG93RGVzY3JpdGlvbiIsInNldFNob3dEZXNjcmlwdGlvbiIsInVzZVN0YXRlIiwiZGVmYXVsdE9wdGlvbnMiLCJsb29wIiwiYXV0b3BsYXkiLCJhbmltYXRpb25EYXRhIiwiU3dpcGVEb3duIiwicmVuZGVyZXJTZXR0aW5ncyIsInByZXNlcnZlQXNwZWN0UmF0aW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUNkLFFBQU07QUFBQSxPQUFDQyxjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXVDQyxzREFBUSxDQUFDLEtBQUQsQ0FBckQ7QUFHQSxRQUFNQyxjQUFjLEdBQUc7QUFDckJDLFFBQUksRUFBRSxJQURlO0FBRXJCQyxZQUFRLEVBQUUsSUFGVztBQUdyQkMsaUJBQWEsRUFBRUMsbURBSE07QUFJckJDLG9CQUFnQixFQUFFO0FBQ2hCQyx5QkFBbUIsRUFBRTtBQURMO0FBSkcsR0FBdkI7QUFZQSxTQUNFLG1FQUNFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLFdBQVQ7QUFBcUIsT0FBRyxFQUFDLEVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRixFQUtFLE1BQUMsbURBQUQ7QUFBYSxrQkFBYyxFQUFFVCxjQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNhQUxGLEVBZ0JFLE1BQUMsb0RBQUQ7QUFBYyxXQUFPLEVBQUUsTUFBTUMsa0JBQWtCLENBQUMsQ0FBQ0QsY0FBRixDQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJGLEVBa0JFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFDRSwwQkFBc0IsTUFEeEI7QUFFRSxXQUFPLEVBQUVHLGNBRlg7QUFHRSxVQUFNLEVBQUUsRUFIVjtBQUlFLFNBQUssRUFBRSxFQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWxCRixDQURGLENBREYsRUFnQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhDRixFQWlDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakNGLEVBa0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQ0YsRUFtQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5DRixFQW9DRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcENGLEVBcUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQ0YsQ0FERjtBQTRDRDs7QUFBQTtBQUVjSixtRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9ob21lL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdHlsZWRNYWluLCBUZXh0LCBEZXNjcmlwdGlvbiwgU3R5bGVkQnV0dG9uLCBTdHlsZWRBcnJvd0Rvd24gfSBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi8uLi9hc3NldHMvZ2xvYmFsU3R5bGVzJztcbmltcG9ydCBMb3R0aWUgZnJvbSAncmVhY3QtbG90dGllJztcblxuaW1wb3J0IFN3aXBlRG93biBmcm9tICcuLi8uLi8uLi9wdWJsaWMvc3dpcGVEb3duLmpzb24nO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbc2hvd0Rlc2NyaXRpb24sIHNldFNob3dEZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIGxvb3A6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgYW5pbWF0aW9uRGF0YTogU3dpcGVEb3duLFxuICAgIHJlbmRlcmVyU2V0dGluZ3M6IHtcbiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW86ICd4TWlkWU1pZCBzbGljZSdcbiAgICB9XG5cbiAgfTtcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFN0eWxlZE1haW4+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvcmljay5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgIDxUZXh0PlJpY2sgYW5kIE1vcnR5PC9UZXh0PlxuXG5cbiAgICAgICAgICA8RGVzY3JpcHRpb24gc2hvd0Rlc2NyaXRpb249e3Nob3dEZXNjcml0aW9ufT5cbiAgICAgICAgICAgIEEgc8OpcmllIG1vc3RyYSBhcyBhdmVudHVyYXMgaW5zw7NsaXRhcyBkbyBjaWVudGlzdGEgYmViZXJyw6NvIFJpY2sgU2FuY2hleiBlIHNldSBuZXRvXG4gICAgICAgICAgICBpbnNlZ3VybyBlIGNvbSBob3Jtw7RuaW9zIGVtIGVidWxpw6fDo28gTW9ydHkgU21pdGgsIG1lbWJyb3MgZGUgdW1hIGZhbcOtbGlhIGFtZXJpY2FuYSBjb211bSxcbiAgICAgICAgICAgIGNvbXBvc3RhIHRhbWLDqW0gcG9yIEplcnJ5LCB1bSBwYWkgaWdub3JhbnRlOyBCZXRoLCB1bWEgbcOjZSBzZW5zYXRhIGUgU3VtbWVyLFxuICAgICAgICAgICAgdW1hIGlybcOjIG1haXMgdmVsaGEsIHTDrXBpY2EgYWRvbGVzY2VudGUgYWxpZW5hZGEsIHF1ZSBzZSBjb21wYWRlY2UgZG8gaXJtw6NvXG4gICAgICAgICAgICBxdWFuZG8gcGFzc2EgYSBpbnRlZ3JhciBhcyBhdmVudHVyYXMgZGUgc2V1IGF2w7QuXG4gICAgICAgICAgICAgIDwvRGVzY3JpcHRpb24+XG5cblxuXG5cbiAgICAgICAgICA8U3R5bGVkQnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNob3dEZXNjcmlwdGlvbighc2hvd0Rlc2NyaXRpb24pfSA+IFNPQlJFPC9TdHlsZWRCdXR0b24+XG5cbiAgICAgICAgICA8U3R5bGVkQXJyb3dEb3duPlxuICAgICAgICAgICAgPExvdHRpZVxuICAgICAgICAgICAgICBpc0NsaWNrVG9QYXVzZURpc2FibGVkXG4gICAgICAgICAgICAgIG9wdGlvbnM9e2RlZmF1bHRPcHRpb25zfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezYwfVxuICAgICAgICAgICAgICB3aWR0aD17NjB9IC8+XG4gICAgICAgICAgPC9TdHlsZWRBcnJvd0Rvd24+XG5cblxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvU3R5bGVkTWFpbj5cblxuICAgICAgPHA+c3dlZDwvcD5cbiAgICAgIDxwPnN3ZWQ8L3A+XG4gICAgICA8cD5zd2VkPC9wPlxuICAgICAgPHA+c3dlZDwvcD5cbiAgICAgIDxwPnN3ZWQ8L3A+XG4gICAgICA8cD5zd2VkPC9wPlxuXG4gICAgPC8+XG4gICk7XG5cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/home/index.js\n");

/***/ }),

/***/ "./src/pages/home/styles.js":
/*!**********************************!*\
  !*** ./src/pages/home/styles.js ***!
  \**********************************/
/*! exports provided: Text, Description, StyledMain, StyledButton, StyledArrowDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledMain\", function() { return StyledMain; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledButton\", function() { return StyledButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledArrowDown\", function() { return StyledArrowDown; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({\n  displayName: \"styles__Text\",\n  componentId: \"sc-9t8j3s-0\"\n})([\"text-align:center;font-size:min(8rem,10vw);font-weight:bold;color:#282A36;\"]);\nconst Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({\n  displayName: \"styles__Description\",\n  componentId: \"sc-9t8j3s-1\"\n})([\"text-align:justify;font-weight:lighter;margin:2rem 0;font-size:2rem;line-height:1.5;color:#282A36;transition:all .2s;\", \"\"], props => !props.showDescrition && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"opacity:0;margin-top:-14rem;\"]));\nconst StyledMain = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({\n  displayName: \"styles__StyledMain\",\n  componentId: \"sc-9t8j3s-2\"\n})([\"display:flex;align-items:center;justify-content:center;background:#F8F8F2;height:calc(100vh - 8rem);\"]);\nconst StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({\n  displayName: \"styles__StyledButton\",\n  componentId: \"sc-9t8j3s-3\"\n})([\"padding:0.8rem 5rem;border:0;border-radius:0.6rem;font-weight:bold;color:#F8F8F2;background:#44475A;text-align:center;margin:0 auto;cursor:pointer;transition:background .2s ease;&:hover{background:#292A36;}\"]);\nconst StyledArrowDown = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"styles__StyledArrowDown\",\n  componentId: \"sc-9t8j3s-4\"\n})([\"position:absolute;left:0;right:0;bottom:4rem;\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS9zdHlsZXMuanM/NGYyZiJdLCJuYW1lcyI6WyJUZXh0Iiwic3R5bGVkIiwiaDEiLCJEZXNjcmlwdGlvbiIsInAiLCJwcm9wcyIsInNob3dEZXNjcml0aW9uIiwiY3NzIiwiU3R5bGVkTWFpbiIsIlN0eWxlZEJ1dHRvbiIsImJ1dHRvbiIsIlN0eWxlZEFycm93RG93biIsImRpdiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSU8sTUFBTUEsSUFBSSxHQUFHQyx3REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLGtGQUFWO0FBTUEsTUFBTUMsV0FBVyxHQUFHRix3REFBTSxDQUFDRyxDQUFWO0FBQUE7QUFBQTtBQUFBLGtJQVVwQkMsS0FBSyxJQUFJLENBQUNBLEtBQUssQ0FBQ0MsY0FBUCxJQUF5QkMsNkRBQXpCLGtDQVZXLENBQWpCO0FBbUJBLE1BQU1DLFVBQVUsR0FBR1Asd0RBQU0sQ0FBQ0MsRUFBVjtBQUFBO0FBQUE7QUFBQSw0R0FBaEI7QUFPQSxNQUFNTyxZQUFZLEdBQUdSLHdEQUFNLENBQUNTLE1BQVY7QUFBQTtBQUFBO0FBQUEsc05BQWxCO0FBcUJBLE1BQU1DLGVBQWUsR0FBR1Ysd0RBQU0sQ0FBQ1csR0FBVjtBQUFBO0FBQUE7QUFBQSxxREFBckIiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS9zdHlsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuXG5cbmV4cG9ydCBjb25zdCBUZXh0ID0gc3R5bGVkLmgxYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbWluKDhyZW0sIDEwdncpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyODJBMzY7ICBcbmA7XG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogMnJlbSAwO1xuICBmb250LXNpemU6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMjgyQTM2OyAgXG4gIHRyYW5zaXRpb246IGFsbCAuMnM7IFxuXG5cbiAgJHtwcm9wcyA9PiAhcHJvcHMuc2hvd0Rlc2NyaXRpb24gJiYgY3NzYFxuICAgb3BhY2l0eTogMDtcbiAgIG1hcmdpbi10b3A6IC0xNHJlbTtcblxuICAgIFxuICBgfVxuXG5cbmA7XG5leHBvcnQgY29uc3QgU3R5bGVkTWFpbiA9IHN0eWxlZC5oMWBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNGOEY4RjI7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDhyZW0pO1xuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAvKiB3aWR0aDogMTByZW07ICovXG4gIHBhZGRpbmc6IDAuOHJlbSA1cmVtO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRjhGOEYyO1xuICBiYWNrZ3JvdW5kOiAjNDQ0NzVBO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjJzIGVhc2U7XG5cbiAgJjpob3ZlcntcbiAgYmFja2dyb3VuZDogIzI5MkEzNjtcblxuICB9XG5cbmA7XG5cblxuZXhwb3J0IGNvbnN0IFN0eWxlZEFycm93RG93biA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogNHJlbTtcblxuIFxuYDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/home/styles.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-lottie":
/*!*******************************!*\
  !*** external "react-lottie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-lottie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sb3R0aWVcIj8xOTdkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWxvdHRpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxvdHRpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-lottie\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });