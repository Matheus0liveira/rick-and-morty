module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Azb":
/***/ (function(module) {

module.exports = JSON.parse("{\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":0,\"ty\":4,\"nm\":\"Shape Layer 1\",\"ks\":{\"o\":{\"k\":100},\"r\":{\"k\":0},\"p\":{\"k\":[300,300,0]},\"a\":{\"k\":[0,0,0]},\"s\":{\"k\":[244,244,100]}},\"ao\":0,\"shapes\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"k\":[100,100]},\"p\":{\"k\":[0,0]},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\"},{\"ty\":\"tm\",\"s\":{\"k\":[{\"i\":{\"x\":[0.439],\"y\":[1.016]},\"o\":{\"x\":[0.561],\"y\":[0.015]},\"n\":[\"0p439_1p016_0p561_0p015\"],\"t\":5,\"s\":[100],\"e\":[0]},{\"t\":33.0000013441176}],\"ix\":1},\"e\":{\"k\":[{\"i\":{\"x\":[0.439],\"y\":[1.017]},\"o\":{\"x\":[0.561],\"y\":[0.016]},\"n\":[\"0p439_1p017_0p561_0p016\"],\"t\":0,\"s\":[100],\"e\":[0]},{\"t\":30.0000012219251}],\"ix\":2},\"o\":{\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\"},{\"ty\":\"st\",\"fillEnabled\":true,\"c\":{\"k\":[1,1,1,1]},\"o\":{\"k\":100},\"w\":{\"k\":16},\"lc\":2,\"lj\":1,\"ml\":4,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\"}],\"ip\":0,\"op\":900.000036657751,\"st\":0,\"bm\":0,\"sr\":1}],\"v\":\"4.5.3\",\"ddd\":0,\"ip\":1.00000004073083,\"op\":33.0000013441175,\"fr\":29.9700012207031,\"w\":600,\"h\":600}");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Oa9/");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "C9pf":
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "G7J3":
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.3.4\",\"fr\":25,\"ip\":0,\"op\":134,\"w\":72,\"h\":72,\"nm\":\"Comp 1\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Shape Layer 2\",\"parent\":2,\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[-0.125,17.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-18.125,9.25,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-24.452,3.003],[-18.043,9.497],[-11.548,3.003]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0_1_0p333_0\"],\"t\":28,\"s\":[0],\"e\":[100]},{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0_1_0p333_0\"],\"t\":40,\"s\":[100],\"e\":[100]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p833_1_0p167_0\"],\"t\":75,\"s\":[100],\"e\":[0]},{\"t\":84}],\"ix\":1},\"e\":{\"a\":0,\"k\":0,\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0.682352701823,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false}],\"ip\":16,\"op\":141,\"st\":16,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Shape Layer 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.095,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p095_1_0p333_0\",\"t\":26,\"s\":[36,36,0],\"e\":[36,44,0],\"to\":[0,1.33333337306976,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.095,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p095_1_0p333_0\",\"t\":35.32,\"s\":[36,44,0],\"e\":[36,36,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.095,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p095_1_0p333_0\",\"t\":44.642,\"s\":[36,36,0],\"e\":[36,44,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.095,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p095_1_0p333_0\",\"t\":54.68,\"s\":[36,44,0],\"e\":[36,36,0],\"to\":[0,0,0],\"ti\":[0,1.33333337306976,0]},{\"i\":{\"x\":0.095,\"y\":0.095},\"o\":{\"x\":0.167,\"y\":0.167},\"n\":\"0p095_0p095_0p167_0p167\",\"t\":64,\"s\":[36,36,0],\"e\":[36,36,0],\"to\":[0,0,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.095,\"y\":1},\"o\":{\"x\":0.167,\"y\":0},\"n\":\"0p095_1_0p167_0\",\"t\":74,\"s\":[36,36,0],\"e\":[36,51,0],\"to\":[0,2.5,0],\"ti\":[0,-2.5,0]},{\"t\":84}],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[10.1,0],[0,0],[0,10.1],[0,0],[-10.1,0],[0,0],[9.064,-9.064],[0,-21.037],[0,0]],\"o\":[[0,0],[0,10.1],[0,0],[-10.1,0],[0,0],[0,-10.1],[0,0],[1.5,0],[-9.998,9.998],[0,0],[0,0]],\"v\":[[18.274,12.803],[18.287,14.213],[0,32.5],[0,32.5],[-18.287,14.213],[-18.287,-14.213],[-2.625,-32.5],[-1.625,-32.5],[-0.248,-18.745],[0.065,7.412],[0.006,16.626]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0_1_0p333_0\"],\"t\":16,\"s\":[0],\"e\":[100]},{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0_1_0p333_0\"],\"t\":28,\"s\":[100],\"e\":[100]},{\"i\":{\"x\":[0],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0_1_0p333_0\"],\"t\":40,\"s\":[100],\"e\":[100]},{\"t\":76}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.163],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p163_1_0p333_0\"],\"t\":16,\"s\":[0],\"e\":[92]},{\"i\":{\"x\":[0.163],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p163_1_0p333_0\"],\"t\":40,\"s\":[92],\"e\":[92]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p833_1_0p167_0\"],\"t\":76,\"s\":[92],\"e\":[100]},{\"t\":84}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0.68235296011,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false}],\"ip\":16,\"op\":141,\"st\":16,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Shape Layer 11\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[36,36,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[10.1,0],[0,0],[0,10.1],[0,0],[-10.1,0],[0,0],[0,-10.1],[0,0]],\"o\":[[0,0],[0,10.1],[0,0],[-10.1,0],[0,0],[0,-10.1],[0,0],[10.1,0],[0,0],[0,0]],\"v\":[[18.324,4.428],[18.287,14.213],[0,32.5],[0,32.5],[-18.287,14.213],[-18.287,-14.213],[0,-32.5],[0,-32.5],[18.287,-14.213],[18.287,7.376]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p833_1_0p333_0\"],\"t\":0,\"s\":[0],\"e\":[79]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p833_1_0p167_0\"],\"t\":10,\"s\":[79],\"e\":[100]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p833_1_0p167_0\"],\"t\":20,\"s\":[100],\"e\":[0]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p833_1_0p167_0\"],\"t\":84,\"s\":[0],\"e\":[33]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p833_1_0p167_0\"],\"t\":92,\"s\":[33],\"e\":[100]},{\"t\":100}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p833_1_0p333_0\"],\"t\":0,\"s\":[0],\"e\":[61]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p833_1_0p167_0\"],\"t\":10,\"s\":[61],\"e\":[100]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p833_1_0p167_0\"],\"t\":20,\"s\":[100],\"e\":[0]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p833_1_0p167_0\"],\"t\":84,\"s\":[0],\"e\":[66]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p833_1_0p167_0\"],\"t\":92,\"s\":[66],\"e\":[100]},{\"t\":100}],\"ix\":2},\"o\":{\"a\":0,\"k\":68,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0.682352941176,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false}],\"ip\":84,\"op\":246,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Shape Layer 5\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[36,36,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[10.1,0],[0,0],[0,10.1],[0,0],[-10.1,0],[0,0],[0,-10.1],[0,0]],\"o\":[[0,0],[0,10.1],[0,0],[-10.1,0],[0,0],[0,-10.1],[0,0],[10.1,0],[0,0],[0,0]],\"v\":[[18.324,4.428],[18.287,14.213],[0,32.5],[0,32.5],[-18.287,14.213],[-18.287,-14.213],[0,-32.5],[0,-32.5],[18.287,-14.213],[18.287,7.376]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p833_1_0p333_0\"],\"t\":0,\"s\":[0],\"e\":[79]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p833_1_0p167_0\"],\"t\":10,\"s\":[79],\"e\":[100]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p833_1_0p167_0\"],\"t\":20,\"s\":[100],\"e\":[22]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p833_1_0p167_0\"],\"t\":84,\"s\":[22],\"e\":[43]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p833_1_0p167_0\"],\"t\":93,\"s\":[43],\"e\":[100]},{\"t\":101}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p833_1_0p333_0\"],\"t\":0,\"s\":[0],\"e\":[61]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p833_1_0p167_0\"],\"t\":10,\"s\":[61],\"e\":[100]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p833_1_0p167_0\"],\"t\":20,\"s\":[100],\"e\":[22]},{\"i\":{\"x\":[0.833],\"y\":[1]},\"o\":{\"x\":[0.167],\"y\":[0]},\"n\":[\"0p833_1_0p167_0\"],\"t\":84,\"s\":[22],\"e\":[100]},{\"t\":101}],\"ix\":2},\"o\":{\"a\":0,\"k\":15,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0,0.682352941176,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false}],\"ip\":0,\"op\":84,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Shape Layer 10\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[36,36,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[10.1,0],[0,0],[0,10.1],[0,0],[-10.1,0],[0,0],[0,-10.1],[0,0]],\"o\":[[0,0],[0,10.1],[0,0],[-10.1,0],[0,0],[0,-10.1],[0,0],[10.1,0],[0,0],[0,0]],\"v\":[[18.324,4.428],[18.287,14.213],[0,32.5],[0,32.5],[-18.287,14.213],[-18.287,-14.213],[0,-32.5],[0,-32.5],[18.287,-14.213],[18.287,7.376]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":0,\"k\":100,\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":84,\"s\":[0],\"e\":[4]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":85,\"s\":[4],\"e\":[11.733]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":87,\"s\":[11.733],\"e\":[100]},{\"t\":100}],\"ix\":2},\"o\":{\"a\":0,\"k\":72,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.890196084976,0.890196084976,0.890196084976,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false}],\"ip\":77,\"op\":246,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"Shape Layer 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[36,36,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[10.1,0],[0,0],[0,10.1],[0,0],[-10.1,0],[0,0],[0,-10.1],[0,0]],\"o\":[[0,0],[0,10.1],[0,0],[-10.1,0],[0,0],[0,-10.1],[0,0],[10.1,0],[0,0],[0,0]],\"v\":[[18.324,4.428],[18.287,14.213],[0,32.5],[0,32.5],[-18.287,14.213],[-18.287,-14.213],[0,-32.5],[0,-32.5],[18.287,-14.213],[18.287,7.376]],\"c\":false},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.571],\"y\":[0.701]},\"o\":{\"x\":[0.285],\"y\":[0]},\"n\":[\"0p571_0p701_0p285_0\"],\"t\":0,\"s\":[0],\"e\":[81.341]},{\"i\":{\"x\":[0.653],\"y\":[-0.076]},\"o\":{\"x\":[0.321],\"y\":[0.735]},\"n\":[\"0p653_-0p076_0p321_0p735\"],\"t\":13,\"s\":[81.341],\"e\":[85.14]},{\"i\":{\"x\":[0.66],\"y\":[0.185]},\"o\":{\"x\":[0.327],\"y\":[0.479]},\"n\":[\"0p66_0p185_0p327_0p479\"],\"t\":15,\"s\":[85.14],\"e\":[89.17]},{\"i\":{\"x\":[0.661],\"y\":[1]},\"o\":{\"x\":[0.327],\"y\":[0.292]},\"n\":[\"0p661_1_0p327_0p292\"],\"t\":16,\"s\":[89.17],\"e\":[100]},{\"t\":17}],\"ix\":1},\"e\":{\"a\":0,\"k\":0,\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.890196084976,0.890196084976,0.890196084976,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false}],\"ip\":0,\"op\":77,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ "Oa9/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-lottie"
var external_react_lottie_ = __webpack_require__("iYUx");
var external_react_lottie_default = /*#__PURE__*/__webpack_require__.n(external_react_lottie_);

// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__("C9pf");

// EXTERNAL MODULE: ./src/pages/home/styles.js
var styles = __webpack_require__("Ty/F");

// EXTERNAL MODULE: ./src/assets/globalStyles.js
var globalStyles = __webpack_require__("VO7I");

// EXTERNAL MODULE: ./public/swipeDown.json
var swipeDown = __webpack_require__("G7J3");

// EXTERNAL MODULE: ./public/loading.json
var public_loading = __webpack_require__("+Azb");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/compoenents/Card/styled.js

const StyledCard = external_styled_components_default.a.article.withConfig({
  displayName: "styled__StyledCard",
  componentId: "ybltv7-0"
})(["display:flex;background:#44475A;width:45%;border-radius:0.8rem;overflow:hidden;padding-right:2rem;transition:transform .2s ease;&:hover{transform:scale(1.01);}img{border-top-left-radius:0.8rem;border-bottom-left-radius:0.8rem;}@media (max-width:980px){width:100%;}"]);
const Text = external_styled_components_default.a.h1.withConfig({
  displayName: "styled__Text",
  componentId: "ybltv7-1"
})(["margin:2rem 0 0 2rem;", " ", " ", ""], props => props.title && Object(external_styled_components_["css"])(["margin-top:1rem;color:#F8F8F2;font-weight:bold;font-size:2rem;"]), props => props.description && Object(external_styled_components_["css"])(["display:flex;align-items:center;margin:0.5rem 0 0  2rem;color:#CCCCCC;font-weight:lighter;"]), props => props.ball && Object(external_styled_components_["css"])(["display:flex;align-items:center;margin:0.5rem 0 0  0.2rem;color:#CCCCCC;font-weight:lighter;"]));
const Ball = external_styled_components_default.a.span.withConfig({
  displayName: "styled__Ball",
  componentId: "ybltv7-2"
})(["display:flex;align-items:center;margin-left:2rem;"]);
const BallIndicator = external_styled_components_default.a.h1.withConfig({
  displayName: "styled__BallIndicator",
  componentId: "ybltv7-3"
})(["width:1rem;height:1rem;border-radius:50%;margin-right:0.5rem;", " ", " ", ""], props => props.status === 'Alive' && Object(external_styled_components_["css"])(["background:#50FA7B;"]), props => props.status === 'Dead' && Object(external_styled_components_["css"])(["background:#FF5555;"]), props => props.status === 'unknown' && Object(external_styled_components_["css"])(["background:#282A36;"]));
// CONCATENATED MODULE: ./src/compoenents/Card/index.js

var __jsx = external_react_default.a.createElement;


const Card = ({
  results
}) => {
  return __jsx(external_react_default.a.Fragment, null, results.map(person => __jsx(StyledCard, {
    key: person.id
  }, __jsx("img", {
    src: person.image,
    alt: ""
  }), __jsx("div", null, __jsx(Text, {
    title: "true"
  }, person.name), __jsx(Ball, null, __jsx(BallIndicator, {
    status: person.status
  }), __jsx(Text, {
    ball: "true"
  }, person.status, " - ", person.species)), __jsx(Text, {
    title: "true"
  }, "Sexo"), __jsx(Text, {
    description: "true"
  }, person.gender), __jsx(Text, {
    title: "true"
  }, "Ultima localiza\xE7\xE3o"), __jsx(Text, {
    description: "true"
  }, person.location.name)))));
};

/* harmony default export */ var compoenents_Card = (Card);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./src/api/profiles.js

const api = external_axios_default.a.create({
  baseURL: 'https://rickandmortyapi.com/api/'
});
/* harmony default export */ var profiles = (api);
// CONCATENATED MODULE: ./src/pages/home/[id].js

var _id_jsx = external_react_default.a.createElement;











const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

function Home({
  data,
  params
}) {
  const {
    0: dataCard,
    1: setDataCard
  } = Object(external_react_["useState"])(data);
  const {
    0: showDescrition,
    1: setShowDescription
  } = Object(external_react_["useState"])(false);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(true);
  const {
    0: disableButtons,
    1: setDisableButtons
  } = Object(external_react_["useState"])(false);
  const searchRef = Object(external_react_["useRef"])(null);
  const router = Object(router_["useRouter"])();
  const myScroll = Object(external_react_["useRef"])(null);
  Object(external_react_["useEffect"])(() => {
    setDataCard(data);
  }, [data]);

  const executeScroll = () => scrollToRef(myScroll);

  const SwipeDownAnimation = {
    loop: true,
    autoplay: true,
    animationData: swipeDown,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const LoadingAnimation = {
    loop: true,
    autoplay: true,
    animationData: public_loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const name = searchRef.current.value;
    const results = await profiles.get(`/character/?name=${name}`);

    if (results) {
      setDataCard(results.data);
      setDisableButtons(true);
    }

    console.log(results.data);
  };

  const handleMoveToNextPage = () => {
    if (!dataCard.info.next) {
      return '';
    }

    const nextPage = dataCard.info.next.split('page=')[1];
    return router.push(nextPage);
  };

  const handleMoveToPrevPage = () => {
    if (!dataCard.info.prev) {
      return '';
    }

    const prevPage = dataCard.info.prev.split('page=')[1];
    return router.push(`${prevPage}`);
  };

  const backHomeOnePage = () => {
    setDisableButtons(false);
    return router.push(`1`);
  };

  router_default.a.events.on('routeChangeStart', () => {
    if (!dataCard.info.next) {
      setLoading(false);
    }
  });
  router_default.a.events.on('routeChangeComplete', () => {
    if (dataCard.info.next !== null) {
      setLoading(true);
      executeScroll();
    }
  });
  return _id_jsx(external_react_default.a.Fragment, null, _id_jsx(styles["default"], null, _id_jsx(globalStyles["a" /* Container */], null, _id_jsx("img", {
    src: "/rick.svg",
    alt: ""
  }), _id_jsx(styles["Text"], null, "Rick and Morty"), _id_jsx(styles["Description"], {
    showDescrition: showDescrition
  }, "A s\xE9rie mostra as aventuras ins\xF3litas do cientista beberr\xE3o Rick Sanchez e seu neto inseguro e com horm\xF4nios em ebuli\xE7\xE3o Morty Smith, membros de uma fam\xEDlia americana comum, composta tamb\xE9m por Jerry, um pai ignorante; Beth, uma m\xE3e sensata e Summer, uma irm\xE3 mais velha, t\xEDpica adolescente alienada, que se compadece do irm\xE3o quando passa a integrar as aventuras de seu av\xF4."), _id_jsx(styles["StyledButton"], {
    onClick: () => setShowDescription(!showDescrition),
    about: "true"
  }, !showDescrition ? 'SOBRE' : 'ESCONDER'), _id_jsx(styles["StyledArrowDown"], null, _id_jsx(external_react_lottie_default.a, {
    isClickToPauseDisabled: true,
    options: SwipeDownAnimation,
    height: 80,
    width: 80
  })))), _id_jsx(styles["StyledProfiles"], null, _id_jsx(styles["Box"], null), _id_jsx(globalStyles["a" /* Container */], null, _id_jsx("div", {
    ref: myScroll
  }, _id_jsx(styles["Text"], {
    person: "true"
  }, "Personagens"), _id_jsx(styles["Line"], null)), _id_jsx(styles["InputSearch"], {
    onSubmit: handleSubmit
  }, _id_jsx("input", {
    ref: searchRef,
    type: "text",
    placeholder: "Pesquisar"
  }), _id_jsx(styles["StyledButton"], {
    type: "submit",
    search: "true"
  }, _id_jsx(fi_["FiSearch"], null)))), _id_jsx(globalStyles["a" /* Container */], null, _id_jsx(styles["SectionCards"], null, loading ? _id_jsx(compoenents_Card, {
    results: dataCard.results
  }) : _id_jsx(external_react_lottie_default.a, {
    isClickToPauseDisabled: true,
    options: LoadingAnimation,
    height: 80,
    width: 80
  }))), _id_jsx(globalStyles["a" /* Container */], null, _id_jsx(styles["CountPages"], null, disableButtons ? _id_jsx(styles["StyledButton"], {
    back: "true",
    onClick: backHomeOnePage
  }, _id_jsx(fi_["FiArrowLeft"], null), " Voltar") : _id_jsx(external_react_default.a.Fragment, null, _id_jsx(styles["StyledButton"], {
    countPage: "true",
    onClick: handleMoveToPrevPage
  }, _id_jsx(fi_["FiArrowLeft"], null), "Prev"), _id_jsx(styles["Text"], {
    count: "true"
  }, params.id), _id_jsx(styles["StyledButton"], {
    countPage: "true",
    onClick: handleMoveToNextPage
  }, "Next", _id_jsx(fi_["FiArrowRight"], null))))), _id_jsx(styles["Text"], {
    footer: "true"
  }, "Created By: ", _id_jsx("a", {
    target: "_blank",
    href: "https://github.com/Matheus0liveira"
  }, " Matheus Oliveira ", _id_jsx("span", null, _id_jsx(fi_["FiHeart"], null), " "), " "))), _id_jsx("footer", null));
}

;
async function getStaticProps({
  params
}) {
  const {
    data
  } = await profiles.get(`/character?page=${params.id}`);
  return {
    props: {
      data,
      params
    }
  };
}
async function getStaticPaths() {
  return {
    paths: [{
      params: {
        id: '1'
      }
    }, {
      params: {
        id: '2'
      }
    }, {
      params: {
        id: '3'
      }
    }, {
      params: {
        id: '4'
      }
    }, {
      params: {
        id: '5'
      }
    }, {
      params: {
        id: '6'
      }
    }, {
      params: {
        id: '7'
      }
    }, {
      params: {
        id: '8'
      }
    }, {
      params: {
        id: '9'
      }
    }, {
      params: {
        id: '10'
      }
    }, {
      params: {
        id: '11'
      }
    }, {
      params: {
        id: '12'
      }
    }, {
      params: {
        id: '13'
      }
    }, {
      params: {
        id: '14'
      }
    }, {
      params: {
        id: '15'
      }
    }, {
      params: {
        id: '16'
      }
    }, {
      params: {
        id: '17'
      }
    }, {
      params: {
        id: '18'
      }
    }, {
      params: {
        id: '19'
      }
    }, {
      params: {
        id: '20'
      }
    }, {
      params: {
        id: '21'
      }
    }, {
      params: {
        id: '22'
      }
    }, {
      params: {
        id: '23'
      }
    }, {
      params: {
        id: '24'
      }
    }, {
      params: {
        id: '25'
      }
    }, {
      params: {
        id: '26'
      }
    }, {
      params: {
        id: '27'
      }
    }, {
      params: {
        id: '28'
      }
    }, {
      params: {
        id: '29'
      }
    }, {
      params: {
        id: '30'
      }
    }, {
      params: {
        id: '31'
      }
    }, {
      params: {
        id: '32'
      }
    }, {
      params: {
        id: '33'
      }
    }, {
      params: {
        id: '34'
      }
    }],
    fallback: false
  };
}
;
/* harmony default export */ var _id_ = __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "Ty/F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return StyledButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledArrowDown", function() { return StyledArrowDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledProfiles", function() { return StyledProfiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSearch", function() { return InputSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionCards", function() { return SectionCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountPages", function() { return CountPages; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledMain = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "styles__StyledMain",
  componentId: "sc-9t8j3s-0"
})(["display:flex;align-items:center;justify-content:center;background:#F8F8F2;height:calc(100vh - 8rem);img{width:10rem;margin:0 auto;}"]);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "styles__Text",
  componentId: "sc-9t8j3s-1"
})(["text-align:center;font-size:min(8rem,10vw);font-weight:bold;color:#282A36;", " ", " ", ""], props => props.person && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["color:#F8F8F2;font-size:min(4rem,10vw);text-align:left;@media (max-width:840px){text-align:center;}"]), props => props.count && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["color:#BD93F9;font-size:1.8rem;margin:2rem;"]), props => props.footer && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["display:flex;align-items:center;justify-content:center;color:#F8F8F2;font-size:1.6rem;padding:4rem 0 2rem 0;a,span{display:flex;align-items:center;justify-content:center;text-decoration:none;color:#BD93F9;&:hover{opacity:0.5;}}a{margin:0 0.5rem;}span{margin-left:0.5rem;}"]));
const Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "styles__Description",
  componentId: "sc-9t8j3s-2"
})(["text-align:justify;font-weight:lighter;margin:2rem 0;max-height:2000px;font-size:min(2rem,10vw);line-height:1.5;color:#282A36;visibility:visible;transition:all .5s;", ""], props => !props.showDescrition && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["opacity:0;max-height:0;visibility:hidden;margin:0;"]));
const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "styles__StyledButton",
  componentId: "sc-9t8j3s-3"
})(["cursor:pointer;transition:background .2s ease;", " &:hover{background:#292A36;}", " ", " ", ""], props => props.about && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding:0.8rem 5rem;border:0;border-radius:0.6rem;font-weight:bold;color:#F8F8F2;background:#44475A;text-align:center;margin:0 auto;@media (max-width:400px){margin-bottom:20rem;}"]), props => props.search && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["display:flex;align-items:center;justify-content:center;height:4rem;border:0;border-radius:0.6rem;background:#BD93F9;padding:0 3rem;&:hover{background:#50FA7B;}svg{font-size:2rem;}@media (max-width:840px){margin-top:2rem;width:20%;}@media (max-width:420px){width:100%;margin-top:0;}"]), props => props.countPage && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["display:flex;align-items:center;justify-content:center;font-size:2rem;padding:1rem;border:0;border-radius:0.8rem;background:#282A36;box-shadow:0px 0px 30px -10px rgba(0,0,0,1);color:#F8F8F2;font-weight:bold;svg{font-size:2rem;margin:0 1rem;}&:hover{background:#BD93F9;color:#282A36;}"]), props => props.back && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["display:flex;align-items:center;justify-content:center;font-size:2rem;padding:1rem;border:0;border-radius:0.8rem;background:#282A36;box-shadow:0px 0px 30px -10px rgba(0,0,0,1);color:#F8F8F2;font-weight:bold;svg{font-size:2rem;margin:0 1rem;}&:hover{background:#BD93F9;color:#282A36;"]));
const StyledArrowDown = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__StyledArrowDown",
  componentId: "sc-9t8j3s-4"
})(["position:absolute;left:0;right:0;bottom:1rem;z-index:2;"]);
const StyledProfiles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__StyledProfiles",
  componentId: "sc-9t8j3s-5"
})(["background:#282A36;padding:6rem 0 0 0;div{flex-direction:row;justify-content:space-between;@media (max-width:840px){flex-direction:column;}}"]);
const InputSearch = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "styles__InputSearch",
  componentId: "sc-9t8j3s-6"
})(["width:45%;display:flex;align-items:center;justify-content:center;background:#282A36;input{width:100%;padding:0 2rem;height:4rem;border:0;border-radius:0.6rem;margin-right:4rem;font-weight:bold;::placeholder{font-weight:bold;color:#424558;}@media (max-width:840px){margin-right:0;width:100%;margin-top:2rem;}}@media (max-width:840px){width:100%;gap:4rem;}@media (max-width:420px){flex-wrap:wrap;gap:2rem;}"]);
const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Box",
  componentId: "sc-9t8j3s-7"
})(["position:absolute;left:0;right:0;bottom:0;background:#F8F8F2;width:6rem;height:6rem;margin:0 auto -3rem auto;transform:rotate(45deg);"]);
const Line = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__Line",
  componentId: "sc-9t8j3s-8"
})(["width:40rem;height:0.1rem;background:#BD93F9;margin-top:2rem;@media (max-width:840px){margin:2rem auto;width:100%;}"]);
const SectionCards = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styles__SectionCards",
  componentId: "sc-9t8j3s-9"
})(["display:flex;flex-wrap:wrap;gap:5rem;margin-top:10rem;width:100%;"]);
const CountPages = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "styles__CountPages",
  componentId: "sc-9t8j3s-10"
})(["display:flex;align-items:center;justify-content:center;margin:4rem auto;"]);
/* harmony default export */ __webpack_exports__["default"] = (StyledMain);

/***/ }),

/***/ "VO7I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GlobalStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`

  :root{

    font-size: 62.5%;

  }


  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
  }


  body,
  html{
    background: #F8F8F2;
    scroll-behavior: smooth;

  }

  button,input{
    outline: 0;
  }

`;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "globalStyles__Container",
  componentId: "sc-1ri18qy-0"
})(["display:flex;flex-direction:column;width:100%;max-width:1400px;margin:auto;padding:0 2%;"]);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "iYUx":
/***/ (function(module, exports) {

module.exports = require("react-lottie");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });