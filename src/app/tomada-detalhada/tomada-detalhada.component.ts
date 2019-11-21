import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tomada-detalhada',
  templateUrl: './tomada-detalhada.component.html',
  styleUrls: ['./tomada-detalhada.component.scss']
})
export class TomadaDetalhadaComponent implements OnInit {
  @Input() tomada;
  @Output() tomadaAtiva = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

}
