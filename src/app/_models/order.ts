import { Book } from "./book";
import { Datetime } from "./DateTime";

interface IOrder {    
    ID_ORDER: string;  
    ID_USER: string;
    ORDER_DATE: string;
    DELIVERY_STATUS: Number;
    TOT_PRICE: Number;
    ITEMS:Array<Book>;
}

export class Order {
    public ID_ORDER: string;
    public ID_USER: string;
    public ORDER_DATE: string;
    public DELIVERY_STATUS: Number;
    public TOT_PRICE: Number;
    public BOOKS:Array<Book>;

    constructor(obj?:IOrder) {
        this.ID_ORDER = obj && obj.ID_ORDER || ""
        this.ID_USER = obj && obj.ID_USER || ""
        this.DELIVERY_STATUS = obj && obj.DELIVERY_STATUS || 1
        this.TOT_PRICE = obj && obj.TOT_PRICE || 0;
        this.BOOKS = obj && obj.ITEMS || null;
        this.ORDER_DATE =  new Datetime().now();

    }
}