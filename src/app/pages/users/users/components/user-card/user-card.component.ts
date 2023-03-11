import {Component, Input} from '@angular/core';
import * as https from "https";
import {User} from "../../classes/User";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input()
  user: User;
}
