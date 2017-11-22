import { Player } from './player.model';

export class Rating {

    private _player: Player;

    private _overallIndex: Number;
    private _scoretIndex: Number;
    private _freethrowIndex: Number;
    private _reboundtIndex: Number;
    private _blockIndex: Number;
    private _assistIndex: Number;
    private _stealIndex: Number;

    private _comment: String;

    constructor(player: Player, overallIndex: Number, scoreIndex: Number, freethrowIndex: Number,
                reboundIndex: Number, blockIndex: Number, assistIndex: Number, stealIndex: Number, comment?: String) {
        this._player = player;

        this._overallIndex = overallIndex;
        this._scoretIndex = scoreIndex;
        this._freethrowIndex = freethrowIndex;
        this._reboundtIndex = reboundIndex;
        this._blockIndex = blockIndex;
        this._assistIndex = assistIndex;
        this._stealIndex = stealIndex;

        this._comment = comment;
    }

    get player() {
        return this._player;
    }

    set player(player: Player) {
        this._player = player;
    }

    get overallIndex() {
        return this._overallIndex;
    }

    set overallIndex(overallIndex: Number) {
        this._overallIndex = overallIndex;
    }

    get scoretIndex() {
        return this._scoretIndex;
    }

    set scoretIndex(scoretIndex: Number) {
        this._scoretIndex = scoretIndex;
    }

    get freethrowIndex() {
        return this._freethrowIndex;
    }

    set freethrowIndex(freethrowIndex: Number) {
        this._freethrowIndex = freethrowIndex;
    }

    get reboundtIndex() {
        return this._reboundtIndex;
    }

    set reboundtIndex(reboundtIndex: Number) {
        this._reboundtIndex = reboundtIndex;
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