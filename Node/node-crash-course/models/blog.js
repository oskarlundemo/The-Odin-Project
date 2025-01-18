


const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {type: String, required: true},
    snippet: {type: String, required: true},
    body: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
}, {timestamps: true});

const Blog = mongoose.model('Blog', postSchema);
module.exports = Blog;