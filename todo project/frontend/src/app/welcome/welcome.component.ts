import { WelcomeDataService } from './../services/data/welcome-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = ""
  welcomeMessage = ""
  //activated route 
  constructor(private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
  }
  getWelcomeMessage() {
    //console.log(this.welcomeDataService.excuteHelloWorldBeanService())
    this.welcomeDataService.excuteHelloWorldBeanServiceWithPath(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    )
  }
  handleSuccessfulResponse(response) {
    console.log(response.message)
    this.welcomeMessage = response.message

  }
  handleErrorResponse(error) {
    console.log(error)
    //this.welcomeMessage = error
  }
}
