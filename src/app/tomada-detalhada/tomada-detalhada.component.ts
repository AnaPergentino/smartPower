import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tomada } from '../controlar-tomadas/controlar-tomadas.component'

@Component({
  selector: 'app-tomada-detalhada',
  templateUrl: './tomada-detalhada.component.html',
  styleUrls: ['./tomada-detalhada.component.scss']
})
export class TomadaDetalhadaComponent implements OnInit {
  @Input() tomada: Tomada;
  @Output() tomadaAtiva = new EventEmitter;
  fatoresRiscos = [0,1,2,3,4]
  constructor() { }

  ngOnInit() {

  }
  trocarEstado(){
    this.tomada.ativo = !this.tomada.ativo;
    console.log(this.tomada.ativo)
    this.tomadaAtiva.emit(this.tomada);
  }

}
