import { Player } from './player.model';

export class Team {

    private _name: String;
    private _players: Player[];
    private _coach: String;
    private _assistantcoach: String;

    constructor(name: String, players: Player[], coach: String, assistantcoach: String){
        this._name = name;
        this._players = players;
        this._coach = coach;
        this._assistantcoach = assistantcoach;
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

    get assistantcoach(){
        return this._assistantcoach;
    }

    set assistantcoach(assistantcoach: String){
        this._assistantcoach = assistantcoach;
    }
}
