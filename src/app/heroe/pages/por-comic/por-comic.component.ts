import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-por-comic',
  templateUrl: './por-comic.component.html',
  styles: [
  ]
})
export class PorComicComponent {

  comic: any[] = [];

  constructor(private heroeService: HeroeService) {
    this.fnComic();
   }

  fnComic(){

    this.heroeService.buscaComic()
      .subscribe( comic => {
        this.comic = comic.data.results;
      } )
    
  }

}
