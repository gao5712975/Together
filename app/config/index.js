/**
 * Created by Yuan on 2015/12/30.
 */
'use strict';
var Index = require("../controllers/index");

module.exports = function (app) {
    app.get("/",Index.index);
};