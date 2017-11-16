import { Player } from './player.model';

export class Team {

    private _name: String;
    private _players: Player[];

    constructor(name: String, players: Player[]){
        this._name = name;
        this._players = players;
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
}
