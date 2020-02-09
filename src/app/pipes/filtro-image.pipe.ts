import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroImage'
})
export class FiltroImagePipe implements PipeTransform {

  transform( peliculas: any[] ): any[] {
   return  peliculas.filter( peli => {
      return peli.backdrop_path;
    });
  }

}
