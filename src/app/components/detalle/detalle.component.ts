import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

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

  constructor( private MovieService: MoviesService, private modalCtrl: ModalController ) { }

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



  regresar() {
    this.modalCtrl.dismiss();
  }


}
