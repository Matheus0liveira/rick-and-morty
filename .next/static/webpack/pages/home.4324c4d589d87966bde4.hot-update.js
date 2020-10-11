webpackHotUpdate_N_E("pages/home",{

/***/ "./src/pages/home/styles.js":
/*!**********************************!*\
  !*** ./src/pages/home/styles.js ***!
  \**********************************/
/*! exports provided: StyledMain, Text, Description, StyledButton, StyledArrowDown, StyledProfiles, InputSearch, Box, Line, SectionCards, CountPages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledMain\", function() { return StyledMain; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledButton\", function() { return StyledButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledArrowDown\", function() { return StyledArrowDown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledProfiles\", function() { return StyledProfiles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InputSearch\", function() { return InputSearch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Box\", function() { return Box; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Line\", function() { return Line; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SectionCards\", function() { return SectionCards; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountPages\", function() { return CountPages; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar StyledMain = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"styles__StyledMain\",\n  componentId: \"sc-9t8j3s-0\"\n})([\"display:flex;align-items:center;justify-content:center;background:#F8F8F2;height:calc(100vh - 8rem);img{width:10rem;margin:0 auto;}\"]);\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"styles__Text\",\n  componentId: \"sc-9t8j3s-1\"\n})([\"text-align:center;font-size:min(8rem,10vw);font-weight:bold;color:#282A36;\", \" \", \"\"], function (props) {\n  return props.person && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"color:#F8F8F2;font-size:min(4rem,10vw);text-align:left;@media (max-width:840px){text-align:center;}\"]);\n}, function (props) {\n  return props.count && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"color:#BD93F9;font-size:1.8rem;margin:2rem;\"]);\n});\nvar Description = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"styles__Description\",\n  componentId: \"sc-9t8j3s-2\"\n})([\"text-align:justify;font-weight:lighter;margin:2rem 0;max-height:2000px;font-size:min(2rem,10vw);line-height:1.5;color:#282A36;visibility:visible;transition:all .5s;\", \"\"], function (props) {\n  return !props.showDescrition && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"opacity:0;max-height:0;visibility:hidden;margin:0;\"]);\n});\nvar StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n  displayName: \"styles__StyledButton\",\n  componentId: \"sc-9t8j3s-3\"\n})([\"cursor:pointer;transition:background .2s ease;\", \" &:hover{background:#292A36;}\", \" \", \"\"], function (props) {\n  return props.about && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"padding:0.8rem 5rem;border:0;border-radius:0.6rem;font-weight:bold;color:#F8F8F2;background:#44475A;text-align:center;margin:0 auto;@media (max-width:400px){margin-bottom:20rem;}\"]);\n}, function (props) {\n  return props.search && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"display:flex;align-items:center;justify-content:center;height:4rem;border:0;border-radius:0.6rem;background:#BD93F9;padding:0 3rem;&:hover{background:#44475A;}svg{font-size:2rem;}@media (max-width:840px){margin-top:2rem;width:100%;}\"]);\n}, function (props) {\n  return props.countPage && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"display:flex;align-items:center;justify-content:center;font-size:2rem;padding:1rem;border:0;border-radius:0.8rem;background:#282A36;box-shadow:0px 0px 30px -10px rgba(0,0,0,1);color:#F8F8F2;font-weight:bold;svg{font-size:2rem;margin:0 1rem;}&:hover{background:#BD93F9;color:#282A36;}\"]);\n});\nvar StyledArrowDown = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__StyledArrowDown\",\n  componentId: \"sc-9t8j3s-4\"\n})([\"position:absolute;left:0;right:0;bottom:0rem;z-index:2;\"]);\nvar StyledProfiles = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__StyledProfiles\",\n  componentId: \"sc-9t8j3s-5\"\n})([\"background:#282A36;padding:6rem 0;div{flex-direction:row;justify-content:space-between;@media (max-width:840px){flex-direction:column;}}\"]);\nvar InputSearch = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__InputSearch\",\n  componentId: \"sc-9t8j3s-6\"\n})([\"width:45%;display:flex;align-items:center;justify-content:center;background:#282A36;input{width:100%;padding:0 2rem;height:4rem;border:0;border-radius:0.6rem;margin-right:4rem;font-weight:bold;::placeholder{font-weight:bold;color:#424558;}@media (max-width:840px){margin-right:0;width:100%;margin-top:2rem;}}@media (max-width:840px){width:100%;}\"]);\nvar Box = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Box\",\n  componentId: \"sc-9t8j3s-7\"\n})([\"position:absolute;left:0;right:0;bottom:0;background:#F8F8F2;width:6rem;height:6rem;margin:0 auto -3rem auto;transform:rotate(45deg);\"]);\nvar Line = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Line\",\n  componentId: \"sc-9t8j3s-8\"\n})([\"width:40rem;height:0.1rem;background:#BD93F9;margin-top:2rem;@media (max-width:840px){margin:2rem auto;width:100%;}\"]);\nvar SectionCards = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__SectionCards\",\n  componentId: \"sc-9t8j3s-9\"\n})([\"display:flex;flex-wrap:wrap;gap:5rem;margin-top:10rem;width:100%;\"]);\nvar CountPages = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__CountPages\",\n  componentId: \"sc-9t8j3s-10\"\n})([\"display:flex;align-items:center;justify-content:center;margin:4rem auto;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUvc3R5bGVzLmpzPzRmMmYiXSwibmFtZXMiOlsiU3R5bGVkTWFpbiIsInN0eWxlZCIsImgxIiwiVGV4dCIsInByb3BzIiwicGVyc29uIiwiY3NzIiwiY291bnQiLCJEZXNjcmlwdGlvbiIsInAiLCJzaG93RGVzY3JpdGlvbiIsIlN0eWxlZEJ1dHRvbiIsImJ1dHRvbiIsImFib3V0Iiwic2VhcmNoIiwiY291bnRQYWdlIiwiU3R5bGVkQXJyb3dEb3duIiwiZGl2IiwiU3R5bGVkUHJvZmlsZXMiLCJJbnB1dFNlYXJjaCIsIkJveCIsIkxpbmUiLCJTZWN0aW9uQ2FyZHMiLCJDb3VudFBhZ2VzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR08sSUFBTUEsVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLDJJQUFoQjtBQWdCQSxJQUFNQyxJQUFJLEdBQUdGLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEsNEZBTWIsVUFBQUUsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsTUFBTixJQUFnQkMsNkRBQWhCLHlHQUFKO0FBQUEsQ0FOUSxFQW1CYixVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRyxLQUFOLElBQWVELDZEQUFmLGlEQUFKO0FBQUEsQ0FuQlEsQ0FBVjtBQTZCQSxJQUFNRSxXQUFXLEdBQUdQLHlEQUFNLENBQUNRLENBQVY7QUFBQTtBQUFBO0FBQUEsaUxBY3BCLFVBQUFMLEtBQUs7QUFBQSxTQUFJLENBQUNBLEtBQUssQ0FBQ00sY0FBUCxJQUF5QkosNkRBQXpCLHdEQUFKO0FBQUEsQ0FkZSxDQUFqQjtBQXlCQSxJQUFNSyxZQUFZLEdBQUdWLHlEQUFNLENBQUNXLE1BQVY7QUFBQTtBQUFBO0FBQUEsaUdBS3JCLFVBQUFSLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNTLEtBQU4sSUFBZVAsNkRBQWYsd0xBQUo7QUFBQSxDQUxnQixFQTZCckIsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ1UsTUFBTixJQUFnQlIsNkRBQWhCLDhPQUFKO0FBQUEsQ0E3QmdCLEVBc0RyQixVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDVyxTQUFOLElBQW1CVCw2REFBbkIsaVNBQUo7QUFBQSxDQXREZ0IsQ0FBbEI7QUFxRkEsSUFBTVUsZUFBZSxHQUFHZix5REFBTSxDQUFDZ0IsR0FBVjtBQUFBO0FBQUE7QUFBQSwrREFBckI7QUFVQSxJQUFNQyxjQUFjLEdBQUdqQix5REFBTSxDQUFDZ0IsR0FBVjtBQUFBO0FBQUE7QUFBQSxnSkFBcEI7QUFrQkEsSUFBTUUsV0FBVyxHQUFHbEIseURBQU0sQ0FBQ2dCLEdBQVY7QUFBQTtBQUFBO0FBQUEsaVdBQWpCO0FBeUNBLElBQU1HLEdBQUcsR0FBR25CLHlEQUFNLENBQUNnQixHQUFWO0FBQUE7QUFBQTtBQUFBLDZJQUFUO0FBZ0JBLElBQU1JLElBQUksR0FBR3BCLHlEQUFNLENBQUNnQixHQUFWO0FBQUE7QUFBQTtBQUFBLDJIQUFWO0FBZUEsSUFBTUssWUFBWSxHQUFHckIseURBQU0sQ0FBQ2dCLEdBQVY7QUFBQTtBQUFBO0FBQUEseUVBQWxCO0FBU0EsSUFBTU0sVUFBVSxHQUFHdEIseURBQU0sQ0FBQ2dCLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ0ZBQWhCIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2hvbWUvc3R5bGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cblxuZXhwb3J0IGNvbnN0IFN0eWxlZE1haW4gPSBzdHlsZWQuaDFgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjRjhGOEYyO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4cmVtKTtcblxuICBpbWd7XG4gICAgd2lkdGg6IDEwcmVtO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgXG5gO1xuXG5cbmV4cG9ydCBjb25zdCBUZXh0ID0gc3R5bGVkLmgxYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbWluKDhyZW0sIDEwdncpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyODJBMzY7ICBcblxuICAke3Byb3BzID0+IHByb3BzLnBlcnNvbiAmJiBjc3NgXG5cbiAgICBjb2xvcjogI0Y4RjhGMjtcbiAgZm9udC1zaXplOiBtaW4oNHJlbSwgMTB2dyk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcblxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KXtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgYH1cbiAgJHtwcm9wcyA9PiBwcm9wcy5jb3VudCAmJiBjc3NgXG5cbiAgICBjb2xvcjogI0JEOTNGOTtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBtYXJnaW46IDJyZW07XG4gIFxuXG4gIGB9XG5gO1xuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogMnJlbSAwO1xuICBtYXgtaGVpZ2h0OiAyMDAwcHg7XG4gIGZvbnQtc2l6ZTogbWluKDJyZW0sIDEwdncpO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzI4MkEzNjsgIFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzOyBcblxuXG5cblxuICAke3Byb3BzID0+ICFwcm9wcy5zaG93RGVzY3JpdGlvbiAmJiBjc3NgXG4gICBvcGFjaXR5OiAwO1xuICAgbWF4LWhlaWdodDogMDtcbiAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgIG1hcmdpbjowO1xuXG4gICAgXG4gIGB9XG5cblxuYDtcbmV4cG9ydCBjb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMnMgZWFzZTtcblxuICAke3Byb3BzID0+IHByb3BzLmFib3V0ICYmIGNzc2BcblxuICAgIHBhZGRpbmc6IDAuOHJlbSA1cmVtO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNGOEY4RjI7XG4gICAgYmFja2dyb3VuZDogIzQ0NDc1QTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkgeyBcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjByZW07XG5cbiAgICB9XG5cbiAgYH1cblxuICAmOmhvdmVye1xuICBiYWNrZ3JvdW5kOiAjMjkyQTM2O1xuXG4gIH1cblxuICAke3Byb3BzID0+IHByb3BzLnNlYXJjaCAmJiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xuICAgIGJhY2tncm91bmQ6ICNCRDkzRjk7XG4gICAgcGFkZGluZzogMCAzcmVtO1xuXG5cbiAgICAmOmhvdmVye1xuICAgICAgYmFja2dyb3VuZDogIzQ0NDc1QTtcbiAgICB9XG5cbiAgICBzdmd7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuXG4gICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCl7XG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgICBcbiAgYH1cbiAgJHtwcm9wcyA9PiBwcm9wcy5jb3VudFBhZ2UgJiYgY3NzYFxuICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xuICAgIGJhY2tncm91bmQ6ICMyODJBMzY7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzMHB4IC0xMHB4IHJnYmEoMCwwLDAsMSk7XG5cbiAgICBjb2xvcjogI0Y4RjhGMjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgXG4gICAgc3Zne1xuICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICBtYXJnaW46IDAgMXJlbTtcbiAgICB9XG5cblxuICAgICY6aG92ZXJ7XG5cbiAgICBiYWNrZ3JvdW5kOiAjQkQ5M0Y5O1xuICAgIGNvbG9yOiAjMjgyQTM2O1xuICAgIH1cbiAgYH1cblxuYDtcblxuXG5leHBvcnQgY29uc3QgU3R5bGVkQXJyb3dEb3duID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwcmVtO1xuICB6LWluZGV4OiAyO1xuXG4gXG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkUHJvZmlsZXMgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAjMjgyQTM2O1xuICBwYWRkaW5nOiA2cmVtIDA7XG5cbiAgZGl2e1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KXtcblxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICB9XG5cblxuXG4gXG5gO1xuZXhwb3J0IGNvbnN0IElucHV0U2VhcmNoID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDQ1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMyODJBMzY7XG5cbiAgaW5wdXR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCAycmVtOyBcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cblxuICAgIDo6cGxhY2Vob2xkZXJ7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiAjNDI0NTU4O1xuICAgIH1cblxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KXtcblxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIH1cblxuXG4gIH0gXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KXtcblxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gXG5gO1xuXG5cbmV4cG9ydCBjb25zdCBCb3ggPSBzdHlsZWQuZGl2YFxuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogdG9wOiAwOyAqL1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjRjhGOEYyO1xuICB3aWR0aDogNnJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xuXG4gIG1hcmdpbjogMCBhdXRvIC0zcmVtIGF1dG87XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbmA7XG5cblxuZXhwb3J0IGNvbnN0IExpbmUgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNDByZW07XG4gIGhlaWdodDogMC4xcmVtOyBcbiAgYmFja2dyb3VuZDogI0JEOTNGOTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcblxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCl7XG4gICAgICBcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuXG5leHBvcnQgY29uc3QgU2VjdGlvbkNhcmRzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gIGdhcDogNXJlbTtcblxuICBtYXJnaW4tdG9wOiAxMHJlbTtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuZXhwb3J0IGNvbnN0IENvdW50UGFnZXMgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDRyZW0gYXV0bztcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/home/styles.js\n");

/***/ })

})