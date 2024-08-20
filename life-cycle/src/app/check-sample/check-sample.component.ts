import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent
implements OnInit,
					 DoCheck,
					 AfterContentChecked,
					 AfterContentInit,
					 AfterViewChecked,
					 AfterViewInit
{

  constructor() {

	}

	ngAfterViewInit(): void {
		console.log("ngAfterViewInit");
	}

	ngAfterViewChecked(): void {
		console.log("ngAfterViewChecked");
	}

	ngAfterContentInit(): void {
		console.log("ngAfterContentInit");
	}

	ngAfterContentChecked(): void {
		console.log("ngAfterContentChecked");
	}

	ngDoCheck(): void {
		console.log("ngDoCheck");
	}

  ngOnInit(): void {
		console.log("ngOnInit");
  }

}
