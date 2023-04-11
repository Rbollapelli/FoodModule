export class UserForm {
    id!: number;
    username!: string;
    password!: string;
    firstName!: string;
    lastName!: string;
    authdata!: string;
    usertype!: string;

    address!: string;

    mobilenumber!: number;

    email!: string;

    constructor(id: number, username: string, password: string,

        firstName: string, lastname: string, authdata: string, usertype: string, address: string, mobilenumber: number, email: string) {

        this.id = id;

        this.username = username;

        this.firstName = firstName;

        this.lastName = lastname;

        this.authdata = authdata;

        this.usertype = usertype;

        this.address = address;

        this.mobilenumber = mobilenumber;

        this.email = email;

    }
}