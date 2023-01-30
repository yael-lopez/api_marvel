import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../services/heroe.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-por-hereo',
  templateUrl: './por-hereo.component.html',
  styles: []
})
export class PorHereoComponent {

  heroes: any[] = [];

  constructor(private heroeService: HeroeService) {
    this.busca();
   }

  busca(){

    this.heroeService.buscaHeroe()
      .subscribe( heroe => {
        this.heroes = heroe.data.results;
      } )
    
  }


}
