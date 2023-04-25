const transactionModel = require("../models/transactionModel");
const moment = require("moment");
const getAllTransactions = async (req, res) => {
        try{
            const {frequency ,selectedDate,type}= req.body;
            const transactions = await transactionModel.find({
                ...(frequency !== "custom"?{
                    date :{
                        $gt : moment().subtract(Number(frequency),'d').toDate(),
                    },
                }:{
                    date: {
                        $gte: moment(req.body.selectedDate[0]),
                        $lte: moment(req.body.selectedDate[1]),
                    },
                }),
                userid: req.body.userid,
                ...(type !== "all" && {type}),
            });
                res.status(200).json(transactions); 
    
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    };
    // @desc    Add transaction
    // @route   POST /api/v1/transactions
    // @access  Public
    const addTransaction = async (req, res) => {
    try {
        const newTransaction = new transactionModel(req.body);
        await newTransaction.save();
        res.status(201).send('transaction added');


    } catch (error) {
        console.log(error);
        res.status(500).json(error);

    }
    }
    const editTransaction = async (req, res) => {
        try{
            await transactionModel.findOneAndUpdate({_id:req.body.transactionId},req.body.payload);
            res.status(200).send('Edit Successfully');

        }catch{

        };
    };
    
  const deleteTransaction = async (req,res) => {
    try{
        await transactionModel.findOneAndDelete({_id:req.body.transactionId});
        res.status(200).send("Transaction Deleted!");
    }
    catch{
        console.log(error);
        res.status(500).json(error)
    }
  };

    module.exports = {
    getAllTransactions,
    addTransaction,
    editTransaction,
    deleteTransaction,
    };
