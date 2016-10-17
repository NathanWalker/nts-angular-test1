"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require('rxjs/add/operator/catch');
var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
        this.ProfileUrl = "http://www.talabino.com/merchantapp/api/saveProfile";
    }
    ProfileService.prototype.updateProfile = function (profile) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var params = new http_1.URLSearchParams();
        params.set('password', profile.password);
        params.set('cpassword', profile.cpassword);
        params.set('mtid', profile.mtid);
        params.set('token', profile.token);
        params.set('user_type', profile.user_type);
        return this.http.get(this.ProfileUrl, { search: params })
            .map(this.extractData)
            .catch(this.handleErrors);
    };
    ProfileService.prototype.extractData = function (res) {
        console.log(res);
        var body = res.json().toString().slice(1, -1);
        console.log(body);
        return body;
    };
    ProfileService.prototype.handleErrors = function (error) {
        return Rx_1.Observable.throw(error);
    };
    ProfileService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map