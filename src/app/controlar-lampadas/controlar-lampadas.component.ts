import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controlar-lampadas',
  templateUrl: './controlar-lampadas.component.html',
  styleUrls: ['./controlar-lampadas.component.scss']
})
export class ControlarLampadasComponent implements OnInit {

  constructor() { }
  lampadaSelecionada;
  controlarLampada = false;
  lampadas = ['lampada1', 'lampada2', 'lampada3', 'lampada4', 'lampada5']

  ngOnInit() {
  }
  abrirLampada(lampada){
    this.controlarLampada = true;
    this.lampadaSelecionada = lampada;  }
}
