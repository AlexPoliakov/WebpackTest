"use strict";

//let _ = require('lodash/map'); // require библиотеки lodash, для ее части map

let users = [
    {id: "abcd", name: "Vasya"},
    {id: "defa", name: "Petya"},
    {id: "1234", name: "Masha"}
];

console.log(map(users, 'name') );
