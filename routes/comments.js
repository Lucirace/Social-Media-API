const express = require('express');
const authMiddleware = require('../middleware/auth');
const Comment = require('../models/Comment');

const router = express.Router();

router.post('/comments', authMiddleware, async (req, res) => {
    try {
        const newComment = new Comment({ ...req.body, user: req.user.id });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
