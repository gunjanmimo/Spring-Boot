import { User } from './../classes/user';
import { RegistrationService } from './../services/registration.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User()
  errorMessage: String
  constructor(private service: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }
  loginUser() {
    this.service.loginUserFromBackend(this.user).subscribe(
      data => {
        console.log("Response receives")
        this.router.navigate(["welcome/" + this.user.userName])
      },
      error => {
        console.log("some error happend")
        this.errorMessage = "bad credentials"
      }
    )
  }
}
