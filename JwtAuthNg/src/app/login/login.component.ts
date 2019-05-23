import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../shared';
import { LoginCredentials } from '../shared/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public userService: UserService) { }

  ngOnInit() { }

  login(form: NgForm) {
    this.userService.login(form.value as LoginCredentials);
  }

  logOut() {
    this.userService.logOut();
  }
}
