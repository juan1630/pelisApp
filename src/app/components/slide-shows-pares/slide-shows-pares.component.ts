import { Component, OnInit, Input, Output } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { EventEmitter } from '@angular/core';

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


  constructor() { }

  ngOnInit() {}

  onClick() {
    this.cargarMas.emit();
  }

}
