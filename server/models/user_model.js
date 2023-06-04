const mongoose = require('mongoose')

var userInfoSchema = new mongoose.Schema({
        firstName : { type : String, required:true },
        lastName : {type : String, required:true, },
        email : {type : String, required:true, unique:true },
        mobile : { type :String, required:true, unique:true},
        password : {type: String, required:true },
        role: {type: Number, default:0},
        createdOn: {type: Date, default: Date.now}
    },
    {
        collection: "UserInfoTable",
    }
)

const UserInfoTable = mongoose.model('UserInfoTable', userInfoSchema)

module.exports = UserInfoTable