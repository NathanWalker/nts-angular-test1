import { Injectable } from "@angular/core";
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";

import * as appSettings from "application-settings";

@Injectable()
export class LoginGuard implements CanActivate {

    public Authenticate: boolean = true;

    constructor(private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
        if (appSettings.getString("user-profile") != null){
            this.Authenticate = false;
            this.router.navigate(['/home']);
        }
        return this.Authenticate;
    }
}