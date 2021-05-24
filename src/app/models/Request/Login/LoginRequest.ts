import { BaseRequest } from "../../IBaseRequest";

export class LoginRequest extends BaseRequest {
    UserName: string;
    Password: string;
    RememberMe: boolean;
    constructor(endPoint: string, username: string, password: string , rememberMe: boolean){
      super(endPoint)
      this.UserName = username;
      this.Password = password;
      this.RememberMe = rememberMe;
    }

}
