import { Injectable } from '@angular/core';
import { Tomada } from './controlar-tomadas/controlar-tomadas.component'
import { Lampada } from './controlar-lampadas/controlar-lampadas.component'

@Injectable({
  providedIn: 'root'
})
export class SmartPowerServiceService {
  lampadas = [
    {nome: 'lampada1', ativo: false, consumoMedio: "2,2 kw", timerLigar: new Date(Date.now()), timerDesligar: new Date(Date.now())},
    {nome: 'lampada2', ativo: false, consumoMedio: "2,5 kw", timerLigar: new Date(Date.now()), timerDesligar: new Date(Date.now())},
    {nome: 'lampada3', ativo: false, consumoMedio: "3,2 kw", timerLigar: new Date(Date.now()), timerDesligar: new Date(Date.now())},
    {nome: 'lampada4', ativo: false, consumoMedio: "2,3 kw", timerLigar: new Date(Date.now()), timerDesligar: new Date(Date.now())},
    {nome: 'lampada5', ativo: false, consumoMedio: "2,2 kw", timerLigar: new Date(Date.now()), timerDesligar: new Date(Date.now())},
  ];
  tomadas = [
    {nome: 'tomada1', ativo: false, consumoMedio: "25 kw", fatorRisco: 4},
    {nome: 'tomada2', ativo: false, consumoMedio: "21 kw", fatorRisco: 4},
    {nome: 'tomada3', ativo: false, consumoMedio: "19 kw", fatorRisco: 3},
    {nome: 'tomada4', ativo: false, consumoMedio: "22 kw", fatorRisco: 0},
    {nome: 'tomada5', ativo: false, consumoMedio: "18 kw", fatorRisco: 0},
  ]
  constructor() { }
}
