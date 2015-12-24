/**
 * Created by Yuan on 2015/12/24.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name:String,
    gender:{type:Number,min:0,max:1},
    age:{type:Number,min:0,max:150},
});