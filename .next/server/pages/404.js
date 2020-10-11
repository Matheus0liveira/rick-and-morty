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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/404/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/Error.json":
/*!***************************!*\
  !*** ./public/Error.json ***!
  \***************************/
/*! exports provided: v, fr, ip, op, w, h, nm, ddd, assets, layers, markers, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"v\\\":\\\"5.4.4\\\",\\\"fr\\\":29.9700012207031,\\\"ip\\\":0,\\\"op\\\":120.0000048877,\\\"w\\\":1080,\\\"h\\\":620,\\\"nm\\\":\\\"Comp 2\\\",\\\"ddd\\\":0,\\\"assets\\\":[],\\\"layers\\\":[{\\\"ddd\\\":0,\\\"ind\\\":1,\\\"ty\\\":4,\\\"nm\\\":\\\"Shape Layer 1\\\",\\\"sr\\\":1,\\\"ks\\\":{\\\"o\\\":{\\\"a\\\":0,\\\"k\\\":100,\\\"ix\\\":11},\\\"r\\\":{\\\"a\\\":0,\\\"k\\\":0,\\\"ix\\\":10},\\\"p\\\":{\\\"a\\\":0,\\\"k\\\":[539.5,310,0],\\\"ix\\\":2},\\\"a\\\":{\\\"a\\\":0,\\\"k\\\":[0,0,0],\\\"ix\\\":1},\\\"s\\\":{\\\"a\\\":0,\\\"k\\\":[100,100,100],\\\"ix\\\":6}},\\\"ao\\\":0,\\\"shapes\\\":[{\\\"ty\\\":\\\"gr\\\",\\\"it\\\":[{\\\"ind\\\":0,\\\"ty\\\":\\\"sh\\\",\\\"ix\\\":1,\\\"ks\\\":{\\\"a\\\":0,\\\"k\\\":{\\\"i\\\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,81],[0,0],[-77,0],[0,-39],[0,0],[17,-20],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\\\"o\\\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,-81],[0,0],[77,0],[0,39],[0,0],[-17,20],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\\\"v\\\":[[-539.25,234],[-244,234],[-244,126],[-385,126],[-385,62],[-263,-238],[-178,-238],[-178,54],[-150,54],[-150,120],[-176,120],[-176,234],[-59,234],[-101,143],[-101,-160],[-9,-248],[100,-165],[101,157],[80,220],[50,240],[288,240],[287,123],[148,123],[148,56],[268,-239],[357,-239],[357,51],[380,51],[380,122],[359,122],[359,241.75],[540.5,242]],\\\"c\\\":false},\\\"ix\\\":2},\\\"nm\\\":\\\"Path 1\\\",\\\"mn\\\":\\\"ADBE Vector Shape - Group\\\",\\\"hd\\\":false},{\\\"ty\\\":\\\"st\\\",\\\"c\\\":{\\\"a\\\":0,\\\"k\\\":[0.129411764706,0.023529411765,0.572549019608,1],\\\"ix\\\":3},\\\"o\\\":{\\\"a\\\":0,\\\"k\\\":100,\\\"ix\\\":4},\\\"w\\\":{\\\"a\\\":0,\\\"k\\\":5,\\\"ix\\\":5},\\\"lc\\\":1,\\\"lj\\\":1,\\\"ml\\\":4,\\\"bm\\\":0,\\\"nm\\\":\\\"Stroke 1\\\",\\\"mn\\\":\\\"ADBE Vector Graphic - Stroke\\\",\\\"hd\\\":false},{\\\"ty\\\":\\\"tr\\\",\\\"p\\\":{\\\"a\\\":0,\\\"k\\\":[0,0],\\\"ix\\\":2},\\\"a\\\":{\\\"a\\\":0,\\\"k\\\":[0,0],\\\"ix\\\":1},\\\"s\\\":{\\\"a\\\":0,\\\"k\\\":[100,100],\\\"ix\\\":3},\\\"r\\\":{\\\"a\\\":0,\\\"k\\\":0,\\\"ix\\\":6},\\\"o\\\":{\\\"a\\\":0,\\\"k\\\":100,\\\"ix\\\":7},\\\"sk\\\":{\\\"a\\\":0,\\\"k\\\":0,\\\"ix\\\":4},\\\"sa\\\":{\\\"a\\\":0,\\\"k\\\":0,\\\"ix\\\":5},\\\"nm\\\":\\\"Transform\\\"}],\\\"nm\\\":\\\"Shape 1\\\",\\\"np\\\":3,\\\"cix\\\":2,\\\"bm\\\":0,\\\"ix\\\":1,\\\"mn\\\":\\\"ADBE Vector Group\\\",\\\"hd\\\":false},{\\\"ty\\\":\\\"tm\\\",\\\"s\\\":{\\\"a\\\":1,\\\"k\\\":[{\\\"i\\\":{\\\"x\\\":[0.667],\\\"y\\\":[0.992]},\\\"o\\\":{\\\"x\\\":[0.534],\\\"y\\\":[0.224]},\\\"t\\\":47,\\\"s\\\":[0],\\\"e\\\":[100]},{\\\"t\\\":95.0000038694293}],\\\"ix\\\":1},\\\"e\\\":{\\\"a\\\":1,\\\"k\\\":[{\\\"i\\\":{\\\"x\\\":[0.667],\\\"y\\\":[0.96]},\\\"o\\\":{\\\"x\\\":[0.677],\\\"y\\\":[0.024]},\\\"t\\\":15,\\\"s\\\":[0],\\\"e\\\":[100]},{\\\"t\\\":82.0000033399285}],\\\"ix\\\":2},\\\"o\\\":{\\\"a\\\":0,\\\"k\\\":0,\\\"ix\\\":3},\\\"m\\\":1,\\\"ix\\\":2,\\\"nm\\\":\\\"Trim Paths 1\\\",\\\"mn\\\":\\\"ADBE Vector Filter - Trim\\\",\\\"hd\\\":false}],\\\"ip\\\":0,\\\"op\\\":120.0000048877,\\\"st\\\":0,\\\"bm\\\":0}],\\\"markers\\\":[]}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3B1YmxpYy9FcnJvci5qc29uLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/Error.json\n");

/***/ }),

