import { Component, OnInit } from '@angular/core';
import { PeliculaDetalle, Genre } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit  {

  peliculas:PeliculaDetalle[] = [];
  generos: Genre [] = [];

  favoritosGenero: any[] = [];


  constructor( private dataLocal: DataLocalService, 
                private moviService: MoviesService ) {}

  async ngOnInit(){
    this.peliculas = await  this.dataLocal.cargarFavoritos();
   this.generos = await this.moviService.cargarGeneros();
   this.pelisGenero(this.generos, this.peliculas);
  }



pelisGenero( generos: Genre[], peliculas: PeliculaDetalle[] ) {
    this.favoritosGenero = [];

    generos.forEach( genero  => { 

      this.favoritosGenero.push({
        genero: genero.name,
        pelis: peliculas.filter( peli => {

          return peli.genres.find( genre =>  genre.id ===  genero.id )
       
        })
      });

     });   

     console.log( this.favoritosGenero );
    }

}
