let mongoose = require('mongoose');

let PlayerSchema = new mongoose.Schema({
    playerNumber: Number,
    firstname: String,
    lastname: String,
    position: Number
});