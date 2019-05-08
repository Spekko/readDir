import { Component, OnInit, EventEmitter, Input, Output, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ScrollDispatchModule, ScrollDispatcher } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-output-table',
  templateUrl: './output-table.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.min.css']
})


export class OutputTableComponent implements OnInit {

  @Input() serverDetails;
  fileList = {};
  flag;

  constructor(private http: HttpClient) { }
  
  /**
  *Function to return iterable array to loop through directory contents
  **/
  keys() : Array<string> {
    
    return Object.keys(this.fileList);
  }



  /**
  *Function to send post request to node servers /getDir which retrieves directory contents of given directory
  *stored in fileList
  **/
  process(path: string)
  {

    try {
	  var httpHeaders = new HttpHeaders()
		.set('content-type', 'application/json');

      
	  
      var details = this.http.post('http://'+this.serverDetails+'/getDir/', "path="+path, {headers: httpHeaders}).subscribe(data => {
	    //console.log(data);
        this.fileList = data;
		this.flag = data;

	  });

	} catch (err) {
	}
  }

  ngOnInit() {

    console.log(this.serverDetails);


  }

}
