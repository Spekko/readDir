import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({

  
  selector: 'app-add-server-com',
  templateUrl: './add-server-com.component.html',
  styleUrls: ['../../bootstrap/css/bootstrap.min.css']
})
export class AddServerComComponent implements OnInit {
  

  serverIP: string;
  serverPort: string;
  msg: string;
  valid: boolean;
  
  constructor(private http: HttpClient) { 
    this.valid = false;
  
  }
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  sendNotification(send: string) 
  {
    this.notifyParent.emit(send);
  }

  saveServer(serverIP: string, serverPort: string) 
  {
    this.serverIP = serverIP;
	this.serverPort = serverPort;
	var flag = false;
	try {

		var os = this.http.post('http://'+this.serverIP+':'+this.serverPort+'/getOS', {}).subscribe(data => {
			this.msg = 'Server is running ' + data;
			this.valid = true;
			this.sendNotification(this.serverIP+':'+this.serverPort);
			flag = true;
		});	
		if (!flag) {
			this.msg = "invalid server or port";
			this.valid = false;
			this.sendNotification('-1');
		}
		else
			flag = false;

	} catch (err) {
		this.valid = false;
		this.msg = "invalid server or port";

	}


  }

  ngOnInit() {
  }

}
