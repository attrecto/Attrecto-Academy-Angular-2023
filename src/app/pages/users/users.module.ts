import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersComponent} from "./users.component";
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserTableComponent } from './components/user-table/user-table.component';



@NgModule({
  declarations: [UsersComponent, UserCardComponent, UserTableComponent],
  imports: [CommonModule],
})
export class UsersModule {}
