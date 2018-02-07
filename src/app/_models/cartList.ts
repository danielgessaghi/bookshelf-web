import { Book } from "./book";
import { User } from "./index";
import { AuthenticationService } from "../_services/authentication.service"
import { getLocaleDateTimeFormat } from "@angular/common/src/i18n/locale_data_api";
import { Data } from "@angular/router/src/config";

export class CartItem {

    constructor() {
        this.ID_ORDER_ITEM = 0;
        this.ID_ORDER = "";
        this.QUANTITY = 0;
        this.TOT_PRICE = 0;
        this.ORDER_DATE = new Date().toISOString; 
    }
    
    public ID_ORDER_ITEM:number;
    public ORDER_DATE: Data;
    public TOT_PRICE:number;
    public ID_ORDER: string;
    public BOOK: Book;
    public QUANTITY: number;
}