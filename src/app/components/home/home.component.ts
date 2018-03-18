import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	strings: { [key: string]: string } = {};

	constructor() {
		this.strings.join_now = '立即加入！';
	}

	ngOnInit() {
	}

}
