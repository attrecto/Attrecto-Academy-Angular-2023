import { Component, OnInit } from '@angular/core';
import { User } from './classes/Users';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:User[];

  constructor(private userService:UserService){}
  ngOnInit(): void {
    this.getusers();
  }

  getusers(){
    this.userService.getUsers().subscribe({next:(users:User[]) => {
      this.users=users;
    }});
  }
}
