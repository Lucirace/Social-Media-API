const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    text: { type: String, required: true },
    media: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', PostSchema);
