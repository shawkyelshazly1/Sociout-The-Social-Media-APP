const router = require("express").Router(),
  Post = require("../models/Post"),
  User = require("../models/User");

// Create post
router.post("/", async (req, res) => {
  const newPost = await new Post(req.body);
  try {
    const savedPost = await newPost.save();
    return res.status(200).json(savedPost);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// Update post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      return res.status(200).json("Post has been updated.");
    } else {
      return res.status(403).json("You can update only your posts!");
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

// Delete post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      return res.status(200).json("Post has been deleted.");
    } else {
      return res.status(403).json("You can delete only your posts!");
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

// Like/Dislike post
router.post("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      // like post
      await post.updateOne({ $push: { likes: req.body.userId } });
      return res.status(200).json("Post has been liked.");
    } else {
      //dislike post
      await post.updateOne({ $pull: { likes: req.body.userId } });
      return res.status(200).json("Post has been unliked.");
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

// Get single post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// Get Timeline posts
router.get("/", async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userPosts = await Post.find({ userId: currentUser.id });
    const friendsPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    return res.status(200).json(userPosts.concat(...friendsPosts));
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
