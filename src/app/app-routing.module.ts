import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { ControlarGastosComponent } from './controlar-gastos/controlar-gastos.component';
import { ControlarLampadasComponent } from './controlar-lampadas/controlar-lampadas.component';
import { ControlarTomadasComponent } from './controlar-tomadas/controlar-tomadas.component';
import { GastosTomadasComponent } from './gastos-tomadas/gastos-tomadas.component';
import { GastosLampadasComponent } from './gastos-lampadas/gastos-lampadas.component';

const routes: Routes = [
  { path: '', component: TelaInicialComponent },
  { path: 'tomadas', component: ControlarTomadasComponent },
  { path: 'lampadas', component: ControlarLampadasComponent },
   { path: 'gastos-tomadas', component: GastosTomadasComponent },
  { path: 'gastos-lampadas', component: GastosLampadasComponent }, 
  { path: 'gastos', component: ControlarGastosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
