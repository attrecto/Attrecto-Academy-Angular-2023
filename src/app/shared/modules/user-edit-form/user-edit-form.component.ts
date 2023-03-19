import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../pages/users/services/user.service";
import {Router} from "@angular/router";
import {User} from "../../../pages/users/classes/User";

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.scss']
})
export class UserEditFormComponent implements OnInit {
  @Input() user: User;
  userCreateForm: FormGroup;

  constructor(private userService: UserService, private router: Router){}
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userCreateForm = new FormGroup({
      name: new FormControl(this.user ? this.user.name: '', [Validators.required]),
      image: new FormControl(this.user ? this.user.image: '', [Validators.required])
    })
  }

  saveForm(){

    const userFormData = this.userCreateForm.getRawValue();
    this.userService.createUser(userFormData).subscribe({
      next: () => {
        this.router.navigate(['users']);
      }
    });
  }
}
