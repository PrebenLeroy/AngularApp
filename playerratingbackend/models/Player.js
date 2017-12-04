let mongoose = require('mongoose');

let PlayerSchema = new mongoose.Schema({
    picturePath: String,
    playerNumber: Number,
    firstname: String,
    lastname: String,
    position: Number
    /*,ratings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rating'
    }],*/
});

mongoose.model('Player', PlayerSchema);