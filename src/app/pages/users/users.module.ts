import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersComponent} from "./users.component";
import { UserCardComponent } from './components/user-card/user-card.component';

import {UsersTableComponent} from "./components/users-table/users-table.component";



@NgModule({
  declarations: [UsersComponent, UserCardComponent, UsersTableComponent],
  imports: [CommonModule],
})
export class UsersModule {}
