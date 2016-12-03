"use strict";


// пример простого роутинга (в зависимости куда сделан вход: на /home or /about)

let moduleName = location.pathname.slice(1);

let handler;
try {
    let context = require.context('bundle-loader!./routes/', true, /^\.\//);
    handler = context('\\' + moduleName);
} catch (e) {
    alert("No such path");
}

if (handler) {
    handler(function(route) {

        route();

    });
}




