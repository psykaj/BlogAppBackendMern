// Import Models
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

// Like a post
exports.likeAPost = async(req,res) => {
    try {
        // fetch the data from the request body (destructuring)
        const {post , user} = req.body;

        // make our own like object of that data
        const like = new Like({
            post , user ,
        });

        // save that like into te database
        const savedLike = await like.save();

        // Update the post collection based on these
        const updatedPost = await Post.findByIdAndUpdate(post , {$push : {likes : savedLike._id}} , {new : true})
        .populate("post")
        .populate("likes")
        .exec();

        res.json({
            post : updatedPost,
        });

    }
    catch(error) {
        return res.status(500).json({
            error : "Error while fetching the post",
        });
    }
}

// Unlike a post 
exports.unlikeAPost = async(req,res) => {
    try {
        // fetch the post data from request body
        const {post , like} = req.body;

        // find and delete the like collection
        const deletedLike = await Like.findOneAndDelete({post:post , _id:like});

        // Update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post , {$pull : {likes : deletedLike._id}} , {new : true})
        .populate("likes")
        .exec();

        res.json({
            post:updatedPost,
        });

    }
    catch(error) {
        return res.status(500).json({
            error : "Error while fetching the post",
        });
    }
}






exports.dummyLink = (req,res) => {
    res.send("<h1>This is your dummy page</h1>");
}

