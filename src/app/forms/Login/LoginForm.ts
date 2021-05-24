import { required, minLength, email } from "@rxweb/reactive-form-validators";
export class LoginForm {
    @required({ message: "email is required field" })
    @email({ message: "user name must be a email" })
    username: string;

    @required({ message: "password is required" })
    @minLength({ value: 6, message: "invalid password" })
    password: string;
}
