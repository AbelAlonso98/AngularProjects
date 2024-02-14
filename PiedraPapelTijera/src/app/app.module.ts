import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './rock-paper-scissors/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Page404Component } from './page404/page404.component';
import { TresEnRayaComponent } from './tic-tac-toe/tres-en-raya.component';
import { SquareComponent } from './square/square.component';
import {MatButtonModule} from '@angular/material/button';
import { ListaTarjetasComponent } from './lista-tarjetas/lista-tarjetas.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';




@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    LandingPageComponent,
    Page404Component,
    TresEnRayaComponent,
    SquareComponent,
    ListaTarjetasComponent,
    TarjetaComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
