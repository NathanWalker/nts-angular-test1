"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require('rxjs/add/operator/catch');
var OrdersService = (function () {
    function OrdersService(http) {
        this.http = http;
        this.OrdersUrl = "http://www.talabino.com/merchantapp/api/";
    }
    /**
     * Get ALL Orders
     * @param localUser
     * @returns {AnimationPromise|Promise<U>|Promise<ErrorObservable>}
     */
    OrdersService.prototype.getAllOrders = function (localUser) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var params = new http_1.URLSearchParams();
        params.set('mtid', localUser.mtid);
        params.set('token', localUser.token);
        params.set('user_type', localUser.user_type);
        return this.http.get(this.OrdersUrl + 'GetAllOrders', { search: params, headers: headers })
            .map(this.allOrdersData)
            .catch(this.allOrdersErrors);
    };
    OrdersService.prototype.allOrdersData = function (res) {
        var body = res.json().toString().slice(1, -1);
        return body;
    };
    OrdersService.prototype.allOrdersErrors = function (error) {
        return Rx_1.Observable.throw(error);
    };
    /**
     * Get Pending Orders
     * @param localUser
     * @returns {AnimationPromise|Promise<U>|Promise<ErrorObservable>}
     */
    OrdersService.prototype.getPendingOrders = function (localUser) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var params = new http_1.URLSearchParams();
        params.set('mtid', localUser.mtid);
        params.set('token', localUser.token);
        params.set('user_type', localUser.user_type);
        return this.http.get(this.OrdersUrl + 'GetPendingOrders', { search: params, headers: headers })
            .map(this.pendingOrdersData)
            .catch(this.pendingOrdersErrors);
    };
    OrdersService.prototype.pendingOrdersData = function (res) {
        var body = res.json().toString().slice(1, -1);
        return body;
    };
    OrdersService.prototype.pendingOrdersErrors = function (error) {
        return Rx_1.Observable.throw(error);
    };
    /**
     * Get Today Orders
     * @param localUser
     * @returns {AnimationPromise|Promise<U>|Promise<ErrorObservable>}
     */
    OrdersService.prototype.getTodaysOrder = function (localUser) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var params = new http_1.URLSearchParams();
        params.set('mtid', localUser.mtid);
        params.set('token', localUser.token);
        params.set('user_type', localUser.user_type);
        return this.http.get(this.OrdersUrl + 'GetTodaysOrder', { search: params, headers: headers })
            .map(this.todaysOrderData)
            .catch(this.todaysOrderErrors);
    };
    OrdersService.prototype.todaysOrderData = function (res) {
        var body = res.json().toString().slice(1, -1);
        console.log(body);
        return body;
    };
    OrdersService.prototype.todaysOrderErrors = function (error) {
        console.log("todaysOrderErrors");
        console.log(error);
        return Rx_1.Observable.throw(error);
    };
    OrdersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], OrdersService);
    return OrdersService;
}());
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map