import { Injectable } from '@angular/core';

import { Jsonp } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class PeliculasService {

  private apikey:string = "8c65ca470fb2c8a373d32a73698491b8";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor(private jsonp:Jsonp) { }

  getPopulares() {
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
            .map( res => res.json());
  }

  buscarPelicula(texto:string) {
    let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
            .map( res => res.json());
  }

}
