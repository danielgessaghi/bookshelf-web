import { Book } from "./book";

export class CartList{
    constructor(){
        this.ID_ORDER = 0;
        this.QUANTITY = 0;
        this.TITLE = "";
    }

    ID_ORDER: number;
    TITLE: string;
    QUANTITY:number;
}