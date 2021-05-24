import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginRequest, LoginResponse, User } from 'src/app/models/Login';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './localStorageService';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private _user: Subject<User> = new Subject<User>();
    public _currentUser = this._user.asObservable();

    private userIsLoggenIn: Subject<boolean> = new Subject<boolean>();
    public _isLoggedIn = this.userIsLoggenIn.asObservable();
    private currentUser: User;
    private currentUser1: User;
    constructor(private http: HttpClient ,
        private localStorage : LocalStorageService
        ) {

    }

    public get currentUserValue():User {
        return this.localStorage.getCurrentUser();
    }
    public get getToken() {
        return this.localStorage.getToken();
    }
    login(username: string, password: string) {
        let loginRequest = new LoginRequest('/Auth/login', username, password, false);
        return this.http.post<LoginResponse>(loginRequest.FullUrl, loginRequest.ToJson() , {headers:loginRequest.Header})
            .pipe(map(loginResponse => {

                if(loginResponse.IsAuthenticated)
               {
                this._user.next(loginResponse.ResponseUser);
                this.userIsLoggenIn.next(true);
                this.localStorage.setCurrentUser(loginResponse.ResponseUser)
                this.localStorage.setToken(loginResponse.AuthToken);

               }
              // this.currentUserSubject.next(user.authToken);
                return loginResponse;
            }));
    }
   isUserLoggedIn() :boolean
   {
       return this.localStorage.isUserLoggedIn();
   }
   justTest()
   {
    const header = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    return this.http.post<LoginResponse>(`${environment.apiUrl}/Group/GetAll` , {headers:header})
        .pipe(map(loginResponse => {

            console.log(loginResponse);
        }));
   }

    logout() {
        // remove user from local storage to log user out
        this.localStorage.clearLocalStorage();
    }
}
