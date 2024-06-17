export class User {
    firstName: string;
    lastName: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;

    constructor(obj?: any) {
        this.firstName = obj && obj.firstName ? obj.firstName : '';
        this.lastName = obj && obj.lastName ? obj.lastName : '';
        this.birthDate = obj && obj.birthDate ? obj.birthDate : '';
        this.street = obj && obj.street ? obj.street : '';
        this.zipCode = obj && obj.zipCode ? obj.zipCode : '';
        this.city = obj && obj.city ? obj.city : '';
    }

    toJson() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city
        }
    }
}