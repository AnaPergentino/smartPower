import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { ControlarGastosComponent } from './controlar-gastos/controlar-gastos.component';
import { ControlarLampadasComponent } from './controlar-lampadas/controlar-lampadas.component';
import { ControlarTomadasComponent } from './controlar-tomadas/controlar-tomadas.component';


const routes: Routes = [
  { path: '', component: TelaInicialComponent },
  { path: 'tomadas', component: ControlarTomadasComponent },
  { path: 'lampadas', component: ControlarLampadasComponent },
  { path: 'gastos', component: ControlarGastosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
