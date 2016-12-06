"use strict";

//import '../scss/main.scss';
require('../scss/main.scss');


document.getElementById('loginButton').onclick = function() {

    // ======== Способ 1 (require.ensure) ==
    require.ensure([], function(require) {  // ensure получает массив с одним или несколькими модулями
        let login = require('./partials/login');     // и динамически подгружает модуль "login"

        login();
    },'auth');

};

document.getElementById('logoutButton').onclick = function() {

    // ======== Способ 1 (require.ensure) ==
    require.ensure([], function(require) {
        let logout = require('./partials/logout');

        logout();
    },'auth');

};


