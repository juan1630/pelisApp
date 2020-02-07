import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;
  pelicula: PeliculaDetalle = {};
  oculto = 150;
  actores: Cast[] = []; 
  slideOptAcotres = {
    slidesPerView: 3.3,
    freeMode:true,
    spaceBetween: -5
  }

  constructor( private MovieService: MoviesService, 
              private modalCtrl: ModalController,
              private dataLocal: DataLocalService ) { }

  ngOnInit() {
    this.MovieService.getDetalle( this.id )
    .subscribe( (data) => {
      console.log( data );
      this.pelicula = data;
    });

    this.MovieService.getActores(this.id)
    .subscribe( (resp ) => {
      this.actores = resp.cast;
        console.log(resp);
      });


  }

  favorito(){
    this.dataLocal.guardarPelicula( this.pelicula );
  }


  regresar() {
    this.modalCtrl.dismiss();
  }


}
