import { Component, OnInit } from '@angular/core';
import { SmartPowerServiceService } from '../smart-power-service.service'

@Component({
  selector: 'app-controlar-lampadas',
  templateUrl: './controlar-lampadas.component.html',
  styleUrls: ['./controlar-lampadas.component.scss']
})
export class ControlarLampadasComponent implements OnInit {
  lampadaSelecionada;
  controlarLampada = false;
  lampadas = []
  constructor(private servico: SmartPowerServiceService) { }

  ngOnInit() {
    this.lampadas = this.servico.lampadas;
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
    this.atualizaLampadasServico()
  }
  atualizaLampadasServico() {
    this.servico.lampadas = this.lampadas;
  }
}
export interface Lampada{
  nome: string;
  ativo: boolean;
  consumoMedio?: string;
  timerLigar?: Date;
  timerDesligar?: Date;
}

