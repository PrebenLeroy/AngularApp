let mongoose = require('mongoose');

let TeamSchema = new mongoose.Schema({
    name: String,
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    }],
    coach: String,
    assistantCoach: String
});

mongoose.model('Team', TeamSchema);