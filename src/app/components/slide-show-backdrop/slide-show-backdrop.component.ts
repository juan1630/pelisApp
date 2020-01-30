import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';

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

  constructor() { }

  ngOnInit() {}

}
