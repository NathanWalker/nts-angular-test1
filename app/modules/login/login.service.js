"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require('rxjs/add/operator/catch');
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.BaseUrl = "http://www.talabino.com/merchantapp/api/";
    }
    LoginService.prototype.login = function (user) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var params = new http_1.URLSearchParams();
        params.set('lang_id', '1');
        params.set('merchant_device_id', user.merchant_device_id);
        params.set('username', user.username);
        params.set('password', user.password);
        console.log(params);
        return this.http.get(this.BaseUrl + 'login', { search: params })
            .map(this.LoginSuccess)
            .catch(this.LoginError);
    };
    LoginService.prototype.LoginSuccess = function (res) {
        var body = res.json().toString().slice(1, -1);
        console.log(body);
        return body;
    };
    LoginService.prototype.LoginError = function (error) {
        return Rx_1.Observable.throw(error);
    };
    LoginService.prototype.registerMobile = function (deviceId) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var params = new http_1.URLSearchParams();
        params.set('registrationId', deviceId);
        console.log(params);
        return this.http.get(this.BaseUrl + 'registerMobile', { search: params })
            .map(this.RegisterMobileSuccess)
            .catch(this.RegisterMobileError);
    };
    LoginService.prototype.RegisterMobileSuccess = function (res) {
        var body = res.json().toString().slice(1, -1);
        console.log(body);
        return body;
    };
    LoginService.prototype.RegisterMobileError = function (error) {
        return Rx_1.Observable.throw(error);
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map