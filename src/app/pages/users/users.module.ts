import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersComponent} from "./users.component";
import { UserCardComponent } from './components/user-card/user-card.component';
import { PagenotfoundComponent } from './components/pageNotFound/pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [UsersComponent, UserCardComponent, PagenotfoundComponent],
  imports: [CommonModule],
})
export class UsersModule {}
