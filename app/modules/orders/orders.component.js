"use strict";
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var OrdersComponent = (function () {
    function OrdersComponent(http) {
        this.http = http;
        this.isLoading = false;
        this.tabIndex = 0;
    }
    OrdersComponent.prototype.tabIndexChanged = function (e) {
        var _this = this;
        if (e.newIndex == 1) {
            this.isLoading = true;
            this.http.get('https://randomuser.me/api/?results=1&nat=u').map(function (res) { return res.json(); }).subscribe(function (response) {
                console.log(response.results[0].gender);
                _this.isLoading = false;
            });
        }
    };
    OrdersComponent = __decorate([
        core_1.Component({
            selector: "tb-orders",
            templateUrl: "modules/orders/orders.component.html",
            styleUrls: ["modules/orders/orders.component.css"],
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], OrdersComponent);
    return OrdersComponent;
}());
exports.OrdersComponent = OrdersComponent;
//# sourceMappingURL=orders.component.js.map