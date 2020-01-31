import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

    peliculasReientes: Pelicula[] = [];
    populares: Pelicula[] = [];

    

  constructor(  private movieService: MoviesService   ) {}


  ngOnInit(){

    this.movieService.getFeacture().subscribe( 
      (response) => { 
        this.peliculasReientes = response.results;
      });

      this.getPopulares();
      

      // onint
  }

  cargarMas() {
    this.getPopulares();
  }


  getPopulares() {
    this.movieService.getPopulares().subscribe(
      (resp) => {

        const arrTemp = [...this.populares, ...resp.results];

        this.populares = arrTemp;
      
      }
    )
  }
  

}
