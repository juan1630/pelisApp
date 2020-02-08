import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  peliculas: PeliculaDetalle[] =[];
  mensaje = '';

  constructor( private storage: Storage,
                private toasCtrl: ToastController ) { 
                  this.cargarFavoritos();
                }



async prensetToast( message: string ){
  const toast = await this.toasCtrl.create({
    message,
    duration: 2000
  });
  toast.present();
}


  guardarPelicula( pelicula: PeliculaDetalle ) {

    let existe = false;

    for( const peli  of  this.peliculas ){
      if( peli.id === pelicula.id ){
        existe = true;
        break;
      }
    }

    if( existe ){
      this.peliculas = this.peliculas.filter( peli => peli.id !== pelicula.id );
      this.mensaje = 'Removido de los favoritos';
    } else {

      this.peliculas.push(pelicula);
      this.mensaje = 'Agregada a favoritos'
    }
    this.prensetToast(this.mensaje);
    this.storage.set('peliculas', this.peliculas);
  
  return !existe;
  
  }




async  cargarFavoritos(){
    // este metodo carga las peliculas del storage
    const peliculas = await this.storage.get('peliculas');
    this.peliculas = peliculas || [];
    return this.peliculas;
  }


 async existePelicula( id ) {
    id = Number(id)

    this.cargarFavoritos();
    const existe = this.peliculas.find( peli => peli.id === id );
    return (existe)? true: false;
  }


}
