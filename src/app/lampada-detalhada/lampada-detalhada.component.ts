import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lampada-detalhada',
  templateUrl: './lampada-detalhada.component.html',
  styleUrls: ['./lampada-detalhada.component.scss']
})
export class LampadaDetalhadaComponent implements OnInit {
  @Input() lampada;
  @Output() lampadaAtiva = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }
  trocarEstado(){
    this.lampada.ativo = !this.lampada.ativo;
    console.log(this.lampada.ativo)
    this.lampadaAtiva.emit(this.lampada);
  }
}
