import {Component, Input} from '@angular/core';

import {Router} from "@angular/router";
import {User} from "../../classes/User";

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {
  @Input()
  users: User[];
  constructor( private router: Router) {}

  navigateToEditUser(userId: number) {
    this.router.navigateByUrl(`user-edit/${userId}`);
  }

}
