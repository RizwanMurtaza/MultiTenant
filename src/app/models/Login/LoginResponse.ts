import { User } from "./User";

export class LoginResponse {
    AuthMessage: string;
    AuthToken: string;
    IsAccountLocked: boolean;
    IsAuthenticated: boolean;
    RequireTwoFactorAuthentication: boolean;
    ResponseUser: User;
}
