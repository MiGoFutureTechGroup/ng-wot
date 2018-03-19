import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-welcome',
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
	strings: { [key: string]: string } = {};

	constructor() {
		this.strings.join_now = '立即加入！';
	}

	ngOnInit() {
	}

}
