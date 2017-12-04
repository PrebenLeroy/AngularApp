let mongoose = require('mongoose');

let TeamSchema = new mongoose.Schema({
    picturePath: String,
    name: String,
    coach: String,
    assistantCoach: String,
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    }]
});

mongoose.model('Team', TeamSchema);