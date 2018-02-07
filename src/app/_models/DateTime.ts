import { toArray } from "rxjs/operators/toArray";

export class Datetime{    

    private _Date : string;
    private _Time : string;

    private _Hours:number;
    private _m:number;
    private _s:number;

    constructor(){
        this._Date = new Date().toLocaleDateString();

        let h = new Date().getHours().toString().concat(":");
        let m = new Date().getMinutes().toString().concat(":");
        let s = new Date().getSeconds().toString().concat(".");
        let ms = new Date().getMilliseconds().toString();
        
        let hh:string = h.concat(m);
        let mm:string = hh.concat(s);

        let time:string = mm.concat(ms);
        this._Time = time;
        
    }
    public now() {
        let space:string = " ";
        let res = this._Date.concat(space);
        return res.concat(this._Time);
    }
    
}