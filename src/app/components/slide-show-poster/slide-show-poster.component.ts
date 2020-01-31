import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';

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

  constructor() { }

  ngOnInit() {}

}
