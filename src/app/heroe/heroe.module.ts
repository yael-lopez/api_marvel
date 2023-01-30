import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PorHereoComponent } from './pages/por-hereo/por-hereo.component';
import { PorComicComponent } from './pages/por-comic/por-comic.component';
import { VerHereoComponent } from './pages/ver-hereo/ver-hereo.component';
import { PorHistoriaComponent } from './pages/por-historia/por-historia.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PorHereoComponent,
    PorComicComponent,
    VerHereoComponent,
    PorHistoriaComponent
  ],
  exports: [
    PorHereoComponent,
    PorComicComponent,
    VerHereoComponent,
    PorHistoriaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class HeroeModule { }
