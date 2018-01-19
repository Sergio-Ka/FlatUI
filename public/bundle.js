/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_styl__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_location_images_icon_1_png__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_location_images_icon_1_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__blocks_location_images_icon_1_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blocks_location_images_icon_2_png__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blocks_location_images_icon_2_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__blocks_location_images_icon_2_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blocks_messaging_images_photo_SB_png__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blocks_messaging_images_photo_SB_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__blocks_messaging_images_photo_SB_png__);




__webpack_require__(5);
__webpack_require__(6);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/icon-1.png";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/icon-2.png";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/photo_SB.png";

/***/ }),
/* 5 */
/***/ (function(module, exports) {

$("#slider1").slider({ // вид первого слайдера и настройки
    value: '',
    min: 0,
    max: 100,
	value: 40,
    create: function (event, ui) {
        $('.ui-slider-handle').append('<input class="sliderValue" value="40"/>');
        $('.ui-slider-handle').append('<div class="sliderValue_2"></div>');
    },
    slide: function (event, ui) {
        $(".sliderValue").val(ui.value);
    }
});

$("#slider2").slider({ // вид второго слайдера и настройки
    value: '',
    min: 0,
    max: 100,
    value: 75,
    range: 'min'
});

// добавляем разные классы для одинаковых слайдеров чтобы настроить стили независимо

$('#slider2 .ui-slider-handle').each(function (index, handle) {
    if (index % 2 == 0)
    $(handle).addClass('even-handle');
    else $(handle).addClass('odd-handle');
});

$('#slider2 .ui-slider-range-min').each(function (index, handle) {
    if (index % 2 == 0)
    $(handle).addClass('even-range-min');
    else $(handle).addClass('odd-range-min');
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

$("#selectmenu").selectmenu({ style: "dropdown", width:140 });

/***/ })
/******/ ]);