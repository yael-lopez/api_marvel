import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-ver-hereo',
  templateUrl: './ver-hereo.component.html',
  styles: [
  ]
})
export class VerHereoComponent{

  heroe: any;

  urlTree: any;

  constructor(private heroeService: HeroeService, private rutaActiva: ActivatedRoute) { 

    this.verHeroe(this.rutaActiva.snapshot.params['id']);

  }

  verHeroe(valor: string){

    this.heroeService.verHeroe(valor)
      .subscribe( heroe=> {
        this.heroe = heroe.data.results[0];
      } )
    
  }

}
