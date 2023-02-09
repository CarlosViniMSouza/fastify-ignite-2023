"use strict";
exports.__esModule = true;
var fastify_1 = require("fastify");
var app = (0, fastify_1["default"])();
app.get('/hello', function () {
    return { message: 'Hello User!' };
});
app.listen({
    port: 3030
}).then(function () {
    console.log('Server is Up!');
});
