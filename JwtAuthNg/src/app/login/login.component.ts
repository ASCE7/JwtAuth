import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  invalidLogin = true;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {}

  login(form: NgForm) {
    const credentials = JSON.stringify(form.value);
    this.http
      .post('http://localhost:5000/api/auth/login', credentials, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .subscribe(
        response => {
          const token = (response as any).token;
          localStorage.setItem('jwt', token);
          this.invalidLogin = false;
          this.router.navigate(['/']);
        },
        () => {
          this.invalidLogin = true;
        }
      );
  }

  logOut() {
    localStorage.removeItem('jwt');
  }
}
