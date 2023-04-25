const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/connectDB');
const userRoute = require('./routes/userRoute');
// config dot env file
dotenv.config();
// database connection
connectDB();
//rest object
const app = express();
mongoose.connect("mongodb+srv://aishwarya:zch153r3HgPhdwZU@cluster0.pq5kgzd.mongodb.net/expenseApp");
//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
// app.use('/home',(req,res) =>{
//     res.send("hello");
// })
//routes
//user routes
app.use('/api/v1/users', userRoute);
//transaction routes
app.use('/api/v1/transactions', require('./routes/transactionRoute'));
//port 
const PORT = 8080;

//listen server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});




