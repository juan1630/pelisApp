import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = "";
  ideas: string[] = ['Spiderman', 'Batman inicia', 'Aquaman' ,'Superman', 'El señor de los anillos'];
  peliculas: Pelicula[] = [];
  buscando = false;

  constructor( private moviService: MoviesService,
              private modalCtrl: ModalController  ) {}

  buscar(event){
    this.buscando = true;
    const valor : string = event.detail.value;
    
    if( valor.length === 0 ){
      this.buscando = false;
      this.peliculas = [];
      return;
    }
    
    this.moviService.buscarPeliculas(valor)
    .subscribe( resp => {


      this.peliculas = resp['results'];
      console.log(this.peliculas);
      this.buscando = false;
      // nos regresa la consulta de buscar pelicula
    } )

  }


  getLabel( event) {
    console.log(event);
  }

  async  abrirDetalle( id: number ){
    
 const modal = await this.modalCtrl.create({
    component: DetalleComponent,
    componentProps: {
      id
    }
  });
  
  modal.present()
}

}
