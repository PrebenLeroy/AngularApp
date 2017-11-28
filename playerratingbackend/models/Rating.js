let mongoose = require('mongoose');

let RatingSchema = new mongoose.Schema({
    player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    },
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