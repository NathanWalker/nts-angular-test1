"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require('rxjs/add/operator/catch');
var SettingsService = (function () {
    function SettingsService(http) {
        this.http = http;
        this.SettingsUrl = "http://www.talabino.com/merchantapp/api/getSettings";
    }
    SettingsService.prototype.getSettings = function (device_id) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var params = new http_1.URLSearchParams();
        params.set('device_id', "5489bf11ce64ac9");
        console.log(params);
        return this.http.get(this.SettingsUrl, { search: params })
            .map(this.extractData)
            .catch(this.handleErrors);
    };
    SettingsService.prototype.extractData = function (res) {
        console.log(res);
        var body = res.json().toString().slice(1, -1);
        console.log(body);
        return body;
    };
    SettingsService.prototype.handleErrors = function (error) {
        return Rx_1.Observable.throw(error);
    };
    SettingsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SettingsService);
    return SettingsService;
}());
exports.SettingsService = SettingsService;
//# sourceMappingURL=settings.service.js.map