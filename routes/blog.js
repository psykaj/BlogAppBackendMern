const express = require("express");
const router = express.Router();

// import controller
const {dummyLink , likeAPost , unlikeAPost} = require("../controllers/likeController");
const {createComments} = require("../controllers/commentController");
const {createPost , getAllPosts} = require("../controllers/postController");
// const {getAllPosts} = require("../controllers/postController");
// const {likeAPost} = require("../controllers/likeController");

// defone API Routes
router.get("/dummyRoute" , dummyLink);
router.post("/comments/create" , createComments);
router.post("/posts/create" , createPost);
router.get("/posts" , getAllPosts);
router.post("/likes/like" , likeAPost);
router.post("/likes/unlike" , unlikeAPost);

// Export router
module.exports = router;

