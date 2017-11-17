import { Position } from './position.model';

export class Player {

    private _picturePath: String;
    private _playernumber: number;
    private _firstname: String;
    private _lastname: String;
    private _position: Position;

    constructor(picturePath: String, playernumber: number, firstname: String, lastname: String, position: Position){
        this._picturePath = picturePath;
        this._playernumber = playernumber;
        this._firstname = firstname;
        this._lastname = lastname;
        this._position = position;
    }

    get picturePath(){
        return this._picturePath;
    }

    set picturePath(picturePath: String){
        this._picturePath = picturePath;
    }

    get playernumber(){
        return this._playernumber;
    }

    set playernumber(playernumber: number){
        this._playernumber = playernumber;
    }

    get firstname(){
        return this._firstname;
    }

    set firstname(firstname: String){
        this._firstname = firstname;
    }

    get lastname(){
        return this._lastname;
    }

    set lastname(lastname: String){
        this._lastname = lastname;
    }

    get position(){
        return this._position;
    }

    set position(position: Position){
        this._position = position;
    }

    get positionString(){
        return Position[this._position];
    }
}