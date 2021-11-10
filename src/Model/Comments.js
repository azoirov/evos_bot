const mongoose = require("mongoose");
const { v4 } = require("uuid");

const CommentSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        default: v4(),
    },
    user_id: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
});

const comments = mongoose.model("comments", CommentSchema);
module.exports = comments;
