"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var body_parser_1 = require("body-parser");
var app = (0, express_1.default)();
var port = 3000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
var ipnData = null;
app.post('/ipn', function (req, res) {
    console.log('Received IPN notification');
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    ipnData = {
        headers: req.headers,
        body: req.body,
    };
    res.status(200).send('OK');
});
app.get('/ipn-data', function (req, res) {
    res.json(ipnData);
});
app.listen(port, function () {
    console.log("Server listening at http://localhost:".concat(port));
});
