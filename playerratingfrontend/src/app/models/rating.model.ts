import { Player } from './player.model';

export class Rating {

    private _id: String;

    private _user: String;
    private _overallIndex: Number;
    private _scoreIndex: Number;
    private _freethrowIndex: Number;
    private _reboundIndex: Number;
    private _blockIndex: Number;
    private _assistIndex: Number;
    private _stealIndex: Number;

    private _comment: String;

    constructor(user: String, overallIndex: Number, scoreIndex: Number, freethrowIndex: Number,
                reboundIndex: Number, blockIndex: Number, assistIndex: Number, stealIndex: Number, comment?: String) {
        this._user = user;
        this._overallIndex = overallIndex;
        this._scoreIndex = scoreIndex;
        this._freethrowIndex = freethrowIndex;
        this._reboundIndex = reboundIndex;
        this._blockIndex = blockIndex;
        this._assistIndex = assistIndex;
        this._stealIndex = stealIndex;

        this._comment = comment;
    }

    static fromJSON(json): Rating {
        const rating = new Rating(json.user, json.overallIndex, json.scoreIndex, json.freethrowIndex,
            json.reboundIndex, json.blockIndex, json.assistIndex, json.stealIndex);
        rating._comment = json.comment;
        rating._id = json._id;
        return rating;
    }

    get user(){
        return this._user;
    }

    set user(user: String){
        this._user = user;
    }

    get overallIndex() {
        return this._overallIndex;
    }

    set overallIndex(overallIndex: Number) {
        this._overallIndex = overallIndex;
    }

    get scoreIndex() {
        return this._scoreIndex;
    }

    set scoreIndex(scoreIndex: Number) {
        this._scoreIndex = scoreIndex;
    }

    get freethrowIndex() {
        return this._freethrowIndex;
    }

    set freethrowIndex(freethrowIndex: Number) {
        this._freethrowIndex = freethrowIndex;
    }

    get reboundIndex() {
        return this._reboundIndex;
    }

    set reboundIndex(reboundIndex: Number) {
        this._reboundIndex = reboundIndex;
    }

    get blockIndex() {
        return this._blockIndex;
    }

    set blockIndex(blockIndex: Number) {
        this._blockIndex = blockIndex;
    }

    get assistIndex() {
        return this._assistIndex;
    }

    set assistIndex(assistIndex: Number) {
        this._assistIndex = assistIndex;
    }

    get stealIndex() {
        return this._stealIndex;
    }

    set stealIndex(stealIndex: Number) {
        this._stealIndex = stealIndex;
    }

    get comment() {
        return this._comment;
    }

    set comment(comment: String) {
        this._comment = comment;
    }

}