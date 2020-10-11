webpackHotUpdate_N_E("pages/home",{

/***/ "./src/pages/home/styles.js":
/*!**********************************!*\
  !*** ./src/pages/home/styles.js ***!
  \**********************************/
/*! exports provided: StyledMain, Text, Description, StyledButton, StyledArrowDown, StyledProfiles, InputSearch, Box, Line, SectionCards, CountPages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledMain\", function() { return StyledMain; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledButton\", function() { return StyledButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledArrowDown\", function() { return StyledArrowDown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledProfiles\", function() { return StyledProfiles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InputSearch\", function() { return InputSearch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Box\", function() { return Box; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Line\", function() { return Line; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SectionCards\", function() { return SectionCards; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountPages\", function() { return CountPages; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar StyledMain = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"styles__StyledMain\",\n  componentId: \"sc-9t8j3s-0\"\n})([\"display:flex;align-items:center;justify-content:center;background:#F8F8F2;height:calc(100vh - 8rem);img{width:10rem;margin:0 auto;}\"]);\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"styles__Text\",\n  componentId: \"sc-9t8j3s-1\"\n})([\"text-align:center;font-size:min(8rem,10vw);font-weight:bold;color:#282A36;\", \" \", \" \", \"\"], function (props) {\n  return props.person && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"color:#F8F8F2;font-size:min(4rem,10vw);text-align:left;@media (max-width:840px){text-align:center;}\"]);\n}, function (props) {\n  return props.count && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"color:#BD93F9;font-size:1.8rem;margin:2rem;\"]);\n}, function (props) {\n  return props.footer && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"display:flex;align-items:center;justify-content:center;color:#F8F8F2;font-size:1.6rem;padding:4rem 0 2rem 0;a,span{display:flex;align-items:center;justify-content:center;text-decoration:none;color:#BD93F9;&:hover{opacity:0.5;}}span{margin-left:0.5rem;}\"]);\n});\nvar Description = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"styles__Description\",\n  componentId: \"sc-9t8j3s-2\"\n})([\"text-align:justify;font-weight:lighter;margin:2rem 0;max-height:2000px;font-size:min(2rem,10vw);line-height:1.5;color:#282A36;visibility:visible;transition:all .5s;\", \"\"], function (props) {\n  return !props.showDescrition && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"opacity:0;max-height:0;visibility:hidden;margin:0;\"]);\n});\nvar StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n  displayName: \"styles__StyledButton\",\n  componentId: \"sc-9t8j3s-3\"\n})([\"cursor:pointer;transition:background .2s ease;\", \" &:hover{background:#292A36;}\", \" \", \"\"], function (props) {\n  return props.about && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"padding:0.8rem 5rem;border:0;border-radius:0.6rem;font-weight:bold;color:#F8F8F2;background:#44475A;text-align:center;margin:0 auto;@media (max-width:400px){margin-bottom:20rem;}\"]);\n}, function (props) {\n  return props.search && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"display:flex;align-items:center;justify-content:center;height:4rem;border:0;border-radius:0.6rem;background:#BD93F9;padding:0 3rem;&:hover{background:#44475A;}svg{font-size:2rem;}@media (max-width:840px){margin-top:2rem;width:100%;}\"]);\n}, function (props) {\n  return props.countPage && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"display:flex;align-items:center;justify-content:center;font-size:2rem;padding:1rem;border:0;border-radius:0.8rem;background:#282A36;box-shadow:0px 0px 30px -10px rgba(0,0,0,1);color:#F8F8F2;font-weight:bold;svg{font-size:2rem;margin:0 1rem;}&:hover{background:#BD93F9;color:#282A36;}\"]);\n});\nvar StyledArrowDown = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__StyledArrowDown\",\n  componentId: \"sc-9t8j3s-4\"\n})([\"position:absolute;left:0;right:0;bottom:1rem;z-index:2;\"]);\nvar StyledProfiles = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__StyledProfiles\",\n  componentId: \"sc-9t8j3s-5\"\n})([\"background:#282A36;padding:6rem 0 0 0;div{flex-direction:row;justify-content:space-between;@media (max-width:840px){flex-direction:column;}}\"]);\nvar InputSearch = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__InputSearch\",\n  componentId: \"sc-9t8j3s-6\"\n})([\"width:45%;display:flex;align-items:center;justify-content:center;background:#282A36;input{width:100%;padding:0 2rem;height:4rem;border:0;border-radius:0.6rem;margin-right:4rem;font-weight:bold;::placeholder{font-weight:bold;color:#424558;}@media (max-width:840px){margin-right:0;width:100%;margin-top:2rem;}}@media (max-width:840px){width:100%;}\"]);\nvar Box = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Box\",\n  componentId: \"sc-9t8j3s-7\"\n})([\"position:absolute;left:0;right:0;bottom:0;background:#F8F8F2;width:6rem;height:6rem;margin:0 auto -3rem auto;transform:rotate(45deg);\"]);\nvar Line = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Line\",\n  componentId: \"sc-9t8j3s-8\"\n})([\"width:40rem;height:0.1rem;background:#BD93F9;margin-top:2rem;@media (max-width:840px){margin:2rem auto;width:100%;}\"]);\nvar SectionCards = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__SectionCards\",\n  componentId: \"sc-9t8j3s-9\"\n})([\"display:flex;flex-wrap:wrap;gap:5rem;margin-top:10rem;width:100%;\"]);\nvar CountPages = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__CountPages\",\n  componentId: \"sc-9t8j3s-10\"\n})([\"display:flex;align-items:center;justify-content:center;margin:4rem auto;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUvc3R5bGVzLmpzPzRmMmYiXSwibmFtZXMiOlsiU3R5bGVkTWFpbiIsInN0eWxlZCIsImgxIiwiVGV4dCIsInByb3BzIiwicGVyc29uIiwiY3NzIiwiY291bnQiLCJmb290ZXIiLCJEZXNjcmlwdGlvbiIsInAiLCJzaG93RGVzY3JpdGlvbiIsIlN0eWxlZEJ1dHRvbiIsImJ1dHRvbiIsImFib3V0Iiwic2VhcmNoIiwiY291bnRQYWdlIiwiU3R5bGVkQXJyb3dEb3duIiwiZGl2IiwiU3R5bGVkUHJvZmlsZXMiLCJJbnB1dFNlYXJjaCIsIkJveCIsIkxpbmUiLCJTZWN0aW9uQ2FyZHMiLCJDb3VudFBhZ2VzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR08sSUFBTUEsVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLDJJQUFoQjtBQWdCQSxJQUFNQyxJQUFJLEdBQUdGLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEsaUdBTWIsVUFBQUUsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsTUFBTixJQUFnQkMsNkRBQWhCLHlHQUFKO0FBQUEsQ0FOUSxFQW1CYixVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRyxLQUFOLElBQWVELDZEQUFmLGlEQUFKO0FBQUEsQ0FuQlEsRUEyQmIsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0ksTUFBTixJQUFnQkYsNkRBQWhCLGtRQUFKO0FBQUEsQ0EzQlEsQ0FBVjtBQTZEQSxJQUFNRyxXQUFXLEdBQUdSLHlEQUFNLENBQUNTLENBQVY7QUFBQTtBQUFBO0FBQUEsaUxBY3BCLFVBQUFOLEtBQUs7QUFBQSxTQUFJLENBQUNBLEtBQUssQ0FBQ08sY0FBUCxJQUF5QkwsNkRBQXpCLHdEQUFKO0FBQUEsQ0FkZSxDQUFqQjtBQXlCQSxJQUFNTSxZQUFZLEdBQUdYLHlEQUFNLENBQUNZLE1BQVY7QUFBQTtBQUFBO0FBQUEsaUdBS3JCLFVBQUFULEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNVLEtBQU4sSUFBZVIsNkRBQWYsd0xBQUo7QUFBQSxDQUxnQixFQTZCckIsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ1csTUFBTixJQUFnQlQsNkRBQWhCLDhPQUFKO0FBQUEsQ0E3QmdCLEVBc0RyQixVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDWSxTQUFOLElBQW1CViw2REFBbkIsaVNBQUo7QUFBQSxDQXREZ0IsQ0FBbEI7QUFxRkEsSUFBTVcsZUFBZSxHQUFHaEIseURBQU0sQ0FBQ2lCLEdBQVY7QUFBQTtBQUFBO0FBQUEsK0RBQXJCO0FBVUEsSUFBTUMsY0FBYyxHQUFHbEIseURBQU0sQ0FBQ2lCLEdBQVY7QUFBQTtBQUFBO0FBQUEsb0pBQXBCO0FBa0JBLElBQU1FLFdBQVcsR0FBR25CLHlEQUFNLENBQUNpQixHQUFWO0FBQUE7QUFBQTtBQUFBLGlXQUFqQjtBQXlDQSxJQUFNRyxHQUFHLEdBQUdwQix5REFBTSxDQUFDaUIsR0FBVjtBQUFBO0FBQUE7QUFBQSw2SUFBVDtBQWdCQSxJQUFNSSxJQUFJLEdBQUdyQix5REFBTSxDQUFDaUIsR0FBVjtBQUFBO0FBQUE7QUFBQSwySEFBVjtBQWVBLElBQU1LLFlBQVksR0FBR3RCLHlEQUFNLENBQUNpQixHQUFWO0FBQUE7QUFBQTtBQUFBLHlFQUFsQjtBQVNBLElBQU1NLFVBQVUsR0FBR3ZCLHlEQUFNLENBQUNpQixHQUFWO0FBQUE7QUFBQTtBQUFBLGdGQUFoQiIsImZpbGUiOiIuL3NyYy9wYWdlcy9ob21lL3N0eWxlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRNYWluID0gc3R5bGVkLmgxYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI0Y4RjhGMjtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOHJlbSk7XG5cbiAgaW1ne1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIFxuYDtcblxuXG5leHBvcnQgY29uc3QgVGV4dCA9IHN0eWxlZC5oMWBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IG1pbig4cmVtLCAxMHZ3KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMjgyQTM2OyAgXG5cbiAgJHtwcm9wcyA9PiBwcm9wcy5wZXJzb24gJiYgY3NzYFxuXG4gICAgY29sb3I6ICNGOEY4RjI7XG4gIGZvbnQtc2l6ZTogbWluKDRyZW0sIDEwdncpO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCl7XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gIGB9XG4gICR7cHJvcHMgPT4gcHJvcHMuY291bnQgJiYgY3NzYFxuXG4gICAgY29sb3I6ICNCRDkzRjk7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgbWFyZ2luOiAycmVtO1xuICBcblxuICBgfVxuICAke3Byb3BzID0+IHByb3BzLmZvb3RlciAmJiBjc3NgXG4gIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgXG4gICAgXG4gICAgY29sb3I6ICNGOEY4RjI7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgcGFkZGluZzogNHJlbSAwIDJyZW0gMDtcblxuICBcbiAgICBhLHNwYW57XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICNCRDkzRjk7XG5cblxuICAgICAgJjpob3ZlcntcbiAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgIH1cbiAgICB9XG4gICAgc3BhbntcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgfVxuXG5cbiAgXG5cbiAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiAycmVtIDA7XG4gIG1heC1oZWlnaHQ6IDIwMDBweDtcbiAgZm9udC1zaXplOiBtaW4oMnJlbSwgMTB2dyk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMjgyQTM2OyAgXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7IFxuXG5cblxuXG4gICR7cHJvcHMgPT4gIXByb3BzLnNob3dEZXNjcml0aW9uICYmIGNzc2BcbiAgIG9wYWNpdHk6IDA7XG4gICBtYXgtaGVpZ2h0OiAwO1xuICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgbWFyZ2luOjA7XG5cbiAgICBcbiAgYH1cblxuXG5gO1xuZXhwb3J0IGNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4ycyBlYXNlO1xuXG4gICR7cHJvcHMgPT4gcHJvcHMuYWJvdXQgJiYgY3NzYFxuXG4gICAgcGFkZGluZzogMC44cmVtIDVyZW07XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI0Y4RjhGMjtcbiAgICBiYWNrZ3JvdW5kOiAjNDQ0NzVBO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0bztcblxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7IFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHJlbTtcblxuICAgIH1cblxuICBgfVxuXG4gICY6aG92ZXJ7XG4gIGJhY2tncm91bmQ6ICMyOTJBMzY7XG5cbiAgfVxuXG4gICR7cHJvcHMgPT4gcHJvcHMuc2VhcmNoICYmIGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjZyZW07XG4gICAgYmFja2dyb3VuZDogI0JEOTNGOTtcbiAgICBwYWRkaW5nOiAwIDNyZW07XG5cblxuICAgICY6aG92ZXJ7XG4gICAgICBiYWNrZ3JvdW5kOiAjNDQ0NzVBO1xuICAgIH1cblxuICAgIHN2Z3tcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG5cbiAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KXtcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAgIFxuICBgfVxuICAke3Byb3BzID0+IHByb3BzLmNvdW50UGFnZSAmJiBjc3NgXG4gICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XG4gICAgYmFja2dyb3VuZDogIzI4MkEzNjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDMwcHggLTEwcHggcmdiYSgwLDAsMCwxKTtcblxuICAgIGNvbG9yOiAjRjhGOEYyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBcbiAgICBzdmd7XG4gICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgIG1hcmdpbjogMCAxcmVtO1xuICAgIH1cblxuXG4gICAgJjpob3ZlcntcblxuICAgIGJhY2tncm91bmQ6ICNCRDkzRjk7XG4gICAgY29sb3I6ICMyODJBMzY7XG4gICAgfVxuICBgfVxuXG5gO1xuXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRBcnJvd0Rvd24gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDFyZW07XG4gIHotaW5kZXg6IDI7XG5cbiBcbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRQcm9maWxlcyA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICMyODJBMzY7XG4gIHBhZGRpbmc6IDZyZW0gMCAwIDA7XG5cbiAgZGl2e1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KXtcblxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICB9XG5cblxuXG4gXG5gO1xuZXhwb3J0IGNvbnN0IElucHV0U2VhcmNoID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDQ1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMyODJBMzY7XG5cbiAgaW5wdXR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCAycmVtOyBcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cblxuICAgIDo6cGxhY2Vob2xkZXJ7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiAjNDI0NTU4O1xuICAgIH1cblxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KXtcblxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIH1cblxuXG4gIH0gXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KXtcblxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gXG5gO1xuXG5cbmV4cG9ydCBjb25zdCBCb3ggPSBzdHlsZWQuZGl2YFxuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogdG9wOiAwOyAqL1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjRjhGOEYyO1xuICB3aWR0aDogNnJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xuXG4gIG1hcmdpbjogMCBhdXRvIC0zcmVtIGF1dG87XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbmA7XG5cblxuZXhwb3J0IGNvbnN0IExpbmUgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNDByZW07XG4gIGhlaWdodDogMC4xcmVtOyBcbiAgYmFja2dyb3VuZDogI0JEOTNGOTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcblxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCl7XG4gICAgICBcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuXG5leHBvcnQgY29uc3QgU2VjdGlvbkNhcmRzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gIGdhcDogNXJlbTtcblxuICBtYXJnaW4tdG9wOiAxMHJlbTtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuZXhwb3J0IGNvbnN0IENvdW50UGFnZXMgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDRyZW0gYXV0bztcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/home/styles.js\n");

/***/ })

})