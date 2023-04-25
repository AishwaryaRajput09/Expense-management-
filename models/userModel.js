const mongoose = require('mongoose');

//schema design
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],

    },
    email: {
        type: String,
        required: [true, 'Please enter your email and must be unique'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
    },
}, 
{timestamps: true}
);
const userModel = mongoose.model('user', userSchema);
module.exports = userModel; 