import {Component, OnInit, NgZone} from "@angular/core";

import dialogs = require("ui/dialogs");
import activityIndicatorModule = require("ui/activity-indicator");
import * as appSettings from "application-settings";

import {OrdersService} from './orders.service'
import {AppSettings} from '../shared/AppSettings';

@Component({
    selector: "tb-orders",
    providers: [OrdersService],
    templateUrl: "modules/orders/orders.component.html",
    styleUrls: ["modules/orders/orders.component.css"],
})

export class OrdersComponent implements OnInit {

    public isLoading: boolean = false;
    public tabIndex: number = 0;
    public localUser: AppSettings;
    public noResult: boolean = false;
    public user = {
        mtid: '',
        user_type: '',
        token: ''
    };

    constructor(private ordersService: OrdersService, private zone: NgZone) {}

    ngOnInit() {
        this.localUser = JSON.parse(appSettings.getString('user-profile'));
        this.user.mtid = this.localUser.merchant_id;
        this.user.user_type = this.localUser.user_type;
        this.user.token = this.localUser.token;
    }

    getOrders(name) {
        this.ordersService[name](this.user)
            .subscribe(
                (res) => {
                    this.zone.run(() => {
                        let data = JSON.parse(res);
                        this.isLoading = false;
                        if (data.details == '') {
                            this.noResult = true;
                            console.log(this.noResult);
                        }
                    });
                },
                (err) => alert("Please check your internet connection and try again")
            );
    }

    public tabIndexChanged(e: any) {
        if (e.newIndex == 0) {
            this.isLoading = true;
            this.getOrders("getTodaysOrder");
        }
        else if (e.newIndex == 1) {
            this.isLoading = true;
            this.getOrders("getPendingOrders");
        } else if (e.newIndex == 2) {
            this.isLoading = true;
            this.getOrders("getAllOrders");
        }
    }
}
