export class User {
    firstName: string;
    lastName: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;

    constructor(obj?: any) {
        this.firstName = obj.firstName ? obj.firstName : '';
        this.lastName = obj.lastName ? obj.lastName : '';
        this.birthDate = obj.birthDate ? obj.birthDate : '';
        this.street = obj.street ? obj.street : '';
        this.zipCode = obj.zipCode ? obj.zipCode : '';
        this.city = obj.city ? obj.city : '';
    }
}