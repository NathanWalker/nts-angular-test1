import {Component} from "@angular/core";
import { Router } from "@angular/router";

import * as appSettings from "application-settings";

import {Page} from "ui/page";
import platformModule = require("platform");

import {User} from "../shared/User";
import {LoginService} from "./login.service";
import {AppSettings} from "../shared/AppSettings";

@Component({
    selector: "tb-login",
    providers: [LoginService],
    templateUrl: "modules/login/login.component.html",
    styleUrls: ["modules/login/login.component.css"]
})
export class LoginComponent {

    public user: User;
    public localUser: AppSettings;
    public deviceId = platformModule.device.uuid;

    constructor(
        page: Page,
        private router: Router,
        private loginService: LoginService
    ) {
        this.user = new User();
        this.user.merchant_device_id = this.deviceId;
        this.localUser = new AppSettings();
        page.actionBarHidden = true;
        this.loginService.registerMobile(this.deviceId)
            .subscribe(
                (res) => {
                    let data = JSON.parse(res);
                    console.log(data.msg);
                },
                (err) => alert("Please check your internet connection and try again")
            );
    }

    login() {
        this.loginService.login(this.user)
            .subscribe(
                (res) => {
                    let data = JSON.parse(res);
                    if (data.code == 1) {
                        this.localUser.username = data.details.info.username;
                        this.localUser.username = data.details.info.restaurant_name;
                        this.localUser.merchant_id = data.details.info.merchant_id;
                        this.localUser.user_type = data.details.info.user_type;
                        this.localUser.token = data.details.token;
                        this.localUser.contact_email = data.details.info.contact_email;
                        appSettings.setString('user-profile', JSON.stringify(this.localUser));
                        this.router.navigate(["/home"]);
                    } else {
                        alert(data.msg);
                    }
                },
                (err) => alert("Unfortunately we were unable to create your account.")
            );
    }


}

