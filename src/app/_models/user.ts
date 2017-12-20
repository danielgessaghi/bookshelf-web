export class User {
    constructor(){
        this.id = 0;
        this.USERNAME = "";
        this.PASSWORD = "";
        this.EMAIL = "";
        this.FIRSTNAME = "";
        this.LASTNAME = "";
        this.PHONE = "";
        this.ID_GROUP = 0;
        this.CAP = "";
        this.COUNTRY = "";
        this.creationDate = new Date(Date.now());
        this.Logged = false;
    }
    id: number;
    USERNAME: string;
    PASSWORD: string;
    EMAIL: string;
    FIRSTNAME: string;
    LASTNAME: string;
    PHONE: string;
    ID_GROUP: number;
    CAP: string;
    CITY: string;
    COUNTRY: string;
    STREET: string;
    creationDate: Date;
    Logged : boolean;
}
