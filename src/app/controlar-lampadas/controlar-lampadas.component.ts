import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controlar-lampadas',
  templateUrl: './controlar-lampadas.component.html',
  styleUrls: ['./controlar-lampadas.component.scss']
})
export class ControlarLampadasComponent implements OnInit {
  lampadaSelecionada;
  controlarLampada = false;
  lampadas = [
    {nome: 'lampada1', ativo: false, consumoMedio: "X kw", timerLigar: new Date(Date.now()), timerDesligar: new Date(Date.now())},
    {nome: 'lampada2', ativo: false, consumoMedio: "X kw", timerLigar: new Date(Date.now()), timerDesligar: new Date(Date.now())},
    {nome: 'lampada3', ativo: false, consumoMedio: "X kw", timerLigar: new Date(Date.now()), timerDesligar: new Date(Date.now())},
    {nome: 'lampada4', ativo: false, consumoMedio: "X kw", timerLigar: new Date(Date.now()), timerDesligar: new Date(Date.now())},
    {nome: 'lampada5', ativo: false, consumoMedio: "X kw", timerLigar: new Date(Date.now()), timerDesligar: new Date(Date.now())},
  ]
  constructor() { }

  ngOnInit() {
  }
  abrirLampada(lampada){
    this.controlarLampada = true;
    this.lampadaSelecionada = lampada;
  }
  defineClasse(lampada: Lampada){
    if (lampada.ativo) {
      return lampada.nome + ' _ligada';
    } else {
      return lampada.nome;
    }
  }
  trocarEstado(lampadaAlterada){
    let index = this.lampadas.indexOf(lampadaAlterada);
    this.lampadas[index] = lampadaAlterada;
  }
}
export interface Lampada{
  nome: string;
  ativo: boolean;
  consumoMedio?: string;
  timerLigar?: Date;
  timerDesligar?: Date;
}

