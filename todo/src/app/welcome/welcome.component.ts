// import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBeam, WelcomeDataService } from '../service/data/welcome-data.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = " "
  welcomeMessage = ""
  // activated route
  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }


  getWelcomeMessage() {
    console.log(this.service.excuteHelloWorldBean())
    this.service.excuteHelloWorldBean().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    console.log("last line of welcome message")
  }



  handleSuccessfulResponse(response) {
    console.log(response.message)
    //console.log(response.message)
    this.welcomeMessage = response.message
  }


}
