const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
    uid : {
        type : String,
        required : true
    },
    permission : [{ 
        users : {
            type : String,
            required : true
        },
        access : {
            type : String,
            required : true
        }
    }],
    comments : [{
        type :Schema.Types.ObjectId,
        ref : "users"
    }]
});

const Board = mongoose.model("board",boardSchema);
module.exports = Board;