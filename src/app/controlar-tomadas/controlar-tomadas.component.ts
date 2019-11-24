import { Component, OnInit } from '@angular/core';
import { SmartPowerServiceService } from '../smart-power-service.service'

@Component({
  selector: 'app-controlar-tomadas',
  templateUrl: './controlar-tomadas.component.html',
  styleUrls: ['./controlar-tomadas.component.scss']
})
export class ControlarTomadasComponent implements OnInit {
  tomadaSelecionada;
  controlarTomada = false;
  tomadas = [];
  constructor(private servico: SmartPowerServiceService) { }

  ngOnInit() {
    this.tomadas = this.servico.tomadas
  }
  abrirTomada(tomada){
    this.controlarTomada = true;
    this.tomadaSelecionada = tomada;
  }
  trocarEstado(tomadaAlterada){
    let index = this.tomadas.indexOf(tomadaAlterada);
    this.tomadas[index] = tomadaAlterada;
    this.atualizaLampadasServico()
  }
  atualizaLampadasServico() {
    this.servico.tomadas = this.tomadas;
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