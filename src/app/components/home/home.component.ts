import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { PeliculasService } from "../../services/peliculas.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera:any;
  populares:any;
  pequenos:any;

  constructor(private _ps:PeliculasService) {
    this._ps.getCartelera()
        .subscribe(data => this.cartelera = data);

    this._ps.getPopulares()
        .subscribe(data => this.populares = data);

    this._ps.getPequenos()
        .subscribe(data => this.pequenos = data);
  }

  ngOnInit() {
  }

}
