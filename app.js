/**
 * Created by Yuan on 2015/12/23.
 */
'use strict';
var express = require("express");
var app = express();
var path = require("path");
var uuid = require('node-uuid');
var port = 3000;

/*加载中间件*/
app.use(express.static('public'));
//cookie
var cookieParser = require('cookie-parser');
app.use(cookieParser());
//body
var bodyParser = require("body-parser");
app.use(bodyParser());
//morgan
var morgan = require("morgan");
morgan.token('id', function getId(req) {
    return req.id
});
app.use(assignId);
app.use(morgan("[:id :method :url :response-time]"));
/*启动服务*/
app.listen(port);

function assignId(req, res, next) {
    req.id = uuid.v4().replace(/\-/g, "");
    next();
}
