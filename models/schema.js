const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const userschema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },

    uname: {
        type: String,
        required: true
    },

    pass: {
        type: String,
        required: true
    },


});


module.exports = mongoose.model('Resisteruser', userschema);
