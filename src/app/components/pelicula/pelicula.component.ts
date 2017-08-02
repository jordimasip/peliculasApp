import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  constructor(private router:Router,
              private route:ActivatedRoute) {
    console.log("Entra al PeliculaComponent");
  }

  ngOnInit() {
  }

}
