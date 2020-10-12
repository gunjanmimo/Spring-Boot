import { User } from './../classes/user';
import { RegistrationService } from './../services/registration.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User()
  constructor(private service: RegistrationService) { }

  ngOnInit(): void {
  }
  loginUser() {
    this.service.loginUserFromBackend(this.user).subscribe(
      data => console.log("Response receives"),
      error => console.log("some error happend")
    )
  }
}
