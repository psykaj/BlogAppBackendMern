// Import mongoose
const mongoose = require("mongoose");

// router handler
const commentSchema = new mongoose.Schema({
    // user ne konse post pe comment kiya
    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post",  //Reference to the post model
    },
    // konse user ne kiya
    user : {
        type : String,
        required : true,
    },
    // kya comments kiya
    body : {
        type : String,
        required : true,
    },
});

// Export
module.exports = mongoose.model("Comment" , commentSchema);
   