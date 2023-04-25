const mongoose = require('mongoose');
const colors = require('colors');
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB Connected: ${mongoose.connection.host}`.cyan.underline.bold);
    } catch (error) {
        console.log(`Error: ${error.message}`.bgRed);
        process.exit(1);
    }
}
module.exports = connectDB;
