import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../_services/authenticationService';
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        const currentUser = this.authenticationService.currentUserValue;
        const token = this.authenticationService.getToken;
        if(this.checkforActivationUrl(state))
        {
            console.log('passs')
         return true;
        }
        if (currentUser && token) {
            // logged in so return true
            return true;
        }


        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    }
    checkforActivationUrl(state: RouterStateSnapshot)
    {
        console.log(state.url)
        return state.url.startsWith('/activate');
    }
}