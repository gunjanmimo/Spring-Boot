import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'gunjan'
  password = 'mimo'
  errorMessage = "invalid credentials"
  invalidLogin = false

  // router instance

  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }
  handleLogin() {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      // redirect to welcome page
      this.router.navigate(['welcome/ ' + this.username])
      this.invalidLogin = false
    }
    else {
      this.invalidLogin = true
    }
  }
}
