import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slide-show-poster',
  templateUrl: './slide-show-poster.component.html',
  styleUrls: ['./slide-show-poster.component.scss'],
})


export class SlideShowPosterComponent implements OnInit {

  @Input() posters: Pelicula[] = [];

  slidesOpts = {
    slidesPerView: 2.1,
    freeMode: true
  }

  constructor(  private modalCtrl: ModalController    ) { }

  ngOnInit() {}


async  verDetalle( id: string  ) {
    console.log(id);

    const modal = await  this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }

    });


    modal.present();

  }

}
