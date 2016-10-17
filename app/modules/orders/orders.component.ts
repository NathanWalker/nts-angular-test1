import { Component } from "@angular/core";
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import dialogs = require("ui/dialogs");
import activityIndicatorModule = require("ui/activity-indicator");

@Component({
    selector: "tb-orders",
    templateUrl: "modules/orders/orders.component.html",
    styleUrls: ["modules/orders/orders.component.css"],
})

export class OrdersComponent {

    public isLoading: boolean = false;
    public tabIndex: number;

    constructor(private http: Http) {
        this.tabIndex = 0;
    }

    public tabIndexChanged(e: any) {
        if (e.newIndex == 1) {
            this.isLoading = true;
            this.http.get('https://randomuser.me/api/?results=1&nat=u').map(res => res.json()).subscribe((response: any) => {
                console.log(response.results[0].gender);
                this.isLoading = false;
            });
        }
    }
}
