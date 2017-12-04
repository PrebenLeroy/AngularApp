import { Player } from './player.model';

export class Team {

    private _picturePath: String;
    private _name: String;
    private _players: Player[];
    private _coach: String;
    private _assistantCoach: String;

    constructor(picturePath: String, name: String, players: Player[], coach: String, assistantCoach: String){
        this._picturePath = picturePath;
        this._name = name;
        this._players = players;
        this._coach = coach;
        this._assistantCoach = assistantCoach;
    }

    static fromJSON(json): Team {
        const team = new Team(json.picturePath, json.name, json.players, json.coach, json.assistantCoach);
        return team;
    }

    get picturePath(){
        return this._picturePath;
    }

    set picturePath(picturePath: String){
        this._picturePath = picturePath;
    }

    get name(){
        return this._name;
    }

    set name(name: String){
        this._name = name;
    }

    get players(){
        return this._players;
    }

    set players(players: Player[]){
        this._players = players;
    }

    get coach(){
        return this._coach;
    }

    set coach(coach: String){
        this._coach = coach;
    }

    get assistantCoach(){
        return this._assistantCoach;
    }

    set assistantCoach(assistantCoach: String){
        this._assistantCoach = assistantCoach;
    }
}
