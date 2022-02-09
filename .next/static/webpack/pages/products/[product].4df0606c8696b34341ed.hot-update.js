"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products/[product]",{

/***/ "./components/ProductCard.js":
/*!***********************************!*\
  !*** ./components/ProductCard.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/helpers */ \"./utils/helpers.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/alyssacabello/Documents/GitHub/black-harvest-candle-co/components/ProductCard.js\",\n    _this = undefined;\n\n\n\n\n\nvar ProductCard = function ProductCard(_ref) {\n  var product = _ref.product;\n  var _product$node = product.node,\n      handle = _product$node.handle,\n      title = _product$node.title;\n  var _product$node$images$ = product.node.images.edges[0].node,\n      altText = _product$node$images$.altText,\n      originalSrc = _product$node$images$.originalSrc;\n  var price = product.node.priceRange.minVariantPrice.amount;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n    href: \"/products/\".concat(handle),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n      className: \"group\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full bg-black rounded-3xl overflow-hidden\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"relative group-hover:opacity-75 h-72\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: originalSrc,\n            alt: altText,\n            layout: \"fill\",\n            objectFit: \"cover\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: \"/p_border_top.png\",\n        className: \"my-2\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        className: \"text-xl text-center font-bold\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"mt-1 text-lg\",\n        children: _utils_helpers__WEBPACK_IMPORTED_MODULE_3__.formatter.format(price)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = ProductCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQUEsc0JBQ1RBLE9BQU8sQ0FBQ0MsSUFEQztBQUFBLE1BQzNCQyxNQUQyQixpQkFDM0JBLE1BRDJCO0FBQUEsTUFDbkJDLEtBRG1CLGlCQUNuQkEsS0FEbUI7QUFBQSw4QkFHRkgsT0FBTyxDQUFDQyxJQUFSLENBQWFHLE1BQWIsQ0FBb0JDLEtBQXBCLENBQTBCLENBQTFCLEVBQTZCSixJQUgzQjtBQUFBLE1BRzNCSyxPQUgyQix5QkFHM0JBLE9BSDJCO0FBQUEsTUFHbEJDLFdBSGtCLHlCQUdsQkEsV0FIa0I7QUFLbkMsTUFBTUMsS0FBSyxHQUFHUixPQUFPLENBQUNDLElBQVIsQ0FBYVEsVUFBYixDQUF3QkMsZUFBeEIsQ0FBd0NDLE1BQXREO0FBRUEsc0JBQ0UsOERBQUMsa0RBQUQ7QUFDRSxRQUFJLHNCQUFlVCxNQUFmLENBRE47QUFBQSwyQkFHRTtBQUFHLGVBQVMsRUFBQyxPQUFiO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLDZDQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLHNDQUFmO0FBQUEsaUNBQ0UsOERBQUMsbURBQUQ7QUFDRSxlQUFHLEVBQUVLLFdBRFA7QUFFRSxlQUFHLEVBQUVELE9BRlA7QUFHRSxrQkFBTSxFQUFDLE1BSFQ7QUFJRSxxQkFBUyxFQUFDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFXRTtBQUFLLFdBQUcsRUFBQyxtQkFBVDtBQUE2QixpQkFBUyxFQUFDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRixlQVlFO0FBQUksaUJBQVMsRUFBQywrQkFBZDtBQUFBLGtCQUErQ0g7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpGLGVBYUU7QUFBRyxpQkFBUyxFQUFDLGNBQWI7QUFBQSxrQkFBNkJMLDREQUFBLENBQWlCVSxLQUFqQjtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUJELENBNUJEOztLQUFNVDtBQThCTiwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLmpzPzA3YmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBmb3JtYXR0ZXIgfSBmcm9tICcuLi91dGlscy9oZWxwZXJzJ1xuXG5jb25zdCBQcm9kdWN0Q2FyZCA9ICh7IHByb2R1Y3QgfSkgPT4ge1xuICBjb25zdCB7IGhhbmRsZSwgdGl0bGUgfSA9IHByb2R1Y3Qubm9kZVxuXG4gIGNvbnN0IHsgYWx0VGV4dCwgb3JpZ2luYWxTcmMgfSA9IHByb2R1Y3Qubm9kZS5pbWFnZXMuZWRnZXNbMF0ubm9kZVxuXG4gIGNvbnN0IHByaWNlID0gcHJvZHVjdC5ub2RlLnByaWNlUmFuZ2UubWluVmFyaWFudFByaWNlLmFtb3VudFxuXG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIGhyZWY9e2AvcHJvZHVjdHMvJHtoYW5kbGV9YH1cbiAgICA+XG4gICAgICA8YSBjbGFzc05hbWU9XCJncm91cFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjayByb3VuZGVkLTN4bCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGdyb3VwLWhvdmVyOm9wYWNpdHktNzUgaC03MlwiPlxuICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICBzcmM9e29yaWdpbmFsU3JjfVxuICAgICAgICAgICAgICBhbHQ9e2FsdFRleHR9XG4gICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGltZyBzcmM9Jy9wX2JvcmRlcl90b3AucG5nJyBjbGFzc05hbWU9J215LTInLz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1jZW50ZXIgZm9udC1ib2xkXCI+e3RpdGxlfTwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTEgdGV4dC1sZ1wiPntmb3JtYXR0ZXIuZm9ybWF0KHByaWNlKX08L3A+XG4gICAgICA8L2E+XG4gICAgPC9MaW5rPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsImZvcm1hdHRlciIsIlByb2R1Y3RDYXJkIiwicHJvZHVjdCIsIm5vZGUiLCJoYW5kbGUiLCJ0aXRsZSIsImltYWdlcyIsImVkZ2VzIiwiYWx0VGV4dCIsIm9yaWdpbmFsU3JjIiwicHJpY2UiLCJwcmljZVJhbmdlIiwibWluVmFyaWFudFByaWNlIiwiYW1vdW50IiwiZm9ybWF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductCard.js\n");

/***/ })

});