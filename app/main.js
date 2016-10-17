"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var core_1 = require("@angular/core");
var forms_1 = require('nativescript-angular/forms');
var router_1 = require('nativescript-angular/router');
var http_1 = require("nativescript-angular/http");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var app_component_1 = require("./app.component");
var home_component_1 = require("./modules/home/home.component");
var orders_component_1 = require("./modules/orders/orders.component");
var login_component_1 = require("./modules/login/login.component");
var app_routes_1 = require('./app.routes');
var profile_component_1 = require("./modules/profile/profile.component");
var login_guard_1 = require("./modules/login/login.guard");
var profile_guard_1 = require("./modules/profile/profile.guard");
var settings_component_1 = require("./modules/settings/settings.component");
var AppComponentModule = (function () {
    function AppComponentModule() {
    }
    AppComponentModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent,
                orders_component_1.OrdersComponent, login_component_1.LoginComponent,
                profile_component_1.ProfileComponent, angular_1.SIDEDRAWER_DIRECTIVES,
                settings_component_1.SettingsComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            imports: [
                platform_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                router_1.NativeScriptRouterModule,
                http_1.NativeScriptHttpModule,
                router_1.NativeScriptRouterModule.forRoot(app_routes_1.routes)
            ],
            exports: [
                platform_1.NativeScriptModule,
                router_1.NativeScriptRouterModule
            ],
            providers: [
                login_guard_1.LoginGuard,
                profile_guard_1.ProfileGuard
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponentModule);
    return AppComponentModule;
}());
platform_1.platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
//# sourceMappingURL=main.js.map