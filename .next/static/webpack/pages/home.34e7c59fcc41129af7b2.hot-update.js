webpackHotUpdate_N_E("pages/home",{

/***/ "./src/pages/home/styles.js":
/*!**********************************!*\
  !*** ./src/pages/home/styles.js ***!
  \**********************************/
/*! exports provided: StyledMain, Text, Description, StyledButton, StyledArrowDown, StyledProfiles, InputSearch, Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledMain\", function() { return StyledMain; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledButton\", function() { return StyledButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledArrowDown\", function() { return StyledArrowDown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledProfiles\", function() { return StyledProfiles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InputSearch\", function() { return InputSearch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Box\", function() { return Box; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar StyledMain = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"styles__StyledMain\",\n  componentId: \"sc-9t8j3s-0\"\n})([\"display:flex;align-items:center;justify-content:center;background:#F8F8F2;height:calc(100vh - 8rem);\"]);\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"styles__Text\",\n  componentId: \"sc-9t8j3s-1\"\n})([\"text-align:center;font-size:min(8rem,10vw);font-weight:bold;color:#282A36;\", \"\"], function (props) {\n  return props.person && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"color:#F8F8F2;font-size:4rem;\"]);\n});\nvar Description = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"styles__Description\",\n  componentId: \"sc-9t8j3s-2\"\n})([\"text-align:justify;font-weight:lighter;margin:2rem 0;max-height:2000px;font-size:min(2rem,10vw);line-height:1.5;color:#282A36;visibility:visible;transition:all .5s;\", \"\"], function (props) {\n  return !props.showDescrition && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"opacity:0;max-height:0;visibility:hidden;margin:0;\"]);\n});\nvar StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n  displayName: \"styles__StyledButton\",\n  componentId: \"sc-9t8j3s-3\"\n})([\"padding:0.8rem 5rem;border:0;border-radius:0.6rem;font-weight:bold;color:#F8F8F2;background:#44475A;text-align:center;margin:0 auto;cursor:pointer;transition:background .2s ease;&:hover{background:#292A36;}\", \"\"], function (props) {\n  return props.search && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"display:flex;align-items:center;justify-content:center;height:4rem;border:0;border-radius:0.6rem;background:#BD93F9;padding:0 3rem;&:hover{background:#44475A;}svg{font-size:2rem;}\"]);\n});\nvar StyledArrowDown = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__StyledArrowDown\",\n  componentId: \"sc-9t8j3s-4\"\n})([\"position:absolute;left:0;right:0;bottom:4rem;\"]);\nvar StyledProfiles = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__StyledProfiles\",\n  componentId: \"sc-9t8j3s-5\"\n})([\"background:#282A36;padding:6rem 0;div{flex-direction:row;justify-content:space-between;}\"]);\nvar InputSearch = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__InputSearch\",\n  componentId: \"sc-9t8j3s-6\"\n})([\"display:flex;background:#282A36;input{padding:0 2rem;height:4rem;border:0;border-radius:0.6rem;margin-right:4rem;font-weight:bold;::placeholder{font-weight:bold;color:#424558;}}\"]);\nvar Box = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Box\",\n  componentId: \"sc-9t8j3s-7\"\n})([\"position:absolute;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUvc3R5bGVzLmpzPzRmMmYiXSwibmFtZXMiOlsiU3R5bGVkTWFpbiIsInN0eWxlZCIsImgxIiwiVGV4dCIsInByb3BzIiwicGVyc29uIiwiY3NzIiwiRGVzY3JpcHRpb24iLCJwIiwic2hvd0Rlc2NyaXRpb24iLCJTdHlsZWRCdXR0b24iLCJidXR0b24iLCJzZWFyY2giLCJTdHlsZWRBcnJvd0Rvd24iLCJkaXYiLCJTdHlsZWRQcm9maWxlcyIsIklucHV0U2VhcmNoIiwiQm94Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR08sSUFBTUEsVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLDRHQUFoQjtBQVdBLElBQU1DLElBQUksR0FBR0YseURBQU0sQ0FBQ0MsRUFBVjtBQUFBO0FBQUE7QUFBQSx1RkFNYixVQUFBRSxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxNQUFOLElBQWdCQyw2REFBaEIsbUNBQUo7QUFBQSxDQU5RLENBQVY7QUFjQSxJQUFNQyxXQUFXLEdBQUdOLHlEQUFNLENBQUNPLENBQVY7QUFBQTtBQUFBO0FBQUEsaUxBY3BCLFVBQUFKLEtBQUs7QUFBQSxTQUFJLENBQUNBLEtBQUssQ0FBQ0ssY0FBUCxJQUF5QkgsNkRBQXpCLHdEQUFKO0FBQUEsQ0FkZSxDQUFqQjtBQXlCQSxJQUFNSSxZQUFZLEdBQUdULHlEQUFNLENBQUNVLE1BQVY7QUFBQTtBQUFBO0FBQUEsMk5Ba0JyQixVQUFBUCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDUSxNQUFOLElBQWdCTiw2REFBaEIseUxBQUo7QUFBQSxDQWxCZ0IsQ0FBbEI7QUEwQ0EsSUFBTU8sZUFBZSxHQUFHWix5REFBTSxDQUFDYSxHQUFWO0FBQUE7QUFBQTtBQUFBLHFEQUFyQjtBQVNBLElBQU1DLGNBQWMsR0FBR2QseURBQU0sQ0FBQ2EsR0FBVjtBQUFBO0FBQUE7QUFBQSxnR0FBcEI7QUFhQSxJQUFNRSxXQUFXLEdBQUdmLHlEQUFNLENBQUNhLEdBQVY7QUFBQTtBQUFBO0FBQUEseUxBQWpCO0FBd0JBLElBQU1HLEdBQUcsR0FBR2hCLHlEQUFNLENBQUNhLEdBQVY7QUFBQTtBQUFBO0FBQUEsMEJBQVQiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS9zdHlsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuXG5leHBvcnQgY29uc3QgU3R5bGVkTWFpbiA9IHN0eWxlZC5oMWBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNGOEY4RjI7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDhyZW0pO1xuXG4gIFxuYDtcblxuXG5leHBvcnQgY29uc3QgVGV4dCA9IHN0eWxlZC5oMWBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IG1pbig4cmVtLCAxMHZ3KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMjgyQTM2OyAgXG5cbiAgJHtwcm9wcyA9PiBwcm9wcy5wZXJzb24gJiYgY3NzYFxuXG4gICAgY29sb3I6ICNGOEY4RjI7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuXG4gIGB9XG5gO1xuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogMnJlbSAwO1xuICBtYXgtaGVpZ2h0OiAyMDAwcHg7XG4gIGZvbnQtc2l6ZTogbWluKDJyZW0sIDEwdncpO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzI4MkEzNjsgIFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzOyBcblxuXG5cblxuICAke3Byb3BzID0+ICFwcm9wcy5zaG93RGVzY3JpdGlvbiAmJiBjc3NgXG4gICBvcGFjaXR5OiAwO1xuICAgbWF4LWhlaWdodDogMDtcbiAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgIG1hcmdpbjowO1xuXG4gICAgXG4gIGB9XG5cblxuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAvKiB3aWR0aDogMTByZW07ICovXG4gIHBhZGRpbmc6IDAuOHJlbSA1cmVtO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRjhGOEYyO1xuICBiYWNrZ3JvdW5kOiAjNDQ0NzVBO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjJzIGVhc2U7XG5cbiAgJjpob3ZlcntcbiAgYmFja2dyb3VuZDogIzI5MkEzNjtcblxuICB9XG5cbiAgJHtwcm9wcyA9PiBwcm9wcy5zZWFyY2ggJiYgY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjQkQ5M0Y5O1xuICAgIHBhZGRpbmc6IDAgM3JlbTtcblxuXG4gICAgJjpob3ZlcntcbiAgICAgIGJhY2tncm91bmQ6ICM0NDQ3NUE7XG4gICAgfVxuXG4gICAgc3Zne1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cbiAgICBcbiAgYH1cblxuYDtcblxuXG5leHBvcnQgY29uc3QgU3R5bGVkQXJyb3dEb3duID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiA0cmVtO1xuXG4gXG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkUHJvZmlsZXMgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAjMjgyQTM2O1xuICBwYWRkaW5nOiA2cmVtIDA7XG5cbiAgZGl2e1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cblxuXG4gXG5gO1xuZXhwb3J0IGNvbnN0IElucHV0U2VhcmNoID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogIzI4MkEzNjtcblxuICBpbnB1dHtcbiAgICBwYWRkaW5nOiAwIDJyZW07IFxuICAgIGhlaWdodDogNHJlbTtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xuICAgIG1hcmdpbi1yaWdodDogNHJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuXG4gICAgOjpwbGFjZWhvbGRlcntcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICM0MjQ1NTg7XG4gICAgfVxuXG5cbiAgfVxuXG4gXG5gO1xuXG5leHBvcnQgY29uc3QgQm94ID0gc3R5bGVkLmRpdmBcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5gOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home/styles.js\n");

/***/ })

})