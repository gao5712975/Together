/**
 * Created by Yuan on 2015/12/24.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name:{type:String},
    gender:{type:Number,min:0,max:1},
    age:{type:Number,min:0,max:150},
    email:String,
    create_time:{type:Date,default:Date.new},
    update_time:{type:Date,default:Date.new}
});