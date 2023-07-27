// Import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

// Async function for communicate b/w application and db
exports.createComments = async(req,res) => {
    try {
        // fetch data from req.body
        const {post , user, body} = req.body;

        // create a comment object 
        const comment = new Comment({
            post , user , body 
        });

        // Save the comments into the database
        const savedComment = await comment.save();

        // find the post by id and add a new comments to comment array
        // Push se update hota hai entry db mai
        // Pull se delete hpta hai entry db mai
        // {new : true} se updated value visible hoti hai
        // savedComments._id will give the id of the post
        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {comments : savedComment._id}} , {new : true})
                            .populate("comments") //populate the comments array with comments document
                            .exec();

        res.json({
            post : updatedPost,
        });
    }
    catch(error) {
        return res.status(500).json({
            error : "Error while creating comments",
        })
    }
}
