import {Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";

import { RouterExtensions } from "nativescript-angular/router";
import platformModule = require("platform");

import {SettingsService} from "./settings.service";
import {UserSettings} from "../shared/UserSettings";

@Component({
    selector: "tb-settings",
    providers: [SettingsService],
    templateUrl: "modules/settings/settings.component.html",
    styleUrls: ["modules/settings/settings.component.css"]
})

export class SettingsComponent implements OnInit{

    public userSettings: UserSettings;
    public deviceId = platformModule.device.uuid;

    constructor(private router: Router,
                private routerExtensions: RouterExtensions,
                private settingsService: SettingsService){
    };

    ngOnInit(){
        this.getUserSettings();
    }

    getUserSettings(){
        this.settingsService.getSettings(this.deviceId)
            .subscribe(
                (res) => {
                    let data = JSON.parse(res);
                    if (data.code == 1) {
                        this.userSettings = res;
                    } else {
                        alert(data.msg);
                    }
                },
                (err) => alert("Please check your internet connection and try again")
            );
    }

    backToHome() {
        this.routerExtensions.back();
    }


}

