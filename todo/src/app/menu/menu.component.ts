import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //userLoginStatus: boolean = false
  constructor(public authenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
    //this.userLoginStatus = this.authenticationService.isUserLoggedIn()
  }

}
