import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../bootstrap/css/bootstrap.min.css']
})
export class AppComponent {
  
  showTable: boolean = false; //variable used to make the table with dir contents visible
  serverDetails: string;

  constructor(private http: HttpClient) {

	

  }

  /**
  *EventEmitter function. called when the component add-server-com gains connection and 
  *retrieves the operating system of the server successfully.
  *If connection was successful the server details are stored in serverDetrails
  **/
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
