"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var angular_1 = require('nativescript-telerik-ui/sidedrawer/angular');
var sidedrawer_1 = require('nativescript-telerik-ui/sidedrawer');
var page_1 = require("ui/page");
var appSettings = require("application-settings");
var drawer_service_1 = require('../shared/drawer.service');
var HomeComponent = (function () {
    function HomeComponent(_page, _changeDetectionRef, _router, _drawerService) {
        this._page = _page;
        this._changeDetectionRef = _changeDetectionRef;
        this._router = _router;
        this._drawerService = _drawerService;
        _page.on("loaded", this.onLoaded, this);
    }
    Object.defineProperty(HomeComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.toggle = function () {
        this._drawerService.toggle();
    };
    HomeComponent.prototype.onLoaded = function (args) {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (e) {
            if (e instanceof router_1.NavigationEnd) {
                _this._drawerService.toggle(false);
            }
        });
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this._drawerService.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    HomeComponent.prototype.openDrawer = function () {
        this._drawerService.toggle(true);
    };
    HomeComponent.prototype.onLogout = function () {
        appSettings.remove("user-profile");
        this._router.navigate(["/login"]);
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent), 
        __metadata('design:type', angular_1.RadSideDrawerComponent)
    ], HomeComponent.prototype, "drawerComponent", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            templateUrl: 'home.component.html',
            styleUrls: ['home.component.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __param(0, core_1.Inject(page_1.Page)), 
        __metadata('design:paramtypes', [page_1.Page, core_1.ChangeDetectorRef, router_1.Router, drawer_service_1.DrawerService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map