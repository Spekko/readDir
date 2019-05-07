import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Component({
  selector: 'app-output-table',
  templateUrl: './output-table.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.min.css']
})


export class OutputTableComponent implements OnInit {

  @Input() serverDetails;
  fileList = {};

  constructor(private http: HttpClient) { }
  
  keys() : Array<string> {
    
    return Object.keys(this.fileList);
  }

  attributes(key: string) : Array<string> {
    return Object.keys(this.fileList[key]);
  }



  process(path: string)
  {


    try {
	  var httpHeaders = new HttpHeaders()
		.set('content-type', 'application/json');

      
	  
      var details = this.http.post('http://'+this.serverDetails+'/getDir/', "path="+path, {headers: httpHeaders}).subscribe(data => {
		//console.log(this.fileList['spekko']);
        this.fileList = data;

	  });

	} catch (err) {
	}
  }

  ngOnInit() {

    console.log(this.serverDetails);


  }

}
