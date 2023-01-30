import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-por-historia',
  templateUrl: './por-historia.component.html',
  styles: [
  ]
})
export class PorHistoriaComponent {

  series: any[] = [];

  constructor(private heroeService: HeroeService) {
    this.fnSeries();
   }

  fnSeries(){

    this.heroeService.buscaSeries()
      .subscribe( serie => {
        this.series = serie.data.results;
      } )
    
  }


}
