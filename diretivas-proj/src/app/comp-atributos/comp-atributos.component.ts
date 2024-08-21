import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {
  estilo: string = 'enable';

  corFundo:string = "blue";
  corFonte:string = "red";

  item: string = '';
  lista: string[] = [];

  constructor() { }

  adicionarLista(){
    this.lista.push(this.item);
  }

  ngOnInit(): void {

  }

  trocar(){
    if (this.estilo === "enable"){
      this.estilo = "disable";
    }else{
      this.estilo = "enable";
    }
  }

}
