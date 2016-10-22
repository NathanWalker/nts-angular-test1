import { Injectable } from "@angular/core";
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";

import * as appSettings from "application-settings";

@Injectable()
export class ProfileGuard implements CanActivate {

    constructor(private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
        let auth = true;
        if (appSettings.getString("user-profile") == null){
            auth = false;
            this.router.navigate(['/login']);
        }
        console.log("profile = " + auth);
        return auth;
    }
}