import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  errorMessage = "invalid credentials"
  invalidLogin = false

  // router instance

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  handleLogin() {
    if (this.username === "gunjan" && this.password === "mimo") {
      // redirect to welcome page
      this.router.navigate(['welcome/' + this.username])
      this.invalidLogin = false
    }
    else {
      this.invalidLogin = true
    }
  }
}
