const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    firstName : { type : String, required:true },
    lastName : {type : String, required:true, },
    email : {type : String, required:true, unique:true },
    contact : { type :String, required:true, unique:true},
    password : {type: String, required:true },
    role: {type: Number, default:0},
    createdOn: {type: Date, default: Date.now}
})

const UserTable = mongoose.model('UserTable', schema)

module.exports = UserTable