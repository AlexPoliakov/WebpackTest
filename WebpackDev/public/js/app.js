var app =
webpackJsonp_name_([0,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	//import '../scss/main.scss';

	__webpack_require__(1);

	document.getElementById('loginButton').onclick = function () {

	    // ======== Способ 1 (require.ensure) ==
	    __webpack_require__.e/* nsure */(1, function (require) {
	        // ensure получает массив с одним или несколькими модулями
	        var login = __webpack_require__(2); // и динамически подгружает модуль "login"

	        login();
	    });
	};

	document.getElementById('logoutButton').onclick = function () {

	    // ======== Способ 1 (require.ensure) ==
	    __webpack_require__.e/* nsure */(1, function (require) {
	        var logout = __webpack_require__(3);

	        logout();
	    });
		};

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYXBwLmpzP2hhc2g9ZTI2ODdiZSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9tYWluLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vL2ltcG9ydCAnLi4vc2Nzcy9tYWluLnNjc3MnO1xyXG5yZXF1aXJlKCcuLi9zY3NzL21haW4uc2NzcycpO1xyXG5cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbkJ1dHRvbicpLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvLyA9PT09PT09PSDQodC/0L7RgdC+0LEgMSAocmVxdWlyZS5lbnN1cmUpID09XHJcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkgeyAgLy8gZW5zdXJlINC/0L7Qu9GD0YfQsNC10YIg0LzQsNGB0YHQuNCyINGBINC+0LTQvdC40Lwg0LjQu9C4INC90LXRgdC60L7Qu9GM0LrQuNC80Lgg0LzQvtC00YPQu9GP0LzQuFxyXG4gICAgICAgIGxldCBsb2dpbiA9IHJlcXVpcmUoJy4vcGFydGlhbHMvbG9naW4nKTsgICAgIC8vINC4INC00LjQvdCw0LzQuNGH0LXRgdC60Lgg0L/QvtC00LPRgNGD0LbQsNC10YIg0LzQvtC00YPQu9GMIFwibG9naW5cIlxyXG5cclxuICAgICAgICBsb2dpbigpO1xyXG4gICAgfSwnYXV0aCcpO1xyXG5cclxufTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvdXRCdXR0b24nKS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy8gPT09PT09PT0g0KHQv9C+0YHQvtCxIDEgKHJlcXVpcmUuZW5zdXJlKSA9PVxyXG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uKHJlcXVpcmUpIHtcclxuICAgICAgICBsZXQgbG9nb3V0ID0gcmVxdWlyZSgnLi9wYXJ0aWFscy9sb2dvdXQnKTtcclxuXHJcbiAgICAgICAgbG9nb3V0KCk7XHJcbiAgICB9LCdhdXRoJyk7XHJcblxyXG59O1xyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL21haW4uanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2Nzcy9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQzFCQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==