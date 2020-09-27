import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";



export class HelloWorldBeam {
  constructor(public message: string) { }
}


@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  excuteHelloWorldBean(name) {
    return this.http.get<HelloWorldBeam>(`http://localhost:8081/hello-world/path-variable/${name}`)
  }
}
