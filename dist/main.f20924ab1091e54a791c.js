(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// import _ from 'lodash'\r\n\r\nasync function component() {\r\n  var element = document.createElement('div')\r\n\r\n  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的\r\n  // element.innerHTML = _.join(['Hello', 'webpack'], ' ')\r\n  // btn.innerHTML = 'Click me and check the console'\r\n  // btn.onclick = printMe\r\n  // element.appendChild(btn)\r\n\r\n  /**\r\n   * 使用动态加载引入lodash\r\n   */\r\n  const { default: _ } = await __webpack_require__.e(/*! import() | lodash */ \"vendors\").then(__webpack_require__.t.bind(null, /*! lodash */ \"./node_modules/lodash/lodash.js\", 7))\r\n  element.innerHTML = _.join(['Hello', 'webpack'], ' ')\r\n  \r\n  return element\r\n}\r\n\r\ncomponent().then(component => {\r\n  document.body.appendChild(component)\r\n})\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

},[["./src/index.js","runtime"]]]);