"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var appSettings = require("application-settings");
var Profile_1 = require('../shared/Profile');
var profile_service_1 = require("./profile.service");
var ProfileComponent = (function () {
    function ProfileComponent(router, routerExtensions, profileService) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.profileService = profileService;
        this.localUser = JSON.parse(appSettings.getString('user-profile')) || '[]';
        this.profile = new Profile_1.Profile();
    }
    ;
    ProfileComponent.prototype.updateProfile = function () {
        var _this = this;
        this.profile.mtid = this.localUser.merchant_id;
        this.profile.user_type = this.localUser.user_type;
        this.profile.token = this.localUser.token;
        this.profile.mtid = this.localUser.merchant_id;
        this.profileService.updateProfile(this.profile)
            .subscribe(function (res) {
            var data = JSON.parse(res);
            _this.profile.password = '';
            _this.profile.cpassword = '';
            alert(data.msg);
        }, function (err) { return alert("Please check your internet connection and try again"); });
    };
    ProfileComponent.prototype.backToHome = function () {
        this.routerExtensions.back();
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: "tb-profile",
            providers: [profile_service_1.ProfileService],
            templateUrl: "modules/profile/profile.component.html",
            styleUrls: ["modules/profile/profile.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_2.RouterExtensions, profile_service_1.ProfileService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map