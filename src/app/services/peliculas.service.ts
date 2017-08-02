import { Injectable } from '@angular/core';

import { Jsonp } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class PeliculasService {

  private apikey:string = "8c65ca470fb2c8a373d32a73698491b8";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor(private jsonp:Jsonp) { }

  getCartelera() {
    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=2017-07-01&primary_release_date.lte=2017-07-15&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
            .map( res => res.json());
  }

  getPopulares() {
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
            .map( res => res.json());
  }

  getPequenos() {
    let url = `${this.urlMoviedb}/discover/movie?certification_country=ES&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
            .map( res => res.json());
  }

  buscarPelicula(texto:string) {
    let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
            .map( res => res.json());
  }

}
