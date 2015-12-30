/**
 * Created by Yuan on 2015/12/29.
 */
'use strict';
var User = require("../controllers/user");

module.exports = function (app) {
    app.get("/list",User.list);
};