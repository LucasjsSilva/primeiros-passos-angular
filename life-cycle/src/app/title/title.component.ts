import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {
	@Input()
	nome: string = ""
  constructor() { }

  ngOnInit(): void {
		console.log("Inicializando")
  }

	ngOnChanges(): void {
		console.log("Houve Mudanças")
	}

}
