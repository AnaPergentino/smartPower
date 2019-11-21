import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { ControlarGastosComponent } from './controlar-gastos/controlar-gastos.component';
import { ControlarLampadasComponent } from './controlar-lampadas/controlar-lampadas.component';
import { ControlarTomadasComponent } from './controlar-tomadas/controlar-tomadas.component';
import { ChartsModule } from 'ng2-charts';
import { MatIconModule } from '@angular/material/icon';
import { LampadaDetalhadaComponent } from './lampada-detalhada/lampada-detalhada.component';
import { TomadaDetalhadaComponent } from './tomada-detalhada/tomada-detalhada.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    ControlarGastosComponent,
    ControlarLampadasComponent,
    ControlarTomadasComponent,
    LampadaDetalhadaComponent,
    TomadaDetalhadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    ChartsModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
