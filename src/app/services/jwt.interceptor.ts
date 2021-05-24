import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './Auth';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        request = request.clone({
            setHeaders: {
                'Cache-Control': 'no-cache',
                'Content-Type':'application/json',
              }
        });
        var token= this.authenticationService.getToken;
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        console.log()
        if (token && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    'Cache-Control': 'no-cache',
                    'Content-Type':'application/json',
                    'api_auth': token
                  }
            });
        }
        //return next.handle(request);

        return next.handle(request)
        .pipe(catchError(err => {
            // onError
            console.log(err);
            if (err instanceof HttpErrorResponse) {
                console.log(err.status);
                console.log(err.statusText);
                if (err.status === 401) {
                    this.authenticationService.logout();
                    window.location.href = "/login";
                }
            }
            return Observable.throw(err);
        }));
    }
}
