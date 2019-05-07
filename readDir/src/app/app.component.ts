import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../bootstrap/css/bootstrap.min.css']
})
export class AppComponent {
  
  showTable: boolean = false;
  serverDetails: string;

  constructor(private http: HttpClient) {

	

  }


  getNotification(evt) 
  {
    if (evt == "-1") {
		this.showTable = false;
	} else {
    	this.showTable = true;
    	this.serverDetails = evt;
	}
  }

  ngOnInit(): void {
	
  }

  

}
