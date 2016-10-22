"use strict";
var core_1 = require("@angular/core");
var appSettings = require("application-settings");
var orders_service_1 = require('./orders.service');
var OrdersComponent = (function () {
    function OrdersComponent(ordersService, ngZone) {
        this.ordersService = ordersService;
        this.ngZone = ngZone;
        this.isLoading = false;
        this.tabIndex = 0;
        this.noResult = false;
        this.user = {
            mtid: '',
            user_type: '',
            token: ''
        };
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.localUser = JSON.parse(appSettings.getString('user-profile'));
        this.user.mtid = this.localUser.merchant_id;
        this.user.user_type = this.localUser.user_type;
        this.user.token = this.localUser.token;
    };
    OrdersComponent.prototype.getOrders = function (name) {
        var _this = this;
        this.ordersService[name](this.user)
            .subscribe(function (res) {
            console.log("getOrders res:", res);
            // this.ngZone.run(() => {
            var data = JSON.parse(res);
            _this.isLoading = false;
            if (data.details == '') {
                _this.noResult = true;
                console.log(_this.noResult);
            }
            // });
        }, function (err) { return alert("Please check your internet connection and try again"); });
    };
    OrdersComponent.prototype.tabIndexChanged = function (e) {
        console.log('tabChange: ' + e.newIndex);
        if (e.newIndex == 0) {
            this.isLoading = true;
            this.getOrders("getTodaysOrder");
        }
        else if (e.newIndex == 1) {
            this.isLoading = true;
            this.getOrders("getPendingOrders");
        }
        else if (e.newIndex == 2) {
            this.isLoading = true;
            this.getOrders("getAllOrders");
        }
    };
    OrdersComponent = __decorate([
        core_1.Component({
            selector: "tb-orders",
            providers: [orders_service_1.OrdersService],
            templateUrl: "modules/orders/orders.component.html",
            styleUrls: ["modules/orders/orders.component.css"],
        }), 
        __metadata('design:paramtypes', [orders_service_1.OrdersService, core_1.NgZone])
    ], OrdersComponent);
    return OrdersComponent;
}());
exports.OrdersComponent = OrdersComponent;
//# sourceMappingURL=orders.component.js.map