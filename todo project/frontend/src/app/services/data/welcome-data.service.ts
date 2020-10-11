import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export class HelloWorldBean {
  constructor(public message: string) { }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient,
  ) {

  }

  excuteHelloWorldBeanService() {
    let basicAuthHeaderString = this.createBasicAuthHeader()
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean", { headers })
  }
  createBasicAuthHeader() {
    let username = "gunjan"
    let password = "mimo"
    let basicAuthHeader = "Basic" + window.btoa(username + ":" + password)
    return basicAuthHeader
  }
  // /hello-world/path-variable/
  excuteHelloWorldBeanServiceWithPath(name) {
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world/path-variable/" + name)
  }
}
