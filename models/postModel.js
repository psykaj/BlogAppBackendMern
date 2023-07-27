// Import mongoose
const mongoose = require("mongoose");

// router handler
const postSchema = new mongoose.Schema({
    // user ne konse post pe comment kiya
    // post : {
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref : "Post",  //Reference to the post model
    // },
    // konse user ne kiya
    // user : {
    //     type : String,
    //     required : true,
    // },
    // kya comments kiya
    // body : {
    //     type : String,
    //     required : true,
    // },

    title : {
        type : String,
        required : true,
    },
    body : {
        type : String,
        required : true,
    },
    likes : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Like",  //Reference to the post model
    }],
    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Comment",  //Reference to the post model
    }],
});

// Export
module.exports = mongoose.model("Post" , postSchema);
   