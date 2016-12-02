webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// пример простого роутинга (в зависимости куда сделан вход: на /home or /about)

	"use strict";

	var moduleName = location.pathname.slice(1);

	var handler = void 0;
	try {
	    var context = !(function webpackMissingModule() { var e = new Error("Cannot find module \"bundle!.\\routes/\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
	    handler = context('./' + moduleName);
	} catch (e) {
	    alert("No such path");
	}

	if (handler) {
	    handler(function (route) {

	        route();
	    });
	}

/***/ }
])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lMTAyNmViMDU4YjA5ZWZlZjdiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwLmpzP2Q4ZWUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuLy8g0L/RgNC40LzQtdGAINC/0YDQvtGB0YLQvtCz0L4g0YDQvtGD0YLQuNC90LPQsCAo0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQutGD0LTQsCDRgdC00LXQu9Cw0L0g0LLRhdC+0LQ6INC90LAgL2hvbWUgb3IgL2Fib3V0KVxyXG5cclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5sZXQgbW9kdWxlTmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDEpO1xyXG5cclxubGV0IGhhbmRsZXI7XHJcbnRyeSB7XHJcbiAgICBsZXQgY29udGV4dCA9IHJlcXVpcmUuY29udGV4dCgnYnVuZGxlIS5cXFxccm91dGVzLycsIHRydWUsIC9eXFwuXFwvLyk7XHJcbiAgICBoYW5kbGVyID0gY29udGV4dCgnLi8nICsgbW9kdWxlTmFtZSk7XHJcbn0gY2F0Y2ggKGUpIHtcclxuICAgIGFsZXJ0KFwiTm8gc3VjaCBwYXRoXCIpO1xyXG59XHJcblxyXG5pZiAoaGFuZGxlcikge1xyXG4gICAgaGFuZGxlcihmdW5jdGlvbihyb3V0ZSkge1xyXG5cclxuICAgICAgICByb3V0ZSgpO1xyXG5cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAuanMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Iiwic291cmNlUm9vdCI6IiJ9