import {Component} from "@angular/core";
import { Router } from "@angular/router";

import { RouterExtensions } from "nativescript-angular/router";
import * as appSettings from "application-settings";

import { Profile } from '../shared/Profile';
import { AppSettings } from '../shared/AppSettings';
import {ProfileService} from "./profile.service";

@Component({
    selector: "tb-profile",
    providers: [ProfileService],
    templateUrl: "modules/profile/profile.component.html",
    styleUrls: ["modules/profile/profile.component.css"]
})

export class ProfileComponent {

    public localUser:AppSettings;
    public profile: Profile;

    constructor(private router: Router,
                private routerExtensions: RouterExtensions,
                private profileService: ProfileService, ){
        this.localUser = JSON.parse(appSettings.getString('user-profile')) || '[]';
        this.profile = new Profile();
    };

    updateProfile(){
        this.profile.mtid = this.localUser.merchant_id;
        this.profile.user_type = this.localUser.user_type;
        this.profile.token = this.localUser.token;
        this.profile.mtid = this.localUser.merchant_id;
        this.profileService.updateProfile(this.profile)
            .subscribe(
                (res) => {
                    let data = JSON.parse(res);
                    this.profile.password = '';
                    this.profile.cpassword = '';
                    alert(data.msg);
                },
                (err) => alert("Please check your internet connection and try again")
            );
    }

    backToHome() {
        this.routerExtensions.back();
    }


}

