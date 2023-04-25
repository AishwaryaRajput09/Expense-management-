const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userid : {
        type: String,
        required: [true, 'User id is required']
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required']
    },
    type: {
        type: String,
        required: [true, 'Please add a type']
    },
    category: {
        type: String,
        required: [true, 'Please add a category']
    },
    reference: {
        type: String,
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    date : {
        type: Date,
        required: [true, 'Please add a date']
    },
},
{timestamps: true}
);

const transactionModel = mongoose.model('Transaction', transactionSchema);
module.exports = transactionModel;