let mongoose = require('mongoose');

let PlayerSchema = new mongoose.Schema({
    picturePath: String,
    playerNumber: Number,
    firstname: String,
    lastname: String,
    position: Number
});

mongoose.model('Player', PlayerSchema);