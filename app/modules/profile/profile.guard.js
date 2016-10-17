"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var appSettings = require("application-settings");
var ProfileGuard = (function () {
    function ProfileGuard(router) {
        this.router = router;
        this.Authenticate = true;
    }
    ProfileGuard.prototype.canActivate = function (route, state) {
        if (appSettings.getString("user-profile") == null) {
            this.Authenticate = false;
            this.router.navigate(['/login']);
        }
        console.log("profile = " + this.Authenticate);
        return this.Authenticate;
    };
    ProfileGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ProfileGuard);
    return ProfileGuard;
}());
exports.ProfileGuard = ProfileGuard;
//# sourceMappingURL=profile.guard.js.map