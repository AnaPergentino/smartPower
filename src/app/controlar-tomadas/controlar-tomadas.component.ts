import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controlar-tomadas',
  templateUrl: './controlar-tomadas.component.html',
  styleUrls: ['./controlar-tomadas.component.scss']
})
export class ControlarTomadasComponent implements OnInit {
  tomadaSelecionada;
  controlarTomada = false;
  tomadas = [
    {nome: 'tomada1', ativo: false, consumoMedio: "X kw", fatorRisco: 4},
    {nome: 'tomada2', ativo: false, consumoMedio: "X kw", fatorRisco: 4},
    {nome: 'tomada3', ativo: false, consumoMedio: "X kw", fatorRisco: 3},
    {nome: 'tomada4', ativo: false, consumoMedio: "X kw", fatorRisco: 0},
    {nome: 'tomada5', ativo: false, consumoMedio: "X kw", fatorRisco: 0},
  ]
  constructor() { }

  ngOnInit() {
  }
  abrirTomada(tomada){
    this.controlarTomada = true;
    this.tomadaSelecionada = tomada;
  }
  trocarEstado(tomadaAlterada){
    let index = this.tomadas.indexOf(tomadaAlterada);
    this.tomadas[index] = tomadaAlterada;
  }
  defineClasse(tomada: Tomada){
    if (tomada.ativo) {
      return tomada.nome + ' _ligada';
    } else {
      return tomada.nome;
    }
  }
}
export interface Tomada {
  nome: string;
  ativo: boolean;
  consumoMedio?: string;
  fatorRisco?: number;
}