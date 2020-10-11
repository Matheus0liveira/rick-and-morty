webpackHotUpdate_N_E("pages/home",{

/***/ "./src/pages/home/styles.js":
/*!**********************************!*\
  !*** ./src/pages/home/styles.js ***!
  \**********************************/
/*! exports provided: StyledMain, Text, Description, StyledButton, StyledArrowDown, StyledProfiles, InputSearch, Box, Line */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledMain\", function() { return StyledMain; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledButton\", function() { return StyledButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledArrowDown\", function() { return StyledArrowDown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledProfiles\", function() { return StyledProfiles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InputSearch\", function() { return InputSearch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Box\", function() { return Box; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Line\", function() { return Line; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar StyledMain = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"styles__StyledMain\",\n  componentId: \"sc-9t8j3s-0\"\n})([\"display:flex;align-items:center;justify-content:center;background:#F8F8F2;height:calc(100vh - 8rem);img{width:10rem;margin:0 auto;}\"]);\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"styles__Text\",\n  componentId: \"sc-9t8j3s-1\"\n})([\"text-align:center;font-size:min(8rem,10vw);font-weight:bold;color:#282A36;\", \"\"], function (props) {\n  return props.person && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"color:#F8F8F2;font-size:4rem;text-align:left;\"]);\n});\nvar Description = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"styles__Description\",\n  componentId: \"sc-9t8j3s-2\"\n})([\"text-align:justify;font-weight:lighter;margin:2rem 0;max-height:2000px;font-size:min(2rem,10vw);line-height:1.5;color:#282A36;visibility:visible;transition:all .5s;\", \"\"], function (props) {\n  return !props.showDescrition && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"opacity:0;max-height:0;visibility:hidden;margin:0;\"]);\n});\nvar StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n  displayName: \"styles__StyledButton\",\n  componentId: \"sc-9t8j3s-3\"\n})([\"padding:0.8rem 5rem;border:0;border-radius:0.6rem;font-weight:bold;color:#F8F8F2;background:#44475A;text-align:center;margin:0 auto;cursor:pointer;transition:background .2s ease;&:hover{background:#292A36;}\", \"\"], function (props) {\n  return props.search && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"display:flex;align-items:center;justify-content:center;height:4rem;border:0;border-radius:0.6rem;background:#BD93F9;padding:0 3rem;&:hover{background:#44475A;}svg{font-size:1rem;}\"]);\n});\nvar StyledArrowDown = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__StyledArrowDown\",\n  componentId: \"sc-9t8j3s-4\"\n})([\"position:absolute;left:0;right:0;bottom:4rem;\"]);\nvar StyledProfiles = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__StyledProfiles\",\n  componentId: \"sc-9t8j3s-5\"\n})([\"background:#282A36;padding:6rem 0;div{flex-direction:row;justify-content:space-between;}\"]);\nvar InputSearch = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__InputSearch\",\n  componentId: \"sc-9t8j3s-6\"\n})([\"display:flex;align-items:center;justify-content:center;background:#282A36;input{padding:0 2rem;height:4rem;border:0;border-radius:0.6rem;margin-right:4rem;font-weight:bold;::placeholder{font-weight:bold;color:#424558;}}\"]);\nvar Box = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Box\",\n  componentId: \"sc-9t8j3s-7\"\n})([\"position:absolute;left:0;right:0;bottom:0;background:#F8F8F2;width:6rem;height:6rem;margin:0 auto -3rem auto;transform:rotate(45deg);\"]);\nvar Line = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Line\",\n  componentId: \"sc-9t8j3s-8\"\n})([\"width:40rem;height:0.1rem;background:#BD93F9;margin-top:2rem;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUvc3R5bGVzLmpzPzRmMmYiXSwibmFtZXMiOlsiU3R5bGVkTWFpbiIsInN0eWxlZCIsImgxIiwiVGV4dCIsInByb3BzIiwicGVyc29uIiwiY3NzIiwiRGVzY3JpcHRpb24iLCJwIiwic2hvd0Rlc2NyaXRpb24iLCJTdHlsZWRCdXR0b24iLCJidXR0b24iLCJzZWFyY2giLCJTdHlsZWRBcnJvd0Rvd24iLCJkaXYiLCJTdHlsZWRQcm9maWxlcyIsIklucHV0U2VhcmNoIiwiQm94IiwiTGluZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR08sSUFBTUEsVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLDJJQUFoQjtBQWdCQSxJQUFNQyxJQUFJLEdBQUdGLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEsdUZBTWIsVUFBQUUsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsTUFBTixJQUFnQkMsNkRBQWhCLG1EQUFKO0FBQUEsQ0FOUSxDQUFWO0FBZUEsSUFBTUMsV0FBVyxHQUFHTix5REFBTSxDQUFDTyxDQUFWO0FBQUE7QUFBQTtBQUFBLGlMQWNwQixVQUFBSixLQUFLO0FBQUEsU0FBSSxDQUFDQSxLQUFLLENBQUNLLGNBQVAsSUFBeUJILDZEQUF6Qix3REFBSjtBQUFBLENBZGUsQ0FBakI7QUF5QkEsSUFBTUksWUFBWSxHQUFHVCx5REFBTSxDQUFDVSxNQUFWO0FBQUE7QUFBQTtBQUFBLDJOQWtCckIsVUFBQVAsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ1EsTUFBTixJQUFnQk4sNkRBQWhCLHlMQUFKO0FBQUEsQ0FsQmdCLENBQWxCO0FBMENBLElBQU1PLGVBQWUsR0FBR1oseURBQU0sQ0FBQ2EsR0FBVjtBQUFBO0FBQUE7QUFBQSxxREFBckI7QUFTQSxJQUFNQyxjQUFjLEdBQUdkLHlEQUFNLENBQUNhLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ0dBQXBCO0FBYUEsSUFBTUUsV0FBVyxHQUFHZix5REFBTSxDQUFDYSxHQUFWO0FBQUE7QUFBQTtBQUFBLG1PQUFqQjtBQTBCQSxJQUFNRyxHQUFHLEdBQUdoQix5REFBTSxDQUFDYSxHQUFWO0FBQUE7QUFBQTtBQUFBLDZJQUFUO0FBY0EsSUFBTUksSUFBSSxHQUFHakIseURBQU0sQ0FBQ2EsR0FBVjtBQUFBO0FBQUE7QUFBQSxxRUFBViIsImZpbGUiOiIuL3NyYy9wYWdlcy9ob21lL3N0eWxlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRNYWluID0gc3R5bGVkLmgxYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI0Y4RjhGMjtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOHJlbSk7XG5cbiAgaW1ne1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIFxuYDtcblxuXG5leHBvcnQgY29uc3QgVGV4dCA9IHN0eWxlZC5oMWBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IG1pbig4cmVtLCAxMHZ3KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMjgyQTM2OyAgXG5cbiAgJHtwcm9wcyA9PiBwcm9wcy5wZXJzb24gJiYgY3NzYFxuXG4gICAgY29sb3I6ICNGOEY4RjI7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAycmVtIDA7XG4gIG1heC1oZWlnaHQ6IDIwMDBweDtcbiAgZm9udC1zaXplOiBtaW4oMnJlbSwgMTB2dyk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMjgyQTM2OyAgXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7IFxuXG5cblxuXG4gICR7cHJvcHMgPT4gIXByb3BzLnNob3dEZXNjcml0aW9uICYmIGNzc2BcbiAgIG9wYWNpdHk6IDA7XG4gICBtYXgtaGVpZ2h0OiAwO1xuICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgbWFyZ2luOjA7XG5cbiAgICBcbiAgYH1cblxuXG5gO1xuZXhwb3J0IGNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIC8qIHdpZHRoOiAxMHJlbTsgKi9cbiAgcGFkZGluZzogMC44cmVtIDVyZW07XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNGOEY4RjI7XG4gIGJhY2tncm91bmQ6ICM0NDQ3NUE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMnMgZWFzZTtcblxuICAmOmhvdmVye1xuICBiYWNrZ3JvdW5kOiAjMjkyQTM2O1xuXG4gIH1cblxuICAke3Byb3BzID0+IHByb3BzLnNlYXJjaCAmJiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xuICAgIGJhY2tncm91bmQ6ICNCRDkzRjk7XG4gICAgcGFkZGluZzogMCAzcmVtO1xuXG5cbiAgICAmOmhvdmVye1xuICAgICAgYmFja2dyb3VuZDogIzQ0NDc1QTtcbiAgICB9XG5cbiAgICBzdmd7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICAgIFxuICBgfVxuXG5gO1xuXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRBcnJvd0Rvd24gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDRyZW07XG5cbiBcbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRQcm9maWxlcyA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICMyODJBMzY7XG4gIHBhZGRpbmc6IDZyZW0gMDtcblxuICBkaXZ7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuXG5cbiBcbmA7XG5leHBvcnQgY29uc3QgSW5wdXRTZWFyY2ggPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzI4MkEzNjtcblxuICBpbnB1dHtcbiAgICBwYWRkaW5nOiAwIDJyZW07IFxuICAgIGhlaWdodDogNHJlbTtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xuICAgIG1hcmdpbi1yaWdodDogNHJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuXG4gICAgOjpwbGFjZWhvbGRlcntcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICM0MjQ1NTg7XG4gICAgfVxuXG5cbiAgfVxuXG4gXG5gO1xuXG5leHBvcnQgY29uc3QgQm94ID0gc3R5bGVkLmRpdmBcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIHRvcDogMDsgKi9cbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogI0Y4RjhGMjtcbiAgd2lkdGg6IDZyZW07XG4gIGhlaWdodDogNnJlbTtcblxuICBtYXJnaW46IDAgYXV0byAtM3JlbSBhdXRvO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG5gO1xuZXhwb3J0IGNvbnN0IExpbmUgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNDByZW07XG4gIGhlaWdodDogMC4xcmVtOyBcbiAgYmFja2dyb3VuZDogI0JEOTNGOTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/home/styles.js\n");

/***/ })

})