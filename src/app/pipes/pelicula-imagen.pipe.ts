import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform(pelicula: any, poster:boolean = false): string {

    let url = "http://image.tmdb.org/t/p/w500/";
    let noimage = "assets/img/noimage.png";

    if(poster) {
      return url + pelicula.poster_path;
    }

    if( pelicula.backdrop_path) {
      return url + pelicula.backdrop_path;
    } else {
      if (pelicula.poster_path) {
        return url + pelicula.poster_path;
      } else {
        return noimage;
      }
    }
  }

}
