/**
 * Created by Yuan on 2015/12/29.
 */
'use strict';
var mongoose = require("mongoose");
var User = mongoose.model('User');

exports.list = function (req, res) {
    res.send('hello world User');
};