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

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    ControlarGastosComponent,
    ControlarLampadasComponent,
    ControlarTomadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    ChartsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
