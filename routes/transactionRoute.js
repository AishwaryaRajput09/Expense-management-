const express = require('express');
const { addTransaction,getAllTransactions, editTransaction,deleteTransaction } = require('../controller/transactionCtrl');



//router object 
const router = express.Router();

//routes
//add transaction || method: POST
router.post('/add-transaction', addTransaction);
//routes
//Edit transaction || method: POST
router.post('/edit-transaction', editTransaction);
//Edit transaction || method: POST
router.post('/delete-transaction', deleteTransaction);

//get all transactions || method: GET
router.post('/get-transactions', getAllTransactions);

module.exports = router;