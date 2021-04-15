const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    body : {
        type : String,
        required : true
    },
    users : {
        type :Schema.Types.ObjectId,
        ref : "users"
    }
});

const Comment = mongoose.model("comment",commentSchema);
module.exports = Comment;