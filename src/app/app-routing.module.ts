import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./shared/modules/home/home/home.component";
import {UsersComponent} from "./pages/users/users.component";
import {BadgesComponent} from "./pages/badges/badges/badges.component";
import {NotfoundpageComponent} from "./pages/notfoundpage/notfoundpage.component";


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'badges',component: BadgesComponent },
    { path: '**', component: NotfoundpageComponent},

];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
})
export class AppRoutingModule {}
