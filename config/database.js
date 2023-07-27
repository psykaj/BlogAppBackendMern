// Created instance of mongoose
const mongoose = require("mongoose");

// we can use .env file data via process object
require("dotenv").config();

const dbConnect = () => {
    // This is one promise
    mongoose.connect(process.env.DATABASE_URL , {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then( () => {console.log("db connected successfully")})
    .catch( (error) => {
        console.log("Issue in server");
        console.error(error.message);

        // Stpos the code with error/Abnormal termination
        process.exit(1);
    });
}

// Export db connection function
module.exports = dbConnect;