const mongoose = require('mongoose')

//? bcrypt import
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    hash:{
        type: String,
        required: true
    },
}, {timesstamps: true})


//* This is bcrypt hashing schema method method
//? creating hash...
UserSchema.methods.setPassword = function(password){
    const saltRound = 10
    this.hash = bcrypt.hashSync(password, saltRound, function(err, hash){
        return hash
    })
}

//? validation password
UserSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.hash, function(err, result){
        return result
    })
}

module.exports = User = mongoose.model('users', UserSchema)