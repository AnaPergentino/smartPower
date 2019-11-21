import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controlar-lampadas',
  templateUrl: './controlar-lampadas.component.html',
  styleUrls: ['./controlar-lampadas.component.scss']
})
export class ControlarLampadasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  abrirLampada(lampada){
    console.log(lampada)
  }
}
