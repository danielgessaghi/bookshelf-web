import { Book } from "./book";
import { User } from "./index";
import { AuthenticationService } from "../_services/authentication.service"
import { getLocaleDateTimeFormat } from "@angular/common/src/i18n/locale_data_api";
import { Data } from "@angular/router/src/config";
export class CartItem {
    constructor() {
        this.ID_ORDER = 0;
        this.QUANTITY = 0;
        this.TOT_PRICE = 0;
        this.ORDER_DATE = new Date().toISOString; 
    }
    ORDER_DATE: Data;
    TOT_PRICE:number;
    ID_ORDER: number;
    BOOK: Book;
    QUANTITY: number;
}