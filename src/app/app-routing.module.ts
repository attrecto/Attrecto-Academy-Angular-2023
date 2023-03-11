import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./shared/modules/home/home/home.component";
import {UsersComponent} from "./pages/users/users.component";
import {BadgesComponent} from "./pages/badges/badges/badges.component";
import {PagenotfoundComponent} from "./pages/users/components/pageNotFound/pagenotfound/pagenotfound.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'badges',component: BadgesComponent },
    { path: '**', pathMatch:'full', component: PagenotfoundComponent}
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
})
export class AppRoutingModule {}
