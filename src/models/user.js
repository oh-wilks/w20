// import mongoose 
const {Schema, model} = require("mongoose");

const UserSchema = Schema({
    dogName: {
        type: String,
        require: [true, "dogName is mandatory"],
    },
    age: {
        type: Number
    },
    breed: {
        type: String
    },
    vaccines: {
        type: [String],
        default: []
      }

})

module.exports = model("dog", UserSchema, "dogs");