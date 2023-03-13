import { Component, Input } from '@angular/core';
import { User } from '../../classes/User';

@Component({
  selector: 'tr[app-users-table]',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {
  @Input()
  user: User;
}
