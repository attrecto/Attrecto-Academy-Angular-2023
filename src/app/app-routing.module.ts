import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./shared/modules/home/home/home.component";
import {UsersComponent} from "./pages/users/users.component";

import {BadgesComponent} from "./pages/badges/badges.component";
import { UserCreateComponent } from './pages/user-create/user-create.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import {BadgeCreateComponent} from "./pages/badge-create/badge-create.component";
import {BadgeEditComponent} from "./pages/badge-edit/badge-edit.component";


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'user-create', component: UserCreateComponent },
    { path: 'user-edit/:userId', component: UserEditComponent },
    { path: 'badges',component: BadgesComponent },
    { path: 'badge-create', component: BadgeCreateComponent },
    { path: 'badge-edit/:badgeId', component: BadgeEditComponent },
    { path: '**', redirectTo: 'home'}
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
})
export class AppRoutingModule {}
