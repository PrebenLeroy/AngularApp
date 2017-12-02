import { Position } from './position.model';
import { Rating } from './rating.model';

export class Player {

    private _id: string;
    private _picturePath: String;
    private _playernumber: number;
    private _firstname: String;
    private _lastname: String;
    private _position: Position;
    private _ratings: Rating[];

    constructor(picturePath: String, playernumber: number, firstname: String, lastname: String, position: Position, ratings?: [Rating]) {
        this._picturePath = picturePath;
        this._playernumber = playernumber;
        this._firstname = firstname;
        this._lastname = lastname;
        this._position = position;
        this._ratings = ratings || new Array<Rating>();
    }

    static fromJSON(json): Player {
        const player = new Player(json.picturePath, json.playernumber, json.firstname, json.lastname, json.position);
        player._id = json._id;
        player._ratings = json.routes.map(Rating.fromJSON);
        return player;
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

    get ratings(): Rating[]{
        return this.ratings;
    }

    addRating(rating: Rating) {
        this._ratings.push(rating);
    }

    addRatings(ratings: Rating[]) {
        ratings.forEach(r => this._ratings.push(r));
    }
}
