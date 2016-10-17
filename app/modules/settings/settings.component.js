"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var platformModule = require("platform");
var settings_service_1 = require("./settings.service");
var SettingsComponent = (function () {
    function SettingsComponent(router, routerExtensions, settingsService) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.settingsService = settingsService;
        this.deviceId = platformModule.device.uuid;
    }
    ;
    SettingsComponent.prototype.ngOnInit = function () {
        this.getUserSettings();
    };
    SettingsComponent.prototype.getUserSettings = function () {
        var _this = this;
        this.settingsService.getSettings(this.deviceId)
            .subscribe(function (res) {
            var data = JSON.parse(res);
            if (data.code == 1) {
                _this.userSettings = res;
            }
            else {
                alert(data.msg);
            }
        }, function (err) { return alert("Please check your internet connection and try again"); });
    };
    SettingsComponent.prototype.backToHome = function () {
        this.routerExtensions.back();
    };
    SettingsComponent = __decorate([
        core_1.Component({
            selector: "tb-settings",
            providers: [settings_service_1.SettingsService],
            templateUrl: "modules/settings/settings.component.html",
            styleUrls: ["modules/settings/settings.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_2.RouterExtensions, settings_service_1.SettingsService])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=settings.component.js.map