import { Book } from "./book";
import { Data } from "@angular/router/src/config";

export class Returns {
    constructor() {
        this.ID_ORDER_ITEMS = 0;
        this.ID_RETURNING_STATUS = 0;
        this.QUANTITY = 0;
        this.retQuantity = 0;
    }
    public ID_ORDER_ITEMS: number;
    public ID_RETURNING_STATUS: number;
    public QUANTITY: number;
    public retQuantity:number;
    
}
