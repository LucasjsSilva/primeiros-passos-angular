import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	isAliveCheckSample: boolean = true;
  title = 'life-cycle';

	constructor(){

	}

	disposeCheckSample(): void{
		this.isAliveCheckSample = false;
	}
}
