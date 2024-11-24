const express = require('express');
const authMiddleware = require('../middleware/auth');
const Post = require('../models/Post');

const router = express.Router();

router.post('/posts', authMiddleware, async (req, res) => {
    try {
        const newPost = new Post({ ...req.body, user: req.user.id });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/posts', async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const posts = await Post.find()
            .populate('user', 'name')
            .skip((page - 1) * limit)
            .limit(Number(limit));
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
