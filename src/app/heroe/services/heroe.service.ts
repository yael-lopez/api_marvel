import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  private apiUrl: string = 'https://gateway.marvel.com';
  private apiKey: string = 'e769586fdfda1b2db73579d9ffa9dcf0';
  private hash: string = '02bbb2f3362cf6aa70e87c69ac16a5ef';
  private ts: string = '1';

  constructor(private http: HttpClient) { }

  buscaHeroe(): Observable<any>{

    let url = `${this.apiUrl}/v1/public/characters?apikey=${this.apiKey}&hash=${this.hash}&ts=${this.ts}`;
    return this.http.get( url );

  }

  verHeroe(termino: string): Observable<any>{

    let url = `${this.apiUrl}/v1/public/characters/${termino}?apikey=${this.apiKey}&hash=${this.hash}&ts=${this.ts}`;
    return this.http.get( url );

  }

  buscaComic(): Observable<any>{

    let url = `${this.apiUrl}/v1/public/comics?apikey=${this.apiKey}&hash=${this.hash}&ts=${this.ts}`;
    return this.http.get( url );

  }

  buscaSeries(): Observable<any>{

    let url = `${this.apiUrl}/v1/public/series?apikey=${this.apiKey}&hash=${this.hash}&ts=${this.ts}`;
    return this.http.get( url );

  }

}
