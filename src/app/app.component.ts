import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	strings: { [key: string]: string };

	constructor() {
		this.strings.join_now = '立即加入！';
	}
}
