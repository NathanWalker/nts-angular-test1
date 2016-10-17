// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { SIDEDRAWER_DIRECTIVES } from "nativescript-telerik-ui/sidedrawer/angular";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./modules/home/home.component";
import { OrdersComponent } from "./modules/orders/orders.component";
import { LoginComponent } from "./modules/login/login.component";

import {routes} from './app.routes';
import {ProfileComponent} from "./modules/profile/profile.component";
import {LoginGuard} from "./modules/login/login.guard";
import {ProfileGuard} from "./modules/profile/profile.guard";
import {SettingsComponent} from "./modules/settings/settings.component";

@NgModule({
    declarations: [AppComponent, HomeComponent,
        OrdersComponent, LoginComponent,
        ProfileComponent, SIDEDRAWER_DIRECTIVES,
        SettingsComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
		NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptHttpModule,
		NativeScriptRouterModule.forRoot(routes)
    ],
    exports: [
        NativeScriptModule,
        NativeScriptRouterModule
    ],
    providers: [
        LoginGuard,
        ProfileGuard
    ]

})
class AppComponentModule { }

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);