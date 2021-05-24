import { environment } from 'src/environments/environment';

export class CreateUserRequest
{
    FirstName: string;
    LastName: string;
    UserName:string;
    Email: string;
    Password: string;
    ApplicationKey:string;
    ConfirmationUrl: string;

    public static ToRequestModel(firstName: string,lastName: string,email: string,password: string)
    {
        var objectToReturn =  new CreateUserRequest();
        objectToReturn.FirstName = firstName;
        objectToReturn.LastName = lastName;
        objectToReturn.UserName = email;
        objectToReturn.Email = email;
        objectToReturn.Password = password;
        objectToReturn.ApplicationKey = environment.ApplicationKey;
        objectToReturn.ConfirmationUrl = environment.apiUrl +'/activate'
        return JSON.stringify(objectToReturn)
    }
}
