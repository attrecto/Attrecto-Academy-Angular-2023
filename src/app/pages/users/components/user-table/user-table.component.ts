import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../classes/User";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
  @Input()
  users: User[];
  constructor(private router: Router) {}

  navigateToEditUser(userId: number) {
    this.router.navigateByUrl(`user-edit/${userId}`);
  }

}
