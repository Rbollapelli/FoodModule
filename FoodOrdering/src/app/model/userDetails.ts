export class UserDetailsForm
{
    userName!:string;
    userType!:string;
    constructor(userName:string,userType:string){
        this.userName=userName;
        this.userType=userType;
    }
}