/***/ "./src/pages/404/index.js":
/*!********************************!*\
  !*** ./src/pages/404/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ \"react-icons/fi\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lottie */ \"react-lottie\");\n/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./src/pages/404/styles.js\");\n/* harmony import */ var _public_Error_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/Error.json */ \"./public/Error.json\");\nvar _public_Error_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/Error.json */ \"./public/Error.json\", 1);\nvar _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/NextJs/rick-and-morty/src/pages/404/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst Custom404 = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const ErrorAnimation = {\n    loop: true,\n    autoplay: true,\n    animationData: _public_Error_json__WEBPACK_IMPORTED_MODULE_5__,\n    rendererSettings: {\n      preserveAspectRatio: 'xMidYMid slice'\n    }\n  };\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[\"Styled404\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(react_lottie__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    isClickToPauseDisabled: true,\n    options: ErrorAnimation,\n    height: 200,\n    width: 300,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n    error: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, \" Error 404\"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[\"Text\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, \" This page not Found\")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledButton\"], {\n    onClick: () => router.push('/home/1'),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, \" \", __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__[\"FiArrowLeft\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 61\n    }\n  }), \" Voltar\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Custom404);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvNDA0L2luZGV4LmpzP2UwMzYiXSwibmFtZXMiOlsiQ3VzdG9tNDA0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiRXJyb3JBbmltYXRpb24iLCJsb29wIiwiYXV0b3BsYXkiLCJhbmltYXRpb25EYXRhIiwiRXJyb3I0MDQiLCJyZW5kZXJlclNldHRpbmdzIiwicHJlc2VydmVBc3BlY3RSYXRpbyIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBO0FBRUE7O0FBSUEsTUFBTUEsU0FBUyxHQUFHLE1BQU07QUFFdEIsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLFFBQU1DLGNBQWMsR0FBRztBQUNyQkMsUUFBSSxFQUFFLElBRGU7QUFFckJDLFlBQVEsRUFBRSxJQUZXO0FBR3JCQyxpQkFBYSxFQUFFQywrQ0FITTtBQUlyQkMsb0JBQWdCLEVBQUU7QUFDaEJDLHlCQUFtQixFQUFFO0FBREw7QUFKRyxHQUF2QjtBQVVBLFNBQ0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFDRSwwQkFBc0IsTUFEeEI7QUFFRSxXQUFPLEVBQUVOLGNBRlg7QUFHRSxVQUFNLEVBQUUsR0FIVjtBQUlFLFNBQUssRUFBRSxHQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FLE1BQUMsNENBQUQ7QUFBTSxTQUFLLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORixFQU9FLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFQRixDQURGLEVBVUUsTUFBQyxvREFBRDtBQUFjLFdBQU8sRUFBRSxNQUFNRixNQUFNLENBQUNTLElBQVAsQ0FBWSxTQUFaLENBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBc0QsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXRELFlBVkYsQ0FERjtBQWNELENBNUJEOztBQThCZVYsd0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvNDA0L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgeyBGaUFycm93TGVmdCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcblxuaW1wb3J0IExvdHRpZSBmcm9tICdyZWFjdC1sb3R0aWUnO1xuXG5pbXBvcnQgeyBTdHlsZWQ0MDQsIFRleHQsIFN0eWxlZEJ1dHRvbiB9IGZyb20gJy4vc3R5bGVzJztcblxuaW1wb3J0IEVycm9yNDA0IGZyb20gJy4uLy4uLy4uL3B1YmxpYy9FcnJvci5qc29uJztcblxuXG5cbmNvbnN0IEN1c3RvbTQwNCA9ICgpID0+IHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBFcnJvckFuaW1hdGlvbiA9IHtcbiAgICBsb29wOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGFuaW1hdGlvbkRhdGE6IEVycm9yNDA0LFxuICAgIHJlbmRlcmVyU2V0dGluZ3M6IHtcbiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW86ICd4TWlkWU1pZCBzbGljZSdcbiAgICB9XG5cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWQ0MDQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8TG90dGllXG4gICAgICAgICAgaXNDbGlja1RvUGF1c2VEaXNhYmxlZFxuICAgICAgICAgIG9wdGlvbnM9e0Vycm9yQW5pbWF0aW9ufVxuICAgICAgICAgIGhlaWdodD17MjAwfVxuICAgICAgICAgIHdpZHRoPXszMDB9IC8+XG4gICAgICAgIDxUZXh0IGVycm9yPiBFcnJvciA0MDQ8L1RleHQ+XG4gICAgICAgIDxUZXh0PiBUaGlzIHBhZ2Ugbm90IEZvdW5kPC9UZXh0PlxuICAgICAgPC9kaXY+XG4gICAgICA8U3R5bGVkQnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvaG9tZS8xJyl9PiA8RmlBcnJvd0xlZnQgLz4gVm9sdGFyPC9TdHlsZWRCdXR0b24+XG4gICAgPC9TdHlsZWQ0MDQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tNDA0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/404/index.js\n");

