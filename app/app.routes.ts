import {Routes} from '@angular/router';

import {HomeComponent} from "./modules/home/home.component";
import {OrdersComponent} from "./modules/orders/orders.component";
import {LoginComponent} from "./modules/login/login.component";
import {ProfileComponent} from "./modules/profile/profile.component";
import {LoginGuard} from "./modules/login/login.guard";
import {ProfileGuard} from "./modules/profile/profile.guard";
import {SettingsComponent} from "./modules/settings/settings.component";

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginGuard]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: "home",
        component: HomeComponent,
       canActivate: [ProfileGuard],
        children: [
            {path: "", component: OrdersComponent},
            {path: "orders", component: OrdersComponent},
            {path: "profile", component: ProfileComponent},
            {path: "settings", component: SettingsComponent}
        ]
    }
];
