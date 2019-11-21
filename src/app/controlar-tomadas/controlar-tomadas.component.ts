import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controlar-tomadas',
  templateUrl: './controlar-tomadas.component.html',
  styleUrls: ['./controlar-tomadas.component.scss']
})
export class ControlarTomadasComponent implements OnInit {
  tomadaSelecionada;
  controlarTomada = false;
  tomadas = ['tomada1', 'tomada2', 'tomada3', 'tomada4', 'tomada5']
  constructor() { }

  ngOnInit() {
  }
  abrirTomada(tomada){
    this.controlarTomada = true;
    this.tomadaSelecionada = tomada;

  }
}
