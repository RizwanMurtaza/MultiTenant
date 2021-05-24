export class ChangePasswordRequest 
{
    CurrentPassword:string;
    Password:string;
    ConfirmPassword:string;
    public static ToRequestModel(currentPassword: string,password: string, confirmPassword: string)
    {
        var objectToReturn =  new ChangePasswordRequest();
        objectToReturn.CurrentPassword = currentPassword;
        objectToReturn.ConfirmPassword = confirmPassword;
        objectToReturn.Password = password;
        return JSON.stringify(objectToReturn)
    }
}