import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username, password) {
    if (username === "gunjan" && password === "mimo") {
      sessionStorage.setItem("authenticatedUser", username)
      return true
    } else {
      return false
    }
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser")
    return !(user == null)
  }
}
