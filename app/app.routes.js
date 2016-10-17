"use strict";
var home_component_1 = require("./modules/home/home.component");
var orders_component_1 = require("./modules/orders/orders.component");
var login_component_1 = require("./modules/login/login.component");
var profile_component_1 = require("./modules/profile/profile.component");
var login_guard_1 = require("./modules/login/login.guard");
var profile_guard_1 = require("./modules/profile/profile.guard");
var settings_component_1 = require("./modules/settings/settings.component");
exports.routes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent,
        canActivate: [login_guard_1.LoginGuard]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: "home",
        component: home_component_1.HomeComponent,
        canActivate: [profile_guard_1.ProfileGuard],
        children: [
            { path: "", component: orders_component_1.OrdersComponent },
            { path: "orders", component: orders_component_1.OrdersComponent },
            { path: "profile", component: profile_component_1.ProfileComponent },
            { path: "settings", component: settings_component_1.SettingsComponent }
        ]
    }
];
//# sourceMappingURL=app.routes.js.map