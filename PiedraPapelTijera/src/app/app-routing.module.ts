import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './rock-paper-scissors/game.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Page404Component } from './page404/page404.component';
import { TresEnRayaComponent } from './tic-tac-toe/tres-en-raya.component';

const routes: Routes = [
  // Si lo dejo vacio, entra por defecto en este
  {path: '', component: LandingPageComponent},
  
  // Cada una de las rutas que tendremos disponibles
  {path: 'rock-paper-scissors', component: GameComponent},
  {path: 'tic-tac-toe', component:TresEnRayaComponent},

  // LLama a una ruta que no existe, son dos *. Tiene que estar abajo del todo, si la pones arriba,
  // todas las paginas llevarían a Page404
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
