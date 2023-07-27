// Import mongoose
const mongoose = require("mongoose");

// router handler
const likeSchema = new mongoose.Schema({
    // user ne konse post pe like kiya
    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post",  //Reference to the post model
    },
    // konse user ne kiya
    user : {
        type : String,
        required : true,
    },
});

// Export
module.exports = mongoose.model("Like" , likeSchema);
   