"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var appSettings = require("application-settings");
var page_1 = require("ui/page");
var platformModule = require("platform");
var User_1 = require("../shared/User");
var login_service_1 = require("./login.service");
var AppSettings_1 = require("../shared/AppSettings");
var LoginComponent = (function () {
    function LoginComponent(page, router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.deviceId = platformModule.device.uuid;
        this.user = new User_1.User();
        this.user.merchant_device_id = this.deviceId;
        this.localUser = new AppSettings_1.AppSettings();
        page.actionBarHidden = true;
        this.loginService.registerMobile(this.deviceId)
            .subscribe(function (res) {
            var data = JSON.parse(res);
            console.log(data.msg);
        }, function (err) { return alert("Please check your internet connection and try again"); });
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login(this.user)
            .subscribe(function (res) {
            var data = JSON.parse(res);
            console.log(data.code);
            if (data.code == 1) {
                _this.localUser.username = data.details.info.username;
                _this.localUser.username = data.details.info.restaurant_name;
                _this.localUser.merchant_id = data.details.info.merchant_id;
                _this.localUser.user_type = data.details.info.user_type;
                _this.localUser.token = data.details.token;
                _this.localUser.contact_email = data.details.info.contact_email;
                appSettings.setString('user-profile', JSON.stringify(_this.localUser));
                _this.router.navigate(["/home"]);
            }
            else {
                alert(data.msg);
            }
        }, function (err) { return alert("Unfortunately we were unable to create your account."); });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "tb-login",
            providers: [login_service_1.LoginService],
            templateUrl: "modules/login/login.component.html",
            styleUrls: ["modules/login/login.component.css"]
        }), 
        __metadata('design:paramtypes', [page_1.Page, router_1.Router, login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map