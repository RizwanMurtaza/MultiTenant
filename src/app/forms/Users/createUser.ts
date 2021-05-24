import { required, minLength, email, compare } from "@rxweb/reactive-form-validators";
import { CreateUserRequest } from "src/app/models/Users";
import { environment } from "src/environments/environment";
export class CreateUserForm {
    @required({message:"First Name is required field"})
    FirstName : string;

    @required({message:"Last Name is required field"})
    LastName:string;

    @required({message:"Email is required field"})
    @email({message:"please enter valid email"})
    Email:string;

    @required({message:"password is required"})
    @minLength({value:6 , message:"minimum length for password is 6 chracters"})
    Password:string;

    @required({message:"confirm password is required"})
    @compare({fieldName:'Password', message:"password doesn't match"})
    ConfirmPassword:string;

    getRequest(form: CreateUserForm)
    {
        var objectToReturn =  new CreateUserRequest();
        objectToReturn.FirstName = form.FirstName;
        objectToReturn.LastName = form.LastName;
        objectToReturn.UserName = form.Email;
        objectToReturn.Email = form.Email;
        objectToReturn.Password = form.Password;
        objectToReturn.ApplicationKey = environment.ApplicationKey;
        objectToReturn.ConfirmationUrl = environment.apiUrl +'/activate'
        return JSON.stringify(objectToReturn)
    }
}
