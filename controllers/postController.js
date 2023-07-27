// Import model
const Post = require("../models/postModel");

exports.createPost = async(req,res) => {
    try {
        // fetch data from request body
        const {title , body} = req.body;

        // create our own post object
        const post = new Post({
            title , body ,
        });

        // Save the data into database
        const savedPost = await post.save();

        res.json({
            post : savedPost,
        })

    }
    catch(error) {
        return res.status(500).json({
            error : "Error while creating post",
        });
    }
}

// Need some more testing after adding the some (Business logic) code in like controller.js
exports.getAllPosts = async(req,res) => {
    try {
        const allPosts = await Post.find()
                        .populate("likes")
                        .populate("comments")
                        .exec();

        res.json({
            allPosts,
        })
    }
    catch(error) {
        return res.status(500).json({
            error : "Error while creating post",
        });
    }
}
