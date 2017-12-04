let mongoose = require('mongoose');

let RatingSchema = new mongoose.Schema({
    user: String,
    overallIndex: Number,
    scoreIndex: Number,
    freethrowIndex: Number,
    reboundIndex: Number,
    blockIndex: Number,
    assistIndex: Number,
    stealIndex: Number,
    comment: String
});

mongoose.model('Rating', RatingSchema);