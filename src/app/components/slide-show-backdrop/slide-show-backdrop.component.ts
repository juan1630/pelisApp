import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slide-show-backdrop',
  templateUrl: './slide-show-backdrop.component.html',
  styleUrls: ['./slide-show-backdrop.component.scss'],
})
export class SlideShowBackdropComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];

  slidesOpts = {
    slidesPerView: 1.1,
    freeMode: true
  }

  constructor(  private modalCtrl: ModalController  ) {

   }

  ngOnInit() {  }


async   verDetalle( id: string  ) {
    console.log(id);

   const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps:{
        id
      }
    });

    modal.present();

  }




}
