"use strict";


    document.getElementById('loginButton').onclick = function() {

        // ======== Способ 1 (require.ensure) ==
        require.ensure([], function(require) {  // ensure получает массив с одним или несколькими модулями
            let login = require('./login');     // и динамически подгружает модуль "login"

            login();
        }, 'auth');

    };

    document.getElementById('loginButton').onclick = function() {

        // ======== Способ 1 (require.ensure) ==
        require.ensure([], function(require) {
            let logout = require('./logout');

            logout();
        }, 'auth');

    };


/*

********** 2-й способ (AMD) ****************

require(['./login'],function(login) {
    login();
})

 */





