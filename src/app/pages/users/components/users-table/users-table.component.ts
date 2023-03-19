import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {User} from "../../classes/User";

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit{
  //private router: any;
  users: User[];
  user: User;
  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
    });
  }
  constructor(private userService: UserService, private router: Router) {}
  navigateToTableUsers(){
    this.router.navigate(['users-table']);
  }
  navigateToCreateUser(){
    this.router.navigate(['user-create']);
  }
  navigateToCardUsers(){
    this.router.navigate(['users']);
  }
  navigateToEditUser(userId: number) {
    this.router.navigateByUrl(`user-edit/${userId}`);
  }
}
