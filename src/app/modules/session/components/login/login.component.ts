import { Component, OnInit, Inject, Input } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  code: string;
  username: string;
  password: string;

	constructor() { }

	ngOnInit() {
	}

}
