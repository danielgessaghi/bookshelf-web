export class Item {
    constructor(){
        this.ISBN = 0;
        this.TITLE = "";
        this.AUTHOR = "";
        this.PUBBLICATION_DATE = new Date();
        this.PAGES = "";
        this.PRICE = "";
    }
    ISBN: number;
    TITLE: string;
    AUTHOR: string;
    PUBBLICATION_DATE: Date;
    PAGES: string;
    PRICE: string;
}
