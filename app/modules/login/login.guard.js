"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var appSettings = require("application-settings");
var LoginGuard = (function () {
    function LoginGuard(router) {
        this.router = router;
        this.Authenticate = true;
    }
    LoginGuard.prototype.canActivate = function (route, state) {
        if (appSettings.getString("user-profile") != null) {
            this.Authenticate = false;
            this.router.navigate(['/home']);
        }
        return this.Authenticate;
    };
    LoginGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], LoginGuard);
    return LoginGuard;
}());
exports.LoginGuard = LoginGuard;
//# sourceMappingURL=login.guard.js.map