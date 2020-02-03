import { Component, OnInit, Input, Output } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slide-shows-pares',
  templateUrl: './slide-shows-pares.component.html',
  styleUrls: ['./slide-shows-pares.component.scss'],
})
export class SlideShowsParesComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  @Output() cargarMas = new EventEmitter

  slidesOpts = {
    slidesPerView: 2.1,
    freeMode: true,
    spaceBetween: -10
  }


  constructor(  private modalCtrl: ModalController   ) { }

  ngOnInit() {}

  onClick() {
    this.cargarMas.emit();
  }

  async verDetalle( id: string ) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps:{ id }
    })
  
    modal.present();
  
  
  }


}
