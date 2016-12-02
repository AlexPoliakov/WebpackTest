webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// пример простого роутинга (в зависимости куда сделан вход: на /home or /about

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45ZTliNzM4OTI5ODhjNzI3Y2JlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwLmpzP2Q4ZWUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuLy8g0L/RgNC40LzQtdGAINC/0YDQvtGB0YLQvtCz0L4g0YDQvtGD0YLQuNC90LPQsCAo0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQutGD0LTQsCDRgdC00LXQu9Cw0L0g0LLRhdC+0LQ6INC90LAgL2hvbWUgb3IgL2Fib3V0XHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmxldCBtb2R1bGVOYW1lID0gbG9jYXRpb24ucGF0aG5hbWUuc2xpY2UoMSk7XHJcblxyXG5sZXQgaGFuZGxlcjtcclxudHJ5IHtcclxuICAgIGxldCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KCdidW5kbGUhLlxcXFxyb3V0ZXMvJywgdHJ1ZSwgL15cXC5cXC8vKTtcclxuICAgIGhhbmRsZXIgPSBjb250ZXh0KCcuLycgKyBtb2R1bGVOYW1lKTtcclxufSBjYXRjaCAoZSkge1xyXG4gICAgYWxlcnQoXCJObyBzdWNoIHBhdGhcIik7XHJcbn1cclxuXHJcbmlmIChoYW5kbGVyKSB7XHJcbiAgICBoYW5kbGVyKGZ1bmN0aW9uKHJvdXRlKSB7XHJcblxyXG4gICAgICAgIHJvdXRlKCk7XHJcblxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=