/***/ }),

/***/ "./src/pages/404/styles.js":
/*!*********************************!*\
  !*** ./src/pages/404/styles.js ***!
  \*********************************/
/*! exports provided: Styled404, Text, StyledButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Styled404\", function() { return Styled404; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledButton\", function() { return StyledButton; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lottie */ \"react-lottie\");\n/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Styled404 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"styles__Styled404\",\n  componentId: \"sc-13oxkdm-0\"\n})([\"display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;height:calc(100vh - 8rem);\"]);\nconst Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({\n  displayName: \"styles__Text\",\n  componentId: \"sc-13oxkdm-1\"\n})([\"font-size:2rem;text-align:center;margin:2rem 0;\", \"\"], props => props.error && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"font-weight:bold;font-size:2.5rem;\"]));\nconst StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({\n  displayName: \"styles__StyledButton\",\n  componentId: \"sc-13oxkdm-2\"\n})([\"display:flex;align-items:center;justify-content:center;background:#44475A;color:#F8F8F2;border:0.2rem solid #F8F8F2;text-align:center;border-radius:0.8rem;padding:1rem 2rem;width:10%;cursor:pointer;transition:all .2s ease;svg{margin-right:0.5rem;}&:hover{background:#F8F8F2;color:#44475A;border:0.2rem solid #44475A;}\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvNDA0L3N0eWxlcy5qcz9iODljIl0sIm5hbWVzIjpbIlN0eWxlZDQwNCIsInN0eWxlZCIsImRpdiIsIlRleHQiLCJoMSIsInByb3BzIiwiZXJyb3IiLCJjc3MiLCJTdHlsZWRCdXR0b24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRU8sTUFBTUEsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDBIQUFmO0FBYUEsTUFBTUMsSUFBSSxHQUFHRix3REFBTSxDQUFDRyxFQUFWO0FBQUE7QUFBQTtBQUFBLDREQU1iQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixJQUFlQyw2REFBZix3Q0FOSSxDQUFWO0FBY0EsTUFBTUMsWUFBWSxHQUFHUCx3REFBTSxDQUFDRyxFQUFWO0FBQUE7QUFBQTtBQUFBLHFVQUFsQiIsImZpbGUiOiIuL3NyYy9wYWdlcy80MDQvc3R5bGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBMb3R0aWUgZnJvbSAncmVhY3QtbG90dGllJztcblxuZXhwb3J0IGNvbnN0IFN0eWxlZDQwNCA9IHN0eWxlZC5kaXZgXG5cbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgd2lkdGg6IDEwMCU7XG4gICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4cmVtKTtcblxuXG5gO1xuXG5cbmV4cG9ydCBjb25zdCBUZXh0ID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAycmVtIDA7XG5cblxuICAke3Byb3BzID0+IHByb3BzLmVycm9yICYmIGNzc2BcblxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICBgfVxuXG5cbmA7XG5leHBvcnQgY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmgxYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzQ0NDc1QTtcbiAgY29sb3I6ICAjRjhGOEYyO1xuICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjRjhGOEYyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcbiAgcGFkZGluZzogMXJlbSAycmVtOyBcbiAgd2lkdGg6IDEwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XG5cbiAgc3Zne1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICB9XG5cblxuICAmOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICNGOEY4RjI7XG4gICAgY29sb3I6ICM0NDQ3NUE7XG4gICAgYm9yZGVyOiAwLjJyZW0gc29saWQgIzQ0NDc1QTtcbiAgfVxuXG5cbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/404/styles.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/fi\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9maVwiP2M0NmYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvZmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9maVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/fi\n");

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