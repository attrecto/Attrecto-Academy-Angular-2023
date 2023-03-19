import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {
  userCreateForm: FormGroup;

  constructor(){
    this.initForm();
  }

  initForm(){
    this.userCreateForm = new FormGroup({
    name: new FormControl(),
      avatarUrl: new FormControl()
    });
  }
}
