// const express = require("express");
// const app = express();

// app.listen(3000 , () => {
//     console.log("App is running successfully");
// });

const express = require("express");
const app = express()

// Load config from env file
// Env file ki configuration ko proces object mai load kar diya and find port no. from there
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Adding middleware to parse json request body
app.use(express.json());

// Import routes from blog api
const blogRoutes = require("./routes/blog");

// mount the blog api routes -> append/concat
app.use("/api/v2" , blogRoutes);

// start your server
app.listen(PORT , () => {
    console.log(`server started successfully at port no. ${PORT}`);
});

// Connect database
const dbConnect = require("./config/database");
dbConnect();

// default route
app.get("/" , (req,res) => {
    res.send(`<h1>This is my Homepage</h1>`);
});

