import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./shared/modules/home/home/home.component";
import {UsersComponent} from "./pages/users/users.component";
import {BadgesComponent} from "./pages/badges/badges/badges.component";
import {UserCreateComponent} from "./pages/user-create/user-create.component";
import {UserEditComponent} from "./pages/user-edit/user-edit.component";
import {UsersTableComponent} from "./pages/users/components/users-table/users-table.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'user-create', component: UserCreateComponent },
    { path: 'user-edit/:userId', component: UserEditComponent },
    { path: 'users-table', component: UsersTableComponent },
    { path: 'badges',component: BadgesComponent },
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
