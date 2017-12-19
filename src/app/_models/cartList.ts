import { Book } from "./book";
import { User } from "./index";
import { AuthenticationService } from "../_services/authentication.service"
export class CartItem {
    constructor() {
        this.ID_ORDER = 0;
        this.QUANTITY = 0;
    }
    ID_ORDER: number;
    BOOK: Book;
    QUANTITY: number;
}