let mongoose = require('mongoose');

let TeamSchema = new mongoose.Schema({
    picturePath: String,
    name: String,
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    }],
    coach: String,
    assistantCoach: String
});

mongoose.model('Team', TeamSchema);