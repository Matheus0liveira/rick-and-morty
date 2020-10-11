webpackHotUpdate_N_E("pages/home",{

/***/ "./src/pages/home/styles.js":
/*!**********************************!*\
  !*** ./src/pages/home/styles.js ***!
  \**********************************/
/*! exports provided: StyledMain, Text, Description, StyledButton, StyledArrowDown, StyledProfiles, InputSearch, Box, Line, SectionCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledMain\", function() { return StyledMain; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledButton\", function() { return StyledButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledArrowDown\", function() { return StyledArrowDown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledProfiles\", function() { return StyledProfiles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InputSearch\", function() { return InputSearch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Box\", function() { return Box; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Line\", function() { return Line; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SectionCards\", function() { return SectionCards; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar StyledMain = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"styles__StyledMain\",\n  componentId: \"sc-9t8j3s-0\"\n})([\"display:flex;align-items:center;justify-content:center;background:#F8F8F2;height:calc(100vh - 8rem);img{width:10rem;margin:0 auto;}\"]);\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"styles__Text\",\n  componentId: \"sc-9t8j3s-1\"\n})([\"text-align:center;font-size:min(8rem,10vw);font-weight:bold;color:#282A36;\", \"\"], function (props) {\n  return props.person && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"color:#F8F8F2;font-size:4rem;text-align:left;\"]);\n});\nvar Description = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"styles__Description\",\n  componentId: \"sc-9t8j3s-2\"\n})([\"text-align:justify;font-weight:lighter;margin:2rem 0;max-height:2000px;font-size:min(2rem,10vw);line-height:1.5;color:#282A36;visibility:visible;transition:all .5s;\", \"\"], function (props) {\n  return !props.showDescrition && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"opacity:0;max-height:0;visibility:hidden;margin:0;\"]);\n});\nvar StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n  displayName: \"styles__StyledButton\",\n  componentId: \"sc-9t8j3s-3\"\n})([\"cursor:pointer;transition:background .2s ease;\", \" &:hover{background:#292A36;}\", \"\"], function (props) {\n  return props.about && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"padding:0.8rem 5rem;border:0;border-radius:0.6rem;font-weight:bold;color:#F8F8F2;background:#44475A;text-align:center;margin:0 auto;@media (max-width:400px){margin-bottom:20rem;}\"]);\n}, function (props) {\n  return props.search && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"display:flex;align-items:center;justify-content:center;height:4rem;border:0;border-radius:0.6rem;background:#BD93F9;padding:0 3rem;&:hover{background:#44475A;}svg{font-size:2rem;}\"]);\n});\nvar StyledArrowDown = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__StyledArrowDown\",\n  componentId: \"sc-9t8j3s-4\"\n})([\"position:absolute;left:0;right:0;bottom:4rem;\"]);\nvar StyledProfiles = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__StyledProfiles\",\n  componentId: \"sc-9t8j3s-5\"\n})([\"background:#282A36;padding:6rem 0;div{flex-direction:row;justify-content:space-between;}\"]);\nvar InputSearch = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__InputSearch\",\n  componentId: \"sc-9t8j3s-6\"\n})([\"display:flex;align-items:center;justify-content:center;background:#282A36;input{padding:0 2rem;height:4rem;border:0;border-radius:0.6rem;margin-right:4rem;font-weight:bold;::placeholder{font-weight:bold;color:#424558;}}\"]);\nvar Box = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Box\",\n  componentId: \"sc-9t8j3s-7\"\n})([\"position:absolute;left:0;right:0;bottom:0;background:#F8F8F2;width:6rem;height:6rem;margin:0 auto -3rem auto;transform:rotate(45deg);\"]);\nvar Line = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Line\",\n  componentId: \"sc-9t8j3s-8\"\n})([\"width:40rem;height:0.1rem;background:#BD93F9;margin-top:2rem;\"]);\nvar SectionCards = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__SectionCards\",\n  componentId: \"sc-9t8j3s-9\"\n})([\"display:flex;flex-wrap:wrap;gap:5rem;margin-top:10rem;width:100%;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUvc3R5bGVzLmpzPzRmMmYiXSwibmFtZXMiOlsiU3R5bGVkTWFpbiIsInN0eWxlZCIsImgxIiwiVGV4dCIsInByb3BzIiwicGVyc29uIiwiY3NzIiwiRGVzY3JpcHRpb24iLCJwIiwic2hvd0Rlc2NyaXRpb24iLCJTdHlsZWRCdXR0b24iLCJidXR0b24iLCJhYm91dCIsInNlYXJjaCIsIlN0eWxlZEFycm93RG93biIsImRpdiIsIlN0eWxlZFByb2ZpbGVzIiwiSW5wdXRTZWFyY2giLCJCb3giLCJMaW5lIiwiU2VjdGlvbkNhcmRzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdPLElBQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsRUFBVjtBQUFBO0FBQUE7QUFBQSwySUFBaEI7QUFnQkEsSUFBTUMsSUFBSSxHQUFHRix5REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLHVGQU1iLFVBQUFFLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLE1BQU4sSUFBZ0JDLDZEQUFoQixtREFBSjtBQUFBLENBTlEsQ0FBVjtBQWVBLElBQU1DLFdBQVcsR0FBR04seURBQU0sQ0FBQ08sQ0FBVjtBQUFBO0FBQUE7QUFBQSxpTEFjcEIsVUFBQUosS0FBSztBQUFBLFNBQUksQ0FBQ0EsS0FBSyxDQUFDSyxjQUFQLElBQXlCSCw2REFBekIsd0RBQUo7QUFBQSxDQWRlLENBQWpCO0FBeUJBLElBQU1JLFlBQVksR0FBR1QseURBQU0sQ0FBQ1UsTUFBVjtBQUFBO0FBQUE7QUFBQSw0RkFLckIsVUFBQVAsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ1EsS0FBTixJQUFlTiw2REFBZix3TEFBSjtBQUFBLENBTGdCLEVBNkJyQixVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDUyxNQUFOLElBQWdCUCw2REFBaEIseUxBQUo7QUFBQSxDQTdCZ0IsQ0FBbEI7QUFxREEsSUFBTVEsZUFBZSxHQUFHYix5REFBTSxDQUFDYyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFEQUFyQjtBQVNBLElBQU1DLGNBQWMsR0FBR2YseURBQU0sQ0FBQ2MsR0FBVjtBQUFBO0FBQUE7QUFBQSxnR0FBcEI7QUFhQSxJQUFNRSxXQUFXLEdBQUdoQix5REFBTSxDQUFDYyxHQUFWO0FBQUE7QUFBQTtBQUFBLG1PQUFqQjtBQTJCQSxJQUFNRyxHQUFHLEdBQUdqQix5REFBTSxDQUFDYyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZJQUFUO0FBZ0JBLElBQU1JLElBQUksR0FBR2xCLHlEQUFNLENBQUNjLEdBQVY7QUFBQTtBQUFBO0FBQUEscUVBQVY7QUFRQSxJQUFNSyxZQUFZLEdBQUduQix5REFBTSxDQUFDYyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlFQUFsQiIsImZpbGUiOiIuL3NyYy9wYWdlcy9ob21lL3N0eWxlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRNYWluID0gc3R5bGVkLmgxYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI0Y4RjhGMjtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOHJlbSk7XG5cbiAgaW1ne1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIFxuYDtcblxuXG5leHBvcnQgY29uc3QgVGV4dCA9IHN0eWxlZC5oMWBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IG1pbig4cmVtLCAxMHZ3KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMjgyQTM2OyAgXG5cbiAgJHtwcm9wcyA9PiBwcm9wcy5wZXJzb24gJiYgY3NzYFxuXG4gICAgY29sb3I6ICNGOEY4RjI7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAycmVtIDA7XG4gIG1heC1oZWlnaHQ6IDIwMDBweDtcbiAgZm9udC1zaXplOiBtaW4oMnJlbSwgMTB2dyk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMjgyQTM2OyAgXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7IFxuXG5cblxuXG4gICR7cHJvcHMgPT4gIXByb3BzLnNob3dEZXNjcml0aW9uICYmIGNzc2BcbiAgIG9wYWNpdHk6IDA7XG4gICBtYXgtaGVpZ2h0OiAwO1xuICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgbWFyZ2luOjA7XG5cbiAgICBcbiAgYH1cblxuXG5gO1xuZXhwb3J0IGNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4ycyBlYXNlO1xuXG4gICR7cHJvcHMgPT4gcHJvcHMuYWJvdXQgJiYgY3NzYFxuXG4gICAgcGFkZGluZzogMC44cmVtIDVyZW07XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI0Y4RjhGMjtcbiAgICBiYWNrZ3JvdW5kOiAjNDQ0NzVBO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0bztcblxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7IFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHJlbTtcblxuICAgIH1cblxuICBgfVxuXG4gICY6aG92ZXJ7XG4gIGJhY2tncm91bmQ6ICMyOTJBMzY7XG5cbiAgfVxuXG4gICR7cHJvcHMgPT4gcHJvcHMuc2VhcmNoICYmIGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjZyZW07XG4gICAgYmFja2dyb3VuZDogI0JEOTNGOTtcbiAgICBwYWRkaW5nOiAwIDNyZW07XG5cblxuICAgICY6aG92ZXJ7XG4gICAgICBiYWNrZ3JvdW5kOiAjNDQ0NzVBO1xuICAgIH1cblxuICAgIHN2Z3tcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG4gICAgXG4gIGB9XG5cbmA7XG5cblxuZXhwb3J0IGNvbnN0IFN0eWxlZEFycm93RG93biA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogNHJlbTtcblxuIFxuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFByb2ZpbGVzID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogIzI4MkEzNjtcbiAgcGFkZGluZzogNnJlbSAwO1xuXG4gIGRpdntcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG5cblxuIFxuYDtcbmV4cG9ydCBjb25zdCBJbnB1dFNlYXJjaCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMjgyQTM2O1xuXG4gIGlucHV0e1xuICAgIHBhZGRpbmc6IDAgMnJlbTsgXG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjZyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG5cbiAgICA6OnBsYWNlaG9sZGVye1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogIzQyNDU1ODtcbiAgICB9XG5cblxuICB9XG5cbiBcbmA7XG5cblxuZXhwb3J0IGNvbnN0IEJveCA9IHN0eWxlZC5kaXZgXG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiB0b3A6IDA7ICovXG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICNGOEY4RjI7XG4gIHdpZHRoOiA2cmVtO1xuICBoZWlnaHQ6IDZyZW07XG5cbiAgbWFyZ2luOiAwIGF1dG8gLTNyZW0gYXV0bztcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuYDtcblxuXG5leHBvcnQgY29uc3QgTGluZSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA0MHJlbTtcbiAgaGVpZ2h0OiAwLjFyZW07IFxuICBiYWNrZ3JvdW5kOiAjQkQ5M0Y5O1xuICBtYXJnaW4tdG9wOiAycmVtO1xuYDtcblxuXG5leHBvcnQgY29uc3QgU2VjdGlvbkNhcmRzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gIGdhcDogNXJlbTtcblxuICBtYXJnaW4tdG9wOiAxMHJlbTtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/home/styles.js\n");

/***/ })

})